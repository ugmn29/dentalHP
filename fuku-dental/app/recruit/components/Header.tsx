import { useState, useEffect } from 'react';

export default function RecruitHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 72, behavior: 'smooth' });
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="site-header-inner">
        <a href="https://fshika.com/" className="brand">
          <span className="brand-mark">☺︎</span>
          <span className="brand-text">
            <span className="brand-sub">Recruit —</span>
            <span className="brand-name">Fデンタルオフィス 豊洲プライムスクエア院</span>
          </span>
        </a>
        <nav className="site-nav">
          <button onClick={() => scrollTo('philosophy')}>理念</button>
          <button onClick={() => scrollTo('message')}>院長メッセージ</button>
          <button onClick={() => scrollTo('requirements')}>募集要項</button>
          <button onClick={() => scrollTo('day')}>1日の流れ</button>
          <button onClick={() => scrollTo('honest')}>正直なお話</button>
          <button onClick={() => scrollTo('faq')}>FAQ</button>
        </nav>
        <button className="btn-entry-header" onClick={() => scrollTo('entry')}>
          応募する
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </div>
    </header>
  );
}
