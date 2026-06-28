"use client";

import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import { FeatureSection } from '@/components/FeatureSection';
import { RelatedPagesSection } from '@/components/RelatedPagesSection';
import { FaqSection } from '@/components/FaqSection';
import { whiteningRelatedPages } from '@/data/related-pages';
import { ArrowRight, Calendar, ChevronRight, CheckCircle2 } from 'lucide-react';
import { MobileTreatmentHero } from '@/components/MobileTreatmentHero';
import { WEB_RESERVATION_URL } from '@/lib/reservation';

export default function WhiteningPage() {

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-[#4A4A4A] overflow-x-hidden" style={{ wordBreak: 'normal', overflowWrap: 'anywhere' }}>
        <MobileTreatmentHero
          imageSrc="/images/pages/mobile-heroes/whitening-hero.webp"
          tabletSrc="/images/pages/mobile-heroes/whitening-hero-tablet.webp"
          desktopSrc="/images/pages/mobile-heroes/whitening-hero-desktop.webp"
          title="ホワイトニング"
          alt="自然な白さで、口元に清潔感を ホワイトニング"
        />

        {/* Concept Message Section */}
        <section className="pt-6 md:pt-2 pb-2 md:pb-2 bg-[#FDFBF7] relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(#C5A572_1px,transparent_1px)] [background-size:20px_20px]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <p className="text-[#C5A572] tracking-[0.4em] font-medium mb-6 text-xs md:text-sm uppercase font-serif">
              PROFESSIONAL WHITENING
            </p>
            <h2 className="text-2xl md:text-3xl font-medium text-[#5A4D41] font-serif leading-loose tracking-widest">
              白く美しい歯で<br />
              自信あふれる笑顔を手に入れる
            </h2>
          </div>
        </section>

        {/* Case Studies Section - Before/After */}
        <section className="pt-8 pb-8 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-8">
              <p className="text-[#C5A572] tracking-[0.2em] font-bold mb-2">CASE STUDIES</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">症例紹介</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Case.01",
                  desc: "コーヒーによる着色を、オフィスホワイトニングで自然な白さに改善しました。",
                  imageId: "case1"
                },
                {
                  title: "Case.02",
                  desc: "デュアルホワイトニングにより、結婚式前に理想の白さを実現しました。",
                  imageId: "case2"
                },
                {
                  title: "Case.03",
                  desc: "ホームホワイトニングで、自然で長持ちする白さを手に入れました。",
                  imageId: "case3"
                }
              ].map((item, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg">
                    <PageImage
                      path="/whitening"
                      imageId={item.imageId}
                      alt={item.title}
                      className="w-full aspect-[3/2] object-contain bg-[#F7F2EA] transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full">
                      <span className="text-[#C5A572] font-serif font-bold">{item.title}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                    {item.desc.substring(0, 20)}...
                  </h3>
                  <p className="text-[#8D8070] text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Web予約バナー */}
            <div className="mt-12">
              <a href={WEB_RESERVATION_URL} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src="/images/web-reservation-banner.webp"
                  alt="Web予約" loading="lazy" decoding="async" className="w-full max-w-2xl mx-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </a>
            </div>
          </div>
        </section>

        <FeatureSection
          title="当院の特徴"
          pagePath="/whitening"
          features={[
            { id: "01", title: "Pre-Treatment Cleaning", highlight: "処置前の徹底した着色除去", summary: "ホワイトニング前に表面の着色や歯石を除去し、薬剤の浸透効率を高めます。", details: [], imageId: "feature1" },
            { id: "02", title: "Various Options", highlight: "豊富な種類から選択可能", summary: "オフィス・ホーム・デュアルなど、ライフスタイルや目標に合わせて選べます。", details: [], imageId: "feature2" },
            { id: "03", title: "No Traditional Impression", highlight: "従来の歯型取り不要", summary: "デジタルスキャンを活用し、不快な歯型取りを減らしてマウスピースを作製します。", details: [], imageId: "feature3" },
            { id: "04", title: "High Quality Agent", highlight: "高品質な薬剤を使用", summary: "効果と安全性に配慮した薬剤で、自然な白さを目指します。", details: [], imageId: "feature4" },
            { id: "05", title: "Original Materials", highlight: "独自の資料でセルフケアをサポート", summary: "着色しにくい食生活や日常ケアの方法をお伝えし、白さの維持を支えます。", details: [], imageId: "feature5" },
          ]}
        />

        {/* ホワイトニングとは Section */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                白く美しい歯で、<br className="md:hidden" />笑顔に自信を取り戻しませんか？
              </h2>
              <p className="text-lg leading-loose text-[#8D8070] max-w-3xl mx-auto">
                歯の黄ばみや着色が気になる方でも、<br />
                適切なホワイトニングを行えば、<strong>自然で美しい白さを手に入れることができます</strong>。<br />
                当院では、<strong>「安全性」</strong>と<strong>「効果」</strong>を重視したホワイトニングを提供しています。
              </p>
            </div>

            {/* ホワイトニングとは */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">ホワイトニングとは</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  ホワイトニングとは、歯を削ることなく、専用の薬剤を使用して歯を白くする治療法です。
                  <span className="font-bold bg-yellow-100">歯科医院で行うオフィスホワイトニング、ご自宅で行うホームホワイトニング、そして両方を併用するデュアルホワイトニング</span>の3つの方法があります。
                </p>
                <p>
                  ホワイトニング剤に含まれる<span className="text-[#2E8B57] font-bold">過酸化水素または過酸化尿素が、歯の内部に浸透し、着色物質を分解</span>します。
                  これにより、歯の表面だけでなく内部からも白くすることができます。
                </p>
                <p>
                  ホワイトニングは<span className="font-bold bg-yellow-100">「笑顔の自信」</span>を取り戻す重要な治療です。
                  適切な方法で行うことで、安全かつ効果的に白く美しい歯を手に入れることができます。
                </p>
              </div>
            </div>

            {/* こんなお悩みありませんか */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">こんなお悩みありませんか？</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "コーヒーやワインで歯が黄ばんでいる",
                      "歯の色が気になって笑顔に自信がない",
                      "写真を撮るときに歯を見せたくない",
                      "仕事やプライベートで好印象を与えたい",
                      "大切なイベント前に歯を白くしたい",
                      "加齢による歯の黄ばみが気になる"
                    ].map((symptom, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41] font-medium">{symptom}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-[#5A4D41] font-bold text-center">
                      このようなお悩みは、<span className="text-[#C5A572]">プロフェッショナルホワイトニング</span>で解決できます。<br />
                      まずはお気軽にご相談ください。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3つのホワイトニング方法 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">3つのホワイトニング方法</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                <p>
                  当院では、<span className="font-bold bg-yellow-100">オフィスホワイトニング、ホームホワイトニング、デュアルホワイトニング</span>の3つの方法をご用意しています。
                  それぞれの特徴や効果、おすすめの方など、詳しくは専用ページでご確認いただけます。
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/whitening/types"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                >
                  3つの方法を詳しく見る <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* 料金・費用について */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">料金・費用について</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                <p>
                  ホワイトニングの料金は、選択する方法によって異なります。
                  オフィスホワイトニングは即効性が高く、ホームホワイトニングは持続性に優れています。
                  それぞれの<span className="font-bold bg-yellow-100">料金の目安や費用対効果</span>について、詳しくは料金ページでご確認ください。
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/whitening/cost"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                >
                  料金について詳しく見る <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* 効果の持続期間 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">効果の持続期間</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                <p>
                  ホワイトニングの効果は、<span className="text-[#2E8B57] font-bold">施術方法や日々のケアによって持続期間が異なります</span>。
                  オフィスホワイトニングは3〜6ヶ月、ホームホワイトニングは6〜12ヶ月、デュアルホワイトニングは1〜2年程度持続します。
                  白さを長持ちさせるコツや<span className="font-bold bg-yellow-100">メンテナンス方法</span>について、詳しくはこちらをご覧ください。
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/whitening/duration"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                >
                  持続期間について詳しく見る <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* 安全性・副作用 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">安全性・副作用</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="space-y-4 text-[#5A4D41] leading-loose mb-6">
                <p>
                  当院では、<span className="font-bold bg-yellow-100">厚生労働省認可の高品質なホワイトニング剤</span>を使用しています。
                  安全性が実証された薬剤のみを使用しますが、一時的に知覚過敏を感じることがあります。
                  <span className="text-[#2E8B57] font-bold">リスクや対策、施術できない方</span>について、詳しくは安全性ページでご確認ください。
                </p>
              </div>
              <div className="text-center">
                <a
                  href="/whitening/safety"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                >
                  安全性・副作用について詳しく見る <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* 他院との比較 */}
            <div className="mb-16 bg-white rounded-2xl shadow-lg p-6 md:p-10">
              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">当院のホワイトニングが選ばれる理由</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  "処置前の徹底した着色除去で最大限の効果",
                  "豊富な種類から最適なプランを選択可能",
                  "従来の歯型取り不要で快適な治療体験",
                  "厚生労働省認可の高品質な薬剤を使用",
                  "独自の資料配布でセルフケアをサポート",
                  "経験豊富なスタッフによる丁寧なカウンセリング"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#C5A572] flex-shrink-0 mt-0.5" />
                    <span className="text-[#5A4D41] font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <a
                  href="/whitening/comparison"
                  className="inline-flex items-center gap-2 text-[#C5A572] hover:text-[#B59562] transition-colors border-b border-[#C5A572] pb-1 font-medium"
                >
                  他院との比較を詳しく見る <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <FaqSection
          title="よくある質問"
          className="pb-2"
          items={[
            {
              q: 'ホワイトニングは痛いですか？',
              a: '個人差がありますが、一時的に知覚過敏（歯がしみる）を感じることがあります。当院では、知覚過敏を軽減する薬剤や施術方法を採用しています。',
              note: '施術後24〜48時間で症状は治まることがほとんどです。',
              noteTone: 'yellow',
            },
            {
              q: 'どれくらい白くなりますか？',
              a: '個人差がありますが、一般的に歯の色のトーンを3〜8段階明るくすることができます。元の歯の色や着色の度合いによって効果は異なります。',
              note: 'カウンセリング時にシェードガイドで目標の白さを確認します。',
            },
            {
              q: '効果はどれくらい持続しますか？',
              a: 'オフィスホワイトニングは3〜6ヶ月、ホームホワイトニングは6〜12ヶ月、デュアルホワイトニングは1〜2年程度持続します。',
              note: '食生活や口腔ケアによって持続期間は変わります。定期的なタッチアップで白さを維持できます。',
              noteTone: 'yellow',
            },
            {
              q: '誰でもホワイトニングできますか？',
              a: '以下の方はホワイトニングができない、または注意が必要です：妊娠中・授乳中の方、18歳未満の方、重度の知覚過敏がある方、エナメル質形成不全の方、無カタラーゼ症の方。',
              note: 'カウンセリング時に詳しく確認いたします。',
            },
            {
              q: '虫歯や歯周病があってもできますか？',
              a: '虫歯や歯周病がある場合は、先にそれらの治療を行ってからホワイトニングを行います。',
              note: '健康な歯と歯茎の状態でホワイトニングを受けることが、最も効果的で安全です。',
              noteTone: 'yellow',
            },
            {
              q: 'ホワイトニング後の注意点はありますか？',
              a: 'ホワイトニング後24〜48時間は、着色しやすい食べ物や飲み物（コーヒー、紅茶、赤ワイン、カレーなど）を避けることをおすすめします。',
              note: 'また、喫煙も控えてください。この期間は歯が着色物質を吸収しやすい状態です。',
            },
          ]}
        />

        {/* ホワイトニングについて詳しく知る */}
        <RelatedPagesSection
          title="ホワイトニングについて詳しく知る"
          description="気になる項目をクリックして、詳しい情報をご覧ください"
          items={whiteningRelatedPages}
          currentPath="/whitening"
        />


                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>
            </main>
      <Footer />
    </>
  );
}
