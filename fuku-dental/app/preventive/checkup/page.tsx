import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: '定期検診｜虫歯・歯周病の早期発見で歯を守る｜F歯科・矯正歯科',
  description: '定期検診で虫歯や歯周病を早期発見・早期治療。痛みが出る前に対処し、治療も最小限に。80歳まで自分の歯を残すために定期検診が重要です。',
  keywords: '定期検診,歯科検診,虫歯予防,歯周病予防,早期発見,予防歯科',
};

export default function PreventiveCheckupPage() {
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
              <Link href="/preventive" className="hover:text-[#C5A572]">
                予防歯科
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572]">定期検診</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-2 md:py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                定期検診
              </h1>
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                虫歯・歯周病の早期発見で歯を守る
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                痛みが出る前に発見できれば、治療も最小限で済みます
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
                  定期検診は、<span className="bg-yellow-100 font-bold">虫歯や歯周病の早期発見・早期治療</span>を目的とした重要な予防処置です。
                  痛みが出る前に発見できれば、<span className="bg-yellow-100 font-bold">治療も最小限で済み、歯の寿命を大幅に延ばす</span>ことができます。
                </p>
                <p>
                  定期検診を受けている方は、<span className="text-[#2E8B57] font-bold">生涯にわたって多くの歯を残せる</span>ことが研究で証明されています。
                  当院では、<span className="font-bold">3〜6ヶ月ごとの定期検診</span>をお勧めしています。
                </p>
              </div>
            </div>

            {/* 定期検診の内容 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">定期検診の内容</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* 虫歯・歯周病チェック */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    虫歯・歯周病チェック
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      歯科医師が1本1本の歯と歯茎の状態を丁寧に診査します。<span className="bg-yellow-100 font-bold">虫歯の有無、詰め物や被せ物の状態、歯周ポケットの深さ</span>などを確認します。
                    </p>
                    <div>
                      <p className="font-bold mb-2">チェック項目：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>視診・触診による虫歯の早期発見</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯周ポケット測定で歯周病の進行度を評価</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>詰め物・被せ物の破損や適合状態をチェック</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>噛み合わせや顎関節の状態も確認</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>早期発見のメリット：</strong>初期虫歯であれば、削らずにフッ素塗布や経過観察で対応できることもあります。
                      </p>
                    </div>
                  </div>
                </div>

                {/* レントゲン撮影 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    レントゲン撮影
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      目で見えない歯の内部や骨の状態を確認するため、定期的にレントゲン撮影を行います。<span className="bg-yellow-100 font-bold">隠れた虫歯や骨の吸収を早期に発見</span>できます。
                    </p>
                    <div>
                      <p className="font-bold mb-2">撮影内容：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>パノラマレントゲンで全体像を把握（年1回程度）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>デンタルレントゲンで詳細な虫歯診断</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯槽骨の吸収度を経時的に評価</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>デジタルレントゲンで被曝量を最小限に</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>安全性：</strong>デジタルレントゲンの被曝量は、東京〜ニューヨーク間の飛行機での被曝量の約1/10程度と極めて低く、安全です。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 口腔がん検診 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    口腔がん検診
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      口腔がんは早期発見が非常に重要です。<span className="bg-yellow-100 font-bold">舌や粘膜、歯茎などに異常がないか</span>を視診・触診で確認します。
                    </p>
                    <div>
                      <p className="font-bold mb-2">チェック項目：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>舌、頬粘膜、歯茎などを丁寧に視診・触診</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>治らない口内炎や白い斑点などをチェック</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>喫煙・飲酒習慣のある方には特に注意深く検診</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>異常が見つかった場合は専門機関へご紹介</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                      <p className="text-sm">
                        <strong>重要性：</strong>口腔がんは早期発見で90%以上の生存率ですが、進行すると生存率が大幅に低下します。定期検診での早期発見が命を救います。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 生活習慣アドバイス */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    生活習慣アドバイス
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      お口の健康は生活習慣と密接に関係しています。<span className="bg-yellow-100 font-bold">食生活、ブラッシング方法、生活リズム</span>などについてアドバイスします。
                    </p>
                    <div>
                      <p className="font-bold mb-2">アドバイス内容：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>食生活の見直しと間食指導</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>適切なブラッシング方法の指導</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>フロス・歯間ブラシの正しい使い方</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>喫煙・飲酒がお口に与える影響についての説明</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 定期検診のメリット */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">定期検診のメリット</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    1. 虫歯や歯周病の早期発見・早期治療が可能
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    症状が出る前に発見できるため、<span className="bg-yellow-100 font-bold">削る量や治療回数を最小限</span>に抑えられます。
                  </p>
                  <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-200">
                    <p className="text-sm text-[#5A4D41]">
                      <strong>データ：</strong>定期検診を受けている方は、80歳で平均15本以上の歯を残しています（受けていない方は約7本）
                    </p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    2. 痛みが出る前に対処できる
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    痛みが出た時点で、すでに虫歯や歯周病はかなり進行しています。定期検診で早期発見できれば、<span className="bg-yellow-100 font-bold">痛い思いをせずに治療</span>できます。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    3. 治療費の総額を大幅に削減できる
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    初期虫歯であれば約2,000円で治療できますが、進行すると数万円かかります。<span className="text-[#2E8B57] font-bold">定期検診（1回3,000円程度）で将来の治療費を大幅に削減</span>できます。
                  </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-3 font-serif">
                    4. 口腔がんの早期発見にもつながる
                  </h4>
                  <p className="text-[#5A4D41] leading-loose mb-3">
                    口腔がんは年間約8,000人が発症し、約3,000人が亡くなっています。定期検診で早期発見できれば、<span className="bg-yellow-100 font-bold">生存率90%以上</span>です。
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 md:py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">定期検診に関するよくある質問</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* Q1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">どのくらいの頻度で検診を受けるべきですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 一般的には<span className="font-bold">3〜6ヶ月ごとの検診</span>をお勧めしています。ただし、お口の状態によって最適な間隔は異なります。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      虫歯や歯周病のリスクが高い方は3ヶ月ごと、リスクが低く良好な状態を保てている方は6ヶ月ごとで十分な場合もあります。初回の検診時に、患者様に最適な間隔をご提案します。
                    </p>
                  </div>
                </div>

                {/* Q2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">検診にかかる時間と費用はどのくらいですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 検診にかかる時間は通常<span className="font-bold">30〜45分程度</span>です。費用は保険適用で<span className="font-bold">2,000円〜4,000円程度（3割負担の場合）</span>です。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      レントゲン撮影を含む場合は少し高くなります。初診の方や、クリーニングも同時に行う場合はさらに時間と費用がかかりますので、詳しくは受診時にご案内いたします。
                    </p>
                  </div>
                </div>

                {/* Q3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">痛みがなくても検診を受ける必要がありますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> はい、非常に重要です。<span className="font-bold">虫歯や歯周病は初期段階では自覚症状がほとんどありません</span>。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      痛みが出た時点で、すでにかなり進行していることが多く、治療も大がかりになります。定期検診で早期発見できれば、痛みもなく簡単な処置で済むため、時間的にも経済的にも大きなメリットがあります。
                    </p>
                  </div>
                </div>

                {/* Q4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">検診で虫歯が見つかったらすぐに治療しますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 虫歯の進行度によります。初期の虫歯であれば、<span className="font-bold">フッ素塗布や経過観察で進行を抑えられる</span>場合もあります。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      治療が必要な場合は、治療計画や費用、期間について詳しくご説明し、患者様のご都合に合わせて治療を進めます。緊急性の高い場合を除き、無断で治療を開始することはありませんのでご安心ください。
                    </p>
                  </div>
                </div>

                {/* Q5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">子どもも定期検診を受けるべきですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> はい、<span className="font-bold">お子様こそ定期検診が重要</span>です。乳歯や生え変わったばかりの永久歯は虫歯になりやすく、進行も早いため、3ヶ月ごとの検診をお勧めしています。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      定期検診で虫歯予防のフッ素塗布やシーラント処置を行うことで、お子様の歯を守ることができます。また、歯医者に慣れていただくことで、将来的に治療が必要になった際もスムーズに受けられます。
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
                <Link href="/preventive" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">予防歯科TOP</h3>
                  <p className="text-[#8D8070] mb-4">
                    予防歯科の概要と特徴
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/preventive/cleaning" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">クリーニング・PMTC</h3>
                  <p className="text-[#8D8070] mb-4">
                    専門的な歯のクリーニング
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/preventive/fluoride" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">フッ素塗布</h3>
                  <p className="text-[#8D8070] mb-4">
                    歯質を強化し虫歯を予防
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
                定期検診で<br />
                あなたの歯を守ります
              </h2>
              <p className="text-xl mb-8 text-white/90">
                無料カウンセリングで、<br className="md:hidden" />
                お口の状態をチェックしませんか？
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
      </main>
      <Footer />
    </>
  );
}
