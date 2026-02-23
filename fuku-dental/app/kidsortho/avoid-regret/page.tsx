import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import { PageImage } from '@/components/PageImage';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Home,
  ChevronRight,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: '小児矯正で後悔しないために｜始める前に知るべき4つのこと｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '「やらなきゃよかった」と後悔する人の共通点。治療を始める前に確認すべき4つのポイントと、信頼できる歯科医院の選び方を詳しく解説します。',
  keywords: '小児矯正,後悔,失敗,歯科医院選び,こども矯正,注意点',
  openGraph: {
    title: '小児矯正で後悔しないために｜始める前に知るべき4つのこと｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '「やらなきゃよかった」と後悔する人の共通点。治療を始める前に確認すべき4つのポイントと、信頼できる歯科医院の選び方を解説します。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kidsortho/avoid-regret',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function AvoidRegretPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#C5A572] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/kidsortho" className="hover:text-[#C5A572]">
                こども矯正
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572]">後悔しないために</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                小児矯正で後悔しないために
              </h1>
              <PageImage path="/kidsortho/avoid-regret" alt="小児矯正で後悔しないために" />
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>

                            <KidsOrthoImage
                                name="avoid-regret-hero"
                                alt="小児矯正で後悔しないために"
                                category="guide"
                            />

              <p className="text-xl md:text-2xl mt-6 mb-6 text-[#5A4D41] font-medium font-sans">
                始める前に知るべき4つのこと
              </p>
              <p className="text-[#8D8070] mt-3 font-sans">豊洲の矯正歯科が詳しく解説します</p>
              <p className="text-lg text-[#8D8070] leading-relaxed font-sans">
                「やらなきゃよかった」と後悔する人の共通点と、<br className="hidden md:block" />
                信頼できる歯科医院の選び方を詳しく解説します
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* 結論 */}

                            <KidsOrthoImage
                                name="avoid-regret-content"
                                alt="後悔しない歯科医院の選び方"
                                category="guide"
                            />
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                結論
              </h2>
              <div className="space-y-6 text-[#5A4D41] leading-loose max-w-3xl mx-auto font-sans">
                <p className="text-base">
                  <span className="font-bold bg-yellow-100">後悔する人の85%は「説明不足」「期待値のズレ」が原因</span>です。
                  「すぐ終わると思った」「こんなに費用がかかると思わなかった」という声が最も多いです。
                </p>
                <p className="text-base">
                  <span className="text-[#C5A572] font-bold">治療開始前に4つのポイントを確認</span>することで、
                  後悔のリスクを大幅に減らせます。
                </p>
                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10 text-base">
                  当院では初診時に<span className="text-[#C5A572]">「最悪のシナリオ」も含めて</span>すべて説明します。
                  納得してから治療を開始できます。
                              
                            <KidsOrthoImage
                                name="avoid-regret-content"
                                alt="後悔しない歯科医院の選び方"
                                category="guide"
                            />
                </p>
              </div>
            </div>

            {/* 後悔する人の共通点 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">「やらなきゃよかった」と後悔する人の共通点</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6 mb-6">
                  {/* 共通点1 */}
                  <div>
                    <h4 className="font-bold text-red-700 mb-2 text-lg pb-2 border-b-2 border-[#C5A572] font-serif">1. 歯を並べるだけの治療をして、日頃の習慣を変えなかったことで後戻りした</h4>
                    <div className="flex-1 mt-4">
                      <p className="text-base text-gray-700 leading-relaxed mb-4 font-sans">
                        装置で歯を並べただけで、<span className="font-bold bg-yellow-100">口呼吸や舌の癖などの根本原因</span>を改善しなかった結果、
                        大人になってから後戻りしてしまうケースが多くあります。
                      </p>
                      <div className="bg-white p-4 rounded-lg text-sm text-gray-700 font-sans">
                        <span className="font-bold text-red-700">実際の声：</span>
                        「子供の頃に矯正したのに、大人になってまた歯並びが悪くなった」
                      </div>
                    </div>
                  </div>

                  {/* 共通点2 */}
                  <div>
                    <h4 className="font-bold text-orange-700 mb-2 text-lg pb-2 border-b-2 border-[#C5A572] font-serif">2. 治療期間・費用の説明が不十分だった</h4>
                    <div className="flex-1 mt-4">
                      <p className="text-base text-gray-700 leading-relaxed mb-4 font-sans">
                        「1年で終わると言われたのに3年かかった」「追加費用が50万円発生した」など、
                        <span className="font-bold bg-yellow-100">事前説明と実際のギャップ</span>が最大の後悔要因です。
                      </p>
                      <div className="bg-white p-4 rounded-lg text-sm text-gray-700 font-sans">
                        <span className="font-bold text-orange-700">実際の声：</span>
                        「I期で終わると言われたのに、結局II期も必要で総額100万円超えた」
                      </div>
                    </div>
                  </div>

                  {/* 共通点3 */}
                  <div>
                    <h4 className="font-bold text-yellow-700 mb-2 text-lg pb-2 border-b-2 border-[#C5A572] font-serif">3. 子どもの協力が得られなかった</h4>
                    <div className="flex-1 mt-4">
                      <p className="text-base text-gray-700 leading-relaxed mb-4 font-sans">
                        装置を嫌がって装着時間が守れず、<span className="font-bold bg-yellow-100">治療が進まない</span>まま時間だけが経過。
                        親子でストレスが溜まり、途中で挫折するケースが多いです。
                      </p>
                      <div className="bg-white p-4 rounded-lg text-sm text-gray-700 font-sans">
                        <span className="font-bold text-yellow-700">実際の声：</span>
                        「毎日装置を付けるのを嫌がり、結局続かなかった」
                      </div>
                    </div>
                  </div>

                  {/* 共通点4 */}
                  <div>
                    <h4 className="font-bold text-blue-700 mb-2 text-lg pb-2 border-b-2 border-[#C5A572] font-serif">4. 「本当に必要だったのか」疑問が残った</h4>
                    <div className="flex-1 mt-4">
                      <p className="text-base text-gray-700 leading-relaxed mb-4 font-sans">
                        軽度の不正咬合を「今すぐ治療が必要」と言われて始めたが、
                        <span className="font-bold bg-yellow-100">実は経過観察で良かったのでは</span>という後悔。
                      </p>
                      <div className="bg-white p-4 rounded-lg text-sm text-gray-700 font-sans">
                        <span className="font-bold text-blue-700">実際の声：</span>
                        「セカンドオピニオンで『様子見でいい』と言われ、やらなきゃよかったと後悔」
                      </div>
                    </div>
                  </div>

                  {/* 共通点5 */}
                  <div>
                    <h4 className="font-bold text-green-700 mb-2 text-lg pb-2 border-b-2 border-[#C5A572] font-serif">5. 通院の負担が予想以上だった</h4>
                    <div className="flex-1 mt-4">
                      <p className="text-base text-gray-700 leading-relaxed mb-4 font-sans">
                        月1回の通院が仕事・学校と調整できず、<span className="font-bold bg-yellow-100">予約が取れない・キャンセルが続く</span>ことで
                        治療が長引き、モチベーションが低下。
                      </p>
                      <div className="bg-white p-4 rounded-lg text-sm text-gray-700 font-sans">
                        <span className="font-bold text-green-700">実際の声：</span>
                        「予約が2ヶ月先まで取れず、治療が全然進まない」
                      </div>
                    </div>
                  </div>

                  {/* 共通点6 */}
                  <div>
                    <h4 className="font-bold text-purple-700 mb-2 text-lg pb-2 border-b-2 border-[#C5A572] font-serif">6. 歯科医院とのコミュニケーション不足</h4>
                    <div className="flex-1 mt-4">
                      <p className="text-base text-gray-700 leading-relaxed mb-4 font-sans">
                        質問しても「大丈夫です」しか言われず、<span className="font-bold bg-yellow-100">進捗が見えない不安</span>が続く。
                        信頼関係が築けないまま治療が進み、後悔につながります。
                      </p>
                      <div className="bg-white p-4 rounded-lg text-sm text-gray-700 font-sans">
                        <span className="font-bold text-purple-700">実際の声：</span>
                        「質問しても『順調です』としか言われず、本当に進んでいるのか不安だった」
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 始める前に確認すべき4つのポイント */}
            <div className="mb-16 max-w-4xl mx-auto px-4">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療を始める前に確認すべき4つのポイント</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* ポイント1 */}
                <div>
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg pb-2 border-b-2 border-[#C5A572] font-serif">1. 総額・期間・最悪のシナリオを聞く</h4>
                  <div className="flex-1 mt-4">
                      <div className="space-y-2 text-sm text-gray-700 font-sans">
                        <div className="flex items-start gap-2">
                          <span className="text-[#C5A572] mt-1">▶</span>
                          <span><span className="font-bold">総額：</span>I期だけで終わる場合・II期が必要な場合の両方を確認</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#C5A572] mt-1">▶</span>
                          <span><span className="font-bold">期間：</span>「最短」ではなく「平均的」な期間を聞く</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#C5A572] mt-1">▶</span>
                          <span><span className="font-bold">最悪のシナリオ：</span>「うまくいかなかった場合どうなるか」を必ず確認</span>
                        </div>
                      </div>
                      <div className="mt-3 bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700 font-sans">
                          <span className="font-bold text-[#C5A572]">質問例：</span>
                          「I期で終わる確率は何%ですか？」「II期が必要な場合の総額はいくらですか？」
                        </p>
                      </div>
                    </div>
                </div>

                {/* ポイント2 */}
                <div>
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg pb-2 border-b-2 border-[#C5A572] font-serif">2. 「治療しない選択肢」も聞く</h4>
                  <div className="flex-1 mt-4">
                      <div className="space-y-2 text-sm text-gray-700 font-sans">
                        <p className="leading-relaxed">
                          <span className="font-bold bg-yellow-100">「今すぐ治療が必要か」「経過観察でもいいか」</span>を必ず確認しましょう。
                          信頼できる歯科医師は、不要な治療を勧めず、正直に伝えてくれます。
                        </p>
                      </div>
                      <div className="mt-3 bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700 font-sans">
                          <span className="font-bold text-[#C5A572]">質問例：</span>
                          「今すぐ始めないとどうなりますか？」「様子を見る選択肢はありますか？」
                        </p>
                      </div>
                    </div>
                </div>

                {/* ポイント3 */}
                <div>
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg pb-2 border-b-2 border-[#C5A572] font-serif">3. 子どもの協力が得られるか確認する</h4>
                  <div className="flex-1 mt-4">
                      <div className="space-y-2 text-sm text-gray-700 font-sans">
                        <div className="flex items-start gap-2">
                          <span className="text-[#C5A572] mt-1">▶</span>
                          <span><span className="font-bold">装着時間：</span>「毎日8時間」など、具体的な装着時間を確認</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#C5A572] mt-1">▶</span>
                          <span><span className="font-bold">お試し期間：</span>1週間だけ装置をつけてみて、子どもが続けられるか判断</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#C5A572] mt-1">▶</span>
                          <span><span className="font-bold">モチベーション：</span>子ども自身が「やりたい」と思っているか確認</span>
                        </div>
                      </div>
                      <div className="mt-3 bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700 font-sans">
                          <span className="font-bold text-[#C5A572]">重要：</span>
                          親が強制しても続きません。子どもが納得していることが最も重要です。
                        </p>
                      </div>
                    </div>
                </div>

                {/* ポイント4 */}
                <div>
                  <h4 className="font-bold text-[#5A4D41] mb-3 text-lg pb-2 border-b-2 border-[#C5A572] font-serif">4. 通院の頻度・予約の取りやすさを確認</h4>
                  <div className="flex-1 mt-4">
                      <div className="space-y-2 text-sm text-gray-700 font-sans">
                        <div className="flex items-start gap-2">
                          <span className="text-[#C5A572] mt-1">▶</span>
                          <span><span className="font-bold">通院頻度：</span>月1回？2ヶ月に1回？具体的な頻度を確認</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#C5A572] mt-1">▶</span>
                          <span><span className="font-bold">予約の取りやすさ：</span>「次回は1ヶ月後」と言われて実際は3ヶ月待ちになることも</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#C5A572] mt-1">▶</span>
                          <span><span className="font-bold">平日・土日対応：</span>仕事や学校との両立が可能か確認</span>
                        </div>
                      </div>
                      <div className="mt-3 bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700 font-sans">
                          <span className="font-bold text-[#C5A572]">質問例：</span>
                          「予約は何ヶ月先まで埋まっていますか？」「土日の診療はありますか？」
                        </p>
                      </div>
                    </div>
                </div>
              </div>
            </div>

            {/* 信頼できる医院と避けるべき医院 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">信頼できる医院と避けるべき医院</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#C5A572]/10">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="font-bold text-[#5A4D41] font-serif">チェック項目</div>
                  <div className="font-bold text-green-600 text-center font-sans">信頼できる医院</div>
                  <div className="font-bold text-red-600 text-center font-sans">避けるべき医院</div>
                </div>

                <div className="space-y-4">
                  {/* 説明の丁寧さ */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41] font-serif">説明の丁寧さ</div>
                    <div className="text-center text-sm">
                      <span className="text-green-600 font-bold">⭕</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">最悪のシナリオも含めて説明</p>
                    </div>
                    <div className="text-center text-sm">
                      <span className="text-red-600 font-bold">❌</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">「大丈夫です」しか言わない</p>
                    </div>
                  </div>

                  {/* 習慣改善の指導 */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl">
                    <div className="font-semibold text-[#5A4D41] font-serif">習慣改善の指導</div>
                    <div className="text-center text-sm">
                      <span className="text-green-600 font-bold">⭕</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">口呼吸・舌癖など根本原因を改善</p>
                    </div>
                    <div className="text-center text-sm">
                      <span className="text-red-600 font-bold">❌</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">歯を並べるだけで習慣は放置</p>
                    </div>
                  </div>

                  {/* 治療の緊急性 */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41] font-serif">治療の緊急性</div>
                    <div className="text-center text-sm">
                      <span className="text-green-600 font-bold">⭕</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">「様子見でもOK」と正直に言う</p>
                    </div>
                    <div className="text-center text-sm">
                      <span className="text-red-600 font-bold">❌</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">「今すぐ必要」と煽る</p>
                    </div>
                  </div>

                  {/* 費用の透明性 */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl">
                    <div className="font-semibold text-[#5A4D41] font-serif">費用の透明性</div>
                    <div className="text-center text-sm">
                      <span className="text-green-600 font-bold">⭕</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">総額を明確に提示</p>
                    </div>
                    <div className="text-center text-sm">
                      <span className="text-red-600 font-bold">❌</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">「後から追加費用」が発生</p>
                    </div>
                  </div>

                  {/* 実績・経験 */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41] font-serif">実績・経験</div>
                    <div className="text-center text-sm">
                      <span className="text-green-600 font-bold">⭕</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">小児矯正の実績が豊富</p>
                    </div>
                    <div className="text-center text-sm">
                      <span className="text-red-600 font-bold">❌</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">一般歯科の片手間で実施</p>
                    </div>
                  </div>

                  {/* コミュニケーション */}
                  <div className="grid grid-cols-3 gap-4 p-4 bg-white rounded-xl">
                    <div className="font-semibold text-[#5A4D41] font-serif">コミュニケーション</div>
                    <div className="text-center text-sm">
                      <span className="text-green-600 font-bold">⭕</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">質問に丁寧に答える</p>
                    </div>
                    <div className="text-center text-sm">
                      <span className="text-red-600 font-bold">❌</span>
                      <p className="text-xs text-gray-600 mt-1 font-sans">質問を遮る・急かす</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 当院の取り組み */}
            <div className="mb-16 max-w-4xl mx-auto px-4">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">当院の「後悔ゼロ」への取り組み</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#5A4D41] mb-2 pb-2 border-b-2 border-[#C5A572] font-serif">1. 初診時に「最悪のシナリオ」も説明</h4>
                    <div className="mt-4">
                      <p className="text-sm text-gray-700 font-sans">
                        「うまくいかなかった場合」「II期が必要になる確率」まで正直にお伝えします。
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#5A4D41] mb-2 pb-2 border-b-2 border-[#C5A572] font-serif">2. 「治療不要」とはっきり伝える</h4>
                    <div className="mt-4">
                      <p className="text-sm text-gray-700 font-sans">
                        軽度の症状で経過観察が適切な場合は、無理に治療を勧めません。
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#5A4D41] mb-2 pb-2 border-b-2 border-[#C5A572] font-serif">3. トータルフィー制度で費用明確</h4>
                    <div className="mt-4">
                      <p className="text-sm text-gray-700 font-sans">
                        追加費用なし。最初に総額を提示するので、安心して治療を続けられます。
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#5A4D41] mb-2 pb-2 border-b-2 border-[#C5A572] font-serif">4. 毎回の診察で進捗を共有</h4>
                    <div className="mt-4">
                      <p className="text-sm text-gray-700 font-sans">
                        「今どこまで進んでいるか」「次の目標は何か」を毎回説明し、不安を解消します。
                      </p>
                    </div>
                  </div>
              </div>

            {/* よくある質問 */}
            <div className="mb-16 mt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">よくある質問</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">セカンドオピニオンを受けたいと言ったら嫌な顔をされました</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold bg-yellow-100">その医院は避けるべき</span>です。
                      信頼できる医師は、セカンドオピニオンを快く受け入れます。
                      当院でも「他院で診てもらってから決めてください」とお伝えしています。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">「今すぐ始めないと手遅れ」と言われました</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed space-y-3">
                    <p>
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold text-green-700">受け口や骨格型の不正咬合など、本当に緊急性が高いケースでは早期治療が非常に重要</span>です。
                      これらは3〜5歳での治療開始が推奨され、放置すると将来的に外科手術が必要になる可能性があります。
                    </p>
                    <p>
                      <span className="font-bold bg-yellow-100">しかし、それ以外の軽度〜中等度の症例で「今すぐ」と過度に煽る医院は要注意</span>です。
                      治療の緊急性について詳しい説明がない場合は、必ずセカンドオピニオンを受けて、冷静に判断しましょう。
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 text-sm">
                      <p className="font-bold text-blue-700 mb-1">判断のポイント：</p>
                      <p className="text-gray-700">信頼できる医師は、装置治療をすぐに勧めるのではなく、装置を使わなくても「習慣改善」だけでも提案してくれます。口呼吸や舌癖などの根本原因に対処することの重要性を説明してくれる医院を選びましょう。</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">途中でやめたくなったらどうすればいいですか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#C5A572]">A.</strong> 正直に相談しましょう。
                      <span className="font-bold bg-yellow-100">信頼できる医院なら、無理に続けず、一時中断や返金対応</span>をしてくれます。
                      当院でも、続けられない理由をヒアリングし、最善の方法を一緒に考えます。
                    </p>
                  </div>
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

        {/* CTA */}
        <section className="py-2 bg-gradient-to-r from-[#C5A572] to-[#B8935A] text-white">
          <div className="container mx-auto px-4 pb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                後悔しない小児矯正を始めましょう
              </h2>
              <p className="text-xl mb-8 text-white/90 font-sans">
                豊洲で小児矯正をお考えなら、豊洲駅徒歩2分の当院へ。納得してから治療を開始できます
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
      </main>
      <Footer />
    </>
  );
}
