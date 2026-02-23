
import React from 'react';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: 'インプラント症例ギャラリー｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲のF歯科のインプラント治療症例ギャラリー。実際の治療結果をご覧いただけます。豊富な症例実績で安心のインプラント治療を提供しています。',
  keywords: 'インプラント 症例,インプラント ギャラリー,インプラント ビフォーアフター,豊洲 インプラント 実績',
  openGraph: {
    title: 'インプラント症例ギャラリー｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲のF歯科のインプラント治療症例ギャラリー。実際の治療結果をご覧いただけます。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/implant/gallery',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function GalleryPage() {
  const galleryDir = path.join(process.cwd(), 'public/temp_gallery');
  
  let images: string[] = [];
  try {
    if (fs.existsSync(galleryDir)) {
      images = fs.readdirSync(galleryDir).filter(file => file.endsWith('.png'));
    }
  } catch (e) {
    console.error(e);
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Generated Images Gallery</h1>
      <p className="mb-8 text-gray-600">Please identify which image corresponds to which section.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img) => (
          <div key={img} className="border rounded-lg p-4 shadow-sm bg-white">
            <div className="aspect-video relative mb-4 bg-gray-100 rounded overflow-hidden">
              <img 
                src={`/temp_gallery/${img}`} 
                alt={img}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="text-sm font-mono break-all bg-gray-50 p-2 rounded">
              {img}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
