import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, ChevronRight, Clock, Calendar, CheckCircle, AlertCircle, Phone, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';

export const metadata: Metadata = {
  title: '根管治療の期間・回数｜治療にかかる期間と通院回数｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲の歯医者 F歯科が根管治療にかかる期間と通院回数を詳しく解説。初回治療、再根管治療、歯根端切除術それぞれの治療期間、各回の治療内容、期間が長引く原因について説明します。',
  keywords: '根管治療,期間,回数,通院,治療期間,何回,何ヶ月,F歯科・矯正歯科 豊洲プライムスクエア院',
  openGraph: {
    title: '根管治療の期間・回数｜治療にかかる期間と通院回数｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲の歯医者 F歯科が根管治療にかかる期間と通院回数を詳しく解説。初回治療・再根管治療・歯根端切除術それぞれの治療期間をご紹介。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/root-canal/duration',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function RootCanalDurationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#C5A572] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/root-canal" className="hover:text-[#C5A572]">
                根管治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572] font-medium">治療期間・回数</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C5A572]/10 rounded-full mb-6">
                <Calendar className="h-10 w-10 text-[#C5A572]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                根管治療の期間・回数
              </h1>
              <PageImage path="/root-canal/duration" alt="根管治療の期間・回数" />
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                豊洲駅徒歩2分の当院が治療にかかる期間と通院回数を詳しく解説します
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="max-w-5xl mx-auto px-4">
            {/* 結論 Section */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                結論
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  根管治療は、歯の状態や治療の種類によって必要な期間や回数が異なります。
                </p>
                <p className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  一般的には<span className="bg-yellow-100">2〜6回程度の通院</span>が必要で、期間としては<span className="bg-yellow-100">2週間〜2ヶ月程度</span>かかることが多いです。
                </p>
                <p className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  予約日を守り定期的に通院することで、治療期間を短縮できます。
                </p>
              </div>
            </div>

            {/* 治療種類別の期間・回数 */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療種類別の期間・回数</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-8">
                {/* 初回根管治療 */}
                <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold text-[#5A4D41]">初回根管治療（抜髄）</h4>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[#C5A572]">2〜4回</div>
                      <div className="text-sm text-[#8D8070]">2〜4週間</div>
                    </div>
                  </div>
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/10">
                    <p className="text-[#5A4D41] mb-6">
                      初めて神経を取る治療です。感染が少ないため、比較的短期間で治療が完了します。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">初回（30〜60分）</h5>
                          <p className="text-[#8D8070] text-sm">神経の除去、根管の清掃・消毒、仮封</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">2回目（30〜45分）</h5>
                          <p className="text-[#8D8070] text-sm">根管の追加清掃・消毒、症状確認</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">3回目（30〜45分）</h5>
                          <p className="text-[#8D8070] text-sm">最終清掃、根管充填（根管に薬を詰める）</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">4回目（30〜60分）</h5>
                          <p className="text-[#8D8070] text-sm">土台の作成、被せ物の型取り（必要に応じて）</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 再根管治療 */}
                <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold text-[#5A4D41]">再根管治療（リトリートメント）</h4>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[#C5A572]">3〜6回</div>
                      <div className="text-sm text-[#8D8070]">3〜6週間</div>
                    </div>
                  </div>
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/10">
                    <p className="text-[#5A4D41] mb-6">
                      過去に治療した歯の再治療です。古い充填材の除去や複雑な感染のため、期間が長くなります。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">初回（45〜90分）</h5>
                          <p className="text-[#8D8070] text-sm">被せ物の除去、古い充填材の除去、根管の清掃・消毒</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">2回目（30〜45分）</h5>
                          <p className="text-[#8D8070] text-sm">根管の清掃・消毒、経過観察</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">3回目（30〜45分）</h5>
                          <p className="text-[#8D8070] text-sm">追加清掃・消毒、症状確認</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">4回目（30〜45分）</h5>
                          <p className="text-[#8D8070] text-sm">最終清掃、根管充填</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">5〜6回目（30〜60分）</h5>
                          <p className="text-[#8D8070] text-sm">土台の作成、被せ物の型取り・装着</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 歯根端切除術 */}
                <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-2xl font-bold text-[#5A4D41]">歯根端切除術</h4>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[#C5A572]">2〜3回</div>
                      <div className="text-sm text-[#8D8070]">2〜4週間</div>
                    </div>
                  </div>
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/10">
                    <p className="text-[#5A4D41] mb-6">
                      外科的に歯根の先端を切除する治療です。手術は1回ですが、術前検査と術後の経過観察が必要です。
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">初回（30〜45分）</h5>
                          <p className="text-[#8D8070] text-sm">精密検査、CT撮影、治療計画の説明</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">2回目（60〜90分）</h5>
                          <p className="text-[#8D8070] text-sm">歯根端切除術（手術）、縫合</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-[#C5A572] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                        <div className="flex-1">
                          <h5 className="font-bold text-[#5A4D41] mb-1">3回目（15〜30分）</h5>
                          <p className="text-[#8D8070] text-sm">抜糸、経過観察（手術後1〜2週間後）</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 比較表 */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療種類別 期間・回数 比較表</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full border-collapse bg-white shadow-md rounded-2xl overflow-hidden border border-[#C5A572]/10">
                  <thead>
                    <tr className="bg-[#C5A572] text-white">
                      <th className="p-4 text-left font-bold">治療の種類</th>
                      <th className="p-4 text-center font-bold">通院回数</th>
                      <th className="p-4 text-center font-bold">治療期間</th>
                      <th className="p-4 text-center font-bold">1回の時間</th>
                      <th className="p-4 text-left font-bold">特徴</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="p-4 font-bold text-[#5A4D41]">初回根管治療</td>
                      <td className="p-4 text-center">
                        <span className="inline-block bg-[#C5A572]/10 text-[#C5A572] px-3 py-1 rounded-full font-bold">2〜4回</span>
                      </td>
                      <td className="p-4 text-center text-[#5A4D41]">2〜4週間</td>
                      <td className="p-4 text-center text-[#5A4D41]">30〜60分</td>
                      <td className="p-4 text-[#8D8070]">最も短期間で治療が完了</td>
                    </tr>
                    <tr className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="p-4 font-bold text-[#5A4D41]">再根管治療</td>
                      <td className="p-4 text-center">
                        <span className="inline-block bg-[#C5A572]/10 text-[#C5A572] px-3 py-1 rounded-full font-bold">3〜6回</span>
                      </td>
                      <td className="p-4 text-center text-[#5A4D41]">3〜6週間</td>
                      <td className="p-4 text-center text-[#5A4D41]">30〜90分</td>
                      <td className="p-4 text-[#8D8070]">古い充填材の除去が必要</td>
                    </tr>
                    <tr className="hover:bg-[#FDFBF7] transition-colors">
                      <td className="p-4 font-bold text-[#5A4D41]">歯根端切除術</td>
                      <td className="p-4 text-center">
                        <span className="inline-block bg-[#C5A572]/10 text-[#C5A572] px-3 py-1 rounded-full font-bold">2〜3回</span>
                      </td>
                      <td className="p-4 text-center text-[#5A4D41]">2〜4週間</td>
                      <td className="p-4 text-center text-[#5A4D41]">15〜90分</td>
                      <td className="p-4 text-[#8D8070]">外科処置のため術後の回復期間が必要</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-6">
                <div className="bg-white border border-[#C5A572]/20 rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-4 text-center">初回根管治療</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">通院回数</span>
                      <span className="font-bold text-[#C5A572]">2〜4回</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">治療期間</span>
                      <span className="font-bold text-[#5A4D41]">2〜4週間</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">1回の時間</span>
                      <span className="font-bold text-[#5A4D41]">30〜60分</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-[#8D8070]">最も短期間で治療が完了</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[#C5A572]/20 rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-4 text-center">再根管治療</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">通院回数</span>
                      <span className="font-bold text-[#C5A572]">3〜6回</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">治療期間</span>
                      <span className="font-bold text-[#5A4D41]">3〜6週間</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">1回の時間</span>
                      <span className="font-bold text-[#5A4D41]">30〜90分</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-[#8D8070]">古い充填材の除去が必要</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-[#C5A572]/20 rounded-2xl p-6 shadow-md">
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-4 text-center">歯根端切除術</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">通院回数</span>
                      <span className="font-bold text-[#C5A572]">2〜3回</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">治療期間</span>
                      <span className="font-bold text-[#5A4D41]">2〜4週間</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-200 pb-2">
                      <span className="text-[#8D8070]">1回の時間</span>
                      <span className="font-bold text-[#5A4D41]">15〜90分</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-[#8D8070]">外科処置のため術後の回復期間が必要</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 期間が長引く原因 */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療期間が長引く原因</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-6">歯の状態による要因</h4>
                  <ul className="space-y-3 text-[#5A4D41]">
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">感染が広範囲</p>
                        <p className="text-sm text-[#8D8070]">根管内の細菌感染が強い場合、消毒に時間がかかります</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">根管が複雑</p>
                        <p className="text-sm text-[#8D8070]">曲がっていたり、枝分かれが多い場合、清掃が困難</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">根管が細い・石灰化</p>
                        <p className="text-sm text-[#8D8070]">加齢により根管が細くなったり、石灰化していると器具が入りにくい</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">根管に異物がある</p>
                        <p className="text-sm text-[#8D8070]">過去の治療で折れた器具が残っている場合</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-6">その他の要因</h4>
                  <ul className="space-y-3 text-[#5A4D41]">
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">症状が改善しない</p>
                        <p className="text-sm text-[#8D8070]">痛みや腫れが続く場合、追加の消毒が必要</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">予約のキャンセル</p>
                        <p className="text-sm text-[#8D8070]">予約の間隔が空くと、治療期間が延びます</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">治療の中断</p>
                        <p className="text-sm text-[#8D8070]">仮封が取れたり、長期間放置すると再感染のリスク</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">根尖病巣が大きい</p>
                        <p className="text-sm text-[#8D8070]">歯根の先の膿の袋が大きいと、治癒に時間がかかります</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                <div className="flex items-center mb-6">
                  <CheckCircle className="w-8 h-8 text-[#C5A572] mr-3" />
                  <h4 className="text-xl font-bold text-[#5A4D41]">治療期間を短縮するために</h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-[#5A4D41]">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                    <span>予約日を守り、定期的に通院する</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                    <span>仮封が取れたらすぐに連絡する</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                    <span>症状の変化があれば早めに伝える</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#C5A572] mr-2 mt-1 flex-shrink-0" />
                    <span>治療を中断せずに最後まで通院する</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* よくある質問 */}
        <section className="py-6 md:py-6 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくある質問</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">根管治療は何回くらい通院が必要ですか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 治療の種類によって異なりますが、一般的には2〜6回程度の通院が必要です。
                  </p>
                  <ul className="space-y-2 ml-4 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span><strong>初回根管治療：</strong>2〜4回</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span><strong>再根管治療：</strong>3〜6回</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span><strong>歯根端切除術：</strong>2〜3回</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">治療期間はどのくらいかかりますか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 通常は2週間〜2ヶ月程度です。歯の状態や治療の種類によって異なります。
                  </p>
                  <p className="text-sm bg-[#FDFBF7] p-4 rounded-lg border border-[#C5A572]/10">
                    初回根管治療は2〜4週間、再根管治療は3〜6週間程度かかることが多いです。予約の間隔が空くと治療期間が延びるため、定期的な通院が大切です。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">1回の治療時間はどのくらいですか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 治療内容によって異なりますが、通常は30〜60分程度です。
                  </p>
                  <ul className="space-y-2 ml-4 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>初回治療や再治療の初回は45〜90分かかることがあります</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>消毒や経過観察は30〜45分程度</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>歯根端切除術は60〜90分程度</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">予定より回数が増えることはありますか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> はい、歯の状態によっては予定より回数が増えることがあります。
                  </p>
                  <div className="bg-[#FDFBF7] p-4 rounded-lg border border-[#C5A572]/10">
                    <p className="text-sm text-[#5A4D41] mb-2">
                      <strong className="text-[#C5A572]">回数が増える主な理由：</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-[#5A4D41] ml-4">
                      <li>• 感染が広範囲で消毒に時間がかかる場合</li>
                      <li>• 症状が改善せず追加の治療が必要な場合</li>
                      <li>• 根管が複雑で清掃が困難な場合</li>
                    </ul>
                    <p className="text-sm text-[#8D8070] mt-2">
                      ※治療回数が変更になる場合は、その都度ご説明いたします。
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">治療を早く終わらせることはできますか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 治療期間を短縮するためにできることがいくつかあります。
                  </p>
                  <ul className="space-y-2 ml-4 mb-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                      <span>予約日を守り、定期的に通院する</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                      <span>仮封が取れたらすぐに連絡する</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                      <span>治療を中断せずに最後まで通院する</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    <strong className="text-yellow-700">注意：</strong>治療を急ぐと成功率が下がる可能性があります。適切な期間をかけて丁寧に治療することが、長期的には歯を残すことに繋がります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">根管治療について、さらに詳しく</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                href="/root-canal"
                className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                  根管治療とは
                </h3>
                <p className="text-[#8D8070] text-sm mb-4 leading-relaxed">
                  根管治療の概要と当院の特徴
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              <Link
                href="/root-canal/types"
                className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                  根管治療の種類
                </h3>
                <p className="text-[#8D8070] text-sm mb-4 leading-relaxed">
                  初回治療・再治療・歯根端切除術
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              <Link
                href="/root-canal/cost"
                className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                  根管治療の費用
                </h3>
                <p className="text-[#8D8070] text-sm mb-4 leading-relaxed">
                  保険診療・自費診療の費用
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              <Link
                href="/root-canal/pain"
                className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                  痛みについて
                </h3>
                <p className="text-[#8D8070] text-sm mb-4 leading-relaxed">
                  治療中・治療後の痛みと対処法
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
              効率的で確実な根管治療をご提供
            </h2>
            <p className="text-xl mb-8 leading-relaxed opacity-95">
              まずはお気軽にご相談ください
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                <Phone className="w-6 h-6 mr-2" />
                ご予約・お問い合わせ
              </Link>
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
