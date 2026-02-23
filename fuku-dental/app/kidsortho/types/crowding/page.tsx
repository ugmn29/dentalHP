import { Metadata } from 'next';
import { ArrowRight, ChevronRight, Home, Calendar, Phone } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { KidsOrthoImage } from '@/components/KidsOrthoImage';
import { PageImage } from '@/components/PageImage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '叢生(そうせい)ガタガタの歯並びの治療 | こども矯正 | F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '叢生(ガタガタの歯並び)の特徴、原因、治療法について詳しく解説。日本人に最も多い不正咬合で、早期治療により非抜歯での改善が可能です。お子様の歯並びが気になる方はご相談ください。',
  keywords: '叢生,ガタガタ,歯並び,デコボコ,こども矯正,小児矯正,歯列矯正,不正咬合,歯科,横浜',
  openGraph: {
    title: '叢生(そうせい)ガタガタの歯並びの治療 | こども矯正 | F歯科・矯正歯科 豊洲プライムスクエア院',
    description: '叢生(ガタガタの歯並び)の特徴、原因、治療法について詳しく解説。日本人に最も多い不正咬合で、早期治療により非抜歯での改善が可能です。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/kidsortho/types/crowding',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function CrowdingDetailPage() {
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
                <span className="text-[#C5A572] font-bold">叢生</span>
              </div>

              <div className="mb-6">
                <p className="text-[#C5A572] font-bold text-sm mb-2">不正咬合の種類</p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#5A4D41] mb-3">
                  叢生(そうせい)
                </h1>
                <PageImage path="/kidsortho/types/crowding" alt="叢生（ガタガタの歯並び）の治療" />
                <p className="text-sm text-[#8D8070] mb-3">豊洲の矯正歯科が詳しく解説</p>
                <div className="w-16 h-0.5 bg-[#C5A572] mb-6"></div>
              </div>

              {/* ヒーロー画像 */}
              <KidsOrthoImage
                name="crowding-hero"
                alt="叢生（ガタガタの歯並び）の症例写真"
                category="types"
              />

              <p className="text-lg text-[#5A4D41] mb-2 font-sans mt-6">ガタガタ・デコボコの歯並び</p>
              <p className="text-base text-[#8D8070] font-sans">
                叢生は、歯が重なり合ってガタガタ・デコボコに並んでいる状態です。日本人に最も多い不正咬合で、顎の大きさと歯の大きさのバランスが合わないことが主な原因です。成長期に適切な治療を行うことで、歯を抜かずに改善できる可能性が高まります。
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-2 pb-16">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* 特徴セクション */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">叢生の特徴</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              {/* 見た目の特徴 */}
              <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">1. 見た目の特徴</h3>

              {/* 叢生の見た目を示す画像 */}
              <div className="mb-6">
                <KidsOrthoImage
                  name="crowding-profile"
                  alt="叢生の歯並びの特徴"
                  category="types"
                  className="max-w-2xl mx-auto"
                />
              </div>

              <ul className="space-y-3 ml-4 mb-10 text-[#8D8070] leading-loose font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">歯が重なり合っている：</strong>スペース不足で歯が並びきらず、重なって生えています</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">八重歯になりやすい：</strong>特に犬歯が外側に飛び出した「八重歯」が見られます</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">デコボコに見える：</strong>歯列が不揃いで、ガタガタした印象を与えます</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">前歯がねじれる：</strong>スペース不足で前歯が回転したり傾いたりします</span>
                </li>
              </ul>

              {/* 機能面での問題 */}
              <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">2. 機能面での問題</h3>
              <ul className="space-y-3 ml-4 mb-10 text-[#8D8070] leading-loose font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">磨き残しが多い：</strong>歯が重なっているため、歯ブラシが届きにくく虫歯や歯周病になりやすい</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">噛み合わせが悪い：</strong>歯の位置がずれているため、しっかり噛めない部分があります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">歯周病のリスク：</strong>清掃不良により歯肉炎や歯周病になりやすくなります</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C5A572] mt-1 flex-shrink-0">✓</span>
                  <span><strong className="text-[#5A4D41]">口臭の原因：</strong>磨き残しが多いと、細菌が繁殖して口臭の原因になります</span>
                </li>
              </ul>

              {/* 放置した場合のリスク */}
              <div className="bg-yellow-50 rounded-xl p-6 md:p-8 border border-yellow-200">
                <h3 className="text-xl font-serif font-bold text-[#5A4D41] mb-4">放置した場合のリスク</h3>
                <ul className="space-y-3 ml-4 mb-4 text-[#8D8070] leading-loose font-sans">
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">虫歯・歯周病の進行：</strong>重なった歯の間に歯ブラシが届かず、虫歯や歯周病が進行します</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">抜歯矯正が必要に：</strong>成長後は顎が広がらないため、抜歯して矯正する必要があります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">歯の寿命が短くなる：</strong>清掃不良により、若くして歯を失うリスクが高まります</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-yellow-600 mt-1 flex-shrink-0">⚠</span>
                    <span><strong className="text-[#5A4D41]">さらに悪化する：</strong>永久歯が生えるにつれて、さらにガタガタになることがあります</span>
                  </li>
                </ul>
                <div className="bg-white p-4 rounded-lg">
                  <p className="text-sm text-[#5A4D41] font-sans">
                    <strong className="text-yellow-600">早期治療で非抜歯矯正が可能：</strong>叢生は成長期に治療を開始することで、顎を広げて歯を並べるスペースを作り、抜歯せずに治療できる可能性が高まります。
                  </p>
                </div>
              </div>
            </section>

            {/* 原因セクション */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">叢生の原因</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <div className="mb-8">
                <KidsOrthoImage
                  name="crowding-causes"
                  alt="叢生の原因となる顎と歯のサイズ不調和"
                  category="types"
                  className="max-w-3xl mx-auto"
                />
              </div>

              <div className="space-y-6">
                {/* 遺伝的要因 */}
                <div className="mb-10">
                  <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">1. 遺伝的要因</h4>
                  <ul className="space-y-2 ml-4 text-[#8D8070] leading-loose font-sans">
                    <li className="flex items-start gap-3">
                      <span className="text-[#C5A572] mt-1 flex-shrink-0">•</span>
                      <span><strong className="text-[#5A4D41]">顎の大きさの遺伝：</strong>親の小さな顎の特徴を受け継ぎやすい</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C5A572] mt-1 flex-shrink-0">•</span>
                      <span><strong className="text-[#5A4D41]">歯の大きさの遺伝：</strong>大きめの歯を受け継ぐと、スペースが不足しやすい</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C5A572] mt-1 flex-shrink-0">•</span>
                      <span><strong className="text-[#5A4D41]">日本人に多い：</strong>日本人は欧米人に比べて顎が小さい傾向があります</span>
                    </li>
                  </ul>
                </div>

                {/* 環境的要因 */}
                <div className="mb-10">
                  <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">2. 環境的要因</h4>
                  <ul className="space-y-2 ml-4 text-[#8D8070] leading-loose font-sans">
                    <li className="flex items-start gap-3">
                      <span className="text-[#C5A572] mt-1 flex-shrink-0">•</span>
                      <span><strong className="text-[#5A4D41]">咀嚼不足：</strong>柔らかい食べ物ばかりだと、顎が十分に発育しません</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C5A572] mt-1 flex-shrink-0">•</span>
                      <span><strong className="text-[#5A4D41]">口呼吸：</strong>口で呼吸すると、顎の発育が妨げられます</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C5A572] mt-1 flex-shrink-0">•</span>
                      <span><strong className="text-[#5A4D41]">乳歯の早期喪失：</strong>虫歯などで乳歯を早く失うと、隣の歯が倒れてスペースが狭くなります</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#C5A572] mt-1 flex-shrink-0">•</span>
                      <span><strong className="text-[#5A4D41]">悪習癖：</strong>指しゃぶりや舌で歯を押す癖が影響することもあります</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 治療法セクション */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">叢生の治療法</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <p className="text-[#8D8070] mb-8 leading-loose font-sans">
                叢生の治療は、顎を広げて歯を並べるスペースを作ることが基本です。成長期のお子様の場合、顎の成長を利用できるため、抜歯せずに治療できる可能性が高まります。
              </p>

              <div className="space-y-8">
                {/* 拡大床 */}
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">1. 拡大床（かくだいしょう）による治療</h4>

                  {/* 拡大床の画像 */}
                  <div className="mb-6">
                    <KidsOrthoImage
                      name="crowding-treatment"
                      alt="拡大床（顎を広げる装置）"
                      category="types"
                      className="max-w-xl mx-auto"
                    />
                  </div>

                  <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                    <p>
                      <strong>最も一般的な治療法：</strong>取り外し可能な装置で、少しずつ顎を広げて歯を並べるスペースを確保します。
                    </p>

                    <div>
                      <p className="font-bold mb-2 text-[#C5A572]">治療の流れ</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">1.</span>
                          <span>顎の大きさと歯の大きさを測定し、必要なスペースを計算</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">2.</span>
                          <span>上顎・下顎それぞれの拡大床を作製</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">3.</span>
                          <span>装置の真ん中のネジを定期的に回して、少しずつ顎を広げる</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-[#C5A572] mt-1 flex-shrink-0">4.</span>
                          <span>十分なスペースができたら、歯が自然に並ぶのを待つか、ワイヤー矯正で仕上げる</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-[#FDFBF7] p-4 rounded-lg">
                      <p className="text-sm">
                        <strong className="text-[#C5A572]">装着時間：</strong>1日12時間以上（主に就寝時と自宅にいる時間）<br />
                        <strong className="text-[#C5A572]">治療期間：</strong>1〜2年程度（個人差があります）<br />
                        <strong className="text-[#C5A572]">適応年齢：</strong>6歳〜12歳頃（混合歯列期）
                      </p>
                    </div>
                  </div>
                </div>

                {/* その他の治療法 */}
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#5A4D41] mb-4 pb-2 border-b-2 border-[#C5A572]">2. その他の治療法</h4>

                  <div className="space-y-6">
                    <div>
                      <h5 className="font-bold text-[#5A4D41] mb-2">マウスピース型矯正装置（プレオルソなど）</h5>
                      <p className="text-[#8D8070] mb-2 font-sans">
                        柔らかい素材のマウスピースで、顎の発育を促しながら歯並びを整えます。主に就寝時に使用します。
                      </p>
                      <ul className="ml-4 space-y-1 text-[#8D8070] text-sm font-sans">
                        <li className="flex items-start gap-2">
                          <span className="text-[#C5A572]">✓</span>
                          <span>痛みが少なく、お子様の負担が軽い</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C5A572]">✓</span>
                          <span>口周りの筋肉も同時にトレーニング</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-bold text-[#5A4D41] mb-2">急速拡大装置</h5>
                      <p className="text-[#8D8070] mb-2 font-sans">
                        固定式の装置で、より大きな拡大が必要な場合に使用します。拡大床より短期間で顎を広げることができます。
                      </p>
                      <ul className="ml-4 space-y-1 text-[#8D8070] text-sm font-sans">
                        <li className="flex items-start gap-2">
                          <span className="text-[#C5A572]">✓</span>
                          <span>効果が確実で、患者さんの協力度に左右されにくい</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#C5A572]">✓</span>
                          <span>重度の叢生にも対応可能</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 治療開始時期 */}
            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5A4D41] mb-4">治療開始の適切な時期</h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose font-sans">
                <p>
                  叢生の治療は、<strong className="text-[#C5A572]">6歳〜12歳頃の混合歯列期</strong>（乳歯と永久歯が混在する時期）に開始するのが最適です。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4">
                    <h3 className="font-bold mb-2 text-[#C5A572]">早期治療のメリット</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] flex-shrink-0">✓</span>
                        <span>顎の成長を利用できる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] flex-shrink-0">✓</span>
                        <span>抜歯を避けられる可能性が高い</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] flex-shrink-0">✓</span>
                        <span>治療期間が短くなる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C5A572] flex-shrink-0">✓</span>
                        <span>虫歯・歯周病リスクを早期に軽減</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2 text-[#C5A572]">成人後の治療</h3>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 flex-shrink-0">⚠</span>
                        <span>顎は広がらないため抜歯が必要になる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 flex-shrink-0">⚠</span>
                        <span>治療期間が長くなる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 flex-shrink-0">⚠</span>
                        <span>費用が高額になる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-yellow-600 flex-shrink-0">⚠</span>
                        <span>歯周病のリスクが高い</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* よくある質問 */}
            <section>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#5A4D41] mb-3">よくある質問</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mb-8"></div>

              <div className="space-y-4">
                <details className="rounded-xl p-6 cursor-pointer">
                  <summary className="font-bold text-[#5A4D41] cursor-pointer">八重歯はチャームポイントだから治さなくてもいいですか？</summary>
                  <p className="mt-4 text-[#8D8070] leading-loose font-sans">
                    八重歯（犬歯の叢生）は日本では「かわいい」と言われることもありますが、機能的には問題があります。犬歯は噛み合わせで最も重要な歯の一つで、正しい位置にないと顎関節に負担がかかります。また、犬歯が外側に出ていると歯磨きがしにくく、歯周病のリスクも高まります。見た目だけでなく、将来の歯の健康のためにも治療をおすすめします。
                  </p>
                </details>

                <details className="rounded-xl p-6 cursor-pointer">
                  <summary className="font-bold text-[#5A4D41] cursor-pointer">拡大床の装置は痛いですか？</summary>
                  <p className="mt-4 text-[#8D8070] leading-loose font-sans">
                    拡大床は、ネジを回して少しずつ顎を広げていくため、回した直後は締め付けられるような感覚があります。ただし、この感覚は数時間〜1日程度で治まることがほとんどです。また、最初の数日間は装置に慣れるまで話しにくさを感じることがありますが、すぐに慣れます。痛みというよりは「違和感」程度で、ほとんどのお子様が問題なく使用できています。
                  </p>
                </details>

                <details className="rounded-xl p-6 cursor-pointer">
                  <summary className="font-bold text-[#5A4D41] cursor-pointer">歯を抜かないと治らないと言われました。本当に必要ですか？</summary>
                  <p className="mt-4 text-[#8D8070] leading-loose font-sans">
                    成長期のお子様であれば、顎を広げることで抜歯を避けられるケースが多くあります。ただし、顎の成長が終わった成人の場合や、著しく重度の叢生の場合は、抜歯が必要になることもあります。当院では、できる限り抜歯をせずに治療する方針ですが、お子様の状態を詳しく診査し、最適な治療計画をご提案します。セカンドオピニオンとしてのご相談も歓迎です。
                  </p>
                </details>

                <details className="rounded-xl p-6 cursor-pointer">
                  <summary className="font-bold text-[#5A4D41] cursor-pointer">治療後、また元に戻ってしまうことはありますか？</summary>
                  <p className="mt-4 text-[#8D8070] leading-loose font-sans">
                    矯正治療後は、「後戻り」と呼ばれる現象が起こることがあります。これを防ぐために、治療後は「リテーナー」という保定装置を使用します。リテーナーをしっかり使用すれば、後戻りのリスクは大幅に減少します。また、こども矯正で顎のバランスを整えた場合は、成人矯正に比べて後戻りしにくいという利点があります。治療後の定期的なメインテナンスも重要です。
                  </p>
                </details>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-[#C5A572] to-[#B8935A] rounded-2xl p-8 md:p-12 text-white">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  お子様の歯並びで<br className="md:hidden" />お悩みではありませんか？
                </h2>
                <p className="text-lg mb-8 opacity-90">
                  叢生は早期治療で抜歯を避けられる可能性が高まります。<br />
                  豊洲で小児矯正をお考えなら、まずはお気軽に無料相談をご利用ください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link
                    href="/contact"
                    className="bg-white text-[#C5A572] hover:bg-gray-50 px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all shadow-md hover:shadow-lg group w-full sm:w-auto justify-center"
                  >
                    <Calendar className="w-5 h-5" />
                    無料相談を予約する
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:045-XXX-XXXX"
                    className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all border border-white/30 w-full sm:w-auto justify-center"
                  >
                    <Phone className="w-5 h-5" />
                    電話で相談する
                  </a>
                </div>
                <p className="mt-6 text-sm opacity-80">
                  平日 9:00-19:00 / 土曜 9:00-17:00
                </p>
              </div>
            </section>

            {/* 関連ページリンク */}
            <section>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#5A4D41] mb-6">関連ページ</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/kidsortho/types"
                  className="bg-white rounded-xl p-6 hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">
                    不正咬合の種類
                  </h3>
                  <p className="text-sm text-[#8D8070] mb-3 font-sans">
                    その他の不正咬合について詳しく解説しています
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-bold">
                    詳しく見る
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/kidsortho/timing"
                  className="bg-white rounded-xl p-6 hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">
                    矯正治療を始める時期
                  </h3>
                  <p className="text-sm text-[#8D8070] mb-3 font-sans">
                    お子様の矯正治療の最適なタイミングについて
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-bold">
                    詳しく見る
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/kidsortho/cost"
                  className="bg-white rounded-xl p-6 hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">
                    治療費用について
                  </h3>
                  <p className="text-sm text-[#8D8070] mb-3 font-sans">
                    こども矯正の費用と支払い方法について
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-bold">
                    詳しく見る
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/kidsortho"
                  className="bg-white rounded-xl p-6 hover:shadow-md transition-all group"
                >
                  <h3 className="font-bold text-[#5A4D41] mb-2 group-hover:text-[#C5A572] transition-colors">
                    こども矯正トップ
                  </h3>
                  <p className="text-sm text-[#8D8070] mb-3 font-sans">
                    こども矯正の総合案内ページ
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-bold">
                    詳しく見る
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </section>

            {/* 監修者情報 */}
            <AuthorBio />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
