'use client';
import { useState, useCallback, useEffect } from 'react';

const IMAGE_SERVER = 'http://localhost:3002';
const isDev = process.env.NODE_ENV === 'development';

const fallbackImages: Record<string, string> = {
  '/homepage/feature1': '/images/pages/homepage/カウンセリングで医師と患者が話している場面.jpg',
  '/homepage/feature2': '/images/pages/kidsortho/親子が歯科医師と相談している場面.jpg',
  '/homepage/feature3': '/images/pages/homepage/豊洲-歯科-天井テレビ付き診療室-正方形.webp',
  '/homepage/feature4': '/images/pages/homepage/治療中の場面.jpg',
  '/homepage/feature5': '/images/pages/homepage/豊洲-歯科-削らない-保存治療-正方形.webp',
  '/homepage/feature6': '/images/pages/homepage/カウンセリングで医師と患者が話している場面.jpg',
  '/homepage/doctor': '/images/pages/homepage/豊洲-歯科-院長-福永真大.webp',
  '/homepage/facility1': '/images/pages/homepage/受付で挨拶している場面.jpg',
  '/homepage/facility2': '/images/hero-bg.webp',
  '/homepage/facility3': '/images/pages/facilities/豊洲-歯科-歯科用CT-精密診断.webp',
  '/homepage/facility4': '/images/pages/homepage/カウンセリングで医師と患者が話している場面.jpg',
  '/kidsortho/clinic-room': '/images/pages/homepage/hero-square/豊洲-歯科-ヒーロー-診療室-レントゲン説明-正方形.webp',
  '/kidsortho/ceiling-tv': '/images/pages/homepage/豊洲-歯科-天井テレビ付き診療室-正方形.webp',
  '/kidsortho/director-xray': '/images/pages/homepage/豊洲-歯科-原因から考える-根本治療.webp',
  '/facilities/facility4': '/images/pages/homepage/カウンセリングで医師と患者が話している場面.jpg',
  '/facilities/private-room': '/images/pages/facilities/豊洲-歯科-完全個室-診療室.webp',
  '/facilities/dental-ct': '/images/pages/facilities/豊洲-歯科-歯科用CT-精密診断.webp',
  '/facilities/microscope': '/images/pages/facilities/豊洲-歯科-マイクロスコープ-精密治療.webp',
  '/facilities/3d-scanner': '/images/pages/facilities/豊洲-歯科-3Dスキャナー-スキャンイメージ.webp',
  '/facilities/intraoral-camera': '/images/pages/facilities/豊洲-歯科-ペン型口腔内カメラ-撮影イメージ.webp',
  '/facilities/sterilization': '/images/pages/homepage/治療中の場面.jpg',
  '/facilities/pain-care': '/images/pages/homepage/治療中の場面.jpg',
  '/facilities/ceiling-tv': '/images/pages/homepage/豊洲-歯科-天井テレビ付き診療室-正方形.webp',
  '/facilities/counseling': '/images/pages/homepage/カウンセリングで医師と患者が話している場面.jpg',
  '/mouthpiece/feature3': '/images/pages/facilities/豊洲-歯科-3Dスキャナー-スキャンイメージ.webp',
  '/mouthpiece/iTeroでスキャン中の場面': '/images/pages/facilities/豊洲-歯科-3Dスキャナー-スキャンイメージ.webp',
  '/whitening/feature3': '/images/pages/facilities/豊洲-歯科-3Dスキャナー-スキャンイメージ.webp',
  '/kidsortho/mouth-breathing-risks/口呼吸と鼻呼吸の顔の発達比較': '/images/diagrams-ai/oral-growth-breathing.webp',
  '/kidsortho/timing/歯の生え変わりと治療開始ベストタイミング': '/images/diagrams-ai/kidsortho-timing.webp',
  '/kidsortho/mft-training/あいうべ体操4ステップの口の形': '/images/diagrams-ai/mft-training-flow.webp',
  '/kidsortho/posture-improvement/良い姿勢と悪い姿勢の比較図': '/images/diagrams-ai/posture-breath-bite.webp',
  '/cavity/stages/C0からC4の虫歯進行段階の歯断面図': '/images/diagrams-ai/cavity-stages.webp',
  '/cavity/treatment-methods/虫歯治療法別の歯断面図': '/images/diagrams-ai/cavity-treatment-comparison.webp',
  '/root-canal/types/根管治療3種類の歯断面図解': '/images/diagrams-ai/root-canal-steps.webp',
  '/orthodontics/types/hero': '/images/diagrams-ai/orthodontic-types.webp',
  '/mouthpiece/feature1': '/images/diagrams-ai/mouthpiece-flow.webp',
  '/ceramic/types/hero': '/images/diagrams-ai/ceramic-materials.webp',
  '/implant/インプラント3層構造の断面図': '/images/diagrams-ai/implant-structure.webp',
  '/implant/comparison/インプラントと入れ歯とブリッジの比較図': '/images/diagrams-ai/implant-comparison.webp',
  '/periodontal/stages/歯周病の進行段階図': '/images/diagrams-ai/periodontal-stages.webp',
  '/whitening/types/ホワイトニング3種類の比較図': '/images/diagrams-ai/whitening-types.webp',
  '/general/bad-breath/feature1': '/images/diagrams-ai/bad-breath-causes.webp',
};

interface PageImageProps {
  path: string;
  imageId?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function PageImage({ path, imageId = 'hero', alt, className = '', priority = false }: PageImageProps) {
  const [hasError, setHasError] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const src = `/images/pages${path}/${imageId}.jpg`;
  const fallbackSrc = fallbackImages[`${path}/${imageId}`];
  const displaySrc = fallbackSrc || src;
  const imageLoading = priority ? 'eager' : 'lazy';
  const imageFetchPriority = priority ? 'high' : 'auto';
  const imageTitle = alt || undefined;

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
          title={imageTitle}
          loading={imageLoading}
          decoding="async"
          fetchPriority={imageFetchPriority}
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
            title={imageTitle}
            loading={imageLoading}
            decoding="async"
            fetchPriority={imageFetchPriority}
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
        title={imageTitle}
        loading={imageLoading}
        decoding="async"
        fetchPriority={imageFetchPriority}
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
