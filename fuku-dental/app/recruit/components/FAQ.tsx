import { useState } from 'react';

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const items = [
    {
      q: '試用期間はありますか？',
      a: '6ヶ月の試用期間があります。試用期間中は賃金が基準額より10,000〜20,000円減額となりますが、評価手当・インセンティブ等の対象にはなります。'
    },
    {
      q: '未経験・ブランクありでも応募できますか？',
      a: '歯科衛生士・歯科助手・受付いずれもご相談ください。助手・受付は資格不要、ブランクのある歯科衛生士さんも歓迎です。院内バイブルと先輩のサポートでキャッチアップいただけます。'
    },
    {
      q: '残業は多いですか？',
      a: '月30時間分を固定残業代（45,000円）として支給しています。平日の所定終業（18:45）後の片付け等で1日約30分程度。超過分は別途支給します。'
    },
    {
      q: '有給は取りやすいですか？',
      a: '入社半年後に10日付与（法定通り）。原則1ヶ月前までの申請ですが、1ヶ月を切っても院長への直接申請で対応可能です（精勤手当も支給されます）。'
    },
    {
      q: '妊娠・出産後も働き続けられますか？',
      a: 'はい。①正社員 ②時短正社員（週30時間） ③パート ④退職 の4パターンから選べます。出産お祝い金・復職祝い金（各100,000円）もご用意しています。'
    },
    {
      q: '身だしなみのルールは？',
      a: 'スクラブは医院指定。髪色はJHCA 7〜8程度まで、ネイルは指先から3mm以内・肌馴染みの良い単色。清潔感がベースです。'
    },
    {
      q: '副業はできますか？',
      a: '届出制です。事前に院長の許可を得ていただければ可能です。'
    },
    {
      q: '応募から入職までの流れは？',
      a: 'ご応募 → 書類確認 → 院長面接（1〜2回）→ 内定 → 入職。入職後2週間以内に秘密保持誓約書をご提出いただきます。'
    },
  ];
  return (
    <section id="faq" className="section faq" data-screen-label="FAQ">
      <div className="section-head">
        <div className="eyebrow">FAQ</div>
        <h2 className="section-title">よくある質問</h2>
      </div>
      <div className="faq-list">
        {items.map((it, i) => (
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              <span className="faq-q-marker">Q</span>
              <span className="faq-q-text">{it.q}</span>
              <span className="faq-q-chev">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && (
              <div className="faq-a">
                <span className="faq-a-marker">A</span>
                <span className="faq-a-text">{it.a}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
