export default function Honest() {
  return (
    <section id="honest" className="section honest" data-screen-label="Honest">
      <div className="honest-tag">正直に、お伝えします。</div>
      <h2 className="section-title huge">
        この医院は、<br/>
        <em>日々、変わり続けます。</em>
      </h2>
      <div className="honest-grid">
        <div className="honest-col">
          <p className="honest-lead">
            この医院は2026年7月に開業予定です。<br/>
            業務フロー・シフト・ルールなど、日々の運営の中で<strong>変更が生じることがあります。</strong>
          </p>
          <p>
            昨日のやり方が今日変わる、先週決まったことが今週修正される、ということが起こり得ます。
          </p>
          <p className="emphasis">
            これは不安定さを意味するのではありません。<br/>
            患者様により良い医療を届けるために、<br/>
            スタッフが安心して働ける環境をつくるために、<br/>
            <strong>日々改善し続けている証</strong>です。
          </p>
        </div>
        <div className="honest-col">
          <div className="honest-reasons">
            <div className="honest-reason">
              <div className="honest-reason-no">①</div>
              <div className="honest-reason-text">
                <strong>スタッフの労働環境の向上</strong>
                <p>働きやすさは、患者対応の質に直結します。</p>
              </div>
            </div>
            <div className="honest-reason">
              <div className="honest-reason-no">②</div>
              <div className="honest-reason-text">
                <strong>チームとしての生産性・診療品質の向上</strong>
                <p>より良いケアを、より多くの患者様へ。</p>
              </div>
            </div>
          </div>
          <div className="honest-cta">
            <p>変更が生じた場合は、都度LINEまたはミーティングでお知らせします。疑問や不安があれば、いつでも院長に直接相談してください。<strong>あなたの声が、この医院をより良くしていきます。</strong></p>
          </div>
        </div>
      </div>
      <div className="honest-match">
        <div className="match-block">
          <div className="match-head ok">こんな方に来てほしい</div>
          <ul>
            <li>変化を前向きに楽しめる方</li>
            <li>疑問や不満は陰で言わず、直接伝えられる方</li>
            <li>ミスを隠さず、すぐに報告・相談できる方</li>
            <li>後輩に積極的に教えられる方</li>
            <li>「納得の医療」を患者様に届けたい方</li>
          </ul>
        </div>
        <div className="match-block">
          <div className="match-head ng">正直、合わないかもしれません</div>
          <ul>
            <li>決まったフローが変わらないことを望む方</li>
            <li>陰口・悪口で不満を解消する方</li>
            <li>ミスを隠したり、言い訳が先に出てしまう方</li>
            <li>成約や売上のための説明を優先したい方</li>
            <li>身だしなみや清潔感に無頓着な方</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
