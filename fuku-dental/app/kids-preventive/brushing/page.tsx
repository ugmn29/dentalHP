"use client";

import React from 'react';
import { CheckCircle2, ArrowRight, Calendar, Phone } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';

export default function BrushingGuidePage() {
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
                        <span className="text-[#395b45] font-medium">仕上げ磨きガイド</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#395b45] via-[#4a6c56] to-[#2d4835] text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm tracking-widest mb-4 opacity-90">
                            FINISHING BRUSHING GUIDE
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                            仕上げ磨きガイド
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed opacity-95">
                            「いつまで必要？」「嫌がるときはどうする？」<br />
                            お子様の健康な歯を守る、正しい仕上げ磨きの方法をご紹介します
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
                                仕上げ磨きは小学校低学年まで必要です
                            </h2>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    「もう自分で磨けるから大丈夫」と思っていませんか？<br />
                                    実は、<span className="font-bold bg-yellow-100">お子様が自分できちんと磨けるようになるのは、早くても8〜9歳頃</span>です。
                                </p>
                                <p>
                                    それまでは、<span className="text-[#395b45] font-bold">毎日の仕上げ磨きが虫歯予防の最も重要な習慣</span>となります。
                                    特に、奥歯の溝や歯と歯の間は、お子様だけでは磨き残しが多い箇所です。
                                </p>
                                <p>
                                    当院では、年齢に応じた正しい仕上げ磨きの方法や、嫌がるお子様への対処法もアドバイスしています。
                                    毎日のケアで、お子様の歯を虫歯から守りましょう。
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
                        {/* 仕上げ磨きはいつまで必要？ */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    仕上げ磨きはいつまで必要？
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p>
                                    歯科医師の立場から言えば、仕上げ磨きは<span className="font-bold bg-yellow-100">小学校低学年（8〜9歳頃）までは毎日行うことをおすすめ</span>します。
                                </p>
                                <p>
                                    この年齢になると、手先の器用さが発達し、細かい動きができるようになり、
                                    歯ブラシを正しい角度で当てる技術が身についてきます。
                                    また、<span className="text-[#395b45] font-bold">虫歯になりやすい「6歳臼歯（第一大臼歯）」が完全に生え揃う</span>のもこの時期です。
                                </p>

                                <div className="bg-[#FDFBF7] rounded-xl p-6 my-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4 flex items-center gap-2">
                                        <CheckCircle2 className="text-[#395b45]" size={24} />
                                        年齢別の目安
                                    </h4>
                                    <div className="space-y-3 text-[#5A4D41]">
                                        <div className="flex gap-3">
                                            <span className="font-bold text-[#395b45] whitespace-nowrap">0〜3歳:</span>
                                            <span>100%保護者が仕上げ磨き（お子様は練習として自分で磨く）</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <span className="font-bold text-[#395b45] whitespace-nowrap">4〜6歳:</span>
                                            <span>自分で磨く習慣をつけつつ、必ず保護者が仕上げ磨き</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <span className="font-bold text-[#395b45] whitespace-nowrap">7〜9歳:</span>
                                            <span>自分磨きの精度が上がるが、奥歯や裏側など磨き残しチェック必須</span>
                                        </div>
                                        <div className="flex gap-3">
                                            <span className="font-bold text-[#395b45] whitespace-nowrap">10歳〜:</span>
                                            <span>週に数回のチェックに移行。定期的に歯科医院でプロのチェックを</span>
                                        </div>
                                    </div>
                                </div>

                                <p>
                                    ただし、お子様の成長スピードには個人差があります。
                                    <span className="text-[#395b45] font-bold">歯科医院での定期検診で、磨き残しの状態を確認しながら、仕上げ磨きの頻度を調整</span>していくことをおすすめします。
                                </p>
                            </div>
                        </div>

                        {/* 年齢別の仕上げ磨きのやり方 */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    年齢別の仕上げ磨きのやり方
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                {/* 0〜2歳 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        0〜2歳：慣れることが最優先
                                    </h4>
                                    <div className="space-y-3">
                                        <p>
                                            この時期は、<span className="font-bold bg-yellow-100">歯磨きに慣れさせることが最も重要</span>です。
                                            無理に完璧に磨こうとせず、楽しい雰囲気づくりを心がけましょう。
                                        </p>
                                        <div className="ml-4 space-y-2">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">姿勢:</span> 保護者の膝の上に寝かせて、顔をのぞき込む姿勢</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">ブラシ:</span> 乳児用のやわらかい歯ブラシ（ヘッドが小さいもの）</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">力加減:</span> 軽く優しく、1本ずつ丁寧に（ゴシゴシしない）</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">時間:</span> 30秒〜1分程度でOK。歌を歌いながら楽しく</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 3〜5歳 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        3〜5歳：しっかり磨く習慣づけ
                                    </h4>
                                    <div className="space-y-3">
                                        <p>
                                            乳歯が生え揃い、<span className="font-bold bg-yellow-100">虫歯リスクが最も高まる時期</span>です。
                                            お子様自身にも歯ブラシを持たせ、磨く練習をさせながら、最後に保護者がしっかり仕上げ磨きを行います。
                                        </p>
                                        <div className="ml-4 space-y-2">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">姿勢:</span> 膝の上か、立った状態で後ろから抱きかかえる</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">重点箇所:</span> 奥歯の溝、歯と歯の間、歯と歯ぐきの境目</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">角度:</span> 歯ブラシを歯に対して90度、歯ぐきに対して45度</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">動かし方:</span> 小刻みに横に動かす（1〜2mm幅）</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">時間:</span> 2〜3分かけて、全体をくまなく</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* 6〜9歳 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        6〜9歳：永久歯への生え変わり期
                                    </h4>
                                    <div className="space-y-3">
                                        <p>
                                            <span className="font-bold bg-yellow-100">6歳臼歯（第一大臼歯）が生えてくる重要な時期</span>です。
                                            この歯は一生使う永久歯で、虫歯になりやすいため、特に注意が必要です。
                                        </p>
                                        <div className="ml-4 space-y-2">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">特に重点的に:</span> 6歳臼歯の溝（生えたばかりで背が低く磨きにくい）</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">生え変わりの歯:</span> グラグラしている歯の周りも優しく丁寧に</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">デンタルフロス:</span> この時期から歯と歯の間のケアも開始</span>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle2 className="text-[#395b45] mt-1 flex-shrink-0" size={20} />
                                                <span><span className="font-bold">チェック:</span> お子様に自分で磨かせた後、磨き残しを確認して仕上げ</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 嫌がる子への対処法 */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    嫌がる子への対処法
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p>
                                    「仕上げ磨きを嫌がって大変…」というお悩みは、多くの保護者の方から聞かれます。
                                    <span className="text-[#395b45] font-bold">無理やり押さえつけて磨くと、歯磨き嫌いが悪化してしまう</span>ため、
                                    工夫しながら楽しく続けることが大切です。
                                </p>

                                <div className="bg-[#FDFBF7] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        効果的な7つの対処法
                                    </h4>
                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                                                <span className="bg-[#395b45] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">1</span>
                                                歌やカウントで楽しく
                                            </h5>
                                            <p className="ml-8 text-sm">
                                                「10数えたら終わりだよ」「歌が終わるまでね」など、終わりが見えると協力的になります。
                                                お気に入りの歌を歌いながら磨くと、楽しい時間に変わります。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                                                <span className="bg-[#395b45] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">2</span>
                                                好きなキャラクターの歯ブラシ
                                            </h5>
                                            <p className="ml-8 text-sm">
                                                お子様が自分で選んだ歯ブラシなら、「これで磨きたい！」というモチベーションになります。
                                                仕上げ磨き用の保護者用歯ブラシも、色や形を選ばせると効果的です。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                                                <span className="bg-[#395b45] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">3</span>
                                                褒める・ご褒美シール
                                            </h5>
                                            <p className="ml-8 text-sm">
                                                上手にできたら大げさに褒めてあげましょう。
                                                「歯磨きカレンダー」を作って、できた日にシールを貼ると、達成感が生まれます。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                                                <span className="bg-[#395b45] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">4</span>
                                                鏡を見せながら磨く
                                            </h5>
                                            <p className="ml-8 text-sm">
                                                鏡で自分の口の中を見せながら「ここにバイキンがいるよ」「きれいになってきたね」と
                                                実況中継すると、お子様も興味を持ちます。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                                                <span className="bg-[#395b45] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">5</span>
                                                ぬいぐるみやパペットで練習
                                            </h5>
                                            <p className="ml-8 text-sm">
                                                お気に入りのぬいぐるみの歯を一緒に磨く遊びをすると、
                                                「次は〇〇ちゃんの番ね」と自然に受け入れられるようになります。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                                                <span className="bg-[#395b45] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">6</span>
                                                タイミングを変える
                                            </h5>
                                            <p className="ml-8 text-sm">
                                                眠い時や疲れている時は嫌がりやすいもの。
                                                お風呂上がりや、機嫌の良い時間帯を見つけて、そのタイミングで磨くようにしましょう。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                                                <span className="bg-[#395b45] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm flex-shrink-0">7</span>
                                                痛くない磨き方を確認
                                            </h5>
                                            <p className="ml-8 text-sm">
                                                嫌がる原因が「痛い」場合もあります。
                                                力を入れすぎていないか、上唇小帯（上唇の裏側のスジ）に当たっていないか確認しましょう。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-[#395b45] rounded p-6">
                                    <p className="text-[#5A4D41] leading-loose">
                                        <span className="font-bold text-[#395b45]">重要なポイント:</span><br />
                                        どうしても嫌がる場合は、<span className="font-bold bg-yellow-100">無理せず短時間でもOK</span>。
                                        「全く磨けない」よりは「少しでも磨く」方がはるかに良いです。
                                        また、定期的な歯科検診で<span className="text-[#395b45] font-bold">プロによるクリーニングとフッ素塗布</span>を受けることで、
                                        家庭でのケアを補うことができます。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* おすすめの歯ブラシ・歯磨き粉 */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    おすすめの歯ブラシ・歯磨き粉
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p>
                                    仕上げ磨きの効果を高めるには、<span className="font-bold bg-yellow-100">年齢に合った適切な道具選び</span>が重要です。
                                </p>

                                {/* 歯ブラシの選び方 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        仕上げ磨き用歯ブラシの選び方
                                    </h4>
                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">ヘッドの大きさ</h5>
                                            <p className="text-sm ml-4">
                                                <span className="text-[#395b45] font-bold">お子様の上の前歯2本分の幅</span>が目安です。
                                                大きすぎると奥歯が磨きにくく、小さすぎると効率が悪くなります。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">毛の硬さ</h5>
                                            <p className="text-sm ml-4">
                                                <span className="text-[#395b45] font-bold">「やわらかめ」〜「ふつう」</span>がおすすめ。
                                                硬すぎると歯ぐきを傷つけ、やわらかすぎると汚れが落ちにくくなります。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">柄の長さ</h5>
                                            <p className="text-sm ml-4">
                                                保護者が持ちやすい<span className="text-[#395b45] font-bold">長めの柄</span>のものを選びましょう。
                                                子供用の短い柄では、奥歯まで届きにくく、細かいコントロールが難しくなります。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">交換時期</h5>
                                            <p className="text-sm ml-4">
                                                <span className="font-bold bg-yellow-100">1ヶ月に1回</span>が目安です。
                                                毛先が広がっていなくても、雑菌が繁殖するため定期的に交換しましょう。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 歯磨き粉の選び方 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        子供用歯磨き粉の選び方
                                    </h4>
                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">フッ素濃度</h5>
                                            <div className="text-sm ml-4 space-y-2">
                                                <p>
                                                    <span className="text-[#395b45] font-bold">歯が生えたら〜2歳:</span> 500ppm程度（米粒大）
                                                </p>
                                                <p>
                                                    <span className="text-[#395b45] font-bold">3〜5歳:</span> 500〜1000ppm（5mm程度）
                                                </p>
                                                <p>
                                                    <span className="text-[#395b45] font-bold">6歳以上:</span> 1000〜1500ppm（1cm程度）
                                                </p>
                                                <p className="text-xs text-[#5A4D41] mt-2">
                                                    ※フッ素は<span className="font-bold bg-yellow-100">虫歯予防に最も効果的な成分</span>です。
                                                    適切な濃度と量を守れば、安全に使用できます。
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">研磨剤</h5>
                                            <p className="text-sm ml-4">
                                                <span className="text-[#395b45] font-bold">低研磨性または無研磨</span>のものがおすすめ。
                                                乳歯は永久歯よりやわらかいため、研磨剤が多いと歯が削れてしまいます。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">味・香り</h5>
                                            <p className="text-sm ml-4">
                                                お子様が好きな味を選んであげましょう。
                                                ただし、<span className="text-[#395b45] font-bold">甘すぎる味は「おやつ」と勘違いして飲み込んでしまう</span>ことがあるため注意が必要です。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">うがいについて</h5>
                                            <p className="text-sm ml-4">
                                                うがいができない小さなお子様には、<span className="text-[#395b45] font-bold">「うがい不要タイプ」や「ジェルタイプ」</span>がおすすめ。
                                                うがいができる年齢でも、フッ素の効果を高めるため、<span className="font-bold bg-yellow-100">少量の水で1回だけ軽くすすぐ</span>程度にしましょう。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#FDFBF7] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        補助アイテム
                                    </h4>
                                    <div className="space-y-3">
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="text-[#395b45]" size={20} />
                                                デンタルフロス（6歳頃から）
                                            </h5>
                                            <p className="text-sm ml-8">
                                                歯ブラシでは届かない<span className="font-bold bg-yellow-100">歯と歯の間の汚れを除去</span>します。
                                                子供用のY字型フロスなら、保護者も使いやすく、お子様も嫌がりにくいです。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="text-[#395b45]" size={20} />
                                                染め出し液（月1回程度）
                                            </h5>
                                            <p className="text-sm ml-8">
                                                磨き残しを可視化できるため、<span className="text-[#395b45] font-bold">どこが磨けていないか一目でわかります</span>。
                                                お子様も「ここが赤いから磨かなきゃ」と意識が高まります。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2 flex items-center gap-2">
                                                <CheckCircle2 className="text-[#395b45]" size={20} />
                                                タイマー・アプリ
                                            </h5>
                                            <p className="text-sm ml-8">
                                                2〜3分間しっかり磨く習慣をつけるため、砂時計や歯磨きアプリを活用するのも効果的です。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* よくある間違い */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    よくある間違い
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p>
                                    良かれと思ってやっていることが、実は逆効果になっているかもしれません。
                                    <span className="text-[#395b45] font-bold">仕上げ磨きでやりがちな間違い</span>をチェックしましょう。
                                </p>

                                <div className="space-y-4">
                                    {/* 間違い1 */}
                                    <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="bg-red-400 text-white px-3 py-1 rounded text-sm font-bold flex-shrink-0">NG</span>
                                            <h5 className="font-bold text-red-700 text-lg">力を入れてゴシゴシ磨く</h5>
                                        </div>
                                        <p className="text-sm text-[#5A4D41] mb-3">
                                            力を入れすぎると、歯ぐきを傷つけたり、歯のエナメル質を削ってしまったりします。
                                            また、痛い思いをすると歯磨き嫌いになってしまいます。
                                        </p>
                                        <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded p-4">
                                            <span className="bg-[#395b45] text-white px-3 py-1 rounded text-sm font-bold flex-shrink-0">OK</span>
                                            <div>
                                                <p className="text-sm text-[#5A4D41]">
                                                    <span className="font-bold text-[#395b45]">150〜200g程度の優しい力で</span>、小刻みに動かします。
                                                    歯ブラシの毛先が広がらない程度が目安です。
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 間違い2 */}
                                    <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="bg-red-400 text-white px-3 py-1 rounded text-sm font-bold flex-shrink-0">NG</span>
                                            <h5 className="font-bold text-red-700 text-lg">大きく横に動かす</h5>
                                        </div>
                                        <p className="text-sm text-[#5A4D41] mb-3">
                                            歯ブラシを大きく動かすと、歯と歯の間や溝の汚れが取れません。
                                            また、磨いているつもりでも実は磨けていないことが多いです。
                                        </p>
                                        <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded p-4">
                                            <span className="bg-[#395b45] text-white px-3 py-1 rounded text-sm font-bold flex-shrink-0">OK</span>
                                            <div>
                                                <p className="text-sm text-[#5A4D41]">
                                                    <span className="font-bold text-[#395b45]">1〜2mm幅で小刻みに動かし</span>、1本ずつ丁寧に磨きます。
                                                    歯ブラシの毛先を歯の面にしっかり当てることが重要です。
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 間違い3 */}
                                    <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="bg-red-400 text-white px-3 py-1 rounded text-sm font-bold flex-shrink-0">NG</span>
                                            <h5 className="font-bold text-red-700 text-lg">歯磨き粉をたくさんつける</h5>
                                        </div>
                                        <p className="text-sm text-[#5A4D41] mb-3">
                                            泡立ちすぎて磨けているかわからなくなったり、スッキリした気になって磨く時間が短くなったりします。
                                            小さなお子様は飲み込んでしまうリスクもあります。
                                        </p>
                                        <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded p-4">
                                            <span className="bg-[#395b45] text-white px-3 py-1 rounded text-sm font-bold flex-shrink-0">OK</span>
                                            <div>
                                                <p className="text-sm text-[#5A4D41]">
                                                    <span className="font-bold text-[#395b45]">年齢に応じた適量</span>を使います。
                                                    2歳以下は米粒大、3〜5歳は5mm程度、6歳以上は1cm程度が目安です。
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 間違い4 */}
                                    <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="bg-red-400 text-white px-3 py-1 rounded text-sm font-bold flex-shrink-0">NG</span>
                                            <h5 className="font-bold text-red-700 text-lg">上唇小帯に歯ブラシが当たる</h5>
                                        </div>
                                        <p className="text-sm text-[#5A4D41] mb-3">
                                            上の前歯を磨くとき、上唇の裏側にあるスジ（上唇小帯）に歯ブラシが当たると非常に痛いです。
                                            これが原因で歯磨き嫌いになるお子様が多くいます。
                                        </p>
                                        <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded p-4">
                                            <span className="bg-[#395b45] text-white px-3 py-1 rounded text-sm font-bold flex-shrink-0">OK</span>
                                            <div>
                                                <p className="text-sm text-[#5A4D41]">
                                                    上の前歯を磨くときは、<span className="font-bold text-[#395b45]">人差し指で上唇小帯を優しく押さえながら</span>磨きます。
                                                    これだけで痛みを防げます。
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 間違い5 */}
                                    <div className="bg-red-50 border-l-4 border-red-400 rounded-r-xl p-6">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="bg-red-400 text-white px-3 py-1 rounded text-sm font-bold flex-shrink-0">NG</span>
                                            <h5 className="font-bold text-red-700 text-lg">何度も強くうがいをさせる</h5>
                                        </div>
                                        <p className="text-sm text-[#5A4D41] mb-3">
                                            何度もうがいをすると、せっかく塗ったフッ素が流れてしまい、虫歯予防効果が減少します。
                                        </p>
                                        <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded p-4">
                                            <span className="bg-[#395b45] text-white px-3 py-1 rounded text-sm font-bold flex-shrink-0">OK</span>
                                            <div>
                                                <p className="text-sm text-[#5A4D41]">
                                                    <span className="font-bold text-[#395b45]">少量の水で1回だけ軽くすすぐ</span>程度にします。
                                                    うがいができない小さなお子様は、ガーゼで拭き取るだけでもOKです。
                                                </p>
                                            </div>
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
                                仕上げ磨きに関するよくある質問
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        朝と夜、どちらで仕上げ磨きをすべきですか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        理想は<span className="font-bold bg-yellow-100">朝と夜の両方</span>ですが、
                                        忙しい朝は時間が取れないこともあるでしょう。
                                    </p>
                                    <p className="mb-3">
                                        優先すべきは<span className="text-[#395b45] font-bold">夜の仕上げ磨き</span>です。
                                        就寝中は唾液の分泌が減り、虫歯菌が最も活発に活動する時間帯のため、
                                        夜寝る前にしっかり汚れを落とすことが重要です。
                                    </p>
                                    <p>
                                        朝は、お子様が自分で磨いた後、奥歯だけでもチェックしてあげると良いでしょう。
                                    </p>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        電動歯ブラシは仕上げ磨きに使えますか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="text-[#395b45] font-bold">子供用電動歯ブラシは使用可能</span>ですが、
                                        いくつか注意点があります。
                                    </p>
                                    <div className="ml-4 space-y-2 mb-3">
                                        <p>• <span className="font-bold">必ず子供用を選ぶ</span>（大人用は振動が強すぎる）</p>
                                        <p>• <span className="font-bold">ヘッドを当てるだけで動かさない</span>（動かすと磨けない）</p>
                                        <p>• <span className="font-bold">音や振動を嫌がる場合は無理に使わない</span></p>
                                        <p>• <span className="font-bold">歯と歯の間はフロスで</span>（電動歯ブラシでは届かない）</p>
                                    </div>
                                    <p>
                                        電動歯ブラシは便利ですが、<span className="font-bold bg-yellow-100">手磨きでも十分に効果があります</span>。
                                        お子様が嫌がらない方法を選ぶことが最優先です。
                                    </p>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        仕上げ磨きの時間はどのくらい必要ですか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="font-bold bg-yellow-100">2〜3分</span>を目安にしてください。
                                    </p>
                                    <p className="mb-3">
                                        短すぎると磨き残しができ、長すぎるとお子様が嫌がるようになります。
                                        全体を4つのブロック（右上・右下・左上・左下）に分けて、
                                        <span className="text-[#395b45] font-bold">各ブロック30〜45秒ずつ</span>磨くと、
                                        ちょうど2〜3分になります。
                                    </p>
                                    <p>
                                        慣れないうちは、砂時計や歯磨きアプリを使って時間を測ると良いでしょう。
                                    </p>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        フロスは何歳から使うべきですか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="font-bold bg-yellow-100">奥歯が生えて隣の歯とくっついたら</span>、フロスの使用を開始しましょう。
                                        多くの場合、<span className="text-[#395b45] font-bold">2〜3歳頃</span>が目安です。
                                    </p>
                                    <p className="mb-3">
                                        歯ブラシでは<span className="text-[#395b45] font-bold">歯と歯の間の汚れの60%程度しか取れない</span>と言われています。
                                        虫歯の多くは歯と歯の間から始まるため、フロスは非常に重要です。
                                    </p>
                                    <p>
                                        最初は子供用のY字型フロスが使いやすくおすすめです。
                                        1日1回、夜の仕上げ磨きの後に行いましょう。
                                    </p>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        仕上げ磨きをしているのに虫歯になってしまいました。何が原因ですか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        虫歯の原因は、歯磨きだけではありません。
                                        以下のような要因が関係している可能性があります。
                                    </p>
                                    <div className="ml-4 space-y-3 mb-3">
                                        <div>
                                            <p className="font-bold text-[#395b45]">1. 磨き残しがある箇所</p>
                                            <p className="text-sm">奥歯の溝、歯と歯の間、歯と歯ぐきの境目は特に注意</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#395b45]">2. おやつの回数・タイミング</p>
                                            <p className="text-sm">だらだら食べやジュースの飲み過ぎは虫歯リスク大</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#395b45]">3. フッ素の使用不足</p>
                                            <p className="text-sm">歯磨き粉のフッ素濃度が低い、または使用量が少ない</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-[#395b45]">4. 定期検診を受けていない</p>
                                            <p className="text-sm">プロのクリーニングとチェックは3〜4ヶ月に1回必要</p>
                                        </div>
                                    </div>
                                    <p>
                                        当院では、<span className="text-[#395b45] font-bold">染め出し検査で磨き残しをチェック</span>したり、
                                        生活習慣のアドバイスも行っています。
                                        虫歯ができてしまった原因を一緒に探り、今後の予防に活かしましょう。
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
                                href="/kids-preventive/overcoming-fear"
                                className="group bg-[#FDFBF7] rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-xl font-bold text-[#5A4D41] mb-3 group-hover:text-[#395b45] transition-colors">
                                    子供の歯医者嫌い克服法
                                </h3>
                                <p className="text-[#5A4D41] text-sm mb-4 leading-relaxed">
                                    歯医者を嫌がるお子様への対処法と、当院のステップアップ方式をご紹介します。
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
                            お子様の歯を守るために<br />
                            まずは定期検診から
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed opacity-95">
                            当院では、仕上げ磨きの指導やフッ素塗布など、<br />
                            お子様の虫歯予防を全力でサポートしています。
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
