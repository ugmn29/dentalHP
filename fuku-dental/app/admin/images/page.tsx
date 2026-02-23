'use client';
import { useState, useCallback, useEffect } from 'react';
import { pageImageSlots } from '@/lib/pageImageConfig';

const IMAGE_SERVER = 'http://localhost:3002';

type ImageStatus = Record<string, Record<string, boolean>>;

function ImageSlot({
  pagePath,
  slotId,
  imageExists,
  onUpload,
  onDelete,
}: {
  pagePath: string;
  slotId: string;
  imageExists: boolean;
  onUpload: (file: File) => void;
  onDelete: () => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const src = `/images/pages${pagePath}/${slotId}.jpg`;

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith('image/')) {
        setPreviewUrl(URL.createObjectURL(file));
        onUpload(file);
      }
    },
    [onUpload]
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setPreviewUrl(URL.createObjectURL(file));
        onUpload(file);
      }
    },
    [onUpload]
  );

  if (imageExists || previewUrl) {
    return (
      <div className="border rounded-lg p-3 bg-white">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-mono text-gray-600">{slotId}.jpg</span>
          <button
            onClick={() => {
              setPreviewUrl(null);
              onDelete();
            }}
            className="text-red-500 hover:text-red-700 text-sm px-2 py-1 rounded hover:bg-red-50"
          >
            削除
          </button>
        </div>
        <img
          src={previewUrl || `${src}?t=${Date.now()}`}
          alt={`${pagePath} ${slotId}`}
          className="w-full h-32 object-cover rounded"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
    );
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
        isDragging
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-300 hover:border-gray-400 bg-gray-50'
      }`}
    >
      <label className="cursor-pointer block">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
        <p className="text-gray-500 text-sm mb-1">
          {slotId}.jpg をここにドロップ
        </p>
        <p className="text-gray-400 text-xs">またはクリックして選択</p>
      </label>
    </div>
  );
}

export default function AdminImagesPage() {
  const [imageStatus, setImageStatus] = useState<ImageStatus>({});
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [uploadingKey, setUploadingKey] = useState<string | null>(null);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  // 全画像の存在チェック（一括）
  useEffect(() => {
    async function checkAllImages() {
      try {
        const res = await fetch(`${IMAGE_SERVER}/check-all`);
        const serverStatus = await res.json();

        // サーバーのレスポンスを全ページ分のステータスにマッピング
        const status: ImageStatus = {};
        for (const category of pageImageSlots) {
          for (const page of category.pages) {
            status[page.path] = {};
            for (const slot of page.slots) {
              status[page.path][slot] = serverStatus[page.path]?.[slot] || false;
            }
          }
        }
        setImageStatus(status);
      } catch {
        // サーバー未起動の場合は全てfalse
        const status: ImageStatus = {};
        for (const category of pageImageSlots) {
          for (const page of category.pages) {
            status[page.path] = {};
            for (const slot of page.slots) {
              status[page.path][slot] = false;
            }
          }
        }
        setImageStatus(status);
        setMessage({ text: '画像サーバーに接続できません。node scripts/image-server.js を起動してください。', type: 'error' });
      }
    }
    checkAllImages();
  }, []);

  const handleUpload = useCallback(
    async (pagePath: string, slotId: string, file: File) => {
      const key = `${pagePath}/${slotId}`;
      setUploadingKey(key);
      setMessage(null);

      const formData = new FormData();
      formData.append('file', file);
      formData.append('path', pagePath);
      formData.append('imageId', slotId);

      try {
        const res = await fetch(`${IMAGE_SERVER}/upload`, {
          method: 'POST',
          body: formData,
        });
        const data = await res.json();

        if (data.success) {
          setImageStatus((prev) => ({
            ...prev,
            [pagePath]: { ...prev[pagePath], [slotId]: true },
          }));
          setMessage({ text: `${pagePath}/${slotId}.jpg をアップロードしました`, type: 'success' });
        } else {
          setMessage({ text: `アップロード失敗: ${data.error}`, type: 'error' });
        }
      } catch {
        setMessage({ text: 'アップロード中にエラーが発生しました', type: 'error' });
      } finally {
        setUploadingKey(null);
      }
    },
    []
  );

  const handleDelete = useCallback(
    async (pagePath: string, slotId: string) => {
      setMessage(null);
      try {
        const res = await fetch(`${IMAGE_SERVER}/delete`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ path: pagePath, imageId: slotId }),
        });
        const data = await res.json();

        if (data.success) {
          setImageStatus((prev) => ({
            ...prev,
            [pagePath]: { ...prev[pagePath], [slotId]: false },
          }));
          setMessage({ text: `${pagePath}/${slotId}.jpg を削除しました`, type: 'success' });
        }
      } catch {
        setMessage({ text: '削除中にエラーが発生しました', type: 'error' });
      }
    },
    []
  );

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  // 統計
  const totalSlots = pageImageSlots.reduce(
    (acc, cat) => acc + cat.pages.reduce((a, p) => a + p.slots.length, 0),
    0
  );
  const filledSlots = Object.values(imageStatus).reduce(
    (acc, page) =>
      acc + Object.values(page).filter(Boolean).length,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">画像管理</h1>
        <p className="text-gray-500 mb-6">
          各ページのH1下に表示される画像を管理します。画像をドラッグ＆ドロップで配置できます。
        </p>

        {/* 統計 */}
        <div className="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-600">
              画像配置状況: <span className="font-bold text-blue-600">{filledSlots}</span> / {totalSlots}
            </div>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${totalSlots > 0 ? (filledSlots / totalSlots) * 100 : 0}%` }}
              />
            </div>
          </div>
        </div>

        {/* メッセージ */}
        {message && (
          <div
            className={`rounded-lg p-3 mb-4 text-sm ${
              message.type === 'success'
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* カテゴリ一覧 */}
        <div className="space-y-4">
          {pageImageSlots.map((category) => {
            const isExpanded = expandedCategories[category.category] !== false;
            const categoryFilled = category.pages.reduce(
              (acc, page) =>
                acc +
                page.slots.filter(
                  (slot) => imageStatus[page.path]?.[slot]
                ).length,
              0
            );
            const categoryTotal = category.pages.reduce(
              (acc, page) => acc + page.slots.length,
              0
            );

            return (
              <div key={category.category} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{isExpanded ? '▼' : '▶'}</span>
                    <h2 className="text-lg font-bold text-gray-800">{category.category}</h2>
                    <span className="text-sm text-gray-500">
                      ({categoryFilled}/{categoryTotal})
                    </span>
                  </div>
                </button>

                {isExpanded && (
                  <div className="border-t divide-y">
                    {category.pages.map((page) => (
                      <div key={page.path} className="px-6 py-4">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h3 className="font-bold text-gray-700">{page.label}</h3>
                            <p className="text-sm text-gray-400 font-mono">{page.path}</p>
                          </div>
                          <a
                            href={page.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 text-sm"
                          >
                            ページを確認 →
                          </a>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {page.slots.map((slot) => (
                            <ImageSlot
                              key={`${page.path}/${slot}`}
                              pagePath={page.path}
                              slotId={slot}
                              imageExists={imageStatus[page.path]?.[slot] || false}
                              onUpload={(file) => handleUpload(page.path, slot, file)}
                              onDelete={() => handleDelete(page.path, slot)}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* フッター */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>開発専用ページ - 本番ビルドには含まれません</p>
          <p className="mt-1">
            画像は /public/images/pages/ に保存されます
          </p>
        </div>
      </div>
    </div>
  );
}
