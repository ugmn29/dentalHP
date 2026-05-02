export default function GrowthPath() {
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

    </section>
  );
}
