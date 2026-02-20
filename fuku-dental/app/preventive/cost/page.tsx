import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import {
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: '予防歯科の費用｜予防歯科｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲の歯医者 F歯科の予防歯科費用をご案内。予防歯科の多くは保険診療で対応可能です。定期検診、クリーニング、フッ素塗布など、各予防処置ごとの費用目安と医療費控除について詳しくご紹介します。',
  keywords: '予防歯科,費用,保険診療,料金,医療費控除,定期検診,クリーニング,フッ素塗布,豊洲,歯医者',
  openGraph: {
    title: '予防歯科の費用｜予防歯科｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲の歯医者 F歯科の予防歯科費用をご案内。予防歯科の多くは保険診療で対応可能です。定期検診、クリーニング、フッ素塗布など、各予防処置ごとの費用目安と医療費控除について詳しくご紹介します。',
    type: 'website',
  },
};

export default function PreventiveCostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-[#FAF8F5] border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-[#8D8070]">
              <Home size={16} />
              <a href="/" className="hover:text-[#C5A572] transition-colors">ホーム</a>
              <ChevronRight size={16} />
              <a href="/preventive" className="hover:text-[#C5A572] transition-colors">予防歯科</a>
              <ChevronRight size={16} />
              <span className="text-[#C5A572] font-medium">予防歯科の費用</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                予防歯科の費用
              </h1>
              <PageImage path="/preventive/cost" alt="予防歯科の費用" />
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                透明性のある料金体系で、安心して予防ケアを
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                豊洲駅徒歩2分の当院では、基本的な予防処置は保険診療で対応可能。長期的な健康投資として最適です
              </p>
            </div>
          </div>
        </section>

        {/* 結論 Section */}
        <section className="py-2 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-2 border-[#C5A572]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-6 text-center font-serif">
                  結論：予防歯科は治療費を大幅に削減する賢い投資
                </h2>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="text-lg">
                    予防歯科の多くは<span className="font-bold bg-yellow-100">保険診療で対応可能</span>で、定期検診やクリーニングは3割負担で数千円程度です。一見、継続的な費用がかかるように感じますが、<span className="font-bold text-[#2E8B57]">虫歯や歯周病の治療費と比べると、長期的には大幅な医療費削減</span>につながります。
                  </p>
                  <div className="bg-[#FDFBF7] p-6 rounded-xl border-l-4 border-[#C5A572]">
                    <p className="font-bold text-xl mb-3 text-[#C5A572]">予防vs治療の費用比較</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>年間の予防費用：</strong>約12,000円〜20,000円（3ヶ月ごとのメンテナンス）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>虫歯1本の治療費：</strong>約5,000円〜数万円（被せ物が必要な場合）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>インプラント1本：</strong>約30万円〜50万円（歯を失った場合）</span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    また、予防歯科は<span className="font-bold bg-yellow-100">医療費控除の対象</span>となります。年間10万円を超える医療費がある場合、確定申告で税金の一部が還付されます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* 定期検診の費用 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  定期検診の費用
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    定期検診は<span className="bg-yellow-100 font-bold">保険診療で受けられる</span>予防処置です。虫歯や歯周病の早期発見により、将来的な治療費を大幅に削減できます。
                  </p>
                  <div>
                    <p className="font-bold mb-2">定期検診の費用内訳（3割負担の場合）：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>初診料：</strong>約900円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>歯周病検査（プロービング）：</strong>約1,200円〜1,800円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>レントゲン撮影（必要時）：</strong>約1,500円〜2,000円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>1回の検診費用（目安）：</strong>約2,000円〜4,000円</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <p className="text-sm">
                      <strong>早期発見のメリット：</strong>定期検診で虫歯を早期発見できれば、簡単な詰め物（約2,000円〜3,000円）で済みます。進行すると神経治療や被せ物が必要になり、数万円の費用がかかります。
                    </p>
                  </div>
                </div>
              </div>

              {/* クリーニング・PMTCの費用 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  クリーニング・PMTCの費用
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    歯石除去やPMTCにかかる費用です。<span className="bg-yellow-100 font-bold">保険適用の場合と自費診療の場合で費用が異なります</span>。歯周病治療の一環として行う場合は保険適用となります。
                  </p>
                  <div>
                    <p className="font-bold mb-2">クリーニング・PMTCの費用内訳：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>スケーリング（歯石除去・保険適用）：</strong>約1,000円〜2,000円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>PMTC（保険適用の場合）：</strong>約1,500円〜2,500円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>PMTC（自費診療の場合）：</strong>約5,000円〜10,000円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>1回のクリーニング費用（目安）：</strong>約3,000円〜5,000円（保険適用）</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <p className="text-sm">
                      <strong>自費診療との違い：</strong>保険適用のPMTCは歯周病治療の一環として行う場合に限られます。より徹底的なクリーニングや着色除去を希望される場合は、自費診療（約5,000円〜10,000円）となります。
                    </p>
                  </div>
                </div>
              </div>

              {/* フッ素塗布の費用 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  フッ素塗布の費用
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    フッ素塗布は<span className="bg-yellow-100 font-bold">年齢や保険適用の有無によって費用が異なります</span>。子どもの場合は保険適用となることが多く、比較的安価に受けられます。
                  </p>
                  <div>
                    <p className="font-bold mb-2">フッ素塗布の費用内訳：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>子ども（保険適用）：</strong>約500円〜1,000円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>大人（保険適用外・自費）：</strong>約1,000円〜3,000円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>高濃度フッ素（自費）：</strong>約2,000円〜5,000円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>効果：</strong>定期的な塗布で虫歯リスクを約40%低減</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <p className="text-sm">
                      <strong>コストパフォーマンス：</strong>子どもの虫歯治療は1本あたり約5,000円〜かかります。年間4回のフッ素塗布（約2,000円〜4,000円）で虫歯を予防できれば、大幅な医療費削減になります。
                    </p>
                  </div>
                </div>
              </div>

              {/* 年間の予防費用 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  年間の予防費用
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    定期的な予防ケアを受けた場合の年間費用の目安です。<span className="bg-yellow-100 font-bold">予防に投資することで、将来的な治療費を大幅に削減</span>できます。
                  </p>
                  <div>
                    <p className="font-bold mb-2">年間の予防費用（保険適用・3割負担）：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>3ヶ月ごとのメンテナンス（年4回）：</strong>約12,000円〜20,000円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>6ヶ月ごとのメンテナンス（年2回）：</strong>約6,000円〜10,000円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>子どものフッ素塗布（年4回）：</strong>約2,000円〜4,000円</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>予防効果：</strong>将来の治療費を年間数万円〜十数万円削減可能</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <p className="text-sm">
                      <strong>長期的な費用削減効果：</strong>虫歯や歯周病で歯を失うと、ブリッジ（約3万円〜）、入れ歯（約1万円〜10万円）、インプラント（約30万円〜50万円）などの高額な治療が必要になります。予防歯科は最もコストパフォーマンスの高い健康投資です。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#5A4D41] font-serif">
                予防歯科のメリット
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">01</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">保険診療で受けられる</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    基本的な予防処置（定期検診、歯石除去、フッ素塗布など）は保険診療で対応可能。3割負担で数千円程度です。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">02</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">医療費控除の対象</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    年間10万円を超える医療費がある場合、確定申告で税金の一部が還付されます。家族全員の医療費を合算できます。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">03</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">長期的な費用削減</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    虫歯や歯周病を予防することで、将来的に数十万円の治療費を節約できる可能性があります。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">04</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">透明性のある料金体系</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    保険診療の料金は全国一律で明確です。事前に費用目安をお伝えしますので、安心して受診いただけます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#5A4D41] font-serif">
                よくある質問
              </h3>
              <div className="space-y-6">

                {/* FAQ 1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">予防歯科の年間費用はどのくらいですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> メンテナンスの頻度によって異なります。<span className="font-bold">3ヶ月ごとのメンテナンス（年4回）の場合、年間12,000円〜20,000円程度</span>、6ヶ月ごと（年2回）の場合は年間6,000円〜10,000円程度です（保険適用・3割負担の場合）。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      一見高く感じるかもしれませんが、虫歯や歯周病の治療費（1本の虫歯治療で5,000円〜、歯周病治療で数万円）と比べると、長期的には大幅な節約になります。
                    </p>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">保険診療と自費診療の違いは何ですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">定期検診や基本的なスケーリング（歯石除去）は保険適用で受けられます</span>。一方、徹底的なPMTCや高濃度フッ素塗布は自費診療となる場合があります。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      ただし、歯周病治療の一環として行う場合は保険適用となることもあります。患者様のお口の状態やご希望に応じて、最適なプランをご提案します。
                    </p>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">予防歯科は本当に治療費の削減になりますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">はい、確実に削減になります</span>。例えば、虫歯を1本治療すると5,000円〜数万円（被せ物が必要な場合）、歯周病治療は数万円、インプラントは1本30万円以上かかります。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      一方、年間の予防費用は1〜2万円程度です。虫歯や歯周病を防ぐことで、将来的に数十万円の治療費を節約できる可能性があります。また、歯を失うリスクも大幅に減らせます。
                    </p>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">医療費控除について教えてください</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">予防歯科は医療費控除の対象</span>になります。1年間に支払った医療費が10万円を超える場合、確定申告で税金の一部が還付されます。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      医療費控除の対象：定期検診費用、クリーニング費用、フッ素塗布費用、通院のための交通費（公共交通機関）、処方された薬代。家族全員の医療費を合算できます。領収書の保管が必要です。
                    </p>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">支払い方法は何がありますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">現金、各種クレジットカードでのお支払いが可能</span>です。予防歯科の費用は比較的少額のため、通常は都度払いとなります。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      自費診療のPMTCを複数回まとめて契約する場合など、状況によっては分割払いのご相談も可能です。お気軽にお問い合わせください。
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#5A4D41] font-serif">
                関連ページ
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/preventive" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4">🦷</div>
                  <h4 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">予防歯科TOP</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed mb-3">
                    予防歯科の概要と特徴について詳しくご紹介します。
                  </p>
                  <span className="text-[#C5A572] text-sm inline-flex items-center gap-1">
                    詳しく見る <ArrowRight size={14} />
                  </span>
                </a>
                <a href="/preventive/checkup" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4">🔍</div>
                  <h4 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">定期検診</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed mb-3">
                    虫歯や歯周病の早期発見・早期治療を目的とした重要な予防処置です。
                  </p>
                  <span className="text-[#C5A572] text-sm inline-flex items-center gap-1">
                    詳しく見る <ArrowRight size={14} />
                  </span>
                </a>
                <a href="/preventive/cleaning" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4">✨</div>
                  <h4 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">クリーニング・PMTC</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed mb-3">
                    専門的な歯のクリーニングで、虫歯や歯周病を予防します。
                  </p>
                  <span className="text-[#C5A572] text-sm inline-flex items-center gap-1">
                    詳しく見る <ArrowRight size={14} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-b from-[#C5A572] to-[#B59562] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                予防歯科で健康と医療費を守りましょう
              </h3>
              <p className="text-lg mb-8 opacity-95">
                透明性のある料金体系で、安心して予防ケアを受けていただけます。<br />
                長期的な健康投資として、予防歯科を始めませんか。
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#C5A572] font-bold py-4 px-8 rounded-full hover:bg-gray-50 transition-colors shadow-lg"
              >
                ご予約・お問い合わせ
              </a>
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
