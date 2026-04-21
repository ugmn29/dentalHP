import { useState } from 'react';

export default function GrowthPath() {
  const [activeYear, setActiveYear] = useState(1);

  const years = [
    {
      y: 1,
      label: '1年後',
      title: '基礎が「体に入る」',
      points: [
        '13のValueが判断の軸になり、日々の業務で自然と実践できる',
        '担当業務を一人で回せるようになり、後輩にも教えられる',
        'SNS・口腔育成の現場に参加し、医院の発信に貢献している',
        '院長との1on1・6ヶ月評価で、次の目標が明確になっている',
      ],
    },
    {
      y: 3,
      label: '3年後',
      title: '「強み」が立ち上がる',
      points: [
        '口腔育成・SNS・テクノロジー・ブランディングから、自分の専門を持つ',
        '認定資格や専門領域の研修を通じて、他院で通用するスキルが身につく',
        '新人の教育係や、医院運営の一部を任される立場になっている',
        '院外セミナーへの参加・登壇など、社外での発信経験も積める',
      ],
    },
    {
      y: 5,
      label: '5年後',
      title: '「次の景色」が見える',
      points: [
        '医院の中核メンバーとして、経営・採用・教育に深く関わる',
        '口腔育成の専門家として、院外でも教える側に回っている',
        '独立、分院展開、海外挑戦など、次のキャリアの選択肢が開ける',
        '「ここで学んだこと」を自分の言葉で語れるようになっている',
      ],
    },
  ];

  const supports = [
    {
      n: '01',
      en: 'Direct Mentorship',
      title: '院長から直接学べる',
      body: '診療技術・経営・SNSマーケティング・ブランディング。すべてを同じ場所で、同じ相手から学べる環境は、ほとんどの歯科医院にはありません。院長は「教えることを惜しまない」ことを約束します。',
    },
    {
      n: '02',
      en: 'Learning Budget',
      title: '外部セミナー補助50%',
      body: '医院が認めたセミナー・研修について、受講費用の50%を医院が負担します。認定資格取得の支援、院内勉強会の開催も継続的に行います。「学びたい」意欲を、お金の理由で止めません。',
    },
    {
      n: '03',
      en: 'Honest Feedback',
      title: '6ヶ月ごとの評価と1on1',
      body: '半年ごとに○△×の明確な基準で評価し、次の半年の目標を一緒に設定します。昇給・昇格の根拠も、成長の道筋も、すべてフィードバックでお返しします。「頑張っているのに評価されない」は起きません。',
    },
    {
      n: '04',
      en: 'Cross-Functional',
      title: '診療の枠を超えた経験',
      body: 'SNS撮影、イベント企画、院長秘書業務、広報活動など、通常の歯科医院では経験できない業務に希望制で関われます。「歯科スタッフ」という肩書きに収まらない、自分だけのキャリアを作れます。',
    },
  ];

  return (
    <section id="growth" className="section growth-path" data-screen-label="GrowthPath">
      <div className="growth-path-head">
        <div className="eyebrow">Growth Path</div>
        <h2 className="section-title huge">
          必ず、<em>成長できる</em>。<br/>
          そう言える場所を、<br/>
          つくります。
        </h2>
        <p className="section-intro">
          Fデンタルオフィスは、<strong>「働きながら成長できる仕組み」</strong>を意図的に設計しています。<br/>
          才能や経験に関わらず、真面目に取り組めば、必ず一段ずつ上がれる構造です。
        </p>
      </div>

      <div className="growth-supports">
        <div className="growth-supports-head">
          <div className="growth-supports-label">Four Pillars of Growth</div>
          <h3 className="growth-supports-title">成長を支える、4つの仕組み。</h3>
        </div>
        <div className="growth-supports-grid">
          {supports.map((s, i) => (
            <div key={i} className="gs-card">
              <div className="gs-head">
                <span className="gs-num">{s.n}</span>
                <span className="gs-en">{s.en}</span>
              </div>
              <h4 className="gs-title">{s.title}</h4>
              <p className="gs-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="growth-timeline">
        <div className="year-switch">
          {years.map((y) => (
            <button
              key={y.y}
              className={`year-btn ${activeYear === y.y ? 'active' : ''}`}
              onClick={() => setActiveYear(y.y)}
            >
              <span className="year-btn-y">{y.label}</span>
              <span className="year-btn-sub">{y.y} year{y.y > 1 ? 's' : ''} later</span>
            </button>
          ))}
        </div>

        <div className="year-body">
          {years.filter(y => y.y === activeYear).map((y) => (
            <div key={y.y} className="year-content">
              <div className="year-left">
                <div className="year-big">
                  <span className="year-big-n">{y.y}</span>
                  <span className="year-big-u">year{y.y > 1 ? 's' : ''}</span>
                </div>
                <div className="year-title-big">{y.title}</div>
              </div>
              <ul className="year-points">
                {y.points.map((p, i) => (
                  <li key={i}>
                    <span className="year-point-no">{String(i+1).padStart(2,'0')}</span>
                    <span className="year-point-text">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="growth-promise">
        <div className="growth-promise-mark">&quot;</div>
        <p>
          <span>才能で差がつく職場にはしません。</span><br/>
          <span>仕組みで、</span><em>必ず成長できる</em><span>環境にします。</span>
        </p>
        <div className="growth-promise-sign">— 院長 福永 真大</div>
      </div>
    </section>
  );
}
