import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import {
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight,
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: '虫歯の痛みと対処法 | 応急処置・痛み止め・緊急時の対応 | F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '虫歯の痛みが出たときの応急処置と対処法を詳しく解説。痛み止めの正しい使い方、冷やし方、やってはいけないこと、緊急時の受診目安について。',
  keywords: '虫歯,痛み,応急処置,痛み止め,歯痛,急性症状,緊急,対処法,冷やす,夜間',
};

export default function PainPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <nav className="bg-[#FDFBF7] py-3 border-b border-[#E5E5E5]">
          <div className="container mx-auto px-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="/" className="text-[#8D8070] hover:text-[#C5A572] transition-colors flex items-center">
                  <Home size={16} className="mr-1" />
                  ホーム
                </a>
              </li>
              <ChevronRight size={16} className="text-[#8D8070]" />
              <li>
                <a href="/cavity" className="text-[#8D8070] hover:text-[#C5A572] transition-colors">
                  虫歯治療
                </a>
              </li>
              <ChevronRight size={16} className="text-[#8D8070]" />
              <li className="text-[#5A4D41] font-medium">
                虫歯の痛みと対処法
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                虫歯の痛みと対処法
              </h1>
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-[#5A4D41] leading-relaxed">
                急な歯の痛みへの応急処置と正しい対処法<br />
                <span className="text-base text-[#8D8070] mt-2 inline-block">痛み止め・冷やし方・緊急時の受診目安</span>
              </p>
            </div>
          </div>
        </section>

        {/* 結論 Section */}
        <section className="py-2 bg-gradient-to-br from-[#C5A572]/5 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border-t-4 border-[#C5A572]">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#5A4D41] font-serif text-center">
                  結論
                </h2>
                <div className="space-y-4 text-[#5A4D41] leading-loose">
                  <p className="text-lg">
                    虫歯の痛みは、<span className="bg-yellow-100 font-bold">進行度によって症状が異なります</span>。
                    軽い痛みから激しい痛みまで様々ですが、<strong className="text-[#C5A572]">痛みは虫歯が進行しているサイン</strong>です。
                  </p>
                  <p>
                    <span className="text-red-600 font-bold">応急処置はあくまで一時的なもの</span>であり、
                    <strong className="text-[#2E8B57]">必ず歯科医院を受診して根本的な治療を受けることが重要</strong>です。
                    市販の痛み止めや冷やすなどの対処法で一時的に痛みが和らいでも、虫歯は自然には治りません。
                  </p>
                  <p>
                    特に、<span className="bg-red-100 font-bold">激しい痛み、腫れ、発熱がある場合はすぐに受診</span>してください。
                    夜間や休日で痛みが我慢できない場合は、夜間救急歯科への受診も検討しましょう。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 緊急度チェック */}
        <section className="py-6 md:py-6 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-4">
                  こんな症状は要注意！すぐに受診を
                </h2>
                <div className="w-24 h-1 bg-[#C5A572] mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md">
                  <div className="flex items-start mb-3">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-red-600 mb-2">激しい痛みが続く</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        ズキズキとした激しい痛みが続く場合、虫歯が神経まで達している可能性があります。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md">
                  <div className="flex items-start mb-3">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-red-600 mb-2">顔や歯茎が腫れている</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        腫れは感染が広がっているサイン。放置すると重篤な状態になる可能性があります。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md">
                  <div className="flex items-start mb-3">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-red-600 mb-2">発熱がある</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        38度以上の発熱は、感染が全身に広がっている可能性があります。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md">
                  <div className="flex items-start mb-3">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-red-600 mb-2">口が開けにくい</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        炎症が顎の筋肉まで及んでいる可能性があります。早急な治療が必要です。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md">
                  <div className="flex items-start mb-3">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-red-600 mb-2">膿が出ている</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        歯茎から膿が出るのは、歯の根に感染が広がっている証拠です。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border-l-4 border-red-500 shadow-md">
                  <div className="flex items-start mb-3">
                    <AlertCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-red-600 mb-2">痛み止めが効かない</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        市販の痛み止めで痛みが全く和らがない場合は、すぐに受診してください。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-6 md:py-6">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                {/* 痛みの種類と原因 */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    虫歯の痛みの種類と原因
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                        冷たいものがしみる（C1〜C2）
                      </h4>
                      <p className="text-[#5A4D41] leading-loose mb-3">
                        <span className="bg-yellow-100 font-bold">虫歯が象牙質まで進行</span>している状態です。
                        冷たい飲み物や甘いものを口にすると、瞬間的にキーンとした痛みを感じます。
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-sm text-[#5A4D41]">
                          <strong>対処法：</strong>この段階なら、早めに治療すれば神経を残せる可能性が高いです。
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                        何もしなくてもズキズキ痛む（C3）
                      </h4>
                      <p className="text-[#5A4D41] leading-loose mb-3">
                        <span className="bg-yellow-100 font-bold">虫歯が神経まで達している</span>状態です。
                        何もしていなくても、夜中にズキズキと激しく痛みます。これは歯髄炎（しずいえん）と呼ばれる状態です。
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="text-sm text-[#5A4D41]">
                          <strong>緊急度：高</strong> すぐに歯科医院を受診してください。根管治療が必要です。
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                        咬むと痛い（C3〜C4）
                      </h4>
                      <p className="text-[#5A4D41] leading-loose mb-3">
                        <span className="bg-yellow-100 font-bold">歯の根の先に膿が溜まっている</span>状態です。
                        咬んだときに歯が浮いたような感じがしたり、鈍い痛みを感じます。
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="text-sm text-[#5A4D41]">
                          <strong>緊急度：高</strong> 放置すると腫れや発熱につながります。早急に受診してください。
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                        痛みがなくなった（C4）
                      </h4>
                      <p className="text-[#5A4D41] leading-loose mb-3">
                        <span className="bg-red-100 font-bold">神経が完全に死んでしまった</span>状態です。
                        「治った」と勘違いしがちですが、実際には虫歯がさらに進行しています。
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                        <p className="text-sm text-[#5A4D41]">
                          <strong>注意：</strong>この後、歯の根に膿が溜まり、再び激しい痛みや腫れが出る可能性があります。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 応急処置の方法 */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    自宅でできる応急処置
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center">
                        <CheckCircle2 className="w-6 h-6 text-green-500 mr-3" />
                        市販の痛み止めを服用する
                      </h4>
                      <div className="ml-9 space-y-3">
                        <p className="text-[#5A4D41] leading-loose">
                          <span className="bg-yellow-100 font-bold">ロキソプロフェン、イブプロフェン、アセトアミノフェン</span>などの
                          市販の鎮痛剤を用法用量を守って服用してください。
                        </p>
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                          <p className="text-sm text-[#5A4D41] mb-2"><strong>服用のポイント：</strong></p>
                          <ul className="space-y-1 text-sm text-[#5A4D41] ml-4">
                            <li>• 用法用量を必ず守る</li>
                            <li>• 空腹時は避け、食後に服用する</li>
                            <li>• 効果が出るまで30分〜1時間かかる</li>
                            <li>• 効果は4〜6時間程度</li>
                            <li>• 長期間の服用は避け、必ず受診する</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center">
                        <CheckCircle2 className="w-6 h-6 text-green-500 mr-3" />
                        患部を冷やす
                      </h4>
                      <div className="ml-9 space-y-3">
                        <p className="text-[#5A4D41] leading-loose">
                          <span className="bg-yellow-100 font-bold">頬の外側から冷たいタオルや保冷剤を当てる</span>ことで、
                          炎症を抑え、痛みを和らげることができます。
                        </p>
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                          <p className="text-sm text-[#5A4D41] mb-2"><strong>冷やし方のポイント：</strong></p>
                          <ul className="space-y-1 text-sm text-[#5A4D41] ml-4">
                            <li>• 保冷剤や氷はタオルで包む（直接当てない）</li>
                            <li>• 頬の外側から当てる（口の中には入れない）</li>
                            <li>• 10〜15分冷やして休憩を繰り返す</li>
                            <li>• 冷やしすぎると逆効果になるので注意</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center">
                        <CheckCircle2 className="w-6 h-6 text-green-500 mr-3" />
                        口の中を清潔に保つ
                      </h4>
                      <div className="ml-9 space-y-3">
                        <p className="text-[#5A4D41] leading-loose">
                          <span className="bg-yellow-100 font-bold">ぬるま湯で優しくうがいをする</span>ことで、
                          虫歯の穴に詰まった食べカスを取り除き、細菌の増殖を抑えます。
                        </p>
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                          <p className="text-sm text-[#5A4D41] mb-2"><strong>うがいのポイント：</strong></p>
                          <ul className="space-y-1 text-sm text-[#5A4D41] ml-4">
                            <li>• 体温程度のぬるま湯を使う</li>
                            <li>• 優しく口をゆすぐ（強くゆすがない）</li>
                            <li>• 食後は必ずうがいをする</li>
                            <li>• 刺激の強いうがい薬は避ける</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4 flex items-center">
                        <CheckCircle2 className="w-6 h-6 text-green-500 mr-3" />
                        安静にする
                      </h4>
                      <div className="ml-9 space-y-3">
                        <p className="text-[#5A4D41] leading-loose">
                          <span className="bg-yellow-100 font-bold">体を温めると血流が増えて痛みが強くなる</span>ため、
                          安静にして体を休めることが大切です。
                        </p>
                        <div className="bg-white p-4 rounded-lg border border-green-200">
                          <p className="text-sm text-[#5A4D41] mb-2"><strong>安静時のポイント：</strong></p>
                          <ul className="space-y-1 text-sm text-[#5A4D41] ml-4">
                            <li>• 激しい運動は避ける</li>
                            <li>• 長時間の入浴は避ける（シャワー程度に）</li>
                            <li>• 飲酒は控える</li>
                            <li>• 横になるときは頭を少し高くする</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* やってはいけないこと */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    やってはいけないこと
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center">
                        <span className="text-2xl mr-3">✗</span>
                        患部を直接触る
                      </h4>
                      <p className="text-sm text-[#5A4D41] leading-relaxed ml-9">
                        指や舌で患部を触ると、細菌が入り込んで症状が悪化します。虫歯の穴を触りたくなっても我慢してください。
                      </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center">
                        <span className="text-2xl mr-3">✗</span>
                        患部側で咬む
                      </h4>
                      <p className="text-sm text-[#5A4D41] leading-relaxed ml-9">
                        痛みのある側で食べ物を咬むと、歯に負担がかかり痛みが増します。反対側で咬むようにしましょう。
                      </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center">
                        <span className="text-2xl mr-3">✗</span>
                        熱いもの・刺激物を摂る
                      </h4>
                      <p className="text-sm text-[#5A4D41] leading-relaxed ml-9">
                        熱いものや辛いもの、酸っぱいものは痛みを増強させます。常温〜ぬるめの刺激の少ない食事を心がけてください。
                      </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center">
                        <span className="text-2xl mr-3">✗</span>
                        飲酒・喫煙
                      </h4>
                      <p className="text-sm text-[#5A4D41] leading-relaxed ml-9">
                        アルコールは血流を増加させて痛みを強くします。タバコは治癒を遅らせます。どちらも控えてください。
                      </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center">
                        <span className="text-2xl mr-3">✗</span>
                        痛み止めを過剰に服用する
                      </h4>
                      <p className="text-sm text-[#5A4D41] leading-relaxed ml-9">
                        痛み止めの過剰服用は、胃腸障害や肝臓・腎臓への負担を引き起こします。用法用量を必ず守ってください。
                      </p>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center">
                        <span className="text-2xl mr-3">✗</span>
                        市販の詰め物を使う
                      </h4>
                      <p className="text-sm text-[#5A4D41] leading-relaxed ml-9">
                        ドラッグストアで売っている応急用の詰め物は、一時しのぎにしかなりません。詰めたまま放置すると虫歯がさらに進行します。
                      </p>
                    </div>
                  </div>
                </div>

                {/* 夜間・休日の対応 */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif mb-8 pb-3 border-b-2 border-[#C5A572]">
                    夜間・休日に痛みが出たら
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                      <h4 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">
                        我慢できる痛みの場合
                      </h4>
                      <div className="space-y-3 text-[#5A4D41] leading-loose">
                        <p>
                          <span className="bg-yellow-100 font-bold">応急処置で痛みがある程度和らぐ場合</span>は、
                          翌営業日に歯科医院を受診してください。
                        </p>
                        <ul className="space-y-2 ml-6">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>痛み止めを服用する</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>患部を冷やす</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                            <span>安静にする</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                      <h4 className="text-xl font-bold text-red-600 font-serif mb-4">
                        我慢できない痛みの場合
                      </h4>
                      <div className="space-y-3 text-[#5A4D41] leading-loose">
                        <p>
                          <span className="bg-red-100 font-bold">痛み止めが効かない、腫れや発熱がある場合</span>は、
                          夜間救急歯科の受診を検討してください。
                        </p>
                        <div className="bg-white p-4 rounded-lg border border-red-300">
                          <p className="text-sm text-[#5A4D41] mb-2"><strong>夜間救急歯科を探す方法：</strong></p>
                          <ul className="space-y-1 text-sm text-[#5A4D41] ml-4">
                            <li>• 各市区町村の「休日・夜間急患診療所」を確認</li>
                            <li>• 「地域名 + 夜間救急歯科」でインターネット検索</li>
                            <li>• 自治体の救急医療情報サービスに電話</li>
                            <li>• 救急安心センター「#7119」に相談（一部地域）</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-2 bg-gradient-to-br from-[#FDFBF7] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#5A4D41] font-serif text-center">
                当院の急患対応
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">急患随時受付</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        急な痛みにも対応いたします。ご予約がなくても、まずはお電話でご相談ください。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">痛みを最優先に対応</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        まずは痛みを取り除く処置を最優先で行い、その後の治療計画をご提案します。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">痛みを抑えた治療</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        表面麻酔・電動麻酔器を使用し、治療中の痛みを最小限に抑えます。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md border-t-4 border-[#C5A572]">
                  <div className="flex items-start mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#5A4D41] mb-2">丁寧な説明</h3>
                      <p className="text-sm text-[#5A4D41] leading-relaxed">
                        痛みの原因と今後の治療方針について、わかりやすく説明いたします。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#5A4D41] font-serif text-center">
                よくある質問
              </h2>
              <div className="space-y-6">
                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      痛みが治まったら治療しなくても大丈夫ですか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      いいえ、痛みが治まっても虫歯は自然には治りません。一時的に痛みがなくなったのは、神経が死んでしまったか、炎症が一時的に落ち着いただけです。放置すると、歯の根に膿が溜まったり、最悪の場合は抜歯が必要になることもあります。必ず歯科医院を受診してください。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      妊娠中でも痛み止めを飲んで大丈夫ですか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      アセトアミノフェン（タイレノールなど）は妊娠中でも比較的安全に使用できますが、自己判断で服用せず、必ずかかりつけの産婦人科医または歯科医師に相談してください。妊娠中の虫歯治療も可能ですので、我慢せずに受診することをお勧めします。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      子どもが夜中に歯の痛みを訴えています。どうすればいいですか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      まず患部を冷やし、ぬるま湯でうがいをさせてください。子ども用の痛み止め（アセトアミノフェンやイブプロフェン）があれば、年齢・体重に合った用量を服用させます。我慢できない痛みや、腫れ・発熱がある場合は、夜間救急歯科または小児救急電話相談「#8000」に相談してください。翌日には必ず歯科医院を受診してください。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      痛み止めは何時間おきに飲めますか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      一般的に、ロキソプロフェンやイブプロフェンは4〜6時間以上、アセトアミノフェンは4時間以上空けてください。ただし、薬によって異なりますので、必ず添付文書を確認してください。1日の最大服用量を超えないよう注意し、3日以上継続して服用する場合は医師や薬剤師に相談してください。
                    </p>
                  </div>
                </div>

                <div className="bg-[#FDFBF7] p-6 rounded-xl border border-[#E5E5E5]">
                  <div className="flex items-start mb-3">
                    <div className="w-8 h-8 rounded-full bg-[#C5A572] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      Q
                    </div>
                    <p className="text-lg font-bold text-[#5A4D41] mt-0.5">
                      冷やしても温めてもいいですか?
                    </p>
                  </div>
                  <div className="flex items-start ml-12">
                    <div className="w-8 h-8 rounded-full bg-[#8D8070] text-white flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      A
                    </div>
                    <p className="text-[#5A4D41] leading-relaxed mt-0.5">
                      虫歯の痛みには「冷やす」が正解です。温めると血流が増加して炎症が悪化し、痛みが強くなります。頬の外側から冷たいタオルや保冷剤（タオルで包んで）を当ててください。ただし、冷やしすぎると逆効果なので、10〜15分冷やして休憩を繰り返してください。
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
              <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#5A4D41] font-serif text-center">
                関連ページ
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href="/cavity/stages"
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] hover:border-[#C5A572]"
                >
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                    虫歯の進行段階
                  </h3>
                  <p className="text-sm text-[#5A4D41] mb-4 leading-relaxed">
                    C0からC4まで、虫歯の進行段階ごとの症状と治療法を詳しく解説します。
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-medium">
                    詳しく見る
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                <a
                  href="/cavity/treatment-methods"
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] hover:border-[#C5A572]"
                >
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                    虫歯の治療方法
                  </h3>
                  <p className="text-sm text-[#5A4D41] mb-4 leading-relaxed">
                    コンポジットレジン、インレー、クラウン、根管治療など、治療方法を解説します。
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-medium">
                    詳しく見る
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                <a
                  href="/cavity/cost"
                  className="group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#E5E5E5] hover:border-[#C5A572]"
                >
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-3 group-hover:text-[#C5A572] transition-colors">
                    虫歯治療の費用
                  </h3>
                  <p className="text-sm text-[#5A4D41] mb-4 leading-relaxed">
                    保険適用の治療費と自費診療の費用について、詳しくご説明します。
                  </p>
                  <div className="flex items-center text-[#C5A572] text-sm font-medium">
                    詳しく見る
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-2 bg-gradient-to-br from-[#C5A572] to-[#B59562]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                急な歯の痛みは<br className="md:hidden" />お気軽にご相談ください
              </h2>
              <p className="text-lg mb-8 leading-relaxed opacity-95">
                応急処置はあくまで一時的なものです。<br />
                痛みを根本から解決するために、<br className="hidden md:block" />
                できるだけ早く受診してください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold hover:bg-[#FDFBF7] transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  急患のご予約・お問い合わせ
                </a>
                <a
                  href="/cavity"
                  className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#C5A572] transition-all duration-300"
                >
                  虫歯治療について
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
