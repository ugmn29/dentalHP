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
    {
      no: '04',
      en: 'Assistant & Branding',
      ja: '秘書業務・ブランディング',
      tag: '経営視点が育つ',
      lead: '診療の枠を超えて、医院経営とブランディングに関わるチャンスがあります。',
      body: '院長秘書的な業務、外部との連絡調整、イベント企画、ブランド設計への参画など。「医院を一緒に育てる」ポジションで働きたい方に、他では得られない経験を用意しています。',
      tags: ['秘書業務', '広報', 'イベント', 'ブランディング']
    },
  ];

  return (
    <section id="why-us" className="section whyus" data-screen-label="WhyUs">
      <div className="whyus-head">
        <div className="eyebrow">Why Choose Us</div>
        <h2 className="section-title huge">
          ここでしか<br/>
          <em>学べないこと</em>が、<br/>
          あります。
        </h2>
        <p className="section-intro">
          一般的な歯科医院では経験できない4つの領域が、Fデンタルオフィスにはあります。<br/>
          <strong>「診療スキルだけでは終わらないキャリアを築きたい」</strong>方に、ぜひ読んでいただきたいです。
        </p>
      </div>

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

      <div className="whyus-note">
        <div className="whyus-note-mark">※</div>
        <p>これらは「いつかやりたい」ではなく、<strong>開業初日から取り組む柱</strong>です。関わる度合いは役割や希望に応じて調整しますが、どのポジションの方にも、必ず関わる機会があります。</p>
      </div>
    </section>
  );
}
