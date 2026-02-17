import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ComparisonTable } from '@/components/implant/ComparisonTable';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  HelpCircle,
  ArrowRight,
  Home,
  ChevronRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラント・入れ歯・ブリッジの違いを徹底比較｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description:
    'インプラント・入れ歯・ブリッジの3つの治療法を、噛む力・見た目・費用・治療期間・耐久性など9つの項目で徹底比較。それぞれのメリット・デメリットを正直に解説し、あなたに合った治療法の選び方をご案内します。',
  keywords:
    'インプラント,入れ歯,ブリッジ,比較,違い,メリット,デメリット,歯を失った,治療法,選び方',
};

export default function ComparisonPage() {
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
              <span className="text-[#395b45]">入れ歯・ブリッジとの比較</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                インプラント・入れ歯・ブリッジ比較
              </h1>
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                3つの治療法を徹底比較して、あなたに合った選択を
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                それぞれの特徴・メリット・デメリットを正しく理解しましょう
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
                  歯を失ったときの治療法には<span className="bg-yellow-100 font-bold">インプラント・入れ歯・ブリッジの3つ</span>があり、それぞれに長所と短所があります。
                </p>
                <p>
                  <span className="text-[#395b45] font-bold">インプラント</span>は見た目・噛む力・耐久性において最も優れていますが、外科手術が必要で費用がかかります。
                  <span className="text-[#395b45] font-bold">入れ歯</span>は手軽で保険適用もありますが、違和感や噛む力の低下があります。
                  <span className="text-[#395b45] font-bold">ブリッジ</span>は固定式で使いやすいですが、健康な隣の歯を削る必要があります。
                </p>
                <p>
                  最適な治療法は、<span className="font-bold">お口の状態・ライフスタイル・ご予算</span>によって異なります。このページで詳しく比較して、ご自身に合った選択をしましょう。
                </p>
              </div>
            </div>

        {/* Comparison Table */}
        <section className="py-16 px-4 bg-white" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-4">
              一目でわかる比較表
            </h2>
            <p className="text-center text-gray-500 mb-10 text-sm">
              9つの項目で3つの治療法を比較します
            </p>
            <ComparisonTable />
          </div>
        </section>

        {/* Implant Detail */}
        <section className="py-16 px-4 bg-[#FDFBF7]" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-xl bg-[#395b45] text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
                1
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835]">
                インプラント
              </h2>
            </div>
            <p className="text-[#5A4D41] leading-relaxed mb-8 ml-0 md:ml-[60px]">
              顎の骨にチタン製の人工歯根（インプラント体）を埋め込み、その上にセラミックなどの人工歯を装着する治療法です。
              天然歯に最も近い見た目と噛み心地を実現できます。
            </p>

            <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-[60px]">
              {/* Pros */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#395b45]/10">
                <h3 className="font-bold text-[#395b45] text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  メリット
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: '天然歯のような見た目',
                      desc: 'セラミック製の人工歯は天然歯と見分けがつかないほど自然で美しい仕上がりです。',
                    },
                    {
                      title: '他の歯を傷つけない',
                      desc: '独立した構造のため、隣の健康な歯を削ったり負担をかけたりする必要がありません。',
                    },
                    {
                      title: 'しっかり噛める',
                      desc: '顎の骨に固定されるため、天然歯に近い噛む力を発揮できます。硬い食べ物も楽しめます。',
                    },
                    {
                      title: '顎の骨の吸収を防ぐ',
                      desc: '噛む刺激が骨に伝わるため、歯を失った後に起こりやすい顎の骨の吸収（痩せ）を防ぎます。',
                    },
                    {
                      title: '長期間の耐久性',
                      desc: '適切なメンテナンスを行えば10年以上使用でき、10年生存率は90%以上と報告されています。',
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#395b45] flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#2d4835] text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
                <h3 className="font-bold text-red-500 text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  デメリット
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: '外科手術が必要',
                      desc: '顎の骨にインプラント体を埋め込む手術が必要です。全身疾患のある方は事前の確認が重要です。',
                    },
                    {
                      title: '費用が高い',
                      desc: '自費診療のため、1本あたり30〜50万円程度の費用がかかります。ただし医療費控除の対象です。',
                    },
                    {
                      title: '治療期間が長い',
                      desc: 'インプラント体が骨と結合するまで3〜6ヶ月かかり、全体で4〜8ヶ月程度の治療期間が必要です。',
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-600 text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Implant summary */}
            <div className="mt-6 ml-0 md:ml-[60px] bg-[#395b45]/5 border border-[#395b45]/10 rounded-xl p-5">
              <p className="text-sm text-[#5A4D41] leading-relaxed">
                <strong className="text-[#2d4835]">まとめ：</strong>
                インプラントは見た目・噛む力・耐久性において最も優れた治療法ですが、外科手術を伴うことや費用面での負担があります。
                長期的な口腔の健康を重視される方に適した選択肢です。
              </p>
            </div>
          </div>
        </section>

        {/* Denture Detail */}
        <section className="py-16 px-4 bg-white" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-xl bg-[#C5A572] text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
                2
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835]">
                入れ歯（義歯）
              </h2>
            </div>
            <p className="text-[#5A4D41] leading-relaxed mb-6 ml-0 md:ml-[60px]">
              取り外し式の人工歯で、失った歯を補う最も歴史のある治療法です。
              <strong className="text-[#2d4835]">部分入れ歯</strong>と
              <strong className="text-[#2d4835]">総入れ歯</strong>の2種類があります。
            </p>

            {/* Types of Dentures */}
            <div className="grid md:grid-cols-2 gap-4 mb-8 ml-0 md:ml-[60px]">
              <div className="bg-[#FDFBF7] rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-[#2d4835] mb-2">部分入れ歯</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  残っている歯にクラスプ（金属の留め具）をかけて固定します。
                  失った歯が少ない場合に用いられ、保険適用で作製できます。
                </p>
              </div>
              <div className="bg-[#FDFBF7] rounded-xl p-5 border border-gray-100">
                <h4 className="font-bold text-[#2d4835] mb-2">総入れ歯</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  すべての歯を失った場合に使用します。
                  歯茎の上に義歯床（ピンク色の土台）を載せ、吸着力で固定します。
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-[60px]">
              {/* Pros */}
              <div className="bg-[#FDFBF7] rounded-2xl p-6 shadow-sm border border-[#C5A572]/10">
                <h3 className="font-bold text-[#395b45] text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  メリット
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: '保険適用で費用を抑えられる',
                      desc: '保険適用の入れ歯であれば、数千円〜1万円程度で作製可能です。経済的な負担が最も少ない治療法です。',
                    },
                    {
                      title: '外科手術が不要',
                      desc: '型取りと調整だけで作製できるため、全身疾患のある方や高齢の方でも安心して治療を受けられます。',
                    },
                    {
                      title: '治療期間が短い',
                      desc: '早ければ1〜2週間程度で完成します。すぐに歯を入れたい方に適しています。',
                    },
                    {
                      title: '修理・調整がしやすい',
                      desc: '壊れた場合でも修理が比較的容易で、歯の追加にも対応できます。',
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#395b45] flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#2d4835] text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="bg-[#FDFBF7] rounded-2xl p-6 shadow-sm border border-red-100">
                <h3 className="font-bold text-red-500 text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  デメリット
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: '違和感・不快感がある',
                      desc: '異物感があり、慣れるまで時間がかかります。味覚や発音に影響が出ることもあります。',
                    },
                    {
                      title: '噛む力が弱い',
                      desc: '天然歯と比べて噛む力が20〜30%程度と言われ、硬い食べ物が食べにくくなります。',
                    },
                    {
                      title: '顎の骨が痩せていく',
                      desc: '噛む刺激が骨に十分に伝わらないため、時間とともに顎の骨が吸収（痩せて）いきます。',
                    },
                    {
                      title: '毎日の着脱・清掃が必要',
                      desc: '食後や就寝前に取り外して洗浄する必要があり、日常的な手間がかかります。',
                    },
                    {
                      title: '見た目の問題',
                      desc: '保険適用の部分入れ歯は金属のバネが目立つことがあります。自費のノンクラスプデンチャーで改善可能です。',
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-600 text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Denture summary */}
            <div className="mt-6 ml-0 md:ml-[60px] bg-[#C5A572]/5 border border-[#C5A572]/10 rounded-xl p-5">
              <p className="text-sm text-[#5A4D41] leading-relaxed">
                <strong className="text-[#2d4835]">まとめ：</strong>
                入れ歯は手軽さと費用面で優れた治療法ですが、噛む力や快適さの面では他の治療法に劣ります。
                外科手術を避けたい方や、まずは費用を抑えて歯を補いたい方に適しています。
              </p>
            </div>
          </div>
        </section>

        {/* Bridge Detail */}
        <section className="py-16 px-4 bg-[#FDFBF7]" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-12 rounded-xl bg-[#5A4D41] text-white flex items-center justify-center text-lg font-bold flex-shrink-0">
                3
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835]">
                ブリッジ
              </h2>
            </div>
            <p className="text-[#5A4D41] leading-relaxed mb-8 ml-0 md:ml-[60px]">
              失った歯の両隣の歯を土台として削り、橋（ブリッジ）を渡すように連結した人工歯を被せる治療法です。
              固定式のため入れ歯のような着脱は不要です。
            </p>

            <div className="grid md:grid-cols-2 gap-6 ml-0 md:ml-[60px]">
              {/* Pros */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#5A4D41]/10">
                <h3 className="font-bold text-[#395b45] text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  メリット
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: '固定式で違和感が少ない',
                      desc: '歯に固定されるため、入れ歯のような着脱の手間や異物感がほとんどありません。',
                    },
                    {
                      title: '比較的自然な見た目',
                      desc: '保険適用でも前歯部は白い歯で作製でき、見た目の違和感が少ない仕上がりです。',
                    },
                    {
                      title: '治療期間が比較的短い',
                      desc: '通常2〜3週間程度で完成します。手術も不要で、通院回数も少なめです。',
                    },
                    {
                      title: '保険適用が可能',
                      desc: '条件を満たせば保険適用で治療できます。自費のセラミックブリッジも選択可能です。',
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-[#395b45] flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-[#2d4835] text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-red-100">
                <h3 className="font-bold text-red-500 text-lg mb-4 flex items-center gap-2">
                  <XCircle className="w-5 h-5" />
                  デメリット
                </h3>
                <ul className="space-y-3">
                  {[
                    {
                      title: '健康な歯を大きく削る必要がある',
                      desc: '土台となる両隣の歯を大きく削ります。一度削った歯は元に戻せないため、将来的なリスクが伴います。',
                    },
                    {
                      title: '土台の歯の虫歯リスクが高まる',
                      desc: '削った歯と被せ物の間に汚れが溜まりやすく、二次虫歯のリスクが高くなります。',
                    },
                    {
                      title: '土台の歯に負担がかかる',
                      desc: '失った歯の分の噛む力を土台の歯が負担するため、土台の歯の寿命が短くなる可能性があります。',
                    },
                    {
                      title: '寿命に限りがある',
                      desc: '一般的にブリッジの寿命は7〜10年程度です。再治療が必要になった場合、土台の歯の状態がさらに悪化していることもあります。',
                    },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-red-600 text-sm">{item.title}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bridge summary */}
            <div className="mt-6 ml-0 md:ml-[60px] bg-[#5A4D41]/5 border border-[#5A4D41]/10 rounded-xl p-5">
              <p className="text-sm text-[#5A4D41] leading-relaxed">
                <strong className="text-[#2d4835]">まとめ：</strong>
                ブリッジは固定式で使い心地が良い一方、健康な歯を削る必要がある点が最大のデメリットです。
                手術を避けたいが、入れ歯の違和感が気になる方に選ばれることが多い治療法です。
              </p>
            </div>
          </div>
        </section>

        {/* Decision Guide */}
        <section className="py-16 px-4 bg-white" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-4">
              どの治療が自分に合っている？
            </h2>
            <p className="text-center text-gray-500 mb-10 text-sm max-w-2xl mx-auto">
              以下のチェックポイントを参考に、ご自身に合った治療法を考えてみましょう。
              最終的な判断は、歯科医師とのご相談のうえで決定されることをお勧めします。
            </p>

            <div className="space-y-6">
              {/* Implant recommendation */}
              <div className="bg-[#395b45]/5 rounded-2xl p-6 md:p-8 border border-[#395b45]/10">
                <h3 className="text-xl font-bold text-[#395b45] mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  インプラントが向いている方
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    '見た目の美しさを重視したい',
                    '天然歯のようにしっかり噛みたい',
                    '周囲の健康な歯を傷つけたくない',
                    '長期的な口腔の健康を大切にしたい',
                    '治療期間や費用よりも品質を重視する',
                    '顎の骨の吸収を防ぎたい',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#5A4D41]">
                      <CheckCircle2 className="w-4 h-4 text-[#395b45] mt-0.5 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Denture recommendation */}
              <div className="bg-[#C5A572]/5 rounded-2xl p-6 md:p-8 border border-[#C5A572]/10">
                <h3 className="text-xl font-bold text-[#C5A572] mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  入れ歯が向いている方
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    '費用をできるだけ抑えたい',
                    '外科手術は避けたい',
                    '全身疾患があり手術が難しい',
                    '短期間で歯を入れたい',
                    '多くの歯を失っている',
                    'まずは試してみたい（後から他の治療に変更可能）',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#5A4D41]">
                      <CheckCircle2 className="w-4 h-4 text-[#C5A572] mt-0.5 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bridge recommendation */}
              <div className="bg-[#5A4D41]/5 rounded-2xl p-6 md:p-8 border border-[#5A4D41]/10">
                <h3 className="text-xl font-bold text-[#5A4D41] mb-4 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5" />
                  ブリッジが向いている方
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    '固定式の歯が良いが手術は避けたい',
                    '失った歯が1〜2本で、両隣に健全な歯がある',
                    '入れ歯の着脱の手間が嫌',
                    '比較的短期間で治療を終えたい',
                    '保険適用で費用を抑えたいが、違和感の少なさも重視したい',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#5A4D41]">
                      <CheckCircle2 className="w-4 h-4 text-[#5A4D41] mt-0.5 flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Important Note */}
            <div className="mt-10 bg-[#FF9F43]/5 border border-[#FF9F43]/20 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-[#FF9F43] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-[#2d4835] mb-2">大切なお知らせ</h4>
                  <p className="text-sm text-[#5A4D41] leading-relaxed">
                    どの治療法が最適かは、残っている歯の状態、顎の骨の量、全身の健康状態、
                    ライフスタイル、ご予算など、さまざまな要素によって異なります。
                    このページの情報はあくまで一般的な比較であり、個々の患者様の状況によって
                    最適な治療法は変わります。まずは歯科医師にご相談いただき、
                    精密な検査を受けたうえで、ご自身に最も合った治療法をお選びください。
                  </p>
                </div>
              </div>
            </div>

            {/* Consultation Prompt */}
            <div className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-gray-100">
                <HelpCircle className="w-5 h-5 text-[#395b45]" />
                <p className="text-sm text-[#5A4D41]">
                  どの治療法が良いか迷ったら、まずは
                  <strong className="text-[#395b45]">無料カウンセリング</strong>
                  でご相談ください
                </p>
              </div>
            </div>
          </div>
        </section>

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
                  href="/implant/flow"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">治療の流れ</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/cost"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">費用について</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/safety"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">安全性へのこだわり</span>
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
