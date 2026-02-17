import Image from 'next/image';

interface KidsOrthoImageProps {
  name: string;
  alt: string;
  category: string;
  className?: string;
}

export function KidsOrthoImage({ name, alt, category, className = '' }: KidsOrthoImageProps) {
  const imagePath = `/images/kidsortho/${category}/${name}.jpg`;

  // 画像が存在するかチェック（実際の実装では、画像が存在する場合のみ表示）
  // 今は仮画像として表示

  return (
    <div className={`relative w-full ${className}`}>
      {/* 仮画像表示エリア */}
      <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center min-h-[200px]">
        <div className="text-center">
          <p className="text-gray-500 font-bold text-lg mb-2">【準備中】</p>
          <p className="text-gray-400 text-sm font-mono break-all">{name}.jpg</p>
          <p className="text-gray-400 text-xs mt-2">配置先: /public/images/kidsortho/{category}/</p>
        </div>
      </div>
      {/* 実際の画像を配置する場合はこちらを使用
      <Image
        src={imagePath}
        alt={alt}
        width={800}
        height={600}
        className="rounded-lg shadow-md"
      />
      */}
    </div>
  );
}
