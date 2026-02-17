import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import {
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight,
  Heart,
  Shield,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '静脈内鎮静法（セデーション）｜手術が怖い方へ｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '静脈内鎮静法は、点滴から鎮静剤を投与し、リラックスした状態で手術を受けられる方法です。麻酔専門医が管理するため安全性が高く、痛みや不安を最小限に抑えられます。',
  keywords: '静脈内鎮静法,セデーション,無痛治療,麻酔専門医,インプラント手術,歯科恐怖症',
};

export default function IVSedationPage() {
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
              <span className="text-[#395b45]">静脈内鎮静法</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                静脈内鎮静法（セデーション）
              </h1>
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                眠っているような感覚で治療を受けられる
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                手術が怖い・不安な方へ、麻酔専門医による安心の無痛治療
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
                  静脈内鎮静法とは、<span className="bg-yellow-100 font-bold">点滴から鎮静剤を投与し、うとうとした半睡眠状態で治療を受けられる方法</span>です。
                </p>
                <p>
                  <span className="text-[#395b45] font-bold">痛みや恐怖心を感じることなく</span>、リラックスした状態で手術を受けられるため、歯科治療に不安がある方に最適です。
                </p>
              </div>
            </div>

            {/* 静脈内鎮静法とは */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">静脈内鎮静法とは</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 mb-8">
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    腕の静脈から<span className="bg-yellow-100 font-bold">鎮静剤を点滴で投与</span>し、意識はありながらも<span className="font-bold">リラックスした半睡眠状態</span>を作り出す麻酔法です。
                  </p>
                  <p>
                    全身麻酔とは異なり完全に意識を失うことはありませんが、<span className="font-bold">不安や恐怖を感じにくく、時間感覚もぼんやり</span>するため、長時間の治療もあっという間に感じられます。
                  </p>
                </div>
              </div>

              {/* 全身麻酔との違い */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 md:p-8 border border-blue-200">
                <h4 className="text-lg font-bold text-[#2d4835] mb-4">全身麻酔との違い</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg">
                    <p className="font-bold text-[#2d4835] mb-2">全身麻酔</p>
                    <ul className="text-sm space-y-1 text-[#5A4D41]">
                      <li>• 完全に意識がなくなる</li>
                      <li>• 自発呼吸ができない</li>
                      <li>• 入院が必要な場合が多い</li>
                      <li>• 身体への負担が大きい</li>
                    </ul>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                    <p className="font-bold text-[#2d4835] mb-2">静脈内鎮静法</p>
                    <ul className="text-sm space-y-1 text-[#5A4D41]">
                      <li>• 意識は残る（声かけに反応できる）</li>
                      <li>• 自分で呼吸ができる</li>
                      <li>• 日帰りで治療可能</li>
                      <li>• 身体への負担が少ない</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* メリット */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block flex items-center gap-3 justify-center">
                  <Heart className="w-8 h-8 text-green-600" />
                  静脈内鎮静法のメリット
                </h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">① 不安や恐怖心がなくなる</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    鎮静剤の効果で<span className="bg-yellow-100 font-bold">精神的にとてもリラックス</span>した状態になります。歯科治療への恐怖心が強い方でも、安心して治療を受けられます。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">② 痛みを感じにくい</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    リラックスした状態で局所麻酔を行うため、<span className="bg-yellow-100 font-bold">麻酔の注射の痛みも感じにくく</span>なります。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">③ 時間が経つのが早く感じる</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    うとうとした状態のため、<span className="font-bold">長時間の治療もあっという間</span>に終わったように感じられます。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">④ 治療の記憶があまり残らない</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    鎮静剤には<span className="font-bold">健忘効果</span>があり、治療中の記憶があまり残りません。そのため、治療後のトラウマにもなりにくいです。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">⑤ 嘔吐反射を抑えられる</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    <span className="bg-yellow-100 font-bold">オエっとなりやすい方</span>でも、鎮静効果により嘔吐反射が抑えられます。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <h4 className="text-lg font-bold text-[#2d4835]">⑥ 身体への負担が少ない</h4>
                  </div>
                  <p className="text-[#5A4D41] leading-loose ml-9">
                    全身麻酔と比べて<span className="font-bold">身体への負担が少なく、回復も早い</span>ため、日帰りで治療が可能です。
                  </p>
                </div>
              </div>
            </div>

            {/* 当院の静脈内鎮静法の特徴 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block flex items-center gap-3 justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                  当院の静脈内鎮静法の特徴
                </h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-8">
                <div className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-200">
                  <h4 className="text-xl font-bold text-[#2d4835] mb-4">麻酔専門医が担当</h4>
                  <div className="space-y-3 text-[#5A4D41] leading-loose">
                    <p>
                      当院では、<span className="bg-yellow-100 font-bold">麻酔専門医が静脈内鎮静法を担当</span>します。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>麻酔の深さを常にモニタリング</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>患者様一人ひとりに合わせた薬剤量の調整</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>緊急時の対応も万全</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 md:p-8 border border-green-200">
                  <h4 className="text-xl font-bold text-[#2d4835] mb-4">生体モニター完備</h4>
                  <div className="space-y-3 text-[#5A4D41] leading-loose">
                    <p>
                      治療中は<span className="bg-yellow-100 font-bold">生体モニターで常に全身状態を監視</span>します。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>血圧・心拍数・酸素飽和度を常時測定</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                        <span>異常があればすぐに対応可能</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 治療の流れ */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">治療の流れ</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-3">STEP 1：術前準備</h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    生体モニターを装着し、血圧・心拍数・酸素飽和度を測定します。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>注意：</strong>治療前は食事制限があります（治療2時間前からは飲食禁止）
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-3">STEP 2：点滴開始</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    腕の静脈に点滴を入れ、鎮静剤を投与します。数分で眠気を感じ始めます。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-3">STEP 3：鎮静状態の確認</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    適切な鎮静レベルに達したら、局所麻酔を行い、治療を開始します。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-3">STEP 4：治療中</h4>
                  <p className="text-[#5A4D41] leading-loose">
                    うとうとした半睡眠状態で治療を受けます。声かけには反応できますが、記憶はあまり残りません。
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="text-lg font-bold text-[#2d4835] mb-3">STEP 5：覚醒・リカバリー</h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    治療終了後、点滴を止めると10〜15分程度で目が覚めます。リカバリールームで30分〜1時間ほど休息します。
                  </p>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>帰宅時の注意：</strong>当日は車の運転ができません。必ずご家族の付き添いをお願いします。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* こんな方におすすめ */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">こんな方におすすめ</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <ul className="space-y-3 text-[#5A4D41]">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>歯科治療に強い恐怖心がある</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>過去の歯科治療でトラウマがある</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>インプラント手術が不安</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>嘔吐反射が強い</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>長時間口を開けているのが辛い</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span>パニック障害がある</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h4 className="font-bold text-[#2d4835] mb-4">適応が難しい方</h4>
                  <ul className="space-y-3 text-[#5A4D41]">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span>重度の心臓病・呼吸器疾患がある方</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span>妊娠中・授乳中の方</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span>アレルギー体質の方（要相談）</span>
                    </li>
                  </ul>
                  <p className="text-sm mt-4 text-gray-600">
                    ※ 詳しくは事前のカウンセリングでご相談ください
                  </p>
                </div>
              </div>
            </div>

            {/* 費用 */}
            <div className="mb-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-[#2d4835] mb-6 text-center">静脈内鎮静法の費用</h3>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p className="text-center">
                  <span className="text-2xl font-bold text-[#2d4835]">55,000円〜77,000円</span>
                  <span className="text-sm ml-2">（税込）</span>
                </p>
                <p className="text-sm text-center">
                  ※ 治療時間により変動します<br />
                  ※ インプラント治療費とは別途かかります
                </p>
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
                  href="/implant/flow"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">治療の流れ</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/safety"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">安全性へのこだわり</span>
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
