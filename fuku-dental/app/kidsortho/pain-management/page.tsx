import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen, AlertCircle, CheckCircle2, Clock, Heart, ThermometerSnowflake, Pill, Home, ArrowRight, Calendar, Phone } from 'lucide-react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AuthorBio } from '@/components/AuthorBio'
import { KidsOrthoImage } from '@/components/KidsOrthoImage'
import { PageImage } from '@/components/PageImage'

export const metadata: Metadata = {
  title: 'こども矯正は痛い？｜痛みの期間と対処法を詳しく解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'こども矯正の痛みはいつまで続く？痛みの種類別対処法（冷やす・鎮痛剤・食事の工夫）と、緊急時の連絡先を詳しく解説します。',
  keywords: '痛み,痛み対処,鎮痛剤,こども矯正,小児矯正,ワイヤー,プレオルソ,緊急対応,痛い',
  openGraph: {
    title: 'こども矯正は痛い？｜痛みの期間と対処法を詳しく解説｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'こども矯正の痛みはいつまで続く？痛みの種類別対処法（冷やす・鎮痛剤・食事の工夫）と、緊急時の連絡先を詳しく解説します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/kidsortho/pain-management',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
}

export default function PainManagementPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
        {/* Breadcrumb */}
        <div className="bg-[#FDFBF7] py-4">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-2 text-sm text-[#8D8070]">
              <Link href="/" className="hover:text-[#C5A572] transition-colors flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/kidsortho" className="hover:text-[#C5A572] transition-colors">
                こども矯正
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-[#C5A572] font-bold">痛みの期間と対処法</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-[#FDFBF7] py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#5A4D41] mb-3">
                  こども矯正は痛い？<br className="md:hidden" />痛みの期間と対処法
                </h1>
                <PageImage path="/kidsortho/pain-management" alt="こども矯正の痛みの期間と対処法" />
                <div className="w-16 h-0.5 bg-[#C5A572] mb-6"></div>
              </div>

              <KidsOrthoImage
                name="/images/kidsortho/info/pain-management-hero"
                alt="こども矯正の痛み対処法"
                category="info"
              />

              <p className="text-lg text-[#C5A572] font-bold mt-6 mb-4">こども矯正の痛み管理と緊急対応</p>
              <p className="text-[#8D8070] mt-3 font-sans">豊洲の矯正歯科が詳しく解説します</p>

              <p className="text-base md:text-lg leading-loose text-[#8D8070] font-sans mb-8">
                こども矯正の痛みはいつまで続く？痛みの種類別対処法（冷やす・鎮痛剤・食事の工夫）と、緊急時の連絡先を詳しく解説します。
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-2 pb-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* 結論セクション */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">結論</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                <p>
                  <span className="font-bold bg-yellow-100">こども矯正の痛みは2〜3日で治まる</span>のが一般的です。
                </p>
                <p>
                  痛みには<span className="text-[#395b45] font-bold">「圧迫痛（歯が動く痛み）」「装置が当たる痛み」「ワイヤー調整後の痛み」</span>の3種類があり、
                  それぞれ対処法が異なります。
                </p>
                <p>
                  <span className="font-bold bg-yellow-100">冷やす・鎮痛剤・柔らかい食事</span>の3つの対処で、
                  ほとんどの痛みは自宅で管理できます。
                </p>
              </div>
            </section>

            {/* 痛みはいつまで続くのか */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">痛みはいつまで続くのか？</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <div className="space-y-6 font-sans">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-[#C5A572] rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">1</p>
                      <p className="text-xs text-white">日目</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">装置装着直後〜初日</h4>
                    <p className="text-[#8D8070] leading-loose">
                      装置をつけた直後は、<span className="font-bold bg-yellow-100">違和感が強く、口の中が気になります</span>。
                      ワイヤー矯正の場合、歯に<span className="text-[#395b45] font-bold">じわじわとした圧迫感</span>を感じ始めます。
                      この時点では激しい痛みはありませんが、食事がしにくくなります。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">2</p>
                      <p className="text-xs text-white">日目</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">痛みのピーク</h4>
                    <p className="text-[#8D8070] leading-loose">
                      <span className="font-bold bg-yellow-100">装置装着後24〜48時間が痛みのピーク</span>です。
                      歯が動き始めるため、<span className="text-[#395b45] font-bold">噛むと痛い・歯が浮いた感じ</span>がします。
                      硬い食べ物は避け、柔らかい食事（おかゆ・うどん・スープ）を摂りましょう。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">3</p>
                      <p className="text-xs text-white">日目</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">痛みが和らぎ始める</h4>
                    <p className="text-[#8D8070] leading-loose">
                      3日目以降は<span className="font-bold bg-yellow-100">痛みが徐々に和らぎます</span>。
                      噛む力を少しずつ戻せるようになり、普通の食事（柔らかめのご飯・魚）が食べられるようになります。
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-white">7</p>
                      <p className="text-xs text-white">日目</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-[#C5A572]">ほぼ痛みがなくなる</h4>
                    <p className="text-[#8D8070] leading-loose">
                      1週間後には<span className="font-bold bg-yellow-100">ほとんど痛みを感じなくなります</span>。
                      装置にも慣れて、普通の食事（肉・野菜）が食べられるようになります。
                      ただし、硬い食べ物（スルメ・ナッツ）は引き続き避けましょう。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6 md:p-8 border border-yellow-200 mt-8">
                <div className="flex items-start gap-4">
                  <Clock className="w-10 h-10 text-[#C5A572] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">ワイヤー調整後も同じサイクル</h3>
                    <p className="text-[#8D8070] leading-loose font-sans mb-3">
                      ワイヤー矯正の場合、<span className="font-bold bg-yellow-100">月1回のワイヤー調整後にも同じ痛みのサイクル</span>が繰り返されます。
                      ただし、<span className="text-[#395b45] font-bold">2回目以降は慣れてきて、痛みが軽く感じられる</span>ことが多いです。
                    </p>
                    <p className="text-sm text-[#8D8070] font-sans">
                      プレオルソ・ムーシールドなどの取り外し式装置は、ワイヤー矯正ほど強い痛みは出ません。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 痛みの種類と対処法 */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">痛みの種類と対処法</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <KidsOrthoImage
                name="/images/kidsortho/info/pain-management-content"
                alt="痛みの対処法の種類"
                category="info"
              />

              <div className="space-y-8 mt-8">
                {/* 痛みのタイプ1: 圧迫痛 */}
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">
                    1. 圧迫痛（歯が動く痛み）
                  </h4>

                  <div className="space-y-4 font-sans">
                    <div>
                      <h5 className="font-bold text-[#5A4D41] mb-3">どんな痛み？</h5>
                      <ul className="space-y-3 ml-4 text-[#8D8070] leading-loose">
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                          <span><strong className="text-[#5A4D41]">じわじわとした鈍い痛み</strong>が続く</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                          <span>噛むと痛い、歯が浮いた感じがする</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                          <span>硬い食べ物が食べられない</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-[#5A4D41] mb-3">対処法</h5>

                      <p className="text-[#8D8070] leading-loose mb-4">
                        <span className="font-bold bg-yellow-100">頬の外側から冷やす</span>ことで、炎症を抑えます。
                        氷を直接当てるのではなく、保冷剤をタオルで包んで頬に当てます（1回10分、1日3〜4回まで）。
                        痛みが強い場合は、<span className="text-[#395b45] font-bold">市販の鎮痛剤（子ども用バファリン・カロナールなど）</span>を服用できます。
                        <span className="font-bold bg-yellow-100">噛まずに食べられる柔らかい食事</span>（おかゆ・うどん・豆腐・ヨーグルト）を選びましょう。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 痛みのタイプ2: 装置が当たる痛み */}
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">
                    2. 装置が当たる痛み（口内炎）
                  </h4>

                  <div className="space-y-4 font-sans">
                    <div>
                      <h5 className="font-bold text-[#5A4D41] mb-3">どんな痛み？</h5>
                      <ul className="space-y-3 ml-4 text-[#8D8070] leading-loose">
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                          <span><strong className="text-[#5A4D41]">ピリピリ・チクチクした痛み</strong>（口内炎）</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                          <span>ワイヤー・ブラケットが頬・唇に当たる</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                          <span>プレオルソの縁が歯茎に食い込む</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-[#5A4D41] mb-3">対処法</h5>

                      <div className="space-y-3 text-[#8D8070] leading-loose">
                        <p>
                          <span className="font-bold bg-yellow-100">矯正用ワックス（歯科医院で貰える）</span>をブラケットやワイヤーの当たる部分に貼ります。
                          すでに口内炎ができている場合は、<span className="text-[#395b45] font-bold">市販の口内炎パッチ（アフタッチなど）</span>を貼ります（2〜3日で治ります）。
                          ワイヤーの端が飛び出して頬に刺さる場合は、すぐに歯科医院に連絡してください。
                        </p>
                        <p className="bg-blue-50 p-3 rounded-lg">
                          <span className="font-bold text-blue-700">プレオルソの場合：</span>
                          装置を少し削って当たらないようにすることができます。歯科医院で調整してもらってください。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 痛みのタイプ3: ワイヤー調整後の痛み */}
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">
                    3. ワイヤー調整後の痛み
                  </h4>

                  <div className="space-y-4 font-sans">
                    <div>
                      <h5 className="font-bold text-[#5A4D41] mb-3">どんな痛み？</h5>
                      <ul className="space-y-3 ml-4 text-[#8D8070] leading-loose">
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                          <span><strong className="text-[#5A4D41]">調整後6時間ほどから痛み始める</strong></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                          <span>初回装着時と同じ「圧迫痛」が再発</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                          <span>2〜3日で治まるが、月1回繰り返される</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-[#5A4D41] mb-3">対処法</h5>

                      <p className="text-[#8D8070] leading-loose mb-4">
                        <span className="font-bold bg-yellow-100">調整日を午前中に設定</span>すれば、
                        痛みのピーク（調整後6〜24時間）が夜になります。就寝前に鎮痛剤を飲むことで、痛みを和らげながら眠れます。
                        調整日の夕食は、<span className="text-[#395b45] font-bold">あらかじめ柔らかい食事（おかゆ・うどん）</span>を準備しておきましょう。
                        ワイヤー調整の痛みは、<span className="font-bold bg-yellow-100">2回目以降は徐々に慣れて、軽く感じられる</span>ようになります。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <KidsOrthoImage
                  name="/images/kidsortho/info/pain-management-solution"
                  alt="痛み対処の具体的方法"
                  category="info"
                />
              </div>
            </section>

            {/* こんな時はすぐ連絡 */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">こんな時はすぐ連絡</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <p className="text-[#8D8070] font-sans mb-6">
                以下の症状がある場合は、すぐに歯科医院に連絡してください
              </p>

              <ul className="space-y-3 ml-4 mb-10 text-[#8D8070] leading-loose font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">痛みが1週間以上続く：</strong>通常は2〜3日で治まる痛みが、1週間以上続く場合は異常です</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">装置が外れた・壊れた：</strong>ブラケットが外れた、ワイヤーが切れた、プレオルソが割れたなど</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">口内炎が治らない（2週間以上）：</strong>装置が常に同じ場所に当たっている可能性があります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">歯茎が腫れる・出血する：</strong>歯肉炎や歯周病の可能性があります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">ワイヤーが頬に刺さって出血する：</strong>緊急対応が必要です</span>
                </li>
              </ul>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">よくある質問</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <div className="space-y-6">
                {/* Q1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q1
                      </span>
                      <h3 className="font-serif font-bold text-[#5A4D41] text-lg">
                        こども矯正は大人の矯正より痛いですか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose font-sans">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> いいえ、<span className="font-bold bg-yellow-100">こども矯正の方が痛みが少ない</span>です。
                      成長期の子どもは骨が柔らかく、歯が動きやすいため、弱い力で矯正できます。
                      大人の矯正は骨が硬いため、強い力が必要で痛みも強くなります。
                    </p>
                  </div>
                </div>

                {/* Q2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q2
                      </span>
                      <h3 className="font-serif font-bold text-[#5A4D41] text-lg">
                        鎮痛剤を飲んでも矯正の効果は変わりませんか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose font-sans">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> はい、<span className="font-bold bg-yellow-100">鎮痛剤を飲んでも矯正の効果は変わりません</span>。
                      痛みは「歯が動いている証拠」ですが、痛みを我慢する必要はありません。
                      むしろ、痛みでストレスを感じると食欲が落ちたり、装置を外したくなったりするため、
                      <span className="text-[#395b45] font-bold">適切に鎮痛剤を使う方が治療がスムーズ</span>に進みます。
                    </p>
                  </div>
                </div>

                {/* Q3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q3
                      </span>
                      <h3 className="font-serif font-bold text-[#5A4D41] text-lg">
                        プレオルソやムーシールドも痛いですか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose font-sans">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> プレオルソ・ムーシールドなどの<span className="font-bold bg-yellow-100">取り外し式装置は、ワイヤー矯正ほど強い痛みは出ません</span>。
                      ただし、装着直後は<span className="text-[#395b45] font-bold">「違和感」「圧迫感」</span>があり、
                      口が閉じにくい、よだれが出やすいなどの症状が出ます。
                      1〜2週間で慣れますが、装置の縁が歯茎に当たって痛い場合は、すぐに連絡してください。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-[#FDFBF7] to-[#FFF9F0] rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-4">痛みの少ないこども矯正を</h2>
                <p className="text-lg md:text-xl text-[#8D8070] leading-loose font-sans">
                  豊洲で小児矯正をお考えなら、豊洲駅徒歩2分の当院へ。お子さんの痛みに配慮した<br />
                  矯正治療を行っています。<br />
                  痛みへの対処法や、緊急時の対応もしっかりサポートします。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={24} className="text-[#C5A572]" />
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#5A4D41]">無料カウンセリング</h3>
                      <p className="text-sm text-[#8D8070] font-sans">所要時間：30〜60分</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-[#8D8070] ml-9 font-sans">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">✓</span>
                      <span>痛みへの対処法の詳しいご説明</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">✓</span>
                      <span>お子様に合った治療方法のご提案</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">✓</span>
                      <span>治療期間と費用の詳しいご説明</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Phone size={24} className="text-[#C5A572]" />
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#5A4D41]">お電話でのご予約</h3>
                      <p className="text-sm text-[#8D8070] font-sans">平日 9:00〜18:00</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-[#C5A572] mb-3 ml-9">045-XXX-XXXX</p>
                  <p className="text-sm text-[#8D8070] ml-9 font-sans">
                    「痛みの相談」とお伝えください
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#C5A572] hover:bg-[#B39562] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  <Calendar size={20} />
                  <span>無料カウンセリング予約</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/kidsortho"
                  className="inline-flex items-center justify-center gap-2 bg-[#5A4D41] hover:bg-[#4A3D31] text-white font-bold py-4 px-8 rounded-full transition-all border-2 border-[#5A4D41]"
                >
                  <span>こども矯正トップへ</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* 監修者情報 */}
        <div className="container mx-auto px-4 pt-2 pb-16">
          <AuthorBio />
        </div>
      </main>
      <Footer />
    </>
  )
}
