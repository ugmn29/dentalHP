// Placeholder image component — diagonal stripes with label
const Placeholder = ({ label, aspect = "4/3", className = "", tone = "neutral" }) => {
  const palette = {
    neutral: { bg: 'var(--ph-bg)', stripe: 'var(--ph-stripe)', text: 'var(--ph-text)' },
    dark:    { bg: 'var(--accent-deep)', stripe: 'rgba(255,255,255,0.05)', text: 'rgba(255,255,255,0.55)' },
  }[tone];
  const style = {
    aspectRatio: aspect,
    background: `repeating-linear-gradient(135deg, ${palette.bg} 0 14px, ${palette.stripe} 14px 15px)`,
    color: palette.text,
  };
  return (
    <div className={`placeholder ${className}`} style={style}>
      <span className="placeholder-label">{label}</span>
    </div>
  );
};

window.Placeholder = Placeholder;
