import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen, AlertCircle, CheckCircle2, Clock, Smartphone, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: '正しい姿勢と咬合の関係｜猫背・ストレートネックが歯並びを悪化させる｜F歯科・矯正歯科',
  description: '猫背やストレートネックが歯並びを悪化させるメカニズムと、浮き指チェック法、家庭でできる姿勢改善トレーニングを詳しく解説します。',
  keywords: '姿勢,咬合,猫背,ストレートネック,浮き指,小児矯正,姿勢改善,歯並び',
}

export default function PostureImprovementPage() {
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
            <span className="text-[#E67A2E]">姿勢改善マニュアル</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-2 bg-gradient-to-b from-[#FDFBF7] to-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
            正しい姿勢と咬合の関係<br />
            猫背・ストレートネックが歯並びを悪化させる
          </h1>
          <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
            浮き指チェック法と家庭でできる姿勢改善トレーニング
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
                <span className="font-bold bg-yellow-100">猫背・ストレートネック・浮き指</span>があると、
                顎の位置がずれて<span className="font-bold bg-yellow-100">歯並びが悪化</span>します。
              </p>
              <p className="mb-4">
                特に<span className="font-bold text-[#E67A2E]">「浮き指」</span>（足の指が地面につかない）は、
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
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20 mb-8">
            <p className="text-gray-700 leading-loose mb-6">
              姿勢が悪いと、<span className="font-bold bg-yellow-100">頭の位置が前にずれて顎に負担</span>がかかり、
              咬合（噛み合わせ）が変化します。特に子どもの成長期には、悪い姿勢が骨格の発達に直接影響します。
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#FDFBF7] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  1
                </div>
                <h4 className="font-bold text-red-700 mb-2 text-lg">浮き指</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  足の指が地面につかず、重心が<span className="font-bold">かかと</span>に偏る。
                  全身のバランスを保つため、頭が前に出る。
                </p>
              </div>

              <div className="bg-[#FDFBF7] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  2
                </div>
                <h4 className="font-bold text-red-700 mb-2 text-lg">ストレートネック</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  頭が前に出ると、首の自然なカーブが失われる。
                  顎が前に出て、<span className="font-bold">下顎が後退</span>する。
                </p>
              </div>

              <div className="bg-[#FDFBF7] p-6 rounded-2xl">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  3
                </div>
                <h4 className="font-bold text-red-700 mb-2 text-lg">咬合の悪化</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  下顎が後退すると、上下の歯がうまく噛み合わなくなり、
                  <span className="font-bold">出っ歯・受け口</span>が悪化する。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-bold text-red-700 mb-2 text-lg">成長期の子どもは特に注意</h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  6歳〜12歳の成長期は、<span className="font-bold bg-yellow-100">顎の骨が最も発達する時期</span>です。
                  この時期に悪い姿勢が続くと、骨格レベルで顎の位置がずれ、
                  <span className="font-bold text-red-700">大人になっても治らない歯並びの問題</span>につながります。
                </p>
              </div>
            </div>
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
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              お子さんの足の指が地面についているか、今すぐ確認しましょう
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">立った状態で足元を見る</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    お子さんに<span className="font-bold bg-yellow-100">まっすぐ立ってもらい</span>、
                    上から足元を見てください。靴下は脱いだ状態で確認します。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">指の下に紙を入れてみる</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    <span className="font-bold bg-yellow-100">足の指の下に薄い紙（名刺サイズ）</span>を入れてみます。
                    紙がスルッと入る場合、その指は「浮き指」です。
                  </p>
                  <div className="bg-[#FDFBF7] p-3 rounded-lg">
                    <p className="text-xs text-gray-700">
                      <span className="font-bold text-[#E67A2E]">判定基準：</span>
                      5本の指のうち3本以上で紙が入る場合、重度の浮き指。姿勢改善トレーニングが必要です。
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">足跡をチェックする</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    濡れた足で紙の上を歩いてもらい、<span className="font-bold bg-yellow-100">足跡の形</span>を確認します。
                    指の跡がほとんど残らない場合、浮き指の可能性が高いです。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
              <h4 className="font-bold text-green-700 mb-3 text-lg flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                正常な足（指がついている）
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">●</span>
                  <span>5本の指すべてが地面にしっかりついている</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">●</span>
                  <span>足跡に指の跡がはっきり残る</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">●</span>
                  <span>立った時に重心がつま先側にある</span>
                </li>
              </ul>
            </div>

            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
              <h4 className="font-bold text-red-700 mb-3 text-lg flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                浮き指（トレーニングが必要）
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">●</span>
                  <span>指の下に紙が入る（特に親指・小指）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">●</span>
                  <span>足跡に指の跡がほとんど残らない</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">●</span>
                  <span>立った時に重心がかかと側に偏る</span>
                </li>
              </ul>
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
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              毎日5分、3ヶ月続けることで効果が出ます
            </p>
          </div>

          {/* トレーニング1: 足指じゃんけん */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20 mb-8">
            <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 font-serif">
              トレーニング1：足指じゃんけん（浮き指改善）
            </h3>
            <p className="text-gray-700 mb-6 leading-loose">
              足の指を動かすトレーニングで、<span className="font-bold bg-yellow-100">指の筋肉を鍛えて地面にしっかりつける</span>ようにします。
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  グー
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">5本の指を内側に丸める</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    足の指を<span className="font-bold bg-yellow-100">ぎゅっと握る</span>ように丸めます。
                    3秒キープしてから力を抜きます。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  チョキ
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">親指を上げ、他の指を下げる</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    親指だけを上に反らせて、他の4本の指は下に曲げます。
                    <span className="font-bold bg-yellow-100">指を独立して動かす</span>練習になります。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  パー
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">5本の指を大きく広げる</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    指と指の間を<span className="font-bold bg-yellow-100">最大限に開く</span>ようにします。
                    3秒キープしてから力を抜きます。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-6 rounded-xl mt-6">
              <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#E67A2E]" />
                実施方法
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span><span className="font-bold">グー・チョキ・パーを各10回</span>ずつ繰り返す</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span><span className="font-bold">朝・夕の1日2回</span>実施</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>椅子に座った状態で、<span className="font-bold">足を床につけて</span>行う</span>
                </li>
              </ul>
            </div>
          </div>

          {/* トレーニング2: 壁立ちトレーニング */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20 mb-8">
            <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 font-serif">
              トレーニング2：壁立ちトレーニング（ストレートネック改善）
            </h3>
            <p className="text-gray-700 mb-6 leading-loose">
              壁を使って<span className="font-bold bg-yellow-100">正しい姿勢を体に覚えさせる</span>トレーニングです。
              毎日1分続けるだけで、頭の位置が正常に戻ります。
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">壁に背中をつけて立つ</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    壁に<span className="font-bold bg-yellow-100">後頭部・肩甲骨・お尻・かかと</span>の4点をつけて立ちます。
                    足は壁から少し離れた位置（5cm程度）に置きます。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">顎を引いて頭を壁につける</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    <span className="font-bold bg-yellow-100">顎を引いて、後頭部が壁につく</span>ようにします。
                    最初は難しいですが、無理せず「壁に近づける」意識で行います。
                  </p>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-xs text-gray-700">
                      <span className="font-bold text-[#E67A2E]">ポイント：</span>
                      首だけを動かすのではなく、頭全体を後ろに引くイメージで
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-[#E67A2E] mb-2 text-lg">1分間キープする</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    4点（後頭部・肩甲骨・お尻・かかと）を壁につけた状態で、
                    <span className="font-bold bg-yellow-100">1分間そのまま立ち続けます</span>。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-6 rounded-xl mt-6">
              <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#E67A2E]" />
                実施方法
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span><span className="font-bold">朝・夕の1日2回</span>、各1分間実施</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>慣れてきたら<span className="font-bold">2分、3分と時間を延ばす</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>学校から帰った直後、寝る前に習慣化するのがおすすめ</span>
                </li>
              </ul>
            </div>
          </div>

          {/* トレーニング3: スマホ使用時の姿勢改善 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/20">
            <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 font-serif">
              トレーニング3：スマホ使用時の姿勢改善
            </h3>
            <p className="text-gray-700 mb-6 leading-loose">
              スマホを見る時の姿勢が、<span className="font-bold bg-yellow-100">ストレートネックの最大の原因</span>です。
              日常の使い方を変えるだけで、姿勢が劇的に改善します。
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                <h4 className="font-bold text-red-700 mb-3 text-lg flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  NG：悪い姿勢
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">●</span>
                    <span className="font-bold">下を向いてスマホを見る</span>（頭が前に出る）
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">●</span>
                    <span>寝転んでスマホを見る</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">●</span>
                    <span>猫背のままスマホを操作する</span>
                  </li>
                </ul>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="text-xs text-gray-700">
                    <span className="font-bold text-red-700">リスク：</span>
                    下を向いた状態では、首に<span className="font-bold">約20kg（体重の約3分の1）</span>の負荷がかかります
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
                <h4 className="font-bold text-green-700 mb-3 text-lg flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" />
                  OK：正しい姿勢
                </h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">●</span>
                    <span><span className="font-bold">スマホを目線の高さ</span>まで上げて見る</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">●</span>
                    <span>椅子に座り、背筋を伸ばした状態で使う</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">●</span>
                    <span>30分に1回は休憩して首を動かす</span>
                  </li>
                </ul>
                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="text-xs text-gray-700">
                    <span className="font-bold text-green-700">効果：</span>
                    目線の高さで見ることで、首への負荷が<span className="font-bold">約5分の1（4kg程度）</span>に減ります
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-6 rounded-xl mt-6">
              <h4 className="font-bold text-[#5A4D41] mb-3 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#E67A2E]" />
                親が声かけできるポイント
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>「スマホを上げて見てね」と定期的に声をかける</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>リビングでスマホを使う時間を決める（寝室持ち込みNG）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E67A2E] mt-1">●</span>
                  <span>親自身も正しい姿勢でスマホを使う（お手本になる）</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 効果が出るまでの期間 */}
      <section className="py-2 bg-white">
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
              <div className="flex-1 bg-[#FDFBF7] p-6 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">姿勢を意識できるようになる</h4>
                <p className="text-sm text-gray-700">
                  「頭が前に出ている」「猫背になっている」ことを自分で気づけるようになります。
                  まだ無意識では戻ってしまいますが、<span className="font-bold bg-yellow-100">意識すれば正しい姿勢がとれる</span>段階です。
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
              <div className="flex-1 bg-[#FDFBF7] p-6 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">浮き指が改善、顎の位置が安定</h4>
                <p className="text-sm text-gray-700">
                  足指じゃんけんで指の筋肉がついて、<span className="font-bold bg-yellow-100">浮き指が改善</span>します。
                  全身のバランスが整い、頭が前に出なくなります。顎の位置が安定して、
                  <span className="font-bold text-[#E67A2E]">咬合（噛み合わせ）が少し改善</span>します。
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
              <div className="flex-1 bg-[#FDFBF7] p-6 rounded-2xl">
                <h4 className="font-bold text-gray-800 mb-2 text-lg">正しい姿勢が習慣化、歯並びへの影響が軽減</h4>
                <p className="text-sm text-gray-700">
                  意識しなくても正しい姿勢を保てるようになります。
                  <span className="font-bold bg-yellow-100">ストレートネックが改善し、顎の骨格が正常な発達</span>をします。
                  矯正治療と併用すれば、治療期間の短縮にもつながります。
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
                    <span><span className="font-bold">毎日同じ時間</span>に行う（朝起きた直後、寝る前など）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67A2E] mt-1">●</span>
                    <span>カレンダーにシールを貼って<span className="font-bold">達成感を可視化</span>する</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67A2E] mt-1">●</span>
                    <span>親子で一緒にやる（親のストレートネック改善にも効果的）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E67A2E] mt-1">●</span>
                    <span>1ヶ月ごとに<span className="font-bold">浮き指チェック</span>をして改善を実感する</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              よくある質問
            </h2>
            <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#E67A2E]/10">
              <h3 className="text-xl font-bold text-[#E67A2E] mb-4 flex items-start gap-3">
                <span className="flex-shrink-0">Q1.</span>
                <span>姿勢改善だけで歯並びは治りますか？</span>
              </h3>
              <div className="pl-9">
                <p className="text-gray-700 leading-loose">
                  <span className="font-bold text-[#5A4D41]">A.</span>
                  姿勢改善だけでは、すでに悪化した歯並びを完全に治すことはできません。
                  しかし、<span className="font-bold bg-yellow-100">これ以上の悪化を防ぎ、矯正治療の効果を高める</span>ことができます。
                  特に成長期の子どもは、姿勢を正すことで顎の正常な発達を促せます。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#E67A2E]/10">
              <h3 className="text-xl font-bold text-[#E67A2E] mb-4 flex items-start gap-3">
                <span className="flex-shrink-0">Q2.</span>
                <span>何歳から姿勢改善トレーニングを始めるべきですか？</span>
              </h3>
              <div className="pl-9">
                <p className="text-gray-700 leading-loose">
                  <span className="font-bold text-[#5A4D41]">A.</span>
                  <span className="font-bold bg-yellow-100">5歳から始めるのが理想的</span>です。
                  足指じゃんけんは5歳から、壁立ちトレーニングは6歳から始められます。
                  ただし、<span className="font-bold text-[#E67A2E]">何歳からでも遅すぎることはありません</span>。
                  大人のストレートネック改善にも効果があります。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#E67A2E]/10">
              <h3 className="text-xl font-bold text-[#E67A2E] mb-4 flex items-start gap-3">
                <span className="flex-shrink-0">Q3.</span>
                <span>矯正装置をつけながらでも姿勢改善トレーニングはできますか？</span>
              </h3>
              <div className="pl-9">
                <p className="text-gray-700 leading-loose">
                  <span className="font-bold text-[#5A4D41]">A.</span>
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

      {/* CTA Section */}
      <section className="py-2 bg-gradient-to-br from-[#E67A2E] to-[#D66A28]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
              姿勢改善と矯正治療を<br className="md:hidden" />併用しませんか？
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              F歯科・矯正歯科では、こども矯正の治療計画に<br className="md:hidden" />
              <span className="font-bold">姿勢改善指導</span>を組み込んでいます。<br />
              浮き指チェック、家庭でのトレーニング方法を<br className="md:hidden" />
              詳しくお伝えします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#E67A2E] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <Users className="w-6 h-6" />
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
