const LINE_URL = 'https://lin.ee/7d04P9x';

export default function FloatingLine() {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-line"
      aria-label="LINEで応募する"
    >
      <svg viewBox="0 0 36 36" width="28" height="28" aria-hidden="true">
        <path fill="#fff" d="M18 3C9.7 3 3 8.5 3 15.2c0 6.1 5.3 11.2 12.5 12.1.5.1 1.2.3 1.3.8.2.5.1 1.2 0 1.6l-.2 1.3c-.1.4-.3 1.5 1.3.8 1.6-.7 8.8-5.2 12-8.9 2.2-2.5 3.3-5 3.3-7.7C33 8.5 26.3 3 18 3zM12 19h-2c-.3 0-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5s.5.2.5.5V18H12c.3 0 .5.2.5.5s-.2.5-.5.5zm2.5-.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5s.5.2.5.5v6zm7.5 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-2.9-3.9v3.6c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-6c0-.2.1-.4.3-.5h.2c.2 0 .3.1.4.2L21 16.1v-3.6c0-.3.2-.5.5-.5s.5.2.5.5v6zm4.5-3.5c.3 0 .5.2.5.5s-.2.5-.5.5h-2v1.5h2c.3 0 .5.2.5.5s-.2.5-.5.5h-2.5c-.3 0-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5H26.5c.3 0 .5.2.5.5s-.2.5-.5.5h-2V14h2c.3 0 .5.2.5.5s-.2.5-.5.5h-2v1h2z"/>
      </svg>
      <span className="floating-line-text">LINEで応募</span>
    </a>
  );
}
