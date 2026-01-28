import { Metadata } from 'next';
import { AlertCircle, CheckCircle, ArrowRight, Users, Clock, TrendingUp, Shield, Calendar, Phone, ChevronRight, Home } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '上顎前突（出っ歯）の治療 | こども矯正 | F歯科・矯正歯科',
  description: '上顎前突（出っ歯）の特徴、原因、治療法について詳しく解説。早期治療で効果的に改善できる不正咬合の一つです。お子様の歯並びが気になる方はご相談ください。',
  keywords: '上顎前突,出っ歯,こども矯正,小児矯正,歯列矯正,不正咬合,歯科,横浜',
};

export default function OverbiteDetailPage() {
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
                <span className="text-[#E67A2E] font-bold">上顎前突</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E67A2E] rounded-full flex items-center justify-center text-white shadow-lg">
                  <AlertCircle size={32} />
                </div>
                <div>
                  <p className="text-[#E67A2E] font-bold text-sm mb-1">不正咬合の種類</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A4D41]">
                    上顎前突（じょうがくぜんとつ）
                  </h1>
                </div>
              </div>

              <p className="text-lg text-[#E67A2E] font-bold mb-4">通称：出っ歯（でっぱ）</p>

              <p className="text-base md:text-lg leading-relaxed text-[#8D8070]">
                上顎前突は、上の前歯が前に突き出している状態です。「出っ歯」とも呼ばれ、見た目だけでなく、口が閉じにくい、発音がしにくいなどの機能的な問題も引き起こします。早期治療により、顎の成長をコントロールしながら効果的に改善できます。
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">上顎前突の特徴</h2>
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
                    <span><strong className="text-[#5A4D41]">上の前歯が前に突き出ている：</strong>正常な位置よりも前方に出ている状態です</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口が閉じにくい：</strong>上唇と下唇の間に隙間ができやすくなります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">横顔が特徴的：</strong>鼻と顎を結ぶEラインより唇が前に出ています</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">オトガイ部の緊張：</strong>口を閉じようとすると顎に梅干しのようなシワができます</span>
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
                    <span><strong className="text-[#5A4D41]">咀嚼機能の低下：</strong>前歯で食べ物を噛み切りにくくなります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">発音障害：</strong>サ行やタ行の発音が不明瞭になることがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口呼吸：</strong>口が開きやすいため、口呼吸になりがちです</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口腔乾燥：</strong>口が開いていることで口の中が乾燥しやすくなります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">前歯の損傷リスク：</strong>転倒時などに前歯をぶつけやすく、破折のリスクが高まります</span>
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
                    <span><strong className="text-[#5A4D41]">虫歯や歯周病のリスク増加：</strong>口呼吸による口腔乾燥で細菌が繁殖しやすくなります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">顎関節症のリスク：</strong>噛み合わせのバランスが悪いことで顎に負担がかかります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">コンプレックスの形成：</strong>見た目を気にして笑顔に自信が持てなくなることがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">成長とともに悪化：</strong>成長期に放置すると、さらに前突が進行する可能性があります</span>
                  </li>
                </ul>
                <div className="bg-red-50 p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-red-600">早期発見・早期治療が重要：</strong>成長期のお子様の場合、顎の成長をコントロールすることで、抜歯を避けられる可能性が高まります。6〜8歳頃での治療開始が理想的です。
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">上顎前突の原因</h2>
            </div>

            {/* 遺伝的要因 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">1</span>
                遺伝的要因
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">骨格的な遺伝：</strong>上顎が大きい、または下顎が小さい骨格が遺伝することがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">歯の大きさの遺伝：</strong>顎の大きさに対して歯が大きい場合、前に出やすくなります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顎の成長パターン：</strong>上顎が前方に成長しやすい、または下顎の成長が不足する傾向が遺伝します</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-5 rounded-lg mt-4 border-l-4 border-blue-500">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-blue-600">遺伝の影響：</strong>親が上顎前突の場合、お子様も同様の傾向を持つ可能性が高くなります。ただし、早期治療により適切にコントロールすることが可能です。
                  </p>
                </div>
              </div>
            </div>

            {/* 環境的要因 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">2</span>
                環境的要因（後天的な習癖）
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">指しゃぶり：</strong>3歳以降も続く指しゃぶりは、前歯を前方に押し出す大きな原因となります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">舌癖（舌突出癖）：</strong>飲み込むときに舌が前歯を押す癖があると、徐々に前歯が前に出ます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口呼吸：</strong>鼻づまりなどで口呼吸が習慣化すると、顎の正常な成長が妨げられます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">下唇を噛む癖：</strong>下唇を噛むことで上の前歯を前に押し出してしまいます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">おしゃぶりの長期使用：</strong>3歳以降もおしゃぶりを使い続けると、歯並びに影響します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">軟らかい食べ物中心の食生活：</strong>よく噛まない食生活は顎の成長不足につながります</span>
                  </li>
                </ul>
                <div className="bg-yellow-50 p-5 rounded-lg mt-4 border-l-4 border-yellow-400">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-yellow-600">習癖の改善が重要：</strong>これらの習癖は保護者の方が気づいて早めに対処することで改善できます。矯正治療と並行して習癖の改善を行うことで、より効果的な治療が可能です。
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

            {/* 1期治療 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">1</span>
                1期治療（6〜12歳頃）
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold mb-4">
                  成長期を利用した顎骨のコントロールが中心です。この時期の治療が最も効果的で、将来的な抜歯のリスクを大幅に減らせます。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">下顎の成長促進：</strong>機能的矯正装置で下顎を前方に誘導し、バランスを整えます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">歯列の拡大：</strong>拡大床装置で顎を広げ、永久歯のスペースを確保します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">習癖の改善：</strong>タンガードなどで舌癖や指しゃぶりを改善します</span>
                  </li>
                </ul>
                <div className="bg-[#E8F2ED] p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-[#395b45]">1期治療の目標：</strong>永久歯が正しく生えるための土台作りと、上下の顎のバランスを整えることです。この段階でしっかり治療することで、2期治療が不要になったり、簡単になったりします。
                  </p>
                </div>
              </div>
            </div>

            {/* 2期治療 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">2</span>
                2期治療（12歳以降〜）
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold mb-4">
                  永久歯が生え揃った後に、歯の位置を細かく調整する段階です。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">マルチブラケット装置：</strong>歯の表側または裏側にブラケットを装着し、ワイヤーで歯を動かします</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">マウスピース矯正：</strong>透明なマウスピースを使用した目立たない治療法も選択できます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">抜歯の可能性：</strong>1期治療で十分なスペースが確保できなかった場合、小臼歯を抜歯することがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">保定装置：</strong>治療後は後戻りを防ぐため、リテーナーを使用します</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 使用する装置 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">3</span>
                主な使用装置
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">機能的マウスピース装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">マウスピース型の機能的矯正装置。下顎の成長を促進し、上下の顎のバランスを整えます。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">バイオネーター</h4>
                  <p className="text-sm text-[#8D8070] mb-2">下顎を前方に誘導する機能的矯正装置。取り外し可能です。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">拡大床装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">顎を横に広げてスペースを作る装置。ネジで少しずつ拡大します。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">ブラケット装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">歯の表面に装着し、ワイヤーで歯を動かします。最も一般的な装置です。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">2期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">マウスピース装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">透明なマウスピースで歯を動かす装置。目立たず、取り外しが可能です。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">2期治療</p>
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
                {/* 1期治療 */}
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-[#5A4D41] mb-4 text-lg">1期治療（6〜12歳頃）</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock size={18} className="text-blue-500" />
                        <span className="font-bold text-[#5A4D41] text-sm">治療期間</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">1〜3年程度<br /><span className="text-xs">（永久歯が生え揃うまで経過観察を含む）</span></p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={18} className="text-blue-500" />
                        <span className="font-bold text-[#5A4D41] text-sm">費用</span>
                      </div>
                      <p className="text-[#8D8070] text-sm">30〜50万円程度<br /><span className="text-xs">（調整料：1回3,000〜5,000円程度）</span></p>
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
                      <p className="text-[#8D8070] text-sm">1.5〜2.5年程度<br /><span className="text-xs">（保定期間：2年以上）</span></p>
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
                  ※費用は症状や使用する装置によって異なります。医療費控除の対象となる場合があります。詳しくは初回カウンセリングでご説明いたします。
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
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-[#5A4D41] mb-4 flex items-center gap-3">
                    <span className="text-3xl">🌟</span>
                    <span>理想的な開始時期：6〜8歳</span>
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    上顎前突の治療は、<strong className="text-[#E67A2E]">前歯が生え変わる6〜8歳頃が最も効果的</strong>です。この時期は成長を利用して顎のバランスを整えられるため、将来的に抜歯を避けられる可能性が高まります。
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>上顎の過剰な成長を抑制できる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>下顎の成長を促進できる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>習癖の改善がしやすい時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>永久歯のスペース確保がしやすい時期</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-[#5A4D41] mb-3">3〜5歳での相談も推奨</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed">
                    明らかな出っ歯や指しゃぶりなどの習癖がある場合は、3〜5歳でも一度ご相談ください。早期に習癖を改善することで、不正咬合の進行を防ぐことができます。
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h4 className="font-bold text-[#5A4D41] mb-3">12歳以降でも治療可能</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed">
                    成長期を過ぎてしまった場合でも、マルチブラケット装置やマウスピース矯正で治療可能です。ただし、骨格的な問題が大きい場合は、抜歯が必要になることがあります。
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
                    <h3 className="font-bold text-[#5A4D41] text-lg">上顎前突は自然に治りますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 残念ながら、自然に治ることはほとんどありません。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>骨格的な問題や歯の位置異常は、成長とともにむしろ悪化する傾向があります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>指しゃぶりなどの習癖を改善すれば、軽度の場合は進行を止められることもあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>しかし、すでに出ている前歯を自然に戻すことはできません</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    早期に矯正治療を開始することで、顎の成長をコントロールしながら効果的に改善できます。6〜8歳頃の治療開始が最も効果的です。
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">必ず抜歯が必要ですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 早期治療を行えば、抜歯を避けられる可能性が高まります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">6〜8歳で開始：</strong>顎を広げてスペースを作り、抜歯を避けられることが多い</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">12歳以降：</strong>スペース不足が大きい場合、小臼歯の抜歯が必要なことがある</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">成人：</strong>骨格的な問題が大きい場合、抜歯や外科矯正が必要なこともある</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    抜歯の有無は、顎の大きさ、歯の大きさ、前突の程度によって判断します。当院では可能な限り非抜歯での治療を目指しています。
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">ヘッドギアは学校でもつける必要がありますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> いいえ、主に自宅での使用で効果が得られます。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">推奨使用時間：</strong>1日10〜14時間程度（主に就寝時と自宅にいる時間）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">学校では不要：</strong>外出時や学校では装着する必要はありません</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">効果：</strong>指示された時間を守って使用すれば、十分な効果が得られます</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    装着時間が短いと効果が得られないため、保護者の方のサポートが重要です。お子様が嫌がる場合は、励ましと見守りをお願いします。
                  </p>
                </div>
              </div>

              {/* Q4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q4</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">痛みはありますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 装置を装着した直後や調整後に、軽い違和感や痛みを感じることがあります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">1期治療：</strong>痛みは少なく、主に違和感や圧迫感程度です</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">2期治療：</strong>ブラケット調整後2〜3日は歯が浮くような痛みがあることも</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">対処法：</strong>数日で慣れます。痛みが強い場合は鎮痛剤も使用できます</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    ほとんどの場合、痛みは3〜5日で治まります。お子様が痛がる場合は、軟らかい食事にするなどの配慮で対応できます。
                  </p>
                </div>
              </div>

              {/* Q5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q5</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">指しゃぶりをやめさせれば治りますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 習癖の改善は重要ですが、すでに出ている歯は自然には戻りません。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">3歳未満：</strong>指しゃぶりをやめれば、自然に改善することもあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">3歳以降：</strong>習癖をやめても、すでに出た歯は戻らないため矯正治療が必要です</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">予防効果：</strong>早めにやめることで、悪化を防ぐことはできます</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    矯正治療と並行して習癖を改善することで、治療効果が高まり、後戻りも防げます。タンガードなどの装置で習癖改善をサポートします。
                  </p>
                </div>
              </div>

              {/* Q6 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q6</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">1期治療だけで終わることもありますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、症状が軽度〜中等度の場合、1期治療のみで終了できることもあります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">1期のみで終了：</strong>軽度の上顎前突で、顎のバランスが整えば終了</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">2期が必要：</strong>歯の細かい位置や角度を調整したい場合</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">継続観察：</strong>永久歯が生え揃うまで定期的にチェックします</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    早期に治療を始めることで、1期治療のみで終了できる可能性が高まります。また、2期治療が必要な場合も、期間が短く済むことが多いです。
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">お子様の出っ歯が気になりませんか？</h2>
                <p className="text-lg md:text-xl text-[#8D8070] leading-relaxed">
                  上顎前突（出っ歯）は早期治療が効果的です。<br />
                  まずは無料カウンセリングでご相談ください。
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
                      <span>お子様の歯並びの状態を詳しく診査</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle size={16} className="mt-1 flex-shrink-0 text-[#E67A2E]" />
                      <span>最適な治療方法と時期をご提案</span>
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
                    「こども矯正の相談」とお伝えください
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#E67A2E] hover:bg-[#D66A28] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  <Calendar size={20} />
                  <span>無料カウンセリング予約</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/kidsortho"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#5A4D41] font-bold py-4 px-8 rounded-full transition-all border-2 border-[#E67A2E]/30 shadow-md"
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
      </main>
      <Footer />
    </>
  );
}
