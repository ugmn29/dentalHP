'use client';

import React from 'react';

const criteria = [
  { label: '噛む力', implant: '◎', denture: '△', bridge: '○' },
  { label: '見た目の自然さ', implant: '◎', denture: '△', bridge: '○' },
  { label: '違和感の少なさ', implant: '◎', denture: '✕', bridge: '○' },
  { label: '周囲の歯への影響', implant: '◎', denture: '△', bridge: '✕' },
  { label: '治療期間', implant: '△', denture: '◎', bridge: '○' },
  { label: '費用', implant: '△', denture: '◎', bridge: '○' },
  { label: '手術の有無', implant: '△', denture: '◎', bridge: '◎' },
  { label: '寿命', implant: '◎', denture: '△', bridge: '○' },
  { label: 'メンテナンス', implant: '○', denture: '○', bridge: '○' },
];

function getRatingColor(rating: string) {
  switch (rating) {
    case '◎':
      return 'text-[#248cc4] font-bold';
    case '○':
      return 'text-[#C5A572] font-semibold';
    case '△':
      return 'text-[#FF9F43] font-semibold';
    case '✕':
      return 'text-red-400 font-semibold';
    default:
      return '';
  }
}

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      {/* Desktop Table */}
      <table className="hidden md:table w-full border-collapse">
        <thead>
          <tr className="bg-[#248cc4] text-white">
            <th className="p-4 text-left font-semibold rounded-tl-lg">比較項目</th>
            <th className="p-4 text-center font-semibold">インプラント</th>
            <th className="p-4 text-center font-semibold">入れ歯</th>
            <th className="p-4 text-center font-semibold rounded-tr-lg">ブリッジ</th>
          </tr>
        </thead>
        <tbody>
          {criteria.map((row, i) => (
            <tr
              key={i}
              className={`border-b border-gray-100 ${
                i % 2 === 0 ? 'bg-white' : 'bg-[#FDFBF7]'
              }`}
            >
              <td className="p-4 text-[#5A4D41] font-medium">{row.label}</td>
              <td className={`p-4 text-center text-xl ${getRatingColor(row.implant)}`}>
                {row.implant}
              </td>
              <td className={`p-4 text-center text-xl ${getRatingColor(row.denture)}`}>
                {row.denture}
              </td>
              <td className={`p-4 text-center text-xl ${getRatingColor(row.bridge)}`}>
                {row.bridge}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-3">
        {criteria.map((row, i) => (
          <div key={i} className="bg-white rounded-lg border border-gray-100 p-4">
            <p className="font-semibold text-[#1e1e1e] mb-2 text-sm">{row.label}</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-gray-400 mb-1">インプラント</p>
                <span className={`text-lg ${getRatingColor(row.implant)}`}>{row.implant}</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">入れ歯</p>
                <span className={`text-lg ${getRatingColor(row.denture)}`}>{row.denture}</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">ブリッジ</p>
                <span className={`text-lg ${getRatingColor(row.bridge)}`}>{row.bridge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-4 justify-center mt-6 text-sm text-gray-500">
        <span>◎ 優秀</span>
        <span>○ 良好</span>
        <span>△ 普通</span>
        <span>✕ 不向き</span>
      </div>
    </div>
  );
}
