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
    </section>
  );
}
