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
  title: '虫歯の進行段階（C0〜C4）｜虫歯治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '虫歯の進行段階をC0からC4まで詳しく解説。各段階での症状、痛みの程度、治療法について分かりやすくご説明します。',
  keywords: '虫歯,C0,C1,C2,C3,C4,進行段階,痛み,症状,虫歯治療',
  openGraph: {
    title: '虫歯の進行段階（C0〜C4）｜虫歯治療｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '虫歯の進行段階をC0からC4まで詳しく解説。各段階での症状、痛みの程度、治療法について分かりやすくご説明します。',
    type: 'website',
  },
};

export default function CavityStagesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-[#FAF8F5] border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-[#8D8070]">
              <Home size={16} />
              <a href="/" className="hover:text-[#C5A572] transition-colors">ホーム</a>
              <ChevronRight size={16} />
              <a href="/cavity" className="hover:text-[#C5A572] transition-colors">虫歯治療</a>
              <ChevronRight size={16} />
              <span className="text-[#C5A572] font-medium">虫歯の進行段階</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                虫歯の進行段階
              </h1>
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                C0からC4まで、進行度別の症状と治療法
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                虫歯は進行段階によって症状や治療法が大きく異なります
              </p>
            </div>
          </div>
        </section>

        {/* 結論 Section */}
        <section className="py-2 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-2 border-[#C5A572]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-6 text-center font-serif">
                  結論：早期発見・早期治療で歯を守る
                </h2>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="text-lg">
                    虫歯の進行度は、<span className="font-bold bg-yellow-100">英語でむし歯を意味するCaries（カリエス）の頭文字を取った「C0、C1〜C4」で表され</span>、数字が大きくなるにつれ重症になります。
                  </p>
                  <div className="bg-[#FDFBF7] p-6 rounded-xl border-l-4 border-[#C5A572]">
                    <p className="font-bold text-xl mb-3 text-[#C5A572]">進行段階と痛みの関係</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>C0〜C1：</strong>痛みはほとんどなく、削らずに治療できる可能性あり</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>C2：</strong>冷たいものがしみ始め、詰め物が必要</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>C3：</strong>激しい痛みがあり、神経を抜く根管治療が必要</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>C4：</strong>神経が死んで痛みは減るが、抜歯の可能性が高い</span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    <span className="font-bold text-[#2E8B57]">痛みが出る前に発見できれば、治療も最小限で済みます</span>。定期検診での早期発見が、歯を守る鍵となります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* C0 初期虫歯 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  C0（初期虫歯）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    <span className="bg-yellow-100 font-bold">歯の表面が白く濁っている状態</span>で、まだ穴は開いていません。痛みやしみるなどの自覚症状はほとんどありません。
                  </p>
                  <div>
                    <p className="font-bold mb-2">C0の特徴：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>症状：</strong>エナメル質の表面が白く濁っている（脱灰）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>痛み：</strong>なし</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>治療法：</strong>フッ素塗布、再石灰化療法、経過観察</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>特記事項：</strong>削らずに治せる可能性が高い</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <p className="text-sm">
                      <strong>この段階で発見できれば：</strong>適切なブラッシングとフッ素塗布で、自然に修復（再石灰化）できる可能性があります。削る必要がない最良の段階です。
                    </p>
                  </div>
                </div>
              </div>

              {/* C1 エナメル質の虫歯 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  C1（エナメル質の虫歯）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    <span className="font-bold bg-yellow-100">エナメル質に小さな穴が開いた状態</span>です。エナメル質には神経がないため、痛みや不快感はほとんどありません。
                  </p>
                  <div>
                    <p className="font-bold mb-2">C1の特徴：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>症状：</strong>歯の表面に小さな黒ずみや穴</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>痛み：</strong>ほとんどなし</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>治療法：</strong>小さな詰め物（コンポジットレジン）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>治療回数：</strong>通常1回で完了</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <p className="text-sm">
                      <strong>早期治療のメリット：</strong>小さな詰め物（コンポジットレジン）で治療でき、1回の通院で完了します。費用も最小限（保険適用で約1,000円〜2,000円）で済みます。
                    </p>
                  </div>
                </div>
              </div>

              {/* C2 象牙質の虫歯 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  C2（象牙質の虫歯）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    <span className="bg-yellow-100 font-bold">虫歯がエナメル質を越えて象牙質まで進行</span>した状態です。象牙質には神経につながる小さな管があるため、冷たいものや甘いものがしみ始めます。
                  </p>
                  <div>
                    <p className="font-bold mb-2">C2の特徴：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>症状：</strong>冷たいもの、甘いものがしみる</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>痛み：</strong>一時的な痛み（刺激があるときのみ）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>治療法：</strong>詰め物（インレー）または被せ物（クラウン）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>治療回数：</strong>2〜3回</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <p className="text-sm">
                      <strong>放置すると：</strong>神経まで虫歯が進行し、激しい痛みを伴うC3に進行します。この段階で治療すれば、神経を残せる可能性が高いです。
                    </p>
                  </div>
                </div>
              </div>

              {/* C3 神経まで達した虫歯 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  C3（神経まで達した虫歯）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    <span className="bg-yellow-100 font-bold">虫歯が歯髄（神経）まで達した状態</span>です。何もしていなくてもズキズキと激しく痛みます。特に夜間に痛みが強くなる傾向があります。
                  </p>
                  <div>
                    <p className="font-bold mb-2">C3の特徴：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>症状：</strong>激しい自発痛、熱いものもしみる</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>痛み：</strong>常時痛む（特に夜間）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>治療法：</strong>根管治療（神経を抜く）+ 被せ物</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>治療回数：</strong>5〜10回（根の数や状態による）</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                    <p className="text-sm">
                      <strong>根管治療が必要：</strong>感染した神経を取り除き、根管内を消毒・洗浄してから薬を詰める治療が必要です。治療期間が長く（数週間〜数ヶ月）、費用も高額になります。
                    </p>
                  </div>
                </div>
              </div>

              {/* C4 歯根だけ残った状態 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  C4（歯根だけ残った状態）
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    <span className="bg-yellow-100 font-bold">歯の大部分が崩壊し、歯根だけが残った状態</span>です。神経が完全に死んでしまうため、C3の段階で感じていた激しい痛みは逆に軽減することがあります。
                  </p>
                  <div>
                    <p className="font-bold mb-2">C4の特徴：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>症状：</strong>歯冠が崩壊、歯根のみ残存</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>痛み：</strong>神経が死んで一時的に痛みは減少（根の先に膿が溜まると再び激痛）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>治療法：</strong>多くの場合抜歯、その後インプラント・ブリッジ・入れ歯</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>費用：</strong>抜歯後の処置で数万円〜数十万円</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <p className="text-sm">
                      <strong>歯を失うリスク：</strong>根の先に膿が溜まると顎の骨を溶かし、全身の健康にも悪影響を及ぼします。抜歯後は、インプラント（30万円〜）、ブリッジ（数万円〜）、入れ歯などの治療が必要になります。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#5A4D41] font-serif">
                早期発見のメリット
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">01</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">治療が簡単</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    C0〜C1の段階で発見できれば、削る量が少なく、1回の通院で治療が完了します。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">02</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">費用が安い</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    初期虫歯の治療費は数千円程度。進行すると数万円〜数十万円かかります。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">03</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">神経を残せる</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    C2までに治療すれば神経を残せます。神経を失うと歯がもろくなり寿命が短くなります。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">04</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">痛みが少ない</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    初期段階では痛みがないため、麻酔も不要な場合が多く、治療中の負担が軽減されます。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#5A4D41] font-serif">
                よくある質問
              </h3>
              <div className="space-y-6">

                {/* FAQ 1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">C0の虫歯は削らずに治りますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">はい、C0の段階では削らずに治せる可能性があります</span>。適切なブラッシング、フッ素塗布、食生活の改善により、再石灰化（歯の修復）が期待できます。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      ただし、定期的な観察が必要です。進行が止まらない場合や、穴が開いてしまった場合は、削って詰める治療が必要になります。定期検診で経過を確認しましょう。
                    </p>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">虫歯はどのくらいのスピードで進行しますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">進行速度は個人差がありますが、一般的にはC0からC2まで数ヶ月〜数年</span>、C2からC3までは数ヶ月〜1年程度と言われています。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      年齢、口腔環境、食生活、唾液の量や質によって進行速度は異なります。子どもの乳歯や永久歯は柔らかく進行が早い傾向があります。定期検診（3〜6ヶ月ごと）で早期発見することが重要です。
                    </p>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">C3の虫歯は必ず神経を抜かないといけませんか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">C3でも、神経の一部が生きている場合は神経を残せることがあります</span>が、多くの場合は根管治療（神経を抜く治療）が必要です。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      神経の炎症が軽度で、可逆的な場合は、MTAセメントなどの薬剤を使用して神経を保存する「歯髄温存療法」を行うこともあります。ただし、成功率は100%ではなく、その後根管治療が必要になる場合もあります。
                    </p>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">痛みがなくても虫歯は進行していますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">はい、痛みがなくても虫歯は進行します</span>。C0〜C2の段階では痛みを感じないことが多いため、自覚症状がなくても定期検診が重要です。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      「痛くないから大丈夫」は大きな間違いです。痛みを感じる頃にはC3まで進行していることが多く、神経を抜く治療が必要になります。3〜6ヶ月ごとの定期検診で早期発見しましょう。
                    </p>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">C4でも歯を残せることはありますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">歯根の状態が良好で、十分な長さがあれば残せる可能性があります</span>が、多くの場合は抜歯となります。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      歯を残す場合は、歯根を利用してコア（土台）を立て、クラウン（被せ物）で修復します。ただし、歯根が割れていたり、骨の吸収が著しい場合は抜歯が必要です。抜歯後はインプラント、ブリッジ、入れ歯などの選択肢があります。
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
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#5A4D41] font-serif">
                関連ページ
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/cavity" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4">🦷</div>
                  <h4 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">虫歯治療TOP</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed mb-3">
                    虫歯治療の概要と特徴について詳しくご紹介します。
                  </p>
                  <span className="text-[#C5A572] text-sm inline-flex items-center gap-1">
                    詳しく見る <ArrowRight size={14} />
                  </span>
                </a>
                <a href="/cavity/treatment-methods" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4">⚕️</div>
                  <h4 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">治療方法</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed mb-3">
                    詰め物、被せ物、根管治療など、治療法を詳しく解説します。
                  </p>
                  <span className="text-[#C5A572] text-sm inline-flex items-center gap-1">
                    詳しく見る <ArrowRight size={14} />
                  </span>
                </a>
                <a href="/cavity/pain" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4">💊</div>
                  <h4 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">痛みと対処法</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed mb-3">
                    虫歯の痛みの原因と応急処置について解説します。
                  </p>
                  <span className="text-[#C5A572] text-sm inline-flex items-center gap-1">
                    詳しく見る <ArrowRight size={14} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-b from-[#C5A572] to-[#B59562] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                早期発見・早期治療で歯を守りましょう
              </h3>
              <p className="text-lg mb-8 opacity-95">
                痛みが出る前の定期検診が、歯を守る鍵です。<br />
                3〜6ヶ月ごとの検診をお勧めします。
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#C5A572] font-bold py-4 px-8 rounded-full hover:bg-gray-50 transition-colors shadow-lg"
              >
                ご予約・お問い合わせ
              </a>
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
