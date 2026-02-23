import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen, AlertCircle, CheckCircle2, Clock, Utensils, Apple, TrendingUp, Home, ArrowRight } from 'lucide-react'
import { KidsOrthoImage } from '@/components/KidsOrthoImage'
import { PageImage } from '@/components/PageImage'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AuthorBio } from '@/components/AuthorBio'

export const metadata: Metadata = {
  title: '顎を育てる食育レシピ｜よく噛む食事で歯並び改善｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '硬い食べ物を前歯で噛みちぎる練習で、顎の発達を促進。スルメ・ナッツ・ニンジンスティックなど、家庭でできる食育レシピを紹介します。',
  keywords: '食育,顎の発達,咀嚼力,歯並び,小児矯正,硬い食べ物,よく噛む,レシピ',
  openGraph: {
    title: '顎を育てる食育レシピ｜よく噛む食事で歯並び改善｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '硬い食べ物を前歯で噛みちぎる練習で、顎の発達を促進。スルメ・ナッツ・ニンジンスティックなど、家庭でできる食育レシピを紹介します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kidsortho/food-education',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
}

export default function FoodEducationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
        {/* Breadcrumb */}
        <div className="bg-[#FDFBF7] border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-[#8D8070]">
              <Link href="/" className="hover:text-[#C5A572] flex items-center transition-colors">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/kidsortho" className="hover:text-[#C5A572] transition-colors">
                こども矯正
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572] font-bold">食育レシピ</span>
            </div>
          </div>
        </div>

      {/* Hero Section */}
      <section className="py-6 bg-gradient-to-b from-[#FDFBF7] to-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
            顎を育てる食育レシピ<br />
            よく噛む食事で歯並び改善
          </h1>
          <PageImage path="/kidsortho/food-education" alt="顎を育てる食育レシピ" />
          <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>

          {/* Hero Image */}
          <div className="mt-8">
            <KidsOrthoImage
              name="/images/kidsortho/training/food-education-hero"
              alt="食育レシピ - よく噛む食事で顎の発達を促進し歯並びを改善"
              category="training"
            />
          </div>

          <p className="text-xl md:text-2xl mt-6 mb-6 text-[#5A4D41] font-medium font-sans">
            硬い食べ物を前歯で噛みちぎる練習で顎の発達を促進
          </p>
          <p className="text-[#8D8070] mt-3 font-sans">豊洲の矯正歯科が詳しく解説します</p>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
              結論
            </h2>
            <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto font-sans">
              <p>
                <span className="font-bold bg-yellow-100">柔らかい食事ばかりでは、顎が発達せず歯並びが悪化</span>します。
              </p>
              <p>
                硬い食べ物を<span className="font-bold text-[#C5A572]">「前歯で噛みちぎる」</span>練習をすることで、
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
      <section className="py-12 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              なぜ硬い食べ物が必要なのか？
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
          </div>

          <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
            <p>
              現代の子どもは、<span className="font-bold bg-yellow-100">柔らかい食事（ハンバーグ・パスタ・カレー）</span>が中心で、
              咀嚼回数が激減しています。その結果、顎が十分に発達せず、歯並びが悪化しています。
            </p>

            <div className="space-y-6 mt-6">
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  現代の子ども（柔らかい食事）
                </h4>
                <p><span className="font-bold">咀嚼回数：</span>620回/食</p>
                <p><span className="font-bold">食事時間：</span>11分</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  昭和初期の子ども（硬い食事）
                </h4>
                <p><span className="font-bold">咀嚼回数：</span>1,420回/食</p>
                <p><span className="font-bold">食事時間：</span>22分</p>
              </div>
            </div>

            <p className="mt-6">
              <span className="font-bold">重要：</span>
              咀嚼回数が減ると、<span className="font-bold">顎の骨への刺激が不足</span>し、
              横方向への成長が止まります。結果、歯が並ぶスペースが不足し、叢生（デコボコ）になります。
            </p>
          </div>
        </div>
      </section>

      {/* 顎を育てる食育レシピ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              顎を育てる食育レシピ
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
          </div>

          {/* Method Image */}
          <div className="mb-12">
            <KidsOrthoImage
              name="/images/kidsortho/training/food-education-method"
              alt="食育の実践方法 - 硬い食べ物を前歯で噛みちぎる練習"
              category="training"
            />
          </div>

          <div className="space-y-8 text-[#5A4D41] leading-loose font-sans">
            {/* おやつ編 */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-6">おやつ編</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    スルメ（するめいか）
                  </h4>
                  <p>
                    <span className="font-bold bg-yellow-100">最も効果的な顎育おやつ</span>。
                    前歯で噛みちぎる練習に最適で、咀嚼回数も多くなります。
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-bold text-[#C5A572]">目安：</span>
                    1日1枚（10cm×5cm程度）
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    アーモンド・クルミ
                  </h4>
                  <p>
                    硬くて栄養価が高いナッツ類。
                    <span className="font-bold bg-yellow-100">奥歯で噛む力</span>を鍛えます。
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-bold text-[#C5A572]">目安：</span>
                    1日10粒程度（無塩・素焼き）
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    ニンジンスティック
                  </h4>
                  <p>
                    生のニンジンを縦に切ったもの。
                    <span className="font-bold bg-yellow-100">前歯で噛みちぎる</span>練習に最適。
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-bold text-[#C5A572]">目安：</span>
                    1日1〜2本（10cm程度）
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    煮干し・小魚
                  </h4>
                  <p>
                    カルシウムも豊富で骨の成長にも良い。
                    <span className="font-bold bg-yellow-100">頭から丸ごと食べる</span>ことで咀嚼回数が増えます。
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-bold text-[#C5A572]">目安：</span>
                    1日10匹程度
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    干し芋
                  </h4>
                  <p>
                    自然な甘みで子どもが喜ぶおやつ。
                    <span className="font-bold bg-yellow-100">よく噛まないと飲み込めない</span>ため、咀嚼力を鍛えられます。
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-bold text-[#C5A572]">目安：</span>
                    1日1〜2切れ（無添加のもの）
                  </p>
                </div>
              </div>
            </div>

            {/* 食事編 */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-6">食事編</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    玄米・雑穀米
                  </h4>
                  <p>
                    白米より硬く、<span className="font-bold bg-yellow-100">咀嚼回数が1.5倍</span>に増えます。
                    栄養価も高いので一石二鳥。
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    根菜類（ごぼう・レンコン）
                  </h4>
                  <p>
                    繊維質が多く、<span className="font-bold bg-yellow-100">自然と噛む回数が増える</span>食材。
                    きんぴらごぼうなどがおすすめ。
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    りんご・梨（丸かじり）
                  </h4>
                  <p>
                    <span className="font-bold bg-yellow-100">前歯で噛みちぎる力</span>を鍛えるのに最適。
                    カットせず、丸ごとかぶりつかせましょう。
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    焼き魚（骨付き）
                  </h4>
                  <p>
                    骨を取りながら食べることで、
                    <span className="font-bold bg-yellow-100">咀嚼を意識</span>するようになります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 効果が出る期間 */}
      <section className="py-12 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              効果が出るまでの期間
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
          </div>

          {/* Effect Image */}
          <div className="mb-12">
            <KidsOrthoImage
              name="/images/kidsortho/training/food-education-effect"
              alt="食育の効果 - 顎の発達と歯並びの改善"
              category="training"
            />
          </div>

          <div className="space-y-6 text-[#5A4D41] leading-loose font-sans">
            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                3ヶ月：噛む力が強くなる
              </h4>
              <p>
                咬筋が発達し、硬いものでも問題なく食べられるようになります。
                「食事時間が長くなった」「よく噛むようになった」という変化が見られます。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                6ヶ月：顎の幅が広がり始める
              </h4>
              <p>
                レントゲンで顎の骨の成長が確認できます。
                特に<span className="font-bold bg-yellow-100">横方向への成長</span>が促進され、
                歯が並ぶスペースが確保され始めます。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                1年：歯並びの改善が実感できる
              </h4>
              <p>
                軽度の叢生であれば、自然と歯が並び始めます。
                ただし、<span className="font-bold bg-yellow-100">重度の場合は装置との併用が必要</span>です。
              </p>
            </div>

            <p className="mt-8">
              <span className="font-bold">重要：</span>
              食育は<span className="font-bold bg-yellow-100">予防・成長期の顎育</span>に最も効果的です。
              既に重度の不正咬合がある場合は、装置治療と併用することで相乗効果が得られます。
            </p>
          </div>
        </div>
      </section>

      {/* 注意点 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              食育の注意点
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
          </div>

          <div className="space-y-6 text-[#5A4D41] leading-loose font-sans">
            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                3歳未満は誤嚥に注意
              </h4>
              <p>
                ナッツ類・スルメなどは、3歳未満の子どもには<span className="font-bold">誤嚥のリスク</span>があります。
                必ず保護者が見守りながら与えてください。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                食べ過ぎに注意
              </h4>
              <p>
                ナッツ類は高カロリーなので、<span className="font-bold bg-yellow-100">1日10粒程度</span>に留めましょう。
                食べ過ぎると肥満の原因になります。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                アレルギーチェック
              </h4>
              <p>
                ナッツ類はアレルギーを起こしやすい食品です。
                初めて与える場合は、<span className="font-bold bg-yellow-100">少量から始めて様子を見る</span>ようにしてください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 食事の時の姿勢 */}
      <section className="py-12 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              食事の時の姿勢
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              正しい姿勢で食べることで、噛む力が最大限に発揮されます
            </p>
          </div>

          <div className="space-y-6 text-[#5A4D41] leading-loose font-sans">
            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                足を床にしっかりつける
              </h4>
              <p>
                <span className="font-bold bg-yellow-100">足が床につかないと、噛む力が30%低下</span>します。
                子ども用の椅子や足台を使って、足裏全体が床につくようにしましょう。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                背筋を伸ばして座る
              </h4>
              <p>
                猫背で食べると、<span className="font-bold">奥歯に力が入りにくく</span>なります。
                背もたれに軽く背中をつけて、<span className="font-bold bg-yellow-100">背筋を伸ばした姿勢</span>で食事をしましょう。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                テーブルと椅子の高さを調整
              </h4>
              <p>
                テーブルが高すぎたり低すぎたりすると、噛みにくくなります。
                <span className="font-bold bg-yellow-100">肘が90度に曲がる高さ</span>が理想的です。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                両足を揃えて座る
              </h4>
              <p>
                足を組んだり、片方の足だけを床につけたりすると、<span className="font-bold">体が歪んで噛み合わせにも影響</span>します。
                両足を揃えて、しっかり床につけることが大切です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">よくある質問</h3>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                  <h4 className="font-bold text-[#5A4D41] text-lg">硬い食べ物はいつから与えても大丈夫ですか？</h4>
                </div>
              </div>
              <div className="text-[#8D8070] leading-relaxed">
                <p>
                  <strong className="text-[#C5A572]">A.</strong>
                  <span className="font-bold bg-yellow-100">3歳頃から徐々に始める</span>のがおすすめです。
                  スルメやナッツは誤嚥のリスクがあるため、必ず保護者が見守りながら与えてください。
                  最初は柔らかめのものから始めて、徐々に硬いものに移行していきましょう。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                  <h4 className="font-bold text-[#5A4D41] text-lg">すでに歯並びが悪い場合でも食育は効果がありますか？</h4>
                </div>
              </div>
              <div className="text-[#8D8070] leading-relaxed">
                <p>
                  <strong className="text-[#C5A572]">A.</strong>
                  はい、効果があります。<span className="font-bold bg-yellow-100">装置治療と食育を併用することで、より効果的な矯正治療</span>が可能になります。
                  また、治療後の後戻り防止にも役立ちます。ただし、重度の不正咬合の場合は、装置治療が必須です。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                  <h4 className="font-bold text-[#5A4D41] text-lg">毎日続けないと効果はありませんか？</h4>
                </div>
              </div>
              <div className="text-[#8D8070] leading-relaxed">
                <p>
                  <strong className="text-[#C5A572]">A.</strong>
                  <span className="font-bold bg-yellow-100">週4〜5日続けるだけでも十分効果があります</span>。
                  完璧を目指すと続かないので、できる範囲で習慣化することが大切です。
                  おやつの時間に硬いものを取り入れるなど、無理なく続けられる方法を見つけましょう。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                  <h4 className="font-bold text-[#5A4D41] text-lg">食育だけで歯並びは治りますか？</h4>
                </div>
              </div>
              <div className="text-[#8D8070] leading-relaxed">
                <p>
                  <strong className="text-[#C5A572]">A.</strong>
                  軽度の叢生（ガタガタ）や<span className="font-bold bg-yellow-100">予防段階であれば、食育だけで改善する可能性</span>があります。
                  しかし、受け口・出っ歯・重度の叢生などは、装置治療が必要です。
                  まずは歯科医院で診断を受けて、適切な治療方法を相談しましょう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 監修者情報 */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 pt-2 pb-8">
          <AuthorBio />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#FDFBF7] to-[#FFF9F0] rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-4">
                  食育で顎を育て、<br className="md:hidden" />歯並びを改善しましょう
                </h2>
                <p className="text-lg md:text-xl text-[#8D8070] leading-loose font-sans">
                  豊洲で小児矯正をお考えなら、豊洲駅徒歩2分の当院へ。装置治療と食育の併用で、より効果的な矯正治療を実現します
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#C5A572] hover:bg-[#B39562] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  無料相談を予約する
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
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
