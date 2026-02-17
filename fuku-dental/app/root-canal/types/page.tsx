import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ChevronRight, CheckCircle, AlertCircle, Home, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '根管治療の種類｜初回治療・再根管治療・歯根端切除術｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '根管治療の種類を詳しく解説。初回根管治療、再根管治療（リトリートメント）、歯根端切除術など、症状に応じた最適な治療法をご紹介します。',
  keywords: '根管治療,種類,再根管治療,リトリートメント,歯根端切除術,抜髄,感染根管治療,F歯科・矯正歯科 豊洲プライムスクエア院',
};

export default function RootCanalTypesPage() {
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
            <Link href="/root-canal" className="hover:text-[#C5A572]">根管治療</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-[#C5A572]">根管治療の種類</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-6 md:py-6 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
              根管治療の種類
            </h1>
            <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
              初回治療・再治療・歯根端切除術
            </p>
            <p className="text-lg text-[#8D8070] leading-relaxed">
              症状や歯の状態に応じて、最適な根管治療をご提案します。<br />
              精密な診断のもと、それぞれの症例に最適な治療法を選択しています。
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
                根管治療には<span className="font-bold bg-yellow-100">主に3つの種類</span>があります。
                歯の状態や過去の治療歴によって、適切な治療法は異なります。
              </p>
              <p>
                当院では、<span className="text-[#2E8B57] font-bold">精密な診断のもと、それぞれの症例に最適な治療法</span>を選択しています。
                できる限り歯を残すことを第一に考え、最適な治療法をご提案いたします。
              </p>
              <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                <span className="text-[#C5A572]">重要：</span>
                どの治療が必要かは、レントゲンやCT検査、症状などから総合的に判断します。まずは詳しく診査させていただきます。
              </p>
            </div>
          </div>

          {/* 初回根管治療 */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">初回根管治療（抜髄）</h3>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  初めて神経を取る治療
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="bg-yellow-100 p-4 rounded-xl">
                    <span className="font-bold">虫歯が神経まで達した場合に行う、初めての根管治療</span>
                  </p>
                  <p>
                    虫歯が深く進行し、<span className="font-bold bg-yellow-100">歯の神経（歯髄）まで細菌感染が及んだ場合</span>に行う治療です。
                    炎症を起こした神経を取り除き、根管内を清掃・消毒してから薬剤を詰めます。
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">こんな症状の時に必要</h5>
                    <ul className="space-y-2 text-[#5A4D41]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>ズキズキと激しく痛む（自発痛）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>冷たいもの・温かいものがしみて痛い</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>噛むと強く痛む</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>夜も眠れないほどの痛み</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#2E8B57] mb-3">治療の特徴</h5>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">成功率</div>
                        <div className="text-2xl font-bold text-gray-900">約90%</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">治療回数</div>
                        <div className="text-2xl font-bold text-gray-900">2〜4回</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">治療期間</div>
                        <div className="text-2xl font-bold text-gray-900">1〜2週間</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 再根管治療 */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">再根管治療（リトリートメント）</h3>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  過去に治療した歯を再治療
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="bg-yellow-100 p-4 rounded-xl">
                    <span className="font-bold">一度治療した歯が再び感染した場合に行う治療</span>
                  </p>
                  <p>
                    以前に根管治療を行った歯が再び感染し、<span className="font-bold bg-yellow-100">根の先に膿（根尖病巣）ができてしまった場合</span>に行う治療です。
                    一度詰めた薬剤を除去し、根管内を再度清掃・消毒してから新しい薬剤を詰め直します。
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">こんな症状の時に必要</h5>
                    <ul className="space-y-2 text-[#5A4D41]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>過去に神経を取った歯が再び痛む</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>歯茎が腫れて膿が出る</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>噛むと違和感や痛みがある</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>レントゲンで根の先に黒い影が見える</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#2E8B57] mb-3">治療の特徴</h5>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">成功率</div>
                        <div className="text-2xl font-bold text-gray-900">約70〜80%</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">治療回数</div>
                        <div className="text-2xl font-bold text-gray-900">3〜6回</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">治療期間</div>
                        <div className="text-2xl font-bold text-gray-900">2週間〜2ヶ月</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4 rounded">
                    <div className="flex items-start">
                      <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-gray-700">
                          <span className="font-bold text-yellow-900">注意：</span>
                          初回治療より難易度が高く、成功率は約70〜80%です。当院ではマイクロスコープを使用し、成功率を高めています。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 歯根端切除術 */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">歯根端切除術</h3>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  歯茎を切開して根の先を切除
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="bg-yellow-100 p-4 rounded-xl">
                    <span className="font-bold">通常の治療では治らない場合に行う外科的治療</span>
                  </p>
                  <p>
                    通常の再根管治療では治らない場合や、<span className="font-bold bg-yellow-100">根管内に器具が入らない場合</span>に行う外科的な治療です。
                    歯茎を切開し、根の先端（根尖）と膿の袋を直接切除・摘出します。
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#5A4D41] mb-3">こんな場合に適応</h5>
                    <ul className="space-y-2 text-[#5A4D41]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>再根管治療でも治らない</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>根管内に器具が折れて残っている</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>被せ物を外せない（ブリッジなど）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572]">•</span>
                        <span>根尖病巣が大きく、通常の治療では治癒しない</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-md border border-[#C5A572]/10">
                    <h5 className="font-bold text-[#2E8B57] mb-3">治療の特徴</h5>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">成功率</div>
                        <div className="text-2xl font-bold text-gray-900">約60〜70%</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">治療回数</div>
                        <div className="text-2xl font-bold text-gray-900">2〜3回</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="text-sm text-gray-600 mb-1">手術時間</div>
                        <div className="text-2xl font-bold text-gray-900">30分〜1時間</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 当院の診断・治療方針 */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">当院の診断・治療方針</h3>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-[#C5A572]/10">
                <h4 className="text-xl font-bold mb-4 text-[#5A4D41]">精密な診査・診断</h4>
                <p className="text-[#5A4D41] leading-relaxed mb-4">
                  レントゲン・CT・視診・触診で<span className="font-bold bg-yellow-100">根管の状態を詳しく確認</span>します。
                </p>
                <ul className="space-y-2 text-sm text-[#5A4D41]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>3次元CTでの精密診断</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>症状の詳細な確認</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>過去の治療歴の確認</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-[#C5A572]/10">
                <h4 className="text-xl font-bold mb-4 text-[#5A4D41]">マイクロスコープ使用</h4>
                <p className="text-[#5A4D41] leading-relaxed mb-4">
                  <span className="font-bold bg-yellow-100">最大20倍の拡大視野</span>で精密に治療し、成功率を向上させます。
                </p>
                <ul className="space-y-2 text-sm text-[#5A4D41]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>細部まで確認可能</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>見落としを防止</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>成功率の向上</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-[#C5A572]/10">
                <h4 className="text-xl font-bold mb-4 text-[#5A4D41]">丁寧な説明</h4>
                <p className="text-[#5A4D41] leading-relaxed mb-4">
                  <span className="font-bold bg-yellow-100">治療内容・期間・費用</span>を事前に詳しくご説明します。
                </p>
                <ul className="space-y-2 text-sm text-[#5A4D41]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>わかりやすい説明</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>疑問や不安を解消</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B57] mt-0.5 flex-shrink-0" />
                    <span>納得していただいてから治療開始</span>
                  </li>
                </ul>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくある質問</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>

            <div className="space-y-6">
              {/* Q1 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">どの治療が必要か、自分で判断できますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> いいえ、適切な治療法の選択には専門的な診査・診断が必要です。レントゲンやCT検査で根管の状態や根尖病巣の大きさを確認し、過去の治療歴や症状も考慮して判断します。
                  </p>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    まずは当院でしっかりと診査させていただきます。患者様の症状やご希望をお聞きしながら、最適な治療法をご提案いたします。
                  </p>
                </div>
              </div>

              {/* Q2 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">再根管治療は必ず成功しますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 残念ながら、再根管治療の成功率は初回治療より低く、約70〜80%です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>根管の形状が複雑な場合</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>以前の治療で器具が折れて残っている場合</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>根尖病巣が大きい場合</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    当院ではマイクロスコープを使用することで、可能な限り成功率を高めています。拡大視野により細部まで確認しながら治療を行います。
                  </p>
                </div>
              </div>

              {/* Q3 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">歯根端切除術は痛いですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 手術中は局所麻酔を十分に効かせますので、痛みを感じることはほとんどありません。
                  </p>
                  <p className="mb-3">
                    手術後は多少の腫れや痛みが出ることがありますが、痛み止めでコントロール可能です。通常、数日〜1週間で落ち着きます。
                  </p>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    処方された痛み止めと抗生物質を指示通りに服用していただければ、快適に過ごせます。
                  </p>
                </div>
              </div>

              {/* Q4 */}
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">根管治療の種類によって費用は変わりますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 保険診療の場合、治療の種類や歯の部位（前歯・小臼歯・大臼歯）によって費用が異なります。
                  </p>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    自費診療の場合、マイクロスコープを使用した精密治療やMTAセメントなどの特殊材料を使用することで、より高い成功率が期待できます。詳しくは費用ページをご覧ください。
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
              <Link href="/root-canal" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">根管治療TOP</h3>
                <p className="text-[#8D8070] mb-4">
                  根管治療の概要と当院の特徴
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              <Link href="/root-canal/cost" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">根管治療の費用</h3>
                <p className="text-[#8D8070] mb-4">
                  保険診療・自費診療の費用
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </Link>

              <Link href="/root-canal/pain" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">痛みについて</h3>
                <p className="text-[#8D8070] mb-4">
                  治療中・治療後の痛みと対処法
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
              歯を残せる可能性があります
            </h2>
            <p className="text-xl mb-8 text-white/90">
              まずは詳しく診査させていただき、最適な根管治療をご提案します
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                無料相談を予約する
                <ArrowRight className="w-6 h-6 ml-2" />
              </Link>
              <a
                href="tel:0312345678"
                className="inline-flex items-center justify-center bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white"
              >
                電話で相談する
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
    </>
  );
}
