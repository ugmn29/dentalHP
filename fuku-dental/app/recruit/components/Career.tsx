export default function Career() {
  return (
    <section id="career" className="section career" data-screen-label="Career">
      <div className="section-head">
        <div className="eyebrow">Evaluation & Career</div>
        <h2 className="section-title">評価制度とキャリア</h2>
        <p className="section-intro">評価は「主観」ではなく、<strong>明確な基準</strong>で行います。ミスを責めるための制度ではなく、<strong>成長を応援する</strong>ための制度です。</p>
      </div>

      <div className="career-grid">
        <div className="career-card">
          <div className="career-num">半年ごと</div>
          <h3>評価のリズム</h3>
          <p>自己評価 → 院長チェックの2ステップ。評価実施月の翌月給与から反映。試用期間中も同じ基準で評価します。</p>
        </div>
        <div className="career-card">
          <div className="career-num">○ / △ / ×</div>
          <h3>3段階の明快な基準</h3>
          <p>例：「挨拶」「後輩教育」「失敗時の対応」など、すべて<strong>具体的な行動</strong>で定義されています。好き嫌いでは評価しません。</p>
        </div>
        <div className="career-card">
          <div className="career-num">+ 15,000円</div>
          <h3>衛生士評価手当</h3>
          <p>○評価：15,000円 ／ △評価：10,000円 ／ ×評価：0円。専門スキルと共通行動の両方を見ます。</p>
        </div>
      </div>

      <div className="career-ladder">
        <h3 className="ladder-title">キャリアパスの例</h3>
        <div className="ladder">
          <div className="ladder-step">
            <div className="ladder-label">Start</div>
            <div className="ladder-title-s">スタッフ</div>
            <div className="ladder-desc">基本給 230,000円〜</div>
          </div>
          <div className="ladder-arrow">→</div>
          <div className="ladder-step">
            <div className="ladder-label">+ 5,000円</div>
            <div className="ladder-title-s">副チーフ</div>
            <div className="ladder-desc">後輩指導・教育の中心に</div>
          </div>
          <div className="ladder-arrow">→</div>
          <div className="ladder-step">
            <div className="ladder-label">+ 10,000円</div>
            <div className="ladder-title-s">チーフ</div>
            <div className="ladder-desc">診療運営の要としてチームを束ねる</div>
          </div>
          <div className="ladder-arrow">→</div>
          <div className="ladder-step accent">
            <div className="ladder-label">将来</div>
            <div className="ladder-title-s">分院立ち上げ・<br/>教育責任者など</div>
            <div className="ladder-desc">「口腔育成を世界へ」の中核メンバーに</div>
          </div>
        </div>
      </div>

      <div className="growth-pillars">
        <div className="growth-head">成長をサポートする仕組み</div>
        <div className="growth-list">
          <div className="growth-item">
            <div className="growth-no">01</div>
            <div className="growth-text"><strong>セミナー費用補助 50%</strong>（医院承認分）。外部で学びたいことは遠慮なく申請してください。</div>
          </div>
          <div className="growth-item">
            <div className="growth-no">02</div>
            <div className="growth-text"><strong>院内バイブル・専門書</strong>を常備。自己研鑽は評価項目にも入っています。</div>
          </div>
          <div className="growth-item">
            <div className="growth-no">03</div>
            <div className="growth-text"><strong>院長に直接相談できる</strong>文化。不満や疑問はミーティングかLINEで即共有。</div>
          </div>
        </div>
      </div>
    </section>
  );
}
