import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import {
  Monitor,
  Shield,
  Award,
  Sparkles,
  Heart,
  AlertTriangle,
  Phone,
  CheckCircle2,
  ArrowRight,
  Target,
  Siren,
  Clock,
  Home,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラントの安全性へのこだわり | インプラント | F歯科・矯正歯科 豊洲プライムスクエア院',
  description:
    'F歯科・矯正歯科 豊洲プライムスクエア院のインプラント治療における安全性への取り組み。CT精密診断、サージカルガイド、世界基準のストローマンインプラント、徹底した感染対策、静脈内鎮静法など、安心・安全な治療体制をご紹介します。',
  keywords:
    'インプラント,安全性,CT診断,サージカルガイド,ストローマン,感染対策,静脈内鎮静法,歯科,インプラントリスク',
  openGraph: {
    title: 'インプラントの安全性へのこだわり | F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'CT精密診断、サージカルガイド、ストローマンインプラント、徹底した感染対策、静脈内鎮静法など、安心・安全な治療体制をご紹介。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/implant/safety',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function ImplantSafetyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#395b45] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/implant" className="hover:text-[#395b45]">
                インプラント
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#395b45]">安全性へのこだわり</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                安全性へのこだわり
              </h1>
              <PageImage path="/implant/safety" alt="インプラントの安全性へのこだわり" />
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                精密な診断と徹底した管理体制で安心の治療を
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                患者様の安全を第一に考えた、当院の取り組みをご紹介します
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>

            {/* 結論 */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d4835] mb-8 font-serif">
                結論
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
                <p>
                  インプラント治療の安全性を高めるため、当院では<span className="bg-yellow-100 font-bold">歯科用3D CTによる精密診断</span>、<span className="bg-yellow-100 font-bold">サージカルガイドを用いた正確な手術</span>、<span className="bg-yellow-100 font-bold">世界トップシェアのストローマンインプラント</span>を採用しています。
                </p>
                <p>
                  また、<span className="text-[#395b45] font-bold">徹底した滅菌・感染対策</span>と<span className="text-[#395b45] font-bold">静脈内鎮静法による痛み・不安の軽減</span>により、患者様が安心して治療を受けられる環境を整えています。
                </p>
                <p>
                  万が一のトラブルにも<span className="font-bold">10年保証と24時間緊急対応体制</span>で対応し、長期的に安心してインプラントをお使いいただけます。
                </p>
              </div>
            </div>

            {/* Section 1: CT精密診断 */}
            <div className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#395b45]/10 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-[#395b45]" />
              </div>
              <span className="text-sm font-semibold text-[#C5A572] tracking-wider">01</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3 mt-3">
              CTによる精密診断
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              3次元データに基づく正確な診断が、安全な手術の第一歩です。
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#FDFBF7] rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-[#2d4835] mb-4">
                  歯科用3D CTで見える情報
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: '神経・血管の位置',
                      desc: '下顎を通る下歯槽神経の正確な位置を把握し、損傷リスクを回避します。',
                    },
                    {
                      title: '骨の密度・厚み',
                      desc: 'インプラントを支えるのに十分な骨量があるかを精密に測定します。',
                    },
                    {
                      title: '上顎洞の形態',
                      desc: '上顎のインプラントに重要な上顎洞（副鼻腔）との距離を確認します。',
                    },
                    {
                      title: '隣在歯の状態',
                      desc: '周囲の歯や歯根の位置関係を3次元的に評価します。',
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#395b45] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#2d4835] text-sm">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#FDFBF7] rounded-2xl p-6 md:p-8 border border-gray-100">
                <h3 className="text-lg font-bold text-[#2d4835] mb-4">
                  コンピューターシミュレーション
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  CTデータを専用ソフトウェアに取り込み、コンピューター上でインプラントの埋入シミュレーションを行います。
                  最適な位置・角度・深さを事前に決定し、手術計画を精密に立案します。
                </p>
                <div className="bg-white rounded-xl p-4 border border-[#395b45]/10">
                  <p className="text-sm font-semibold text-[#395b45] mb-2">
                    シミュレーションのメリット
                  </p>
                  <ul className="space-y-2">
                    {[
                      '最適なインプラント埋入位置の決定',
                      '骨造成の必要性の判断',
                      'サージカルガイドの設計データ作成',
                      '術前に手術手順を確認・共有',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#395b45] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: サージカルガイド */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#395b45]/10 flex items-center justify-center">
                <Target className="w-6 h-6 text-[#395b45]" />
              </div>
              <span className="text-sm font-semibold text-[#C5A572] tracking-wider">02</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3 mt-3">
              サージカルガイドの活用
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              CAD/CAM技術で設計された精密なガイドが、計画通りの正確な手術を実現します。
            </p>

            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 mb-8">
              <p className="text-sm text-[#5A4D41] leading-relaxed mb-6">
                サージカルガイドとは、CTデータとシミュレーション結果をもとにCAD/CAMで設計・製作されたマウスピース型のガイド装置です。
                手術時に口腔内に装着することで、計画通りの角度・深さ・位置にインプラントを正確に埋入することができます。
              </p>

              <h3 className="text-lg font-bold text-[#2d4835] mb-4">
                フリーハンド手術 vs ガイド手術
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl p-5 border border-gray-200 bg-gray-50">
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-center">フリーハンド手術</h4>
                  <ul className="space-y-2">
                    {[
                      '術者の経験と勘に依存',
                      '角度・深さにブレが生じやすい',
                      '手術時間が長くなる傾向',
                      '侵襲が大きくなる可能性',
                    ].map((item, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-xl p-5 border-2 border-[#395b45] bg-[#395b45]/5">
                  <h4 className="font-bold text-[#395b45] mb-3 text-center flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    ガイド手術（当院採用）
                  </h4>
                  <ul className="space-y-2">
                    {[
                      '計画通りの正確な埋入が可能',
                      '角度・深さ・位置のブレを最小化',
                      '手術時間の短縮',
                      '低侵襲で術後の腫れ・痛みを軽減',
                    ].map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#395b45] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: 世界基準のインプラント体 */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#395b45]/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-[#395b45]" />
              </div>
              <span className="text-sm font-semibold text-[#C5A572] tracking-wider">03</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3 mt-3">
              世界基準のインプラント体
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              世界シェアNo.1のストローマン社製インプラントを採用しています。
            </p>

            <div className="bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] rounded-2xl p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-bold text-[#2d4835] mb-4">
                    Straumann（ストローマン）インプラント
                  </h3>
                  <p className="text-sm text-[#5A4D41] leading-relaxed mb-6">
                    当院では、スイスに本社を置くストローマン社のインプラントシステムを採用しています。
                    ストローマンは世界70カ国以上で使用されている、インプラント市場シェア世界第1位のメーカーです。
                    50年以上にわたる研究開発と豊富な臨床データに裏付けられた、信頼性の高いインプラントです。
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        label: '世界シェア',
                        value: 'No.1',
                        note: '70カ国以上で使用',
                      },
                      {
                        label: '研究実績',
                        value: '50年以上',
                        note: '豊富な臨床論文・エビデンス',
                      },
                      {
                        label: '10年生存率',
                        value: '98.8%',
                        note: '長期臨床データに基づく',
                      },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm"
                      >
                        <div className="text-center min-w-[80px]">
                          <p className="text-xl font-bold text-[#395b45]">{stat.value}</p>
                          <p className="text-xs text-gray-500">{stat.label}</p>
                        </div>
                        <p className="text-sm text-gray-600">{stat.note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-[#2d4835] mb-4">チタンの生体親和性</h4>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    インプラント体に使用される純チタンおよびチタン合金は、生体親和性（バイオコンパチビリティ）に優れた金属です。
                    体内に埋入しても拒絶反応を起こしにくく、顎の骨としっかり結合（オッセオインテグレーション）します。
                  </p>
                  <div className="space-y-3">
                    {[
                      '金属アレルギーが極めて起こりにくい',
                      '人工関節など医療分野で広く使用',
                      '骨との結合力が高く長期安定性に優れる',
                      '腐食に強く体内で安定した状態を維持',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#395b45] mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-600">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: 徹底した感染対策 */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#395b45]/10 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#395b45]" />
              </div>
              <span className="text-sm font-semibold text-[#C5A572] tracking-wider">04</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3 mt-3">
              徹底した感染対策
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              外科手術だからこそ、医療機関レベルの衛生管理を徹底しています。
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: '個別滅菌パック',
                  desc: '患者様ごとに器具を個別に滅菌パックし、使用直前に開封。交差感染を防止します。',
                  icon: '1',
                },
                {
                  title: 'ディスポーザブル',
                  desc: 'グローブ・注射針・メス刃など、使い捨て可能なものはすべてディスポーザブル製品を使用します。',
                  icon: '2',
                },
                {
                  title: 'クラスB滅菌器',
                  desc: 'ヨーロッパ規格EN13060に準拠したクラスB高圧蒸気滅菌器で、あらゆる形状の器具を確実に滅菌します。',
                  icon: '3',
                },
                {
                  title: '清潔な治療環境',
                  desc: '手術専用の診療室を完備。空気清浄や術野の消毒を徹底し、清潔な環境で手術を行います。',
                  icon: '4',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-full bg-[#395b45] text-white flex items-center justify-center text-sm font-bold mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-[#2d4835] mb-2 text-sm">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 5: 静脈内鎮静法 */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#395b45]/10 flex items-center justify-center">
                <Heart className="w-6 h-6 text-[#395b45]" />
              </div>
              <span className="text-sm font-semibold text-[#C5A572] tracking-wider">05</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3 mt-3">
              静脈内鎮静法による安心
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              手術に対する不安や恐怖心が強い方にも安心していただける体制を整えています。
            </p>

            <div className="bg-gradient-to-r from-[#395b45]/5 to-[#395b45]/10 rounded-2xl p-6 md:p-8 border border-[#395b45]/10">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-lg font-bold text-[#2d4835] mb-4">
                    眠っているような状態で手術を受けられます
                  </h3>
                  <p className="text-sm text-[#5A4D41] leading-relaxed mb-4">
                    静脈内鎮静法とは、点滴で鎮静薬を投与し、うとうとと眠っているような状態で手術を受けていただく方法です。
                    全身麻酔とは異なり、意識は完全には失われませんが、手術中の記憶がほとんど残らず、
                    恐怖心や不安を感じることなくリラックスした状態で治療を受けることができます。
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      '麻酔専門の歯科医師が生体モニターで血圧・脈拍・血中酸素濃度を常時監視',
                      '手術中の痛みや恐怖をほとんど感じない',
                      '嘔吐反射（えずき）が強い方にも有効',
                      '手術後は院内で十分に休憩してからご帰宅',
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#395b45] mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/implant/iv-sedation"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#395b45] text-white text-sm font-semibold rounded-full hover:bg-[#2d4835] transition"
                  >
                    静脈内鎮静法について詳しく見る
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-[#2d4835] mb-4 text-center">
                    こんな方におすすめです
                  </h4>
                  <div className="space-y-3">
                    {[
                      '歯科治療に対して強い恐怖心がある方',
                      '過去に歯科治療で気分が悪くなった経験がある方',
                      '嘔吐反射が強く治療が困難な方',
                      '手術時間が長くなるケース（複数本同時埋入など）',
                      'できるだけリラックスした状態で治療を受けたい方',
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 bg-[#FDFBF7] rounded-lg p-3"
                      >
                        <span className="w-6 h-6 rounded-full bg-[#FF9F43] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-sm text-[#5A4D41]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: リスクと対策 */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#FF9F43]/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-[#FF9F43]" />
              </div>
              <span className="text-sm font-semibold text-[#C5A572] tracking-wider">06</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3 mt-3">
              リスクと対策
            </h2>
            <p className="text-gray-500 text-sm mb-4 max-w-2xl">
              インプラント治療に伴うリスクを正直にお伝えし、それぞれに対する当院の対策をご説明します。
            </p>
            <p className="text-sm text-[#5A4D41] leading-relaxed mb-8 max-w-3xl">
              インプラント治療は高い成功率を誇る治療法ですが、外科手術である以上、リスクはゼロではありません。
              当院では、考えられるリスクを事前にしっかりとご説明した上で、それぞれのリスクを最小限に抑えるための対策を講じています。
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  risk: '腫れ・痛み',
                  desc: '手術後に一時的な腫れや痛みが生じることがあります。',
                  measures: [
                    '痛み止め・抗炎症薬の処方で症状をコントロール',
                    '低侵襲手術（フラップレス・ガイド手術）で腫れを最小限に',
                    '術後のアイシング指導',
                  ],
                  severity: '軽度',
                  severityColor: 'bg-green-100 text-green-700',
                },
                {
                  risk: '神経損傷',
                  desc: '下顎のインプラント手術で、下歯槽神経を損傷するリスクがあります。',
                  measures: [
                    'CT撮影で神経の走行を3次元的に把握',
                    'サージカルガイドで計画通りの位置に埋入',
                    '十分な安全マージンを確保した手術計画',
                  ],
                  severity: '対策で回避可能',
                  severityColor: 'bg-blue-100 text-blue-700',
                },
                {
                  risk: 'インプラント周囲炎',
                  desc: 'インプラント周囲の組織に炎症が起き、骨が吸収されるリスクがあります。',
                  measures: [
                    '定期メンテナンス（3〜6ヶ月ごと）での早期発見・対応',
                    '正しいセルフケア方法の指導',
                    '専任歯科衛生士によるプロフェッショナルクリーニング',
                  ],
                  severity: '予防可能',
                  severityColor: 'bg-blue-100 text-blue-700',
                },
                {
                  risk: '骨結合不全',
                  desc: 'インプラントと骨がうまく結合しないケースがまれにあります。',
                  measures: [
                    '発生率は2%未満と非常にまれ',
                    '再手術（再埋入）による対応が可能',
                    '喫煙・糖尿病など骨結合に影響するリスク因子の事前評価',
                  ],
                  severity: '2%未満',
                  severityColor: 'bg-yellow-100 text-yellow-700',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-5 md:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-[#2d4835] flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-[#FF9F43]" />
                        {item.risk}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${item.severityColor}`}
                      >
                        {item.severity}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                    <div className="bg-[#395b45]/5 rounded-lg p-4">
                      <p className="text-xs font-bold text-[#395b45] mb-2 flex items-center gap-1">
                        <Shield className="w-3.5 h-3.5" />
                        当院の対策
                      </p>
                      <ul className="space-y-2">
                        {item.measures.map((measure, j) => (
                          <li
                            key={j}
                            className="text-sm text-gray-700 flex items-start gap-2"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#395b45] mt-0.5 flex-shrink-0" />
                            {measure}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 7: 緊急対応体制 */}
        <div className="mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-[#FF9F43]/10 flex items-center justify-center">
                <Siren className="w-6 h-6 text-[#FF9F43]" />
              </div>
              <span className="text-sm font-semibold text-[#C5A572] tracking-wider">07</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3 mt-3">
              緊急対応体制
            </h2>
            <p className="text-gray-500 text-sm mb-8 max-w-2xl">
              手術後も安心していただけるよう、万全のサポート体制を整えています。
            </p>

            <div className="bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] rounded-2xl p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold text-[#2d4835] mb-4">
                    術後24時間連絡体制
                  </h3>
                  <p className="text-sm text-[#5A4D41] leading-relaxed mb-4">
                    インプラント手術後は、24時間対応可能な緊急連絡先をお伝えしています。
                    術後に予期せぬ出血や強い痛みなどが生じた場合も、すぐにご相談いただけます。
                  </p>
                  <div className="space-y-3">
                    {[
                      {
                        title: '緊急連絡先の提供',
                        desc: '手術当日に、緊急時に直接ご連絡いただける電話番号をお渡しします。',
                      },
                      {
                        title: '術後の注意事項の説明',
                        desc: '食事・入浴・運動・服薬について、わかりやすい書面でご説明します。',
                      },
                      {
                        title: '翌日の経過確認',
                        desc: '手術翌日にお電話またはご来院いただき、経過を確認いたします。',
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#395b45] mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-[#2d4835] text-sm">{item.title}</h4>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#FF9F43] flex items-center justify-center">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">緊急時の連絡</p>
                        <p className="font-bold text-[#2d4835]">24時間対応</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      手術後に気になる症状が出た場合は、時間を問わず緊急連絡先までお電話ください。
                      担当医が対応いたします。
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#395b45] flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">術後フォローアップ</p>
                        <p className="font-bold text-[#2d4835]">手術翌日〜1週間</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      手術翌日の経過確認、1週間後の抜糸と経過観察。
                      回復状況を丁寧に確認しながら、次のステップへ進みます。
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#C5A572] flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">院内緊急プロトコル</p>
                        <p className="font-bold text-[#2d4835]">万全の備え</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      AED・酸素吸入器・緊急薬品を常備。スタッフ全員がBLS（一次救命処置）研修を受講し、
                      緊急時に迅速に対応できる体制を整えています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* 関連ページへのリンク */}
            <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#2d4835] mb-6 text-center">インプラント治療についてもっと詳しく</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/implant/about"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">インプラントとは</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/comparison"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">入れ歯・ブリッジとの比較</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/flow"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">治療の流れ</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/cost"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">費用について</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-4xl">
            <AuthorBio />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
