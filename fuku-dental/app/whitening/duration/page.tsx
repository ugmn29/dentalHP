import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import {
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'ホワイトニングの効果持続期間｜白さを長持ちさせる方法｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'ホワイトニングの効果はどれくらい持続する？オフィス・ホーム・デュアルの持続期間と、白さを長持ちさせるための具体的な方法を徹底解説します。',
  keywords: 'ホワイトニング,持続期間,効果,どれくらい,長持ち,メンテナンス,タッチアップ',
};

export default function WhiteningDurationPage() {
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
              <Link href="/whitening" className="hover:text-[#C5A572]">
                ホワイトニング
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572]">効果の持続期間</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                ホワイトニングの効果持続期間
              </h1>
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                どれくらい持つ？白さを長持ちさせる秘訣
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                適切なケアで白さを長期間維持することができます
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
                  ホワイトニングの持続期間は方法によって異なり、<span className="bg-yellow-100 font-bold">オフィスで3〜6ヶ月、ホームで6〜12ヶ月、デュアルで1〜2年</span>です。
                  ただし、これはあくまで平均で、適切なケアとタッチアップを行えば<span className="bg-yellow-100 font-bold">より長く白さを維持</span>することが可能です。
                </p>
                <p>
                  持続期間は、<span className="font-bold">ホワイトニングの種類、食生活、日々のケア、タッチアップの頻度</span>によって大きく変わります。
                  特に<span className="text-[#2E8B57] font-bold">デュアルホワイトニングは最も長持ちし、月に1〜2回のホームタッチアップで白さを維持</span>できます。
                </p>
              </div>
            </div>

            {/* 種類別の持続期間 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">種類別の持続期間</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* オフィスホワイトニング */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    オフィスホワイトニング
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      持続期間は<span className="bg-yellow-100 font-bold">3〜6ヶ月</span>です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">特徴：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">即効性：</span>高い（1回で効果を実感）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">タッチアップ頻度：</span>2〜3ヶ月に1回</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">色戻り：</span>やや早い</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>長持ちのポイント：</strong>定期的なタッチアップとホームケアの併用で白さを維持できます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* ホームホワイトニング */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    ホームホワイトニング
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      持続期間は<span className="bg-yellow-100 font-bold">6〜12ヶ月</span>です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">特徴：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">即効性：</span>やや低い（2週間程度かかる）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">タッチアップ頻度：</span>月に1〜2回</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">色戻り：</span>遅い</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>長持ちのポイント：</strong>じっくり白くする分、色戻りが遅く長持ちします。
                      </p>
                    </div>
                  </div>
                </div>

                {/* デュアルホワイトニング */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    デュアルホワイトニング（オフィス + ホーム）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      持続期間は<span className="bg-yellow-100 font-bold">1〜2年（最長）</span>です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">特徴：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">即効性：</span>高い（オフィスで即効、ホームで強化）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">タッチアップ頻度：</span>6〜12ヶ月に1回</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">色戻り：</span>最も遅い</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <p className="text-sm">
                        <strong className="text-[#2E8B57]">最もおすすめ：</strong>
                        オフィスとホームを併用することで、<span className="font-bold text-[#2E8B57]">即効性と持続性を両立</span>。
                        長期間白さを保つことができます。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 参考：市販品 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    参考：市販のホワイトニング製品
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      持続期間は<span className="bg-yellow-100 font-bold">数日〜1ヶ月</span>です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">効果が限定的な理由：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>薬剤濃度が低い（法律の規制）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>表面の汚れを落とすのみ</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯の内部まで白くできない</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>歯科医院との比較：</strong>
                        本格的に白くしたい場合は、歯科医院でのホワイトニングがおすすめです。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 持続期間に影響する5つの要因 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">持続期間に影響する5つの要因</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* 要因1 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    1. ホワイトニングの種類
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="bg-yellow-100">デュアル &gt; ホーム &gt; オフィス &gt; 市販品</span>の順で持続期間が長くなります。
                      デュアルホワイトニングは即効性と持続性を両立し、最も長持ちします。
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                      <p className="text-sm">
                        <strong>推奨：</strong>長期的に白さを保ちたい場合は、初めからデュアルホワイトニングを選ぶことをおすすめします。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 要因2 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    2. 食生活・嗜好品
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="bg-yellow-100 font-bold">着色しやすい飲食物の摂取頻度</span>が、色戻りの速さに大きく影響します。
                      特にコーヒー、紅茶、赤ワイン、タバコは着色の主な原因です。
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                        <p className="font-bold mb-2">色戻りしやすい飲食物</p>
                        <ul className="space-y-1 text-sm">
                          <li>• コーヒー、紅茶、緑茶</li>
                          <li>• 赤ワイン</li>
                          <li>• カレー、ミートソース</li>
                          <li>• タバコ（最も影響大）</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                        <p className="font-bold mb-2">対策</p>
                        <ul className="space-y-1 text-sm">
                          <li>• 飲食後すぐにうがい・歯磨き</li>
                          <li>• ストローを使って飲む</li>
                          <li>• 着色しにくい飲食物を選ぶ</li>
                          <li>• 禁煙がベスト</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 要因3 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    3. 口腔ケアの習慣
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="bg-yellow-100">毎日の歯磨きや定期的なクリーニング</span>が、白さを保つために重要です。
                      適切なケアで持続期間を大幅に延ばすことができます。
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                      <p className="font-bold mb-2">推奨ケア</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>1日2〜3回の歯磨き（食後すぐが理想）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>ホワイトニング用歯磨き粉の使用</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>3〜6ヶ月に1回の歯科クリーニング</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>フロス・歯間ブラシの使用</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 要因4 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    4. 元の歯の色・年齢
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="bg-yellow-100">元々の歯の色が黄色い方や、年齢が高い方</span>は、
                      色戻りが早い傾向にあります。
                      これは歯の内部構造（象牙質）の色によるものです。
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                      <p className="text-sm">
                        <strong>対策：</strong>象牙質が黄色みを帯びている場合でも、定期的なタッチアップで白さを維持できます。
                        時間とともに内部の色が透けて見えやすくなるため、計画的なメンテナンスが重要です。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 要因5 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    5. ホワイトニング直後のケア
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="bg-yellow-100 font-bold">ホワイトニング後24〜48時間</span>は、歯が着色しやすい状態です。
                      この期間のケアが持続期間を大きく左右します。
                    </p>
                    <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                      <p className="font-bold mb-2">ホワイトニング後の注意事項</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>コーヒー・紅茶・赤ワインなどの着色飲料を避ける</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>カレー・ミートソースなどの着色食品を避ける</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>禁煙する（最も重要）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span>白い食べ物（白身魚、鶏肉、豆腐など）を選ぶ</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 白さを長持ちさせる7つの方法 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">白さを長持ちさせる7つの方法</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    1. 食後すぐに歯磨き・うがい
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    着色物質が歯に付着する前に洗い流すことが重要です。外出先では最低限うがいをしましょう。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>ポイント：</strong>食後30分以内の歯磨きが効果的
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    2. ホワイトニング用歯磨き粉を使う
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    研磨剤が入ったホワイトニング用歯磨き粉で、表面の着色を除去。当院推奨の歯磨き粉もご紹介します。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>注意：</strong>研磨剤が強すぎるものは避ける
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    3. ストローを使って飲む
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    コーヒーや紅茶を飲むときは、ストローを使うことで歯への着色を最小限に抑えられます。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>効果：</strong>前歯への着色を大幅に軽減
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    4. 定期的な歯科クリーニング
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    3〜6ヶ月に1回、歯科医院でプロフェッショナルクリーニングを受けることで、自分では落とせない着色を除去。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>重要：</strong>定期クリーニングで白さが長持ち
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    5. 禁煙する
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    タバコは最も歯を着色させる要因です。禁煙することで、白さを大幅に長持ちさせることができます。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>効果：</strong>禁煙で持続期間が2〜3倍に
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    6. ホームホワイトニングで定期的にタッチアップ
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    ホームホワイトニング用のマウスピースとジェルを使って、月に1〜2回タッチアップすることで白さを維持。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>おすすめ：</strong>最もコスパの良い方法
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    7. 着色しにくい食品を選ぶ
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    白い食べ物（白身魚、鶏肉、豆腐、牛乳など）を意識的に選ぶことで、着色を防げます。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>ポイント：</strong>色の薄い食品を選ぶ習慣を
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#C5A572]/30">
                  <p className="text-[#5A4D41] leading-loose font-bold text-center">
                    <span className="text-[#2E8B57]">これらを実践すれば長期間白さを維持！</span><br />
                    <span className="font-normal text-sm mt-2 block">
                      上記の7つの方法を実践することで、ホワイトニングの効果を大幅に延ばすことができます。
                      特にタッチアップと日々のケアは効果が高く、多くの方が長期間白さを維持しています。
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* タッチアップについて */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">タッチアップで白さを維持</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    タッチアップとは？
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      タッチアップとは、<span className="bg-yellow-100 font-bold">ホワイトニング後、色戻りしてきたタイミングで再度ホワイトニングを行うこと</span>です。
                      定期的にタッチアップを行うことで、白さを長期間維持できます。
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    オフィスでタッチアップ
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">頻度：</span>2〜3ヶ月に1回</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">費用：</span>1回 ¥15,000〜</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">メリット：</span>確実に白くなる</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">デメリット：</span>通院が必要</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    ホームでタッチアップ（おすすめ）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <div className="bg-white p-4 rounded-xl border border-[#C5A572]/10">
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">頻度：</span>月に1〜2回</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">費用：</span>追加ジェル ¥5,000/2本</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">メリット：</span>自宅で手軽にできる</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">デメリット：</span>オフィスほど即効性なし</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <p className="text-sm">
                        <strong className="text-[#2E8B57]">最もおすすめ：</strong>
                        ホームホワイトニング用のマウスピースとジェルがあれば、
                        <span className="font-bold text-[#2E8B57]">月に1〜2回、自宅で手軽にタッチアップ</span>できます。
                        コスパも良く、白さを長期間維持できる最もおすすめの方法です。
                      </p>
                    </div>
                  </div>
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">持続期間に関するよくある質問</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* Q1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニング後、どれくらいで色戻りが始まりますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 個人差がありますが、<span className="font-bold">オフィスホワイトニングの場合は2〜3ヶ月、ホームホワイトニングの場合は4〜6ヶ月</span>ほどで徐々に色戻りが始まります。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      ただし、日常のケアやタッチアップで白さを維持できます。定期的なホームタッチアップを行えば、長期間白さを保つことが可能です。
                    </p>
                  </div>
                </div>

                {/* Q2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">一度ホワイトニングしたら、ずっと白いままですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> いいえ、残念ながら<span className="font-bold">ホワイトニングの効果は永久ではありません</span>。日々の飲食や加齢により、徐々に色戻りしていきます。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      白さを維持するには、定期的なタッチアップが必要です。月に1〜2回のホームタッチアップで、長期間白さを保つことができます。
                    </p>
                  </div>
                </div>

                {/* Q3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">タッチアップはどのタイミングで行えば良いですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">色戻りが気になり始めたタイミング</span>がベストです。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      オフィスの場合は2〜3ヶ月に1回、ホームの場合は月に1〜2回の頻度をおすすめします。定期的に行うことで、白さを長期間維持できます。
                    </p>
                  </div>
                </div>

                {/* Q4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">コーヒーを毎日飲みますが、白さを保てますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> はい、可能です。コーヒーを飲んだ後すぐに<span className="font-bold">うがいや歯磨きをすること、ストローを使うこと、ホワイトニング用歯磨き粉を使うこと</span>で、着色を最小限に抑えられます。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      また、月に1〜2回のホームタッチアップもおすすめです。これらを実践すれば、コーヒーを飲みながらでも白さを維持できます。
                    </p>
                  </div>
                </div>

                {/* Q5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">年齢が高いと、効果は持続しにくいですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 年齢が高くなるにつれて、<span className="font-bold">歯の内部構造（象牙質）が黄色くなる</span>ため、やや色戻りが早い傾向にあります。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      ただし、定期的なタッチアップと適切なケアで、十分に白さを維持できます。年齢に関係なく、多くの方が長期間白い歯を保っています。
                    </p>
                  </div>
                </div>

                {/* Q6 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">最もコスパの良い方法は何ですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">ホームホワイトニングでのタッチアップ</span>が最もコスパの良い方法です。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      初回にマウスピースを作成すれば、その後は追加ジェル（¥5,000/2本）のみで月に1〜2回タッチアップできます。オフィスでのタッチアップ（¥15,000〜/回）と比べて経済的で、自宅で手軽にできるのがメリットです。
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
                <Link href="/whitening" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">ホワイトニングTOP</h3>
                  <p className="text-[#8D8070] mb-4">
                    ホワイトニング全般について
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/whitening/types" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">ホワイトニングの種類</h3>
                  <p className="text-[#8D8070] mb-4">
                    3つの方法を徹底比較
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/whitening/cost" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">料金・費用</h3>
                  <p className="text-[#8D8070] mb-4">
                    各プランの詳しい料金
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
                白さを長く保つための<br />
                アドバイスもお任せください
              </h2>
              <p className="text-xl mb-8 text-white/90">
                無料カウンセリングで、<br className="md:hidden" />
                あなたに最適なメンテナンス方法をご提案します
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                >
                  無料カウンセリング予約
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
