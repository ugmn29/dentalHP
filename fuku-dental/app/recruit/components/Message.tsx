export default function Message() {
  return (
    <section id="message" className="section message" data-screen-label="Message">
      <div className="message-grid">
        <div className="message-visual">
          <img
            src="/images/recruit/director.png"
            alt="院長 福永 真大"
            className="message-portrait"
            loading="lazy"
          />
          <div className="message-caption">
            <div className="message-caption-name">院長 福永 真大</div>
            <div className="message-caption-en">Masahiro Fukunaga, DDS</div>
          </div>
        </div>
        <div className="message-body">
          <div className="eyebrow">A Letter from the Director</div>
          <h2 className="message-title">
            <span className="message-quote-open">&ldquo;</span>
            <span>ここで働いてよかった。</span><br/>
            <span>そう<em>思える場所</em>に、</span><br/>
            <span>します。</span>
            <span className="message-quote-close">&rdquo;</span>
          </h2>
          <div className="message-text">
            <p className="dropcap">Fデンタルオフィス 豊洲プライムスクエア院で働いてくれるあなたへ。私はこの医院で働くすべてのスタッフに、こう思ってもらいたいと考えています。</p>
            <ul className="message-quotes">
              <li>ここで働いてよかった</li>
              <li>ここでしか学べないことがあった</li>
              <li>人生の選択肢が増えた</li>
              <li>ここに来て、人生が変わった</li>
            </ul>
            <p>患者様のために、そしてここで働くスタッフのために、日本一、そして世界に誇れる医院を一緒に作りましょう。そのために、あなたの力を貸してください。</p>
            <div className="sign-block">
              <div className="sign-line"/>
              <div className="sign-text">
                <div className="sign-role">院長 / Director</div>
                <div className="sign-name">福永 真大</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
