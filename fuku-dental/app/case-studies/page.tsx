import Link from 'next/link';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { PageImage } from '@/components/PageImage';

const sections = [
  {
    id: 'orthodontics',
    label: 'ORTHODONTICS',
    title: '矯正治療の症例',
    description: '小児矯正を中心に、歯並び・噛み合わせの改善例を掲載しています。',
    href: '/kidsortho',
    cases: [
      {
        title: '反対咬合の改善',
        patient: '小児矯正',
        beforeId: 'hanntaikougou-before',
        afterId: 'hanntaikougou-after',
        description: '早期の小児矯正により、反対咬合を改善しました。',
        treatment: '小児矯正（第1期治療）',
        cost: '¥132,000（税込）',
        duration: '約1〜2年／月1回程度の通院',
        insurance: '自由診療（保険適用外）',
        risks: '装置による痛み・違和感、発音のしづらさ、むし歯・歯肉炎リスク、まれに後戻りの可能性があります。',
      },
      {
        title: '出っ歯の改善',
        patient: '小児矯正',
        beforeId: 'deppa-before',
        afterId: 'deppa-after',
        description: '前歯の突出感を整え、自然な口元を目指しました。',
        treatment: '小児矯正（第1期治療）',
        cost: '¥132,000（税込）',
        duration: '約1〜2年／月1回程度の通院',
        insurance: '自由診療（保険適用外）',
        risks: '装置による痛み・違和感、発音のしづらさ、むし歯・歯肉炎リスク、まれに後戻りの可能性があります。',
      },
      {
        title: '噛み合わせの改善',
        patient: '小児矯正',
        beforeId: 'kamiaase-before',
        afterId: 'kamiaase-after',
        description: '成長に合わせた矯正治療で、噛み合わせのバランスを整えました。',
        treatment: '小児矯正（第1期・第2期治療）',
        cost: '¥132,000〜¥660,000（税込）',
        duration: '約2〜3年／月1回程度の通院',
        insurance: '自由診療（保険適用外）',
        risks: '装置による痛み・違和感、発音のしづらさ、むし歯・歯肉炎リスク、歯根吸収、まれに後戻りの可能性があります。',
      },
    ],
  },
  {
    id: 'ceramic',
    label: 'CERAMIC',
    title: 'セラミック治療の症例',
    description: '色・形・噛み合わせを確認しながら、自然な見た目と機能性を整えた症例です。',
    href: '/ceramic',
    cases: [
      {
        title: '前歯のセラミック',
        patient: 'セラミック修復',
        beforeId: 'ceramic-before',
        afterId: 'ceramic-after',
        description: '前歯をセラミックで修復し、自然で美しい見た目を取り戻しました。',
        treatment: 'セラミッククラウンによる前歯補綴',
        cost: '¥143,000〜¥176,000（税込）/ 1歯',
        duration: '約2〜4週間／2〜4回程度の通院',
        insurance: '自由診療（保険適用外）',
        risks: '一時的な知覚過敏、噛み合わせの違和感、セラミックの破折・脱離、歯ぎしりが強い場合に欠ける可能性があります。',
      },
      {
        title: '全顎的な補綴治療',
        patient: '補綴治療',
        beforeId: 'zengaku-before',
        afterId: 'zengaku-after',
        description: 'お口全体の見た目と噛み合わせのバランスを整え、自然な口元へ改善しました。',
        treatment: '複数歯のセラミック補綴および噛み合わせの調整',
        cost: '治療本数・素材により異なります（例：ジルコニアセラミック ¥176,000（税込）/ 1歯、ジルコニア ¥143,000（税込）/ 1歯）',
        duration: '症例により異なります（目安：数ヶ月〜1年程度）',
        insurance: '自由診療（保険適用外）',
        risks: '一時的な知覚過敏、噛み合わせの違和感、セラミックの破折・脱離、歯の状態によって神経処置が必要になる可能性があります。',
      },
    ],
  },
  {
    id: 'implant',
    label: 'IMPLANT',
    title: 'インプラント治療の症例',
    description: '失った歯を補い、噛む機能と見た目の回復を目指した症例です。',
    href: '/implant',
    cases: [
      {
        title: 'インプラント治療',
        patient: '50代 男性',
        beforeId: 'implant-before',
        afterId: 'implant-after',
        description: '失った歯をインプラントで復元し、しっかり噛めるようになりました。',
        treatment: 'インプラント埋入および上部構造の装着',
        cost: '¥495,000〜¥595,000（税込）/ 1本',
        duration: '約4〜8ヶ月／複数回の通院',
        insurance: '自由診療（保険適用外）',
        risks: '術後の腫れ・痛み・出血、感染、神経麻痺、上顎洞炎、骨結合不全、インプラント周囲炎、メンテナンス不足による脱落の可能性があります。',
      },
    ],
  },
  {
    id: 'root-canal',
    label: 'ROOT CANAL',
    title: '根管治療の症例',
    description: '根管治療の症例写真は現在整理中です。掲載準備が整い次第、こちらに追加します。',
    href: '/root-canal',
    cases: [],
  },
] as const;

export default function CaseStudiesPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://fshika.com' },
      { '@type': 'ListItem', position: 2, name: '症例紹介', item: 'https://fshika.com/case-studies' },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FDFBF7] font-sans text-[#5A4D41]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />

      <main>
        <section className="px-5 py-20 md:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-[11px] tracking-[0.3em] text-[#0A8A85]">CASE STUDIES</p>
            <h1 className="font-serif text-4xl font-light leading-[1.35] text-[#5A4D41] md:text-5xl">
              症例紹介
            </h1>
            <div className="mx-auto mt-6 h-px w-16 bg-[#C5A572]" />
            <p className="mx-auto mt-8 max-w-2xl text-sm leading-[2.1] text-[#8D8070] md:text-base">
              治療カテゴリごとに、実際の症例をまとめて確認できるページです。
              セラミック・矯正・インプラントなど、掲載可能な症例から順次追加しています。
            </p>

            <nav className="mt-10 flex flex-wrap justify-center gap-3" aria-label="症例カテゴリ">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-full border border-[#E6E3DC] bg-white px-5 py-3 text-xs font-bold tracking-[0.12em] text-[#5A4D41] shadow-sm transition hover:border-[#0A8A85] hover:text-[#0A8A85]"
                >
                  {section.title.replace('の症例', '')}
                </a>
              ))}
            </nav>
          </div>
        </section>

        <section className="px-5 pb-24 md:pb-32">
          <div className="mx-auto max-w-6xl space-y-20 md:space-y-28">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-24"
                aria-labelledby={`${section.id}-heading`}
              >
                <div className="mb-10 text-center">
                  <p className="mb-3 text-[11px] tracking-[0.3em] text-[#C5A572]">{section.label}</p>
                  <h2 id={`${section.id}-heading`} className="font-serif text-3xl font-light leading-[1.45] text-[#5A4D41] md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mx-auto mt-5 max-w-2xl text-sm leading-[2] text-[#8D8070]">
                    {section.description}
                  </p>
                </div>

                {section.cases.length > 0 ? (
                  <div className="grid gap-6 lg:grid-cols-2">
                    {section.cases.map((caseStudy) => (
                      <article key={caseStudy.title} className="rounded-2xl border border-[#E6E3DC] bg-white p-5 shadow-sm md:p-7">
                        <div className="border-b border-[#E6E3DC] pb-5 text-center">
                          <p className="mb-1 text-xs text-[#8D8070]">{caseStudy.patient}</p>
                          <h3 className="font-serif text-xl text-[#5A4D41] md:text-2xl">{caseStudy.title}</h3>
                        </div>

                        <div className="mt-6 flex flex-col items-center gap-4 md:flex-row">
                          <div className="w-full">
                            <span className="mb-2 inline-block rounded bg-[#F0F0EE] px-3 py-1 text-xs font-medium text-[#8D8070]">
                              Before
                            </span>
                            <PageImage
                              path="/homepage"
                              imageId={caseStudy.beforeId}
                              alt={`${caseStudy.title} - Before`}
                              className="w-full aspect-[3/2] rounded-xl bg-[#F7F2EA] object-contain"
                            />
                          </div>

                          <div className="shrink-0 text-[#C5A572]">
                            <ChevronRight size={28} className="hidden md:block" />
                            <ChevronDown size={28} className="md:hidden" />
                          </div>

                          <div className="w-full">
                            <span className="mb-2 inline-block rounded bg-[#C5A572] px-3 py-1 text-xs font-medium text-white">
                              After
                            </span>
                            <PageImage
                              path="/homepage"
                              imageId={caseStudy.afterId}
                              alt={`${caseStudy.title} - After`}
                              className="w-full aspect-[3/2] rounded-xl bg-[#F7F2EA] object-contain"
                            />
                          </div>
                        </div>

                        <p className="mt-5 text-sm leading-[2] text-[#8D8070]">
                          {caseStudy.description}
                        </p>

                        {'treatment' in caseStudy && (
                          <div className="mt-6 rounded-2xl border border-[#E6E3DC] bg-[#FDFBF7] p-5">
                            <p className="mb-4 text-xs font-bold tracking-[0.18em] text-[#C5A572]">
                              医療広告ガイドラインに基づく表示
                            </p>
                            <dl className="space-y-3 text-xs leading-[1.8] text-[#5A4D41] md:text-sm">
                              {[
                                ['治療内容', caseStudy.treatment],
                                ['費用', caseStudy.cost],
                                ['治療期間・回数', caseStudy.duration],
                                ['保険適用', caseStudy.insurance],
                                ['主なリスク・副作用', caseStudy.risks],
                              ].map(([label, value]) => (
                                <div key={label} className="grid gap-1 md:grid-cols-[8rem_1fr] md:gap-4">
                                  <dt className="font-bold text-[#8B6F47]">{label}</dt>
                                  <dd>{value}</dd>
                                </div>
                              ))}
                            </dl>
                          </div>
                        )}
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="mx-auto max-w-3xl rounded-2xl border border-[#E6E3DC] bg-white p-8 text-center shadow-sm md:p-10">
                    <p className="font-serif text-2xl text-[#5A4D41]">掲載準備中</p>
                    <p className="mx-auto mt-4 max-w-xl text-sm leading-[2] text-[#8D8070]">
                      写真・治療内容・期間・費用・リスクなどを整理し、確認しやすい形で掲載予定です。
                    </p>
                  </div>
                )}

                <div className="mt-8 text-center">
                  <Link
                    href={section.href}
                    className="inline-flex items-center gap-2 rounded-full border border-[#C5A572] px-6 py-3 text-sm font-bold tracking-[0.08em] text-[#C5A572] transition hover:bg-[#C5A572] hover:text-white"
                  >
                    治療ページを見る
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </section>
            ))}

            <div className="mx-auto max-w-4xl rounded-2xl border border-[#E6E3DC] bg-white p-6 text-xs leading-[2] text-[#8D8070] md:p-8 md:text-sm">
              <p className="font-bold text-[#5A4D41]">症例掲載について</p>
              <p className="mt-3">
                治療結果には個人差があり、同様の結果を保証するものではありません。
                治療内容・期間・費用は、お口の状態や使用する装置・素材により異なります。詳しくは診察時にご説明します。
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
