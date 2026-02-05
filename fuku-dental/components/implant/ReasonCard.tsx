import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ReasonCardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export function ReasonCard({ number, title, description, icon: Icon }: ReasonCardProps) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-[#395b45]/20 transition-all">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-lg bg-[#395b45]/10 flex items-center justify-center group-hover:bg-[#395b45]/20 transition">
            <Icon className="w-6 h-6 text-[#395b45]" />
          </div>
        </div>
        <div>
          <p className="text-xs font-bold text-[#C5A572] mb-1 tracking-wider">
            REASON {String(number).padStart(2, '0')}
          </p>
          <h3 className="text-lg font-bold text-[#2d4835] mb-2">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
