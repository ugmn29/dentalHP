export default function Numbers() {
  const items = [
    { n: '120', unit: '日', label: '年間休日', sub: '祝日・年末年始含む' },
    { n: '30', unit: '分/日', label: '平均残業', sub: '固定残業代内に収まる設計' },
    { n: '100', unit: '%', label: 'マニュアル完備', sub: '入職初日から迷わず動ける' },
    { n: '6', unit: 'ヶ月', label: '評価サイクル', sub: '○△×の明確な基準' },
    { n: '50', unit: '%', label: 'セミナー補助', sub: '医院承認分' },
    { n: '100,000', unit: '円', label: '出産／復職祝い金', sub: '各100,000円' },
  ];
  return (
    <section className="numbers" data-screen-label="Numbers">
      <div className="numbers-inner">
        <div className="numbers-head">
          <div className="eyebrow">A Letter from the Director</div>
          <h2 className="numbers-title">
            ここで働いてよかった。<br/>
            そう<em>思える場所</em>に、します。
          </h2>
        </div>
        <div className="numbers-grid">
          {items.map((it, i) => (
            <div key={i} className="number-cell">
              <div className="number-label">{String(i+1).padStart(2,'0')} / {it.label}</div>
              <div className="number-big">
                <span className="number-n">{it.n}</span>
                <span className="number-u">{it.unit}</span>
              </div>
              <div className="number-sub">{it.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
