import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Home, FileText, CheckCircle, Clock, DollarSign, Star, Phone } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';

export const metadata: Metadata = {
  title: '根管治療の症例紹介｜治療事例と患者様の声｜F歯科・矯正歯科',
  description: '根管治療の症例を詳しくご紹介。初回根管治療、再根管治療、歯根端切除術の実際の治療例と患者様の声を掲載しています。',
  keywords: '根管治療,症例,事例,体験談,患者様の声,ビフォーアフター,成功例,F歯科・矯正歯科',
};

export default function RootCanalCaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-orange-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-orange-600 transition-colors flex items-center">
                <Home className="h-4 w-4" />
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/root-canal" className="hover:text-orange-600 transition-colors">
                根管治療
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-orange-600 font-medium">症例紹介</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <FileText className="h-10 w-10" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                根管治療の症例紹介
              </h1>
              <p className="text-xl text-orange-100 leading-relaxed">
                実際の治療事例と患者様の声をご紹介します
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              {/* Overview */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="h-8 w-8 text-orange-600 mr-3" />
                  症例について
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    こちらのページでは、当院で実際に行った根管治療の症例をご紹介します。患者様のプライバシーに配慮し、個人を特定できる情報は掲載しておりません。
                  </p>
                  <p className="text-lg">
                    それぞれの症例で、治療の種類、期間、結果、そして患者様の声を掲載しています。根管治療をご検討中の方の参考になれば幸いです。
                  </p>
                </div>
              </div>

              {/* 症例1: 初回根管治療 */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <span className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl mr-4">1</span>
                    初回根管治療の症例
                  </h2>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-bold text-sm">初回治療</span>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">患者様情報</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div className="flex items-center">
                      <span className="font-bold w-24">年齢・性別</span>
                      <span>40代・女性</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">主訴</span>
                      <span>右上奥歯の強い痛み</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">診断</span>
                      <span>歯髄炎（神経の炎症）</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">対象歯</span>
                      <span>右上第一大臼歯</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">治療内容</h3>
                    <p className="text-gray-700 leading-relaxed">
                      虫歯が深く進行し、神経にまで達していたため、神経を除去する根管治療（抜髄）を行いました。マイクロスコープを使用して、3本ある根管をすべて確認し、丁寧に清掃・消毒を行いました。
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <Clock className="h-5 w-5 text-blue-600 mr-2" />
                        治療回数・期間
                      </div>
                      <p className="text-gray-700">3回（3週間）</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <DollarSign className="h-5 w-5 text-blue-600 mr-2" />
                        費用
                      </div>
                      <p className="text-gray-700">約10,000円（保険適用）</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
                        治療結果
                      </div>
                      <p className="text-gray-700">痛み消失、経過良好</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <Star className="h-6 w-6 text-yellow-500 mr-2" />
                      患者様の声
                    </h3>
                    <p className="text-gray-700 leading-relaxed italic">
                      「痛みで夜も眠れないほどでしたが、治療後すぐに楽になりました。麻酔をしっかりしてくださったので、治療中の痛みもほとんどありませんでした。マイクロスコープで丁寧に治療していただき、安心してお任せできました。」
                    </p>
                  </div>
                </div>
              </div>

              {/* 症例2: 再根管治療 */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <span className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl mr-4">2</span>
                    再根管治療の症例
                  </h2>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-bold text-sm">再治療</span>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">患者様情報</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div className="flex items-center">
                      <span className="font-bold w-24">年齢・性別</span>
                      <span>50代・男性</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">主訴</span>
                      <span>左下奥歯の腫れと違和感</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">診断</span>
                      <span>根尖性歯周炎（根の先の炎症）</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">対象歯</span>
                      <span>左下第二大臼歯</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">治療内容</h3>
                    <p className="text-gray-700 leading-relaxed">
                      10年前に他院で根管治療を受けた歯でしたが、再び感染が起こり、歯茎に腫れが出ていました。被せ物を外し、古い充填材を除去してから、根管を徹底的に清掃・消毒しました。感染が強かったため、複数回の消毒を行いました。
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <Clock className="h-5 w-5 text-purple-600 mr-2" />
                        治療回数・期間
                      </div>
                      <p className="text-gray-700">5回（5週間）</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <DollarSign className="h-5 w-5 text-purple-600 mr-2" />
                        費用
                      </div>
                      <p className="text-gray-700">約120,000円（自費・マイクロスコープ使用）</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                        治療結果
                      </div>
                      <p className="text-gray-700">腫れ消失、経過良好</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <Star className="h-6 w-6 text-yellow-500 mr-2" />
                      患者様の声
                    </h3>
                    <p className="text-gray-700 leading-relaxed italic">
                      「他院で『抜歯するしかない』と言われましたが、こちらで再根管治療を受けて歯を残すことができました。マイクロスコープを使った精密治療は費用がかかりましたが、自分の歯を残せたので本当に良かったです。先生の丁寧な説明にも感謝しています。」
                    </p>
                  </div>
                </div>
              </div>

              {/* 症例3: 再根管治療（保険適用） */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <span className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl mr-4">3</span>
                    再根管治療の症例（保険適用）
                  </h2>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-sm">再治療・保険</span>
                </div>

                <div className="bg-green-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">患者様情報</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div className="flex items-center">
                      <span className="font-bold w-24">年齢・性別</span>
                      <span>30代・女性</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">主訴</span>
                      <span>左上前歯の違和感</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">診断</span>
                      <span>根尖病巣（根の先の膿の袋）</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">対象歯</span>
                      <span>左上中切歯（前歯）</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">治療内容</h3>
                    <p className="text-gray-700 leading-relaxed">
                      5年前に根管治療を受けた前歯でしたが、根の先に膿の袋ができていました。症状は軽度だったため、保険適用の範囲内で再根管治療を行いました。前歯は根管が1本でシンプルなため、比較的短期間で治療が完了しました。
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <Clock className="h-5 w-5 text-green-600 mr-2" />
                        治療回数・期間
                      </div>
                      <p className="text-gray-700">4回（4週間）</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                        費用
                      </div>
                      <p className="text-gray-700">約5,000円（保険適用）</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        治療結果
                      </div>
                      <p className="text-gray-700">違和感消失、経過良好</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-100 to-green-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <Star className="h-6 w-6 text-yellow-500 mr-2" />
                      患者様の声
                    </h3>
                    <p className="text-gray-700 leading-relaxed italic">
                      「前歯だったので、見た目も気になっていましたが、治療中も仮の歯を入れていただき、安心でした。保険適用で費用も抑えられ、治療期間も短くて助かりました。丁寧に治療していただき、ありがとうございました。」
                    </p>
                  </div>
                </div>
              </div>

              {/* 症例4: 歯根端切除術 */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <span className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl mr-4">4</span>
                    歯根端切除術の症例
                  </h2>
                  <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-bold text-sm">外科的治療</span>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">患者様情報</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div className="flex items-center">
                      <span className="font-bold w-24">年齢・性別</span>
                      <span>60代・男性</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">主訴</span>
                      <span>右上前歯の歯茎の腫れ</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">診断</span>
                      <span>根尖病巣（再治療困難なケース）</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">対象歯</span>
                      <span>右上側切歯（前歯）</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">治療内容</h3>
                    <p className="text-gray-700 leading-relaxed">
                      過去に複数回の根管治療を受けており、根管が複雑で通常の根管治療では対応が困難なケースでした。歯茎を切開し、根の先端を直接除去する歯根端切除術を行いました。手術は1時間程度で終了し、術後の経過も良好でした。
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <Clock className="h-5 w-5 text-orange-600 mr-2" />
                        治療回数・期間
                      </div>
                      <p className="text-gray-700">3回（3週間）</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <DollarSign className="h-5 w-5 text-orange-600 mr-2" />
                        費用
                      </div>
                      <p className="text-gray-700">約80,000円（自費）</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <CheckCircle className="h-5 w-5 text-orange-600 mr-2" />
                        治療結果
                      </div>
                      <p className="text-gray-700">腫れ消失、経過良好</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-100 to-orange-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <Star className="h-6 w-6 text-yellow-500 mr-2" />
                      患者様の声
                    </h3>
                    <p className="text-gray-700 leading-relaxed italic">
                      「何度も根管治療を受けましたが、改善せず、抜歯も考えていました。歯根端切除術という方法があることを教えていただき、手術を受けました。手術は思ったより痛くなく、その後の腫れもすぐに引きました。歯を残すことができて本当に良かったです。」
                    </p>
                  </div>
                </div>
              </div>

              {/* 症例5: 初回根管治療（奥歯） */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center">
                    <span className="bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl mr-4">5</span>
                    初回根管治療の症例（奥歯・複雑なケース）
                  </h2>
                  <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full font-bold text-sm">初回治療・複雑</span>
                </div>

                <div className="bg-indigo-50 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">患者様情報</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    <div className="flex items-center">
                      <span className="font-bold w-24">年齢・性別</span>
                      <span>35代・男性</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">主訴</span>
                      <span>右下奥歯の激痛</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">診断</span>
                      <span>歯髄炎（根管が4本ある複雑なケース）</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-bold w-24">対象歯</span>
                      <span>右下第一大臼歯</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">治療内容</h3>
                    <p className="text-gray-700 leading-relaxed">
                      下顎の奥歯で、通常3本の根管があるはずが、この患者様は4本目の根管（MB2）が存在する複雑なケースでした。マイクロスコープを使用して4本すべての根管を発見し、丁寧に清掃・消毒を行いました。見逃されやすい根管も治療することで、再発のリスクを大幅に減らすことができました。
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                        治療回数・期間
                      </div>
                      <p className="text-gray-700">4回（4週間）</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <DollarSign className="h-5 w-5 text-indigo-600 mr-2" />
                        費用
                      </div>
                      <p className="text-gray-700">約150,000円（自費・マイクロスコープ使用）</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center text-gray-900 font-bold mb-2">
                        <CheckCircle className="h-5 w-5 text-indigo-600 mr-2" />
                        治療結果
                      </div>
                      <p className="text-gray-700">痛み消失、経過良好</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-indigo-100 to-indigo-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <Star className="h-6 w-6 text-yellow-500 mr-2" />
                      患者様の声
                    </h3>
                    <p className="text-gray-700 leading-relaxed italic">
                      「マイクロスコープを使った精密治療を受けました。通常見つけにくい4本目の根管も発見していただき、しっかり治療してもらえました。費用は高めでしたが、再発のリスクを減らせるならと思い、自費治療を選びました。痛みもなくなり、満足しています。」
                    </p>
                  </div>
                </div>
              </div>

              {/* 治療実績 */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <CheckCircle className="h-8 w-8 text-green-600 mr-3" />
                  当院の根管治療実績
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-gray-700 font-bold">初回治療成功率</div>
                    <div className="text-sm text-gray-600 mt-2">マイクロスコープ使用時</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                    <div className="text-gray-700 font-bold">再治療成功率</div>
                    <div className="text-sm text-gray-600 mt-2">マイクロスコープ使用時</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">1,500+</div>
                    <div className="text-gray-700 font-bold">年間治療実績</div>
                    <div className="text-sm text-gray-600 mt-2">2024年実績</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">当院の特徴</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">マイクロスコープによる精密治療</p>
                        <p className="text-sm text-gray-600">肉眼の20倍の視野で治療</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">ラバーダム防湿の徹底</p>
                        <p className="text-sm text-gray-600">無菌的環境での治療</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">ニッケルチタンファイル使用</p>
                        <p className="text-sm text-gray-600">柔軟性のある最新器具</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-gray-900">CTによる精密診断</p>
                        <p className="text-sm text-gray-600">3次元的な診断・治療計画</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Pages */}
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">関連ページ</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <Link
                    href="/root-canal"
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      根管治療とは
                    </h3>
                    <p className="text-gray-600 text-sm">
                      根管治療の概要と当院の特徴
                    </p>
                  </Link>
                  <Link
                    href="/root-canal/types"
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      根管治療の種類
                    </h3>
                    <p className="text-gray-600 text-sm">
                      初回治療・再治療・歯根端切除術
                    </p>
                  </Link>
                  <Link
                    href="/root-canal/cost"
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      根管治療の費用
                    </h3>
                    <p className="text-gray-600 text-sm">
                      保険診療・自費診療の費用
                    </p>
                  </Link>
                  <Link
                    href="/root-canal/duration"
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
                  >
                    <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      治療期間・回数
                    </h3>
                    <p className="text-gray-600 text-sm">
                      治療にかかる期間と通院回数
                    </p>
                  </Link>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">よくある質問</h2>
                <div className="space-y-6">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                        <h3 className="font-bold text-[#5A4D41] text-lg">マイクロスコープを使った治療と通常の治療では、成功率はどのくらい違いますか？</h3>
                      </div>
                    </div>
                    <div className="text-[#8D8070] leading-relaxed">
                      <p className="mb-3">
                        <strong className="text-[#E67A2E]">A.</strong> 
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                        <h3 className="font-bold text-[#5A4D41] text-lg">根管治療の成功はどのように判断しますか？</h3>
                      </div>
                    </div>
                    <div className="text-[#8D8070] leading-relaxed">
                      <p className="mb-3">
                        <strong className="text-[#E67A2E]">A.</strong> 
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                        <h3 className="font-bold text-[#5A4D41] text-lg">保険治療と自費治療、どちらを選ぶべきですか？</h3>
                      </div>
                    </div>
                    <div className="text-[#8D8070] leading-relaxed">
                      <p className="mb-3">
                        <strong className="text-[#E67A2E]">A.</strong> 
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                        <h3 className="font-bold text-[#5A4D41] text-lg">根管治療をしても症状が改善しない場合はどうなりますか？</h3>
                      </div>
                    </div>
                    <div className="text-[#8D8070] leading-relaxed">
                      <p className="mb-3">
                        <strong className="text-[#E67A2E]">A.</strong> 
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">
                  精密で確実な根管治療をご提供
                </h2>
                <p className="text-xl text-orange-100 mb-8">
                  まずはお気軽にご相談ください
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-full font-bold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    ご予約・お問い合わせ
                  </Link>
                </div>
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
