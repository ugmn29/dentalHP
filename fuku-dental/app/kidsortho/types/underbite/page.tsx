import { Metadata } from 'next';
import { AlertCircle, CheckCircle, ArrowRight, Users, Clock, TrendingUp, Shield, Calendar, Phone, ChevronRight, Home } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '下顎前突（受け口）の治療 | こども矯正 | F歯科・矯正歯科',
  description: '下顎前突（受け口）の特徴、原因、治療法について詳しく解説。早期治療で効果的に改善できる不正咬合の一つです。お子様の歯並びが気になる方はご相談ください。',
  keywords: '下顎前突,受け口,反対咬合,こども矯正,小児矯正,歯列矯正,不正咬合,歯科,横浜',
};

export default function UnderbiteDetailPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-[#FDFBF7] via-white to-[#FAF8F5]">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#FFF9F0] to-[#FFF3E0] py-2 md:py-2 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 w-32 h-32 bg-[#E67A2E] rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#D66A28] rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* パンくずリスト */}
              <div className="flex items-center gap-2 mb-8 text-sm text-[#8D8070]">
                <Link href="/" className="hover:text-[#E67A2E] transition-colors flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  ホーム
                </Link>
                <ChevronRight size={14} />
                <Link href="/kidsortho" className="hover:text-[#E67A2E] transition-colors">こども矯正</Link>
                <ChevronRight size={14} />
                <Link href="/kidsortho/types" className="hover:text-[#E67A2E] transition-colors">不正咬合の種類</Link>
                <ChevronRight size={14} />
                <span className="text-[#E67A2E] font-bold">下顎前突</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E67A2E] rounded-full flex items-center justify-center text-white shadow-lg">
                  <AlertCircle size={32} />
                </div>
                <div>
                  <p className="text-[#E67A2E] font-bold text-sm mb-1">不正咬合の種類</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A4D41]">
                    下顎前突（かがくぜんとつ）
                  </h1>
                </div>
              </div>

              <p className="text-lg text-[#E67A2E] font-bold mb-4">通称：受け口（うけくち）、反対咬合</p>

              <p className="text-base md:text-lg leading-relaxed text-[#8D8070]">
                下顎前突は、下の前歯が上の前歯より前に出ている状態です。「受け口」「しゃくれ」とも呼ばれます。3歳児検診で最も多く指摘される不正咬合で、早期治療により顎の成長をコントロールしながら効果的に改善できます。
              </p>
            </div>
          </div>
        </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-2 md:py-2">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* 特徴セクション */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <CheckCircle size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">下顎前突の特徴</h2>
            </div>

            {/* 見た目の特徴 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">1</span>
                見た目の特徴
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">下の前歯が前に出ている：</strong>上の前歯より下の前歯が前方にあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">しゃくれた顎：</strong>下顎が突き出して見え、横顔の輪郭が特徴的です</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">三日月型の顔貌：</strong>顔を横から見ると、下顎が前に出ている形になります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">受け口の口元：</strong>口を閉じても下唇が上唇より前に出ています</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 機能面での問題 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">2</span>
                機能面での問題
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">咀嚼機能の低下：</strong>前歯で食べ物を噛み切れず、奥歯に負担がかかります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">発音障害：</strong>サ行やタ行の発音が不明瞭になります（特に「さしすせそ」）</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顎関節への負担：</strong>噛み合わせのバランスが悪く、顎に負担がかかります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">奥歯の早期摩耗：</strong>前歯が使えないため、奥歯が早く すり減ります</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 放置した場合のリスク */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border-l-4 border-red-500">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm">!</span>
                放置した場合のリスク
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">成長とともに悪化：</strong>下顎は成長期に大きく発育するため、放置すると骨格的な問題が進行します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">外科矯正が必要になる：</strong>成人後は顎の骨を切る手術が必要になることがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">顎関節症のリスク：</strong>噛み合わせのずれが顎関節に負担をかけ、痛みや開口障害の原因に</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">コンプレックスの形成：</strong>顔貌を気にして笑顔に自信が持てなくなることがあります</span>
                  </li>
                </ul>
                <div className="bg-red-50 p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-red-600">下顎前突は最も早期治療が重要：</strong>下顎前突は不正咬合の中でも特に早期治療が重要です。3〜5歳で治療を開始することで、顎の成長を適切にコントロールし、将来的な外科手術を避けられる可能性が高まります。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 原因セクション */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <AlertCircle size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">下顎前突の原因</h2>
            </div>

            {/* 遺伝的要因 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">1</span>
                遺伝的要因（骨格性）
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold">
                  下顎前突は遺伝の影響が強い不正咬合です。特に骨格性の受け口は家族性が認められます。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">下顎骨の過成長：</strong>下顎が大きく成長しやすい遺伝的傾向があります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">上顎骨の劣成長：</strong>上顎が小さい、または成長が不足する傾向が遺伝します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顎の成長パターン：</strong>下顎が前方・上方に成長するパターンが遺伝します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">家族歴：</strong>親や祖父母に受け口の方がいる場合、お子様も同様の傾向を持ちやすい</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-5 rounded-lg mt-4 border-l-4 border-blue-500">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-blue-600">遺伝でも早期治療が有効：</strong>遺伝的要因が強い場合でも、3〜5歳からの早期治療により顎の成長をコントロールし、骨格的な問題を軽減できます。家族に受け口の方がいる場合は、早めにご相談ください。
                  </p>
                </div>
              </div>
            </div>

            {/* 環境的要因 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">2</span>
                環境的要因（機能性・歯性）
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold mb-4">
                  遺伝以外にも、習癖や環境によって受け口になることがあります（機能性反対咬合）。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">舌癖（低位舌）：</strong>舌が常に下の位置にあると、下顎を前に押し出します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口呼吸：</strong>鼻づまりなどで口呼吸になると、舌の位置が下がり受け口を助長します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">下顎を前に出す癖：</strong>無意識に下顎を前に出す習慣があると、骨格に影響します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">上唇を吸う癖：</strong>上唇を吸い込む癖は、上の前歯を内側に傾け、受け口を悪化させます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">扁桃腺・アデノイドの肥大：</strong>気道が狭くなり、下顎を前に出す姿勢になりやすい</span>
                  </li>
                </ul>
                <div className="bg-yellow-50 p-5 rounded-lg mt-4 border-l-4 border-yellow-400">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-yellow-600">機能性反対咬合は改善しやすい：</strong>習癖や環境が原因の機能性反対咬合は、早期に治療を開始すれば比較的短期間で改善できます。3歳児検診で指摘された場合は、すぐにご相談ください。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 治療法セクション */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Shield size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">治療方法</h2>
            </div>

            {/* 超早期治療 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6 border-2 border-[#E67A2E]">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">1</span>
                超早期治療（3〜5歳）
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#E67A2E] font-bold mb-4">
                  ⭐ 下顎前突は最も早期治療が効果的な不正咬合です！
                </p>
                <p className="text-[#5A4D41] font-semibold mb-4">
                  3歳児検診で受け口を指摘されたら、すぐに治療を開始することをお勧めします。この時期の治療が最も効果的で、将来的な外科手術のリスクを大幅に減らせます。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">ムーシールド：</strong>就寝時に装着するマウスピース型の装置。舌と口唇の筋機能を改善します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">プレオルソ：</strong>やわらかいマウスピース型装置。日中1時間+就寝時の使用で効果が得られます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">舌訓練（MFT）：</strong>舌を正しい位置に保つトレーニングで、口腔機能を改善します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">鼻呼吸トレーニング：</strong>口呼吸を改善し、正しい顎の成長を促します</span>
                  </li>
                </ul>
                <div className="bg-[#E8F2ED] p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-[#395b45]">超早期治療の成功率：</strong>3〜5歳で治療を開始した機能性反対咬合の70〜80%は、この段階で改善します。骨格性の場合も、顎の成長をコントロールすることで症状を軽減できます。
                  </p>
                </div>
              </div>
            </div>

            {/* 1期治療 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">2</span>
                1期治療（6〜12歳頃）
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold mb-4">
                  混合歯列期（乳歯と永久歯が混在する時期）の治療。顎の成長をコントロールします。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">上顎前方牽引装置（フェイスマスク）：</strong>上顎を前方に引っ張り、下顎とのバランスを整えます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">急速拡大装置：</strong>上顎を横に広げてスペースを作り、上顎の成長を促します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">リンガルアーチ：</strong>下の前歯を後方に移動させる固定式の装置です</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">機能的矯正装置：</strong>顎の位置関係を改善する取り外し式の装置です</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-5 rounded-lg mt-4 border-l-4 border-blue-500">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-blue-600">成長期の治療が重要：</strong>下顎の成長は思春期にピークを迎えるため、それまでに上顎とのバランスを整えておくことが大切です。
                  </p>
                </div>
              </div>
            </div>

            {/* 2期治療 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">3</span>
                2期治療（12歳以降〜）
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold mb-4">
                  永久歯が生え揃った後に、歯の位置を細かく調整する段階です。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">マルチブラケット装置：</strong>ワイヤーとブラケットで歯を細かく調整します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">マウスピース矯正：</strong>軽度〜中等度の場合は透明なマウスピースでも治療可能</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">抜歯の可能性：</strong>スペース不足の場合、下の小臼歯を抜歯することがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">保定装置：</strong>治療後は後戻りを防ぐため、リテーナーを長期使用します</span>
                  </li>
                </ul>
                <div className="bg-yellow-50 p-5 rounded-lg mt-4 border-l-4 border-yellow-400">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-yellow-600">骨格性の場合：</strong>重度の骨格性下顎前突で、早期治療を行わなかった場合、成人後に外科的矯正治療（顎の骨を切る手術+矯正）が必要になることがあります。
                  </p>
                </div>
              </div>
            </div>

            {/* 治療期間と費用 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">4</span>
                治療期間と費用の目安
              </h3>
              <div className="space-y-6">
                {/* 超早期治療 */}
                <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                  <h4 className="font-bold text-[#5A4D41] mb-4 text-lg">超早期治療（3〜5歳）</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-green-500" />
                        <span className="font-bold text-[#5A4D41] text-sm">治療期間</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">6ヶ月〜1年程度<br /><span className="text-xs">（ムーシールド等の使用期間）</span></p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={18} className="text-green-500" />
                        <span className="font-bold text-[#5A4D41] text-sm">費用</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">10〜20万円程度<br /><span className="text-xs">（調整料：1回3,000〜5,000円程度）</span></p>
                    </div>
                  </div>
                </div>

                {/* 1期治療 */}
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-[#5A4D41] mb-4 text-lg">1期治療（6〜12歳頃）</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-blue-500" />
                        <span className="font-bold text-[#5A4D41] text-sm">治療期間</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">1〜3年程度<br /><span className="text-xs">（成長観察を含む）</span></p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={18} className="text-blue-500" />
                        <span className="font-bold text-[#5A4D41] text-sm">費用</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">35〜60万円程度<br /><span className="text-xs">（調整料：1回3,000〜5,000円程度）</span></p>
                    </div>
                  </div>
                </div>

                {/* 2期治療 */}
                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h4 className="font-bold text-[#5A4D41] mb-4 text-lg">2期治療（12歳以降〜）</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-yellow-600" />
                        <span className="font-bold text-[#5A4D41] text-sm">治療期間</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">1.5〜3年程度<br /><span className="text-xs">（保定期間：2〜3年以上）</span></p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={18} className="text-yellow-600" />
                        <span className="font-bold text-[#5A4D41] text-sm">費用</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">40〜80万円程度<br /><span className="text-xs">（1期治療から継続の場合は減額あり）</span></p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-[#8D8070] mt-2">
                  ※費用は症状や使用する装置によって異なります。医療費控除の対象となります。超早期治療で改善すれば、総費用を大幅に抑えられます。
                </p>
              </div>
            </div>
          </section>

          {/* 最適な治療時期 */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Calendar size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">最適な治療開始時期</h2>
            </div>

            <div className="bg-gradient-to-br from-[#E67A2E]/10 via-white to-[#E67A2E]/5 rounded-2xl shadow-xl p-8 md:p-10 border-2 border-[#E67A2E]/30">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-2 border-[#E67A2E]">
                  <h3 className="text-xl font-bold text-[#5A4D41] mb-4">
                    最も理想的：3〜5歳（超早期治療）
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    <strong className="text-[#E67A2E]">下顎前突は全ての不正咬合の中で最も早期治療が効果的</strong>です。3歳児検診で受け口を指摘されたら、すぐに治療を開始することをお勧めします。
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>機能性反対咬合なら70〜80%がこの段階で改善</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>骨格性でも早期から成長をコントロールできる</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>治療期間が短く、費用も最小限で済む</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>将来的な外科手術のリスクを大幅に減らせる</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-[#5A4D41] mb-4">
                    まだ間に合う：6〜10歳（1期治療）
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    混合歯列期も成長をコントロールできる重要な時期です。フェイスマスクなどで上顎を前方に牽引し、バランスを整えます。
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h4 className="font-bold text-[#5A4D41] mb-3">12歳以降の治療</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed">
                    成長期を過ぎてしまった場合、歯の移動のみでの治療となります。骨格的な問題が大きい場合は、成人後に外科矯正（顎の骨を切る手術）が必要になることがあります。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white flex-shrink-0">
                <Users size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">よくある質問</h2>
            </div>

            <div className="space-y-6">
              {/* Q1 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q1</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">受け口は自然に治りますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> ごく軽度の場合を除き、自然に治ることはほとんどありません。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">乳歯列期の軽度な反対咬合：</strong>ごくまれに自然治癒することもありますが、3%程度と非常に少ない</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">ほとんどの場合：</strong>放置すると成長とともに悪化します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">早期治療が重要：</strong>3歳児検診で指摘されたら、すぐに相談することをお勧めします</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    「様子を見ましょう」と言われて放置するのは危険です。下顎は成長期に大きく発育するため、早期に治療を始めることが将来的な手術を避ける鍵となります。
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">ムーシールドは本当に効果がありますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、3〜5歳の機能性反対咬合には非常に効果的です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">改善率：</strong>機能性反対咬合の70〜80%が改善すると報告されています</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                    <span><strong className="text-[#5A4D41]">使用方法：</strong>就寝時に装着するだけ（8〜10時間）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">治療期間：</strong>6ヶ月〜1年程度で効果が現れます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">痛みなし：</strong>装着時の違和感は数日で慣れます</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    骨格性の受け口でも、ムーシールドで口腔機能を改善することで、顎の成長をある程度コントロールできます。早期治療の第一歩として非常に有効です。
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">フェイスマスクは目立ちますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 主に自宅で使用するため、外出時の心配は不要です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">使用時間：</strong>1日12〜14時間程度（主に就寝時と自宅にいる時間）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">学校では不要：</strong>外出時や学校では装着する必要はありません</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">装着中の活動：</strong>テレビを見る、宿題をするなど、普通に過ごせます</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    フェイスマスクは上顎を前方に引っ張る非常に効果的な装置です。見た目が気になるかもしれませんが、将来の外科手術を避けられる可能性を考えると、とても価値のある治療法です。
                  </p>
                </div>
              </div>

              {/* Q4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q4</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">治療後に後戻りすることはありますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 下顎前突は後戻りのリスクが比較的高い不正咬合です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">成長による後戻り：</strong>思春期の成長で下顎がさらに成長し、後戻りすることがあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">習癖による後戻り：</strong>舌癖が改善されないと後戻りのリスクが高まります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">保定の重要性：</strong>治療後は長期間（2〜3年以上）リテーナーを使用します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">定期チェック：</strong>成長が終わるまで定期的に経過観察が必要です</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    後戻りを防ぐため、治療後も定期的な通院と保定装置の使用が重要です。特に思春期の成長スパート時期は注意深く経過を見ていく必要があります。
                  </p>
                </div>
              </div>

              {/* Q5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q5</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">遺伝でも治療できますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、遺伝性の骨格性受け口でも早期治療により改善できます。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">軽度〜中等度：</strong>早期から治療すれば、矯正治療のみで改善可能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">重度の場合：</strong>成長をコントロールし、症状を軽減することは可能</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">外科矯正のリスク軽減：</strong>早期治療により、将来的な手術を避けられる可能性が高まります</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    ご家族に受け口の方がいる場合は、お子様が3歳になったらすぐに検査を受けることをお勧めします。早期発見・早期治療が何より重要です。
                  </p>
                </div>
              </div>

              {/* Q6 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q6</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">3歳で治療を始めるのは早すぎませんか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> いいえ、受け口の場合は3歳からの治療が最も効果的です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">取り外し式装置：</strong>ムーシールドは就寝時のみの使用で、お子様への負担が少ない</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">短期間で効果：</strong>6ヶ月〜1年で改善することが多く、長期間の治療は不要</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">将来の負担軽減：</strong>この時期に治療すれば、将来的に複雑な治療や手術を避けられます</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    むしろ「様子を見る」ことで手遅れになるケースが多いです。3歳児検診で受け口を指摘されたら、すぐに矯正歯科医に相談することを強くお勧めします。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="relative bg-gradient-to-br from-[#FFF9F0] to-[#FFF3E0] rounded-2xl shadow-xl p-8 md:p-12 border-2 border-[#E67A2E]/20 overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-5 right-5 w-24 h-24 bg-[#E67A2E] rounded-full blur-2xl"></div>
              <div className="absolute bottom-5 left-5 w-32 h-32 bg-[#D66A28] rounded-full blur-2xl"></div>
            </div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">お子様の受け口が気になりませんか？</h2>
                <p className="text-lg md:text-xl text-[#8D8070] leading-relaxed">
                  下顎前突（受け口）は3〜5歳からの超早期治療が最も効果的です。<br />
                  3歳児検診で指摘されたら、すぐにご相談ください。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-md border border-[#E67A2E]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#5A4D41]">無料カウンセリング</h3>
                      <p className="text-sm text-[#8D8070]">所要時間：30〜60分</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-[#8D8070]">
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-1 flex-shrink-0 text-[#E67A2E]" />
                      <span>機能性か骨格性かの診断</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-1 flex-shrink-0 text-[#E67A2E]" />
                      <span>最適な治療開始時期のご提案</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-1 flex-shrink-0 text-[#E67A2E]" />
                      <span>治療期間と費用の詳しいご説明</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md border border-[#E67A2E]/10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#5A4D41]">お電話でのご予約</h3>
                      <p className="text-sm text-[#8D8070]">平日 9:00〜18:00</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-[#E67A2E] mb-3">045-XXX-XXXX</p>
                  <p className="text-sm text-[#8D8070]">
                    「受け口の相談」とお伝えください
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#E67A2E] hover:bg-[#D66A28] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-xl"
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
            </div>
          </section>

          {/* Related Links */}
          <section>
            <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-6">関連ページ</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/kidsortho/types" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#E67A2E]/30 group">
                <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#E67A2E] transition-colors flex items-center gap-2">
                  不正咬合の種類
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-[#8D8070]">7つの不正咬合タイプと特徴</p>
              </Link>
              <Link href="/kidsortho/timing" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#E67A2E]/30 group">
                <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#E67A2E] transition-colors flex items-center gap-2">
                  いつから始めるべきか
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-[#8D8070]">最適な治療開始時期について</p>
              </Link>
              <Link href="/kidsortho/cost" className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-transparent hover:border-[#E67A2E]/30 group">
                <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#E67A2E] transition-colors flex items-center gap-2">
                  費用について
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </h3>
                <p className="text-sm text-[#8D8070]">治療費用と支払い方法</p>
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
  );
}
