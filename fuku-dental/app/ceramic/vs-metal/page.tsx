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
  title: 'セラミック vs 銀歯｜どっちがいい？徹底比較｜F歯科・矯正歯科',
  description: 'セラミックと銀歯の違いを徹底比較。見た目、寿命、費用、健康面など、あらゆる角度から解説します。あなたに最適な選択肢が見つかります。',
  keywords: 'セラミック,銀歯,比較,違い,どっち,メリット,デメリット,保険,自費',
};

export default function CeramicVsMetalPage() {
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
              <Link href="/ceramic" className="hover:text-[#C5A572]">
                セラミック治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572]">セラミック vs 銀歯</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                セラミック vs 銀歯
              </h1>
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                どっちがいい？徹底比較
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                見た目、寿命、費用、健康面など、<br />
                あらゆる角度から比較します
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
                  <span className="font-bold bg-yellow-100">審美性、寿命、健康面を重視するならセラミック</span>がおすすめです。
                  初期費用は高いですが、長期的に見るとコストパフォーマンスが高く、見た目も美しく保てます。
                </p>
                <p>
                  <span className="text-[#2E8B57] font-bold">費用を最優先するなら銀歯</span>も選択肢です。
                  ただし、寿命が短く、見た目が目立つというデメリットがあります。
                </p>
                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  当院では、<span className="text-[#C5A572]">長期的な健康と美しさ</span>を考えて、
                  セラミック治療をおすすめしています。
                </p>
              </div>
            </div>

            {/* 一目でわかる比較 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">一目でわかる比較</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#C5A572]/10 mb-6">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="font-bold text-[#5A4D41]">比較項目</div>
                  <div className="font-bold text-[#C5A572] text-center">セラミック</div>
                  <div className="font-bold text-gray-600 text-center">銀歯</div>
                </div>

                <div className="space-y-4">
                  {/* 見た目 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">見た目</div>
                    <div className="text-center">
                      <span className="text-green-600 font-bold">⭐⭐⭐⭐⭐</span>
                      <p className="text-sm mt-1">天然歯と見分けがつかない</p>
                    </div>
                    <div className="text-center">
                      <span className="text-red-600 font-bold">⭐</span>
                      <p className="text-sm mt-1">銀色で目立つ</p>
                    </div>
                  </div>

                  {/* 寿命 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-white rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">平均寿命</div>
                    <div className="text-center">
                      <span className="text-[#C5A572] font-bold text-xl">7〜15年</span>
                    </div>
                    <div className="text-center">
                      <span className="text-gray-600 font-bold text-xl">3〜5年</span>
                    </div>
                  </div>

                  {/* 費用 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">初期費用</div>
                    <div className="text-center">
                      <span className="text-orange-600 font-bold text-xl">5〜15万円</span>
                      <p className="text-xs text-gray-600 mt-1">（自費診療）</p>
                    </div>
                    <div className="text-center">
                      <span className="text-green-600 font-bold text-xl">3千〜1万円</span>
                      <p className="text-xs text-gray-600 mt-1">（保険適用）</p>
                    </div>
                  </div>

                  {/* 虫歯リスク */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-white rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">二次虫歯リスク</div>
                    <div className="text-center text-green-600 font-bold">低い</div>
                    <div className="text-center text-red-600 font-bold">高い</div>
                  </div>

                  {/* 金属アレルギー */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">金属アレルギー</div>
                    <div className="text-center text-green-600 font-bold">なし</div>
                    <div className="text-center text-red-600 font-bold">リスクあり</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 8つの視点で詳しく比較 */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">8つの視点で詳しく比較</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-12">
                {/* 1. 審美性 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    1. 審美性（見た目）
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="font-bold bg-yellow-100">セラミック</span>は天然歯と見分けがつかない白さと透明感を持ち、周囲の歯の色に合わせて調整可能です。
                      前歯にも使用できる高い審美性があり、笑顔に自信が持てます。
                    </p>
                    <p>
                      一方、<span className="text-[#2E8B57] font-bold">銀歯</span>は銀色で口を開けると目立ち、前歯には使用できません。
                      時間が経つと黒く変色し、笑うときに気になります。
                    </p>
                  </div>
                </div>

                {/* 2. 寿命・耐久性 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    2. 寿命・耐久性
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="font-bold bg-yellow-100">セラミックの平均寿命は7〜15年</span>で、適切なケアで15年以上も可能です。
                      材質が安定していて劣化しにくく、歯との接着力が高いため、二次虫歯になりにくいのが特徴です。
                    </p>
                    <p>
                      <span className="text-[#2E8B57] font-bold">銀歯の平均寿命は3〜5年</span>で、多くは5年以内に再治療が必要になります。
                      金属が腐食・劣化し、セメントが溶けて隙間ができやすく、二次虫歯のリスクが高くなります。
                    </p>
                  </div>
                </div>

                {/* 3. 費用 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    3. 費用・コストパフォーマンス
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="font-bold bg-yellow-100">セラミックは5〜15万円（自費診療）</span>で、初期費用は高めです。
                      インレーが5〜6万円、クラウンが10〜15万円程度です。
                    </p>
                    <p>
                      <span className="text-[#2E8B57] font-bold">銀歯は3千〜1万円（保険適用・3割負担）</span>で、初期費用は安いです。
                      インレーが3〜5千円、クラウンが5千〜1万円程度です。
                    </p>
                    <p>
                      ただし、10年間の総コストで比較すると、セラミックは約12万円で済む一方、
                      銀歯は4年ごとに再治療が必要で約2〜3万円かかります。
                      再治療の度に通院の手間、時間的コスト、治療の痛みなどが発生するため、
                      <span className="font-bold bg-yellow-100">長期的にはセラミックの方が経済的</span>です。
                    </p>
                  </div>
                </div>

                {/* 4. 虫歯リスク */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    4. 二次虫歯のリスク
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="font-bold bg-yellow-100">セラミック</span>は歯との接着力が高く隙間ができにくいため、二次虫歯のリスクが低いです。
                      表面がツルツルでプラークが付きにくく、劣化しにくいため長期間安定します。
                    </p>
                    <p>
                      <span className="text-[#2E8B57] font-bold">銀歯</span>はセメントが溶けて隙間ができやすく、金属の腐食により適合が悪くなります。
                      プラークが付きやすく、二次虫歯のリスクが高いです。
                      銀歯の下で虫歯が再発するケースは非常に多く、当院に来院される方の多くが銀歯の下の虫歯を治療するためにいらっしゃいます。
                    </p>
                  </div>
                </div>

                {/* 5. 金属アレルギー */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    5. 金属アレルギーのリスク
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="font-bold bg-yellow-100">セラミック</span>は100%セラミックで金属不使用のため、アレルギー反応の心配がありません。
                      生体親和性が高く安全で、金属アレルギーの方も安心して使用できます。
                    </p>
                    <p>
                      <span className="text-[#2E8B57] font-bold">銀歯</span>は金属イオンが溶け出し、口内炎、舌炎の原因になることがあります。
                      手の湿疹など全身症状が出ることもあり、後天的にアレルギーになることもあります。
                    </p>
                  </div>
                </div>

                {/* 6. 歯茎への影響 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    6. 歯茎への影響
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="font-bold bg-yellow-100">セラミック</span>は歯茎が黒ずむことがなく、歯茎との境目も自然で美しいです。
                      歯茎の炎症が起きにくく、健康的な状態を保てます。
                    </p>
                    <p>
                      <span className="text-[#2E8B57] font-bold">銀歯</span>は金属イオンで歯茎が黒ずむ（メタルタトゥー）ことがあります。
                      特に前歯では目立って見え、一度黒ずむと元に戻りにくいです。
                    </p>
                  </div>
                </div>

                {/* 7. プラーク付着 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    7. プラーク（歯垢）の付きやすさ
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="font-bold bg-yellow-100">セラミック</span>は表面がツルツルで滑らかなため、プラークが付着しにくく、お手入れがしやすいです。
                      清潔な状態を保ちやすく、口腔環境の改善につながります。
                    </p>
                    <p>
                      <span className="text-[#2E8B57] font-bold">銀歯</span>は表面がザラザラしているため、プラークが付着しやすく、虫歯・歯周病のリスクが増加します。
                      丁寧なケアが必要です。
                    </p>
                  </div>
                </div>

                {/* 8. 全身への影響 */}
                <div>
                  <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    8. 全身への影響
                  </h4>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="font-bold bg-yellow-100">セラミック</span>は生体親和性が高く安全で、体内に有害物質が溶け出しません。
                      全身の健康に悪影響がなく、健康志向の方、妊娠を考えている方には特におすすめです。
                    </p>
                    <p>
                      <span className="text-[#2E8B57] font-bold">銀歯</span>は金属イオンが体内に蓄積し、アレルギー、皮膚炎のリスクがあります。
                      長期的な健康リスクの可能性も指摘されています。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* どんな人におすすめ？ */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">それぞれどんな人におすすめ？</h3>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* セラミックがおすすめ */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#C5A572]/20">
                  <h4 className="text-xl font-bold text-[#C5A572] mb-6 font-serif">セラミックがおすすめの方</h4>
                  <ul className="space-y-3">
                    {[
                      "見た目を気にする方（特に前歯）",
                      "長期的な健康を重視する方",
                      "金属アレルギーがある・心配な方",
                      "長持ちする治療を希望する方",
                      "再治療の手間を避けたい方",
                      "二次虫歯のリスクを減らしたい方",
                      "妊娠を考えている女性"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 銀歯でも良い方 */}
                <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-200">
                  <h4 className="text-xl font-bold text-gray-700 mb-6">銀歯でも良い方</h4>
                  <ul className="space-y-3">
                    {[
                      "初期費用を最優先する方",
                      "見た目を全く気にしない方（奥歯のみ）",
                      "再治療の手間が気にならない方"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                    <p className="text-sm text-gray-700">
                      <strong>注意：</strong>銀歯は短期的には費用が安いですが、
                      再治療の頻度、二次虫歯のリスク、健康への影響を考えると、
                      当院ではセラミックをおすすめしています。
                    </p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくある質問</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    q: "銀歯をセラミックに替えることはできますか？",
                    a: "はい、銀歯をセラミックに交換することは可能です。多くの患者様が、審美性の向上や金属アレルギーの予防のために、銀歯からセラミックへ交換されています。交換する際は、銀歯を外して虫歯の有無を確認し、必要に応じて治療した後、セラミックを作製・装着します。通常2〜3回の通院で完了します。"
                  },
                  {
                    q: "銀歯の下が虫歯になっているか心配です",
                    a: "銀歯の下の虫歯（二次虫歯）は非常に多く見られます。自覚症状がなくても、レントゲンや検査で発見されることがよくあります。冷たいもの・甘いものがしみる、銀歯が浮いた感じがする、食べ物が詰まりやすくなった、銀歯の周りが黒ずんでいるなどの症状があれば、すぐに受診してください。定期検診で早期発見することが重要です。"
                  },
                  {
                    q: "セラミックは割れやすいと聞きましたが本当ですか？",
                    a: "昔のセラミックは割れやすいこともありましたが、現在の最新セラミック（特にジルコニア）は非常に強度が高く、通常の使用で割れることはほとんどありません。ジルコニアは「白いダイヤモンド」と呼ばれるほど硬く、銀歯よりも割れにくいとされています。ただし、歯ぎしりが強い方はナイトガード（マウスピース）の使用をおすすめします。",
                    note: "最新のジルコニアセラミックは銀歯よりも硬く、割れにくいのが特徴です。"
                  },
                  {
                    q: "保険でセラミックは使えませんか？",
                    a: "一部の症例では、保険適用のハイブリッドセラミック（CAD/CAM冠）が使用できます。ただし、適用できる歯の位置に制限があり、審美性・耐久性も自費のセラミックには劣ります。当院では、長期的な視点からは自費のセラミック（特にジルコニア）をおすすめしていますが、予算に合わせて最適な選択肢をご提案いたします。"
                  },
                  {
                    q: "結局、セラミックと銀歯のどちらがいいですか？",
                    a: "長期的な健康、審美性、費用対効果を考えると、セラミックがおすすめです。初期費用は銀歯の方が安いですが、セラミックは2〜3倍長持ちする、二次虫歯のリスクが低い、再治療の手間と費用が減る、見た目が美しい、健康への悪影響がないという利点があります。長い目で見ると、セラミックの方が経済的で健康的です。まずは無料カウンセリングでご相談ください。"
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                          Q{index + 1}
                        </span>
                        <h3 className="font-bold text-[#5A4D41] text-lg">
                          {faq.q}
                        </h3>
                      </div>
                    </div>
                    <div className="text-[#8D8070] leading-relaxed">
                      <p className="mb-3">
                        <strong className="text-[#C5A572]">A.</strong> {faq.a}
                      </p>
                      {faq.note && (
                        <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                          {faq.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
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
                <Link href="/ceramic" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">セラミック治療TOP</h3>
                  <p className="text-[#8D8070] mb-4">
                    セラミック治療の概要と特徴
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/ceramic/cost" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">費用・料金</h3>
                  <p className="text-[#8D8070] mb-4">
                    セラミック治療の費用について
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/ceramic/longevity" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">寿命・耐久性</h3>
                  <p className="text-[#8D8070] mb-4">
                    セラミックはどのくらい持つ？
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
                セラミック治療で美しく健康な歯を
              </h2>
              <p className="text-xl mb-8 text-white/90">
                銀歯からセラミックへの交換もご相談ください<br />
                無料カウンセリングで詳しくご説明します
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
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
