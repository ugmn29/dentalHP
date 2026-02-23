import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { TreatmentSteps } from '@/components/implant/TreatmentSteps';
import { PageImage } from '@/components/PageImage';
import {
  CheckCircle,
  Clock,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
  Home,
  ChevronRight,
} from 'lucide-react';

/* ─── SEO Metadata ─── */
export const metadata: Metadata = {
  title: 'インプラント治療の流れ｜8つのステップで安心治療 | F歯科・矯正歯科 豊洲プライムスクエア院',
  description:
    'インプラント治療の流れを8つのステップで詳しく解説。無料カウンセリングから精密検査、手術、人工歯装着、メンテナンスまで、安心・安全な治療プロセスをご紹介します。F歯科・矯正歯科 豊洲プライムスクエア院。',
  keywords:
    'インプラント,治療の流れ,手術の流れ,インプラント手術,治療期間,治療プロセス,歯科インプラント,CT検査,骨結合,アバットメント,人工歯,メンテナンス',
  openGraph: {
    title: 'インプラント治療の流れ｜8つのステップで安心治療 | F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'インプラント治療の流れを8ステップで解説。無料カウンセリングから精密検査、手術、人工歯装着、メンテナンスまでご紹介。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/implant/flow',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

/* ─── Treatment Steps Data ─── */
const treatmentSteps = [
  {
    number: 1,
    title: '無料カウンセリング',
    duration: '30〜60分',
    description:
      '患者様のお悩みやご希望を丁寧にお聞きし、お口の状態を視診で確認します。インプラント治療の概要・費用の目安・治療期間について分かりやすくご説明いたします。他の治療法（入れ歯・ブリッジ）との比較もご案内し、ご納得いただいた上で精密検査へ進みます。',
  },
  {
    number: 2,
    title: '精密検査',
    description:
      '歯科用CT撮影により、顎の骨の厚みや密度、神経・血管の位置を3次元で正確に把握します。パノラマレントゲン撮影、口腔内写真撮影、歯型の採取も行い、お口の中の状態を総合的に診断します。骨の量や質を詳細に分析し、最適なインプラントの種類・サイズ・埋入位置を検討します。',
  },
  {
    number: 3,
    title: '診断・治療計画のご説明',
    description:
      '精密検査の結果をもとに、患者様一人ひとりに合わせた治療計画を作成します。CT画像やシミュレーション画像を使いながら、治療の詳細・期間・費用について丁寧にご説明いたします。ご質問やご不安な点にもしっかりお答えし、十分にご理解・ご同意いただいてから治療を開始します。',
  },
  {
    number: 4,
    title: '術前処置',
    description:
      'インプラント手術を安全に行うための準備を行います。歯周病がある場合は歯周治療を先に行い、口腔内の環境を整えます。虫歯の治療や不適合な補綴物の修正、口腔衛生指導（ブラッシング指導）も行い、手術に最適な口腔環境をつくります。必要に応じて骨造成の処置を行う場合もあります。',
  },
  {
    number: 5,
    title: '一次手術（インプラント埋入）',
    duration: '1〜2時間',
    description:
      '局所麻酔のもと、顎の骨にインプラント体（人工歯根）を埋入する手術を行います。サージカルガイドを用いた精密な手術で、安全かつ正確な位置にインプラントを埋め込みます。痛みや恐怖心が強い方には、静脈内鎮静法を併用し、リラックスした状態で手術を受けていただけます。手術後は仮歯を装着しますので、見た目や食事にも支障はありません。',
  },
  {
    number: 6,
    title: '治癒期間（オッセオインテグレーション）',
    duration: '3〜6ヶ月',
    description:
      'インプラント体と顎の骨がしっかり結合するのを待つ期間です。この過程を「オッセオインテグレーション（骨結合）」と呼びます。上顎で約4〜6ヶ月、下顎で約2〜4ヶ月が一般的です。この間、1〜2ヶ月ごとに定期的にご来院いただき、経過観察と口腔衛生管理を行います。仮歯を装着しているため、日常生活に大きな支障はありません。',
  },
  {
    number: 7,
    title: '二次手術・アバットメント装着',
    description:
      '骨との結合が確認できたら、歯茎を少し切開してインプラント体の頭部を露出させ、アバットメント（土台）を装着します。二次手術は一次手術より負担が少なく、局所麻酔のみで短時間で終了します。その後、歯茎の形態を整えるヒーリングアバットメントを装着し、2〜4週間ほど歯茎の回復を待ちます。',
  },
  {
    number: 8,
    title: '上部構造（人工歯）装着・完成',
    description:
      '歯茎が整ったら、精密な型取りを行い、セラミックやジルコニアなどの素材で上部構造（人工歯・クラウン）を作製します。色や形を天然歯に合わせて調整し、自然で美しい仕上がりを実現します。装着後は噛み合わせの微調整を丁寧に行い、快適な咬合状態を確認して治療完了となります。',
  },
];

/* ─── Timeline Infographic Data ─── */
const timelinePhases = [
  {
    phase: '準備期間',
    steps: 'STEP 1〜4',
    duration: '2〜4週間',
    color: '#395b45',
    description: 'カウンセリング・検査・治療計画',
  },
  {
    phase: '手術期間',
    steps: 'STEP 5',
    duration: '1〜2時間',
    color: '#FF9F43',
    description: 'インプラント体の埋入手術',
  },
  {
    phase: '治癒期間',
    steps: 'STEP 6',
    duration: '3〜6ヶ月',
    color: '#C5A572',
    description: '骨との結合を待つ期間',
  },
  {
    phase: '完成期間',
    steps: 'STEP 7〜8',
    duration: '2〜6週間',
    color: '#395b45',
    description: '土台装着・人工歯の完成',
  },
];

/* ─── Page Component ─── */
export default function ImplantFlowPage() {
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
              <span className="text-[#395b45]">治療の流れ</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                インプラント治療の流れ
              </h1>
              <PageImage path="/implant/flow" alt="インプラント治療の流れ" />
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                8つのステップで安心・安全な治療を
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                カウンセリングから人工歯の装着まで、丁寧にサポートします
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
                  インプラント治療は<span className="bg-yellow-100 font-bold">カウンセリングから完成まで約4〜8ヶ月</span>かかり、8つのステップで進行します。
                </p>
                <p>
                  まず無料カウンセリングとCT検査で治療計画を立て、手術でインプラント体を埋入します。
                  その後<span className="text-[#395b45] font-bold">3〜6ヶ月の治癒期間</span>を経て、骨と結合したら人工歯を装着して完成です。
                </p>
                <p>
                  当院では各ステップを患者様に分かりやすくご説明し、<span className="font-bold">十分にご理解・ご納得いただいた上で治療を進めます</span>。
                  不安なことがあれば、いつでもお気軽にご相談ください。
                </p>
              </div>
            </div>

        {/* Timeline Infographic */}
        <section className="py-16 px-4 bg-white" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3">
                治療期間の全体像
              </h2>
              <p className="text-sm text-gray-500">
                インプラント治療全体の流れと期間の目安
              </p>
            </div>

            {/* Visual Timeline */}
            <div className="bg-gradient-to-br from-[#f5f0e8] to-[#ebe4d8] rounded-2xl p-6 md:p-10">
              {/* Total Duration */}
              <div className="text-center mb-8">
                <p className="text-sm text-[#5A4D41]/70 mb-1">治療期間の目安</p>
                <p className="text-3xl md:text-4xl font-bold text-[#2d4835]">
                  約4〜8ヶ月
                </p>
                <p className="text-xs text-[#5A4D41]/60 mt-1">
                  ※ 骨造成が必要な場合はさらに数ヶ月かかることがあります
                </p>
              </div>

              {/* Phase Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {timelinePhases.map((phase, i) => (
                  <div key={i} className="relative">
                    <div className="bg-white rounded-xl p-5 shadow-sm h-full">
                      <div
                        className="w-full h-1.5 rounded-full mb-4"
                        style={{ backgroundColor: phase.color }}
                      />
                      <p
                        className="text-xs font-bold tracking-wider mb-1"
                        style={{ color: phase.color }}
                      >
                        {phase.steps}
                      </p>
                      <h3 className="font-bold text-[#2d4835] text-base mb-1">
                        {phase.phase}
                      </h3>
                      <p className="text-lg font-bold text-[#5A4D41] mb-2">
                        {phase.duration}
                      </p>
                      <p className="text-xs text-gray-500">{phase.description}</p>
                    </div>
                    {i < timelinePhases.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <ArrowRight className="w-4 h-4 text-[#C5A572]" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Treatment Steps */}
        <section className="py-16 px-4 bg-[#FDFBF7]" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3">
                治療の8ステップ
              </h2>
              <p className="text-sm text-gray-500">
                各ステップの内容を詳しくご説明します
              </p>
            </div>

            <TreatmentSteps steps={treatmentSteps} />
          </div>
        </section>

        {/* Post-Treatment Maintenance Section */}
        <section className="py-16 px-4 bg-white" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3">
                治療後のメンテナンスについて
              </h2>
              <p className="text-sm text-gray-500 max-w-2xl mx-auto">
                インプラントを長く快適にお使いいただくために、治療後の定期メンテナンスが大切です
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#395b45] to-[#2d4835] rounded-2xl p-6 md:p-10 text-white mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-[#C5A572]" />
                    定期メンテナンスの重要性
                  </h3>
                  <div className="space-y-3 text-sm text-white/85 leading-relaxed">
                    <p>
                      インプラントは虫歯にはなりませんが、天然歯と同様に歯周病（インプラント周囲炎）のリスクがあります。
                      インプラント周囲炎が進行すると、インプラントを支える骨が溶けてしまい、最悪の場合インプラントが脱落する可能性があります。
                    </p>
                    <p>
                      そのため、治療後は3〜6ヶ月ごとの定期メンテナンスをお願いしています。
                      適切なメンテナンスを続けることで、インプラントの10年生存率は95%以上と報告されています。
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-[#C5A572]" />
                    メンテナンスの内容
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'インプラント周囲の歯茎の状態チェック',
                      'レントゲンによる骨の状態確認',
                      '噛み合わせの確認・調整',
                      '専用器具によるプロフェッショナルクリーニング',
                      'ブラッシング指導・セルフケアのアドバイス',
                      'インプラント体・アバットメントの緩みの確認',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-white/85">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A572] mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Home Care Tips */}
            <div className="bg-[#FDFBF7] rounded-2xl p-6 md:p-8 border border-gray-100">
              <h3 className="text-lg font-bold text-[#2d4835] mb-4 text-center">
                ご自宅でのセルフケア
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    title: '丁寧なブラッシング',
                    description: 'インプラント周囲を柔らかいブラシで優しく磨きましょう',
                  },
                  {
                    title: '歯間ブラシの使用',
                    description: 'インプラントと天然歯の間の清掃に歯間ブラシが効果的です',
                  },
                  {
                    title: 'デンタルフロス',
                    description: 'インプラント用のフロスで歯と歯の間の汚れを除去しましょう',
                  },
                  {
                    title: '定期的な通院',
                    description: '3〜6ヶ月ごとの定期検診を忘れずに受けましょう',
                  },
                ].map((tip, i) => (
                  <div key={i} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-[#395b45] text-white flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                      {i + 1}
                    </div>
                    <h4 className="font-bold text-[#2d4835] text-sm mb-1">{tip.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{tip.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty Info */}
            <div className="mt-8 bg-white rounded-xl border border-[#C5A572]/30 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-full bg-[#C5A572]/10 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-7 h-7 text-[#C5A572]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2d4835] mb-2">
                    安心の保証制度
                  </h3>
                  <p className="text-sm text-[#5A4D41]/80 leading-relaxed mb-3">
                    当院では、インプラント体に10年、上部構造（人工歯）に5年の保証をお付けしています。
                    定期メンテナンスを継続されている患者様が対象となります。
                    万が一トラブルが発生した場合も、保証期間内であれば無償で対応いたします。
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#395b45]/10 text-[#395b45] px-3 py-1.5 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" />
                      インプラント体 10年保証
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#C5A572]/10 text-[#C5A572] px-3 py-1.5 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" />
                      上部構造 5年保証
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ about the flow */}
        <section className="py-16 px-4 bg-[#FDFBF7]" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-3">
              治療の流れに関するよくある質問
            </h2>
            <p className="text-center text-gray-500 mb-10 text-sm">
              患者様からよくいただくご質問にお答えします
            </p>
            <div className="space-y-4">
              {[
                {
                  q: '治療期間はどのくらいですか？',
                  a: '一般的に4〜8ヶ月程度です。骨造成が必要な場合は、さらに数ヶ月かかることがあります。治癒期間は上顎で4〜6ヶ月、下顎で2〜4ヶ月が目安です。',
                },
                {
                  q: '手術中の痛みはありますか？',
                  a: '局所麻酔をしっかり行いますので、手術中の痛みはほとんどありません。痛みや恐怖心が強い方には、静脈内鎮静法を併用してリラックスした状態で手術を受けていただけます。',
                },
                {
                  q: '手術後はすぐに食事ができますか？',
                  a: '手術当日は柔らかい食事をお取りください。仮歯を装着しますので、見た目や日常生活には大きな支障はありません。1週間ほどで通常の食事に戻れる方がほとんどです。',
                },
                {
                  q: '通院回数はどのくらいですか？',
                  a: '治療の内容にもよりますが、おおよそ8〜12回程度の通院が必要です。治癒期間中は1〜2ヶ月に1回の来院で経過を確認します。',
                },
                {
                  q: '治療中に仕事を休む必要はありますか？',
                  a: '一次手術の翌日から通常のお仕事は可能です。ただし、激しい運動や飲酒は2〜3日お控えいただくことをお願いしています。デスクワークの方であれば、手術当日の午後からお仕事に戻られる方もいらっしゃいます。',
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-gray-100 p-5 md:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="w-7 h-7 rounded-full bg-[#395b45] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                      Q
                    </span>
                    <h3 className="font-bold text-[#2d4835] text-base">{faq.q}</h3>
                  </div>
                  <div className="flex items-start gap-3 pl-0 md:pl-10">
                    <span className="w-7 h-7 rounded-full bg-[#FF9F43]/10 text-[#FF9F43] flex items-center justify-center text-xs font-bold flex-shrink-0">
                      A
                    </span>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
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
                  href="/implant/comparison"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">入れ歯・ブリッジとの比較</span>
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
