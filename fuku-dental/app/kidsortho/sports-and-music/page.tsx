import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, BookOpen, AlertCircle, CheckCircle2, Trophy, Music, HeartPulse, Wind, Home, ArrowRight } from 'lucide-react'
import { KidsOrthoImage } from '@/components/KidsOrthoImage'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { AuthorBio } from '@/components/AuthorBio'

export const metadata: Metadata = {
  title: 'スポーツ・楽器への影響｜歯並びと運動・演奏パフォーマンスの関係｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '歯並びが悪いと、運動能力・呼吸効率・楽器の演奏に影響します。矯正治療でパフォーマンスが向上する理由を詳しく解説します。',
  keywords: 'スポーツ,楽器,運動能力,パフォーマンス,歯並び,小児矯正,咬合,呼吸',
}

export default function SportsAndMusicPage() {
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
              <span className="text-[#C5A572] font-bold">スポーツ・楽器への影響</span>
            </div>
          </div>
        </div>

      {/* Hero Section */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
            スポーツ・楽器への影響<br />
            歯並びと運動・演奏パフォーマンスの関係
          </h1>
          <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>

          <KidsOrthoImage
            name="sports-and-music-hero"
            alt="スポーツや楽器演奏と歯並びの関係"
            category="info"
          />

          <p className="text-xl md:text-2xl mt-6 mb-6 text-[#5A4D41] font-medium">
            矯正治療でパフォーマンスが向上する理由
          </p>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif text-center">
              結論
            </h2>
            <div className="space-y-4 text-[#5A4D41] leading-loose">
              <p>
                <span className="font-bold bg-yellow-100">歯並びが悪いと、運動能力・呼吸効率・楽器の演奏に悪影響</span>があります。
              </p>
              <p>
                特に<span className="font-bold text-[#C5A572]">「食いしばり」「呼吸」「口腔容積」</span>の3つが重要で、
                正しい咬合（噛み合わせ）があることで、<span className="font-bold bg-yellow-100">瞬発力・持久力・集中力</span>が向上します。
              </p>
              <p>
                矯正治療で歯並びを整えることで、<span className="font-bold bg-yellow-100">スポーツや楽器のパフォーマンスが改善</span>します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* スポーツへの影響 */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              スポーツへの影響
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              歯並びが悪いと、運動パフォーマンスが低下します
            </p>
          </div>

          <div className="mb-8">
            <KidsOrthoImage
              name="sports-and-music-sports"
              alt="歯並びがスポーツに与える影響"
              category="info"
            />
          </div>

          <div className="space-y-12 mb-8">
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  1. 食いしばりができず、瞬発力が出ない
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    <span className="font-bold bg-yellow-100">正しく食いしばれないと、全身に力が入らず</span>、
                    瞬発力が必要な動作（ジャンプ・ダッシュ・投げる）で最大限の力を発揮できません。
                  </p>
                  <p>
                    <span className="font-bold text-[#C5A572]">影響が大きいスポーツ：</span>
                    陸上（短距離・跳躍）、サッカー、バスケットボール、野球、テニスなど
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  2. 口呼吸で持久力が低下する
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    歯並びが悪いと口呼吸になりやすく、<span className="font-bold bg-yellow-100">酸素摂取効率が低下</span>します。
                    鼻呼吸に比べて<span className="font-bold text-red-700">酸素摂取量が20〜30%減少</span>し、
                    持久力が必要な競技でスタミナ切れを起こしやすくなります。
                  </p>
                  <p>
                    <span className="font-bold text-[#C5A572]">影響が大きいスポーツ：</span>
                    陸上（長距離）、水泳、サッカー、バスケットボール、自転車など
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  3. 顎の位置がずれて、バランス感覚が悪化
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    咬合（噛み合わせ）が悪いと、<span className="font-bold bg-yellow-100">頭の位置がずれて全身のバランスが崩れます</span>。
                    体幹が不安定になり、転倒しやすくなったり、正確な動作ができなくなります。
                  </p>
                  <p>
                    <span className="font-bold text-[#C5A572]">影響が大きいスポーツ：</span>
                    体操、フィギュアスケート、ダンス、サーフィン、スケートボードなど
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  4. 集中力が低下し、反応速度が遅くなる
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    口呼吸や咬合不全があると、<span className="font-bold bg-yellow-100">脳への酸素供給が不足</span>し、
                    集中力・判断力・反応速度が低下します。特に試合の終盤で疲労が溜まると、ミスが増えます。
                  </p>
                  <p>
                    <span className="font-bold text-[#C5A572]">影響が大きいスポーツ：</span>
                    卓球、バドミントン、テニス、野球（バッティング）、格闘技など
                  </p>
                </div>
              </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
              <h4 className="font-bold text-red-700 mb-3 text-lg flex items-center gap-2">
                <AlertCircle className="w-6 h-6" />
                歯並びが悪い選手
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">●</span>
                  <span>食いしばりができず、<span className="font-bold">瞬発力が20%低下</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">●</span>
                  <span>口呼吸で<span className="font-bold">酸素摂取量が30%減少</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">●</span>
                  <span>バランス感覚が悪く、体幹が不安定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 mt-1">●</span>
                  <span>集中力が続かず、試合終盤でミス増加</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-200">
              <h4 className="font-bold text-green-700 mb-3 text-lg flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                歯並びが良い選手
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">●</span>
                  <span>しっかり食いしばれて、<span className="font-bold">最大限の瞬発力</span>を発揮</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">●</span>
                  <span>鼻呼吸で<span className="font-bold">効率的に酸素を摂取</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">●</span>
                  <span>正しい咬合で、全身のバランスが安定</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">●</span>
                  <span>集中力が持続し、試合終盤でもパフォーマンス維持</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 楽器への影響 */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              楽器への影響
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              歯並びが悪いと、特に管楽器の演奏に影響します
            </p>
          </div>

          <div className="space-y-12 mb-8">
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  1. 管楽器：息が漏れて音が出ない
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    <span className="font-bold bg-yellow-100">出っ歯・受け口・すきっ歯</span>があると、
                    マウスピースと唇の間に隙間ができて、<span className="font-bold text-red-700">息が漏れてしまいます</span>。
                    特にトランペット・ホルン・チューバなど、唇を密着させる楽器で影響が大きいです。
                  </p>
                  <p>
                    <span className="font-bold text-[#C5A572]">影響が大きい楽器：</span>
                    金管楽器（トランペット、ホルン、トロンボーン、チューバ）、
                    木管楽器（フルート、クラリネット、オーボエ、サックス）
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  2. 口腔容積が狭く、息のコントロールが難しい
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    歯並びが悪いと、<span className="font-bold bg-yellow-100">口の中のスペース（口腔容積）が狭く</span>なり、
                    舌が自由に動かせません。息の量・速さをコントロールできず、
                    <span className="font-bold text-red-700">音程が不安定</span>になります。
                  </p>
                  <p>
                    <span className="font-bold text-[#C5A572]">特に影響するのは：</span>
                    高音・低音の切り替え、ビブラート、ダイナミクス（強弱）のコントロール
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  3. 舌が正しい位置に置けず、タンギングができない
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    歯並びが悪いと、<span className="font-bold bg-yellow-100">舌を上顎につける「正しい舌の位置」</span>が取れません。
                    管楽器のタンギング（舌を使って音を区切る技術）がうまくできず、
                    <span className="font-bold text-red-700">音の立ち上がりがぼやける</span>ようになります。
                  </p>
                  <p>
                    <span className="font-bold text-[#C5A572]">影響：</span>
                    スタッカート（短く切る音）、トリル（連続する音の切り替え）が苦手になる
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  4. 長時間の練習で顎が疲れやすい
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    咬合（噛み合わせ）が悪いと、<span className="font-bold bg-yellow-100">顎の筋肉に無理な負担</span>がかかり、
                    長時間の練習で顎が痛くなります。特に吹奏楽部で毎日練習する場合、
                    <span className="font-bold text-red-700">顎関節症のリスク</span>が高まります。
                  </p>
                </div>
              </div>
          </div>

          <div className="bg-gradient-to-br from-[#E67A2E]/10 to-[#E67A2E]/5 rounded-3xl p-8 border-2 border-[#C5A572]/20">
            <div>
              <h4 className="font-bold text-[#5A4D41] mb-3 text-xl">プロの演奏家も矯正治療をしている</h4>
              <p className="text-gray-700 leading-loose mb-3">
                プロのオーケストラ奏者の中には、<span className="font-bold bg-yellow-100">演奏パフォーマンス向上のために矯正治療</span>をする人がいます。
                特に金管楽器（トランペット・ホルン）は、歯並びが演奏に直結するため、
                <span className="font-bold text-[#C5A572]">子どもの頃から矯正治療を受けることが推奨</span>されています。
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-[#C5A572]">注意：</span>
                  矯正治療中は一時的に演奏が難しくなる場合があります。
                  治療のタイミング（部活の大会前は避けるなど）を担当医と相談しましょう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 矯正治療でパフォーマンスが向上するメカニズム */}
      <section className="py-2 bg-[#FDFBF7]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              矯正治療でパフォーマンスが向上するメカニズム
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
          </div>

          <div className="space-y-12">
            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                1. 正しく食いしばれるようになる
              </h4>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  矯正治療で咬合（噛み合わせ）が整うと、<span className="font-bold bg-yellow-100">上下の歯がしっかり噛み合い、食いしばりができる</span>ようになります。
                  食いしばることで全身に力が入り、<span className="font-bold text-[#C5A572]">瞬発力が20〜30%向上</span>します。
                </p>
                <p>
                  <span className="font-bold text-[#C5A572]">効果：</span>
                  ジャンプ力・投球速度・走力・バッティングパワーの向上
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                2. 鼻呼吸ができるようになる
              </h4>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  歯並びが整うと、<span className="font-bold bg-yellow-100">舌が正しい位置（上顎）に置けるようになり、口が閉じやすくなります</span>。
                  口呼吸から鼻呼吸に切り替わることで、<span className="font-bold text-[#C5A572]">酸素摂取効率が30%向上</span>します。
                </p>
                <p>
                  <span className="font-bold text-[#C5A572]">効果：</span>
                  持久力の向上、疲労回復の速さ、集中力の持続
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                3. 全身のバランスが改善される
              </h4>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  咬合が正しくなると、<span className="font-bold bg-yellow-100">頭の位置が正常に戻り、全身のバランスが整います</span>。
                  体幹が安定し、<span className="font-bold text-[#C5A572]">バランス感覚が向上</span>します。
                </p>
                <p>
                  <span className="font-bold text-[#C5A572]">効果：</span>
                  転倒しにくくなる、正確な動作ができる、体幹トレーニングの効果が高まる
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                4. 口腔容積が広がり、息のコントロールが向上
              </h4>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  矯正治療で顎が広がると、<span className="font-bold bg-yellow-100">口の中のスペースが広くなり、舌が自由に動かせる</span>ようになります。
                  管楽器の演奏で、<span className="font-bold text-[#C5A572]">息の量・速さを正確にコントロール</span>できるようになります。
                </p>
                <p>
                  <span className="font-bold text-[#C5A572]">効果：</span>
                  音程の安定、高音・低音の切り替えがスムーズ、タンギングの精度向上
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 矯正治療のタイミング */}
      <section className="py-2 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif inline-block">
              矯正治療のタイミング
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            <p className="text-gray-600 mt-4">
              スポーツや楽器を続けながら矯正治療を受けるには
            </p>
          </div>

          <div className="mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-[#5A4D41] mb-2 text-lg">大会・発表会の3ヶ月前までに開始する</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    矯正治療開始直後は、装置に慣れるまで<span className="font-bold bg-yellow-100">1〜2ヶ月かかります</span>。
                    大会や発表会の直前は避け、<span className="font-bold text-[#C5A572]">少なくとも3ヶ月前</span>には治療を開始しましょう。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-[#5A4D41] mb-2 text-lg">取り外し式装置（プレオルソ・ムーシールド）を選ぶ</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold bg-yellow-100">取り外し式の装置</span>なら、
                    スポーツや楽器の練習中は外せるため、<span className="font-bold text-[#C5A572]">パフォーマンスへの影響が少ない</span>です。
                    ただし、1日の装着時間（8〜10時間）を守る必要があります。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-[#5A4D41] mb-2 text-lg">固定式装置の場合、マウスガードを併用する</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    ワイヤー矯正（固定式）の場合、スポーツ中に<span className="font-bold bg-yellow-100">マウスガードを装着</span>することで、
                    口の中の怪我を防げます。特にコンタクトスポーツ（ラグビー・格闘技）では必須です。
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h4 className="font-bold text-[#5A4D41] mb-2 text-lg">管楽器奏者は、段階的に慣らす</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    管楽器の場合、矯正装置に慣れるまで<span className="font-bold bg-yellow-100">演奏が難しくなる期間</span>があります。
                    最初は<span className="font-bold text-[#C5A572]">短時間の練習から始めて、徐々に装置に慣らす</span>ことが重要です。
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h4 className="font-bold text-red-700 mb-2 text-lg">注意：矯正治療を避けるべき時期</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">●</span>
                    <span>大会・発表会の1ヶ月前〜当日</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">●</span>
                    <span>中学3年生の受験直前（勉強に集中したい時期）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600 mt-1">●</span>
                    <span>部活の引退試合直前（最後の大会に全力を出したい時期）</span>
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
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
              よくある質問
            </h3>
            <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                  <h4 className="font-bold text-[#5A4D41] text-lg">矯正治療中でもスポーツはできますか？</h4>
                </div>
              </div>
              <div className="text-[#8D8070] leading-relaxed">
                <p>
                  <strong className="text-[#C5A572]">A.</strong> はい、<span className="font-bold bg-yellow-100">矯正治療中でもスポーツは可能</span>です。
                  取り外し式の装置（プレオルソ・ムーシールド）なら、練習中は外せます。
                  固定式のワイヤー矯正の場合、<span className="font-bold text-[#C5A572]">マウスガードを装着</span>することで、
                  口の中の怪我を防げます。ただし、装置に慣れるまでの1〜2ヶ月は、パフォーマンスが一時的に低下する可能性があります。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                  <h4 className="font-bold text-[#5A4D41] text-lg">矯正治療で本当にパフォーマンスは向上しますか？</h4>
                </div>
              </div>
              <div className="text-[#8D8070] leading-relaxed">
                <p>
                  <strong className="text-[#C5A572]">A.</strong> はい、<span className="font-bold bg-yellow-100">矯正治療でパフォーマンスが向上する</span>というエビデンスがあります。
                  特に<span className="font-bold text-[#C5A572]">正しく食いしばれるようになることで、瞬発力が20〜30%向上</span>します。
                  また、鼻呼吸ができるようになることで、酸素摂取効率が30%向上し、持久力も改善します。
                  ただし、効果が出るまでには治療完了後3〜6ヶ月かかります。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                  <h4 className="font-bold text-[#5A4D41] text-lg">管楽器を吹きながら矯正治療はできますか？</h4>
                </div>
              </div>
              <div className="text-[#8D8070] leading-relaxed">
                <p className="mb-3">
                  <strong className="text-[#C5A572]">A.</strong> はい、可能です。ただし、<span className="font-bold bg-yellow-100">矯正装置に慣れるまでの1〜3ヶ月は演奏が難しくなります</span>。
                  特にトランペット・ホルンなど、唇を密着させる楽器は影響が大きいです。
                </p>
                <p>
                  対策として、<span className="font-bold text-[#C5A572]">取り外し式の装置（プレオルソ）を選ぶ</span>か、
                  <span className="font-bold text-[#C5A572]">発表会・コンクールの3ヶ月以上前に治療を開始</span>することをおすすめします。
                  治療のタイミングは、担当医と相談しましょう。
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
                  スポーツ・楽器と両立できる<br className="md:hidden" />矯正治療を
                </h2>
                <p className="text-lg md:text-xl text-[#8D8070] leading-loose font-sans">
                  F歯科・矯正歯科 豊洲プライムスクエア院では、お子さんの習い事に合わせた<br className="md:hidden" />
                  <span className="font-bold">治療計画</span>を提案しています。<br />
                  取り外し式装置や、治療開始のタイミングなど、<br className="md:hidden" />
                  最適なプランをご提案します。
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
