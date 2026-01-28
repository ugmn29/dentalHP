import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen, AlertCircle, CheckCircle2, Clock, Utensils, Apple, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: '顎を育てる食育レシピ｜よく噛む食事で歯並び改善｜F歯科・矯正歯科',
  description: '硬い食べ物を前歯で噛みちぎる練習で、顎の発達を促進。スルメ・ナッツ・ニンジンスティックなど、家庭でできる食育レシピを紹介します。',
  keywords: '食育,顎の発達,咀嚼力,歯並び,小児矯正,硬い食べ物,よく噛む,レシピ',
}

export default function FoodEducationPage() {
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
            <span className="text-[#E67A2E]">食育レシピ</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-2 bg-gradient-to-b from-[#FDFBF7] to-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
            顎を育てる食育レシピ<br />
            よく噛む食事で歯並び改善
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
            硬い食べ物を前歯で噛みちぎる練習で顎の発達を促進
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
                <span className="font-bold bg-yellow-100">柔らかい食事ばかりでは、顎が発達せず歯並びが悪化</span>します。
              </p>
              <p className="mb-4">
                硬い食べ物を<span className="font-bold text-[#E67A2E]">「前歯で噛みちぎる」</span>練習をすることで、
                顎の骨が横に広がり、<span className="font-bold bg-yellow-100">歯が並ぶスペースが確保</span>されます。
              </p>
              <p>
                スルメ・ナッツ・ニンジンスティックなど、<span className="font-bold bg-yellow-100">家庭で簡単に実践できる食育レシピ</span>で、
                毎日の食事から顎を育てましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* なぜ硬い食べ物が必要なのか */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              なぜ硬い食べ物が必要なのか？
            </h2>
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20 mb-8">
            <p className="text-gray-700 leading-loose mb-6">
              現代の子どもは、<span className="font-bold bg-yellow-100">柔らかい食事（ハンバーグ・パスタ・カレー）</span>が中心で、
              咀嚼回数が激減しています。その結果、顎が十分に発達せず、歯並びが悪化しています。
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                <h4 className="font-bold text-red-700 mb-3 text-lg">現代の子ども（柔らかい食事）</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-1"><span className="font-bold text-red-700">咀嚼回数：</span></p>
                    <p className="text-3xl font-bold text-red-700">620回/食</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-1"><span className="font-bold text-red-700">食事時間：</span></p>
                    <p className="text-3xl font-bold text-red-700">11分</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                <h4 className="font-bold text-green-700 mb-3 text-lg">戦前の日本人（硬い食事）</h4>
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-1"><span className="font-bold text-green-700">咀嚼回数：</span></p>
                    <p className="text-3xl font-bold text-green-700">1,420回/食</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-1"><span className="font-bold text-green-700">食事時間：</span></p>
                    <p className="text-3xl font-bold text-green-700">22分</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-6 rounded-xl">
              <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">咀嚼回数が半分以下になった結果</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">●</span>
                  <span><span className="font-bold">顎の骨が十分に発達しない</span>（横幅が狭いまま）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">●</span>
                  <span>歯が並ぶスペースが不足し、<span className="font-bold">デコボコ（叢生）</span>になる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">●</span>
                  <span>咬合力（噛む力）が弱く、<span className="font-bold">消化不良</span>や<span className="font-bold">集中力低下</span>にもつながる</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#E67A2E]/10 to-[#E67A2E]/5 rounded-3xl p-8 border-2 border-[#E67A2E]/20">
            <div className="flex items-start gap-4">
              <Apple className="w-10 h-10 text-[#E67A2E] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-bold text-[#5A4D41] mb-3 text-xl">「前歯で噛みちぎる」が最重要</h4>
                <p className="text-gray-700 leading-loose mb-3">
                  ただ硬いだけでなく、<span className="font-bold bg-yellow-100">「前歯で噛みちぎる」動作</span>が重要です。
                  前歯で噛むことで、<span className="font-bold text-[#E67A2E]">顎の骨に垂直方向の刺激</span>が加わり、
                  骨が横に広がります。
                </p>
                <p className="text-sm text-gray-600">
                  例：リンゴの丸かじり、トウモロコシの芯かじり、スルメを前歯で引きちぎるなど
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 顎を育てる食材リスト */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              顎を育てる食材リスト
            </h2>
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              年齢別におすすめの食材を紹介します
            </p>
          </div>

          {/* 3〜5歳向け */}
          <div className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-lg">
                3〜5歳
              </div>
              <h3 className="text-2xl font-bold text-[#5A4D41] font-serif">
                まずは「少し硬め」から始める
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">ニンジンスティック（生）</h4>
                    <p className="text-xs text-gray-600">前歯で噛みちぎる練習に最適。スティック状にカットして持たせる</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">リンゴ（皮つき・4等分）</h4>
                    <p className="text-xs text-gray-600">「丸かじり」の練習。皮つきのまま大きめにカットする</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">焼き芋（皮つき）</h4>
                    <p className="text-xs text-gray-600">自然な甘みで子どもが好きな硬さ。皮ごと噛む練習になる</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">トウモロコシ（芯つき）</h4>
                    <p className="text-xs text-gray-600">前歯で引きちぎる動作が自然にできる。夏の定番食材</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">枝豆（さやごと）</h4>
                    <p className="text-xs text-gray-600">前歯でさやから豆を押し出す動作が顎のトレーニングになる</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">フランスパン（小さめ）</h4>
                    <p className="text-xs text-gray-600">外側が硬く、よく噛まないと飲み込めない。咀嚼回数が増える</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6〜12歳向け */}
          <div className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-lg">
                6〜12歳
              </div>
              <h3 className="text-2xl font-bold text-[#5A4D41] font-serif">
                本格的に「硬い食材」に挑戦
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">スルメ（無添加）</h4>
                    <p className="text-xs text-gray-600 mb-2">最強の顎トレ食材。前歯で引きちぎり、奥歯で100回以上噛む</p>
                    <p className="text-xs text-[#E67A2E] font-bold">★おすすめ度：5/5</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">ナッツ類（アーモンド・クルミ）</h4>
                    <p className="text-xs text-gray-600 mb-2">栄養価も高く、毎日のおやつに最適。1日10粒を目安に</p>
                    <p className="text-xs text-[#E67A2E] font-bold">★おすすめ度：5/5</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">昆布（おしゃぶり昆布）</h4>
                    <p className="text-xs text-gray-600 mb-2">長時間噛み続けられる。テレビを見ながらでもOK</p>
                    <p className="text-xs text-[#E67A2E] font-bold">★おすすめ度：4/5</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">干し芋</h4>
                    <p className="text-xs text-gray-600 mb-2">甘くて子どもが好きな味。硬さもちょうど良い</p>
                    <p className="text-xs text-[#E67A2E] font-bold">★おすすめ度：4/5</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">せんべい（固焼き）</h4>
                    <p className="text-xs text-gray-600 mb-2">おやつとして手軽。ただし糖分に注意（虫歯リスク）</p>
                    <p className="text-xs text-[#E67A2E] font-bold">★おすすめ度：3/5</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">ビーフジャーキー</h4>
                    <p className="text-xs text-gray-600 mb-2">高タンパクで栄養価が高い。塩分が多いので量に注意</p>
                    <p className="text-xs text-[#E67A2E] font-bold">★おすすめ度：3/5</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">煮干し</h4>
                    <p className="text-xs text-gray-600 mb-2">カルシウムも摂れる。頭・内臓を取った食べやすいものを選ぶ</p>
                    <p className="text-xs text-[#E67A2E] font-bold">★おすすめ度：4/5</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E67A2E] flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-[#5A4D41] mb-1">根菜類（レンコン・ゴボウ）</h4>
                    <p className="text-xs text-gray-600 mb-2">食事に取り入れやすい。きんぴらごぼうなどで提供</p>
                    <p className="text-xs text-[#E67A2E] font-bold">★おすすめ度：4/5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 実践！1週間の食育レシピ例 */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              実践！1週間の食育レシピ例
            </h2>
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              毎日の食事・おやつに取り入れやすいメニュー
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold">
                    月
                  </div>
                  <h4 className="font-bold text-[#5A4D41] text-lg">朝：トースト → フランスパン</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed ml-12">
                  <span className="font-bold bg-yellow-100">食パンの代わりにフランスパン</span>を出すだけで、咀嚼回数が2倍に。
                  外側の硬い部分を前歯で噛みちぎる練習になります。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold">
                    火
                  </div>
                  <h4 className="font-bold text-[#5A4D41] text-lg">おやつ：グミ → アーモンド10粒</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed ml-12">
                  <span className="font-bold bg-yellow-100">市販のグミをアーモンドに変更</span>。
                  よく噛まないと飲み込めないため、自然と咀嚼回数が増えます。
                  ビタミンEも摂れて栄養バランスも◎。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold">
                    水
                  </div>
                  <h4 className="font-bold text-[#5A4D41] text-lg">夕食：ハンバーグ → きんぴらごぼうを追加</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed ml-12">
                  ハンバーグ（柔らかい）だけでなく、<span className="font-bold bg-yellow-100">硬めのきんぴらごぼうを副菜</span>として追加。
                  レンコン・ゴボウは根菜類で噛み応えがあります。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold">
                    木
                  </div>
                  <h4 className="font-bold text-[#5A4D41] text-lg">朝：バナナ → リンゴ（皮つき・4等分）</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed ml-12">
                  バナナ（噛まずに飲み込める）ではなく、<span className="font-bold bg-yellow-100">リンゴを大きめにカット</span>して提供。
                  「丸かじり」の練習になり、前歯で噛みちぎる動作が顎を育てます。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold">
                    金
                  </div>
                  <h4 className="font-bold text-[#5A4D41] text-lg">おやつ：ポテトチップス → 干し芋</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed ml-12">
                  ポテトチップス（噛まずに溶ける）を<span className="font-bold bg-yellow-100">干し芋に変更</span>。
                  自然な甘みで子どもが好きな味。硬さもちょうど良く、よく噛まないと飲み込めません。
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold">
                    土
                  </div>
                  <h4 className="font-bold text-[#5A4D41] text-lg">おやつ：スルメ5分チャレンジ</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed ml-12">
                  週末は<span className="font-bold bg-yellow-100">スルメを5分間噛み続ける</span>チャレンジ。
                  テレビを見ながらでもOK。前歯で引きちぎり、奥歯で100回以上噛む最強トレーニング。
                </p>
              </div>

              <div className="pb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold">
                    日
                  </div>
                  <h4 className="font-bold text-[#5A4D41] text-lg">昼：焼きトウモロコシ（芯つき）</h4>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed ml-12">
                  トウモロコシを芯つきのまま提供。<span className="font-bold bg-yellow-100">前歯で引きちぎる動作</span>が自然にできる。
                  夏の定番食材で、子どもも楽しく食べられます。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#E67A2E]/10 to-[#E67A2E]/5 rounded-3xl p-8 border-2 border-[#E67A2E]/20 mt-8">
            <div className="flex items-start gap-4">
              <Utensils className="w-10 h-10 text-[#E67A2E] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-bold text-[#5A4D41] mb-3 text-xl">食育のポイント</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67A2E] mt-1">●</span>
                    <span><span className="font-bold">「柔らかい食事をなくす」のではなく、「硬い食材を追加」</span>する考え方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67A2E] mt-1">●</span>
                    <span>毎食すべてを硬くする必要はなく、<span className="font-bold">1日1回、硬い食材を取り入れる</span>だけでOK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67A2E] mt-1">●</span>
                    <span>子どもが嫌がる場合は無理強いせず、<span className="font-bold">好きな味のもの（干し芋・ナッツ）</span>から始める</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67A2E] mt-1">●</span>
                    <span>親が一緒に食べることで、<span className="font-bold">「よく噛むのが当たり前」</span>の文化を作る</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 注意点 */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              注意点
            </h2>
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-red-700 mb-2 text-lg">3歳未満は誤嚥に注意</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ナッツ類・スルメは<span className="font-bold bg-yellow-100">3歳未満には与えない</span>でください。
                    気管に入って窒息する危険があります。3歳未満はニンジンスティック・リンゴなど、
                    大きめにカットして持たせられる食材から始めましょう。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-red-700 mb-2 text-lg">砂糖入りのおやつは虫歯リスク</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    硬いおやつでも、<span className="font-bold bg-yellow-100">砂糖が入っているもの（せんべい・キャラメル）</span>は虫歯のリスクがあります。
                    できるだけ<span className="font-bold text-[#E67A2E]">無添加・無糖のもの（スルメ・ナッツ・煮干し）</span>を選びましょう。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-red-700 mb-2 text-lg">アレルギー確認を忘れずに</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ナッツ類は<span className="font-bold bg-yellow-100">アレルギーが出やすい食材</span>です。
                    初めて与える場合は、少量から始めて様子を見てください。
                    アレルギーがある場合は、昆布・煮干し・根菜類など別の硬い食材で代用しましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 効果が出るまでの期間 */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              効果が出るまでの期間
            </h2>
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-[#E67A2E] rounded-full flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">1</p>
                  <p className="text-xs text-white">ヶ月</p>
                </div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">咀嚼回数が増える（食事時間が長くなる）</h4>
                <p className="text-sm text-gray-700">
                  硬い食材を食べることに慣れて、<span className="font-bold bg-yellow-100">自然と咀嚼回数が増えます</span>。
                  食事時間が15分以上になれば、顎の筋肉が鍛えられている証拠です。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-[#E67A2E] rounded-full flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">3</p>
                  <p className="text-xs text-white">ヶ月</p>
                </div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">顎の筋肉がつき、咬合力が向上</h4>
                <p className="text-sm text-gray-700">
                  毎日硬い食材を食べることで、<span className="font-bold bg-yellow-100">顎の筋肉が発達</span>します。
                  咬合力（噛む力）が強くなり、硬いものを噛むのが苦にならなくなります。
                  <span className="font-bold text-[#E67A2E]">顎の骨も少しずつ横に広がり始めます</span>。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-20 h-20 bg-[#E67A2E] rounded-full flex items-center justify-center flex-shrink-0">
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">6</p>
                  <p className="text-xs text-white">ヶ月</p>
                </div>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">顎の横幅が広がり、歯が並ぶスペースが確保される</h4>
                <p className="text-sm text-gray-700">
                  6ヶ月〜1年続けることで、<span className="font-bold bg-yellow-100">顎の骨が横に広がり、歯が並ぶスペースが確保</span>されます。
                  特に<span className="font-bold text-[#E67A2E]">成長期（6〜12歳）</span>は効果が出やすく、
                  矯正治療と併用すれば治療期間の短縮にもつながります。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#E67A2E]/10 to-[#E67A2E]/5 rounded-3xl p-8 border-2 border-[#E67A2E]/20 mt-12">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-10 h-10 text-[#E67A2E] flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-bold text-[#5A4D41] mb-3 text-xl">継続のコツ</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67A2E] mt-1">●</span>
                    <span><span className="font-bold">「硬い食事の日」を週3回</span>設定する（月・水・金など）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67A2E] mt-1">●</span>
                    <span>子どもが好きな味のもの（干し芋・ナッツ）から始める</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67A2E] mt-1">●</span>
                    <span>親も一緒に食べて、<span className="font-bold">「よく噛むのが当たり前」の文化</span>を作る</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67A2E] mt-1">●</span>
                    <span>食事時間を計測して、<span className="font-bold">「15分以上」を目標</span>にする</span>
                  </li>
                </ul>
              </div>
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
                <span>硬い食べ物だけで歯並びは治りますか？</span>
              </h3>
              <div className="pl-9">
                <p className="text-gray-700 leading-loose">
                  <span className="font-bold text-[#5A4D41]">A.</span>
                  硬い食べ物だけでは、すでに悪化した歯並びを完全に治すことはできません。
                  しかし、<span className="font-bold bg-yellow-100">成長期（6〜12歳）に硬い食材を食べることで、顎の正常な発達を促し、
                  歯が並ぶスペースを確保</span>できます。矯正治療と併用することで、相乗効果が期待できます。
                </p>
              </div>
            </div>

            <div className="bg-[#FDFBF7] rounded-2xl shadow-lg p-8 border-2 border-[#E67A2E]/10">
              <h3 className="text-xl font-bold text-[#E67A2E] mb-4 flex items-start gap-3">
                <span className="flex-shrink-0">Q2.</span>
                <span>子どもが硬い食べ物を嫌がります。どうすればいいですか？</span>
              </h3>
              <div className="pl-9">
                <p className="text-gray-700 leading-loose">
                  <span className="font-bold text-[#5A4D41]">A.</span>
                  最初から硬すぎるものを与えると、嫌がって食べなくなります。
                  <span className="font-bold bg-yellow-100">干し芋・焼き芋など、甘くて子どもが好きな味のもの</span>から始めましょう。
                  また、<span className="font-bold text-[#E67A2E]">親が一緒に食べて「美味しいね」と声をかける</span>ことで、
                  子どもも抵抗感なく食べられるようになります。
                </p>
              </div>
            </div>

            <div className="bg-[#FDFBF7] rounded-2xl shadow-lg p-8 border-2 border-[#E67A2E]/10">
              <h3 className="text-xl font-bold text-[#E67A2E] mb-4 flex items-start gap-3">
                <span className="flex-shrink-0">Q3.</span>
                <span>矯正装置をつけながらでも硬い食べ物を食べられますか？</span>
              </h3>
              <div className="pl-9">
                <p className="text-gray-700 leading-loose">
                  <span className="font-bold text-[#5A4D41]">A.</span>
                  矯正装置の種類によります。<span className="font-bold bg-yellow-100">プレオルソ・ムーシールドなどの取り外し式装置</span>は、
                  外して食事をするため問題ありません。
                  固定式のワイヤー矯正の場合、<span className="font-bold text-red-700">スルメ・ナッツなど非常に硬いものは避ける</span>べきです。
                  根菜類・リンゴなど、適度な硬さのものを選びましょう。担当医に相談してください。
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
              食育指導も含めた<br className="md:hidden" />こども矯正を
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              F歯科・矯正歯科では、矯正治療だけでなく<br className="md:hidden" />
              <span className="font-bold">食育指導</span>も行っています。<br />
              家庭でできる顎を育てる食事法を<br className="md:hidden" />
              詳しくお伝えします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#E67A2E] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Clock className="w-6 h-6" />
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
