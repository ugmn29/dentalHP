import { Metadata } from 'next';
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
  title: '虫歯治療の費用 | 保険診療・自費診療の料金目安 | F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '虫歯治療にかかる費用を詳しく解説。保険適用の治療費、自費診療の料金、医療費控除について。コンポジットレジン、インレー、クラウン、根管治療の費用目安をご紹介します。',
  keywords: '虫歯治療,費用,料金,保険診療,自費診療,医療費控除,セラミック,銀歯,詰め物,被せ物',
};

export default function CostPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <nav className="bg-[#FDFBF7] py-3 border-b border-[#E5E5E5]">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="/" className="text-[#8D8070] hover:text-[#C5A572] transition-colors flex items-center">
                  <Home size={16} className="mr-1" />
                  ホーム
                </a>
              </li>
              <ChevronRight size={16} className="text-[#8D8070]" />
              <li>
                <a href="/cavity" className="text-[#8D8070] hover:text-[#C5A572] transition-colors">
                  虫歯治療
                </a>
              </li>
              <ChevronRight size={16} className="text-[#8D8070]" />
              <li className="text-[#5A4D41] font-medium">
                虫歯治療の費用
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                虫歯治療の費用
              </h1>
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-[#5A4D41] leading-relaxed">
                保険診療と自費診療の料金目安を詳しく解説<br />
                <span className="text-base text-[#8D8070] mt-2 inline-block">治療内容別の費用・医療費控除について</span>
              </p>
            </div>
          </div>
        </section>

        {/* 結論 Section */}
        <section className="py-2 bg-gradient-to-br from-[#C5A572]/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-[#C5A572]">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#5A4D41] font-serif text-center">
                  結論
                </h2>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="text-lg">
                    虫歯治療の費用は、<span className="bg-yellow-100 font-bold">虫歯の進行度と選択する材質によって大きく異なります</span>。
                  </p>
                  <p>
                    <strong className="text-[#C5A572]">保険診療</strong>では、小さな虫歯のコンポジットレジン充填が約1,000〜2,000円（3割負担）、
                    銀歯のインレーが約2,000〜3,000円、クラウンが約3,000〜8,000円程度です。
                    <strong className="text-[#2E8B57]">早期発見・早期治療で、費用を抑えられます</strong>。
                  </p>
                  <p>
                    <strong className="text-[#C5A572]">自費診療</strong>では、審美性や耐久性に優れたセラミック治療を選択できます。
                    インレーで約30,000〜50,000円、クラウンで約80,000〜180,000円が目安です。
                    医療費控除の対象となるため、年間の医療費が10万円を超える場合は確定申告で還付を受けられます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-6 md:py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {/* 保険診療の費用 */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    保険診療の費用目安
                  </h3>
                  <div className="space-y-6">
                    <p className="text-[#5A4D41] leading-loose bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <strong>※ 以下の費用は3割負担の場合の目安です。</strong>
                      初診料・再診料・検査費用などは別途かかります。治療内容や歯の部位によって前後することがあります。
                    </p>

                    {/* コンポジットレジン充填 */}
                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        コンポジットレジン充填（小さな虫歯）
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">1歯</p>
                            <p className="text-sm text-[#8D8070]">C1〜C2程度の小さな虫歯</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約1,000〜2,000円</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-sm text-[#5A4D41]">
                            <strong>メリット：</strong>1日で治療完了、歯の色に合わせられる、保険適用で経済的
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* インレー（詰め物） */}
                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        インレー（詰め物）
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">メタルインレー（銀歯）</p>
                            <p className="text-sm text-[#8D8070]">金銀パラジウム合金</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約2,000〜3,000円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">CAD/CAMインレー（白い詰め物）</p>
                            <p className="text-sm text-[#8D8070]">小臼歯のみ保険適用（条件あり）</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約3,000〜4,000円</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-sm text-[#5A4D41]">
                            <strong>治療期間：</strong>2〜3回の通院が必要（型取り→装着）
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* クラウン（被せ物） */}
                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        クラウン（被せ物）
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">メタルクラウン（銀歯）</p>
                            <p className="text-sm text-[#8D8070]">奥歯に使用</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約3,000〜5,000円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">硬質レジン前装冠</p>
                            <p className="text-sm text-[#8D8070]">前歯に使用（表側が白い）</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約5,000〜8,000円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">CAD/CAM冠（白い被せ物）</p>
                            <p className="text-sm text-[#8D8070]">小臼歯・大臼歯（条件あり）</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約5,000〜8,000円</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-sm text-[#5A4D41]">
                            <strong>治療期間：</strong>3〜5回の通院が必要（形成→型取り→仮歯→装着→調整）
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 根管治療 */}
                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        根管治療（神経の治療）
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">前歯の根管治療（1回あたり）</p>
                            <p className="text-sm text-[#8D8070]">神経の除去・根管充填</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約2,000〜3,000円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">奥歯の根管治療（1回あたり）</p>
                            <p className="text-sm text-[#8D8070]">根管が複雑なため費用が高め</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約3,000〜4,000円</p>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                          <p className="text-sm text-[#5A4D41]">
                            <strong>注意：</strong>根管治療は複数回の通院が必要です（3〜6回程度）。
                            治療後にクラウンを装着するため、別途被せ物の費用がかかります。
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* その他の費用 */}
                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        その他の費用
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">初診料</p>
                            <p className="text-sm text-[#8D8070]">初めて受診する場合</p>
                          </div>
                          <p className="text-xl font-bold text-[#C5A572]">約900円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">再診料</p>
                            <p className="text-sm text-[#8D8070]">2回目以降の受診</p>
                          </div>
                          <p className="text-xl font-bold text-[#C5A572]">約150円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">レントゲン撮影</p>
                            <p className="text-sm text-[#8D8070]">1枚あたり</p>
                          </div>
                          <p className="text-xl font-bold text-[#C5A572]">約300〜1,000円</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 自費診療の費用 */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    自費診療の費用目安
                  </h3>
                  <div className="space-y-6">
                    <p className="text-[#5A4D41] leading-loose bg-[#FFF9F0] p-4 rounded-xl border border-[#C5A572]/30">
                      <strong>※ 自費診療は保険が適用されません。</strong>
                      審美性・耐久性・機能性を重視した治療を選択できます。医療費控除の対象となります。
                    </p>

                    {/* インレー（詰め物） */}
                    <div className="bg-[#FFF9F0] p-6 rounded-xl border border-[#C5A572]/30">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        インレー（詰め物）
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">セラミックインレー</p>
                            <p className="text-sm text-[#8D8070]">天然歯に近い色、変色しない</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約30,000〜50,000円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">ゴールドインレー</p>
                            <p className="text-sm text-[#8D8070]">適合精度が高い、二次虫歯になりにくい</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約40,000〜60,000円</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-sm text-[#5A4D41]">
                            <strong>メリット：</strong>審美性が高い、変色しない、金属アレルギーの心配なし（セラミックの場合）
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* クラウン（被せ物） */}
                    <div className="bg-[#FFF9F0] p-6 rounded-xl border border-[#C5A572]/30">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        クラウン（被せ物）
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">オールセラミッククラウン</p>
                            <p className="text-sm text-[#8D8070]">最も審美性が高い、前歯に最適</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約80,000〜150,000円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">ジルコニアクラウン</p>
                            <p className="text-sm text-[#8D8070]">最も強度が高い、奥歯に最適</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約100,000〜180,000円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">メタルボンドクラウン</p>
                            <p className="text-sm text-[#8D8070]">金属フレーム+セラミック、強度と審美性を両立</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約80,000〜120,000円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">ゴールドクラウン</p>
                            <p className="text-sm text-[#8D8070]">適合精度が最良、咬み心地が良い</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約60,000〜100,000円</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-sm text-[#5A4D41]">
                            <strong>耐用年数：</strong>適切なメインテナンスで10〜20年以上使用できます（保険の銀歯は5〜7年程度）
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 精密根管治療 */}
                    <div className="bg-[#FFF9F0] p-6 rounded-xl border border-[#C5A572]/30">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                        精密根管治療（マイクロスコープ使用）
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">前歯</p>
                            <p className="text-sm text-[#8D8070]">マイクロスコープ・ラバーダム使用</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約50,000〜80,000円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">小臼歯</p>
                            <p className="text-sm text-[#8D8070]">マイクロスコープ・ラバーダム使用</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約70,000〜100,000円</p>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-[#E5E5E5]">
                          <div>
                            <p className="font-bold text-[#5A4D41]">大臼歯</p>
                            <p className="text-sm text-[#8D8070]">根管が複雑、マイクロスコープ・ラバーダム使用</p>
                          </div>
                          <p className="text-2xl font-bold text-[#C5A572]">約80,000〜120,000円</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <p className="text-sm text-[#5A4D41] mb-2">
                            <strong>精密根管治療のメリット：</strong>
                          </p>
                          <ul className="space-y-1 text-sm text-[#5A4D41] ml-4">
                            <li>• 治療成功率が大幅に向上（保険治療の約2倍）</li>
                            <li>• 再治療のリスクが低減</li>
                            <li>• 歯を長期間残せる可能性が高まる</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 保険と自費の比較 */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    保険診療と自費診療の比較
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-md">
                      <thead>
                        <tr className="bg-[#C5A572] text-white">
                          <th className="p-4 text-left font-bold">項目</th>
                          <th className="p-4 text-left font-bold">保険診療</th>
                          <th className="p-4 text-left font-bold">自費診療</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-[#E5E5E5]">
                          <td className="p-4 font-bold text-[#5A4D41]">費用</td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-green-600 font-bold">◎</span> 低額（3割負担）
                          </td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-red-600 font-bold">△</span> 高額（全額自己負担）
                          </td>
                        </tr>
                        <tr className="border-b border-[#E5E5E5] bg-[#FDFBF7]">
                          <td className="p-4 font-bold text-[#5A4D41]">審美性</td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-yellow-600 font-bold">○</span> 部位により制限あり
                          </td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-green-600 font-bold">◎</span> 天然歯に近い仕上がり
                          </td>
                        </tr>
                        <tr className="border-b border-[#E5E5E5]">
                          <td className="p-4 font-bold text-[#5A4D41]">耐久性</td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-yellow-600 font-bold">○</span> 5〜7年程度
                          </td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-green-600 font-bold">◎</span> 10〜20年以上
                          </td>
                        </tr>
                        <tr className="border-b border-[#E5E5E5] bg-[#FDFBF7]">
                          <td className="p-4 font-bold text-[#5A4D41]">材質の選択</td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-red-600 font-bold">△</span> 限定的
                          </td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-green-600 font-bold">◎</span> 豊富な選択肢
                          </td>
                        </tr>
                        <tr className="border-b border-[#E5E5E5]">
                          <td className="p-4 font-bold text-[#5A4D41]">変色</td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-yellow-600 font-bold">○</span> 経年変化あり（レジン）
                          </td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-green-600 font-bold">◎</span> ほとんど変色しない（セラミック）
                          </td>
                        </tr>
                        <tr className="bg-[#FDFBF7]">
                          <td className="p-4 font-bold text-[#5A4D41]">金属アレルギー</td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-red-600 font-bold">△</span> リスクあり（銀歯）
                          </td>
                          <td className="p-4 text-[#5A4D41]">
                            <span className="text-green-600 font-bold">◎</span> メタルフリー選択可
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 医療費控除について */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    医療費控除について
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                        医療費控除とは
                      </h4>
                      <p className="text-[#5A4D41] leading-loose mb-4">
                        <span className="bg-yellow-100 font-bold">1年間（1月1日〜12月31日）に支払った医療費が10万円を超えた場合</span>、
                        確定申告をすることで所得税や住民税の一部が還付される制度です。
                        <strong className="text-[#2E8B57]">虫歯治療は医療費控除の対象</strong>となります。
                      </p>
                    </div>

                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                        控除額の計算方法
                      </h4>
                      <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 mb-4">
                        <p className="text-center text-lg font-bold text-[#5A4D41] mb-2">
                          医療費控除額 = （年間医療費 - 保険金等の補填金額）- 10万円
                        </p>
                        <p className="text-center text-sm text-[#8D8070]">
                          ※ 総所得金額が200万円未満の場合は、総所得金額の5%を差し引きます
                        </p>
                      </div>
                      <div className="bg-green-50 p-5 rounded-xl border border-green-200">
                        <p className="font-bold text-[#5A4D41] mb-3">【計算例】</p>
                        <div className="space-y-2 text-sm text-[#5A4D41]">
                          <p>年間医療費：30万円</p>
                          <p>保険金等の補填：0円</p>
                          <p>所得税率：10%の場合</p>
                          <hr className="my-3 border-green-300" />
                          <p className="font-bold">医療費控除額：30万円 - 10万円 = 20万円</p>
                          <p className="font-bold text-[#C5A572]">還付される税金：20万円 × 10% = 約2万円</p>
                          <p className="text-xs text-[#8D8070] mt-2">※ 住民税も約2万円減額されるため、合計約4万円の節税効果</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                        対象となる医療費
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-xl border border-[#E5E5E5]">
                          <p className="font-bold text-green-600 mb-3 flex items-center">
                            <CheckCircle2 className="w-5 h-5 mr-2" />
                            対象となる費用
                          </p>
                          <ul className="space-y-2 text-sm text-[#5A4D41]">
                            <li>• 虫歯治療費（保険・自費とも）</li>
                            <li>• インレー、クラウンの費用</li>
                            <li>• 根管治療の費用</li>
                            <li>• 治療のための通院交通費（公共交通機関）</li>
                            <li>• 子どもの治療の付き添い交通費</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-[#E5E5E5]">
                          <p className="font-bold text-red-600 mb-3 flex items-center">
                            <span className="text-2xl mr-2">✗</span>
                            対象外の費用
                          </p>
                          <ul className="space-y-2 text-sm text-[#5A4D41]">
                            <li>• 美容目的の治療</li>
                            <li>• 予防目的のクリーニング</li>
                            <li>• ホワイトニング</li>
                            <li>• 自家用車のガソリン代・駐車場代</li>
                            <li>• 診断書作成料</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                        申請に必要なもの
                      </h4>
                      <ul className="space-y-2 text-[#5A4D41] leading-loose">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>医療費の領収書（5年間保管）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>医療費控除の明細書</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>源泉徴収票（給与所得者の場合）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>マイナンバーカードまたは通知カード</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>還付金を受け取る銀行口座</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                      <p className="text-sm text-[#5A4D41]">
                        <strong>申告期限：</strong>翌年の2月16日〜3月15日（確定申告期間）<br />
                        還付申告は5年前まで遡って申請できます。領収書は必ず保管しておきましょう。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-2 bg-gradient-to-br from-[#FDFBF7] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#5A4D41] font-serif text-center">
                当院の料金体系の特徴
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">治療前の詳しい説明</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        治療内容と費用について、事前に詳しくご説明します。わからないことがあればお気軽にご質問ください。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">複数の選択肢をご提案</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        保険診療と自費診療の両方をご提案し、患者様のご希望やご予算に合わせた治療計画を立てます。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">明朗会計</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        料金表を掲示し、明確な料金設定を心がけています。追加費用が発生する場合は事前にお知らせします。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">各種お支払い方法対応</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        現金のほか、クレジットカード、デンタルローンなど、各種お支払い方法に対応しています。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#5A4D41] font-serif text-center">
                よくある質問
              </h2>
              <div className="space-y-6">
                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      保険診療と自費診療、どちらを選べばいいですか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      患者様のご希望やご予算によって異なります。費用を抑えたい場合は保険診療、審美性や耐久性を重視したい場合は自費診療がおすすめです。当院では両方の選択肢をご提案し、それぞれのメリット・デメリットを詳しくご説明しますので、納得した上で選んでいただけます。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      分割払いはできますか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      はい、可能です。クレジットカードでの分割払いや、デンタルローンをご利用いただけます。デンタルローンは月々の支払額を抑えられるため、高額な自費診療でも無理なくお支払いいただけます。詳しくは受付スタッフにお尋ねください。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      セラミックの被せ物は保証がありますか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      はい、自費診療の補綴物（インレー・クラウン）には保証制度があります。保証期間や条件については、治療前に詳しくご説明いたします。ただし、定期的なメインテナンスを受けていただくことが保証の条件となります。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      医療費控除の申請はどうすればいいですか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      確定申告期間（毎年2月16日〜3月15日）に、税務署または国税庁のe-Taxで申請してください。当院発行の領収書と医療費控除の明細書が必要です。ご不明な点があれば、税務署または税理士にご相談ください。領収書は必ず保管しておきましょう。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      治療費の見積もりはもらえますか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      はい、ご希望があれば治療計画と費用の見積書を作成いたします。特に自費診療の場合は、事前に詳しい見積もりをお渡しし、ご納得いただいてから治療を開始します。ご不明な点があればお気軽にお尋ねください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#5A4D41] font-serif text-center">
                関連ページ
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href="/cavity/stages"
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] hover:border-[#C5A572]"
                >
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                    虫歯の進行段階
                  </h3>
                  <p className="text-sm text-[#5A4D41] mb-4 leading-relaxed">
                    C0からC4まで、虫歯の進行段階ごとの症状と治療法を詳しく解説します。
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-medium">
                    詳しく見る
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                <a
                  href="/cavity/treatment-methods"
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] hover:border-[#C5A572]"
                >
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                    虫歯の治療方法
                  </h3>
                  <p className="text-sm text-[#5A4D41] mb-4 leading-relaxed">
                    コンポジットレジン、インレー、クラウン、根管治療など、治療方法を解説します。
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-medium">
                    詳しく見る
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                <a
                  href="/cavity/pain"
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] hover:border-[#C5A572]"
                >
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                    虫歯の痛みと対処法
                  </h3>
                  <p className="text-sm text-[#5A4D41] mb-4 leading-relaxed">
                    虫歯の痛みが出たときの応急処置と、痛みの原因について解説します。
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-medium">
                    詳しく見る
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-br from-[#C5A572] to-[#B59562]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                費用についてのご相談は<br className="md:hidden" />お気軽にどうぞ
              </h2>
              <p className="text-lg mb-8 leading-relaxed opacity-95">
                治療内容と費用について詳しくご説明いたします。<br />
                保険診療・自費診療ともに対応しておりますので、<br className="hidden md:block" />
                ご予算やご希望をお聞かせください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold hover:bg-[#FDFBF7] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  ご予約・お問い合わせ
                </a>
                <a
                  href="/cavity"
                  className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#C5A572] transition-all duration-300"
                >
                  虫歯治療について
                </a>
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
    </div>
  );
}
