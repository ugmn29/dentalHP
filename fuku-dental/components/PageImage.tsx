'use client';
import { useState, useCallback, useEffect } from 'react';

const IMAGE_SERVER = 'http://localhost:3002';
const isDev = process.env.NODE_ENV === 'development';

const fallbackImages: Record<string, string> = {
  '/homepage/feature1': '/images/pages/homepage/カウンセリングで医師と患者が話している場面.jpg',
  '/homepage/feature2': '/images/pages/kidsortho/親子が歯科医師と相談している場面.jpg',
  '/homepage/feature3': '/images/pages/homepage/治療中の場面.jpg',
  '/homepage/feature4': '/images/pages/homepage/治療中の場面.jpg',
  '/homepage/feature5': '/images/pages/homepage/治療中の場面.jpg',
  '/homepage/feature6': '/images/pages/homepage/カウンセリングで医師と患者が話している場面.jpg',
  '/homepage/doctor': '/images/recruit/director.png',
  '/homepage/facility1': '/images/pages/homepage/受付で挨拶している場面.jpg',
  '/homepage/facility2': '/images/hero-bg.png',
  '/homepage/facility3': '/images/pages/kidsortho/子供がレントゲン撮影をしている場面.jpg',
  '/homepage/facility4': '/images/pages/kidsortho/笑顔の子供が歯を見せている場面.jpg',
};

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
  const fallbackSrc = fallbackImages[`${path}/${imageId}`];
  const displaySrc = fallbackSrc || src;

  // Dev mode: proactively check if image exists so dropzone appears reliably
  useEffect(() => {
    if (!isDev) return;
    if (fallbackSrc) return;
    let cancelled = false;
    fetch(src, { method: 'HEAD' })
      .then((res) => {
        if (!cancelled) setHasError(!res.ok);
      })
      .catch(() => {
        if (!cancelled) setHasError(true);
      });
    return () => { cancelled = true; };
  }, [fallbackSrc, src]);

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
  if ((!hasError || fallbackSrc) && !uploaded) {
    // Dev modeでは既存画像の上に置き換えオーバーレイを追加
    if (isDev) {
      return (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          className={`relative group ${isDragging ? 'ring-4 ring-[#8B92AB]' : ''}`}
        >
          <img
            src={displaySrc}
            alt={alt}
            className={className || 'w-full h-auto rounded-lg'}
            onError={() => setHasError(true)}
          />
          <label className="absolute inset-0 cursor-pointer opacity-0 hover:opacity-100 bg-black/50 transition-opacity flex flex-col items-center justify-center text-white rounded-lg">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <div className="text-3xl mb-1">🔄</div>
            <p className="text-sm font-medium">画像を入れ替え</p>
            <p className="text-xs opacity-80 mt-1">ドロップまたはクリック</p>
          </label>
          {isDragging && (
            <div className="absolute inset-0 bg-[#8B92AB]/30 rounded-lg flex items-center justify-center pointer-events-none">
              <span className="text-white font-bold">ドロップして入れ替え</span>
            </div>
          )}
        </div>
      );
    }
    return (
      <img
        src={displaySrc}
        alt={alt}
        className={className || 'w-full h-auto rounded-lg'}
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
        className={`border-2 border-dashed transition-colors flex flex-col items-center justify-center ${
          isDragging
            ? 'border-[#C5A572] bg-[#C5A572]/10'
            : 'border-gray-300 bg-gray-50 hover:border-gray-400'
        } ${className}`}
      >
        <label className="cursor-pointer flex flex-col items-center justify-center w-full h-full px-4 py-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="text-4xl text-gray-300 mb-2">+</div>
          <p className="text-gray-500 text-sm font-medium mb-1">
            ここに画像をドロップ
          </p>
          <p className="text-gray-400 text-xs mb-1">
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
