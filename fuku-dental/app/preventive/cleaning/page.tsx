import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import {
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'クリーニング・PMTC｜専門的な歯のクリーニングで虫歯・歯周病予防｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '歯科衛生士による専門的なPMTCで、普段の歯磨きでは落としきれないバイオフィルムや着色を除去。虫歯・歯周病のリスクを大幅に軽減します。',
  keywords: 'PMTC,クリーニング,歯のクリーニング,専門的歯面清掃,虫歯予防,歯周病予防,予防歯科',
};

export default function PreventiveCleaningPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#C5A572] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/preventive" className="hover:text-[#C5A572]">
                予防歯科
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572]">クリーニング・PMTC</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                クリーニング・PMTC
              </h1>
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                専門的な歯のクリーニングで虫歯・歯周病予防
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                歯科衛生士による徹底的なクリーニングで、お口の健康を守ります
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* 結論 */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                結論
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
                <p>
                  PMTC（Professional Mechanical Tooth Cleaning）は、<span className="bg-yellow-100 font-bold">歯科衛生士による専門的な歯のクリーニング</span>です。
                  普段の歯磨きでは落としきれないバイオフィルム（細菌の膜）や着色を除去し、<span className="bg-yellow-100 font-bold">虫歯や歯周病のリスクを大幅に軽減</span>します。
                </p>
                <p>
                  定期的なPMTCを受けている方は、<span className="text-[#2E8B57] font-bold">虫歯や歯周病の発生率が約70%も低下</span>すると言われています。
                  当院では、経験豊富な歯科衛生士が、患者様一人ひとりのお口の状態に合わせて、丁寧にクリーニングを行います。
                </p>
              </div>
            </div>

            {/* PMTCの内容 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">PMTCの内容</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* 染め出し検査 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    染め出し検査
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      専用の染色液で磨き残しを可視化します。<span className="bg-yellow-100 font-bold">普段見えにくいプラーク（歯垢）が赤く染まる</span>ことで、磨き残しの癖を把握できます。
                    </p>
                    <div>
                      <p className="font-bold mb-2">効果：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>特殊な染色液でプラークを赤く染色</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>磨き残しやすい箇所を視覚的に確認</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>個別の磨き残しパターンを分析</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>効果的なブラッシング方法をアドバイス</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>重要性：</strong>ご自身の磨き残しの癖を知ることで、日々のブラッシングの質が向上します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* スケーリング */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    スケーリング（歯石除去）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      超音波スケーラーとハンドスケーラーを使い分けて、<span className="bg-yellow-100 font-bold">歯石を徹底的に除去</span>します。歯石は虫歯や歯周病の原因となるため、定期的な除去が重要です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">処置内容：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>超音波スケーラーで硬い歯石を効率的に除去</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>ハンドスケーラーで細部まで丁寧に清掃</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯周ポケット内の歯石も除去</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>痛みが心配な方には表面麻酔を使用</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>歯石の危険性：</strong>歯石は細菌の温床となり、放置すると歯周病が進行します。定期的な除去が不可欠です。
                      </p>
                    </div>
                  </div>
                </div>

                {/* PMTC */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    PMTC（専門的歯面清掃）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      専用の器具とペーストで、<span className="bg-yellow-100 font-bold">バイオフィルム（細菌の膜）や着色を除去</span>し、歯面をツルツルに磨き上げます。仕上げにフッ素を塗布して虫歯予防効果を高めます。
                    </p>
                    <div>
                      <p className="font-bold mb-2">処置内容：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>ラバーカップやブラシで歯面を丁寧に研磨</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>バイオフィルムを徹底的に除去</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>着色（ステイン）も除去して自然な白さに</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>フッ素塗布で歯質を強化し虫歯予防</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <p className="text-sm">
                        <strong className="text-[#2E8B57]">バイオフィルムとは：</strong>
                        細菌が作る膜で、歯ブラシでは除去できません。PMTCで定期的に除去することが、虫歯・歯周病予防の鍵です。
                      </p>
                    </div>
                  </div>
                </div>

                {/* フロス・歯間清掃 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    フロス・歯間清掃
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      歯と歯の間は歯ブラシでは届きません。<span className="bg-yellow-100 font-bold">デンタルフロスや歯間ブラシ</span>で、歯間部のプラークや食べかすを徹底的に除去します。
                    </p>
                    <div>
                      <p className="font-bold mb-2">処置内容：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>デンタルフロスで歯間のプラークを除去</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯間ブラシで広めの隙間を清掃</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯間部の虫歯予防に効果的</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>正しい使い方をレクチャー</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>データ：</strong>虫歯の約90%は歯と歯の間から発生します。歯間清掃は虫歯予防に不可欠です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PMTCのメリット */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">PMTCのメリット</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    1. 虫歯や歯周病のリスクを約70%低減
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    定期的なPMTCで<span className="bg-yellow-100 font-bold">バイオフィルムを除去</span>することで、虫歯や歯周病の発生率が大幅に低下します。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>研究結果：</strong>3ヶ月ごとのPMTCで、虫歯発生率が約70%減少することが報告されています。
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    2. 口臭の改善と予防
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    口臭の原因となる<span className="bg-yellow-100 font-bold">細菌や食べかすを徹底的に除去</span>することで、口臭が改善します。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    3. 歯の着色除去で自然な美しさを取り戻す
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    コーヒーや紅茶、タバコによる<span className="bg-yellow-100 font-bold">着色（ステイン）を除去</span>し、歯本来の白さを取り戻します。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    4. 歯がツルツルになり爽快感が得られる
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    歯面を研磨することで、<span className="text-[#2E8B57] font-bold">歯がツルツルになり、舌触りが良くなります</span>。清潔で爽快な感覚を実感できます。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-6 md:py-6 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">クリーニング・PMTCに関するよくある質問</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* Q1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">PMTCとクリーニングは違いますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> PMTCは<span className="font-bold">専門的なクリーニングの一種</span>で、より丁寧で徹底的な清掃を行います。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      一般的なクリーニングは歯石除去が中心ですが、PMTCではバイオフィルム（細菌の膜）の除去、歯面の研磨、フッ素塗布まで実施します。当院では、クリーニングの際にPMTCまで行い、予防効果を高めています。
                    </p>
                  </div>
                </div>

                {/* Q2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">どのくらいの頻度で受けるべきですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 一般的には<span className="font-bold">3〜6ヶ月ごとのクリーニング</span>をお勧めしています。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      虫歯や歯周病のリスクが高い方、歯石が溜まりやすい方は3ヶ月ごと、リスクが低く良好な状態を保てている方は6ヶ月ごとで十分な場合もあります。お口の状態に応じて、最適な間隔をご提案します。
                    </p>
                  </div>
                </div>

                {/* Q3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">痛みはありますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 通常のクリーニングやPMTCは、<span className="font-bold">ほとんど痛みを感じません</span>。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      ただし、歯茎の炎症が強い場合や知覚過敏がある場合は、多少の不快感を感じることがあります。痛みが心配な方は、表面麻酔や局所麻酔を使用することも可能ですので、遠慮なくお申し出ください。
                    </p>
                  </div>
                </div>

                {/* Q4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">保険は適用されますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 基本的なスケーリング（歯石除去）は<span className="font-bold">保険適用</span>で受けられます。費用は1,500円〜2,500円程度（3割負担の場合）です。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      一方、PMTCは保険適用外となる場合もあり、その場合は自費で5,000円〜10,000円程度かかります。ただし、歯周病治療の一環として行う場合は保険適用となることもありますので、詳しくは受診時にご案内いたします。
                    </p>
                  </div>
                </div>

                {/* Q5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニングとは違いますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> はい、異なります。PMTCは<span className="font-bold">着色（ステイン）を除去して歯本来の白さを取り戻す予防処置</span>です。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      一方、ホワイトニングは歯の内部から漂白して、歯本来の色よりも白くする審美治療です。着色が気になる程度であれば、まずはPMTCをお試しいただき、さらに白くしたい場合はホワイトニングをご検討ください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">関連ページ</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/preventive" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">予防歯科TOP</h3>
                  <p className="text-[#8D8070] mb-4">
                    予防歯科の概要と特徴
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/preventive/checkup" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">定期検診</h3>
                  <p className="text-[#8D8070] mb-4">
                    虫歯・歯周病の早期発見
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/preventive/fluoride" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">フッ素塗布</h3>
                  <p className="text-[#8D8070] mb-4">
                    歯質を強化し虫歯を予防
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                専門的なクリーニングで<br />
                お口の健康を守ります
              </h2>
              <p className="text-xl mb-8 text-white/90">
                無料カウンセリングで、<br className="md:hidden" />
                あなたに最適なケアをご提案します
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                >
                  無料カウンセリング予約
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
                <Link
                  href="tel:0312345678"
                  className="inline-flex items-center justify-center bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white"
                >
                  電話で相談する
                </Link>
              </div>
            </div>
          </div>
        </section>
                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>
            </main>
      <Footer />
    </>
  );
}
