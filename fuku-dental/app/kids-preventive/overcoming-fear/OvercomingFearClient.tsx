"use client";

import React from 'react';
import { PageImage } from '@/components/PageImage';
import { CheckCircle2, ArrowRight, Calendar, Phone, Heart, Star } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';

export default function OvercomingFearPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-[#FDFBF7] py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-[#5A4D41]">
                        <a href="/" className="hover:text-[#395b45] transition-colors">
                            ホーム
                        </a>
                        <span>/</span>
                        <a href="/kids-preventive" className="hover:text-[#395b45] transition-colors">
                            こども歯科・予防
                        </a>
                        <span>/</span>
                        <span className="text-[#395b45] font-medium">歯医者嫌い克服法</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#395b45] via-[#4a6c56] to-[#2d4835] text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm tracking-widest mb-4 opacity-90">
                            OVERCOMING DENTAL FEAR
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                            子供の歯医者嫌い克服法
                        </h1>
                        <PageImage path="/kids-preventive/overcoming-fear" alt="子供の歯医者嫌い克服法" />
                        <p className="text-lg md:text-xl leading-relaxed opacity-95">
                            泣いて嫌がるお子様も、正しいアプローチで必ず克服できます。<br />
                            豊洲駅徒歩2分のF歯科のステップアップ方式で、歯医者を「怖くない場所」に
                        </p>
                    </div>
                </div>
            </section>

            {/* Conclusion Section */}
            <section className="py-2 bg-[#FDFBF7]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-2xl p-8 md:p-12 shadow-lg">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#395b45] mb-6 text-center font-serif">
                                歯医者嫌いは克服できます
                            </h2>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    「うちの子は歯医者が大嫌いで、診察台に座ることすらできない…」<br />
                                    そんなお悩みをお持ちの保護者の方、<span className="font-bold bg-yellow-100">諦める必要はありません</span>。
                                </p>
                                <p>
                                    実は、お子様が歯医者を嫌がるのには<span className="text-[#395b45] font-bold">明確な理由</span>があり、
                                    <span className="text-[#395b45] font-bold">正しいステップを踏めば、ほとんどのお子様が克服できます</span>。
                                </p>
                                <p>
                                    豊洲の歯医者である当院では、<span className="font-bold bg-yellow-100">「無理やり治療しない」</span>ことを大切にしています。
                                    お子様のペースに合わせた「ステップアップ方式」で、
                                    少しずつ慣れていくことで、最終的には笑顔で通える歯医者になることを目指しています。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-2 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-16">
                        {/* なぜ子供は歯医者が嫌いなのか？ */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    なぜ子供は歯医者が嫌いなのか？
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p>
                                    お子様が歯医者を嫌がるのは、「わがまま」でも「怖がり」でもありません。
                                    <span className="text-[#395b45] font-bold">お子様なりの正当な理由</span>があります。
                                </p>

                                <div className="space-y-4">
                                    {/* 理由1 */}
                                    <div className="bg-[#FDFBF7] rounded-xl p-6">
                                        <h4 className="text-xl font-bold text-[#395b45] mb-4 flex items-center gap-2">
                                            <span className="bg-[#395b45] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">1</span>
                                            初めての環境・音・匂いへの恐怖
                                        </h4>
                                        <p className="text-sm ml-10">
                                            歯科医院特有の「機械の音」「消毒液の匂い」「白衣の人」は、
                                            <span className="font-bold bg-yellow-100">大人でも緊張する非日常的な環境</span>です。
                                            特に初めての経験では、「何をされるかわからない」という不安が強くなります。
                                        </p>
                                    </div>

                                    {/* 理由2 */}
                                    <div className="bg-[#FDFBF7] rounded-xl p-6">
                                        <h4 className="text-xl font-bold text-[#395b45] mb-4 flex items-center gap-2">
                                            <span className="bg-[#395b45] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">2</span>
                                            過去の痛い・怖い体験
                                        </h4>
                                        <p className="text-sm ml-10">
                                            一度でも「痛い」「怖い」と感じた経験があると、
                                            <span className="text-[#395b45] font-bold">その記憶が強く残り、次の来院が恐怖になってしまいます</span>。
                                            特に3〜5歳の時期の記憶は、その後の歯科治療への態度に大きく影響します。
                                        </p>
                                    </div>

                                    {/* 理由3 */}
                                    <div className="bg-[#FDFBF7] rounded-xl p-6">
                                        <h4 className="text-xl font-bold text-[#395b45] mb-4 flex items-center gap-2">
                                            <span className="bg-[#395b45] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">3</span>
                                            口の中を触られることへの抵抗感
                                        </h4>
                                        <p className="text-sm ml-10">
                                            口の中は<span className="font-bold bg-yellow-100">非常に敏感な場所</span>で、
                                            他人に触られることへの本能的な抵抗があります。
                                            また、診察中は口を開けたままになるため、「話せない」「助けを呼べない」という不安も生まれます。
                                        </p>
                                    </div>

                                    {/* 理由4 */}
                                    <div className="bg-[#FDFBF7] rounded-xl p-6">
                                        <h4 className="text-xl font-bold text-[#395b45] mb-4 flex items-center gap-2">
                                            <span className="bg-[#395b45] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">4</span>
                                            保護者の不安が伝わる
                                        </h4>
                                        <p className="text-sm ml-10">
                                            実は、<span className="text-[#395b45] font-bold">保護者の方の緊張や不安は、お子様に伝わります</span>。
                                            「痛くないから大丈夫」「怖くないよ」という言葉が、
                                            逆に「痛いかもしれない」「怖いかもしれない」という暗示になることもあります。
                                        </p>
                                    </div>

                                    {/* 理由5 */}
                                    <div className="bg-[#FDFBF7] rounded-xl p-6">
                                        <h4 className="text-xl font-bold text-[#395b45] mb-4 flex items-center gap-2">
                                            <span className="bg-[#395b45] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm flex-shrink-0">5</span>
                                            コントロールできない状況への不安
                                        </h4>
                                        <p className="text-sm ml-10">
                                            診察台に寝かされ、大人に囲まれた状況は、
                                            お子様にとって<span className="font-bold bg-yellow-100">「自分ではどうにもできない」無力感</span>を生みます。
                                            特に、普段は自分でできることが増えてきた年齢のお子様ほど、この状況にストレスを感じます。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-[#395b45] rounded p-6 mt-6">
                                    <p className="text-[#5A4D41] leading-loose">
                                        <span className="font-bold text-[#395b45]">重要なポイント:</span><br />
                                        これらの恐怖は<span className="text-[#395b45] font-bold">すべて正常な反応</span>です。
                                        「怖がりな子」ではなく、「慎重な子」「感受性が豊かな子」と考え、
                                        焦らずゆっくりと慣れさせていくことが大切です。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* F歯科・矯正歯科 豊洲プライムスクエア院のステップアップ方式 */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    F歯科・矯正歯科 豊洲プライムスクエア院のステップアップ方式
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p className="text-center mb-8">
                                    当院では、<span className="font-bold bg-yellow-100">お子様のペースに合わせた段階的なアプローチ</span>で、
                                    無理なく歯医者に慣れていけるよう工夫しています。
                                </p>

                                {/* STEP 1 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-2xl p-8 shadow-lg">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-[#395b45] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                                            1
                                        </div>
                                        <h4 className="text-2xl font-bold text-[#395b45]">まずは歯医者に慣れる</h4>
                                    </div>
                                    <div className="ml-20 space-y-4">
                                        <p className="font-bold text-[#395b45]">目標: 診察室に入れるようになる</p>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>待合室で絵本やおもちゃで遊んでリラックス</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>スタッフと楽しくお話して、「歯医者は怖くない人がいる場所」と認識</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>診察室を見学して、どんな場所か確認</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>保護者の膝の上で安心感を持たせる</span>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 mt-4">
                                            <p className="text-xs text-[#5A4D41]">
                                                <Heart className="inline text-[#395b45] mr-1" size={16} />
                                                <span className="font-bold">ポイント:</span> この段階では何も「治療」しません。
                                                「歯医者は楽しい場所」という印象を持ってもらうことが最優先です。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* STEP 2 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-2xl p-8 shadow-lg">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-[#395b45] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                                            2
                                        </div>
                                        <h4 className="text-2xl font-bold text-[#395b45]">診察台に座る練習</h4>
                                    </div>
                                    <div className="ml-20 space-y-4">
                                        <p className="font-bold text-[#395b45]">目標: 診察台に一人で座れるようになる</p>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>まずは保護者と一緒に診察台に座ってみる</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>診察台を上下に動かして、「乗り物みたいで楽しい」と感じてもらう</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>ライトを点けたり消したりして、怖くないことを確認</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>鏡を見せて「お口の中を見せてね」と声かけ</span>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 mt-4">
                                            <p className="text-xs text-[#5A4D41]">
                                                <Heart className="inline text-[#395b45] mr-1" size={16} />
                                                <span className="font-bold">ポイント:</span> できたら大げさに褒めてあげます。
                                                小さな成功体験を積み重ねることが、自信につながります。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* STEP 3 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-2xl p-8 shadow-lg">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-[#395b45] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                                            3
                                        </div>
                                        <h4 className="text-2xl font-bold text-[#395b45]">器具に触れてみる</h4>
                                    </div>
                                    <div className="ml-20 space-y-4">
                                        <p className="font-bold text-[#395b45]">目標: 歯科器具が怖くないことを知る</p>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>鏡を手に持たせて「これで見るだけだよ」と説明</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>バキューム（吸う機械）を手のひらで触って、「ここに水を吸わせるよ」と体験</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>エアー（風を出す機械）を手に当てて「風が出るだけだよ」と確認</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>回転ブラシを見せて、動いている様子を観察</span>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 mt-4">
                                            <p className="text-xs text-[#5A4D41]">
                                                <Heart className="inline text-[#395b45] mr-1" size={16} />
                                                <span className="font-bold">ポイント:</span> 「Tell-Show-Do（話す→見せる→やる）」の手法で、
                                                何をするか事前に説明し、実際に見せてから使います。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* STEP 4 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-2xl p-8 shadow-lg">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-[#395b45] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                                            4
                                        </div>
                                        <h4 className="text-2xl font-bold text-[#395b45]">簡単なチェックから始める</h4>
                                    </div>
                                    <div className="ml-20 space-y-4">
                                        <p className="font-bold text-[#395b45]">目標: 口を開けて、歯を見せられるようになる</p>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>「10数えるまで口を開けていられるかな？」とゲーム感覚で</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>鏡で歯をチェックするだけ（痛くないことを確認）</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>歯ブラシで優しく磨いてみる</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>できたらシールやガチャガチャのご褒美</span>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 mt-4">
                                            <p className="text-xs text-[#5A4D41]">
                                                <Heart className="inline text-[#395b45] mr-1" size={16} />
                                                <span className="font-bold">ポイント:</span> この段階でも「治療」はしません。
                                                口を開けて、器具が入っても大丈夫という経験を積みます。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* STEP 5 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-2xl p-8 shadow-lg">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-[#395b45] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                                            5
                                        </div>
                                        <h4 className="text-2xl font-bold text-[#395b45]">予防処置を受けてみる</h4>
                                    </div>
                                    <div className="ml-20 space-y-4">
                                        <p className="font-bold text-[#395b45]">目標: フッ素塗布やクリーニングを受けられるようになる</p>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>専用ブラシで歯のクリーニング（気持ちいい体験）</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>フッ素塗布（好きな味を選べる楽しみ）</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>「虫歯バイキンをやっつけたよ！」と達成感を共有</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>保護者の方と一緒に「すごいね！」と褒め合う</span>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 mt-4">
                                            <p className="text-xs text-[#5A4D41]">
                                                <Heart className="inline text-[#395b45] mr-1" size={16} />
                                                <span className="font-bold">ポイント:</span> 予防処置は痛みがないため、
                                                「歯医者でやることは気持ちいい・スッキリする」というポジティブな印象を持ってもらえます。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* STEP 6 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-2xl p-8 shadow-lg">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="bg-[#395b45] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold flex-shrink-0">
                                            6
                                        </div>
                                        <h4 className="text-2xl font-bold text-[#395b45]">必要なら治療へ</h4>
                                    </div>
                                    <div className="ml-20 space-y-4">
                                        <p className="font-bold text-[#395b45]">目標: 落ち着いて治療を受けられるようになる</p>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>これまでの成功体験があるので、自信を持って臨める</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>「これが終わったらご褒美があるよ」とゴールを明確に</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>痛みが予想される場合は、しっかり麻酔で痛みをコントロール</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span>「頑張ったね！偉かったよ！」と全力で褒める</span>
                                            </div>
                                        </div>
                                        <div className="bg-white rounded-xl p-4 mt-4">
                                            <p className="text-xs text-[#5A4D41]">
                                                <Heart className="inline text-[#395b45] mr-1" size={16} />
                                                <span className="font-bold">ポイント:</span> ここまでのステップを踏んでいれば、
                                                多くのお子様は治療を受け入れられるようになっています。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-[#395b45] rounded p-6 mt-8">
                                    <p className="text-[#5A4D41] leading-loose">
                                        <span className="font-bold text-[#395b45]">大切なのは「焦らないこと」:</span><br />
                                        <span className="font-bold bg-yellow-100">お子様によってペースは違います</span>。
                                        1回の来院で次のステップに進めることもあれば、数回かけてじっくり慣れる必要があることもあります。
                                        当院では、お子様一人ひとりの成長に合わせて、無理なく進めていきます。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 家庭でできる歯医者嫌い予防法 */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    家庭でできる歯医者嫌い予防法
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p>
                                    歯医者での取り組みと同じくらい、<span className="font-bold bg-yellow-100">ご家庭での声かけや準備が重要</span>です。
                                    以下のポイントを意識すると、お子様の歯医者への抵抗感を減らすことができます。
                                </p>

                                <div className="space-y-6">
                                    {/* やるべきこと */}
                                    <div className="bg-green-50 border-2 border-[#395b45] rounded-xl p-6">
                                        <h4 className="text-xl font-bold text-[#395b45] mb-4 flex items-center gap-2">
                                            <CheckCircle2 className="text-[#395b45]" size={24} />
                                            やるべきこと（DO）
                                        </h4>
                                        <div className="space-y-4 ml-8">
                                            <div>
                                                <h5 className="font-bold text-[#395b45] mb-2">✓ 歯医者を日常の一部にする</h5>
                                                <p className="text-sm">
                                                    「今日は歯医者さんに行って、ピカピカにしてもらおうね」と、
                                                    <span className="text-[#395b45] font-bold">美容院や公園に行くような気軽なトーンで話す</span>。
                                                    特別な場所として意識させすぎないことがポイントです。
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#395b45] mb-2">✓ 歯医者ごっこで遊ぶ</h5>
                                                <p className="text-sm">
                                                    お人形やぬいぐるみの歯をチェックする遊びをすることで、
                                                    <span className="text-[#395b45] font-bold">歯医者で何をするかイメージトレーニング</span>ができます。
                                                    「あーんして〜」「上手だね！」と楽しく遊びましょう。
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#395b45] mb-2">✓ 歯医者の絵本を読む</h5>
                                                <p className="text-sm">
                                                    「はみがきれっしゃ」「むしばいっかのおひっこし」など、
                                                    歯や歯医者をテーマにした絵本を読むことで、
                                                    <span className="text-[#395b45] font-bold">歯医者へのポジティブなイメージ</span>が育ちます。
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#395b45] mb-2">✓ ご褒美を設定する</h5>
                                                <p className="text-sm">
                                                    「頑張ったら、帰りに公園に寄ろうね」「シールをもらえるよ」など、
                                                    <span className="text-[#395b45] font-bold">楽しみを作ってモチベーションアップ</span>。
                                                    ただし、「できなかったら無し」という脅しにならないように注意。
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#395b45] mb-2">✓ 保護者がリラックスする</h5>
                                                <p className="text-sm">
                                                    <span className="font-bold bg-yellow-100">保護者の不安はお子様に伝わります</span>。
                                                    「大丈夫、優しい先生だよ」と、自分自身にも言い聞かせながら、
                                                    リラックスした態度で臨みましょう。
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-[#395b45] mb-2">✓ 小さな成功を大げさに褒める</h5>
                                                <p className="text-sm">
                                                    「診察室に入れただけで偉い！」「口を開けられて素晴らしい！」と、
                                                    <span className="text-[#395b45] font-bold">小さなステップでも全力で褒める</span>ことが、
                                                    次への意欲につながります。
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* やってはいけないこと */}
                                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                                        <h4 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                                            <span className="text-2xl">✕</span>
                                            やってはいけないこと（DON'T）
                                        </h4>
                                        <div className="space-y-4 ml-8">
                                            <div>
                                                <h5 className="font-bold text-red-700 mb-2">✕ 「痛くないよ」と嘘をつく</h5>
                                                <p className="text-sm text-[#5A4D41]">
                                                    実際に痛かった場合、<span className="font-bold bg-yellow-100">「嘘をつかれた」という不信感</span>が生まれます。
                                                    「ちょっとチクッとするかもしれないけど、すぐ終わるよ」と正直に伝える方が良いです。
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-red-700 mb-2">✕ 「注射するよ」「削るよ」と脅す</h5>
                                                <p className="text-sm text-[#5A4D41]">
                                                    「言うこと聞かないと歯医者で注射してもらうよ」という脅しは、
                                                    <span className="text-red-700 font-bold">歯医者=罰という誤ったイメージ</span>を植え付けてしまいます。
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-red-700 mb-2">✕ 「泣かないで」と叱る</h5>
                                                <p className="text-sm text-[#5A4D41]">
                                                    泣くことは<span className="text-[#395b45] font-bold">感情を表現する正常な反応</span>です。
                                                    「怖かったね、でも頑張ったね」と共感してあげることが大切です。
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-red-700 mb-2">✕ 無理やり連れて行く</h5>
                                                <p className="text-sm text-[#5A4D41]">
                                                    嫌がっているのに無理やり連れて行くと、
                                                    <span className="font-bold bg-yellow-100">歯医者への恐怖がさらに強化</span>されてしまいます。
                                                    時間をかけてでも、納得してから来院することが重要です。
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-red-700 mb-2">✕ 「もう行かなくていい」と諦める</h5>
                                                <p className="text-sm text-[#5A4D41]">
                                                    虫歯を放置すると、<span className="text-red-700 font-bold">さらに痛い思いをすることになり、悪循環</span>に陥ります。
                                                    当院に相談いただければ、お子様に合ったペースで進められます。
                                                </p>
                                            </div>
                                            <div>
                                                <h5 className="font-bold text-red-700 mb-2">✕ 他の子と比較する</h5>
                                                <p className="text-sm text-[#5A4D41]">
                                                    「〇〇ちゃんはできたのに」という比較は、
                                                    <span className="text-[#395b45] font-bold">お子様の自尊心を傷つけ、やる気を失わせます</span>。
                                                    その子のペースを尊重してあげましょう。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 年齢別のアプローチ */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    年齢別のアプローチ
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p>
                                    お子様の発達段階によって、効果的なアプローチは変わります。
                                </p>

                                {/* 0〜2歳 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        0〜2歳：慣れることが目標
                                    </h4>
                                    <div className="space-y-3 text-sm">
                                        <p>
                                            この時期は<span className="font-bold bg-yellow-100">「歯医者は楽しい場所」という第一印象</span>が最重要です。
                                        </p>
                                        <div className="ml-4 space-y-2">
                                            <p>• 保護者の膝の上で安心感を持たせる</p>
                                            <p>• おもちゃや絵本で気を引きながら、短時間で終わらせる</p>
                                            <p>• 泣いても叱らず、「頑張ったね」と褒める</p>
                                            <p>• 定期的に通って、場所に慣れさせる（3〜4ヶ月に1回）</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 3〜5歳 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        3〜5歳：理解力と協力が得られる
                                    </h4>
                                    <div className="space-y-3 text-sm">
                                        <p>
                                            <span className="text-[#395b45] font-bold">「なぜ歯医者に行くのか」を簡単に説明できる</span>年齢です。
                                        </p>
                                        <div className="ml-4 space-y-2">
                                            <p>• 「バイキンをやっつけに行こう！」とストーリー仕立てで説明</p>
                                            <p>• 「10数えたら終わり」など、ゴールを明確にする</p>
                                            <p>• できたらシールやご褒美で達成感を持たせる</p>
                                            <p>• 「お兄さん/お姉さんだからできるね」と自尊心を刺激</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 6歳以上 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        6歳以上：自分の意思で協力できる
                                    </h4>
                                    <div className="space-y-3 text-sm">
                                        <p>
                                            <span className="font-bold bg-yellow-100">虫歯の仕組みや予防の大切さを理解できる</span>ようになります。
                                        </p>
                                        <div className="ml-4 space-y-2">
                                            <p>• 鏡を見せながら、虫歯の状態や治療内容を説明</p>
                                            <p>• 「自分の歯を守るため」という意識を持たせる</p>
                                            <p>• 「痛かったら手を挙げてね」とコミュニケーション手段を確保</p>
                                            <p>• 自分で「頑張る」と決めさせ、主体性を尊重</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-2 bg-[#FDFBF7]">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <p className="text-sm text-[#C5A572] tracking-widest mb-2">FAQ</p>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">
                                歯医者嫌いに関するよくある質問
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        何歳から歯医者に通い始めるべきですか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="font-bold bg-yellow-100">歯が生え始めたら（生後6ヶ月頃）</span>、
                                        初めての歯科検診をおすすめします。
                                    </p>
                                    <p className="mb-3">
                                        この時期から定期的に通うことで、<span className="text-[#395b45] font-bold">歯医者が「特別な場所」ではなく「日常の一部」</span>として認識され、
                                        歯医者嫌いになりにくくなります。
                                    </p>
                                    <p>
                                        また、早期から通うことで、虫歯の早期発見や正しい歯磨き指導も受けられます。
                                        1歳半検診や3歳児検診のタイミングで初めて来院される方も多いです。
                                    </p>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        どうしても泣いて暴れてしまう場合、治療はできませんか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        まず、<span className="text-[#395b45] font-bold">緊急性がない場合は無理に治療しません</span>。
                                        ステップアップ方式で、時間をかけて慣れていくことを優先します。
                                    </p>
                                    <p className="mb-3">
                                        ただし、<span className="font-bold bg-yellow-100">痛みがある・腫れている・感染のリスクがあるなど、緊急性が高い場合</span>は、
                                        お子様の安全を最優先に、以下の方法を検討します。
                                    </p>
                                    <div className="ml-4 space-y-2 mb-3 text-sm">
                                        <p>• <span className="font-bold text-[#395b45]">抑制治療:</span> 保護者の協力を得て、安全に固定して短時間で治療</p>
                                        <p>• <span className="font-bold text-[#395b45]">笑気吸入鎮静法:</span> リラックスできるガスを吸いながら治療</p>
                                        <p>• <span className="font-bold text-[#395b45]">大学病院への紹介:</span> 全身麻酔下での治療が必要な場合</p>
                                    </div>
                                    <p>
                                        いずれの方法も、保護者の方とよく相談した上で決定します。
                                    </p>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        親が診察室に一緒に入っても良いですか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="font-bold bg-yellow-100">もちろん大丈夫です</span>。
                                        特に小さなお子様や、初めての来院の場合は、
                                        <span className="text-[#395b45] font-bold">保護者の方が一緒にいることで安心感が生まれます</span>。
                                    </p>
                                    <p className="mb-3">
                                        ただし、お子様の成長に応じて、「一人で頑張ってみる」という選択肢も提案します。
                                        保護者の方が見ていると甘えてしまう場合や、
                                        逆に「お母さん/お父さんに見られたくない」と思う年齢になったら、
                                        待合室で待っていただくこともあります。
                                    </p>
                                    <p>
                                        お子様の様子を見ながら、柔軟に対応しますので、ご希望があればお気軽にお伝えください。
                                    </p>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        一度トラウマになってしまった子でも克服できますか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="text-[#395b45] font-bold">はい、克服できます</span>。
                                        時間はかかるかもしれませんが、<span className="font-bold bg-yellow-100">適切なアプローチで必ず改善します</span>。
                                    </p>
                                    <p className="mb-3">
                                        トラウマがある場合は、より慎重にステップを踏んでいきます。
                                    </p>
                                    <div className="ml-4 space-y-2 mb-3 text-sm">
                                        <p>• まずは「この歯医者は前と違う」ことを体験してもらう</p>
                                        <p>• 待合室で遊ぶだけ、診察室を見るだけでもOK</p>
                                        <p>• 小さな成功体験を積み重ねて、自信を取り戻す</p>
                                        <p>• 保護者の方からも「前とは違う歯医者だよ」と伝えてもらう</p>
                                    </div>
                                    <p>
                                        実際に、他院でトラウマを抱えたお子様が、
                                        当院のステップアップ方式で笑顔で通えるようになった例は多くあります。
                                        諦めずに、ぜひ一度ご相談ください。
                                    </p>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        ステップアップ方式で慣れるまで、どのくらいの期間がかかりますか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="font-bold bg-yellow-100">お子様によって大きく異なります</span>。
                                    </p>
                                    <p className="mb-3">
                                        早い子は1〜2回の来院で治療まで進めることもありますし、
                                        慎重な性格のお子様は数ヶ月かけてじっくり慣れることもあります。
                                    </p>
                                    <p className="mb-3">
                                        <span className="text-[#395b45] font-bold">平均的には、3〜5回の来院</span>で、
                                        簡単なチェックやフッ素塗布が受けられるようになるお子様が多いです。
                                    </p>
                                    <p>
                                        焦らず、お子様のペースに合わせることが、
                                        結果的に<span className="text-[#395b45] font-bold">「一生涯、歯医者に通える子」</span>を育てることにつながります。
                                    </p>
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="py-2 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif">
                                関連ページ
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <a
                                href="/kids-preventive/brushing"
                                className="group bg-[#FDFBF7] rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3 group-hover:text-[#395b45] transition-colors">
                                    仕上げ磨きガイド
                                </h3>
                                <p className="text-[#5A4D41] text-sm mb-4 leading-relaxed">
                                    いつまで必要？嫌がるときの対処法など、仕上げ磨きの全てをご紹介します。
                                </p>
                                <span className="inline-flex items-center gap-2 text-[#395b45] font-medium text-sm group-hover:gap-3 transition-all">
                                    詳しく見る <ArrowRight size={16} />
                                </span>
                            </a>

                            <a
                                href="/kids-preventive/fluoride"
                                className="group bg-[#FDFBF7] rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3 group-hover:text-[#395b45] transition-colors">
                                    フッ素塗布完全ガイド
                                </h3>
                                <p className="text-[#5A4D41] text-sm mb-4 leading-relaxed">
                                    フッ素塗布の効果、安全性、いつから始めるべきかなど、詳しく解説します。
                                </p>
                                <span className="inline-flex items-center gap-2 text-[#395b45] font-medium text-sm group-hover:gap-3 transition-all">
                                    詳しく見る <ArrowRight size={16} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-2 bg-gradient-to-br from-[#395b45] via-[#4a6c56] to-[#2d4835] text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                            歯医者嫌いのお子様も<br />
                            安心してお任せください
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed opacity-95">
                            当院は「無理やり治療しない」ことを約束します。<br />
                            お子様のペースで、一緒に頑張りましょう。
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:0120-xxx-xxx"
                                className="inline-flex items-center justify-center gap-2 bg-white text-[#395b45] px-8 py-4 rounded-full font-bold hover:bg-[#FDFBF7] transition-colors shadow-lg"
                            >
                                <Phone size={20} />
                                電話で予約
                            </a>
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#395b45] transition-colors"
                            >
                                <Calendar size={20} />
                                WEB予約
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
