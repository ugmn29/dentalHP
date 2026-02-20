import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import {
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラントのメンテナンス・定期検診｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'インプラントを長持ちさせるためには定期的なメンテナンスが不可欠です。インプラント周囲炎の予防、日々のセルフケア、定期検診の内容を詳しく解説します。',
  keywords: 'インプラント,メンテナンス,定期検診,インプラント周囲炎,セルフケア,クリーニング',
  openGraph: {
    title: 'インプラントのメンテナンス・定期検診｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'インプラントを長持ちさせるための定期メンテナンス。インプラント周囲炎の予防、セルフケア、定期検診の内容を詳しく解説。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/implant/maintenance',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function MaintenancePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#395b45] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/implant" className="hover:text-[#395b45]">
                インプラント
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#395b45]">治療後のメンテナンス</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                インプラントのメンテナンス
              </h1>
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                インプラントを長持ちさせるために
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                定期的なメンテナンスと日々のケアが成功の鍵
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>

            {/* 結論 */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d4835] mb-8 font-serif">
                結論
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
                <p>
                  インプラントを長期的に使い続けるには、<span className="bg-yellow-100 font-bold">定期的なメンテナンスと日々のセルフケア</span>が不可欠です。
                </p>
                <p>
                  適切なケアを行えば、<span className="text-[#395b45] font-bold">10年以上の生存率は90%以上</span>と非常に高く、一生使い続けることも可能です。
                </p>
              </div>
            </div>

            {/* メンテナンスの重要性 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">なぜメンテナンスが必要なのか</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 mb-8">
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    インプラントは人工物なので虫歯にはなりませんが、<span className="bg-yellow-100 font-bold">歯周病と同じような炎症（インプラント周囲炎）</span>にかかる可能性があります。
                  </p>
                  <p>
                    インプラント周囲炎が進行すると、インプラントを支える骨が溶けてしまい、<span className="font-bold">最悪の場合、インプラントが抜け落ちてしまいます</span>。
                  </p>
                </div>
              </div>

              {/* インプラント周囲炎について */}
              <div className="bg-orange-50 rounded-xl p-6 md:p-8 border border-orange-200">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <h4 className="text-lg font-bold text-[#2d4835]">インプラント周囲炎とは</h4>
                </div>
                <div className="space-y-3 text-[#5A4D41] leading-loose">
                  <p>
                    インプラント周囲炎は、<span className="font-bold">歯周病と同じように細菌感染によって起こる炎症</span>です。
                  </p>
                  <div>
                    <p className="font-bold mb-2">症状：</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 歯茎の腫れ・出血</li>
                      <li>• 膿が出る</li>
                      <li>• インプラントがグラつく</li>
                      <li>• 痛み（進行すると）</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg mt-4">
                    <p className="text-sm">
                      <strong>早期発見が重要：</strong>インプラント周囲炎は初期段階では自覚症状が少ないため、定期検診で早期に発見することが大切です。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 日々のセルフケア */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">日々のセルフケア</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="space-y-8">
                {/* 歯ブラシ */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    ① 歯ブラシでの清掃
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="bg-yellow-100 font-bold">毎食後に歯を磨く</span>習慣をつけましょう。
                    </p>
                    <div>
                      <p className="font-bold mb-2">ポイント：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>やわらかめの歯ブラシを使用</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯と歯茎の境目を丁寧に磨く</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>力を入れすぎない（優しく磨く）</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 歯間ブラシ・フロス */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    ② 歯間ブラシ・デンタルフロス
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      インプラントと歯の間、インプラント同士の間は、<span className="bg-yellow-100 font-bold">歯ブラシだけでは汚れが取り切れません</span>。
                    </p>
                    <div>
                      <p className="font-bold mb-2">使用方法：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">歯間ブラシ：</span>インプラントと歯の間に挿入して前後に動かす</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span><span className="font-bold">デンタルフロス：</span>歯間ブラシが入らない狭い部分に使用</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                      <p className="text-sm">
                        <strong>当院でのアドバイス：</strong>患者様それぞれのインプラントの状態に合わせて、最適な清掃器具と方法をご指導します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 水流洗浄器 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    ③ 水流洗浄器（推奨）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      ウォーターピックなどの<span className="bg-yellow-100 font-bold">水流洗浄器</span>は、インプラント周囲の清掃に非常に効果的です。
                    </p>
                    <div>
                      <p className="font-bold mb-2">メリット：</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯ブラシでは届かない部分まで洗浄できる</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯茎のマッサージ効果で血行促進</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#395b45] mr-3 flex-shrink-0 mt-0.5" />
                          <span>使い方が簡単</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* うがい薬 */}
                <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100">
                  <h4 className="text-xl font-bold text-[#2d4835] font-serif mb-4 pb-2 border-b-2 border-[#395b45]">
                    ④ 洗口液の使用
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      歯磨き後に<span className="bg-yellow-100 font-bold">抗菌作用のある洗口液</span>を使用することで、細菌の繁殖を抑えられます。
                    </p>
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                      <p className="text-sm">
                        <strong>注意：</strong>洗口液だけでは汚れは取れません。必ず歯ブラシや歯間ブラシでの物理的な清掃を行った上で使用してください。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 定期検診の内容 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">定期検診の内容</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 md:p-8 border border-blue-200 mb-8">
                <p className="text-[#5A4D41] leading-loose">
                  当院では、インプラント治療後、<span className="bg-yellow-100 font-bold">3〜6ヶ月ごとの定期検診</span>をお勧めしています。
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#2d4835] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ① 口腔内検査
                  </h4>
                  <ul className="text-sm text-[#5A4D41] space-y-1 ml-7">
                    <li>• インプラント周囲の歯茎の状態チェック</li>
                    <li>• 出血や炎症の有無を確認</li>
                    <li>• 噛み合わせの確認</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#2d4835] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ② レントゲン検査
                  </h4>
                  <ul className="text-sm text-[#5A4D41] space-y-1 ml-7">
                    <li>• インプラント周囲の骨の状態を確認</li>
                    <li>• 骨吸収の有無をチェック</li>
                    <li>• 年1回程度実施</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#2d4835] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ③ プロフェッショナルクリーニング（PMTC）
                  </h4>
                  <ul className="text-sm text-[#5A4D41] space-y-1 ml-7">
                    <li>• 専用の器具で歯垢・歯石を除去</li>
                    <li>• セルフケアでは取り切れない汚れを除去</li>
                    <li>• インプラント専用の器具を使用</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#2d4835] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ④ ブラッシング指導
                  </h4>
                  <ul className="text-sm text-[#5A4D41] space-y-1 ml-7">
                    <li>• 磨き残しのチェック</li>
                    <li>• 正しいブラッシング方法の指導</li>
                    <li>• 清掃器具の使い方のアドバイス</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h4 className="font-bold text-[#2d4835] mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ⑤ 噛み合わせの調整
                  </h4>
                  <ul className="text-sm text-[#5A4D41] space-y-1 ml-7">
                    <li>• 噛み合わせの高さを確認</li>
                    <li>• 必要に応じて調整</li>
                    <li>• 過度な力がかかっていないかチェック</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 避けるべき習慣 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#2d4835] font-serif inline-block">避けるべき習慣</h3>
                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h4 className="font-bold text-[#2d4835] mb-4 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                    NG行為
                  </h4>
                  <ul className="space-y-3 text-[#5A4D41]">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span><span className="font-bold">喫煙：</span>血行が悪くなり、インプラント周囲炎のリスクが高まります</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span><span className="font-bold">歯ぎしり・食いしばり：</span>過度な力でインプラントが破損する可能性があります</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span><span className="font-bold">硬いものを噛む：</span>インプラントや上部構造に過度な負担がかかります</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2 mr-3 flex-shrink-0" />
                      <span><span className="font-bold">定期検診をサボる：</span>トラブルの早期発見ができなくなります</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h4 className="font-bold text-[#2d4835] mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    推奨事項
                  </h4>
                  <ul className="space-y-3 text-[#5A4D41]">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span><span className="font-bold">禁煙：</span>可能な限り禁煙しましょう</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span><span className="font-bold">マウスピース：</span>歯ぎしりがある方は就寝時にマウスピースを使用</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span><span className="font-bold">バランスの良い食事：</span>全身の健康も大切です</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2 mr-3 flex-shrink-0" />
                      <span><span className="font-bold">定期検診の受診：</span>必ず定期的に歯科医院を受診しましょう</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* まとめ */}
            <div className="mb-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-[#2d4835] mb-6 text-center">インプラントを長持ちさせるために</h3>
              <div className="space-y-4 text-[#5A4D41] leading-loose">
                <p>
                  インプラントは正しいケアを行えば、<span className="font-bold">一生使い続けることも可能</span>です。
                </p>
                <p>
                  当院では、患者様一人ひとりに合わせたメンテナンスプログラムをご提案し、インプラントを長く快適に使っていただけるようサポートいたします。
                </p>
                <p className="font-bold text-[#2d4835]">
                  治療が終わってからが本当のスタートです。一緒に大切なインプラントを守っていきましょう。
                </p>
              </div>
            </div>

            {/* 関連ページへのリンク */}
            <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#2d4835] mb-6 text-center">インプラント治療についてもっと詳しく</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/implant/about"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">インプラントとは</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/safety"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">安全性へのこだわり</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/qa"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">よくある質問</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/cost"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">費用について</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-4xl">
            <AuthorBio />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
