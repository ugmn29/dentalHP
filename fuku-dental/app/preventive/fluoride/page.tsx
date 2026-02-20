import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import {
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'フッ素塗布｜予防歯科｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲の歯科 F歯科のフッ素塗布は虫歯予防に効果的な予防処置です。歯質の強化、再石灰化の促進、虫歯菌の抑制など、フッ素塗布のメリットと効果について詳しくご紹介します。',
  keywords: 'フッ素塗布,虫歯予防,歯質強化,再石灰化,子ども,大人,フッ素,予防歯科,豊洲,歯医者',
  openGraph: {
    title: 'フッ素塗布｜予防歯科｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '豊洲の歯科 F歯科のフッ素塗布は虫歯予防に効果的な予防処置です。歯質の強化、再石灰化の促進、虫歯菌の抑制など、フッ素塗布のメリットと効果について詳しくご紹介します。',
    type: 'website',
  },
};

export default function FluoridePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Breadcrumb */}
        <div className="bg-[#FAF8F5] border-b border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm text-[#8D8070]">
              <Home size={16} />
              <a href="/" className="hover:text-[#C5A572] transition-colors">ホーム</a>
              <ChevronRight size={16} />
              <a href="/preventive" className="hover:text-[#C5A572] transition-colors">予防歯科</a>
              <ChevronRight size={16} />
              <span className="text-[#C5A572] font-medium">フッ素塗布</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                フッ素塗布
              </h1>
              <PageImage path="/preventive/fluoride" alt="フッ素塗布" />
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                歯を強くし、虫歯を予防する安全で効果的な予防処置
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                豊洲駅すぐの当院で、定期的なフッ素塗布により虫歯リスクを約40%低減できます
              </p>
            </div>
          </div>
        </section>

        {/* 結論 Section */}
        <section className="py-2 bg-gradient-to-b from-yellow-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-2 border-[#C5A572]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-6 text-center font-serif">
                  結論：フッ素塗布は子どもから大人まで効果的な虫歯予防法
                </h2>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="text-lg">
                    フッ素塗布は、<span className="font-bold bg-yellow-100">歯の表面に高濃度のフッ素を直接塗布することで、歯質を強化し、虫歯を予防する</span>安全で効果的な予防処置です。
                  </p>
                  <div className="bg-[#FDFBF7] p-6 rounded-xl border-l-4 border-[#C5A572]">
                    <p className="font-bold text-xl mb-3 text-[#C5A572]">フッ素塗布の3つの効果</p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>歯質強化：</strong>歯の表面を硬く丈夫にし、酸に溶けにくくする</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>再石灰化促進：</strong>初期虫歯を修復し、健康な歯に戻す</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>虫歯菌抑制：</strong>虫歯菌の活動を抑え、酸の産生を減らす</span>
                      </li>
                    </ul>
                  </div>
                  <p>
                    特に<span className="font-bold text-[#2E8B57]">生えたての乳歯や永久歯は柔らかく虫歯になりやすい</span>ため、定期的なフッ素塗布が効果的です。また、大人でも歯茎が下がって露出した歯根部分の虫歯予防に有効です。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">

              {/* フッ素の歯質強化効果 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  フッ素の歯質強化効果
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    フッ素は<span className="bg-yellow-100 font-bold">歯の表面のエナメル質に作用し、ハイドロキシアパタイトをフルオロアパタイトという、より硬く酸に強い結晶構造に変化</span>させます。これにより歯が丈夫になり、虫歯菌が作る酸から歯を守ります。
                  </p>
                  <div>
                    <p className="font-bold mb-2">フッ素塗布による歯質強化のメカニズム：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>エナメル質の結晶構造を強化し、酸に溶けにくい歯にする</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>歯の表面が滑らかになり、プラーク（歯垢）が付きにくくなる</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>生えたての歯（乳歯・永久歯）の成熟を促進する</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>歯根部分（象牙質）の強化にも効果的</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <p className="text-sm">
                      <strong>特に効果的なタイミング：</strong>生えたての歯は柔らかく虫歯になりやすいため、生後6ヶ月頃（乳歯が生え始める時期）から定期的なフッ素塗布を始めることで、虫歯予防効果が最大化されます。
                    </p>
                  </div>
                </div>
              </div>

              {/* 再石灰化の促進 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  再石灰化の促進
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    <span className="font-bold bg-yellow-100">フッ素は、虫歯の初期段階で溶け出したミネラル（カルシウムやリン）を歯に戻す「再石灰化」を促進</span>します。これにより、削らなければならない虫歯になる前の段階で、自然に修復することができます。
                  </p>
                  <div>
                    <p className="font-bold mb-2">再石灰化のプロセス：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>初期虫歯（白濁）で溶け出したミネラルを補給する</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>唾液中のカルシウムとリンの取り込みを助ける</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>歯の表面を修復し、より強い結晶構造にする</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>脱灰（ミネラルが溶け出すこと）を抑制する</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                    <p className="text-sm">
                      <strong>初期虫歯は削らずに治せる：</strong>歯の表面が白く濁っている状態（初期虫歯）は、フッ素塗布と適切なブラッシングで再石灰化させることができます。定期検診で早期発見し、フッ素塗布で対応することで、歯を削らずに済みます。
                    </p>
                  </div>
                </div>
              </div>

              {/* 虫歯菌の抑制 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  虫歯菌の抑制
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    フッ素には、<span className="bg-yellow-100 font-bold">虫歯の原因菌（ミュータンス菌など）の活動を抑制し、酸の産生を減らす</span>効果があります。これにより、お口の中が虫歯になりにくい環境になります。
                  </p>
                  <div>
                    <p className="font-bold mb-2">虫歯菌への作用：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>虫歯菌の酵素活性を抑制し、酸の産生を減らす</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>細菌の増殖を抑え、プラークの形成を減らす</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>バイオフィルムの形成を抑制する</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span>お口の中のpHを中性に保つのを助ける</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <p className="text-sm">
                      <strong>フッ素とブラッシングの相乗効果：</strong>フッ素塗布だけでなく、フッ素入り歯磨き粉を使った毎日のブラッシングも重要です。両方を組み合わせることで、虫歯予防効果が大幅に高まります。
                    </p>
                  </div>
                </div>
              </div>

              {/* フッ素塗布の適切な頻度 */}
              <div>
                <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  フッ素塗布の適切な頻度
                </h4>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p>
                    フッ素塗布は<span className="bg-yellow-100 font-bold">年齢やお口の状態に応じて、3〜6ヶ月ごとの定期的な塗布が推奨</span>されます。虫歯リスクが高い場合は、より頻繁に行うこともあります。
                  </p>
                  <div>
                    <p className="font-bold mb-2">年齢別の推奨頻度：</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>乳幼児（1〜5歳）：</strong>3〜4ヶ月ごと（虫歯リスクが高い時期）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>学童期（6〜12歳）：</strong>3〜6ヶ月ごと（永久歯への生え変わり時期）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>中高生：</strong>6ヶ月ごと（部活や勉強で生活が不規則な時期）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span><strong>大人：</strong>6ヶ月ごと（歯根部の虫歯予防、知覚過敏軽減）</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
                    <p className="text-sm">
                      <strong>虫歯リスクが高い方は短い間隔で：</strong>虫歯になりやすい体質、歯並びが悪い、唾液が少ない、甘いものをよく食べるなどのリスク因子がある場合は、2〜3ヶ月ごとの塗布が効果的です。
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#5A4D41] font-serif">
                フッ素塗布のメリット
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">01</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">高い虫歯予防効果</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    定期的なフッ素塗布により、虫歯発生リスクを約40%削減できます。特に子どもの虫歯予防に効果的です。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">02</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">痛みがなく安全</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    歯の表面に塗るだけで、痛みや不快感がありません。適切な濃度と量で使用すれば、安全性の高い予防処置です。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">03</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">初期虫歯の修復</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    再石灰化促進により、初期段階の虫歯を削らずに治すことができます。歯を守りながら健康を維持できます。
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="text-3xl font-bold text-[#C5A572] mb-2">04</div>
                  <h4 className="text-xl font-bold text-[#5A4D41] mb-3">コストパフォーマンス</h4>
                  <p className="text-[#8D8070] leading-relaxed">
                    子どもは保険適用で数百円〜1,000円程度。虫歯治療費と比べると、長期的に大幅な医療費削減になります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#5A4D41] font-serif">
                よくある質問
              </h3>
              <div className="space-y-6">

                {/* FAQ 1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">フッ素塗布は安全ですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">はい、適切な濃度と量で使用すれば非常に安全</span>です。歯科医院で使用するフッ素は、WHOやアメリカ歯科医師会など世界中の保健機関が推奨している安全な予防処置です。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      日本の歯科医院では、9,000ppm（0.9%）程度の医薬品グレードのフッ素を使用します。塗布後は30分飲食を控えることで、過剰摂取のリスクはほぼありません。乳幼児から高齢者まで、幅広い年齢層に安全に使用できます。
                    </p>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">何歳からフッ素塗布を始められますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">乳歯が生え始める生後6ヶ月頃から開始できます</span>。最初の歯が生えたら、できるだけ早くフッ素塗布を始めることで、虫歯予防効果が高まります。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      乳歯は永久歯よりも柔らかく虫歯になりやすいため、早期からのフッ素塗布が重要です。生後6ヶ月〜1歳頃に最初の塗布を行い、その後は3〜4ヶ月ごとに定期的に塗布することをお勧めします。
                    </p>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">大人でもフッ素塗布は効果がありますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">はい、大人にも効果的です</span>。特に歯茎が下がって露出した歯根部分の虫歯予防、知覚過敏の軽減、詰め物や被せ物の周囲の虫歯予防に有効です。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      歯根部分は象牙質で覆われており、エナメル質より酸に弱く虫歯になりやすい特徴があります。フッ素塗布により象牙質を強化し、根面虫歯のリスクを大幅に減らせます。また、知覚過敏の症状も軽減できます。
                    </p>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">フッ素塗布後の注意事項はありますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">塗布後30分間は飲食を控えてください</span>。これにより、フッ素が歯にしっかり浸透し、最大の効果が得られます。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      塗布直後は唾液を飲み込んでも問題ありませんが、うがいや飲食は避けてください。30分後からは通常通り飲食できます。また、塗布当日は硬い食べ物やアルコールを避けることをお勧めします。
                    </p>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">フッ素入り歯磨き粉との違いは何ですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> <span className="font-bold">歯科医院で使用するフッ素は市販の歯磨き粉の約10倍の濃度</span>です。市販品（1,000〜1,500ppm）に対し、歯科医院では9,000ppm程度の高濃度フッ素を使用します。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      両方を組み合わせることで、虫歯予防効果が最大化されます。歯科医院で定期的に高濃度フッ素を塗布し、自宅では毎日フッ素入り歯磨き粉でブラッシングすることで、より効果的に虫歯を予防できます。
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-[#5A4D41] font-serif">
                関連ページ
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/preventive" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4">🦷</div>
                  <h4 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">予防歯科TOP</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed mb-3">
                    予防歯科の概要と特徴について詳しくご紹介します。
                  </p>
                  <span className="text-[#C5A572] text-sm inline-flex items-center gap-1">
                    詳しく見る <ArrowRight size={14} />
                  </span>
                </a>
                <a href="/preventive/checkup" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4">🔍</div>
                  <h4 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">定期検診</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed mb-3">
                    虫歯や歯周病の早期発見・早期治療を目的とした重要な予防処置です。
                  </p>
                  <span className="text-[#C5A572] text-sm inline-flex items-center gap-1">
                    詳しく見る <ArrowRight size={14} />
                  </span>
                </a>
                <a href="/preventive/cleaning" className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 border border-gray-100">
                  <div className="text-4xl mb-4">✨</div>
                  <h4 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">クリーニング・PMTC</h4>
                  <p className="text-sm text-[#8D8070] leading-relaxed mb-3">
                    専門的な歯のクリーニングで、虫歯や歯周病を予防します。
                  </p>
                  <span className="text-[#C5A572] text-sm inline-flex items-center gap-1">
                    詳しく見る <ArrowRight size={14} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-b from-[#C5A572] to-[#B59562] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                フッ素塗布で虫歯を予防しましょう
              </h3>
              <p className="text-lg mb-8 opacity-95">
                子どもから大人まで、年齢に応じた適切なフッ素塗布をご提案します。<br />
                定期的な塗布で、健康な歯を長く維持できます。
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#C5A572] font-bold py-4 px-8 rounded-full hover:bg-gray-50 transition-colors shadow-lg"
              >
                ご予約・お問い合わせ
              </a>
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
