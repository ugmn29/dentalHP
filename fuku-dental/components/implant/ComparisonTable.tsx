'use client';

import React from 'react';

const criteria = [
  { label: '\u564C\u3080\u529B', implant: '\u25CE', denture: '\u25B3', bridge: '\u25CB' },
  { label: '\u898B\u305F\u76EE\u306E\u81EA\u7136\u3055', implant: '\u25CE', denture: '\u25B3', bridge: '\u25CB' },
  { label: '\u9055\u548C\u611F\u306E\u5C11\u306A\u3055', implant: '\u25CE', denture: '\u2715', bridge: '\u25CB' },
  { label: '\u5468\u56F2\u306E\u6B6F\u3078\u306E\u5F71\u97FF', implant: '\u25CE', denture: '\u25B3', bridge: '\u2715' },
  { label: '\u6CBB\u7642\u671F\u9593', implant: '\u25B3', denture: '\u25CE', bridge: '\u25CB' },
  { label: '\u8CBB\u7528', implant: '\u25B3', denture: '\u25CE', bridge: '\u25CB' },
  { label: '\u624B\u8853\u306E\u6709\u7121', implant: '\u25B3', denture: '\u25CE', bridge: '\u25CE' },
  { label: '\u5BFF\u547D', implant: '\u25CE', denture: '\u25B3', bridge: '\u25CB' },
  { label: '\u30E1\u30F3\u30C6\u30CA\u30F3\u30B9', implant: '\u25CB', denture: '\u25CB', bridge: '\u25CB' },
];

function getRatingColor(rating: string) {
  switch (rating) {
    case '\u25CE':
      return 'text-[#395b45] font-bold';
    case '\u25CB':
      return 'text-[#C5A572] font-semibold';
    case '\u25B3':
      return 'text-[#FF9F43] font-semibold';
    case '\u2715':
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
          <tr className="bg-[#395b45] text-white">
            <th className="p-4 text-left font-semibold rounded-tl-lg">\u6BD4\u8F03\u9805\u76EE</th>
            <th className="p-4 text-center font-semibold">\u30A4\u30F3\u30D7\u30E9\u30F3\u30C8</th>
            <th className="p-4 text-center font-semibold">\u5165\u308C\u6B6F</th>
            <th className="p-4 text-center font-semibold rounded-tr-lg">\u30D6\u30EA\u30C3\u30B8</th>
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
            <p className="font-semibold text-[#2d4835] mb-2 text-sm">{row.label}</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs text-gray-400 mb-1">\u30A4\u30F3\u30D7\u30E9\u30F3\u30C8</p>
                <span className={`text-lg ${getRatingColor(row.implant)}`}>{row.implant}</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">\u5165\u308C\u6B6F</p>
                <span className={`text-lg ${getRatingColor(row.denture)}`}>{row.denture}</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">\u30D6\u30EA\u30C3\u30B8</p>
                <span className={`text-lg ${getRatingColor(row.bridge)}`}>{row.bridge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex gap-4 justify-center mt-6 text-sm text-gray-500">
        <span>\u25CE \u512A\u79C0</span>
        <span>\u25CB \u826F\u597D</span>
        <span>\u25B3 \u666E\u901A</span>
        <span>\u2715 \u4E0D\u5411\u304D</span>
      </div>
    </div>
  );
}
