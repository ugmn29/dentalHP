export default function Philosophy() {
  const values = [
    { n: '01', title: '「知らなかった」をなくす', body: '徹底した見える化と説明で、患者様が不利益を被らないようにする。', group: 'a' },
    { n: '02', title: '患者様の自己決定を支える', body: '押し売りではなく、納得の上で最善の治療を選べるようサポートする。', group: 'a' },
    { n: '03', title: '根本原因にアプローチする', body: '対症療法だけでなく、予防と習慣改善で患者様の未来を守る。', group: 'a' },
    { n: '04', title: '陰口・悪口を言わない', body: '不満は本人か院長に直接伝え、問題解決に努める。', group: 'b' },
    { n: '05', title: '注意より励まし', body: 'ミスを責めず、改善と成長を応援する。', group: 'b' },
    { n: '06', title: '後輩には積極的に教える', body: '聞かれなくても困っていたら声をかけ、チームで成長する。', group: 'b' },
    { n: '07', title: '感謝と敬意を忘れない', body: '上司にも後輩にも、丁寧なコミュニケーションを心がける。', group: 'b' },
    { n: '08', title: 'いつでも笑顔、感情をコントロール', body: '怒りや不満をそのまま出さず、穏やかに伝える。', group: 'c' },
    { n: '09', title: '素直に受け止める', body: '言い訳より感謝と学びを優先し、謙虚に改善する。', group: 'c' },
    { n: '10', title: '失敗は隠さず、すぐに報告する', body: '解決策を考え、チームで共有し、同じ失敗を繰り返さない。', group: 'c' },
    { n: '11', title: '整理整頓を怠らない', body: '次の人が気持ちよく使える状態を残す。', group: 'c' },
    { n: '12', title: '清潔感のある身だしなみを保つ', body: '歯科医療従事者としてふさわしい姿で患者様の前に立つ。', group: 'c' },
    { n: '13', title: '学び続ける', body: '常に最新の知識と技術を追求し、自己研鑽を怠らない。', group: 'c' },
  ];

  return (
    <section id="philosophy" className="section philosophy" data-screen-label="Philosophy">
      <div className="vmv-block">
        <div className="vmv-marker">
          <span className="vmv-marker-num">01</span>
          <span className="vmv-marker-label">Philosophy / 経営理念</span>
        </div>
        <p className="vmv-big">
          未来のいい顔を<br/>
          ここから<em>育て</em>、<br/>
          社会にインパクトを<em>与える</em>。
        </p>
        <div className="vmv-translate">
          <span className="vmv-translate-arrow">→</span>
          <p>
            <strong>あなたへ：</strong>これは、Fデンタルオフィスが社会に残したい「かたち」です。あなたには、この景色を一緒に作る仲間として加わってほしいと考えています。
          </p>
        </div>
      </div>

      <div className="vmv-grid">
        <div className="vmv-card">
          <div className="vmv-marker small">
            <span className="vmv-marker-num">02</span>
            <span className="vmv-marker-label">Mission / 使命</span>
          </div>
          <p>「知らなかった」をなくし、すべての患者様が<strong>自分の意思で最善の治療を選べる</strong>歯科医院をつくる。</p>
          <p className="vmv-sub">来てくれたすべての人が「ここに来て良かった」と思える場所であり続ける。</p>
          <div className="vmv-translate small">
            <span className="vmv-translate-arrow">→</span>
            <p>
              <strong>あなたがここで生み出せる価値：</strong>丁寧な説明と対話で、患者様に「このスタッフに担当してもらえてよかった」と言ってもらえる仕事ができます。
            </p>
          </div>
        </div>
        <div className="vmv-card">
          <div className="vmv-marker small">
            <span className="vmv-marker-num">03</span>
            <span className="vmv-marker-label">Vision / 目指す姿</span>
          </div>
          <ol className="vmv-list">
            <li>0歳からの口腔育成で、一生涯の顔と健康の土台をつくる</li>
            <li>診療技術・発信・テクノロジーの掛け合わせで、誰も真似できない歯科医療を実現する</li>
            <li>口腔育成において日本一になり、そのノウハウを世界へ届ける</li>
            <li>口腔から健康な子どもを増やし、医療・教育・社会全体に変革をもたらす</li>
            <li>すべての世代に「納得の医療」を届ける</li>
          </ol>
          <div className="vmv-translate small">
            <span className="vmv-translate-arrow">→</span>
            <p>
              <strong>あなたが見られる景色：</strong>口腔育成・SNS・テクノロジーを主軸に、「日本一」「世界へ」を本気で目指す医院の成長過程を、最前線で体験できます。
            </p>
          </div>
        </div>
      </div>

      <div className="values">
        <div className="values-head">
          <div className="vmv-marker">
            <span className="vmv-marker-num">04</span>
            <span className="vmv-marker-label">Value / 13の価値観</span>
          </div>
        </div>
        <div className="values-grid">
          {values.map((v) => (
            <div key={v.n} className={`value-card group-${v.group}`}>
              <div className="value-num">{v.n}</div>
              <div className="value-title">{v.title}</div>
              <div className="value-body">{v.body}</div>
            </div>
          ))}
        </div>
        <div className="values-legend">
          <span><i className="dot-a"/>患者様に対して</span>
          <span><i className="dot-b"/>仲間に対して</span>
          <span><i className="dot-c"/>自分自身に対して</span>
        </div>
      </div>
    </section>
  );
}
