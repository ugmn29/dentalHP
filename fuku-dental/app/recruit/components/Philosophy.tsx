export default function Philosophy() {
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
      </div>

      <div className="vmv-grid">
        <div className="vmv-card">
          <div className="vmv-marker small">
            <span className="vmv-marker-num">02</span>
            <span className="vmv-marker-label">Mission / 使命</span>
          </div>
          <p>「知らなかった」をなくし、すべての患者様が<strong>自分の意思で最善の治療を選べる</strong>歯科医院をつくる。</p>
        </div>
        <div className="vmv-card">
          <div className="vmv-marker small">
            <span className="vmv-marker-num">03</span>
            <span className="vmv-marker-label">Vision / 目指す姿</span>
          </div>
          <ol className="vmv-list">
            <li>0歳からの口腔育成で、一生涯の顔と健康の土台をつくる</li>
            <li>診療・発信・テクノロジーの掛け合わせで、誰も真似できない歯科医療を実現する</li>
            <li>口腔育成で日本一になり、そのノウハウを世界へ届ける</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
