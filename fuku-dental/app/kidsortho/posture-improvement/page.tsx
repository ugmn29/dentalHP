import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen, AlertCircle, CheckCircle2, Clock, Smartphone, TrendingUp, Users, Home, ArrowRight } from 'lucide-react'
import { KidsOrthoImage } from '@/components/KidsOrthoImage'
import { PageImage } from '@/components/PageImage'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AuthorBio } from '@/components/AuthorBio'

export const metadata: Metadata = {
  title: '正しい姿勢と咬合の関係｜猫背・ストレートネックが歯並びを悪化させる｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '猫背やストレートネックが歯並びを悪化させるメカニズムと、浮き指チェック法、家庭でできる姿勢改善トレーニングを詳しく解説します。',
  keywords: '姿勢,咬合,猫背,ストレートネック,浮き指,小児矯正,姿勢改善,歯並び',
  openGraph: {
    title: '正しい姿勢と咬合の関係｜猫背・ストレートネックが歯並びを悪化させる｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '猫背やストレートネックが歯並びを悪化させるメカニズムと、浮き指チェック法、家庭でできる姿勢改善トレーニングを詳しく解説します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kidsortho/posture-improvement',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
}

export default function PostureImprovementPage() {
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
              <span className="text-[#C5A572] font-bold">姿勢改善マニュアル</span>
            </div>
          </div>
        </div>

      {/* Hero Section */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
            正しい姿勢と咬合の関係<br />
            猫背・ストレートネックが歯並びを悪化させる
          </h1>
          <PageImage path="/kidsortho/posture-improvement" alt="正しい姿勢と咬合の関係" />
          <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>

          {/* Hero Image */}
          <div className="mt-8">
            <KidsOrthoImage
              name="/images/kidsortho/training/posture-improvement-hero"
              alt="姿勢改善マニュアル - 正しい姿勢で咬合と歯並びを改善"
              category="training"
            />
          </div>

          <p className="text-xl md:text-2xl mt-6 mb-6 text-[#5A4D41] font-medium">
            浮き指チェック法と家庭でできる姿勢改善トレーニング
          </p>
          <p className="text-[#8D8070] mt-3 font-sans">豊洲の矯正歯科が詳しく解説します</p>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
              結論
            </h2>
            <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
              <p>
                <span className="font-bold bg-yellow-100">猫背・ストレートネック・浮き指</span>があると、
                顎の位置がずれて<span className="font-bold bg-yellow-100">歯並びが悪化</span>します。
              </p>
              <p>
                特に<span className="font-bold text-[#C5A572]">「浮き指」</span>（足の指が地面につかない）は、
                全身の重心バランスを崩し、頭が前に出る「ストレートネック」を引き起こします。
              </p>
              <p>
                家庭でできる<span className="font-bold bg-yellow-100">足指トレーニング・壁立ちトレーニング・スマホ使用時の姿勢改善</span>で、
                3ヶ月で姿勢と咬合を改善できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* なぜ姿勢が歯並びに影響するのか */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              なぜ姿勢が歯並びに影響するのか？
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
          </div>

          <div className="space-y-4 text-[#5A4D41] leading-loose">
            <p>
              姿勢が悪いと、<span className="font-bold bg-yellow-100">頭の位置が前にずれて顎に負担</span>がかかり、
              咬合（噛み合わせ）が変化します。特に子どもの成長期には、悪い姿勢が骨格の発達に直接影響します。
            </p>

            <div className="space-y-6 mt-6">
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  浮き指
                </h4>
                <p>
                  足の指が地面につかず、重心が<span className="font-bold">かかと</span>に偏る。
                  全身のバランスを保つため、頭が前に出る。
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  ストレートネック
                </h4>
                <p>
                  頭が前に出ると、首の自然なカーブが失われる。
                  顎が前に出て、<span className="font-bold">下顎が後退</span>する。
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  咬合の悪化
                </h4>
                <p>
                  下顎が後退すると、上下の歯がうまく噛み合わなくなり、
                  <span className="font-bold">出っ歯・受け口</span>が悪化する。
                </p>
              </div>
            </div>

            <p className="mt-6">
              <span className="font-bold">成長期の子どもは特に注意：</span>
              6歳〜12歳の成長期は、<span className="font-bold bg-yellow-100">顎の骨が最も発達する時期</span>です。
              この時期に悪い姿勢が続くと、骨格レベルで顎の位置がずれ、
              大人になっても治らない歯並びの問題につながります。
            </p>
          </div>
        </div>
      </section>

      {/* 浮き指チェック法 */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              浮き指チェック法
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              お子さんの足の指が地面についているか、今すぐ確認しましょう
            </p>
          </div>

          <div className="space-y-6 text-[#5A4D41] leading-loose">
            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                立った状態で足元を見る
              </h4>
              <p>
                お子さんに<span className="font-bold bg-yellow-100">まっすぐ立ってもらい</span>、
                上から足元を見てください。靴下は脱いだ状態で確認します。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                指の下に紙を入れてみる
              </h4>
              <p>
                <span className="font-bold bg-yellow-100">足の指の下に薄い紙（名刺サイズ）</span>を入れてみます。
                紙がスルッと入る場合、その指は「浮き指」です。
              </p>
              <p className="text-sm mt-2">
                <span className="font-bold text-[#C5A572]">判定基準：</span>
                5本の指のうち3本以上で紙が入る場合、重度の浮き指。姿勢改善トレーニングが必要です。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                足跡をチェックする
              </h4>
              <p>
                濡れた足で紙の上を歩いてもらい、<span className="font-bold bg-yellow-100">足跡の形</span>を確認します。
                指の跡がほとんど残らない場合、浮き指の可能性が高いです。
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  正常な足（指がついている）
                </h4>
                <p>5本の指すべてが地面にしっかりついている</p>
                <p>足跡に指の跡がはっきり残る</p>
                <p>立った時に重心がつま先側にある</p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  浮き指（トレーニングが必要）
                </h4>
                <p>指の下に紙が入る（特に親指・小指）</p>
                <p>足跡に指の跡がほとんど残らない</p>
                <p>立った時に重心がかかと側に偏る</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 家庭でできる姿勢改善トレーニング */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              家庭でできる姿勢改善トレーニング
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              毎日5分、3ヶ月続けることで効果が出ます
            </p>
          </div>

          {/* トレーニング1: 足指じゃんけん */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-6 font-serif">
              トレーニング1：足指じゃんけん（浮き指改善）
            </h3>
            <p className="text-[#5A4D41] leading-loose mb-6">
              足の指を動かすトレーニングで、<span className="font-bold bg-yellow-100">指の筋肉を鍛えて地面にしっかりつける</span>ようにします。
            </p>

            <div className="space-y-6 text-[#5A4D41] leading-loose">
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  グー：5本の指を内側に丸める
                </h4>
                <p>
                  足の指を<span className="font-bold bg-yellow-100">ぎゅっと握る</span>ように丸めます。
                  3秒キープしてから力を抜きます。
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  チョキ：親指を上げ、他の指を下げる
                </h4>
                <p>
                  親指だけを上に反らせて、他の4本の指は下に曲げます。
                  <span className="font-bold bg-yellow-100">指を独立して動かす</span>練習になります。
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  パー：5本の指を大きく広げる
                </h4>
                <p>
                  指と指の間を<span className="font-bold bg-yellow-100">最大限に開く</span>ようにします。
                  3秒キープしてから力を抜きます。
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  実施方法
                </h4>
                <p><span className="font-bold">グー・チョキ・パーを各10回</span>ずつ繰り返す</p>
                <p><span className="font-bold">朝・夕の1日2回</span>実施</p>
                <p>椅子に座った状態で、<span className="font-bold">足を床につけて</span>行う</p>
              </div>
            </div>
          </div>

          {/* トレーニング2: 壁立ちトレーニング */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-6 font-serif">
              トレーニング2：壁立ちトレーニング（ストレートネック改善）
            </h3>
            <p className="text-[#5A4D41] leading-loose mb-6">
              壁を使って<span className="font-bold bg-yellow-100">正しい姿勢を体に覚えさせる</span>トレーニングです。
              毎日1分続けるだけで、頭の位置が正常に戻ります。
            </p>

            <div className="space-y-6 text-[#5A4D41] leading-loose">
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  壁に背中をつけて立つ
                </h4>
                <p>
                  壁に<span className="font-bold bg-yellow-100">後頭部・肩甲骨・お尻・かかと</span>の4点をつけて立ちます。
                  足は壁から少し離れた位置（5cm程度）に置きます。
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  顎を引いて頭を壁につける
                </h4>
                <p>
                  <span className="font-bold bg-yellow-100">顎を引いて、後頭部が壁につく</span>ようにします。
                  最初は難しいですが、無理せず「壁に近づける」意識で行います。
                </p>
                <p className="text-sm mt-2">
                  <span className="font-bold text-[#C5A572]">ポイント：</span>
                  首だけを動かすのではなく、頭全体を後ろに引くイメージで
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  1分間キープする
                </h4>
                <p>
                  4点（後頭部・肩甲骨・お尻・かかと）を壁につけた状態で、
                  <span className="font-bold bg-yellow-100">1分間そのまま立ち続けます</span>。
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  実施方法
                </h4>
                <p><span className="font-bold">朝・夕の1日2回</span>、各1分間実施</p>
                <p>慣れてきたら<span className="font-bold">2分、3分と時間を延ばす</span></p>
                <p>学校から帰った直後、寝る前に習慣化するのがおすすめ</p>
              </div>
            </div>
          </div>

          {/* トレーニング3: スマホ使用時の姿勢改善 */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-6 font-serif">
              トレーニング3：スマホ使用時の姿勢改善
            </h3>
            <p className="text-[#5A4D41] leading-loose mb-6">
              スマホを見る時の姿勢が、<span className="font-bold bg-yellow-100">ストレートネックの最大の原因</span>です。
              日常の使い方を変えるだけで、姿勢が劇的に改善します。
            </p>

            <div className="space-y-6 text-[#5A4D41] leading-loose">
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  NG：悪い姿勢
                </h4>
                <p><span className="font-bold">下を向いてスマホを見る</span>（頭が前に出る）</p>
                <p>寝転んでスマホを見る</p>
                <p>猫背のままスマホを操作する</p>
                <p className="text-sm mt-2 text-red-700">
                  <span className="font-bold">リスク：</span>
                  下を向いた状態では、首に<span className="font-bold">約20kg（体重の約3分の1）</span>の負荷がかかります
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  OK：正しい姿勢
                </h4>
                <p><span className="font-bold">スマホを目線の高さ</span>まで上げて見る</p>
                <p>椅子に座り、背筋を伸ばした状態で使う</p>
                <p>30分に1回は休憩して首を動かす</p>
                <p className="text-sm mt-2">
                  <span className="font-bold text-[#C5A572]">効果：</span>
                  目線の高さで見ることで、首への負荷が<span className="font-bold">約5分の1（4kg程度）</span>に減ります
                </p>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  親が声かけできるポイント
                </h4>
                <p>「スマホを上げて見てね」と定期的に声をかける</p>
                <p>リビングでスマホを使う時間を決める（寝室持ち込みNG）</p>
                <p>親自身も正しい姿勢でスマホを使う（お手本になる）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 効果が出るまでの期間 */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">

          {/* Effect Image */}
          <div className="mb-12">
            <KidsOrthoImage
              name="/images/kidsortho/training/posture-improvement-effect"
              alt="姿勢改善の効果 - 咬合の改善と全身の健康への影響"
              category="training"
            />
          </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              効果が出るまでの期間
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
          </div>

          <div className="space-y-6 text-[#5A4D41] leading-loose">
            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                1ヶ月：姿勢を意識できるようになる
              </h4>
              <p>
                「頭が前に出ている」「猫背になっている」ことを自分で気づけるようになります。
                まだ無意識では戻ってしまいますが、<span className="font-bold bg-yellow-100">意識すれば正しい姿勢がとれる</span>段階です。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                3ヶ月：浮き指が改善、顎の位置が安定
              </h4>
              <p>
                足指じゃんけんで指の筋肉がついて、<span className="font-bold bg-yellow-100">浮き指が改善</span>します。
                全身のバランスが整い、頭が前に出なくなります。顎の位置が安定して、
                <span className="font-bold text-[#C5A572]">咬合（噛み合わせ）が少し改善</span>します。
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                6ヶ月：正しい姿勢が習慣化、歯並びへの影響が軽減
              </h4>
              <p>
                意識しなくても正しい姿勢を保てるようになります。
                <span className="font-bold bg-yellow-100">ストレートネックが改善し、顎の骨格が正常な発達</span>をします。
                矯正治療と併用すれば、治療期間の短縮にもつながります。
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                継続のコツ
              </h4>
              <p><span className="font-bold">毎日同じ時間</span>に行う（朝起きた直後、寝る前など）</p>
              <p>カレンダーにシールを貼って<span className="font-bold">達成感を可視化</span>する</p>
              <p>親子で一緒にやる（親のストレートネック改善にも効果的）</p>
              <p>1ヶ月ごとに<span className="font-bold">浮き指チェック</span>をして改善を実感する</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-2 bg-[#FDFBF7]">
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
                  <h4 className="font-bold text-[#5A4D41] text-lg">姿勢改善だけで歯並びは治りますか？</h4>
                </div>
              </div>
              <div className="text-[#8D8070] leading-relaxed">
                <p>
                  <strong className="text-[#C5A572]">A.</strong>
                  姿勢改善だけでは、すでに悪化した歯並びを完全に治すことはできません。
                  しかし、<span className="font-bold bg-yellow-100">これ以上の悪化を防ぎ、矯正治療の効果を高める</span>ことができます。
                  特に成長期の子どもは、姿勢を正すことで顎の正常な発達を促せます。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                  <h4 className="font-bold text-[#5A4D41] text-lg">何歳から姿勢改善トレーニングを始めるべきですか？</h4>
                </div>
              </div>
              <div className="text-[#8D8070] leading-relaxed">
                <p>
                  <strong className="text-[#C5A572]">A.</strong>
                  <span className="font-bold bg-yellow-100">5歳から始めるのが理想的</span>です。
                  足指じゃんけんは5歳から、壁立ちトレーニングは6歳から始められます。
                  ただし、<span className="font-bold text-[#C5A572]">何歳からでも遅すぎることはありません</span>。
                  大人のストレートネック改善にも効果があります。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                  <h4 className="font-bold text-[#5A4D41] text-lg">矯正装置をつけながらでも姿勢改善トレーニングはできますか？</h4>
                </div>
              </div>
              <div className="text-[#8D8070] leading-relaxed">
                <p>
                  <strong className="text-[#C5A572]">A.</strong>
                  はい、<span className="font-bold bg-yellow-100">矯正装置と併用することで相乗効果</span>があります。
                  特にプレオルソやムーシールドなどの機能的矯正装置は、
                  正しい姿勢があってこそ効果を最大化できます。
                  ただし、装置が痛む場合は無理せず、担当医に相談してください。
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
                姿勢改善と矯正治療を<br className="md:hidden" />併用しませんか？
              </h2>
              <p className="text-lg md:text-xl text-[#8D8070] leading-loose font-sans">
                豊洲で小児矯正をお考えなら、豊洲駅徒歩2分の当院へ。こども矯正の治療計画に<br className="md:hidden" />
                <span className="font-bold">姿勢改善指導</span>を組み込んでいます。<br />
                浮き指チェック、家庭でのトレーニング方法を<br className="md:hidden" />
                詳しくお伝えします。
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
