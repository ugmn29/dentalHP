import { Metadata } from 'next';
import { ArrowRight, ChevronRight, Home, Calendar, Phone } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '下顎前突（受け口）の治療 | こども矯正 | F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '下顎前突（受け口）の特徴、原因、治療法について詳しく解説。早期治療で効果的に改善できる不正咬合の一つです。お子様の歯並びが気になる方はご相談ください。',
  keywords: '下顎前突,受け口,反対咬合,こども矯正,小児矯正,歯列矯正,不正咬合,歯科,横浜',
};

export default function UnderbiteDetailPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDFBF7]" style={{ fontFamily: '"游ゴシック体", "Yu Gothic", YuGothic, "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", sans-serif' }}>
        {/* Hero Section */}
        <section className="bg-[#FDFBF7] py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* パンくずリスト */}
              <div className="flex items-center gap-2 mb-8 text-sm text-[#8D8070]">
                <Link href="/" className="hover:text-[#C5A572] transition-colors flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  ホーム
                </Link>
                <ChevronRight size={14} />
                <Link href="/kidsortho" className="hover:text-[#C5A572] transition-colors">こども矯正</Link>
                <ChevronRight size={14} />
                <Link href="/kidsortho/types" className="hover:text-[#C5A572] transition-colors">不正咬合の種類</Link>
                <ChevronRight size={14} />
                <span className="text-[#C5A572] font-bold">下顎前突</span>
              </div>

              <div className="mb-6">
                <p className="text-[#C5A572] font-bold text-sm mb-2">不正咬合の種類</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#5A4D41] mb-3">
                  下顎前突（かがくぜんとつ）
                </h1>
                <div className="w-16 h-0.5 bg-[#C5A572] mb-6"></div>
              </div>

              {/* ヒーロー画像 */}
              <KidsOrthoImage
                name="underbite-hero"
                alt="下顎前突（受け口）の症例写真"
                category="types"
              />

              <p className="text-lg text-[#C5A572] font-bold mt-6 mb-4">通称：受け口（うけくち）、反対咬合</p>

              <p className="text-base md:text-lg leading-loose text-[#8D8070] mb-8">
                下顎前突は、下の前歯が上の前歯より前に出ている状態です。「受け口」「しゃくれ」とも呼ばれます。3歳児検診で最も多く指摘される不正咬合で、早期治療により顎の成長をコントロールしながら効果的に改善できます。
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-2 pb-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* 特徴セクション */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">下顎前突の特徴</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              {/* 見た目の特徴 */}
              <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">1. 見た目の特徴</h3>

              {/* 受け口の見た目を示す画像 */}
              <div className="mb-6">
                <KidsOrthoImage
                  name="underbite-profile"
                  alt="受け口の横顔の特徴"
                  category="types"
                  className="max-w-2xl mx-auto"
                />
              </div>

              <ul className="space-y-3 ml-4 mb-10 text-[#8D8070] leading-loose font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">下の前歯が前に出ている：</strong>上の前歯より下の前歯が前方にあります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">しゃくれた顎：</strong>下顎が突き出して見え、横顔の輪郭が特徴的です</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">三日月型の顔貌：</strong>顔を横から見ると、下顎が前に出ている形になります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">受け口の口元：</strong>口を閉じても下唇が上唇より前に出ています</span>
                </li>
              </ul>

              {/* 機能面での問題 */}
              <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">2. 機能面での問題</h3>
              <ul className="space-y-3 ml-4 mb-10 text-[#8D8070] leading-loose font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">咀嚼機能の低下：</strong>前歯で食べ物を噛み切れず、奥歯に負担がかかります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">発音障害：</strong>サ行やタ行の発音が不明瞭になります（特に「さしすせそ」）</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">顎関節への負担：</strong>噛み合わせのバランスが悪く、顎に負担がかかります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">奥歯の早期摩耗：</strong>前歯が使えないため、奥歯が早くすり減ります</span>
                </li>
              </ul>

              {/* 放置した場合のリスク */}
              <div className="bg-yellow-50 rounded-xl p-6 md:p-8 border border-yellow-200">
                <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">放置した場合のリスク</h3>
                <ul className="space-y-3 ml-4 mb-4 text-[#8D8070] leading-loose font-sans">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">成長とともに悪化：</strong>下顎は成長期に大きく発育するため、放置すると骨格的な問題が進行します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">外科矯正が必要になる：</strong>成人後は顎の骨を切る手術が必要になることがあります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">顎関節症のリスク：</strong>噛み合わせのずれが顎関節に負担をかけ、痛みや開口障害の原因に</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">コンプレックスの形成：</strong>顔貌を気にして笑顔に自信が持てなくなることがあります</span>
                  </li>
                </ul>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-[#5A4D41] font-sans">
                    <strong className="text-yellow-600">下顎前突は最も早期治療が重要：</strong>下顎前突は不正咬合の中でも特に早期治療が重要です。3〜5歳で治療を開始することで、顎の成長を適切にコントロールし、将来的な外科手術を避けられる可能性が高まります。
                  </p>
                </div>
              </div>
            </section>

            {/* 原因セクション */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">下顎前突の原因</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <div className="mb-8">
                <KidsOrthoImage
                  name="underbite-causes"
                  alt="下顎前突の原因となる顎の成長パターン"
                  category="types"
                  className="max-w-3xl mx-auto"
                />
              </div>

              {/* 遺伝的要因 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  1. 遺伝的要因（骨格性）
                </h3>
                <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                  <p>
                    <span className="font-bold bg-yellow-100">下顎前突は遺伝の影響が強い不正咬合です</span>。
                    特に骨格性の受け口は家族性が認められます。下顎骨の過成長、上顎骨の劣成長、顎の成長パターンなどが遺伝します。
                    <span className="text-[#395b45] font-bold">親や祖父母に受け口の方がいる場合、お子様も同様の傾向を持ちやすいです</span>。
                  </p>
                  <p>
                    <span className="font-bold bg-yellow-100">遺伝的要因が強い場合でも、3〜5歳からの早期治療により顎の成長をコントロールし、骨格的な問題を軽減できます</span>。
                    <span className="text-[#395b45] font-bold">家族に受け口の方がいる場合は、早めにご相談ください</span>。
                  </p>
                </div>
              </div>

              {/* 環境的要因 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  2. 環境的要因（機能性・歯性）
                </h3>
                <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                  <p>
                    遺伝以外にも、習癖や環境によって受け口になることがあります（機能性反対咬合）。
                    <span className="text-[#395b45] font-bold">舌癖（低位舌）、口呼吸、下顎を前に出す癖、上唇を吸う癖、扁桃腺・アデノイドの肥大などが原因となります</span>。
                  </p>
                  <p>
                    <span className="font-bold bg-yellow-100">習癖や環境が原因の機能性反対咬合は、早期に治療を開始すれば比較的短期間で改善できます</span>。
                    <span className="text-[#395b45] font-bold">3歳児検診で指摘された場合は、すぐにご相談ください</span>。
                  </p>
                </div>
              </div>
            </section>

            {/* 治療法セクション */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">治療方法</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              {/* 超早期治療 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  1. 超早期治療（3〜5歳）
                </h3>

                {/* ムーシールドの画像 */}
                <div className="mb-6">
                  <KidsOrthoImage
                    name="underbite-mouthshield"
                    alt="ムーシールド（受け口治療装置）"
                    category="types"
                    className="max-w-xl mx-auto"
                  />
                </div>

                <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                  <p>
                    <span className="font-bold bg-yellow-100">下顎前突は最も早期治療が効果的な不正咬合です</span>。
                    3歳児検診で受け口を指摘されたら、すぐに治療を開始することをお勧めします。<span className="text-[#395b45] font-bold">この時期の治療が最も効果的で、将来的な外科手術のリスクを大幅に減らせます</span>。
                  </p>
                  <p>
                    主な治療法として、<span className="font-bold bg-yellow-100">プレオルソ</span>（やわらかいマウスピース型装置で日中1時間+就寝時の使用）、
                    <span className="text-[#395b45] font-bold">舌訓練（MFT）、鼻呼吸トレーニング</span>などがあります。
                  </p>
                  <p>
                    <span className="font-bold bg-yellow-100">3〜5歳で治療を開始した機能性反対咬合の70〜80%は、この段階で改善します</span>。
                    <span className="text-[#395b45] font-bold">骨格性の場合も、顎の成長をコントロールすることで症状を軽減できます</span>。
                  </p>
                </div>
              </div>

              {/* 1期治療 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  2. 1期治療（6〜12歳頃）
                </h3>

                {/* フェイスマスクの画像 */}
                <div className="mb-6">
                  <KidsOrthoImage
                    name="underbite-facemask"
                    alt="上顎前方牽引装置（フェイスマスク）"
                    category="types"
                    className="max-w-xl mx-auto"
                  />
                </div>

                <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                  <p>
                    <span className="text-[#395b45] font-bold">混合歯列期（乳歯と永久歯が混在する時期）の治療</span>。顎の成長をコントロールします。
                  </p>
                  <p>
                    主な治療法として、<span className="font-bold bg-yellow-100">上顎前方牽引装置（フェイスマスク）</span>（上顎を前方に引っ張り下顎とのバランスを整える）、
                    <span className="text-[#395b45] font-bold">急速拡大装置（上顎を横に広げてスペースを作る）、リンガルアーチ（下の前歯を後方に移動）、機能的矯正装置</span>などがあります。
                  </p>
                  <p>
                    <span className="font-bold bg-yellow-100">下顎の成長は思春期にピークを迎えるため、それまでに上顎とのバランスを整えておくことが大切です</span>。
                  </p>
                </div>
              </div>

              {/* 2期治療 */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                  3. 2期治療（12歳以降〜）
                </h3>
                <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                  <p>
                    <span className="text-[#395b45] font-bold">永久歯が生え揃った後に、歯の位置を細かく調整する段階です</span>。
                  </p>
                  <p>
                    マルチブラケット装置（ワイヤーとブラケット）やマウスピース矯正で歯を調整します。
                    <span className="text-[#395b45] font-bold">スペース不足の場合は下の小臼歯を抜歯することがあります。治療後は後戻りを防ぐためリテーナーを長期使用します</span>。
                  </p>
                  <p>
                    <span className="font-bold bg-yellow-100">重度の骨格性下顎前突で早期治療を行わなかった場合、成人後に外科的矯正治療（顎の骨を切る手術+矯正）が必要になることがあります</span>。
                  </p>
                </div>
              </div>

              {/* 治療期間と費用 */}
              <h3 className="text-xl font-bold text-[#5A4D41] mb-6">4. 治療期間と費用の目安</h3>

              {/* 超早期治療 */}
              <div className="mb-8">
                <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">超早期治療（3〜5歳）</h4>
                <div className="grid md:grid-cols-2 gap-6 text-[#8D8070] leading-loose">
                  <div>
                    <span className="font-bold text-[#5A4D41] block mb-2">治療期間</span>
                    <p className="text-sm">6ヶ月〜1年程度<br /><span className="text-xs">（ムーシールド等の使用期間）</span></p>
                  </div>
                  <div>
                    <span className="font-bold text-[#5A4D41] block mb-2">費用</span>
                    <p className="text-sm">10〜20万円程度<br /><span className="text-xs">（調整料：1回3,000〜5,000円程度）</span></p>
                  </div>
                </div>
              </div>

              {/* 1期治療 */}
              <div className="mb-8">
                <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">1期治療（6〜12歳頃）</h4>
                <div className="grid md:grid-cols-2 gap-6 text-[#8D8070] leading-loose">
                  <div>
                    <span className="font-bold text-[#5A4D41] block mb-2">治療期間</span>
                    <p className="text-sm">1〜3年程度<br /><span className="text-xs">（成長観察を含む）</span></p>
                  </div>
                  <div>
                    <span className="font-bold text-[#5A4D41] block mb-2">費用</span>
                    <p className="text-sm">35〜60万円程度<br /><span className="text-xs">（調整料：1回3,000〜5,000円程度）</span></p>
                  </div>
                </div>
              </div>

              {/* 2期治療 */}
              <div className="mb-4">
                <h4 className="font-bold text-[#5A4D41] mb-3 text-lg">2期治療（12歳以降〜）</h4>
                <div className="grid md:grid-cols-2 gap-6 text-[#8D8070] leading-loose">
                  <div>
                    <span className="font-bold text-[#5A4D41] block mb-2">治療期間</span>
                    <p className="text-sm">1.5〜3年程度<br /><span className="text-xs">（保定期間：2〜3年以上）</span></p>
                  </div>
                  <div>
                    <span className="font-bold text-[#5A4D41] block mb-2">費用</span>
                    <p className="text-sm">40〜80万円程度<br /><span className="text-xs">（1期治療から継続の場合は減額あり）</span></p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#8D8070] mt-6">
                ※費用は症状や使用する装置によって異なります。医療費控除の対象となります。超早期治療で改善すれば、総費用を大幅に抑えられます。
              </p>
            </section>

            {/* 最適な治療時期 */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">最適な治療開始時期</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    最も理想的：3〜5歳（超早期治療）
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                    <p>
                      <span className="font-bold bg-yellow-100">下顎前突は全ての不正咬合の中で最も早期治療が効果的</span>です。
                      <span className="text-[#395b45] font-bold">3歳児検診で受け口を指摘されたら、すぐに治療を開始することをお勧めします</span>。
                    </p>
                    <p>
                      <span className="text-[#395b45] font-bold">機能性反対咬合なら70〜80%がこの段階で改善し、骨格性でも早期から成長をコントロールできます</span>。
                      治療期間が短く費用も最小限で済み、<span className="font-bold bg-yellow-100">将来的な外科手術のリスクを大幅に減らせます</span>。
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    まだ間に合う：6〜10歳（1期治療）
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                    <p>
                      <span className="text-[#395b45] font-bold">混合歯列期も成長をコントロールできる重要な時期です</span>。フェイスマスクなどで上顎を前方に牽引し、バランスを整えます。
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    12歳以降の治療
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                    <p>
                      <span className="text-[#395b45] font-bold">成長期を過ぎてしまった場合、歯の移動のみでの治療となります</span>。
                      <span className="font-bold bg-yellow-100">骨格的な問題が大きい場合は、成人後に外科矯正（顎の骨を切る手術）が必要になることがあります</span>。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">よくある質問</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <div className="space-y-6">
                {/* Q1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q1
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        受け口は自然に治りますか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> ごく軽度の場合を除き、自然に治ることはほとんどありません。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">乳歯列期の軽度な反対咬合：</strong>ごくまれに自然治癒することもありますが、3%程度と非常に少ない</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">ほとんどの場合：</strong>放置すると成長とともに悪化します</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">早期治療が重要：</strong>3歳児検診で指摘されたら、すぐに相談することをお勧めします</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">注意：</strong>「様子を見ましょう」と言われて放置するのは危険です。下顎は成長期に大きく発育するため、早期に治療を始めることが将来的な手術を避ける鍵となります</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Q2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q2
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        ムーシールドは本当に効果がありますか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> はい、3〜5歳の機能性反対咬合には非常に効果的です。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">改善率：</strong>機能性反対咬合の70〜80%が改善すると報告されています</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">使用方法：</strong>就寝時に装着するだけ（8〜10時間）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">治療期間：</strong>6ヶ月〜1年程度で効果が現れます</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">痛みなし：</strong>装着時の違和感は数日で慣れます</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">補足：</strong>骨格性の受け口でも、ムーシールドで口腔機能を改善することで、顎の成長をある程度コントロールできます。早期治療の第一歩として非常に有効です</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Q3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q3
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        フェイスマスクは目立ちますか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 主に自宅で使用するため、外出時の心配は不要です。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">使用時間：</strong>1日12〜14時間程度（主に就寝時と自宅にいる時間）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">学校では不要：</strong>外出時や学校では装着する必要はありません</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">装着中の活動：</strong>テレビを見る、宿題をするなど、普通に過ごせます</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">補足：</strong>フェイスマスクは上顎を前方に引っ張る非常に効果的な装置です。見た目が気になるかもしれませんが、将来の外科手術を避けられる可能性を考えると、とても価値のある治療法です</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Q4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q4
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        治療後に後戻りすることはありますか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 下顎前突は後戻りのリスクが比較的高い不正咬合です。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">成長による後戻り：</strong>思春期の成長で下顎がさらに成長し、後戻りすることがあります</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">習癖による後戻り：</strong>舌癖が改善されないと後戻りのリスクが高まります</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">保定の重要性：</strong>治療後は長期間（2〜3年以上）リテーナーを使用します</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">定期チェック：</strong>成長が終わるまで定期的に経過観察が必要です。特に思春期の成長スパート時期は注意深く経過を見ていく必要があります</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Q5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q5
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        遺伝でも治療できますか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> はい、遺伝性の骨格性受け口でも早期治療により改善できます。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">軽度〜中等度：</strong>早期から治療すれば、矯正治療のみで改善可能</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">重度の場合：</strong>成長をコントロールし、症状を軽減することは可能</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">外科矯正のリスク軽減：</strong>早期治療により、将来的な手術を避けられる可能性が高まります</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">重要：</strong>ご家族に受け口の方がいる場合は、お子様が3歳になったらすぐに検査を受けることをお勧めします。早期発見・早期治療が何より重要です</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Q6 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">
                        Q6
                      </span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">
                        3歳で治療を始めるのは早すぎませんか？
                      </h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-loose">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> いいえ、受け口の場合は3歳からの治療が最も効果的です。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">取り外し式装置：</strong>ムーシールドは就寝時のみの使用で、お子様への負担が少ない</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">短期間で効果：</strong>6ヶ月〜1年で改善することが多く、長期間の治療は不要</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">将来の負担軽減：</strong>この時期に治療すれば、将来的に複雑な治療や手術を避けられます</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] mt-1">✓</span>
                        <span><strong className="text-[#5A4D41]">注意：</strong>むしろ「様子を見る」ことで手遅れになるケースが多いです。3歳児検診で受け口を指摘されたら、すぐに矯正歯科医に相談することを強くお勧めします</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-br from-[#FDFBF7] to-[#FFF9F0] rounded-xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-4">お子様の受け口が気になりませんか？</h2>
                <p className="text-lg md:text-xl text-[#8D8070] leading-loose">
                  下顎前突（受け口）は3〜5歳からの超早期治療が最も効果的です。<br />
                  3歳児検診で指摘されたら、すぐにご相談ください。
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={24} className="text-[#C5A572]" />
                    <div>
                      <h3 className="font-bold text-lg text-[#5A4D41]">無料カウンセリング</h3>
                      <p className="text-sm text-[#8D8070]">所要時間：30〜60分</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm text-[#8D8070] ml-9">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">✓</span>
                      <span>機能性か骨格性かの診断</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">✓</span>
                      <span>最適な治療開始時期のご提案</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">✓</span>
                      <span>治療期間と費用の詳しいご説明</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Phone size={24} className="text-[#C5A572]" />
                    <div>
                      <h3 className="font-bold text-lg text-[#5A4D41]">お電話でのご予約</h3>
                      <p className="text-sm text-[#8D8070]">平日 9:00〜18:00</p>
                    </div>
                  </div>
                  <p className="text-3xl font-bold text-[#C5A572] mb-3 ml-9">045-XXX-XXXX</p>
                  <p className="text-sm text-[#8D8070] ml-9">
                    「受け口の相談」とお伝えください
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#C5A572] hover:bg-[#B39562] text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
                >
                  <Calendar size={20} />
                  <span>無料カウンセリング予約</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/kidsortho"
                  className="inline-flex items-center justify-center gap-2 bg-[#5A4D41] hover:bg-[#4A3D31] text-white font-bold py-4 px-8 rounded-full transition-all border-2 border-[#5A4D41]"
                >
                  <span>こども矯正トップへ</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </section>

            {/* Related Links */}
            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5A4D41] mb-3">関連ページ</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-6"></div>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/kidsortho/types" className="p-6 hover:bg-[#FDFBF7] transition-all rounded-xl border border-gray-200 hover:border-[#C5A572] group">
                  <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors flex items-center gap-2">
                    不正咬合の種類
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm text-[#8D8070]">7つの不正咬合タイプと特徴</p>
                </Link>
                <Link href="/kidsortho/timing" className="p-6 hover:bg-[#FDFBF7] transition-all rounded-xl border border-gray-200 hover:border-[#C5A572] group">
                  <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors flex items-center gap-2">
                    いつから始めるべきか
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm text-[#8D8070]">最適な治療開始時期について</p>
                </Link>
                <Link href="/kidsortho/cost" className="p-6 hover:bg-[#FDFBF7] transition-all rounded-xl border border-gray-200 hover:border-[#C5A572] group">
                  <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors flex items-center gap-2">
                    費用について
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </h3>
                  <p className="text-sm text-[#8D8070]">治療費用と支払い方法</p>
                </Link>
              </div>
            </section>
          </div>
        </div>

        {/* 監修者情報 */}
        <div className="container mx-auto px-4 pt-2 pb-16">
          <AuthorBio />
        </div>
      </main>
      <Footer />
    </>
  );
}
