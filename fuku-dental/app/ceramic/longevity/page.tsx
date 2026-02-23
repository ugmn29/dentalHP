import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import {
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'セラミック治療の寿命・耐久性｜何年持つ？長持ちさせる方法｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲の歯医者 F歯科がセラミック治療の寿命を解説。インレー、クラウン、ベニアの寿命と、長持ちさせるためのケア方法を詳しくご紹介します。',
  keywords: 'セラミック,寿命,耐久性,何年,持つ,長持ち,ケア方法,メンテナンス',
  openGraph: {
    title: 'セラミック治療の寿命・耐久性｜何年持つ？長持ちさせる方法｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'セラミック治療の寿命を解説。インレー、クラウン、ベニアの寿命と、長持ちさせるためのケア方法をご紹介。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/ceramic/longevity',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function CeramicLongevityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#C5A572] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/ceramic" className="hover:text-[#C5A572]">
                セラミック治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572]">寿命・耐久性</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                セラミック治療の寿命・耐久性
              </h1>
              <PageImage path="/ceramic/longevity" alt="セラミック治療の寿命・耐久性" />
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                何年持つ？長持ちさせる秘訣とは
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                豊洲の歯科 F歯科が解説｜適切なケアで10年以上使い続けることも可能です
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* 結論 */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                結論
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
                <p>
                  セラミック治療の平均寿命は<span className="bg-yellow-100 font-bold">7〜10年</span>です。
                  ただし、これはあくまで平均で、適切なケアとメンテナンスを行えば<span className="bg-yellow-100 font-bold">15年以上</span>使い続けることも珍しくありません。
                </p>
                <p>
                  寿命は、<span className="font-bold">使用する材料、治療部位、日々のケア、定期検診の有無</span>によって大きく変わります。
                  特に<span className="text-[#2E8B57] font-bold">ジルコニアは耐久性が高く、最も長持ちする材料</span>として知られています。
                </p>
              </div>
            </div>

            {/* タイプ別の平均寿命 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">タイプ別の平均寿命</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* インレー・アンレー */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    インレー・アンレー（詰め物・部分的な被せ物）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      平均寿命は<span className="bg-yellow-100 font-bold">5〜10年</span>です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">材料別の寿命：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">ジルコニア：</span>8〜12年</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">e.max（オールセラミック）：</span>7〜10年</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">ハイブリッドセラミック：</span>5〜7年</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>長持ちのポイント：</strong>奥歯は咬合力が強いため、ジルコニアがおすすめです。
                      </p>
                    </div>
                  </div>
                </div>

                {/* クラウン */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    クラウン（被せ物・全体を覆う）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      平均寿命は<span className="bg-yellow-100 font-bold">7〜15年</span>です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">材料別の寿命：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">ジルコニア：</span>10〜15年（最長）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">e.max（オールセラミック）：</span>8〜12年</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">メタルボンド：</span>7〜10年</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">ハイブリッドセラミック：</span>5〜8年</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>長持ちのポイント：</strong>クラウンはインレーより接着面積が広く、安定性が高いです。
                      </p>
                    </div>
                  </div>
                </div>

                {/* ラミネートベニア */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    ラミネートベニア（前歯専用の薄いセラミック）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      平均寿命は<span className="bg-yellow-100 font-bold">5〜10年</span>です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">特徴：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>薄いため衝撃に弱い</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>適切なケアで10年以上も可能</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯ぎしりや食いしばりに注意が必要</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>長持ちのポイント：</strong>マウスピース着用で寿命が大幅に延びます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 参考：銀歯の寿命 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    参考：銀歯の寿命（保険診療の金属冠）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      平均寿命は<span className="bg-yellow-100 font-bold">3〜5年</span>です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">銀歯が劣化しやすい理由：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>金属の腐食による劣化</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>セメントの溶解による隙間形成</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>二次虫歯のリスクが高い</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <p className="text-sm">
                        <strong className="text-[#2E8B57]">セラミックとの比較：</strong>
                        セラミックは銀歯の<span className="font-bold text-[#2E8B57]">2〜3倍長持ち</span>します。
                        長期的なコストパフォーマンスを考えると、セラミックの方が経済的です。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 寿命に影響する5つの要因 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">寿命に影響する5つの要因</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* 要因1 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    1. 使用する材料の種類
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="bg-yellow-100">ジルコニア &gt; e.max &gt; メタルボンド &gt; ハイブリッドセラミック</span>の順で耐久性が高くなります。
                      ジルコニアは「白いダイヤモンド」と呼ばれるほど硬く、最も長持ちします。
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                      <p className="text-sm">
                        <strong>推奨：</strong>長期的に使用したい場合は、初期投資は高くてもジルコニアを選ぶことをおすすめします。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 要因2 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    2. 治療部位（前歯 vs 奥歯）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      奥歯は前歯の約<span className="bg-yellow-100 font-bold">3〜4倍の咬合力</span>がかかります。
                      そのため、同じ材料でも奥歯の方が寿命が短くなる傾向があります。
                      奥歯には強度の高いジルコニアが最適です。
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                        <p className="font-bold mb-2">前歯</p>
                        <p className="text-sm">
                          審美性重視でe.maxも最適です。咬合力が弱いため長持ちしやすい傾向があります。
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                        <p className="font-bold mb-2">奥歯</p>
                        <p className="text-sm">
                          強度重視でジルコニア推奨。咬合力が強いため強度が必要です。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 要因3 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    3. 日々のケア（歯磨き・フロス）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      セラミック自体は虫歯になりませんが、<span className="bg-yellow-100">セラミックと歯の境目に汚れが溜まると、そこから二次虫歯が発生</span>し、セラミックを作り直すことになります。
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                      <p className="font-bold mb-2">毎日のケアポイント</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>1日2〜3回の歯磨き</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>フロスや歯間ブラシで隙間をケア</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>研磨剤の強い歯磨き粉は避ける</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>柔らかめの歯ブラシを使用</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 要因4 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    4. 歯ぎしり・食いしばりの有無
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      就寝中の歯ぎしりは、<span className="bg-yellow-100 font-bold">日中の咬合力の2〜3倍の力</span>がかかります。
                      これがセラミックの破損や欠けの最大の原因です。
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                      <p className="font-bold mb-2">対策</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">ナイトガード（マウスピース）の着用：</span>歯ぎしりの力からセラミックを守ります</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">ストレス管理：</span>歯ぎしりの原因となるストレスを減らす</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 要因5 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    5. 定期検診の受診状況
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="bg-yellow-100 font-bold">3〜6ヶ月ごとの定期検診</span>で、小さな問題を早期発見できます。
                      定期検診を受けている人と受けていない人では、セラミックの寿命に2〜3年の差が出るというデータもあります。
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                      <p className="font-bold mb-2">定期検診でチェックすること</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>セラミックの欠けや亀裂の有無</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>セラミックと歯の境目の虫歯チェック</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>噛み合わせの確認と調整</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>プロフェッショナルクリーニング</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* セラミックを長持ちさせる7つの方法 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">セラミックを長持ちさせる7つの方法</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    1. 毎食後の歯磨き
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    食後30分以内に歯を磨くことで、セラミックと歯の境目に汚れが溜まるのを防ぎます。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>ポイント：</strong>柔らかめの歯ブラシで優しく磨く
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    2. フロス・歯間ブラシの使用
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    歯ブラシだけでは届かない歯と歯の間をケアします。1日1回、就寝前が最適です。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>ポイント：</strong>セラミックを傷つけないよう優しく
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    3. 硬いものを噛むのを避ける
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    氷、硬いナッツ、骨付き肉などの極端に硬いものは、セラミックが欠ける原因になります。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>注意：</strong>フランスパンの端なども要注意
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    4. ナイトガード（マウスピース）の着用
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    歯ぎしりや食いしばりの癖がある方は、就寝時にマウスピースを着用することで、セラミックを守ります。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>効果：</strong>寿命が2〜3年延びることも
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    5. 3〜6ヶ月ごとの定期検診
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    プロによるチェックとクリーニングで、小さな問題を早期発見・早期対処できます。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>重要：</strong>保証の条件にもなっています
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    6. 研磨剤の強い歯磨き粉を避ける
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    ホワイトニング歯磨き粉などの研磨剤が強いものは、セラミック表面に細かい傷をつけることがあります。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>推奨：</strong>低研磨or研磨剤不使用の歯磨き粉
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    7. 異変を感じたらすぐ受診
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    痛み、違和感、浮いた感じなどがあれば、すぐに歯科医院を受診しましょう。早期対処で大事に至らずに済みます。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>注意：</strong>放置すると二次虫歯のリスク
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#C5A572]/30">
                  <p className="text-[#5A4D41] leading-loose font-bold text-center">
                    <span className="text-[#2E8B57]">これらを実践すれば15年以上も可能！</span><br />
                    <span className="font-normal text-sm mt-2 block">
                      上記の7つの方法を実践することで、セラミックの寿命を大幅に延ばすことができます。
                      特に定期検診とナイトガードは効果が高く、多くの患者様が15年以上使い続けています。
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* こんな症状は要注意 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">こんな症状は要注意</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                <p className="text-[#8D8070] mt-4">すぐに歯科医院を受診してください</p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-500">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-2">セラミックが欠けた・割れた</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    小さな欠けでも放置すると、そこから虫歯になったり、割れが広がったりします。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-500">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-2">浮いた感じ・ガタつき</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    セラミックが外れかかっている可能性があります。完全に外れる前に再接着が必要です。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-500">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-2">痛みや違和感</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    セラミックの下で虫歯が進行している可能性があります。早期発見が重要です。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-500">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-2">食べ物が詰まりやすくなった</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    セラミックと歯の間に隙間ができている可能性があります。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-red-500">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-2">噛み合わせが変わった気がする</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    周囲の歯の移動や、セラミックの摩耗が考えられます。調整が必要です。
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200">
                  <p className="font-bold text-[#5A4D41] mb-2">早期発見・早期治療が寿命を延ばす鍵</p>
                  <p className="text-[#5A4D41] leading-loose">
                    上記のような症状があれば、すぐに当院にご連絡ください。
                    早めに対処すれば、セラミックを作り直すことなく修理で済むケースも多くあります。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-6 md:py-6 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">寿命に関するよくある質問</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">セラミックは一生持ちますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 残念ながら、セラミックは一生持つものではありません。
                      適切なケアを行っても、いずれは交換が必要になります。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      ただし、15年以上使い続けている患者様も多くいらっしゃいます。
                      日々のケアと定期検診を続けることで、できるだけ長く使い続けることが可能です。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">セラミックの寿命が来たらどうなりますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 寿命が来ると、以下のような症状が現れます：
                    </p>
                    <ul className="space-y-2 mb-3 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">•</span>
                        <span>セラミックと歯の境目から虫歯ができる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">•</span>
                        <span>セラミックが欠ける・割れる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">•</span>
                        <span>セラミックが外れる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">•</span>
                        <span>噛み合わせが変わる</span>
                      </li>
                    </ul>
                    <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                      このような症状が出たら、セラミックを作り直す必要があります。
                      定期検診で早めに発見できれば、大きなトラブルになる前に対処できます。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">セラミックの寿命を延ばすために最も重要なことは？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 定期検診とナイトガード（マウスピース）の2つが最も重要です。
                    </p>
                    <p className="mb-3">
                      定期検診では、小さな問題を早期発見でき、セラミックを長持ちさせるための専門的なアドバイスが受けられます。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      ナイトガードは、歯ぎしりや食いしばりからセラミックを守り、寿命を2〜3年延ばすことができます。
                      この2つを実践している患者様は、15年以上使い続けているケースが多いです。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">銀歯からセラミックに替えるメリットは？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 寿命の観点では、セラミックは銀歯の2〜3倍長持ちします。
                    </p>
                    <p className="mb-3">
                      銀歯の平均寿命は3〜5年ですが、セラミックは7〜15年です。
                      また、セラミックは以下の点でも優れています：
                    </p>
                    <ul className="space-y-2 mb-3 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E8B57] mt-1">•</span>
                        <span>審美性が高い（白く自然）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E8B57] mt-1">•</span>
                        <span>虫歯になりにくい（接着性が高い）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E8B57] mt-1">•</span>
                        <span>金属アレルギーの心配がない</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#2E8B57] mt-1">•</span>
                        <span>歯茎が黒ずまない</span>
                      </li>
                    </ul>
                    <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                      長期的なコストパフォーマンスを考えると、セラミックの方が経済的です。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">保証期間と寿命の違いは？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 保証期間は、通常の使用で破損した場合に無料で修理・交換する期間です。
                      当院では2〜5年の保証をつけています。
                    </p>
                    <p className="mb-3">
                      寿命は、セラミックが実際に使える期間で、7〜15年が平均です。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      つまり、保証期間が過ぎた後も、適切にケアすれば長く使い続けることができます。
                      ただし、保証を受けるには定期検診の受診が条件となります。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">セラミックが欠けたら全部作り直しですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 小さな欠けであれば、研磨や修復で対応できる場合があります。
                      全部作り直す必要があるかどうかは、欠けの大きさと場所によります。
                    </p>
                    <p className="mb-3">
                      早めに受診すれば、修理で済むケースも多いです。
                      欠けを放置すると、そこから虫歯になったり、割れが広がったりするため、
                      すぐに歯科医院を受診してください。
                    </p>
                    <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                      なお、保証期間内であれば、無料で修理・交換が可能です（定期検診を受けていることが条件）。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">関連ページ</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/ceramic" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">セラミック治療TOP</h3>
                  <p className="text-[#8D8070] mb-4">
                    セラミック治療の概要と特徴
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/ceramic/cost" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">費用・料金</h3>
                  <p className="text-[#8D8070] mb-4">
                    セラミック治療の費用について
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/ceramic/vs-metal" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">銀歯との比較</h3>
                  <p className="text-[#8D8070] mb-4">
                    セラミック vs 銀歯の違い
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                長持ちするセラミック治療を
              </h2>
              <p className="text-xl mb-8 text-white/90">
                当院では、治療後のメンテナンスもしっかりサポート<br />
                定期検診でセラミックを長持ちさせます
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                >
                  無料相談を予約する
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
                <Link
                  href="tel:0312345678"
                  className="inline-flex items-center justify-center bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white"
                >
                  電話で相談する
                </Link>
              </div>
            </div>
          </div>
        </section>
                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>
            </main>
      <Footer />
    </>
  );
}
