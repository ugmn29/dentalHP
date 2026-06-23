"use client";

const ACCENT_DARK = '#0a8a85';
const SURFACE = '#FFFFFF';
const TEXT = '#2C2C2A';
const TEXT_MUTED = '#6B6B68';
const LINE = '#E6E3DC';

type ClinicHoursTableProps = {
  className?: string;
};

export const ClinicHoursTable = ({ className = '' }: ClinicHoursTableProps) => {
  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 md:p-8 ${className}`}
      style={{ background: SURFACE, border: `1px solid ${LINE}` }}
    >
      <h3 className="font-serif text-xl mb-6 text-center" style={{ color: TEXT }}>診療時間</h3>
      <table className="w-full table-fixed border-collapse text-center text-sm">
        <thead>
          <tr style={{ borderBottom: `1px solid ${LINE}` }}>
            <th className="w-[28%] px-1 py-3 text-[10px] font-normal sm:text-xs" style={{ color: TEXT_MUTED }}>診療時間</th>
            <th className="px-1 py-3 text-xs font-medium sm:text-sm" style={{ color: TEXT }}>月</th>
            <th className="px-1 py-3 text-xs font-medium sm:text-sm" style={{ color: TEXT }}>火</th>
            <th className="px-1 py-3 text-xs font-medium sm:text-sm" style={{ color: TEXT }}>水</th>
            <th className="px-1 py-3 text-xs font-medium sm:text-sm" style={{ color: TEXT }}>木</th>
            <th className="px-1 py-3 text-xs font-medium sm:text-sm" style={{ color: TEXT }}>金</th>
            <th className="px-1 py-3 text-xs font-medium sm:text-sm" style={{ color: ACCENT_DARK }}>土</th>
            <th className="px-1 py-3 text-xs font-medium sm:text-sm" style={{ color: ACCENT_DARK }}>日</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-base">
          <tr style={{ borderBottom: `1px solid ${LINE}` }}>
            <td className="whitespace-nowrap px-1 py-4 text-[10px] sm:text-xs" style={{ color: TEXT_MUTED }}>10:00–13:00</td>
            <td>●</td>
            <td style={{ opacity: 0.2 }}>−</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td className="text-xs sm:text-sm" style={{ color: ACCENT_DARK }}>★</td>
            <td className="text-xs sm:text-sm" style={{ color: ACCENT_DARK }}>★</td>
          </tr>
          <tr>
            <td className="whitespace-nowrap px-1 py-4 text-[10px] sm:text-xs" style={{ color: TEXT_MUTED }}>14:00–19:00</td>
            <td>●</td>
            <td style={{ opacity: 0.2 }}>−</td>
            <td>●</td>
            <td>●</td>
            <td>●</td>
            <td className="text-xs sm:text-sm" style={{ color: ACCENT_DARK }}>★</td>
            <td className="text-xs sm:text-sm" style={{ color: ACCENT_DARK }}>★</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-5 space-y-1 text-center text-xs" style={{ color: TEXT_MUTED }}>
        <p>★ 土日：9:00–12:00 / 13:00–17:00</p>
        <p style={{ color: ACCENT_DARK, fontWeight: 600 }}>休診日：火曜日</p>
      </div>
    </div>
  );
};
