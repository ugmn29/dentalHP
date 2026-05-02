import { useState, useEffect } from 'react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  const pillars = [
    { no: '01', en: 'Oral Myofunctional Care', ja: '口腔育成' },
    { no: '02', en: 'SNS Marketing', ja: 'SNSマーケティング' },
    { no: '03', en: 'Dental Technology', ja: 'テクノロジー活用' },
  ];

  const [activePillar, setActivePillar] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActivePillar((p) => (p + 1) % pillars.length), 2800);
    return () => clearInterval(id);
  }, [pillars.length]);

  return (
    <section className="hero hero-learn">
      <div className="hero-grid">
        <div className="hero-left">
          <div className="hero-meta">
            <span className="hero-dot" />
            <span>Recruit 2026</span>
            <span className="hero-meta-sep">/</span>
            <span>2026.07 新規開業</span>
          </div>

          <h1 className="hero-copy hero-copy-learn">
            <span className="line">ここでしか</span>
            <span className="line accent">
              <span className="line-inner">学べないこと</span>
              <svg className="hero-underline" viewBox="0 0 400 20" preserveAspectRatio="none">
                <path d="M2 14 Q 100 2, 200 12 T 398 8" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
            <span className="line">が、あります。</span>
          </h1>

          <p className="hero-lead">
            豊洲駅から徒歩2分、2026年7月開業。<br/>
            口腔育成・SNS・テクノロジー活用。<br/>
            <strong>一般的な歯科医院では経験できない3領域</strong>に、<br/>
            スタッフ全員で挑む医院です。
          </p>

          <div className="hero-ctas">
            <button className="btn-primary" onClick={() => scrollTo('why-us')}>
              <span>何が学べるのか、読む</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-ghost" onClick={() => scrollTo('entry')}>応募する</button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-pillars">
            <div className="hero-pillars-stripe">
              <span>F</span>
              <span>Three Things You Learn Here</span>
              <span className="hp-dot">●</span>
              <span>{String(activePillar + 1).padStart(2, '0')} / 03</span>
            </div>

            <div className="hero-pillars-list">
              {pillars.map((p, i) => (
                <button
                  key={i}
                  className={`hp-row ${activePillar === i ? 'active' : ''}`}
                  onClick={() => setActivePillar(i)}
                  onMouseEnter={() => setActivePillar(i)}
                >
                  <span className="hp-no">{p.no}</span>
                  <span className="hp-labels">
                    <span className="hp-en">{p.en}</span>
                    <span className="hp-ja">{p.ja}</span>
                  </span>
                  <span className="hp-arrow" aria-hidden="true">→</span>
                </button>
              ))}
            </div>

            <div className="hero-pillars-foot">
              <span>Learn more at</span>
              <button className="hp-foot-link" onClick={() => scrollTo('why-us')}>#why-us ↓</button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-footer">
        <div className="hero-foot-item">
          <div className="hero-foot-label">Opening</div>
          <div className="hero-foot-value">2026.07.01</div>
        </div>
        <div className="hero-foot-item">
          <div className="hero-foot-label">Location</div>
          <div className="hero-foot-value">豊洲駅 徒歩2分</div>
        </div>
        <div className="hero-foot-item">
          <div className="hero-foot-label">Roles</div>
          <div className="hero-foot-value">衛生士／助手／受付</div>
        </div>
      </div>
    </section>
  );
}
