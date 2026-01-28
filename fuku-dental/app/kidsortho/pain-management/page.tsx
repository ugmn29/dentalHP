import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen, AlertCircle, CheckCircle2, Clock, Heart, ThermometerSnowflake, Pill } from 'lucide-react'

export const metadata: Metadata = {
  title: '痛みの対処法｜こども矯正の痛み管理と緊急対応｜F歯科・矯正歯科',
  description: 'こども矯正の痛みはいつまで続く？痛みの種類別対処法（冷やす・鎮痛剤・食事の工夫）と、緊急時の連絡先を詳しく解説します。',
  keywords: '痛み,痛み対処,鎮痛剤,こども矯正,小児矯正,ワイヤー,プレオルソ,緊急対応',
}

export default function PainManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#FDFBF7] py-4">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-[#E67A2E] transition-colors">
              ホーム
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/kidsortho" className="text-gray-600 hover:text-[#E67A2E] transition-colors">
              こども矯正
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#E67A2E]">痛みの対処法</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-2 bg-gradient-to-b from-[#FDFBF7] to-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
            痛みの対処法<br />
            こども矯正の痛み管理と緊急対応
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
            痛みの種類別対処法と緊急時の連絡先
          </p>
          <div className="w-24 h-1 bg-[#E67A2E] mx-auto"></div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-[#E67A2E]/20">
            <div className="flex items-start gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-[#E67A2E] flex-shrink-0 mt-1" />
              <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif">
                結論
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-[#5A4D41] leading-loose">
              <p>
                <span className="font-bold bg-yellow-100">こども矯正の痛みは2〜3日で治まる</span>のが一般的です。
              </p>
              <p className="mb-4">
                痛みには<span className="font-bold text-[#E67A2E]">「圧迫痛（歯が動く痛み）」「装置が当たる痛み」「ワイヤー調整後の痛み」</span>の3種類があり、
                それぞれ対処法が異なります。
              </p>
              <p>
                <span className="font-bold bg-yellow-100">冷やす・鎮痛剤・柔らかい食事</span>の3つの対処で、
                ほとんどの痛みは自宅で管理できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 痛みはいつまで続くのか */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              痛みはいつまで続くのか？
            </h2>
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 bg-[#E67A2E] rounded-full flex items-center justify-center flex-shrink-0">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white">1</p>
                    <p className="text-xs text-white">日目</p>
                  </div>
                </div>
                <div className="flex-1 bg-[#FDFBF7] p-6 rounded-2xl">
                  <h4 className="font-bold text-gray-800 mb-2 text-lg">装置装着直後〜初日</h4>
                  <p className="text-sm text-gray-700">
                    装置をつけた直後は、<span className="font-bold bg-yellow-100">違和感が強く、口の中が気になります</span>。
                    ワイヤー矯正の場合、歯に<span className="font-bold text-red-700">じわじわとした圧迫感</span>を感じ始めます。
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
                <div className="flex-1 bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                  <h4 className="font-bold text-red-700 mb-2 text-lg">痛みのピーク</h4>
                  <p className="text-sm text-gray-700">
                    <span className="font-bold bg-yellow-100">装置装着後24〜48時間が痛みのピーク</span>です。
                    歯が動き始めるため、<span className="font-bold text-red-700">噛むと痛い・歯が浮いた感じ</span>がします。
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
                <div className="flex-1 bg-orange-50 p-6 rounded-2xl border-2 border-orange-200">
                  <h4 className="font-bold text-orange-700 mb-2 text-lg">痛みが和らぎ始める</h4>
                  <p className="text-sm text-gray-700">
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
                <div className="flex-1 bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                  <h4 className="font-bold text-green-700 mb-2 text-lg">ほぼ痛みがなくなる</h4>
                  <p className="text-sm text-gray-700">
                    1週間後には<span className="font-bold bg-yellow-100">ほとんど痛みを感じなくなります</span>。
                    装置にも慣れて、普通の食事（肉・野菜）が食べられるようになります。
                    ただし、硬い食べ物（スルメ・ナッツ）は引き続き避けましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#E67A2E]/10 to-[#E67A2E]/5 rounded-3xl p-8 border-2 border-[#E67A2E]/20">
            <div className="flex items-start gap-4">
              <Clock className="w-10 h-10 text-[#E67A2E] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-bold text-[#5A4D41] mb-3 text-xl">ワイヤー調整後も同じサイクル</h4>
                <p className="text-gray-700 leading-loose mb-3">
                  ワイヤー矯正の場合、<span className="font-bold bg-yellow-100">月1回のワイヤー調整後にも同じ痛みのサイクル</span>が繰り返されます。
                  ただし、<span className="font-bold text-[#E67A2E]">2回目以降は慣れてきて、痛みが軽く感じられる</span>ことが多いです。
                </p>
                <p className="text-sm text-gray-600">
                  プレオルソ・ムーシールドなどの取り外し式装置は、ワイヤー矯正ほど強い痛みは出ません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 痛みの種類と対処法 */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              痛みの種類と対処法
            </h2>
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              痛みの種類ごとに対処法が異なります
            </p>
          </div>

          {/* 痛みのタイプ1: 圧迫痛（歯が動く痛み） */}
          <div className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-[#5A4D41] font-serif">
                圧迫痛（歯が動く痛み）
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 mb-6">
              <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">どんな痛み？</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span><span className="font-bold">じわじわとした鈍い痛み</span>が続く</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>噛むと痛い、歯が浮いた感じがする</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>硬い食べ物が食べられない</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                <ThermometerSnowflake className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-blue-700 mb-2 text-lg">対処法1：冷やす</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    <span className="font-bold bg-yellow-100">頬の外側から冷やす</span>ことで、炎症を抑えます。
                    氷を直接当てるのではなく、<span className="font-bold">保冷剤をタオルで包んで</span>頬に当てます。
                  </p>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-700">
                      <span className="font-bold text-blue-700">目安：</span>
                      1回10分、1日3〜4回まで。冷やしすぎると血行が悪くなるので注意。
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                <Pill className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-green-700 mb-2 text-lg">対処法2：鎮痛剤を使う</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    痛みが強い場合は、<span className="font-bold bg-yellow-100">市販の鎮痛剤（子ども用バファリン・カロナールなど）</span>を服用できます。
                  </p>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-700 mb-2">
                      <span className="font-bold text-green-700">飲むタイミング：</span>
                      装置装着後すぐ、または就寝前に飲むと痛みのピークを和らげられます
                    </p>
                    <p className="text-xs text-red-700">
                      <span className="font-bold">注意：</span>
                      用法・用量を守り、連続3日以上服用する場合は担当医に相談してください
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
                <Heart className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-orange-700 mb-2 text-lg">対処法3：柔らかい食事にする</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    痛みがある間は、<span className="font-bold bg-yellow-100">噛まずに食べられる柔らかい食事</span>を選びましょう。
                  </p>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-700 mb-1">
                      <span className="font-bold text-orange-700">おすすめ：</span>
                    </p>
                    <ul className="text-xs text-gray-700 space-y-1">
                      <li>● おかゆ、雑炊、リゾット</li>
                      <li>● やわらかく煮たうどん</li>
                      <li>● スープ、ポタージュ</li>
                      <li>● 豆腐、茶碗蒸し</li>
                      <li>● ヨーグルト、プリン、ゼリー</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 痛みのタイプ2: 装置が当たる痛み */}
          <div className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-[#5A4D41] font-serif">
                装置が当たる痛み（口内炎）
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 mb-6">
              <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">どんな痛み？</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span><span className="font-bold">ピリピリ・チクチクした痛み</span>（口内炎）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>ワイヤー・ブラケットが頬・唇に当たる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>プレオルソの縁が歯茎に食い込む</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                <CheckCircle2 className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-blue-700 mb-2 text-lg">対処法1：矯正用ワックスを使う</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    <span className="font-bold bg-yellow-100">矯正用ワックス（歯科医院で貰える）</span>をブラケットやワイヤーの当たる部分に貼ります。
                    クッション代わりになり、口内炎を防げます。
                  </p>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-700">
                      <span className="font-bold text-blue-700">使い方：</span>
                      米粒大のワックスを指で丸めて、当たる部分に押し付ける。食事の時は外す。
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-green-700 mb-2 text-lg">対処法2：口内炎パッチを貼る</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    すでに口内炎ができている場合は、<span className="font-bold bg-yellow-100">市販の口内炎パッチ（アフタッチなど）</span>を貼ります。
                  </p>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-700">
                      <span className="font-bold text-green-700">効果：</span>
                      2〜3日で治ります。パッチがない場合は、塗るタイプの口内炎薬（ケナログなど）も有効です。
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border-2 border-red-200">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-red-700 mb-2 text-lg">対処法3：ワイヤーが飛び出している場合は連絡</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ワイヤーの端が飛び出して頬に刺さる場合は、<span className="font-bold bg-yellow-100">すぐに歯科医院に連絡</span>してください。
                    応急処置としては、矯正用ワックスで先端を覆うか、清潔な爪切りでワイヤーをカットすることも可能です（自己判断で行わず、まずは連絡を）。
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 痛みのタイプ3: ワイヤー調整後の痛み */}
          <div className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-[#5A4D41] font-serif">
                ワイヤー調整後の痛み
              </h3>
            </div>

            <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 mb-6">
              <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">どんな痛み？</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span><span className="font-bold">調整後6時間ほどから痛み始める</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>初回装着時と同じ「圧迫痛」が再発</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>2〜3日で治まるが、月1回繰り返される</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border-2 border-blue-200">
                <Clock className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-blue-700 mb-2 text-lg">対処法1：調整日は午前中を選ぶ</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    <span className="font-bold bg-yellow-100">調整日を午前中に設定</span>すれば、
                    痛みのピーク（調整後6〜24時間）が夜になります。
                    就寝前に鎮痛剤を飲むことで、痛みを和らげながら眠れます。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border-2 border-green-200">
                <Heart className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-green-700 mb-2 text-lg">対処法2：調整後は柔らかい食事を準備</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    調整日の夕食は、<span className="font-bold bg-yellow-100">あらかじめ柔らかい食事（おかゆ・うどん）</span>を準備しておきましょう。
                    痛みが出てから買い物に行くのは大変です。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl border-2 border-orange-200">
                <CheckCircle2 className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-orange-700 mb-2 text-lg">対処法3：2回目以降は慣れてくる</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ワイヤー調整の痛みは、<span className="font-bold bg-yellow-100">2回目以降は徐々に慣れて、軽く感じられる</span>ようになります。
                    初回が一番辛いので、「次はもっと楽になる」と安心してください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* こんな時はすぐ連絡 */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              こんな時はすぐ連絡
            </h2>
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              以下の症状がある場合は、すぐに歯科医院に連絡してください
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-red-700 mb-2 text-lg">痛みが1週間以上続く</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    通常は2〜3日で治まる痛みが、<span className="font-bold bg-yellow-100">1週間以上続く場合</span>は異常です。
                    装置が合っていない、または歯に無理な力がかかっている可能性があります。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-red-700 mb-2 text-lg">装置が外れた・壊れた</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ブラケットが外れた、ワイヤーが切れた、プレオルソが割れたなど、
                    <span className="font-bold bg-yellow-100">装置が破損した場合</span>はすぐに連絡してください。
                    そのまま放置すると、治療が進まなくなります。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-red-700 mb-2 text-lg">口内炎が治らない（2週間以上）</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    口内炎が<span className="font-bold bg-yellow-100">2週間以上治らない場合</span>、
                    装置が常に同じ場所に当たっている可能性があります。
                    装置の調整が必要です。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-red-700 mb-2 text-lg">歯茎が腫れる・出血する</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold bg-yellow-100">歯茎が赤く腫れる、出血が止まらない</span>場合は、
                    歯肉炎や歯周病の可能性があります。
                    矯正装置があると歯磨きが難しく、歯茎が炎症を起こしやすくなります。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-red-700 mb-2 text-lg">ワイヤーが頬に刺さって出血する</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ワイヤーの端が飛び出して<span className="font-bold bg-yellow-100">頬に刺さり、出血する</span>場合は緊急対応が必要です。
                    応急処置として矯正用ワックスで覆い、すぐに連絡してください。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20 mt-8">
            <h4 className="font-bold text-[#5A4D41] mb-4 text-xl text-center">緊急連絡先</h4>
            <div className="bg-[#FDFBF7] p-6 rounded-xl">
              <p className="text-center text-gray-700 mb-4">
                <span className="font-bold text-[#E67A2E] text-2xl">F歯科・矯正歯科</span>
              </p>
              <p className="text-center text-gray-700 mb-2">
                診療時間内：<span className="font-bold text-[#E67A2E]">TEL 0123-45-6789</span>
              </p>
              <p className="text-center text-sm text-gray-600">
                診療時間外の緊急時は、留守番電話にメッセージを残してください。<br />
                翌診療日に優先的に対応いたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              よくある質問
            </h2>
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#FDFBF7] rounded-2xl shadow-lg p-8 border-2 border-[#E67A2E]/10">
              <h3 className="text-xl font-bold text-[#E67A2E] mb-4 flex items-start gap-3">
                <span className="flex-shrink-0">Q1.</span>
                <span>こども矯正は大人の矯正より痛いですか？</span>
              </h3>
              <div className="pl-9">
                <p className="text-gray-700 leading-loose">
                  <span className="font-bold text-[#5A4D41]">A.</span>
                  いいえ、<span className="font-bold bg-yellow-100">こども矯正の方が痛みが少ない</span>です。
                  成長期の子どもは骨が柔らかく、歯が動きやすいため、弱い力で矯正できます。
                  大人の矯正は骨が硬いため、強い力が必要で痛みも強くなります。
                </p>
              </div>
            </div>

            <div className="bg-[#FDFBF7] rounded-2xl shadow-lg p-8 border-2 border-[#E67A2E]/10">
              <h3 className="text-xl font-bold text-[#E67A2E] mb-4 flex items-start gap-3">
                <span className="flex-shrink-0">Q2.</span>
                <span>鎮痛剤を飲んでも矯正の効果は変わりませんか？</span>
              </h3>
              <div className="pl-9">
                <p className="text-gray-700 leading-loose">
                  <span className="font-bold text-[#5A4D41]">A.</span>
                  はい、<span className="font-bold bg-yellow-100">鎮痛剤を飲んでも矯正の効果は変わりません</span>。
                  痛みは「歯が動いている証拠」ですが、痛みを我慢する必要はありません。
                  むしろ、痛みでストレスを感じると食欲が落ちたり、装置を外したくなったりするため、
                  <span className="font-bold text-[#E67A2E]">適切に鎮痛剤を使う方が治療がスムーズ</span>に進みます。
                </p>
              </div>
            </div>

            <div className="bg-[#FDFBF7] rounded-2xl shadow-lg p-8 border-2 border-[#E67A2E]/10">
              <h3 className="text-xl font-bold text-[#E67A2E] mb-4 flex items-start gap-3">
                <span className="flex-shrink-0">Q3.</span>
                <span>プレオルソやムーシールドも痛いですか？</span>
              </h3>
              <div className="pl-9">
                <p className="text-gray-700 leading-loose">
                  <span className="font-bold text-[#5A4D41]">A.</span>
                  プレオルソ・ムーシールドなどの<span className="font-bold bg-yellow-100">取り外し式装置は、ワイヤー矯正ほど強い痛みは出ません</span>。
                  ただし、装着直後は<span className="font-bold text-[#E67A2E]">「違和感」「圧迫感」</span>があり、
                  口が閉じにくい、よだれが出やすいなどの症状が出ます。
                  1〜2週間で慣れますが、装置の縁が歯茎に当たって痛い場合は、すぐに連絡してください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-2 bg-gradient-to-br from-[#E67A2E] to-[#D66A28]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
              痛みの少ないこども矯正を
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              F歯科・矯正歯科では、お子さんの痛みに配慮した<br className="md:hidden" />
              <span className="font-bold">矯正治療</span>を行っています。<br />
              痛みへの対処法や、緊急時の対応も<br className="md:hidden" />
              しっかりサポートします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#E67A2E] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Heart className="w-6 h-6" />
                無料相談を予約する
              </Link>
              <Link
                href="/kidsortho"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white"
              >
                こども矯正TOPへ
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
