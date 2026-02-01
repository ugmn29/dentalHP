import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { Home, ChevronRight, CheckCircle, AlertCircle, ArrowRight, DollarSign, CreditCard } from 'lucide-react';

export const metadata: Metadata = {
  title: '根管治療の費用・料金｜保険診療と自費診療の違い｜F歯科・矯正歯科',
  description: '根管治療の費用を詳しく解説。保険診療は3,000円〜12,000円程度、マイクロスコープを使った精密根管治療は自費で50,000円〜150,000円。費用の違いと治療内容を比較できます。',
  keywords: '根管治療,費用,料金,値段,保険,自費,マイクロスコープ,精密根管治療,F歯科・矯正歯科',
};

export default function RootCanalCostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#C5A572] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/root-canal" className="hover:text-[#C5A572]">
                根管治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572] font-medium">費用・料金</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                根管治療の費用・料金
              </h1>
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                保険診療と自費診療の違いを分かりやすく解説します
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="max-w-5xl mx-auto px-4">
            {/* 結論 Section */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                結論
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  根管治療には<span className="bg-yellow-100">保険診療と自費診療</span>があります。
                </p>
                <p className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  根管治療は基本的に<span className="bg-yellow-100">保険適用</span>ですが、マイクロスコープや特殊材料を使用した精密治療は自費診療となります。
                </p>
                <p className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  費用の違いと治療内容の違いを理解した上で、お選びいただけます。
                </p>
              </div>
            </div>

            {/* 保険診療と自費診療の概要 */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">保険診療と自費診療の概要</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-md border border-[#C5A572]/10">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#C5A572] mr-3" />
                    <h4 className="text-2xl font-bold text-[#5A4D41]">保険診療</h4>
                  </div>
                  <p className="text-[#5A4D41] mb-4 leading-relaxed">
                    国が定めた保険適用範囲内での治療。費用負担は少ないですが、使用できる材料や機器に制限があります。
                  </p>
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/20">
                    <div className="text-sm text-[#8D8070] mb-2">3割負担の場合</div>
                    <div className="text-4xl font-bold text-[#C5A572]">¥3,000〜</div>
                    <div className="text-sm text-[#8D8070] mt-1">¥12,000程度</div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-[#C5A572]">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-8 h-8 text-[#C5A572] mr-3" />
                    <h4 className="text-2xl font-bold text-[#5A4D41]">自費診療</h4>
                  </div>
                  <p className="text-[#5A4D41] mb-4 leading-relaxed">
                    マイクロスコープやMTAセメントなどの最新機器・材料を使用した精密治療。成功率が高まります。
                  </p>
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/20">
                    <div className="text-sm text-[#8D8070] mb-2">全額自己負担</div>
                    <div className="text-4xl font-bold text-[#C5A572]">¥50,000〜</div>
                    <div className="text-sm text-[#8D8070] mt-1">¥150,000程度</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 保険診療の費用詳細 */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">保険診療の費用詳細</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8 mb-8">
                <div className="flex items-start mb-6">
                  <AlertCircle className="w-6 h-6 text-[#C5A572] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold text-[#5A4D41] mb-2">保険診療の費用は歯の種類で異なります</h4>
                    <p className="text-[#8D8070]">
                      前歯、小臼歯、大臼歯など、歯の種類や根管の本数によって保険点数が変わります。
                      以下は3割負担の場合の目安です。
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* 前歯 */}
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/10">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-lg font-bold text-[#5A4D41]">前歯（根管1本）</h5>
                      <div className="text-2xl font-bold text-[#C5A572]">¥3,000〜¥6,000</div>
                    </div>
                    <div className="space-y-2 text-sm text-[#5A4D41]">
                      <div className="flex justify-between">
                        <span>初回根管治療（抜髄）：</span>
                        <span className="font-semibold">約¥3,000〜¥4,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>再根管治療（感染根管治療）：</span>
                        <span className="font-semibold">約¥4,000〜¥6,000</span>
                      </div>
                    </div>
                  </div>

                  {/* 小臼歯 */}
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/10">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-lg font-bold text-[#5A4D41]">小臼歯（根管1〜2本）</h5>
                      <div className="text-2xl font-bold text-[#C5A572]">¥4,000〜¥8,000</div>
                    </div>
                    <div className="space-y-2 text-sm text-[#5A4D41]">
                      <div className="flex justify-between">
                        <span>初回根管治療（抜髄）：</span>
                        <span className="font-semibold">約¥4,000〜¥5,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>再根管治療（感染根管治療）：</span>
                        <span className="font-semibold">約¥6,000〜¥8,000</span>
                      </div>
                    </div>
                  </div>

                  {/* 大臼歯 */}
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/10">
                    <div className="flex items-center justify-between mb-4">
                      <h5 className="text-lg font-bold text-[#5A4D41]">大臼歯（根管2〜4本）</h5>
                      <div className="text-2xl font-bold text-[#C5A572]">¥6,000〜¥12,000</div>
                    </div>
                    <div className="space-y-2 text-sm text-[#5A4D41]">
                      <div className="flex justify-between">
                        <span>初回根管治療（抜髄）：</span>
                        <span className="font-semibold">約¥6,000〜¥8,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>再根管治療（感染根管治療）：</span>
                        <span className="font-semibold">約¥8,000〜¥12,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded">
                  <p className="text-sm text-[#5A4D41]">
                    <span className="font-bold text-yellow-900">注意：</span>
                    上記は根管治療のみの費用です。別途、初診料・再診料・レントゲン代・被せ物の費用などがかかります。
                  </p>
                </div>
              </div>
            </div>

            {/* 自費診療の費用詳細 */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">自費診療（精密根管治療）の費用</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                <div className="flex items-start mb-8">
                  <DollarSign className="w-8 h-8 text-[#C5A572] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-2xl font-bold text-[#5A4D41] mb-2">マイクロスコープを使った精密治療</h4>
                    <p className="text-[#8D8070] leading-relaxed">
                      歯科用顕微鏡（マイクロスコープ）を使用し、最大20倍の拡大視野下で行う精密な根管治療です。
                      肉眼では見えない根管も確実に治療でき、成功率が大幅に向上します。
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#FDFBF7] rounded-xl p-6 text-center border border-[#C5A572]/10">
                    <div className="text-sm text-[#8D8070] mb-2">前歯</div>
                    <div className="text-3xl font-bold text-[#C5A572] mb-1">¥50,000</div>
                    <div className="text-xs text-[#8D8070]">〜 ¥80,000</div>
                  </div>
                  <div className="bg-[#FDFBF7] rounded-xl p-6 text-center border border-[#C5A572]/10">
                    <div className="text-sm text-[#8D8070] mb-2">小臼歯</div>
                    <div className="text-3xl font-bold text-[#C5A572] mb-1">¥70,000</div>
                    <div className="text-xs text-[#8D8070]">〜 ¥100,000</div>
                  </div>
                  <div className="bg-[#FDFBF7] rounded-xl p-6 text-center border border-[#C5A572]/10">
                    <div className="text-sm text-[#8D8070] mb-2">大臼歯</div>
                    <div className="text-3xl font-bold text-[#C5A572] mb-1">¥100,000</div>
                    <div className="text-xs text-[#8D8070]">〜 ¥150,000</div>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/10">
                  <h5 className="font-bold text-[#5A4D41] mb-4">自費診療に含まれる内容</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#5A4D41]">マイクロスコープによる拡大視野での精密治療</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#5A4D41]">ニッケルチタンファイルによる効率的な清掃</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#5A4D41]">MTAセメントなどの高品質な材料使用</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#5A4D41]">ラバーダム防湿による無菌環境での治療</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#5A4D41]">十分な治療時間の確保（1回60〜90分）</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 保険と自費の比較 */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">保険診療と自費診療の比較</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-2xl overflow-hidden border border-[#C5A572]/10">
                  <thead>
                    <tr className="bg-[#C5A572] text-white">
                      <th className="p-4 text-left font-bold">比較項目</th>
                      <th className="p-4 text-center font-bold">保険診療</th>
                      <th className="p-4 text-center font-bold bg-[#B39560]">自費診療（精密治療）</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="p-4 font-semibold text-[#5A4D41]">費用（3割負担）</td>
                      <td className="p-4 text-center text-[#5A4D41]">¥3,000〜¥12,000</td>
                      <td className="p-4 text-center bg-[#FDFBF7] text-[#5A4D41]">¥50,000〜¥150,000</td>
                    </tr>
                    <tr className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="p-4 font-semibold text-[#5A4D41]">マイクロスコープ使用</td>
                      <td className="p-4 text-center text-[#5A4D41]">なし</td>
                      <td className="p-4 text-center bg-[#FDFBF7] text-[#5A4D41]">あり（最大20倍拡大）</td>
                    </tr>
                    <tr className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="p-4 font-semibold text-[#5A4D41]">治療時間</td>
                      <td className="p-4 text-center text-[#5A4D41]">15〜30分</td>
                      <td className="p-4 text-center bg-[#FDFBF7] text-[#5A4D41]">60〜90分</td>
                    </tr>
                    <tr className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="p-4 font-semibold text-[#5A4D41]">使用機器・材料</td>
                      <td className="p-4 text-center text-[#5A4D41]">保険適用範囲内</td>
                      <td className="p-4 text-center bg-[#FDFBF7] text-[#5A4D41]">最新機器・高品質材料</td>
                    </tr>
                    <tr className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="p-4 font-semibold text-[#5A4D41]">成功率</td>
                      <td className="p-4 text-center text-[#5A4D41]">約60〜70%</td>
                      <td className="p-4 text-center bg-[#FDFBF7] text-[#5A4D41]">約85〜95%</td>
                    </tr>
                    <tr className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="p-4 font-semibold text-[#5A4D41]">再治療のリスク</td>
                      <td className="p-4 text-center text-[#5A4D41]">やや高い</td>
                      <td className="p-4 text-center bg-[#FDFBF7] text-[#5A4D41]">低い</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-6">
                <div className="bg-white border border-[#C5A572]/20 rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-4 text-center">保険診療</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">費用（3割負担）</span>
                      <span className="font-semibold text-[#5A4D41]">¥3,000〜¥12,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">マイクロスコープ</span>
                      <span className="font-semibold text-[#5A4D41]">なし</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">治療時間</span>
                      <span className="font-semibold text-[#5A4D41]">15〜30分</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">成功率</span>
                      <span className="font-semibold text-[#5A4D41]">約60〜70%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-[#C5A572] rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-4 text-center">自費診療（精密治療）</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">費用</span>
                      <span className="font-semibold text-[#5A4D41]">¥50,000〜¥150,000</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">マイクロスコープ</span>
                      <span className="font-semibold text-[#5A4D41]">あり（20倍拡大）</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">治療時間</span>
                      <span className="font-semibold text-[#5A4D41]">60〜90分</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">成功率</span>
                      <span className="font-semibold text-[#5A4D41]">約85〜95%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* お支払い方法 */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">お支払い方法</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl p-8 shadow-md border border-[#C5A572]/10 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#C5A572]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <DollarSign className="w-8 h-8 text-[#C5A572]" />
                  </div>
                  <h4 className="text-xl font-bold text-center mb-4 text-[#5A4D41]">現金払い</h4>
                  <p className="text-[#8D8070] text-center text-sm leading-relaxed">
                    治療当日または会計時に現金でお支払いいただけます。
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-md border border-[#C5A572]/10 hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#C5A572]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <CreditCard className="w-8 h-8 text-[#C5A572]" />
                  </div>
                  <h4 className="text-xl font-bold text-center mb-4 text-[#5A4D41]">クレジットカード</h4>
                  <p className="text-[#8D8070] text-center text-sm leading-relaxed mb-4">
                    各種クレジットカードに対応しています。
                  </p>
                  <div className="text-center text-xs text-[#8D8070]">
                    VISA / Master / JCB / AMEX
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-md border-2 border-[#C5A572] hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#C5A572]/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <CheckCircle className="w-8 h-8 text-[#C5A572]" />
                  </div>
                  <h4 className="text-xl font-bold text-center mb-4 text-[#5A4D41]">デンタルローン</h4>
                  <p className="text-[#8D8070] text-center text-sm leading-relaxed">
                    自費診療の場合、分割払いも可能です。お気軽にご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* よくある質問 */}
        <section className="py-6 md:py-6 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">費用に関するよくある質問</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">保険診療と自費診療、どちらを選べばいいですか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> ご希望と症例によって選択が異なります。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-bold text-green-700 mb-2">保険診療がお勧め</p>
                      <p className="text-sm text-[#5A4D41]">
                        費用を抑えたい場合
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">自費診療がお勧め</p>
                      <p className="text-sm text-[#5A4D41]">
                        確実性を重視したい場合
                      </p>
                    </div>
                  </div>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <strong className="text-blue-600">特に注意：</strong>再根管治療や難しい症例では、マイクロスコープを使った自費診療の方が成功率が高まります。当院では、患者様の状況やご希望に応じて最適なプランをご提案いたします。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">根管治療の費用は一括で支払う必要がありますか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 診療種別によってお支払い方法が異なります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span><strong>保険診療：</strong>通院毎のお支払い</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span><strong>自費診療：</strong>治療開始時または治療完了時にまとめてお支払い</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    デンタルローンによる分割払いも可能です。詳しくはご相談ください。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">根管治療以外に必要な費用はありますか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> はい、根管治療後には土台（コア）と被せ物（クラウン）が必要になります。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-3">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="font-bold text-green-700 mb-2">保険診療の場合</p>
                      <ul className="text-sm text-[#5A4D41] space-y-1">
                        <li>• 土台：約¥1,000〜¥3,000</li>
                        <li>• 被せ物：約¥3,000〜¥8,000</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <p className="font-bold text-purple-700 mb-2">自費診療（セラミック）の場合</p>
                      <p className="text-sm text-[#5A4D41]">
                        別途¥80,000〜¥150,000程度
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">医療費控除は使えますか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> はい、根管治療は医療費控除の対象となります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                      <span>年間の医療費が10万円を超えた場合、確定申告で所得税の一部が還付</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                      <span>当院では領収書を発行いたします</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <strong className="text-yellow-700">重要：</strong>領収書は大切に保管してください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">根管治療について、さらに詳しく</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link
                href="/root-canal"
                className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                  根管治療について
                </h3>
                <p className="text-[#8D8070] text-sm mb-4 leading-relaxed">
                  根管治療の特徴や当院の強みをご紹介
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              <Link
                href="/root-canal/types"
                className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                  根管治療の種類
                </h3>
                <p className="text-[#8D8070] text-sm mb-4 leading-relaxed">
                  初回治療・再根管治療・歯根端切除術
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              <Link
                href="/root-canal/pain"
                className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                  痛みについて
                </h3>
                <p className="text-[#8D8070] text-sm mb-4 leading-relaxed">
                  根管治療の痛みと対処法
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              <Link
                href="/root-canal/duration"
                className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                  治療期間・回数
                </h3>
                <p className="text-[#8D8070] text-sm mb-4 leading-relaxed">
                  治療にかかる期間と通院回数
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              <Link
                href="/root-canal/case-studies"
                className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                  症例紹介
                </h3>
                <p className="text-[#8D8070] text-sm mb-4 leading-relaxed">
                  実際の治療例と患者様の声
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              費用や治療内容について、お気軽にご相談ください
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-95">
              保険診療・自費診療それぞれのメリットを詳しくご説明し、<br className="hidden md:block" />
              患者様に最適なプランをご提案いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                ご予約・ご相談
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
              <a
                href="tel:0120-xxx-xxx"
                className="inline-flex items-center justify-center bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white"
              >
                お電話でのご予約
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
