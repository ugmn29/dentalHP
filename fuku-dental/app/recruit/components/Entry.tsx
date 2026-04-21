import { useState } from 'react';

const LINE_URL = 'https://lin.ee/7d04P9x';

export default function Entry() {
  const [role, setRole] = useState('歯科衛生士');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [employment, setEmployment] = useState('正社員');
  const [message, setMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    const subject = encodeURIComponent(`【応募】${role}（${employment}）- ${name}`);
    const body = encodeURIComponent(
      `■ 希望職種：${role}\n■ 雇用形態：${employment}\n■ お名前：${name}\n■ メール：${email}\n■ 電話：${phone}\n\n■ メッセージ：\n${message}`
    );
    window.location.href = `mailto:recruit@fshika.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="entry" className="section entry" data-screen-label="Entry">
        <div className="entry-done">
          <div className="entry-done-mark">✓</div>
          <h2 className="section-title">ご応募、ありがとうございます。</h2>
          <p>メーラーが起動します。送信のうえ、2〜3営業日以内に院長より直接ご連絡いたします。<br/>ご縁がありますように。</p>
          <button className="btn-ghost" onClick={() => setSubmitted(false)}>戻る</button>
        </div>
      </section>
    );
  }

  return (
    <section id="entry" className="section entry" data-screen-label="Entry">
      <div className="entry-grid-v2">
        <div className="entry-left">
          <div className="eyebrow">Entry</div>
          <h2 className="section-title huge">
            まずは、<br/>
            <em>話してみませんか。</em>
          </h2>
          <p className="entry-lead">
            書類選考よりも、<strong>まず話すこと</strong>を大切にしています。<br/>
            LINEでカジュアルにやりとりしましょう。<br/>
            「応募」より前の、ちょっとした質問で大丈夫です。
          </p>
        </div>

        <div className="entry-channels">
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="cta-line">
            <div className="cta-line-icon" aria-hidden="true">
              <svg viewBox="0 0 36 36" width="36" height="36"><path fill="#fff" d="M18 3C9.7 3 3 8.5 3 15.2c0 6.1 5.3 11.2 12.5 12.1.5.1 1.2.3 1.3.8.2.5.1 1.2 0 1.6l-.2 1.3c-.1.4-.3 1.5 1.3.8 1.6-.7 8.8-5.2 12-8.9 2.2-2.5 3.3-5 3.3-7.7C33 8.5 26.3 3 18 3zM12 19h-2c-.3 0-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5s.5.2.5.5V18H12c.3 0 .5.2.5.5s-.2.5-.5.5zm2.5-.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5s.5.2.5.5v6zm7.5 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-2.9-3.9v3.6c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-6c0-.2.1-.4.3-.5h.2c.2 0 .3.1.4.2L21 16.1v-3.6c0-.3.2-.5.5-.5s.5.2.5.5v6zm4.5-3.5c.3 0 .5.2.5.5s-.2.5-.5.5h-2v1.5h2c.3 0 .5.2.5.5s-.2.5-.5.5h-2.5c-.3 0-.5-.2-.5-.5v-6c0-.3.2-.5.5-.5H26.5c.3 0 .5.2.5.5s-.2.5-.5.5h-2V14h2c.3 0 .5.2.5.5s-.2.5-.5.5h-2v1h2z"/></svg>
            </div>
            <div className="cta-line-body">
              <div className="cta-line-label">Main CTA · いちばん早い連絡手段</div>
              <div className="cta-line-title">LINEで話を聞いてみる</div>
              <div className="cta-line-sub">友だち追加するだけ。24時間OK。院長が直接返信します。</div>
            </div>
            <div className="cta-line-arrow" aria-hidden="true">→</div>
          </a>

          <div className="entry-alt-head">
            <span>or —</span>
            <span>他の連絡方法</span>
          </div>

          <div className="entry-alt-list">
            <div className="entry-alt-item">
              <div className="entry-alt-label">メール</div>
              <div className="entry-alt-value">
                <a href="mailto:recruit@fshika.com">recruit@fshika.com</a>
              </div>
              <div className="entry-alt-sub">履歴書・職務経歴書の送付はこちら</div>
            </div>
            <div className="entry-alt-item">
              <div className="entry-alt-label">電話</div>
              <div className="entry-alt-value">
                <a href="tel:03-1234-5678">03-1234-5678</a>
              </div>
              <div className="entry-alt-sub">受付時間：平日 10:00-18:30 / 土日 9:00-16:00</div>
            </div>
            <div className="entry-alt-item">
              <div className="entry-alt-label">所在地</div>
              <div className="entry-alt-value">東京都江東区豊洲5-6-36<br/>豊洲プライムスクエア1階</div>
              <div className="entry-alt-sub">豊洲駅 6a出口 徒歩2分</div>
            </div>
          </div>

          <button type="button" className="entry-form-toggle" onClick={() => setShowForm(v => !v)}>
            {showForm ? '— フォームを閉じる' : '+ フォームから送る場合はこちら'}
          </button>
        </div>
      </div>

      {showForm && (
        <form className="entry-form entry-form-wide" onSubmit={submit}>
          <div className="form-row">
            <label>希望職種</label>
            <div className="chip-group">
              {['歯科衛生士', '歯科助手', '受付'].map(r => (
                <button key={r} type="button" className={`chip ${role === r ? 'active' : ''}`} onClick={() => setRole(r)}>{r}</button>
              ))}
            </div>
          </div>
          <div className="form-row">
            <label>雇用形態</label>
            <div className="chip-group">
              {['正社員', '時短正社員', 'パート'].map(r => (
                <button key={r} type="button" className={`chip ${employment === r ? 'active' : ''}`} onClick={() => setEmployment(r)}>{r}</button>
              ))}
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="name">お名前 <em>*</em></label>
            <input id="name" required value={name} onChange={e => setName(e.target.value)} placeholder="山田 花子" />
          </div>
          <div className="form-row form-row-2">
            <div>
              <label htmlFor="email">メール <em>*</em></label>
              <input id="email" type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="phone">電話</label>
              <input id="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="090-0000-0000" />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="msg">メッセージ</label>
            <textarea id="msg" rows={5} value={message} onChange={e => setMessage(e.target.value)} placeholder="志望動機、気になること、何でも。" />
          </div>
          <label className="form-check">
            <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} />
            <span>当院の<a href="#philosophy">理念・バリュー</a>を読み、共感したうえで応募します。</span>
          </label>
          <button type="submit" className="btn-primary btn-submit" disabled={!agreed || !name || !email}>
            応募を送信する
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </button>
          <p className="form-note">送信いただいた情報は採用選考のみに使用し、選考終了後は適切に廃棄します。</p>
        </form>
      )}
    </section>
  );
}
