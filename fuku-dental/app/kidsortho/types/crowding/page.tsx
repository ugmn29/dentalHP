import { Metadata } from 'next';
import { AlertCircle, CheckCircle, ArrowRight, Users, Clock, TrendingUp, Shield, Calendar, Phone, ChevronRight, Home } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '叢生（そうせい）ガタガタの歯並びの治療 | こども矯正 | F歯科・矯正歯科',
  description: '叢生（ガタガタの歯並び）の特徴、原因、治療法について詳しく解説。日本人に最も多い不正咬合で、早期治療により非抜歯での改善が可能です。お子様の歯並びが気になる方はご相談ください。',
  keywords: '叢生,ガタガタ,歯並び,デコボコ,こども矯正,小児矯正,歯列矯正,不正咬合,歯科,横浜',
};

export default function CrowdingDetailPage() {
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
                <span className="text-[#E67A2E] font-bold">叢生</span>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#E67A2E] rounded-full flex items-center justify-center text-white shadow-lg">
                  <AlertCircle size={32} />
                </div>
                <div>
                  <p className="text-[#E67A2E] font-bold text-sm mb-1">不正咬合の種類</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#5A4D41]">
                    叢生（そうせい）
                  </h1>
                </div>
              </div>

              <p className="text-lg text-[#E67A2E] font-bold mb-4">通称：ガタガタ、八重歯（やえば）</p>

              <p className="text-base md:text-lg leading-relaxed text-[#8D8070]">
                叢生は、歯が重なり合ったりデコボコに並んでいる状態です。日本人に最も多い不正咬合で、顎が小さいことや歯が大きいことが原因です。早期治療により、顎を拡大して永久歯の生えるスペースを確保し、抜歯をせずに改善できる可能性が高まります。
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">叢生の特徴</h2>
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
                    <span><strong className="text-[#5A4D41]">歯が重なり合っている：</strong>歯がデコボコに並び、重なり合って生えています</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">八重歯がある：</strong>犬歯が飛び出して生えている状態も叢生の一種です</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">歯並びがガタガタ：</strong>歯列がきれいなアーチ状にならず、凸凹しています</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">歯が内側や外側に傾いている：</strong>スペース不足で歯が斜めに生えています</span>
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
                    <span><strong className="text-[#5A4D41]">歯磨きがしにくい：</strong>歯が重なっている部分に歯ブラシが届きにくく、磨き残しが生じます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">虫歯になりやすい：</strong>磨き残しにより、虫歯のリスクが高まります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">歯周病のリスク：</strong>歯茎の炎症が起きやすく、将来的な歯周病リスクが高まります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">咀嚼効率の低下：</strong>歯がしっかり噛み合わないことがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口臭の原因：</strong>磨き残しによる細菌の繁殖で口臭が発生しやすくなります</span>
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
                    <span><strong className="text-[#5A4D41]">虫歯の多発：</strong>磨き残しにより、複数の歯が虫歯になりやすくなります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">歯周病の進行：</strong>歯茎の炎症が進行し、若くして歯周病になるリスクがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">抜歯が必要になる可能性：</strong>成長後の治療では、スペース確保のため抜歯が必要になることがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">コンプレックスの形成：</strong>見た目を気にして、笑顔に自信が持てなくなります</span>
                  </li>
                </ul>
                <div className="bg-red-50 p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-red-600">早期発見・早期治療が重要：</strong>叢生は日本人に最も多い不正咬合です。7〜10歳での早期治療により、顎を拡大して永久歯のスペースを確保し、抜歯せずに治療できる可能性が高まります。
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">叢生の原因</h2>
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
                    <span><strong className="text-[#5A4D41]">顎が小さい：</strong>日本人は顎が小さい傾向があり、歯が並ぶスペースが不足しやすいです</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">歯が大きい：</strong>歯のサイズが顎に対して大きすぎると、並びきれません</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">顎と歯のアンバランス：</strong>顎のサイズと歯のサイズが遺伝的にアンバランスなことがあります</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-5 rounded-lg mt-4 border-l-4 border-blue-500">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-blue-600">遺伝の影響：</strong>親の歯並びがガタガタの場合、お子様も同様の傾向を持つ可能性が高いです。ただし、早期治療で顎を拡大することで改善が可能です。
                  </p>
                </div>
              </div>
            </div>

            {/* 環境的要因 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 mb-6">
              <h3 className="text-2xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm">2</span>
                環境的要因（後天的な要因）
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">軟らかい食事：</strong>よく噛まない食生活が顎の発育不足を招きます</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口呼吸：</strong>口呼吸により上顎の成長が阻害され、歯が並ぶスペースが不足します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">乳歯の早期喪失：</strong>乳歯を虫歯で早く失うと、永久歯の生えるスペースが確保できません</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">指しゃぶり：</strong>3歳以降も続く指しゃぶりは、歯列を狭めることがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">舌の位置：</strong>低い舌の位置は上顎の成長を妨げます</span>
                  </li>
                </ul>
                <div className="bg-yellow-50 p-5 rounded-lg mt-4 border-l-4 border-yellow-400">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-yellow-600">予防のポイント：</strong>よく噛む食事、鼻呼吸の確立、乳歯の虫歯予防が重要です。これらを心がけることで、顎の正常な成長を促し、叢生の予防につながります。
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
                1期治療（7〜12歳頃）
              </h3>
              <div className="space-y-4 text-[#8D8070] leading-relaxed">
                <p className="text-[#5A4D41] font-semibold mb-4">
                  成長期を利用した顎の拡大が中心です。早期治療により抜歯を回避できる可能性が高まります。
                </p>
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">急速拡大装置：</strong>上顎を短期間で効率的に拡大し、永久歯のスペースを確保します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">拡大床装置：</strong>取り外し式の装置で顎を緩やかに拡大します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">リンガルアーチ：</strong>歯が内側に倒れるのを防ぎ、スペースを維持します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">口腔筋機能療法（MFT）：</strong>舌の位置や口の周りの筋肉を改善し、顎の成長を促します</span>
                  </li>
                </ul>
                <div className="bg-[#E8F2ED] p-5 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41]">
                    <strong className="text-[#395b45]">1期治療の目標：</strong>永久歯が生えるスペースを確保し、抜歯をせずに治療できる基盤を作ることです。早期治療により、2期治療が簡単になるか、不要になることもあります。
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
                    <span><strong className="text-[#5A4D41]">マルチブラケット装置：</strong>歯を正確に移動させて、きれいな歯並びを作ります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#395b45] mt-1 flex-shrink-0">✓</span>
                    <span><strong className="text-[#5A4D41]">マウスピース矯正：</strong>透明なマウスピースで目立たずに治療可能です</span>
                  </li>
                </ul>
                <div className="bg-[#FAF8F5] p-4 rounded-lg mt-4">
                  <p className="text-sm text-[#5A4D41] font-semibold mb-2">※スペースが不足する場合の対処</p>
                  <ul className="space-y-2 ml-4 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[#8D8070] mt-1">•</span>
                      <span><strong className="text-[#5A4D41]">IPR（ストリッピング）：</strong>歯を僅かに削ってスペースを作る方法</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#8D8070] mt-1">•</span>
                      <span><strong className="text-[#5A4D41]">抜歯：</strong>スペースが大幅に不足する場合、小臼歯を抜歯することがあります</span>
                    </li>
                  </ul>
                </div>
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
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">急速拡大装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">上顎を短期間で効率的に拡大する固定式装置。最も効果的です。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">拡大床装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">取り外し式の装置で顎を緩やかに拡大します。違和感が少ないです。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">クワドヘリックス</h4>
                  <p className="text-sm text-[#8D8070] mb-2">上顎をゆっくり拡大する固定式装置。取り外しの必要がありません。</p>
                  <p className="text-xs text-[#E67A2E] font-semibold">1期治療</p>
                </div>
                <div className="bg-[#FAF8F5] p-6 rounded-xl border-2 border-[#E67A2E]/20">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">ブラケット装置</h4>
                  <p className="text-sm text-[#8D8070] mb-2">歯の表面に装着し、正確に歯を動かします。仕上げに使用します。</p>
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
                      <p className="text-[#8D8070] text-sm">1〜2年程度<br /><span className="text-xs">（拡大に3〜6ヶ月、その後の経過観察を含む）</span></p>
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
                    <span>理想的な開始時期：7〜10歳</span>
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    叢生の治療は、<strong className="text-[#E67A2E]">永久歯の前歯と6歳臼歯が生えた7〜10歳頃が最も効果的</strong>です。この時期に顎を拡大することで、永久歯の生えるスペースを確保し、抜歯せずに治療できる可能性が高まります。
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>顎の成長を利用して効果的に拡大できる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>抜歯を回避できる可能性が高まる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>永久歯のスペースを確保できる時期</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#8D8070]">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span>2期治療が簡単になる、または不要になる可能性</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  <h4 className="font-bold text-[#5A4D41] mb-3">7歳での矯正相談を推奨</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed">
                    叢生は最も多い不正咬合です。7歳頃に矯正歯科で検診を受けることで、叢生の有無を確認し、適切な治療開始時期を見逃さずに済みます。早期発見が抜歯を回避するための鍵です。
                  </p>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400">
                  <h4 className="font-bold text-[#5A4D41] mb-3">12歳以降でも治療可能</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed">
                    成長期を過ぎてしまった場合でも、マルチブラケット装置やマウスピース矯正で治療可能です。ただし、スペースが大幅に不足する場合は、抜歯が必要になることがあります。早期治療の方が選択肢が広がります。
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
                    <h3 className="font-bold text-[#5A4D41] text-lg">叢生は抜歯しないと治せませんか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 早期治療で顎を拡大すれば、抜歯せずに治療できる可能性が高まります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">早期治療（7〜10歳）：</strong>顎を拡大してスペースを確保し、抜歯を回避</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">成長後の治療：</strong>重度の場合、スペース確保のため抜歯が必要になることがあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">IPR（ストリッピング）：</strong>歯を僅かに削ってスペースを作る方法もあります</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    できるだけ早い時期に矯正相談を受けることで、抜歯を回避できる可能性が高まります。
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">八重歯は直した方がいいですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、八重歯も叢生の一種であり、早期治療をお勧めします。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">機能面の問題：</strong>犬歯は重要な歯で、正しい位置にないと咬合に影響します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">歯磨きの問題：</strong>八重歯の周りは磨きにくく、虫歯や歯周病のリスクが高まります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">見た目の問題：</strong>将来的にコンプレックスになることがあります</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    日本では八重歯を「かわいい」と捉える文化がありますが、機能面や健康面を考えると治療することをお勧めします。
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">急速拡大装置は痛いですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 痛みはほとんどなく、主に圧迫感や違和感程度です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">拡大時の圧迫感：</strong>ネジを回した直後に圧迫感を感じます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">持続時間：</strong>圧迫感は数時間〜1日程度で治まります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">効果的：</strong>短期間で顎を拡大できる最も効果的な方法です</span>
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
                    <h3 className="font-bold text-[#5A4D41] text-lg">永久歯が生え揃ってからでも拡大できますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 10代前半までは拡大可能ですが、年齢とともに難しくなります。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">7〜10歳：</strong>顎の成長が活発で、最も効果的に拡大できます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">11〜14歳：</strong>まだ拡大可能ですが、効果が徐々に低下します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">15歳以降：</strong>骨の縫合線が閉じ始め、通常の拡大は困難になります</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    早ければ早いほど選択肢が広がります。気になったらすぐに相談することをお勧めします。
                  </p>
                </div>
              </div>

              {/* Q5 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q5</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">治療期間はどれくらいですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> 叢生の程度によりますが、1期治療で1〜2年、2期治療で1.5〜2.5年程度です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">軽度の叢生：</strong>1期治療のみで終了できることもあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">中度〜重度の叢生：</strong>1期治療と2期治療の両方が必要です</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">早期治療のメリット：</strong>2期治療が簡単・短期間になることがあります</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    初回診査で叢生の程度を確認し、予想される治療期間をご説明いたします。
                  </p>
                </div>
              </div>

              {/* Q6 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">Q6</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">叢生は遺伝しますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#E67A2E]">A.</strong> はい、顎の大きさや歯の大きさは遺伝するため、叢生になりやすい傾向は遺伝します。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">顎の大きさ：</strong>小さい顎は遺伝しやすいです</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">歯の大きさ：</strong>大きい歯も遺伝します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#395b45] mt-1">✓</span>
                      <span><strong className="text-[#5A4D41]">予防：</strong>遺伝的な要因があっても、早期治療で改善できます</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    親の歯並びがガタガタの場合、お子様も7歳頃に矯正検診を受けることをお勧めします。早期発見・早期治療が重要です。
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-4">お子様の歯並びがガタガタで気になりませんか？</h2>
                <p className="text-lg md:text-xl text-[#8D8070] leading-relaxed">
                  叢生（ガタガタの歯並び）は早期治療で抜歯を回避できる可能性があります。<br />
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
