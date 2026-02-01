import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Home,
  ChevronRight,
  Clock
} from 'lucide-react';

export const metadata: Metadata = {
  title: '小児矯正で後悔しないために｜始める前に知るべき5つのこと｜F歯科・矯正歯科',
  description: '「やらなきゃよかった」と後悔する人の共通点。治療を始める前に確認すべき5つのポイントと、失敗しない歯科医院の選び方を詳しく解説します。',
  keywords: '小児矯正,後悔,失敗,歯科医院選び,こども矯正,注意点',
};

export default function AvoidRegretPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#E67A2E] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/kidsortho" className="hover:text-[#E67A2E]">
                こども矯正
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#E67A2E]">後悔しないために</span>
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
              <div className="w-24 h-1 bg-[#E67A2E] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                始める前に知るべき5つのこと
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                「やらなきゃよかった」と後悔する人の共通点と、<br className="hidden md:block" />
                失敗しない歯科医院の選び方を詳しく解説します
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
                  <span className="font-bold bg-yellow-100">後悔する人の85%は「説明不足」「期待値のズレ」が原因</span>です。
                  「すぐ終わると思った」「こんなに費用がかかると思わなかった」という声が最も多いです。
                </p>
                <p>
                  <span className="text-[#E67A2E] font-bold">治療開始前に5つのポイントを確認</span>することで、
                  後悔のリスクを大幅に減らせます。
                </p>
                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#E67A2E]/10">
                  当院では初診時に<span className="text-[#E67A2E]">「最悪のシナリオ」も含めて</span>すべて説明します。
                  納得してから治療を開始できます。
                </p>
              </div>
            </div>

            {/* 後悔する人の共通点 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">「やらなきゃよかった」と後悔する人の共通点</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E67A2E]/10 mb-6">
                <div className="space-y-6">
                  {/* 共通点1 */}
                  <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-red-700 mb-2 text-lg">治療期間・費用の説明が不十分だった</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        「1年で終わると言われたのに3年かかった」「追加費用が50万円発生した」など、
                        <span className="font-bold bg-yellow-100">事前説明と実際のギャップ</span>が最大の後悔要因です。
                      </p>
                      <div className="bg-white p-3 rounded-lg text-xs text-gray-700">
                        <span className="font-bold text-red-700">実際の声：</span>
                        「I期で終わると言われたのに、結局II期も必要で総額100万円超えた」（40代母親）
                      </div>
                    </div>
                  </div>

                  {/* 共通点2 */}
                  <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-xl">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-orange-700 mb-2 text-lg">子どもの協力が得られなかった</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        装置を嫌がって装着時間が守れず、<span className="font-bold bg-yellow-100">治療が進まない</span>まま時間だけが経過。
                        親子でストレスが溜まり、途中で挫折するケースが多いです。
                      </p>
                      <div className="bg-white p-3 rounded-lg text-xs text-gray-700">
                        <span className="font-bold text-orange-700">実際の声：</span>
                        「毎日装置を付けるのを嫌がり、結局続かなかった」（30代母親）
                      </div>
                    </div>
                  </div>

                  {/* 共通点3 */}
                  <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-xl">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-yellow-700 mb-2 text-lg">「本当に必要だったのか」疑問が残った</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        軽度の不正咬合を「今すぐ治療が必要」と言われて始めたが、
                        <span className="font-bold bg-yellow-100">実は経過観察で良かったのでは</span>という後悔。
                      </p>
                      <div className="bg-white p-3 rounded-lg text-xs text-gray-700">
                        <span className="font-bold text-yellow-700">実際の声：</span>
                        「セカンドオピニオンで『様子見でいい』と言われ、やらなきゃよかったと後悔」（30代母親）
                      </div>
                    </div>
                  </div>

                  {/* 共通点4 */}
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-700 mb-2 text-lg">通院の負担が予想以上だった</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        月1回の通院が仕事・学校と調整できず、<span className="font-bold bg-yellow-100">予約が取れない・キャンセルが続く</span>ことで
                        治療が長引き、モチベーションが低下。
                      </p>
                      <div className="bg-white p-3 rounded-lg text-xs text-gray-700">
                        <span className="font-bold text-blue-700">実際の声：</span>
                        「予約が2ヶ月先まで取れず、治療が全然進まない」（40代母親）
                      </div>
                    </div>
                  </div>

                  {/* 共通点5 */}
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-green-700 mb-2 text-lg">歯科医院とのコミュニケーション不足</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-2">
                        質問しても「大丈夫です」しか言われず、<span className="font-bold bg-yellow-100">進捗が見えない不安</span>が続く。
                        信頼関係が築けないまま治療が進み、後悔につながります。
                      </p>
                      <div className="bg-white p-3 rounded-lg text-xs text-gray-700">
                        <span className="font-bold text-green-700">実際の声：</span>
                        「質問しても『順調です』としか言われず、本当に進んでいるのか不安だった」（30代母親）
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 始める前に確認すべき5つのポイント */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療を始める前に確認すべき5つのポイント</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* ポイント1 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#E67A2E]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#E67A2E] mb-3 text-lg">1. 総額・期間・最悪のシナリオを聞く</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-start gap-2">
                          <span className="text-[#E67A2E] mt-1">▶</span>
                          <span><span className="font-bold">総額：</span>I期だけで終わる場合・II期が必要な場合の両方を確認</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#E67A2E] mt-1">▶</span>
                          <span><span className="font-bold">期間：</span>「最短」ではなく「平均的」な期間を聞く</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#E67A2E] mt-1">▶</span>
                          <span><span className="font-bold">最悪のシナリオ：</span>「うまくいかなかった場合どうなるか」を必ず確認</span>
                        </div>
                      </div>
                      <div className="mt-3 bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-[#E67A2E]">質問例：</span>
                          「I期で終わる確率は何%ですか？」「II期が必要な場合の総額はいくらですか？」
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ポイント2 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#E67A2E]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#E67A2E] mb-3 text-lg">2. 「治療しない選択肢」も聞く</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p className="leading-relaxed">
                          <span className="font-bold bg-yellow-100">「今すぐ治療が必要か」「経過観察でもいいか」</span>を必ず確認しましょう。
                          信頼できる歯科医師は、不要な治療を勧めず、正直に伝えてくれます。
                        </p>
                      </div>
                      <div className="mt-3 bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-[#E67A2E]">質問例：</span>
                          「今すぐ始めないとどうなりますか？」「様子を見る選択肢はありますか？」
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ポイント3 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#E67A2E]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#E67A2E] mb-3 text-lg">3. 子どもの協力が得られるか確認する</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-start gap-2">
                          <span className="text-[#E67A2E] mt-1">▶</span>
                          <span><span className="font-bold">装着時間：</span>「毎日8時間」など、具体的な装着時間を確認</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#E67A2E] mt-1">▶</span>
                          <span><span className="font-bold">お試し期間：</span>1週間だけ装置をつけてみて、子どもが続けられるか判断</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#E67A2E] mt-1">▶</span>
                          <span><span className="font-bold">モチベーション：</span>子ども自身が「やりたい」と思っているか確認</span>
                        </div>
                      </div>
                      <div className="mt-3 bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-[#E67A2E]">重要：</span>
                          親が強制しても続きません。子どもが納得していることが最も重要です。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ポイント4 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#E67A2E]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#E67A2E] mb-3 text-lg">4. 通院の頻度・予約の取りやすさを確認</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex items-start gap-2">
                          <span className="text-[#E67A2E] mt-1">▶</span>
                          <span><span className="font-bold">通院頻度：</span>月1回？2ヶ月に1回？具体的な頻度を確認</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#E67A2E] mt-1">▶</span>
                          <span><span className="font-bold">予約の取りやすさ：</span>「次回は1ヶ月後」と言われて実際は3ヶ月待ちになることも</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-[#E67A2E] mt-1">▶</span>
                          <span><span className="font-bold">平日・土日対応：</span>仕事や学校との両立が可能か確認</span>
                        </div>
                      </div>
                      <div className="mt-3 bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-[#E67A2E]">質問例：</span>
                          「予約は何ヶ月先まで埋まっていますか？」「土日の診療はありますか？」
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ポイント5 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#E67A2E]/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#E67A2E] rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      ✓
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#E67A2E] mb-3 text-lg">5. セカンドオピニオンを受ける</h4>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p className="leading-relaxed">
                          <span className="font-bold bg-yellow-100">必ず2〜3件の歯科医院で診断を受けましょう</span>。
                          同じ症状でも、医師によって「今すぐ必要」「様子見でOK」と意見が分かれることがよくあります。
                        </p>
                      </div>
                      <div className="mt-3 bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-[#E67A2E]">重要：</span>
                          セカンドオピニオンを嫌がる医師は避けましょう。信頼できる医師は快く受け入れてくれます。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 失敗しない歯科医院の選び方 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">失敗しない歯科医院の選び方</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E67A2E]/10">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="font-bold text-[#5A4D41]">チェック項目</div>
                  <div className="font-bold text-green-600 text-center">信頼できる医院</div>
                  <div className="font-bold text-red-600 text-center">避けるべき医院</div>
                </div>

                <div className="space-y-4">
                  {/* 説明の丁寧さ */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">説明の丁寧さ</div>
                    <div className="text-center text-sm">
                      <span className="text-green-600 font-bold">⭕</span>
                      <p className="text-xs text-gray-600 mt-1">最悪のシナリオも含めて説明</p>
                    </div>
                    <div className="text-center text-sm">
                      <span className="text-red-600 font-bold">❌</span>
                      <p className="text-xs text-gray-600 mt-1">「大丈夫です」しか言わない</p>
                    </div>
                  </div>

                  {/* 治療の緊急性 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-white rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">治療の緊急性</div>
                    <div className="text-center text-sm">
                      <span className="text-green-600 font-bold">⭕</span>
                      <p className="text-xs text-gray-600 mt-1">「様子見でもOK」と正直に言う</p>
                    </div>
                    <div className="text-center text-sm">
                      <span className="text-red-600 font-bold">❌</span>
                      <p className="text-xs text-gray-600 mt-1">「今すぐ必要」と煽る</p>
                    </div>
                  </div>

                  {/* 費用の透明性 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">費用の透明性</div>
                    <div className="text-center text-sm">
                      <span className="text-green-600 font-bold">⭕</span>
                      <p className="text-xs text-gray-600 mt-1">総額を明確に提示</p>
                    </div>
                    <div className="text-center text-sm">
                      <span className="text-red-600 font-bold">❌</span>
                      <p className="text-xs text-gray-600 mt-1">「後から追加費用」が発生</p>
                    </div>
                  </div>

                  {/* 実績・経験 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-white rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">実績・経験</div>
                    <div className="text-center text-sm">
                      <span className="text-green-600 font-bold">⭕</span>
                      <p className="text-xs text-gray-600 mt-1">小児矯正の実績が豊富</p>
                    </div>
                    <div className="text-center text-sm">
                      <span className="text-red-600 font-bold">❌</span>
                      <p className="text-xs text-gray-600 mt-1">一般歯科の片手間で実施</p>
                    </div>
                  </div>

                  {/* コミュニケーション */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">コミュニケーション</div>
                    <div className="text-center text-sm">
                      <span className="text-green-600 font-bold">⭕</span>
                      <p className="text-xs text-gray-600 mt-1">質問に丁寧に答える</p>
                    </div>
                    <div className="text-center text-sm">
                      <span className="text-red-600 font-bold">❌</span>
                      <p className="text-xs text-gray-600 mt-1">質問を遮る・急かす</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 当院の取り組み */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">当院の「後悔ゼロ」への取り組み</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border-2 border-[#E67A2E]/20">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#E67A2E] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-2">1. 初診時に「最悪のシナリオ」も説明</h4>
                      <p className="text-sm text-gray-700">
                        「うまくいかなかった場合」「II期が必要になる確率」まで正直にお伝えします。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#E67A2E] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-2">2. 「治療不要」とはっきり伝える</h4>
                      <p className="text-sm text-gray-700">
                        軽度の症状で経過観察が適切な場合は、無理に治療を勧めません。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#E67A2E] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-2">3. トータルフィー制度で費用明確</h4>
                      <p className="text-sm text-gray-700">
                        追加費用なし。最初に総額を提示するので、安心して治療を続けられます。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#E67A2E] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-2">4. お試し期間を設けています</h4>
                      <p className="text-sm text-gray-700">
                        1週間装置を使ってみて、子どもが続けられるか判断してから本格的に開始します。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#E67A2E] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-2">5. 毎回の診察で進捗を共有</h4>
                      <p className="text-sm text-gray-700">
                        「今どこまで進んでいるか」「次の目標は何か」を毎回説明し、不安を解消します。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* よくある質問 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">よくある質問</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">セカンドオピニオンを受けたいと言ったら嫌な顔をされました</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#E67A2E]">A.</strong> <span className="font-bold bg-yellow-100">その医院は避けるべき</span>です。
                      信頼できる医師は、セカンドオピニオンを快く受け入れます。
                      当院でも「他院で診てもらってから決めてください」とお伝えしています。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">「今すぐ始めないと手遅れ」と言われました</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#E67A2E]">A.</strong> 本当に緊急性が高いケース（受け口・骨格型）を除き、
                      <span className="font-bold bg-yellow-100">「今すぐ」と煽る医院は要注意</span>です。
                      必ずセカンドオピニオンを受けて、冷静に判断しましょう。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">途中でやめたくなったらどうすればいいですか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#E67A2E]">A.</strong> 正直に相談しましょう。
                      <span className="font-bold bg-yellow-100">信頼できる医院なら、無理に続けず、一時中断や返金対応</span>をしてくれます。
                      当院でも、続けられない理由をヒアリングし、最善の方法を一緒に考えます。
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-2 bg-gradient-to-r from-[#E67A2E] to-[#D66A28] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                後悔しない小児矯正を始めましょう
              </h2>
              <p className="text-xl mb-8 text-white/90">
                納得してから治療を開始できます。まずは無料相談へ
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#E67A2E] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
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
