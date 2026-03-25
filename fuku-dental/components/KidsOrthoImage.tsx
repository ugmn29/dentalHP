import Image from 'next/image';

interface KidsOrthoImageProps {
  name: string;
  alt: string;
  category: string;
  className?: string;
  priority?: boolean;
}

export function KidsOrthoImage({ name, alt, category, className = '', priority = false }: KidsOrthoImageProps) {
  const imagePath = `/images/kidsortho/${category}/${name}.jpg`;

  // フリー素材で画像が用意されているカテゴリかどうかを判定
  const downloadedCategories = ['training', 'info', 'guide'];
  const imageExists = downloadedCategories.includes(category);

  return (
    <div className={`relative w-full ${className}`}>
      {imageExists ? (
        <Image
          src={imagePath}
          alt={alt}
          width={800}
          height={600}
          priority={priority}
          className="rounded-lg shadow-md w-full h-auto object-cover aspect-[4/3]"
        />
      ) : (
        <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center w-full aspect-[4/3]">
          <div className="text-center">
            <p className="text-gray-500 font-bold text-lg mb-2">【準備中】</p>
            <p className="text-gray-400 text-sm font-mono break-all">{name}.jpg</p>
            <p className="text-gray-400 text-xs mt-2">配置先: /public/images/kidsortho/{category}/</p>
          </div>
        </div>
      )}
    </div>
  );
}
