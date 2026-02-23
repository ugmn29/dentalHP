'use client';
import { useState, useCallback } from 'react';

const IMAGE_SERVER = 'http://localhost:3002';
const isDev = process.env.NODE_ENV === 'development';

interface PageImageProps {
  path: string;
  imageId?: string;
  alt: string;
  className?: string;
}

export function PageImage({ path, imageId = 'hero', alt, className = '' }: PageImageProps) {
  const [hasError, setHasError] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const src = `/images/pages${path}/${imageId}.jpg`;

  const handleUpload = useCallback(async (file: File) => {
    setUploading(true);
    setPreviewUrl(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('file', file);
    formData.append('path', path);
    formData.append('imageId', imageId);

    try {
      const res = await fetch(`${IMAGE_SERVER}/upload`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setUploaded(true);
        setHasError(false);
      }
    } catch {
      // サーバー未起動
    } finally {
      setUploading(false);
    }
  }, [path, imageId]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleUpload(file);
    }
  }, [handleUpload]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(file);
  }, [handleUpload]);

  // アップロード後のプレビュー表示
  if (previewUrl) {
    return (
      <div className="relative">
        <img
          src={previewUrl}
          alt={alt}
          className={className || 'w-full h-auto rounded-lg'}
        />
        {uploading && (
          <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm">アップロード中...</span>
          </div>
        )}
      </div>
    );
  }

  // 画像が存在する場合
  if (!hasError && !uploaded) {
    return (
      <img
        src={src}
        alt={alt}
        className={className || 'w-full h-auto rounded-lg'}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    );
  }

  // 開発モード: 画像がない場合はドロップゾーンを表示
  if (isDev && hasError) {
    return (
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`relative border-2 border-dashed rounded-lg my-4 transition-colors ${
          isDragging
            ? 'border-[#C5A572] bg-[#C5A572]/10'
            : 'border-gray-300 bg-gray-50 hover:border-gray-400'
        } ${className}`}
      >
        <label className="cursor-pointer flex flex-col items-center justify-center py-12 px-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="text-4xl text-gray-300 mb-3">+</div>
          <p className="text-gray-500 text-sm font-medium mb-1">
            ここに画像をドロップ
          </p>
          <p className="text-gray-400 text-xs mb-2">
            またはクリックして選択
          </p>
          <p className="text-gray-300 text-xs font-mono">
            {path}/{imageId}.jpg
          </p>
        </label>
      </div>
    );
  }

  // 本番: 画像なし → 何も表示しない
  return null;
}
