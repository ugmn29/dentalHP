import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ArrowRight, Home, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import Link from 'next/link';

export default function KidsOrthoTimingPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
                {/* Breadcrumb */}
                <div className="bg-white border-b">
                    <div className="container mx-auto px-4 py-3">
                        <div className="flex items-center text-sm text-gray-600">
                            <Link href="/" className="hover:text-[#C5A572] flex items-center">
                                <Home className="w-4 h-4 mr-1" />
                                ホーム
                            </Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <Link href="/kidsortho" className="hover:text-[#C5A572]">
                                こども矯正
                            </Link>
                            <ChevronRight className="w-4 h-4 mx-2" />
                            <span className="text-[#C5A572]">ベストタイミング</span>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <section className="py-6 md:py-6 bg-[#FDFBF7]">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                                「様子を見ましょう」は信じていい？<br />ベストタイミング
                            </h1>
                            <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>

                            <KidsOrthoImage
                                name="timing-hero"
                                alt="小児矯正のベストタイミング"
                                category="guide"
                            />

                            <p className="text-xl md:text-2xl mt-6 mb-6 text-[#5A4D41] font-medium font-sans">
                                受け口は3歳から、デコボコは6歳から。<br />
                                不正咬合の種類によって最適な開始時期が異なります
                            </p>
                            <p className="text-lg text-[#8D8070] leading-relaxed mb-8 font-sans">
                                「様子を見ましょう」と言われて待っていたら手遅れに...そんな後悔をしないために、<br className="hidden md:block" />
                                お子さまの歯並びに合わせた正しい治療開始時期の見極め方をお伝えします。
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
                            <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto font-sans">
                                <p>
                                    <span className="font-bold bg-yellow-100">最適な開始時期は3〜7歳（混合歯列期）</span>です。
                                    顎の成長を利用できる時期に治療を始めることで、無理なく歯並びを整えられます。
                                </p>
                                <p>
                                    <span className="font-bold bg-yellow-100">早期治療により、2期治療（80〜120万円）が不要になる可能性が高まります</span>。
                                    また、痛みが少なく、お子さまの心理的・身体的負担を最小限に抑えられます。
                                </p>
                                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                                    当院では、<span className="text-[#C5A572]">6歳までに一度、ご相談いただくこと</span>をおすすめしています。
                                </p>
                            </div>
                        </div>

                        {/* 画像 */}
                        <div className="mb-16">
                            <KidsOrthoImage
                                name="timing-content"
                                alt="年齢別の治療開始タイミング"
                                category="guide"
                            />
                        </div>

                        {/* 8つの視点で詳しく解説 */}
                        <div className="mb-16">
                            <div className="text-center mb-12">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">年齢別：こども矯正のアプローチ</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>

                            <div className="space-y-12">
                                {/* 1. 3〜6歳（乳歯列期） */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        1. 3〜6歳（乳歯列期）- 早期介入が効果的な時期
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            <span className="font-bold bg-yellow-100">受け口（反対咬合）や過蓋咬合は、この時期に治療を開始すると成功率が85%以上</span>と報告されています。
                                            顎の骨が柔らかく、自然な成長を利用して無理なく改善できる最適な時期です。
                                        </p>
                                        <p>
                                            主な治療法として、プレオルソ、指しゃぶり・舌癖の改善、口呼吸の改善などがあります。
                                            <span className="font-bold bg-yellow-100">将来的な抜歯リスクを大幅に低減</span>し、2期治療が不要になる可能性も高まります。
                                        </p>
                                        <div className="bg-[#E8F2ED] p-6 rounded-xl mt-4">
                                            <p className="text-sm">
                                                <span className="font-bold text-[#395b45]">エビデンス：</span>
                                                <a href="https://www.aapd.org/research/oral-health-policies--recommendations/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#395b45]">American Academy of Pediatric Dentistry (2022)</a> では、反対咬合は3〜5歳での早期治療により成功率が85%以上と報告されています。6歳以降では外科的介入が必要になるケースが増加します。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 2. 6〜9歳（混合歯列前期） */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        2. 6〜9歳（混合歯列前期）- 最も推奨される開始時期（ゴールデンエイジ）
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            <span className="font-bold bg-yellow-100">6歳臼歯が生え、咬み合わせの基準ができる時期</span>です。
                                            顎の成長が旺盛で骨の拡大が最も効果的に行え、永久歯萌出前にスペース確保が容易です。
                                            お子さまの協力性も高く、装置の使用に慣れやすい時期でもあります。
                                        </p>
                                        <p>
                                            期待できる治療効果として、上下の顎のバランスを整える、永久歯が生えるスペースを確保、出っ歯・受け口・叢生を予防・改善、<span className="font-bold bg-yellow-100">2期治療（仕上げの矯正）を回避または簡素化</span>などがあります。
                                        </p>
                                        <div className="bg-[#E8F2ED] p-6 rounded-xl mt-4">
                                            <p className="text-sm">
                                                <span className="font-bold text-[#395b45]">エビデンス：</span>
                                                <a href="https://pubmed.ncbi.nlm.nih.gov/25951334/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#395b45]">McNamara et al. (2015)</a> のメタ分析によると、6〜9歳で1期治療を行った場合、2期治療が不要になる確率は約60%、必要になっても治療期間が平均40%短縮されることが示されています。
                                            </p>
                                        </div>
                                        <div className="bg-[#FFF4E6] p-6 rounded-xl mt-4 border-l-4 border-[#FF9F43]">
                                            <p className="font-bold text-[#5A4D41] mb-2">⚠️ 注意：9歳に近づくほど条件が不利に</p>
                                            <p className="text-sm">
                                                この時期でも、<span className="font-bold bg-yellow-100">9歳に近づけば近づくほど治療条件が悪化</span>します。
                                                治療期間が延びるだけでなく、場合によっては<span className="font-bold text-[#FF9F43]">抜歯矯正を選択せざるを得ない</span>可能性も出てきます。
                                                早期の開始が最も理想的です。
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* 3. 9〜12歳（混合歯列後期） */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        3. 9〜12歳（混合歯列後期）- まだ間に合う時期（顎の成長終了前）
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            顎の拡大（やや効果は減少）、永久歯の萌出誘導、歯並びの部分的な改善、2期治療の負担を軽減などが可能です。
                                            ただし、<span className="text-[#C5A572] font-bold">顎の成長余地が少なくなっているため、2期治療が必要になる可能性が高くなります</span>。
                                        </p>
                                        <p>
                                            抜歯が必要になるケースが増え、治療期間が長くなる傾向があります。
                                            この時期でも早めの相談が重要です。永久歯が生え揃ってしまうと、顎の成長を利用した治療ができなくなり、抜歯を伴う本格矯正（2期治療）のみの選択肢となります。
                                        </p>
                                    </div>
                                </div>

                                {/* 4. 12歳以降（永久歯列期） */}
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        4. 12歳以降（永久歯列期）- 2期治療（本格矯正）の対象年齢
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            永久歯が生え揃った後は、顎の成長を利用した1期治療がやりにくくなります。
                                            ワイヤー矯正やマウスピース矯正などの本格的な矯正治療（2期治療）が必要になります。
                                        </p>
                                        <div className="bg-[#E8F2ED] p-6 rounded-xl mt-4">
                                            <p>
                                                <span className="font-bold text-[#395b45]">当院の方針：</span>
                                                当院では、10代の抜歯矯正はほとんど行っていません。理由として、10代の場合はまだ成長余力が残っているため、その時点で抜歯矯正を行い噛み合わせを決めてしまっても、後になって噛み合わせがずれたり、顎関節症のリスクになる可能性があるからです。
                                            </p>
                                        </div>
                                        <p>
                                            <span className="font-bold bg-yellow-100">費用：30〜80万円（1期治療済みの場合は30〜60万円）</span><br />
                                            <span className="font-bold bg-yellow-100">期間：2〜3年（1期治療済みの場合は1〜2年）</span>
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            ※1期治療を行っていた場合、2期治療の期間・費用ともに大幅に軽減されます
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 「様子を見ましょう」のリスク */}
                        <div className="mb-16">
                            <div className="text-center mb-12">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">「様子を見ましょう」のリスク</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                                <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 mt-6 max-w-3xl mx-auto">
                                    <p className="font-sans text-[#5A4D41] leading-relaxed">
                                        <span className="font-bold text-yellow-800">他院で「様子を見ましょう」と言われても、ほとんどのケースで何らかの介入が必要です。</span><br />
                                        早期に子供の矯正の専門の病院で診察を受けることで、お子さまに最適な治療開始時期を見極めることができます。
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        1. 顔立ちを変える機会の喪失
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            <span className="font-bold bg-yellow-100">早期治療では、顎の成長をコントロールすることで顔立ち自体を改善できます</span>。
                                            しかし、成長が終わってからでは歯並びは治せても、顔の骨格は変えられません。
                                            受け口や出っ歯による横顔のコンプレックスは、早期治療でしか根本的に改善できない場合が多くあります。
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        2. 治療が複雑化
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            顎の成長が終わり、骨の拡大ができなくなる。抜歯が必要になる可能性が高まる（確率: 20% → 70%）。外科的矯正（手術）が必要になるケースも発生します。
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        3. 費用相場・期間相場の増加
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            <strong>費用：</strong>1期治療10〜70万円 → 2期治療のみ80〜120万円<br />
                                            <strong>期間：</strong>1期1〜2年 → 2期のみ2〜3年<br />
                                            思春期に長期間装置をつける心理的負担も増大します。
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        4. 健康への悪影響
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            むし歯・歯周病のリスク増加（叢生が悪化）、口呼吸の定着 → 感染症・アレルギー悪化、顎関節症のリスク上昇などが考えられます。
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        5. 心理的影響
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            容貌への自信喪失（思春期の自己肯定感低下）、発音障害によるコミュニケーション不安、いじめや対人関係トラブルのリスクが高まります。
                                        </p>
                                        <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400 mt-4">
                                            <p className="font-sans">
                                                <span className="font-bold text-yellow-800">「永久歯が生え揃ってから」では手遅れになることも</span><br />
                                                多くの保護者が「永久歯が生え揃ってから矯正を始めれば良い」と考えていますが、実際には永久歯列になってからでは、顎の成長を利用した治療ができず、抜歯や外科手術が必要になるケースが急増します。早期相談（6歳まで）が、お子さまの将来の選択肢を広げます。
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 早期治療の効果：科学的根拠 */}
                        <div className="mb-16">
                            <div className="text-center mb-12">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">早期治療の効果：科学的根拠</h3>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                                <p className="text-lg text-[#8D8070] mt-4 font-sans">
                                    世界中の研究が証明する、早期矯正治療のメリット
                                </p>
                            </div>

                            <div className="space-y-12">
                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        2期治療の回避率：60%
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            McNamara et al. (2015) による大規模メタ分析では、6〜9歳で1期治療を開始した場合、永久歯列期の2期治療（本格矯正）が不要になる確率が約60%に達することが示されています。
                                        </p>
                                        <div className="bg-[#E8F2ED] p-4 rounded-xl">
                                            <p className="text-sm font-sans">
                                                <strong>出典：</strong><a href="https://pubmed.ncbi.nlm.nih.gov/25951334/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#395b45]">McNamara JA Jr, Brudon WL. <em>Orthodontics and Dentofacial Orthopedics.</em> Ann Arbor: Needham Press; 2015.</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        治療期間の短縮：平均40%
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            Tulloch et al. (2004) のランダム化比較試験（RCT）では、早期治療群は後期治療群と比較して、総治療期間が平均40%短縮されたことが報告されています（24ヶ月 vs. 40ヶ月）。
                                        </p>
                                        <div className="bg-[#E8F2ED] p-4 rounded-xl">
                                            <p className="text-sm font-sans">
                                                <strong>出典：</strong><a href="https://pubmed.ncbi.nlm.nih.gov/15094305/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#395b45]">Tulloch JF, Phillips C, Proffit WR. <em>Benefit of early Class II treatment: progress report of a two-phase randomized clinical trial.</em> Am J Orthod Dentofacial Orthop. 2004;125(4):469-78.</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                                        抜歯回避率：3倍以上
                                    </h4>
                                    <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                                        <p>
                                            Proffit et al. (2013) の長期追跡調査では、7歳以前に治療を開始したグループは、12歳以降に開始したグループと比較して、抜歯を必要とする確率が1/3以下（22% vs. 71%）であったことが明らかになっています。
                                        </p>
                                        <div className="bg-[#E8F2ED] p-4 rounded-xl">
                                            <p className="text-sm font-sans">
                                                <strong>出典：</strong><a href="https://evolve.elsevier.com/cs/product/9780323083171" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#395b45]">Proffit WR, Fields HW Jr, Sarver DM. <em>Contemporary Orthodontics.</em> 5th ed. St. Louis: Mosby Elsevier; 2013.</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* 関連ページ */}
                <section className="py-2 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">関連ページ</h2>
                                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <Link href="/kidsortho/types" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">不正咬合の種類</h3>
                                    <p className="text-[#8D8070] mb-4">
                                        7つのタイプとその特徴を詳しく解説
                                    </p>
                                    <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>

                                <Link href="/kidsortho/duration" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">治療期間</h3>
                                    <p className="text-[#8D8070] mb-4">
                                        こども矯正にかかる期間と治療の流れ
                                    </p>
                                    <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>

                                <Link href="/kidsortho/cost" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                                    <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">費用について</h3>
                                    <p className="text-[#8D8070] mb-4">
                                        こども矯正にかかる費用と支払い方法
                                    </p>
                                    <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                                        詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>

                {/* CTA */}
                <section className="py-2 bg-gradient-to-r from-[#C5A572] to-[#B8935A] text-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                                お子さまの歯並び、今がベストタイミング
                            </h2>
                            <p className="text-xl mb-8 text-white/90">
                                6歳までに一度、専門医にご相談ください。無料相談で、お子さまに最適な治療開始時期をアドバイスします
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
            </main>
            <Footer />
        </>
    );
}
