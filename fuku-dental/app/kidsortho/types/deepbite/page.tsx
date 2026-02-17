import { Metadata } from 'next';
import { AlertCircle, CheckCircle, ArrowRight, Users, Clock, TrendingUp, Shield, Calendar, Phone, ChevronRight, Home } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import Link from 'next/link';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';

export const metadata: Metadata = {
  title: '過蓋咬合（かがいこうごう）ディープバイトの治療 | こども矯正 | F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '過蓋咬合（ディープバイト）の特徴、原因、治療法について詳しく解説。上の前歯が下の前歯を深く覆う状態で、早期治療が効果的です。お子様の歯並びが気になる方はご相談ください。',
  keywords: '過蓋咬合,ディープバイト,深い噛み合わせ,こども矯正,小児矯正,歯列矯正,不正咬合,歯科,横浜',
};

export default function DeepBiteDetailPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
        {/* Hero Section */}
        <section className="relative bg-[#FDFBF7] py-2 md:py-2">

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
                <span className="text-[#E67A2E] font-bold">過蓋咬合</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E67A2E] rounded-full flex items-center justify-center text-white shadow-lg">
                  <AlertCircle size={32} />
                </div>
                <div>
                  <p className="text-[#E67A2E] font-bold text-sm mb-1">不正咬合の種類</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A4D41]">
                    過蓋咬合（かがいこうごう）
                  </h1>
                </div>
              </div>
            </div>

              {/* ヒーロー画像 */}
              <KidsOrthoImage
                name="deepbite-hero"
                alt="過蓋咬合（ディープバイト）の症例写真"
                category="types"
              />

              <p className="text-lg text-[#E67A2E] font-bold mt-6 mb-4">通称：ディープバイト</p>

              <p className="text-base md:text-lg leading-relaxed text-[#8D8070]">
                過蓋咬合は、上の前歯が下の前歯を深く覆いかぶさっている状態です。正常な咬合では上の前歯が下の前歯を2〜3mm覆いますが、過蓋咬合では下の前歯がほとんど見えなくなります。放置すると歯茎を傷つけたり、顎関節症のリスクが高まるため、早期治療が重要です。
              </p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">過蓋咬合の特徴</h2>
            </div>

            {/* 見た目の特徴 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                1. 見た目の特徴
              </h4>

              {/* 過蓋咬合の見た目を示す画像 */}
              <div className="mb-6">
                <KidsOrthoImage
                  name="deepbite-profile"
                  alt="過蓋咬合の噛み合わせの特徴"
                  category="types"
                  className="max-w-2xl mx-auto"
                />
              </div>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">下の前歯が見えない：</strong>上の前歯が下の前歯を深く覆い、下の前歯がほとんど見えません</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">ガミースマイル：</strong>笑うと歯茎が見えすぎることがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顔が短く見える：</strong>下顔面が短く、顎が小さく見える傾向があります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口元が引っ込んで見える：</strong>上下の唇が内側に引っ込んで見えることがあります</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 機能面での問題 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                2. 機能面での問題
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">歯茎の損傷：</strong>下の前歯が上顎の歯茎を突き上げて傷つけることがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顎関節への負担：</strong>噛み合わせが深いため、顎関節に過度な負担がかかります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">咀嚼効率の低下：</strong>奥歯がしっかり噛み合わないことがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">前歯の摩耗：</strong>前歯に過度な力がかかり、歯がすり減りやすくなります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">下唇を噛む：</strong>下唇を噛んでしまうことがあります</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 放置した場合のリスク */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                放置した場合のリスク
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">歯茎の退縮：</strong>下の前歯が上顎の歯茎を突き続けることで、歯茎が下がります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">顎関節症の発症：</strong>顎関節に過度な負担がかかり、痛みや開口障害を引き起こします</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">前歯の破折リスク：</strong>前歯に集中する咬合力により、歯が割れるリスクが高まります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">奥歯の機能低下：</strong>奥歯が噛み合わず、咀嚼機能が低下します</span>
                  </li>
                </ul>
                <div className="bg-red-50 p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-red-600">早期発見・早期治療が重要：</strong>過蓋咬合は見た目では分かりにくいことがありますが、放置すると様々な問題を引き起こします。7〜10歳頃での治療開始が理想的です。
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">過蓋咬合の原因</h2>
            </div>

            <div className="mb-8">
              <KidsOrthoImage
                name="deepbite-causes"
                alt="過蓋咬合の原因となる顎の成長パターン"
                category="types"
                className="max-w-3xl mx-auto"
              />
            </div>

            {/* 遺伝的要因 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                1. 遺伝的要因
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">骨格的な問題：</strong>下顔面が短い、または垂直的な成長が不足する傾向が遺伝します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顎の大きさ：</strong>下顎が小さい、または後方に位置する骨格が遺伝することがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">前歯の萌出位置：</strong>上の前歯が下方に、下の前歯が上方に生える傾向が遺伝します</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-5 rounded-lg mt-4 border-l-4 border-blue-500">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-blue-600">遺伝の影響：</strong>親が過蓋咬合の場合、お子様も同様の傾向を持つ可能性があります。早期治療により成長をコントロールすることで改善が可能です。
                  </p>
                </div>
              </div>
            </div>

            {/* 環境的要因 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                2. 環境的要因（後天的な要因）
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">奥歯の早期喪失：</strong>乳臼歯を虫歯で早く失うと、前歯が深く噛み込むようになります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">下唇を噛む癖：</strong>下唇を噛む習癖があると、上の前歯が内側に倒れて過蓋咬合になります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">軟らかい食事：</strong>よく噛まない食生活は顎の発育不足につながります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">頬杖（ほおづえ）：</strong>下顎を圧迫する姿勢が習慣化すると、下顎の成長が抑制されます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">うつ伏せ寝：</strong>常にうつ伏せで寝ると、下顎の成長が妨げられます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">猫背・姿勢の悪さ：</strong>スマートフォンの見すぎなどで猫背になると、下顎が後方に押され、過蓋咬合を悪化させます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">歯ぎしり・食いしばり：</strong>強い咬合力により奥歯がすり減り、咬合が深くなります</span>
                  </li>
                </ul>
                <div className="bg-yellow-50 p-5 rounded-lg mt-4 border-l-4 border-yellow-400">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-yellow-600">習癖と虫歯予防が重要：</strong>下唇を噛む癖や頬杖などの習癖を早期に改善し、乳歯の虫歯を予防することで、過蓋咬合の進行を防げます。
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
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                1. 1期治療（7〜12歳頃）
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold mb-4">
                  成長期を利用した咬合の挙上（浅くすること）が中心です。この時期の治療が最も効果的です。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">機能的マウスピース装置：</strong>プレオルソなどで下顎の成長を促進し、咬合を浅くします</span>

                    {/* 治療装置の画像 */}
                    <div className="my-6">
                      <KidsOrthoImage
                        name="deepbite-treatment"
                        alt="過蓋咬合の治療装置"
                        category="types"
                        className="max-w-xl mx-auto"
                      />
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">バイトプレート：</strong>奥歯を挺出（伸ばす）させて咬合を浅くします</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">上顎前歯の圧下：</strong>上の前歯を歯茎の方向に押し込みます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">下顎の成長促進：</strong>機能的矯正装置で下顎の成長を促進します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">習癖の改善：</strong>下唇を噛む癖や頬杖などの習癖を改善します</span>
                  </li>
                </ul>
                <div className="bg-[#E8F2ED] p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-[#395b45]">1期治療の目標：</strong>適切な咬合の深さを確保し、上下の顎のバランスを整えることです。早期治療により歯茎の損傷や顎関節への負担を防ぎます。
                  </p>
                </div>
              </div>
            </div>

            {/* 2期治療 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                2. 2期治療（12歳以降〜）
              </h4>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold mb-4">
                  永久歯が生え揃った後に、歯の位置を細かく調整する段階です。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">マルチブラケット装置：</strong>前歯の圧下と奥歯の挺出を正確に行います</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">歯科矯正用アンカースクリュー：</strong>上の前歯を効果的に圧下するために使用します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">咬合挙上：</strong>ブラケットと特殊なワイヤーで咬合を浅くします</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">保定装置：</strong>治療後は後戻りを防ぐため、リテーナーを使用します</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 使用する装置 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                3. 主な使用装置
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">機能的マウスピース装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">プレオルソなど。下顎の成長を促進し、咬合を浅くします。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">バイトプレート</h4>
                  <p className="text-sm text-[#8D8070] mb-2">奥歯を挺出させて咬合を浅くする装置。取り外し可能です。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">機能的矯正装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">下顎の成長を促進し、上下のバランスを整えます。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">部分矯正装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">前歯の圧下を早期に行う装置。永久歯前歯部に使用します。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">ブラケット装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">歯の表面に装着し、垂直的な位置を正確にコントロールします。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">2期治療</p>
                </div>
              </div>
            </div>

            {/* 治療期間と費用 */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                4. 治療期間と費用の目安
              </h4>
              <div className="space-y-6">
                {/* 1期治療 */}
                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-[#5A4D41] mb-4 text-lg">1期治療（7〜12歳頃）</h4>
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

            <div className="bg-white rounded-2xl shadow-sm border border-[#C5A572]/10 p-8 md:p-10">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold text-[#5A4D41] mb-4 flex items-center gap-3">
                    <span className="text-3xl">🌟</span>
                    <span>理想的な開始時期：7〜10歳</span>
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    過蓋咬合の治療は、<strong className="text-[#E67A2E]">永久歯の前歯が生え揃う7〜10歳頃が最も効果的</strong>です。この時期に咬合の深さをコントロールすることで、歯茎の損傷や顎関節への負担を防ぎます。
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>奥歯の挺出をコントロールできる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>前歯の圧下が効果的にできる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>下顎の成長を促進できる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>歯茎の損傷を防げる時期</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-[#5A4D41] mb-3">7歳での定期検診を推奨</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed">
                    過蓋咬合は見た目では分かりにくいことがあります。7歳頃に矯正歯科で検診を受けることで、過蓋咬合の有無を確認し、適切な治療開始時期を見逃さずに済みます。
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h4 className="font-bold text-[#5A4D41] mb-3">12歳以降でも治療可能</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed">
                    成長期を過ぎてしまった場合でも、マルチブラケット装置とアンカースクリューを使用することで治療可能です。ただし、骨格的な問題が大きい場合は、治療が困難になることがあります。
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
                    <h3 className="font-bold text-[#5A4D41] text-lg">過蓋咬合は自然に治りますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 自然に治ることはほとんどありません。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>骨格的な問題や歯の位置異常は、自然には改善しません</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>むしろ、成長とともに深くなることがあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>放置すると歯茎の損傷や顎関節症のリスクが高まります</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    早期に矯正治療を開始することで、適切な咬合の深さを確保し、将来的な問題を防ぐことができます。
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">どれくらい深いと過蓋咬合ですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 上の前歯が下の前歯を3分の1以上覆うと過蓋咬合とされます。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">正常：</strong>上の前歯が下の前歯を2〜3mm（約1/4）覆う程度</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">軽度の過蓋咬合：</strong>下の前歯が1/3〜1/2隠れる状態</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">重度の過蓋咬合：</strong>下の前歯がほとんど見えない、または歯茎を突いている状態</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    重度の場合は早急な治療が必要です。矯正歯科での診断を受けることをお勧めします。
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">バイトプレートは痛いですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 痛みは少なく、主に違和感や圧迫感程度です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">装着時の違和感：</strong>最初は話しにくい、食べにくいと感じることがあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">慣れるまで：</strong>1〜2週間で慣れることがほとんどです</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">奥歯の違和感：</strong>奥歯が伸びる過程で軽い違和感を感じることがあります</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    ほとんどのお子様は数日で装置に慣れます。違和感が強い場合は調整できますので、ご相談ください。
                  </p>
                </div>
              </div>

              {/* Q4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q4</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">歯茎が傷ついているのですが治療は急いだ方がいいですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、できるだけ早く治療を開始することをお勧めします。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">歯茎の退縮：</strong>下の前歯が歯茎を突き続けると、歯茎が下がり、歯の根が露出します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">炎症：</strong>歯茎が傷つくと、炎症を起こして痛みが出ることがあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">早期治療が重要：</strong>歯茎の損傷が進む前に治療を開始すべきです</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    歯茎が傷ついている場合は、緊急性が高い状態です。できるだけ早くご相談ください。
                  </p>
                </div>
              </div>

              {/* Q5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q5</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">過蓋咬合は顎関節症の原因になりますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、過蓋咬合は顎関節症の大きなリスク要因です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">顎関節への負担：</strong>咬合が深いと、顎関節が圧迫されて負担がかかります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">症状：</strong>顎の痛み、口が開きにくい、顎からカクカク音がするなど</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">予防：</strong>早期に過蓋咬合を治療することで、顎関節症を予防できます</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    成人してから顎関節症が発症すると治療が困難です。子どものうちに過蓋咬合を治療することが、将来の顎関節症予防につながります。
                  </p>
                </div>
              </div>

              {/* Q6 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q6</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">過蓋咬合の治療は難しいですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 垂直的なコントロールが必要なため、専門的な技術が必要です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">垂直的なコントロール：</strong>歯を上下方向に動かす必要があり、技術と時間が必要です</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">早期治療が有利：</strong>成長期に治療を始めれば、効果的にコントロールできます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">経験豊富な矯正歯科で：</strong>専門的な知識と経験が必要な治療です</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    過蓋咬合の治療は専門的な技術が必要ですが、適切な時期に適切な治療を行えば、良好な結果が得られます。当院では豊富な経験をもとに対応いたします。
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">お子様の噛み合わせが深いことが気になりませんか？</h2>
                <p className="text-lg md:text-xl text-[#8D8070] leading-relaxed">
                  過蓋咬合（ディープバイト）は早期治療が効果的です。<br />
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
