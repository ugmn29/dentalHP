import type { Metadata } from 'next';
import Link from 'next/link';
import { Home, ChevronRight, AlertCircle, Clock, Pill, Shield, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';

export const metadata: Metadata = {
  title: '根管治療の痛み｜治療中・治療後の痛みと対処法｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲の歯科 F歯科が根管治療の痛みについて詳しく解説。治療中の痛み、治療後の痛み、痛みの期間、痛み止めの使用方法など、痛みに関する不安を解消します。',
  keywords: '根管治療,痛み,痛い,麻酔,痛み止め,治療後,腫れ,F歯科・矯正歯科 豊洲プライムスクエア院',
  openGraph: {
    title: '根管治療の痛み｜治療中・治療後の痛みと対処法｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲の歯科 F歯科が根管治療の痛みについて詳しく解説。治療中・治療後の痛み、痛みの期間、痛み止めの使用方法など。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/root-canal/pain',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function RootCanalPainPage() {
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
              <span className="text-[#C5A572] font-medium">痛みについて</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-[#C5A572]/10 rounded-full mb-6">
                <AlertCircle className="h-10 w-10 text-[#C5A572]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                根管治療の痛みについて
              </h1>
              <PageImage path="/root-canal/pain" alt="根管治療の痛みについて" />
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                豊洲の歯医者が治療中・治療後の痛みと対処法を詳しく解説します
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
                  根管治療に対して「痛い」というイメージをお持ちの方も多いかもしれません。
                </p>
                <p className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  しかし、現代の歯科医療では、<span className="bg-yellow-100">適切な麻酔と精密な治療技術</span>により、痛みを最小限に抑えた治療が可能です。
                </p>
                <p className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  治療中は麻酔が効いているため、痛みはほとんど感じません。治療後の痛みも適切な対処で軽減できます。
                </p>
              </div>
            </div>

            {/* 治療中の痛み */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療中の痛み</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              {/* 麻酔について */}
              <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-[#C5A572] mr-3" />
                  <h4 className="text-2xl font-bold text-[#5A4D41]">麻酔の効果</h4>
                </div>
                <p className="text-[#8D8070] leading-relaxed mb-6">
                  根管治療では、通常、局所麻酔を使用します。麻酔が効いている状態では、治療中の痛みはほとんど感じません。
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/10">
                    <div className="flex items-center mb-3">
                      <CheckCircle className="w-6 h-6 text-[#C5A572] mr-2" />
                      <h5 className="font-bold text-[#5A4D41]">麻酔が効いている場合</h5>
                    </div>
                    <ul className="space-y-2 text-[#5A4D41]">
                      <li className="flex items-start">
                        <span className="text-[#C5A572] mr-2">•</span>
                        痛みはほぼ感じない
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#C5A572] mr-2">•</span>
                        圧迫感や振動を感じる程度
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#C5A572] mr-2">•</span>
                        リラックスして治療を受けられる
                      </li>
                    </ul>
                  </div>
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/10">
                    <div className="flex items-center mb-3">
                      <AlertCircle className="w-6 h-6 text-[#C5A572] mr-2" />
                      <h5 className="font-bold text-[#5A4D41]">麻酔が効きにくい場合</h5>
                    </div>
                    <ul className="space-y-2 text-[#5A4D41]">
                      <li className="flex items-start">
                        <span className="text-[#C5A572] mr-2">•</span>
                        炎症が強い場合
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#C5A572] mr-2">•</span>
                        下顎の奥歯（骨が厚い）
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#C5A572] mr-2">•</span>
                        追加の麻酔で対応可能
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 治療中に痛みを感じたら */}
              <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                <div className="flex items-center mb-6">
                  <Phone className="w-8 h-8 text-[#C5A572] mr-3" />
                  <h4 className="text-2xl font-bold text-[#5A4D41]">治療中に痛みを感じたら</h4>
                </div>
                <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/10">
                  <p className="text-lg font-bold text-[#C5A572] mb-4">
                    すぐに手を挙げて歯科医師に伝えてください
                  </p>
                  <ul className="space-y-3 text-[#5A4D41]">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 mt-0.5 flex-shrink-0" />
                      <span>追加の麻酔を行います</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 mt-0.5 flex-shrink-0" />
                      <span>麻酔の方法を変更します</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 mt-0.5 flex-shrink-0" />
                      <span>治療を一時中断し、痛みが治まるのを待ちます</span>
                    </li>
                  </ul>
                  <p className="text-[#8D8070] mt-4 text-sm">
                    ※痛みを我慢する必要はありません。遠慮なくお伝えください。
                  </p>
                </div>
              </div>
            </div>

            {/* 治療後の痛み */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">治療後の痛み</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              {/* 痛みの経過 */}
              <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-[#C5A572] mr-3" />
                  <h4 className="text-2xl font-bold text-[#5A4D41]">痛みの経過</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border-l-4 border-[#C5A572]">
                    <h5 className="font-bold text-[#5A4D41] mb-2">治療当日〜翌日</h5>
                    <p className="text-[#8D8070] mb-2">
                      麻酔が切れた後、軽い痛みや違和感を感じることがあります。ズキズキとした痛みや噛んだ時の痛みが出ることもあります。
                    </p>
                    <p className="text-sm text-[#C5A572] font-medium">
                      → 処方された痛み止めを服用してください
                    </p>
                  </div>
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border-l-4 border-[#B39560]">
                    <h5 className="font-bold text-[#5A4D41] mb-2">2〜3日目</h5>
                    <p className="text-[#8D8070] mb-2">
                      通常、痛みは徐々に軽減していきます。噛んだ時の違和感は残ることがありますが、自然に改善していきます。
                    </p>
                    <p className="text-sm text-[#B39560] font-medium">
                      → 必要に応じて痛み止めを服用
                    </p>
                  </div>
                  <div className="bg-[#FDFBF7] rounded-xl p-6 border-l-4 border-[#395b45]">
                    <h5 className="font-bold text-[#5A4D41] mb-2">4〜7日目</h5>
                    <p className="text-[#8D8070] mb-2">
                      ほとんどの場合、痛みは消失します。違和感も少なくなり、通常の生活に戻れます。
                    </p>
                    <p className="text-sm text-[#395b45] font-medium">
                      → 痛み止めは不要になります
                    </p>
                  </div>
                </div>
              </div>

              {/* 痛みが強い場合 */}
              <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                <div className="flex items-center mb-6">
                  <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
                  <h4 className="text-2xl font-bold text-[#5A4D41]">すぐに連絡が必要な症状</h4>
                </div>
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <ul className="space-y-3 text-[#5A4D41]">
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-3">•</span>
                      <span><strong>痛み止めが効かないほどの強い痛み</strong>が続く</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-3">•</span>
                      <span><strong>顔や歯茎が大きく腫れている</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-3">•</span>
                      <span><strong>発熱（38度以上）</strong>がある</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-3">•</span>
                      <span><strong>痛みが日に日に強くなる</strong></span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 font-bold mr-3">•</span>
                      <span><strong>3日以上経っても痛みが改善しない</strong></span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-red-100 rounded-lg">
                    <p className="text-red-800 font-bold text-center">
                      このような症状がある場合は、すぐに当院にご連絡ください
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 痛みへの対処法 */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">痛みへの対処法</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* 推奨される対処法 */}
                <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="w-8 h-8 text-[#C5A572] mr-3" />
                    <h4 className="text-xl font-bold text-[#5A4D41]">推奨される対処法</h4>
                  </div>
                  <ul className="space-y-3 text-[#5A4D41]">
                    <li className="flex items-start">
                      <span className="text-[#C5A572] mr-2">✓</span>
                      <span>処方された痛み止めを指示通りに服用</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C5A572] mr-2">✓</span>
                      <span>治療した側で硬いものを噛まない</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C5A572] mr-2">✓</span>
                      <span>十分な睡眠と休息をとる</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C5A572] mr-2">✓</span>
                      <span>口腔内を清潔に保つ（やさしくブラッシング）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#C5A572] mr-2">✓</span>
                      <span>刺激物（辛いもの、熱いもの）を避ける</span>
                    </li>
                  </ul>
                </div>

                {/* 避けるべきこと */}
                <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                  <div className="flex items-center mb-6">
                    <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
                    <h4 className="text-xl font-bold text-[#5A4D41]">避けるべきこと</h4>
                  </div>
                  <ul className="space-y-3 text-[#5A4D41]">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>飲酒（血行が良くなり痛みが増す）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>激しい運動（血行が良くなり痛みが増す）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>長時間の入浴（血行が良くなり痛みが増す）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>喫煙（治癒を遅らせる）</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>治療部位を舌や指で触る</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 痛み止めについて */}
              <div className="bg-white rounded-2xl shadow-md border border-[#C5A572]/10 p-8">
                <div className="flex items-center mb-6">
                  <Pill className="w-8 h-8 text-[#C5A572] mr-3" />
                  <h4 className="text-2xl font-bold text-[#5A4D41]">痛み止めの服用について</h4>
                </div>
                <div className="bg-[#FDFBF7] rounded-xl p-6 border border-[#C5A572]/10">
                  <div className="space-y-4 text-[#5A4D41]">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">痛みが出る前に服用</p>
                        <p className="text-sm text-[#8D8070]">麻酔が切れる前（治療後2〜3時間）に服用すると効果的です</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">用法・用量を守る</p>
                        <p className="text-sm text-[#8D8070]">指示された量と回数を守ってください</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-bold">市販薬を使う場合</p>
                        <p className="text-sm text-[#8D8070]">イブプロフェンやロキソプロフェンが効果的です（胃薬と一緒に服用）</p>
                      </div>
                    </div>
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
                  <h3 className="font-bold text-[#5A4D41] text-lg">根管治療は痛いですか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 治療中は局所麻酔を使用するため、痛みはほとんど感じません。
                  </p>
                  <p className="text-sm bg-[#FDFBF7] p-4 rounded-lg border border-[#C5A572]/10">
                    現代の歯科医療では、適切な麻酔により治療中の痛みを最小限に抑えることが可能です。万が一痛みを感じた場合は、すぐに歯科医師に伝えてください。追加の麻酔や治療方法の変更で対応いたします。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">治療後の痛みはどのくらい続きますか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 個人差がありますが、通常2〜3日で痛みは軽減し、1週間程度で消失します。
                  </p>
                  <ul className="space-y-2 ml-4 mb-3">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span><strong>治療当日〜翌日：</strong>軽い痛みや違和感を感じることがある</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span><strong>2〜3日目：</strong>痛みは徐々に軽減</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span><strong>4〜7日目：</strong>ほとんどの場合、痛みは消失</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">痛み止めはいつまで飲んでいいですか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 痛みがある間は、処方された用法・用量を守って服用してください。
                  </p>
                  <p className="text-sm bg-[#FDFBF7] p-4 rounded-lg border border-[#C5A572]/10">
                    通常、2〜3日で痛みが軽減し、痛み止めは不要になります。痛みが続く場合は、処方期間内であれば継続して服用しても問題ありません。ただし、3日以上経っても痛みが改善しない場合は、当院にご連絡ください。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">治療後に痛みが強くなってきました。大丈夫ですか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 痛みが強くなる場合は、すぐに当院にご連絡ください。
                  </p>
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="text-sm text-[#5A4D41] mb-2">
                      <strong className="text-red-600">以下の症状がある場合は緊急性が高い可能性があります：</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-[#5A4D41] ml-4">
                      <li>• 痛み止めが効かないほどの強い痛み</li>
                      <li>• 顔や歯茎の大きな腫れ</li>
                      <li>• 発熱（38度以上）</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                  <h3 className="font-bold text-[#5A4D41] text-lg">麻酔が効きにくいと言われました。治療は痛いですか？</h3>
                </div>
                <div className="text-[#8D8070] leading-relaxed ml-11">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 麻酔が効きにくい場合でも、複数の方法で痛みを抑えることができます。
                  </p>
                  <ul className="space-y-2 ml-4 mb-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                      <span>追加の麻酔を使用します</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                      <span>麻酔の方法を変更します（伝達麻酔など）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                      <span>炎症が強い場合は、先に炎症を抑える処置を行います</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#FDFBF7] p-4 rounded-lg border border-[#C5A572]/10">
                    痛みを我慢する必要はありません。治療中に痛みを感じたら、すぐに手を挙げてお伝えください。
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
                href="/root-canal/duration"
                className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all"
              >
                <h3 className="font-bold text-lg text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                  治療期間・回数
                </h3>
                <p className="text-[#8D8070] text-sm mb-4 leading-relaxed">
                  治療にかかる期間と通院回数
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
              痛みに配慮した根管治療をご提供
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
