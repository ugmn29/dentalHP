import { useState } from 'react';

export default function DayInLife() {
  const [role, setRole] = useState<'weekday' | 'weekend'>('weekday');
  const weekday: [string, string, string][] = [
    ['09:40', '出勤・打刻', '打刻してから着替え、開院準備へ。'],
    ['10:00', '開院 / 午前診療', '担当制でアポを管理。候補を2〜3提示するアポ取りを徹底。'],
    ['13:00', '休憩（60分）', 'スタッフルームで昼食。'],
    ['14:00', '午後診療', 'P1〜SPT、補綴、矯正、インビザ。必要に応じて口腔内写真5枚法。'],
    ['19:15', '終業・退勤', '残業は月30時間（固定残業代内）を目安に。超過分は別途支給。'],
  ];
  const weekend: [string, string, string][] = [
    ['08:40', '出勤・打刻', '土日は朝が早いぶん、終業も早め。'],
    ['09:00', '開院 / 午前診療', '土日はご家族連れが多く、キッズ対応も多め。'],
    ['12:00', '休憩（60分）', ''],
    ['13:00', '午後診療', '13:00〜17:15。'],
    ['17:15', '終業・退勤', '平日より2時間早く上がれます。'],
  ];
  const data = role === 'weekday' ? weekday : weekend;

  return (
    <section id="day" className="section day" data-screen-label="Day in Life">
      <div className="section-head">
        <div className="eyebrow">A Day at F Dental</div>
        <h2 className="section-title">1日の流れ</h2>
      </div>
      <div className="day-switch">
        <button className={role === 'weekday' ? 'active' : ''} onClick={() => setRole('weekday')}>平日シフト</button>
        <button className={role === 'weekend' ? 'active' : ''} onClick={() => setRole('weekend')}>土日シフト</button>
      </div>
      <div className="timeline">
        {data.map(([time, title, body], i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-time">{time}</div>
            <div className="timeline-dot" />
            <div className="timeline-body">
              <div className="timeline-title">{title}</div>
              {body && <div className="timeline-text">{body}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
