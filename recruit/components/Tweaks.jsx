// Tweaks panel
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "navy",
  "serif": true,
  "dark": false
}/*EDITMODE-END*/;

const Tweaks = () => {
  const [available, setAvailable] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === '__activate_edit_mode') setAvailable(true);
      if (d.type === '__deactivate_edit_mode') { setAvailable(false); setOpen(false); }
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  // Apply theme to document
  React.useEffect(() => {
    document.documentElement.dataset.theme = state.theme;
    document.documentElement.dataset.serif = state.serif ? '1' : '0';
    document.documentElement.dataset.dark = state.dark ? '1' : '0';
  }, [state]);

  const set = (patch) => {
    const next = { ...state, ...patch };
    setState(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: patch }, '*');
  };

  if (!available) return null;

  return (
    <div className="tweaks-container">
      {!open && (
        <button className="tweaks-fab" onClick={() => setOpen(true)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.2 4.2l4.3 4.3M15.5 15.5l4.3 4.3M1 12h6M17 12h6M4.2 19.8l4.3-4.3M15.5 8.5l4.3-4.3"/>
          </svg>
          Tweaks
        </button>
      )}
      {open && (
        <div className="tweaks-panel">
          <div className="tweaks-head">
            <span>Tweaks</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="tweaks-section">
            <div className="tweaks-label">カラー</div>
            <div className="tweaks-options">
              {[
                { k: 'navy', label: 'Navy + Gold', c1: '#0f2a3f', c2: '#b88a3a' },
                { k: 'forest', label: 'Ivory + Forest', c1: '#1e3a2b', c2: '#c4965a' },
                { k: 'slate', label: 'Slate + Sand', c1: '#2a2e35', c2: '#b08b60' },
              ].map(t => (
                <button key={t.k} className={`tweaks-swatch ${state.theme === t.k ? 'active' : ''}`} onClick={() => set({ theme: t.k })}>
                  <span className="sw" style={{ background: t.c1 }}/>
                  <span className="sw" style={{ background: t.c2 }}/>
                  <span className="tweaks-swatch-label">{t.label}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="tweaks-section">
            <div className="tweaks-label">見出しフォント</div>
            <div className="tweaks-options">
              <button className={`tweaks-pill ${state.serif ? 'active' : ''}`} onClick={() => set({ serif: true })}>明朝</button>
              <button className={`tweaks-pill ${!state.serif ? 'active' : ''}`} onClick={() => set({ serif: false })}>ゴシック</button>
            </div>
          </div>
          <div className="tweaks-section">
            <div className="tweaks-label">モード</div>
            <div className="tweaks-options">
              <button className={`tweaks-pill ${!state.dark ? 'active' : ''}`} onClick={() => set({ dark: false })}>Light</button>
              <button className={`tweaks-pill ${state.dark ? 'active' : ''}`} onClick={() => set({ dark: true })}>Dark</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
window.Tweaks = Tweaks;
