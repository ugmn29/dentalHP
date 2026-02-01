"use client";

import React from 'react';
import { CheckCircle2, ArrowRight, Calendar, Phone, Shield, AlertTriangle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';

export default function FluoridePage() {
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
                        <span className="text-[#395b45] font-medium">フッ素塗布</span>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#395b45] via-[#4a6c56] to-[#2d4835] text-white py-2">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm tracking-widest mb-4 opacity-90">
                            FLUORIDE TREATMENT GUIDE
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                            フッ素塗布完全ガイド
                        </h1>
                        <p className="text-lg md:text-xl leading-relaxed opacity-95">
                            「本当に安全？」「いつから始める？」「効果はどのくらい？」<br />
                            フッ素塗布の疑問にすべてお答えします
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
                                フッ素塗布は虫歯予防の最強の味方
                            </h2>
                            <div className="space-y-4 text-[#5A4D41] leading-loose">
                                <p>
                                    フッ素塗布は、<span className="font-bold bg-yellow-100">WHO（世界保健機関）が推奨する、科学的に証明された虫歯予防法</span>です。
                                </p>
                                <p>
                                    特にお子様の乳歯や生えたばかりの永久歯は、
                                    <span className="text-[#395b45] font-bold">大人の歯よりやわらかく虫歯になりやすい</span>ため、
                                    フッ素による強化が非常に効果的です。
                                </p>
                                <p>
                                    当院では、<span className="font-bold bg-yellow-100">定期的なフッ素塗布と正しいホームケア</span>を組み合わせることで、
                                    お子様の歯を虫歯から守るサポートをしています。
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
                        {/* フッ素とは？ */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    フッ素とは？
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p>
                                    フッ素（フッ化物）は、<span className="font-bold bg-yellow-100">自然界に広く存在する天然のミネラル</span>です。
                                    土壌や海水、そして緑茶や魚介類などの食品にも含まれています。
                                </p>
                                <p>
                                    歯科で使用するフッ素は、この天然のフッ素を<span className="text-[#395b45] font-bold">虫歯予防に最適な濃度に調整したもの</span>で、
                                    世界中で50年以上の使用実績があり、安全性と効果が確立されています。
                                </p>

                                <div className="bg-[#FDFBF7] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4 flex items-center gap-2">
                                        <Shield className="text-[#395b45]" size={24} />
                                        フッ素の3つの働き
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <span className="bg-[#395b45] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                                            <div>
                                                <h5 className="font-bold text-[#395b45] mb-1">歯を強くする（再石灰化の促進）</h5>
                                                <p className="text-sm">
                                                    <span className="font-bold bg-yellow-100">初期虫歯を修復</span>し、歯の表面を硬く丈夫にします。
                                                    食事のたびに歯から溶け出したミネラルを、再び歯に戻す作用を促進します。
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="bg-[#395b45] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                                            <div>
                                                <h5 className="font-bold text-[#395b45] mb-1">歯質の強化（耐酸性の向上）</h5>
                                                <p className="text-sm">
                                                    歯の表面のエナメル質を<span className="text-[#395b45] font-bold">酸に溶けにくい構造</span>に変えます。
                                                    通常のエナメル質（ハイドロキシアパタイト）が、フッ素の働きで「フルオロアパタイト」という
                                                    より硬く酸に強い結晶に変わります。
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="bg-[#395b45] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                                            <div>
                                                <h5 className="font-bold text-[#395b45] mb-1">虫歯菌の活動を抑制</h5>
                                                <p className="text-sm">
                                                    虫歯の原因菌が<span className="font-bold bg-yellow-100">酸を作り出す力を弱める</span>働きがあります。
                                                    菌の数を減らすのではなく、菌が歯を溶かす「酸」を作る能力を低下させます。
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* フッ素塗布の効果 */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    フッ素塗布の効果
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p>
                                    実際にフッ素塗布を受けると、どのくらい虫歯を予防できるのでしょうか？
                                </p>

                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-2xl p-8 shadow-lg">
                                    <h4 className="text-2xl font-bold text-[#395b45] mb-6 text-center">
                                        科学的に証明された効果
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="bg-white rounded-xl p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <CheckCircle2 className="text-[#395b45] flex-shrink-0" size={32} />
                                                <h5 className="text-lg font-bold text-[#395b45]">乳歯の虫歯リスクを約30〜40%減少</h5>
                                            </div>
                                            <p className="text-sm ml-11">
                                                定期的にフッ素塗布を受けたお子様は、
                                                <span className="font-bold bg-yellow-100">受けなかったお子様に比べて虫歯になる確率が約3〜4割減少</span>します。
                                                特に奥歯の溝や歯と歯の間など、虫歯になりやすい部位での予防効果が高いことが証明されています。
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-xl p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <CheckCircle2 className="text-[#395b45] flex-shrink-0" size={32} />
                                                <h5 className="text-lg font-bold text-[#395b45]">生えたばかりの永久歯に特に効果的</h5>
                                            </div>
                                            <p className="text-sm ml-11">
                                                6歳臼歯（第一大臼歯）など、<span className="text-[#395b45] font-bold">生えて2〜3年の永久歯は最も虫歯になりやすい時期</span>です。
                                                この時期にフッ素塗布を受けることで、歯を強化し、一生使う永久歯を虫歯から守ることができます。
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-xl p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <CheckCircle2 className="text-[#395b45] flex-shrink-0" size={32} />
                                                <h5 className="text-lg font-bold text-[#395b45]">初期虫歯を修復できる</h5>
                                            </div>
                                            <p className="text-sm ml-11">
                                                まだ穴が開いていない<span className="font-bold bg-yellow-100">「脱灰」と呼ばれる初期虫歯の段階</span>なら、
                                                フッ素の再石灰化作用により、削らずに治すことが可能です。
                                                定期検診で早期発見し、フッ素塗布で対応できれば、治療の痛みや費用を避けられます。
                                            </p>
                                        </div>

                                        <div className="bg-white rounded-xl p-6">
                                            <div className="flex items-center gap-3 mb-3">
                                                <CheckCircle2 className="text-[#395b45] flex-shrink-0" size={32} />
                                                <h5 className="text-lg font-bold text-[#395b45]">歯科治療の回数を減らせる</h5>
                                            </div>
                                            <p className="text-sm ml-11">
                                                虫歯予防により、<span className="text-[#395b45] font-bold">痛い思いをすることも、何度も通院する必要もなくなります</span>。
                                                結果的に、お子様の負担も保護者の方の時間的・経済的負担も軽減されます。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-[#395b45] rounded p-6">
                                    <p className="text-[#5A4D41] leading-loose">
                                        <span className="font-bold text-[#395b45]">重要なポイント:</span><br />
                                        フッ素塗布だけで虫歯を100%防げるわけではありません。
                                        <span className="font-bold bg-yellow-100">毎日の歯磨き、食生活の改善、定期検診</span>と組み合わせることで、
                                        最大の予防効果が得られます。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* フッ素塗布はいつから？頻度は？ */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    フッ素塗布はいつから？頻度は？
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                {/* いつから始める？ */}
                                <div className="bg-[#FDFBF7] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        いつから始めるべき？
                                    </h4>
                                    <div className="space-y-3">
                                        <p>
                                            <span className="font-bold bg-yellow-100">歯が生え始めたら（生後6ヶ月頃）</span>、
                                            フッ素塗布を開始できます。
                                        </p>
                                        <p>
                                            ただし、<span className="text-[#395b45] font-bold">一般的には1歳半〜2歳頃から始めるケースが多い</span>です。
                                            この時期は乳歯が生え揃い始め、虫歯リスクが高まる時期でもあります。
                                        </p>
                                        <div className="bg-white rounded p-4 mt-4">
                                            <h5 className="font-bold text-[#395b45] mb-2">年齢別の開始タイミング</h5>
                                            <div className="space-y-2 text-sm">
                                                <p><span className="font-bold text-[#395b45]">0〜1歳:</span> 歯が生えたら開始可能（低濃度フッ素）</p>
                                                <p><span className="font-bold text-[#395b45]">1歳半〜3歳:</span> 標準的な開始時期。奥歯が生え揃う前に開始が理想</p>
                                                <p><span className="font-bold text-[#395b45]">4歳以降:</span> 遅すぎることはありません。今からでも効果があります</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* どのくらいの頻度で？ */}
                                <div className="bg-[#FDFBF7] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        どのくらいの頻度で受けるべき？
                                    </h4>
                                    <div className="space-y-3">
                                        <p>
                                            <span className="font-bold bg-yellow-100">3〜4ヶ月に1回</span>のペースが基本です。
                                        </p>
                                        <p>
                                            フッ素塗布の効果は<span className="text-[#395b45] font-bold">約3〜4ヶ月持続</span>するため、
                                            定期的に塗り直すことで、常に歯が強化された状態を保つことができます。
                                        </p>
                                        <div className="bg-white rounded p-4 mt-4">
                                            <h5 className="font-bold text-[#395b45] mb-2">リスク別の推奨頻度</h5>
                                            <div className="space-y-2 text-sm">
                                                <p><span className="font-bold text-[#395b45]">虫歯リスクが低い:</span> 4〜6ヶ月に1回</p>
                                                <p><span className="font-bold text-[#395b45]">虫歯リスクが普通:</span> 3〜4ヶ月に1回（標準）</p>
                                                <p><span className="font-bold text-[#395b45]">虫歯リスクが高い:</span> 2〜3ヶ月に1回</p>
                                            </div>
                                            <p className="text-xs text-[#5A4D41] mt-3">
                                                ※虫歯リスクは、過去の虫歯の本数、歯磨き習慣、食生活、唾液の質などで判断します
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* いつまで続ける？ */}
                                <div className="bg-[#FDFBF7] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        いつまで続けるべき？
                                    </h4>
                                    <div className="space-y-3">
                                        <p>
                                            <span className="font-bold bg-yellow-100">永久歯が生え揃うまで（中学生頃）</span>は継続することをおすすめします。
                                        </p>
                                        <p>
                                            特に<span className="text-[#395b45] font-bold">6〜15歳は虫歯になりやすい時期</span>です。
                                            生えたばかりの永久歯はまだやわらかく、フッ素による強化が非常に効果的です。
                                        </p>
                                        <p className="text-sm">
                                            大人になってからも、虫歯リスクが高い方や歯ぐきが下がって歯の根元が露出している方には、
                                            フッ素塗布が有効です。年齢に関係なく予防効果があります。
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* フッ素塗布の流れ */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    フッ素塗布の流れ
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p className="text-center mb-8">
                                    フッ素塗布の施術時間は<span className="font-bold bg-yellow-100">わずか5〜10分程度</span>。
                                    痛みもなく、お子様の負担が少ない予防処置です。
                                </p>

                                {/* STEP 1 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-[#395b45] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                                            1
                                        </div>
                                        <h4 className="text-xl font-bold text-[#395b45]">歯のクリーニング</h4>
                                    </div>
                                    <p className="text-sm ml-15">
                                        歯の表面の汚れやプラークを専用のブラシで除去します。
                                        <span className="text-[#395b45] font-bold">きれいな歯の表面にフッ素を塗ることで、浸透率が高まります</span>。
                                    </p>
                                </div>

                                {/* STEP 2 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-[#395b45] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                                            2
                                        </div>
                                        <h4 className="text-xl font-bold text-[#395b45]">歯の表面を乾燥</h4>
                                    </div>
                                    <p className="text-sm ml-15">
                                        エアー（風）で歯の表面の水分を軽く飛ばします。
                                        <span className="text-[#395b45] font-bold">乾燥させることでフッ素が歯に密着しやすくなります</span>。
                                    </p>
                                </div>

                                {/* STEP 3 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-[#395b45] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                                            3
                                        </div>
                                        <h4 className="text-xl font-bold text-[#395b45]">フッ素の塗布</h4>
                                    </div>
                                    <p className="text-sm ml-15 mb-3">
                                        専用のブラシや綿棒、トレーを使って、歯の表面にフッ素を塗ります。
                                        <span className="font-bold bg-yellow-100">味はリンゴ、ブドウ、イチゴなど、お子様が好きな味を選べます</span>。
                                    </p>
                                    <div className="bg-white rounded p-4 ml-15 text-xs">
                                        <p className="mb-2"><span className="font-bold text-[#395b45]">使用するフッ素:</span></p>
                                        <p>当院では、<span className="text-[#395b45] font-bold">9,000ppm（医療用高濃度フッ素）</span>を使用しています。
                                        市販の歯磨き粉（500〜1,500ppm）の約6〜18倍の濃度で、高い予防効果があります。</p>
                                    </div>
                                </div>

                                {/* STEP 4 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-[#395b45] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                                            4
                                        </div>
                                        <h4 className="text-xl font-bold text-[#395b45]">フッ素を浸透させる</h4>
                                    </div>
                                    <p className="text-sm ml-15">
                                        <span className="text-[#395b45] font-bold">3〜5分間、口を開けたまま待ちます</span>。
                                        この間にフッ素が歯に浸透し、歯質を強化します。
                                        小さなお子様には、好きな動画を見せたり、絵本を読んだりして待ち時間を楽しくします。
                                    </p>
                                </div>

                                {/* STEP 5 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-[#395b45] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                                            5
                                        </div>
                                        <h4 className="text-xl font-bold text-[#395b45]">余分なフッ素を拭き取る</h4>
                                    </div>
                                    <p className="text-sm ml-15">
                                        ガーゼやティッシュで、口の中の余分なフッ素を軽く拭き取ります。
                                        <span className="font-bold bg-yellow-100">うがいは不要</span>です（うがいするとフッ素が流れてしまうため）。
                                    </p>
                                </div>

                                {/* STEP 6 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="bg-[#395b45] text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                                            6
                                        </div>
                                        <h4 className="text-xl font-bold text-[#395b45]">終了・ご褒美</h4>
                                    </div>
                                    <p className="text-sm ml-15">
                                        「頑張ったね！」と褒めて、シールやガチャガチャのご褒美をプレゼント。
                                        フッ素塗布後の注意事項をお伝えして終了です。
                                    </p>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-[#395b45] rounded p-6 mt-6">
                                    <h4 className="font-bold text-[#395b45] mb-3">フッ素塗布後の注意事項</h4>
                                    <div className="space-y-2 text-sm">
                                        <p>• <span className="font-bold">30分間は飲食を控える</span>（フッ素を歯に定着させるため）</p>
                                        <p>• <span className="font-bold">うがいは軽く1回だけ</span>、または何もしない</p>
                                        <p>• <span className="font-bold">2時間程度は歯磨きを控える</span></p>
                                        <p className="text-xs text-[#5A4D41] mt-2">
                                            ※これらを守ることで、フッ素の効果が最大限に発揮されます
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* フッ素の安全性 */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    フッ素の安全性
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p>
                                    「フッ素は危険」という情報を目にして、不安に思われる保護者の方もいらっしゃるでしょう。
                                    <span className="text-[#395b45] font-bold">しかし、歯科で使用するフッ素は、適切な濃度と使用方法で行えば非常に安全</span>です。
                                </p>

                                <div className="bg-green-50 border-2 border-[#395b45] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4 flex items-center gap-2">
                                        <Shield className="text-[#395b45]" size={24} />
                                        科学的根拠に基づく安全性
                                    </h4>
                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">✓ WHO（世界保健機関）が推奨</h5>
                                            <p className="text-sm">
                                                WHOは<span className="font-bold bg-yellow-100">フッ素を安全で効果的な虫歯予防法</span>として推奨しています。
                                                世界中で50年以上使用され、安全性が確立されています。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">✓ 日本の厚生労働省も推進</h5>
                                            <p className="text-sm">
                                                日本の厚生労働省も<span className="text-[#395b45] font-bold">「う蝕予防のためのフッ化物応用」</span>を推進しており、
                                                安全性と有効性を認めています。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">✓ 歯科医院でのフッ素塗布は安全</h5>
                                            <p className="text-sm">
                                                歯科医院で使用するフッ素の量は<span className="font-bold bg-yellow-100">ごく微量</span>で、
                                                仮に少量飲み込んでしまっても健康に影響はありません。
                                                専門家が適切な量と方法で塗布するため、非常に安全です。
                                            </p>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">✓ 「フッ素症（斑状歯）」のリスクは極めて低い</h5>
                                            <p className="text-sm mb-2">
                                                過剰なフッ素摂取により歯に白い斑点ができる「フッ素症」が心配される方もいますが、
                                                <span className="text-[#395b45] font-bold">歯科医院でのフッ素塗布では発生しません</span>。
                                            </p>
                                            <p className="text-xs text-[#5A4D41]">
                                                フッ素症は、幼少期に<span className="font-bold">長期間・継続的に・高濃度のフッ素を摂取</span>した場合にのみ起こります。
                                                3〜4ヶ月に1回のフッ素塗布では、そのような状況にはなりません。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-red-50 border-l-4 border-red-400 rounded p-6">
                                    <h4 className="font-bold text-red-700 mb-3 flex items-center gap-2">
                                        <AlertTriangle className="text-red-700" size={20} />
                                        フッ素に関する誤解
                                    </h4>
                                    <div className="space-y-3 text-sm text-[#5A4D41]">
                                        <div>
                                            <p className="font-bold text-red-700 mb-1">✕ 「フッ素は毒」</p>
                                            <p>
                                                → <span className="text-[#395b45] font-bold">適切な量であれば安全</span>です。
                                                塩や砂糖も大量に摂取すれば有害ですが、適量なら問題ありません。それと同じです。
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-red-700 mb-1">✕ 「フッ素で歯が黒くなる」</p>
                                            <p>
                                                → <span className="text-[#395b45] font-bold">フッ素で歯が黒くなることはありません</span>。
                                                むしろ、虫歯を予防することで歯の変色を防ぎます。
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-red-700 mb-1">✕ 「フッ素は発がん性がある」</p>
                                            <p>
                                                → <span className="text-[#395b45] font-bold">科学的根拠はありません</span>。
                                                WHO、米国疾病予防管理センター（CDC）、日本の厚生労働省など、
                                                信頼できる機関はすべてフッ素の安全性を認めています。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#FDFBF7] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        それでも不安な方へ
                                    </h4>
                                    <p className="text-sm mb-3">
                                        ご不安なお気持ちは十分理解できます。
                                        当院では、<span className="text-[#395b45] font-bold">保護者の方が納得されてからフッ素塗布を行います</span>。
                                    </p>
                                    <div className="text-sm space-y-2">
                                        <p>• フッ素の効果と安全性について、丁寧にご説明します</p>
                                        <p>• ご質問や疑問に、科学的根拠を基にお答えします</p>
                                        <p>• 無理におすすめすることはありません</p>
                                        <p>• フッ素塗布以外の予防法（シーラント、歯磨き指導など）も提案します</p>
                                    </div>
                                    <p className="text-sm mt-3">
                                        お子様の健康を守るために、保護者の方と一緒に最適な予防方法を考えていきましょう。
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 家庭でできるフッ素ケア */}
                        <div>
                            <div className="text-center mb-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">
                                    家庭でできるフッ素ケア
                                </h3>
                                <div className="w-16 h-0.5 bg-[#395b45] mx-auto mt-4"></div>
                            </div>
                            <div className="space-y-6 text-[#5A4D41] leading-loose">
                                <p>
                                    歯科医院でのフッ素塗布に加えて、<span className="font-bold bg-yellow-100">ご家庭でも毎日フッ素ケアを行うことで、予防効果が大幅にアップ</span>します。
                                </p>

                                {/* フッ素入り歯磨き粉 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        フッ素入り歯磨き粉の選び方と使い方
                                    </h4>
                                    <div className="space-y-4">
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">年齢別の推奨フッ素濃度</h5>
                                            <div className="bg-white rounded p-4 space-y-2 text-sm">
                                                <p><span className="font-bold text-[#395b45]">歯が生えたら〜2歳:</span> 500ppm（米粒大の量）</p>
                                                <p><span className="font-bold text-[#395b45]">3〜5歳:</span> 500〜1,000ppm（5mm程度の量）</p>
                                                <p><span className="font-bold text-[#395b45]">6歳以上:</span> 1,000〜1,500ppm（1cm程度の量）</p>
                                                <p className="text-xs text-[#5A4D41] mt-2">
                                                    ※2023年から、日本でも1,500ppmまでのフッ素濃度が認可されました
                                                </p>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-[#395b45] mb-2">効果的な使い方</h5>
                                            <div className="ml-4 space-y-2 text-sm">
                                                <p>• <span className="font-bold">年齢に応じた適量を使う</span>（多すぎても少なすぎても効果減）</p>
                                                <p>• <span className="font-bold">うがいは少量の水で1回だけ</span>（何度もうがいするとフッ素が流れる）</p>
                                                <p>• <span className="font-bold">就寝前の使用が最も効果的</span>（就寝中は唾液が少なく、フッ素が長く留まる）</p>
                                                <p>• <span className="font-bold">歯磨き後30分は飲食を避ける</span>（フッ素を歯に定着させるため）</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* フッ素洗口 */}
                                <div className="bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ec] rounded-xl p-6">
                                    <h4 className="text-xl font-bold text-[#395b45] mb-4">
                                        フッ素洗口（うがい）
                                    </h4>
                                    <div className="space-y-3">
                                        <p className="text-sm">
                                            <span className="text-[#395b45] font-bold">4歳以上でうがいができるお子様</span>には、
                                            フッ素洗口液を使った予防法もあります。
                                        </p>
                                        <div className="bg-white rounded p-4 space-y-2 text-sm">
                                            <p><span className="font-bold text-[#395b45]">方法:</span> 就寝前に、フッ素洗口液で30秒〜1分間ブクブクうがい</p>
                                            <p><span className="font-bold text-[#395b45]">効果:</span> 歯磨き粉よりも広範囲にフッ素が行き渡る</p>
                                            <p><span className="font-bold text-[#395b45]">注意:</span> うがい後は飲食しない、吐き出した後すすがない</p>
                                        </div>
                                        <p className="text-xs text-[#5A4D41]">
                                            ※フッ素洗口液は歯科医院で処方できます。使い方も丁寧にご説明しますので、ご相談ください。
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-yellow-50 border-l-4 border-[#395b45] rounded p-6">
                                    <p className="text-[#5A4D41] leading-loose">
                                        <span className="font-bold text-[#395b45]">ダブルのフッ素ケアで最強の予防:</span><br />
                                        <span className="font-bold bg-yellow-100">歯科医院での高濃度フッ素塗布（3〜4ヶ月に1回）</span> +
                                        <span className="font-bold bg-yellow-100">家庭での毎日のフッ素ケア</span>を組み合わせることで、
                                        虫歯リスクを大幅に減らすことができます。
                                    </p>
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
                                フッ素塗布に関するよくある質問
                            </h2>
                        </div>
                        <div className="space-y-6">
                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        フッ素塗布は痛くないですか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="font-bold bg-yellow-100">全く痛みはありません</span>。
                                        歯の表面にジェルやペーストを塗るだけなので、
                                        削ったり注射したりすることは一切ありません。
                                    </p>
                                    <p>
                                        味も、リンゴ、ブドウ、イチゴなど、お子様が好きな味を選べるため、
                                        <span className="text-[#395b45] font-bold">「甘くておいしい」と喜ぶお子様も多い</span>です。
                                        ただし、口を開けて待つ時間があるため、じっとしているのが苦手なお子様は少し練習が必要かもしれません。
                                    </p>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        フッ素塗布の費用はどのくらいですか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="font-bold bg-yellow-100">自治体により無料〜数百円程度</span>です。
                                    </p>
                                    <p className="mb-3">
                                        多くの自治体では、<span className="text-[#395b45] font-bold">1歳半検診や3歳児検診など、特定の年齢で無料でフッ素塗布を受けられる</span>制度があります。
                                        また、定期的なフッ素塗布も、健康保険が適用されるケースや自治体の助成がある場合は、
                                        数百円程度の自己負担で受けられます。
                                    </p>
                                    <p className="text-sm">
                                        自費診療の場合は、1回500〜2,000円程度が一般的です。
                                        お住まいの自治体の制度や当院の料金については、お気軽にお問い合わせください。
                                    </p>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        フッ素を飲み込んでしまっても大丈夫ですか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="text-[#395b45] font-bold">はい、少量であれば全く問題ありません</span>。
                                    </p>
                                    <p className="mb-3">
                                        歯科医院で使用するフッ素の量は<span className="font-bold bg-yellow-100">ごく微量</span>で、
                                        仮に全量飲み込んでしまったとしても、健康に影響を与えるレベルではありません。
                                    </p>
                                    <p>
                                        また、施術後に余分なフッ素は拭き取りますので、
                                        実際に口の中に残る量はさらに少なくなります。
                                        小さなお子様でも安心して受けていただけます。
                                    </p>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        フッ素塗布をしていれば、歯磨きをしなくても大丈夫ですか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="font-bold bg-yellow-100">いいえ、フッ素塗布だけでは不十分です</span>。
                                    </p>
                                    <p className="mb-3">
                                        フッ素塗布は<span className="text-[#395b45] font-bold">あくまで「予防の一つの手段」</span>であり、
                                        虫歯予防の基本は<span className="text-[#395b45] font-bold">毎日の正しい歯磨き</span>です。
                                    </p>
                                    <p>
                                        最も効果的な虫歯予防は、以下の3つを組み合わせることです。
                                    </p>
                                    <div className="ml-4 mt-3 space-y-2 text-sm">
                                        <p>1. <span className="font-bold text-[#395b45]">毎日の歯磨き</span>（特に仕上げ磨き）</p>
                                        <p>2. <span className="font-bold text-[#395b45]">フッ素の活用</span>（塗布 + 歯磨き粉）</p>
                                        <p>3. <span className="font-bold text-[#395b45]">食生活の改善</span>（だらだら食べをしない、甘い物を控える）</p>
                                    </div>
                                </div>
                            </details>

                            <details className="group bg-white rounded-xl shadow-sm overflow-hidden">
                                <summary className="flex items-center justify-between cursor-pointer p-6 hover:bg-[#FDFBF7] transition-colors">
                                    <span className="font-bold text-[#5A4D41] pr-4">
                                        大人もフッ素塗布を受けられますか？
                                    </span>
                                    <span className="text-[#395b45] group-open:rotate-90 transition-transform">›</span>
                                </summary>
                                <div className="px-6 pb-6 text-[#5A4D41] leading-loose">
                                    <p className="mb-3">
                                        <span className="text-[#395b45] font-bold">もちろん受けられます</span>。
                                        フッ素塗布は子供だけのものではありません。
                                    </p>
                                    <p className="mb-3">
                                        特に以下のような方には、大人でもフッ素塗布が効果的です。
                                    </p>
                                    <div className="ml-4 space-y-2 text-sm mb-3">
                                        <p>• 虫歯になりやすい方</p>
                                        <p>• 歯ぐきが下がって歯の根元が露出している方</p>
                                        <p>• 唾液が少なくお口が乾燥しやすい方</p>
                                        <p>• 矯正治療中の方</p>
                                        <p>• 定期検診でプロフェッショナルケアを受けたい方</p>
                                    </div>
                                    <p>
                                        大人の場合も、3〜6ヶ月に1回のフッ素塗布が虫歯予防に有効です。
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
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-2 bg-gradient-to-br from-[#395b45] via-[#4a6c56] to-[#2d4835] text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                            お子様の歯を虫歯から守る<br />
                            フッ素塗布を始めませんか？
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed opacity-95">
                            定期的なフッ素塗布で、一生使う大切な歯を守りましょう。<br />
                            まずはお気軽にご相談ください。
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
