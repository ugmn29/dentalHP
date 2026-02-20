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
  title: '虫歯の治療方法 | コンポジットレジン・インレー・クラウン・根管治療 | F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲の歯医者 F歯科が虫歯の進行度に応じた治療方法を詳しく解説。コンポジットレジン、インレー、クラウン、根管治療など、それぞれの特徴、メリット・デメリット、費用について。',
  keywords: '虫歯治療,コンポジットレジン,インレー,クラウン,根管治療,詰め物,被せ物,保険治療,自費治療,豊洲,歯医者',
  openGraph: {
    title: '虫歯の治療方法 | コンポジットレジン・インレー・クラウン・根管治療 | F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '虫歯の進行度に応じた治療方法を詳しく解説。コンポジットレジン、インレー、クラウン、根管治療の特徴・メリット・費用について。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/cavity/treatment-methods',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function TreatmentMethodsPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <nav className="bg-[#FDFBF7] py-3 border-b border-[#E5E5E5]">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="/" className="text-[#8D8070] hover:text-[#C5A572] transition-colors flex items-center">
                  <Home size={16} className="mr-1" />
                  ホーム
                </a>
              </li>
              <ChevronRight size={16} className="text-[#8D8070]" />
              <li>
                <a href="/cavity" className="text-[#8D8070] hover:text-[#C5A572] transition-colors">
                  虫歯治療
                </a>
              </li>
              <ChevronRight size={16} className="text-[#8D8070]" />
              <li className="text-[#5A4D41] font-medium">
                虫歯の治療方法
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                虫歯の治療方法
              </h1>
              <PageImage path="/cavity/treatment-methods" alt="虫歯の治療方法" />
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-[#5A4D41] leading-relaxed">
                虫歯の進行度に応じた最適な治療法をご提案<br />
                <span className="text-base text-[#8D8070] mt-2 inline-block">豊洲の歯科 F歯科が解説｜コンポジットレジン・インレー・クラウン・根管治療</span>
              </p>
            </div>
          </div>
        </section>

        {/* 結論 Section */}
        <section className="py-2 bg-gradient-to-br from-[#C5A572]/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-[#C5A572]">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#5A4D41] font-serif text-center">
                  結論
                </h2>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="text-lg">
                    虫歯の治療方法は、<span className="bg-yellow-100 font-bold">虫歯の進行度（C1〜C4）によって異なります</span>。
                  </p>
                  <p>
                    初期の虫歯（C1）では<strong className="text-[#C5A572]">コンポジットレジン充填</strong>で1日で治療可能ですが、
                    進行した虫歯（C2）では<strong className="text-[#C5A572]">インレー（詰め物）</strong>、
                    さらに進行した虫歯（C3）では<strong className="text-[#C5A572]">クラウン（被せ物）</strong>や<strong className="text-[#C5A572]">根管治療</strong>が必要になります。
                  </p>
                  <p>
                    <span className="text-[#2E8B57] font-bold">早期発見・早期治療で、削る量を最小限に抑え、治療期間も短縮できます</span>。
                    保険適用の治療と自費治療の選択肢もございますので、患者様のご希望に応じて最適な治療方法をご提案いたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-6 md:py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {/* コンポジットレジン充填 */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    コンポジットレジン充填
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[#5A4D41] leading-loose mb-4">
                        <span className="bg-yellow-100 font-bold">歯科用プラスチック（レジン）を虫歯部分に直接詰める治療法</span>です。
                        小さな虫歯や初期の虫歯（C1）に適しており、<strong className="text-[#2E8B57]">1日で治療が完了</strong>します。
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        適応症例
                      </h4>
                      <div className="space-y-2 text-[#5A4D41] leading-loose">
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>小さな虫歯（C1程度）</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>前歯の虫歯（審美性が重要な部位）</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>奥歯の小さな虫歯（咬合力があまりかからない部位）</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>歯と歯の間の小さな虫歯</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        メリット
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E5E5E5]">
                          <h5 className="font-bold text-[#5A4D41] mb-2">1日で治療完了</h5>
                          <p className="text-sm text-[#5A4D41]">型取りが不要で、即日治療が可能</p>
                        </div>
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E5E5E5]">
                          <h5 className="font-bold text-[#5A4D41] mb-2">審美性が高い</h5>
                          <p className="text-sm text-[#5A4D41]">歯の色に合わせられるため目立たない</p>
                        </div>
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E5E5E5]">
                          <h5 className="font-bold text-[#5A4D41] mb-2">歯を削る量が少ない</h5>
                          <p className="text-sm text-[#5A4D41]">虫歯部分だけを最小限削除</p>
                        </div>
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E5E5E5]">
                          <h5 className="font-bold text-[#5A4D41] mb-2">保険適用可能</h5>
                          <p className="text-sm text-[#5A4D41]">経済的負担が少ない</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        デメリット
                      </h4>
                      <div className="space-y-2 text-[#5A4D41] leading-loose">
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start">
                            <span className="text-[#C5A572] mr-3 flex-shrink-0 mt-0.5">▲</span>
                            <span>経年変化により変色する可能性がある</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#C5A572] mr-3 flex-shrink-0 mt-0.5">▲</span>
                            <span>金属と比べて強度が劣るため、大きな虫歯には不向き</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#C5A572] mr-3 flex-shrink-0 mt-0.5">▲</span>
                            <span>すり減ったり欠けたりすることがある</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm text-[#5A4D41]">
                        <strong>費用目安：</strong>保険適用で約1,000〜2,000円（3割負担の場合）
                      </p>
                    </div>
                  </div>
                </div>

                {/* インレー（詰め物） */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    インレー（詰め物）
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[#5A4D41] leading-loose mb-4">
                        <span className="bg-yellow-100 font-bold">虫歯部分を削った後、型取りをして作製した詰め物を装着する治療法</span>です。
                        中程度の虫歯（C2）に適しており、<strong className="text-[#2E8B57]">2〜3回の通院で治療が完了</strong>します。
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        適応症例
                      </h4>
                      <div className="space-y-2 text-[#5A4D41] leading-loose">
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>中程度の虫歯（C2）</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>奥歯の虫歯（咬合力がかかる部位）</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>歯の一部を補う必要がある場合</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>コンポジットレジンでは強度が不足する虫歯</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        材質の種類
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-[#FDFBF7] p-5 rounded-xl border border-[#E5E5E5]">
                          <h5 className="font-bold text-[#5A4D41] mb-3">保険適用の材質</h5>
                          <div className="space-y-3">
                            <div>
                              <p className="font-bold text-sm text-[#5A4D41] mb-1">メタルインレー（金銀パラジウム合金）</p>
                              <p className="text-sm text-[#5A4D41]">
                                強度が高く、奥歯に適している。見た目は銀色で目立つが、経済的。
                              </p>
                              <p className="text-xs text-[#8D8070] mt-1">費用目安：約2,000〜3,000円（3割負担の場合）</p>
                            </div>
                            <div>
                              <p className="font-bold text-sm text-[#5A4D41] mb-1">CAD/CAM インレー（ハイブリッドレジン）</p>
                              <p className="text-sm text-[#5A4D41]">
                                白い材質で審美性が高い。小臼歯のみ保険適用（条件あり）。
                              </p>
                              <p className="text-xs text-[#8D8070] mt-1">費用目安：約3,000〜4,000円（3割負担、保険適用の場合）</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#FFF9F0] p-5 rounded-xl border border-[#C5A572]/30">
                          <h5 className="font-bold text-[#5A4D41] mb-3">自費診療の材質</h5>
                          <div className="space-y-3">
                            <div>
                              <p className="font-bold text-sm text-[#5A4D41] mb-1">セラミックインレー</p>
                              <p className="text-sm text-[#5A4D41]">
                                天然歯に近い色と透明感。変色せず、金属アレルギーの心配なし。
                              </p>
                              <p className="text-xs text-[#8D8070] mt-1">費用目安：約30,000〜50,000円</p>
                            </div>
                            <div>
                              <p className="font-bold text-sm text-[#5A4D41] mb-1">ゴールドインレー</p>
                              <p className="text-sm text-[#5A4D41]">
                                適合精度が高く、二次虫歯になりにくい。咬み心地が良い。
                              </p>
                              <p className="text-xs text-[#8D8070] mt-1">費用目安：約40,000〜60,000円</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm text-[#5A4D41]">
                        <strong>治療期間：</strong>2〜3回の通院（型取り→仮詰め→装着）
                      </p>
                    </div>
                  </div>
                </div>

                {/* クラウン（被せ物） */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    クラウン（被せ物）
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[#5A4D41] leading-loose mb-4">
                        <span className="bg-yellow-100 font-bold">虫歯が大きく、歯の大部分を削った場合に、歯全体を覆う被せ物をする治療法</span>です。
                        進行した虫歯（C3、C4）や根管治療後の歯に適しており、<strong className="text-[#2E8B57]">歯の強度と機能を回復</strong>します。
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        適応症例
                      </h4>
                      <div className="space-y-2 text-[#5A4D41] leading-loose">
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>大きな虫歯で歯質が少ない場合（C3、C4）</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>根管治療後の歯</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>歯が割れたり欠けたりした場合</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>インレーでは強度が不足する場合</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        材質の種類
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-[#FDFBF7] p-5 rounded-xl border border-[#E5E5E5]">
                          <h5 className="font-bold text-[#5A4D41] mb-3">保険適用の材質</h5>
                          <div className="space-y-3">
                            <div>
                              <p className="font-bold text-sm text-[#5A4D41] mb-1">メタルクラウン（金銀パラジウム合金）</p>
                              <p className="text-sm text-[#5A4D41]">
                                強度が高く、奥歯に適している。見た目は銀色。
                              </p>
                              <p className="text-xs text-[#8D8070] mt-1">費用目安：約3,000〜5,000円（3割負担の場合）</p>
                            </div>
                            <div>
                              <p className="font-bold text-sm text-[#5A4D41] mb-1">CAD/CAM 冠（ハイブリッドレジン）</p>
                              <p className="text-sm text-[#5A4D41]">
                                白い材質で審美性が高い。小臼歯・大臼歯で保険適用（条件あり）。
                              </p>
                              <p className="text-xs text-[#8D8070] mt-1">費用目安：約5,000〜8,000円（3割負担、保険適用の場合）</p>
                            </div>
                            <div>
                              <p className="font-bold text-sm text-[#5A4D41] mb-1">硬質レジン前装冠</p>
                              <p className="text-sm text-[#5A4D41]">
                                金属フレームに白いレジンを貼り付けたもの。前歯に適用。
                              </p>
                              <p className="text-xs text-[#8D8070] mt-1">費用目安：約5,000〜8,000円（3割負担の場合）</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-[#FFF9F0] p-5 rounded-xl border border-[#C5A572]/30">
                          <h5 className="font-bold text-[#5A4D41] mb-3">自費診療の材質</h5>
                          <div className="space-y-3">
                            <div>
                              <p className="font-bold text-sm text-[#5A4D41] mb-1">オールセラミッククラウン</p>
                              <p className="text-sm text-[#5A4D41]">
                                天然歯に最も近い審美性。変色せず、金属アレルギーの心配なし。
                              </p>
                              <p className="text-xs text-[#8D8070] mt-1">費用目安：約80,000〜150,000円</p>
                            </div>
                            <div>
                              <p className="font-bold text-sm text-[#5A4D41] mb-1">ジルコニアクラウン</p>
                              <p className="text-sm text-[#5A4D41]">
                                セラミックの中で最も強度が高い。奥歯に最適。
                              </p>
                              <p className="text-xs text-[#8D8070] mt-1">費用目安：約100,000〜180,000円</p>
                            </div>
                            <div>
                              <p className="font-bold text-sm text-[#5A4D41] mb-1">メタルボンドクラウン</p>
                              <p className="text-sm text-[#5A4D41]">
                                金属フレームにセラミックを焼き付けたもの。強度と審美性を兼ね備える。
                              </p>
                              <p className="text-xs text-[#8D8070] mt-1">費用目安：約80,000〜120,000円</p>
                            </div>
                            <div>
                              <p className="font-bold text-sm text-[#5A4D41] mb-1">ゴールドクラウン</p>
                              <p className="text-sm text-[#5A4D41]">
                                適合精度が最も高く、二次虫歯になりにくい。咬み心地が最良。
                              </p>
                              <p className="text-xs text-[#8D8070] mt-1">費用目安：約60,000〜100,000円</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm text-[#5A4D41]">
                        <strong>治療期間：</strong>3〜5回の通院（形成→型取り→仮歯→装着→調整）
                      </p>
                    </div>
                  </div>
                </div>

                {/* 根管治療（歯の神経の治療） */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    根管治療（歯の神経の治療）
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[#5A4D41] leading-loose mb-4">
                        <span className="bg-yellow-100 font-bold">虫歯が神経まで達した場合（C3、C4）に、感染した神経を除去し、根管内を清掃・消毒する治療法</span>です。
                        <strong className="text-[#2E8B57]">歯を抜かずに残すための重要な治療</strong>で、根管治療後にクラウンを装着します。
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        適応症例
                      </h4>
                      <div className="space-y-2 text-[#5A4D41] leading-loose">
                        <ul className="space-y-2 ml-4">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>虫歯が神経まで達している場合（C3）</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>歯の神経が死んでしまった場合（C4）</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>歯の根の先に膿が溜まっている場合</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>激しい痛みがある場合</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        治療の流れ
                      </h4>
                      <div className="space-y-3">
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border-l-4 border-[#C5A572]">
                          <p className="font-bold text-[#5A4D41] mb-2">1. 根管の開放と神経の除去</p>
                          <p className="text-sm text-[#5A4D41]">
                            虫歯部分を削り、歯髄腔を開放して、感染した神経を除去します。
                          </p>
                        </div>
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border-l-4 border-[#C5A572]">
                          <p className="font-bold text-[#5A4D41] mb-2">2. 根管の清掃・消毒</p>
                          <p className="text-sm text-[#5A4D41]">
                            専用の器具で根管内を徹底的に清掃し、消毒液で洗浄します。症状に応じて数回繰り返します。
                          </p>
                        </div>
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border-l-4 border-[#C5A572]">
                          <p className="font-bold text-[#5A4D41] mb-2">3. 根管充填</p>
                          <p className="text-sm text-[#5A4D41]">
                            根管内が清潔になったら、ガッタパーチャという材料で緊密に充填します。
                          </p>
                        </div>
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border-l-4 border-[#C5A572]">
                          <p className="font-bold text-[#5A4D41] mb-2">4. 土台の作製とクラウンの装着</p>
                          <p className="text-sm text-[#5A4D41]">
                            歯質が少ないため、土台（コア）を作製してからクラウンを被せます。
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        根管治療のメリット
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E5E5E5]">
                          <h5 className="font-bold text-[#5A4D41] mb-2">歯を抜かずに残せる</h5>
                          <p className="text-sm text-[#5A4D41]">重度の虫歯でも、歯を保存できる</p>
                        </div>
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E5E5E5]">
                          <h5 className="font-bold text-[#5A4D41] mb-2">咬む機能を維持</h5>
                          <p className="text-sm text-[#5A4D41]">天然歯の咬み心地を保てる</p>
                        </div>
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E5E5E5]">
                          <h5 className="font-bold text-[#5A4D41] mb-2">周囲の歯を守る</h5>
                          <p className="text-sm text-[#5A4D41]">歯を失うと隣の歯に負担がかかる</p>
                        </div>
                        <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#E5E5E5]">
                          <h5 className="font-bold text-[#5A4D41] mb-2">保険適用可能</h5>
                          <p className="text-sm text-[#5A4D41]">基本的な根管治療は保険適用</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        精密根管治療（自費診療）
                      </h4>
                      <div className="bg-[#FFF9F0] p-5 rounded-xl border border-[#C5A572]/30">
                        <p className="text-sm text-[#5A4D41] mb-3">
                          <strong className="text-[#C5A572]">マイクロスコープ（歯科用顕微鏡）</strong>を使用した精密根管治療では、
                          肉眼では見えない細かな根管まで確認でき、<span className="bg-yellow-100 font-bold">治療成功率が大幅に向上</span>します。
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">マイクロスコープ使用で最大20倍に拡大</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">ラバーダム防湿で細菌の侵入を完全に遮断</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">ニッケルチタンファイルで複雑な根管にも対応</span>
                          </div>
                          <div className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">MTAセメントで封鎖性を高め再発を防ぐ</span>
                          </div>
                        </div>
                        <p className="text-xs text-[#8D8070] mt-3">費用目安：約50,000〜100,000円（歯の種類により異なる）</p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm text-[#5A4D41]">
                        <strong>治療期間：</strong>3〜6回の通院（症状により異なる）+ クラウン装着に3〜5回
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-2 bg-gradient-to-br from-[#FDFBF7] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#5A4D41] font-serif text-center">
                当院の虫歯治療の特徴
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">丁寧な説明と選択肢の提示</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        治療方法、材質、費用について詳しく説明し、患者様のご希望に合わせて最適な治療プランをご提案します。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">痛みを最小限に抑えた治療</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        表面麻酔・電動麻酔器を使用し、痛みを最小限に抑えた治療を心がけています。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">歯を削る量を最小限に</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        MI（Minimal Intervention）治療を重視し、健康な歯質をできるだけ残す治療を行います。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">保険診療と自費診療の選択肢</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        経済的な保険治療から、審美性・機能性を追求した自費治療まで、幅広い選択肢をご用意しています。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#5A4D41] font-serif text-center">
                よくある質問
              </h2>
              <div className="space-y-6">
                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      銀歯を白い歯に変えることはできますか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      はい、可能です。既存の銀歯を除去して、セラミックやCAD/CAM冠などの白い材質に変更できます。保険適用の白い歯（CAD/CAM冠）と自費のセラミックがあり、審美性や強度に違いがありますので、ご希望に応じて最適な材質をご提案いたします。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      詰め物や被せ物はどのくらい持ちますか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      材質やお口の状態により異なりますが、保険の銀歯で5〜7年、コンポジットレジンで3〜5年、セラミックで10年以上が目安です。ただし、定期的なメインテナンスと適切なケアで、より長く使用できます。咬み合わせの状態や歯ぎしりの有無によっても寿命は変わります。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      根管治療は痛いですか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      治療中は麻酔を使用するため、ほとんど痛みを感じることはありません。治療後に軽い違和感や痛みが出ることがありますが、通常は数日で治まります。痛みが強い場合は痛み止めを処方いたします。また、当院では表面麻酔を使用し、麻酔注射の痛みも最小限に抑えています。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      セラミックと保険の白い歯（CAD/CAM冠）の違いは何ですか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      主な違いは、審美性、強度、耐久性です。セラミックは天然歯に近い透明感があり、変色せず、強度も高いです。CAD/CAM冠は保険適用で経済的ですが、セラミックに比べると審美性がやや劣り、経年的に多少変色する可能性があります。また、適用できる部位に制限があります（小臼歯・一部の大臼歯のみ）。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      治療後に注意することはありますか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      詰め物・被せ物を装着した当日は、硬いものや粘着性の高い食べ物は避けてください。麻酔が効いている間は、唇や頬を噛まないよう注意が必要です。根管治療後は、数日間違和感があることがありますが、徐々に改善します。また、定期的なメインテナンスで、詰め物や被せ物の状態をチェックすることが重要です。
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
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#5A4D41] font-serif text-center">
                関連ページ
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href="/cavity/stages"
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] hover:border-[#C5A572]"
                >
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                    虫歯の進行段階
                  </h3>
                  <p className="text-sm text-[#5A4D41] mb-4 leading-relaxed">
                    C0からC4まで、虫歯の進行段階ごとの症状と治療法を詳しく解説します。
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-medium">
                    詳しく見る
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                <a
                  href="/cavity/pain"
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] hover:border-[#C5A572]"
                >
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                    虫歯の痛みと対処法
                  </h3>
                  <p className="text-sm text-[#5A4D41] mb-4 leading-relaxed">
                    虫歯の痛みが出たときの応急処置と、痛みの原因について解説します。
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-medium">
                    詳しく見る
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                <a
                  href="/cavity/cost"
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] hover:border-[#C5A572]"
                >
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                    虫歯治療の費用
                  </h3>
                  <p className="text-sm text-[#5A4D41] mb-4 leading-relaxed">
                    保険適用の治療費と自費診療の費用について、詳しくご説明します。
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-medium">
                    詳しく見る
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-br from-[#C5A572] to-[#B59562]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                虫歯治療のご相談は<br className="md:hidden" />F歯科・矯正歯科 豊洲プライムスクエア院へ
              </h2>
              <p className="text-lg mb-8 leading-relaxed opacity-95">
                進行度に応じた最適な治療方法をご提案します。<br />
                保険診療・自費診療ともに対応しておりますので、<br className="hidden md:block" />
                お気軽にご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold hover:bg-[#FDFBF7] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  ご予約・お問い合わせ
                </a>
                <a
                  href="/cavity"
                  className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#C5A572] transition-all duration-300"
                >
                  虫歯治療について
                </a>
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
    </div>
  );
}
