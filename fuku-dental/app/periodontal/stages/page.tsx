import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Home, CheckCircle2, ArrowRight, AlertCircle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: '歯周病の進行段階｜軽度・中等度・重度の症状と治療法｜F歯科・矯正歯科',
  description: '歯周病の進行段階を詳しく解説。歯肉炎から重度歯周炎までの症状、各段階での治療法、セルフチェック方法をご紹介します。',
  keywords: '歯周病,進行段階,歯肉炎,歯周炎,重度,症状,チェック,F歯科・矯正歯科',
};

export default function PeriodontalStagesPage() {
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
              <Link href="/periodontal" className="hover:text-[#C5A572]">
                歯周病治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572]">進行段階</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-2 md:py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                歯周病の進行段階
              </h1>
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                早期発見・早期治療で大切な歯を守りましょう
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                歯周病は段階的に進行します。<br />
                各段階の症状と治療法を理解しましょう
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* 概要 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                歯周病は段階的に進行します
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p className="text-lg text-[#8D8070] mb-4">
                  <span className="font-bold bg-yellow-100">早期発見が何よりも重要</span>
                </p>
                <p>
                  歯周病は、初期の「歯肉炎」から始まり、放置すると「歯周炎」へと進行し、最終的には歯を失う原因となります。
                  しかし、<span className="font-bold bg-yellow-100">自覚症状が少ないまま進行するため</span>、「沈黙の病気」とも呼ばれています。
                </p>
                <p>
                  こちらのページでは、歯周病の各段階における症状と治療法を詳しくご説明します。
                  <span className="text-[#2E8B57] font-bold">早期発見が何よりも重要</span>です。
                </p>
              </div>
            </div>

            {/* 健康な歯茎 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                健康な歯茎
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p className="text-lg text-[#8D8070] mb-4">
                  <span className="font-bold bg-yellow-100">理想的な状態</span>
                </p>

                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-3 text-[#5A4D41]">特徴</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold">歯茎の色:</span> 淡いピンク色</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold">歯茎の状態:</span> 引き締まっている</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold">歯磨き時:</span> 出血しない</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span><span className="font-bold">歯周ポケット:</span> 1〜2mm</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h3 className="font-bold text-lg mb-3 text-[#5A4D41]">維持するために</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#C5A572] mr-2">•</span>
                      <span>毎日の正しいブラッシング</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C5A572] mr-2">•</span>
                      <span>デンタルフロスや歯間ブラシの使用</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C5A572] mr-2">•</span>
                      <span>3〜6ヶ月ごとの定期検診</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 軽度：歯肉炎 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                軽度：歯肉炎
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p className="text-lg text-[#8D8070] mb-4">
                  <span className="font-bold bg-yellow-100">この段階なら完治可能</span>
                </p>

                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-3 text-[#5A4D41]">症状</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">歯茎の腫れ</p>
                        <p className="text-sm text-[#8D8070]">歯茎が赤く腫れ、ぷよぷよした感触になります</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">歯磨き時の出血</p>
                        <p className="text-sm text-[#8D8070]">ブラッシング時に少量の出血が見られます</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">歯周ポケット</p>
                        <p className="text-sm text-[#8D8070]">2〜3mm（正常範囲をわずかに超える）</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">痛み</p>
                        <p className="text-sm text-[#8D8070]">ほとんどない（自覚症状が少ない）</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-3 text-[#5A4D41]">治療法</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span>歯石除去（スケーリング）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span>正しいブラッシング指導</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span>プラークコントロール</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h3 className="font-bold text-lg mb-3 text-[#5A4D41]">治療期間・回数</h3>
                  <p><span className="font-bold text-[#C5A572]">通院回数:</span> 2〜3回</p>
                  <p><span className="font-bold text-[#C5A572]">治療期間:</span> 2〜4週間</p>
                  <p className="text-sm text-green-600 font-bold mt-3">
                    ※この段階なら完治可能です
                  </p>
                </div>
              </div>
            </div>

            {/* 中等度：歯周炎 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                中等度：歯周炎
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p className="text-lg text-[#8D8070] mb-4">
                  <span className="font-bold bg-yellow-100">外科的治療が必要な場合も</span>
                </p>

                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-3 text-[#5A4D41]">症状</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">歯茎の後退</p>
                        <p className="text-sm text-[#8D8070]">歯茎が下がり、歯が長く見えます</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">知覚過敏</p>
                        <p className="text-sm text-[#8D8070]">冷たいものがしみるようになります</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">口臭の悪化</p>
                        <p className="text-sm text-[#8D8070]">歯周病菌による口臭が強くなります</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">歯のぐらつき</p>
                        <p className="text-sm text-[#8D8070]">歯を支える骨が溶け始め、わずかにぐらつきます</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-orange-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">歯周ポケット</p>
                        <p className="text-sm text-[#8D8070]">4〜6mm（歯周病が進行している状態）</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-3 text-[#5A4D41]">治療法</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span>ルートプレーニング（歯根面の滑沢化）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span>歯周ポケット内の徹底清掃</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span>抗菌薬の使用（必要に応じて）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span>歯周外科治療（フラップ手術など）</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h3 className="font-bold text-lg mb-3 text-[#5A4D41]">治療期間・回数</h3>
                  <p><span className="font-bold text-[#C5A572]">通院回数:</span> 5〜10回</p>
                  <p><span className="font-bold text-[#C5A572]">治療期間:</span> 2〜6ヶ月</p>
                  <p className="text-sm text-orange-600 font-bold mt-3">
                    ※骨の再生療法が必要な場合もあります
                  </p>
                </div>
              </div>
            </div>

            {/* 重度：重度歯周炎 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                重度：重度歯周炎
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p className="text-lg text-[#8D8070] mb-4">
                  <span className="font-bold bg-yellow-100">保存できない場合は抜歯が必要</span>
                </p>

                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-3 text-[#5A4D41]">症状</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">激しいぐらつき</p>
                        <p className="text-sm text-[#8D8070]">歯を支える骨が大幅に失われ、歯が大きくぐらつきます</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">膿の排出</p>
                        <p className="text-sm text-[#8D8070]">歯茎から膿が出ることがあります</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">強い口臭</p>
                        <p className="text-sm text-[#8D8070]">膿による非常に強い口臭があります</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">噛めない</p>
                        <p className="text-sm text-[#8D8070]">痛みやぐらつきで食事が困難になります</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">歯周ポケット</p>
                        <p className="text-sm text-[#8D8070]">7mm以上（重度の骨吸収）</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-3 text-[#5A4D41]">治療法</h3>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span>歯周外科治療（フラップ手術）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span>歯周組織再生療法（エムドゲイン等）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span>抜歯（保存不可能な場合）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span>インプラント・義歯・ブリッジ</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h3 className="font-bold text-lg mb-3 text-[#5A4D41]">治療期間・回数</h3>
                  <p><span className="font-bold text-[#C5A572]">通院回数:</span> 10回以上</p>
                  <p><span className="font-bold text-[#C5A572]">治療期間:</span> 6ヶ月〜1年以上</p>
                  <p className="text-sm text-red-600 font-bold mt-3">
                    ※保存できない場合は抜歯が必要です
                  </p>
                </div>
              </div>
            </div>

            {/* セルフチェック */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                歯周病セルフチェック
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p className="text-lg text-[#8D8070] mb-4">
                  <span className="font-bold bg-yellow-100">1つでも当てはまる方は要注意</span>
                </p>
                <p className="mb-6">
                  以下の項目に1つでも当てはまる方は、歯周病の可能性があります。早めに歯科医院を受診しましょう。
                </p>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  {[
                    "歯磨き時に歯茎から血が出る",
                    "歯茎が赤く腫れている",
                    "歯茎が下がり、歯が長く見える",
                    "冷たいものがしみる",
                    "口臭が気になる",
                    "歯がぐらつく",
                    "歯と歯の間に食べ物が挟まりやすい",
                    "朝起きた時、口の中がネバネバする",
                    "歯茎から膿が出る",
                    "硬いものが噛みにくい"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start bg-white rounded-lg p-4 shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-red-100 rounded-xl p-6">
                  <p className="text-red-800 font-bold text-center">
                    チェックが多いほど、歯周病が進行している可能性が高いです。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 md:py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくある質問</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    q: "歯周病は自然に治りますか？",
                    a: "いいえ、歯周病は自然には治りません。軽度の歯肉炎であれば、正しいブラッシングで改善することもありますが、歯周炎に進行すると専門的な治療が必要です。放置すると悪化する一方なので、早めに歯科医院を受診してください。"
                  },
                  {
                    q: "歯周病はどのくらいの速さで進行しますか？",
                    a: "進行速度は個人差が大きく、生活習慣や口腔ケアの状態によって異なります。適切なケアをしていない場合、数年で軽度から中等度に進行することもあります。定期的な検診と適切なケアで進行を遅らせることができます。"
                  },
                  {
                    q: "重度の歯周病でも歯を残せますか？",
                    a: "重度でも、歯周外科治療や歯周組織再生療法によって歯を残せる場合があります。ただし、骨の吸収が著しい場合や歯の破損が大きい場合は、抜歯が必要になることもあります。早期に治療を開始するほど、歯を残せる可能性が高まります。"
                  },
                  {
                    q: "痛みがなくても歯周病の可能性はありますか？",
                    a: "はい、歯周病は「沈黙の病気」と呼ばれ、痛みがないまま進行することが多いです。中等度まで進行しても痛みを感じない場合があります。だからこそ、定期検診での早期発見が非常に重要です。"
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-md p-6 border border-[#C5A572]/10">
                    <h3 className="text-lg font-bold text-[#5A4D41] mb-4 font-serif">
                      {faq.q}
                    </h3>
                    <p className="text-[#8D8070] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
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
                <Link href="/periodontal" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">歯周病治療TOP</h3>
                  <p className="text-[#8D8070] mb-4">
                    歯周病治療の概要と特徴
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/periodontal/treatment-methods" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">治療方法</h3>
                  <p className="text-[#8D8070] mb-4">
                    基本治療から外科治療まで
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/periodontal/cost" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">治療費用</h3>
                  <p className="text-[#8D8070] mb-4">
                    保険診療・自費診療の費用
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
                早期発見・早期治療が大切です
              </h2>
              <p className="text-xl mb-8 text-white/90">
                少しでも気になる症状があれば、お気軽にご相談ください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                >
                  ご予約・お問い合わせ
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
