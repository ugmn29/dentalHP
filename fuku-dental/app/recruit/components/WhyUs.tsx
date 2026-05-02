export default function WhyUs() {
  const pillars = [
    {
      no: '01',
      en: 'Oral Myofunctional Care',
      ja: '口腔育成',
      tag: '医院の主軸',
      lead: '0歳から通える歯科医院として、口腔育成を本気で実践・発信します。',
      body: 'MFT（口腔筋機能療法）、小児矯正、姿勢・呼吸指導まで。虫歯を治すだけではなく、「顔と健康の土台」を育てる歯科医療です。院内で実践しながら、発信を通じて社会に届け、「口腔育成において日本一になり、そのノウハウを世界へ届ける」ことを本気で目指します。',
      tags: ['MFT', '小児矯正', '姿勢・呼吸', '母子指導', '発信活動']
    },
    {
      no: '02',
      en: 'SNS Marketing',
      ja: 'SNSマーケティング',
      tag: '全員で取り組む',
      lead: 'Instagram・TikTok・YouTubeの企画から運用まで、スタッフが主体で関わります。',
      body: 'ただの「業務の一部」ではなく、医院の世界観を社会に届ける重要な仕事です。台本を書く、撮影する、編集する、分析する。一般的な歯科医院では得られない、メディア運用スキルが自然と身につきます。',
      tags: ['Instagram', 'TikTok', 'YouTube', '企画・撮影', '分析・運用']
    },
    {
      no: '03',
      en: 'Dental Technology',
      ja: 'テクノロジー活用',
      tag: '最新機器と共に',
      lead: 'デジタル機器・電子カルテ・AIツールを積極的に導入します。',
      body: '口腔内スキャナー、AI診断補助、自動化された電子カルテ、業務効率化のためのツール群。「新しいことを覚えるのが楽しい」と思える方にとっては、毎日がアップデートです。テクノロジーと診療をかけ合わせた、次世代の歯科医療を一緒に作ります。',
      tags: ['口腔内スキャナー', 'AI活用', '電子カルテ', '業務自動化']
    },
  ];

  return (
    <section id="why-us" className="section whyus" data-screen-label="WhyUs">
      <div className="whyus-grid">
        {pillars.map((p, i) => (
          <article key={i} className="whyus-card">
            <div className="whyus-card-head">
              <div className="whyus-no">{p.no}</div>
              <div className="whyus-tag">— {p.tag}</div>
            </div>
            <div className="whyus-titles">
              <div className="whyus-en">{p.en}</div>
              <h3 className="whyus-ja">{p.ja}</h3>
            </div>
            <p className="whyus-lead">{p.lead}</p>
            <p className="whyus-body">{p.body}</p>
            <div className="whyus-tags">
              {p.tags.map((t, j) => <span key={j} className="whyus-chip">{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
