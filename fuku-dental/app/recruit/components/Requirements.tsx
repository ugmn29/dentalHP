import { useState, ReactNode } from 'react';

type RoleKey = 'DH' | 'DA' | 'RP';

export default function Requirements() {
  const [role, setRole] = useState<RoleKey>('DH');
  const roles: Record<RoleKey, { label: string; sub: string; basic: string; highlight: string[] }> = {
    DH: {
      label: '歯科衛生士',
      sub: 'Dental Hygienist',
      basic: '230,000円 + 評価手当 0〜15,000円',
      highlight: ['初診P1〜SPTまで責任を持つ担当制', 'インビザライン・ワイヤー矯正の経験可', '歩合：メインテ・WH 10%'],
    },
    DA: {
      label: '歯科助手',
      sub: 'Dental Assistant',
      basic: '230,000円',
      highlight: ['診療補助 + 受付 + 秘書 + 広報まで幅広く', 'SNS・ホームページ運用も任せます', '歩合：物販 2% / 家族紹介・口コミ 500円/件'],
    },
    RP: {
      label: '受付',
      sub: 'Receptionist',
      basic: '230,000円',
      highlight: ['初診カウンセリングの入口を担う重要な役割', '電話対応・予約管理・会計まで', '歩合：カウンセリング成約 / 矯正検査誘導など'],
    },
  };
  const r = roles[role];

  const rows: [string, ReactNode][] = [
    ['雇用形態', '正社員（試用期間6ヶ月・賃金は基準額より1〜2万円減額）'],
    ['勤務地', 'Fデンタルオフィス 豊洲プライムスクエア院（変更の範囲：医院が指定する場所）'],
    ['勤務時間', <>平日 9:45 – 18:45 ／ 土日 8:45 – 17:00<br/><span className="muted">休憩 60分</span></>],
    ['休日', <>週休2日制（法定休日：火曜＋シフト週1日）／年末年始（12/29–1/3）／年間休日<strong> 約120日</strong></>],
    ['基本給', r.basic],
    ['固定残業代', '月額45,000円（月30時間分／超過分は別途支給）'],
    ['諸手当', '役職手当（チーフ10,000円／副チーフ5,000円）／精勤手当10,000円／通勤手当 実費（上限20,000円）'],
    ['インセンティブ', r.highlight.join(' ／ ')],
    ['昇給・賞与', <>昇給 年1回（4月）／ 賞与 年2回（7月・12月）<span className="muted">業績・勤務成績により</span></>],
    ['社会保険', '健康保険・厚生年金・雇用保険・労災保険'],
    ['定年', '65歳（希望者は70歳まで継続雇用）'],
  ];

  return (
    <section id="requirements" className="section requirements" data-screen-label="Requirements">
      <div className="section-head">
        <div className="eyebrow">Requirements</div>
        <h2 className="section-title">募集要項</h2>
        <p className="section-intro">条件はシンプルに。全職種とも基本給は同額、手当と歩合で実力をきちんと評価します。</p>
      </div>

      <div className="role-tabs">
        {(Object.entries(roles) as [RoleKey, typeof roles[RoleKey]][]).map(([k, v]) => (
          <button key={k} className={`role-tab ${role === k ? 'active' : ''}`} onClick={() => setRole(k)}>
            <span className="role-tab-label">{v.label}</span>
            <span className="role-tab-sub">{v.sub}</span>
          </button>
        ))}
      </div>

      <div className="req-table">
        {rows.map(([k, v], i) => (
          <div key={i} className="req-row">
            <div className="req-key">{k}</div>
            <div className="req-val">{v}</div>
          </div>
        ))}
      </div>

      <div className="benefits-mini">
        <div className="benefits-mini-head">その他</div>
        <ul>
          <li>ルーペ（拡大鏡）：医院負担で貸与</li>
          <li>セミナー費用補助（医院承認分の50%）</li>
          <li>スタッフ還元プール制度：月2,000円/人を積立、年1回（12月）均等分配</li>
          <li>インフルエンザワクチン：全額補助</li>
          <li>出産お祝い金 100,000円 ／ 復職祝い金 100,000円</li>
          <li>自費診療スタッフ割引（本人のみ・材料費実費）</li>
        </ul>
      </div>
    </section>
  );
}
