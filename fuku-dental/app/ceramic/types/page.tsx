import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  Home,
  ChevronRight,
  Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'セラミック治療の種類｜インレー・クラウン・ベニア比較｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'セラミック治療には複数の種類があります。インレー、アンレー、クラウン、ベニアなど、それぞれの特徴と適応症例を詳しく解説。あなたに最適なセラミック治療が見つかります。',
  keywords: 'セラミック,インレー,クラウン,ベニア,アンレー,歯科治療,審美歯科',
};

export default function CeramicTypesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#C5A572] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/ceramic" className="hover:text-[#C5A572]">
                セラミック治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#C5A572]">治療の種類</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                セラミック治療の種類
              </h1>
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                インレー・クラウン・ベニアの違いと選び方
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                それぞれの特徴を理解して、<br />
                あなたに最適な治療法を見つけましょう
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* 治療の範囲で分ける4つのタイプ */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">治療の範囲で分ける4つのタイプ</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4 mb-8"></div>
                <p className="text-lg text-[#8D8070] leading-relaxed">
                  虫歯の大きさや歯の状態によって最適な治療法が異なります
                </p>
              </div>

              <div className="space-y-12">
                {/* インレー */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    インレー（詰め物）
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p className="text-lg text-[#8D8070] mb-4">
                      <span className="font-bold bg-yellow-100">小さな虫歯治療に最適</span>
                    </p>
                    <p>
                      歯の噛む面の一部を削り、その部分だけをセラミックで埋める治療法です。
                      <span className="text-[#2E8B57] font-bold">歯を削る量が最小限</span>で済むため、歯へのダメージが少ないのが特徴です。
                    </p>

                    <div className="mt-6">
                      <h4 className="font-bold text-lg mb-3 text-[#5A4D41]">こんな方におすすめ</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>虫歯が小さい・浅い</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>できるだけ歯を削りたくない</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>奥歯の銀歯を白くしたい</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>費用を抑えたい</span>
                        </li>
                      </ul>
                    </div>

                    <p className="mt-4">
                      <span className="font-bold text-[#C5A572]">目安費用：</span>40,000円〜60,000円/1本
                    </p>
                  </div>
                </div>

                {/* アンレー */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    アンレー（部分的な被せ物）
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p className="text-lg text-[#8D8070] mb-4">
                      <span className="font-bold bg-yellow-100">中程度の虫歯治療に</span>
                    </p>
                    <p>
                      インレーよりも広範囲ですが、クラウンほどではない中間的な治療法です。
                      歯の尖った部分（咬頭）を含めて覆うため、<span className="text-[#2E8B57] font-bold">強度が高くなります</span>。
                    </p>

                    <div className="mt-6">
                      <h4 className="font-bold text-lg mb-3 text-[#5A4D41]">こんな方におすすめ</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>虫歯が中程度の大きさ</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>咬頭（歯の尖った部分）が弱っている</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>全体を覆うクラウンは避けたい</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>強度と審美性を両立したい</span>
                        </li>
                      </ul>
                    </div>

                    <p className="mt-4">
                      <span className="font-bold text-[#C5A572]">目安費用：</span>50,000円〜70,000円/1本
                    </p>
                  </div>
                </div>

                {/* クラウン */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    クラウン（被せ物）
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p className="text-lg text-[#8D8070] mb-4">
                      <span className="font-bold bg-yellow-100">大きな虫歯や変色した歯に</span>
                      <span className="ml-3 bg-[#C5A572] text-white text-sm font-bold px-3 py-1 rounded-full">最も人気</span>
                    </p>
                    <p>
                      歯全体を覆うように被せる治療法です。大きな虫歯治療や、変色した歯を白くする際に使用します。
                      <span className="text-[#2E8B57] font-bold">最も強度が高く、審美性も優れています</span>。
                    </p>

                    <div className="mt-6">
                      <h4 className="font-bold text-lg mb-3 text-[#5A4D41]">こんな方におすすめ</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>虫歯が大きい・深い</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>神経を取った歯（失活歯）</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>前歯を綺麗にしたい</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯の形や色を大きく変えたい</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>強度と見た目を最優先したい</span>
                        </li>
                      </ul>
                    </div>

                    <p className="mt-4">
                      <span className="font-bold text-[#C5A572]">目安費用：</span>80,000円〜150,000円/1本
                    </p>
                  </div>
                </div>

                {/* ベニア */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    ベニア（付け爪タイプ）
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p className="text-lg text-[#8D8070] mb-4">
                      <span className="font-bold bg-yellow-100">前歯の審美治療に特化</span>
                    </p>
                    <p>
                      歯の表面を薄く削り、薄いセラミックを貼り付ける治療法です。
                      付け爪のようなイメージで、<span className="text-[#2E8B57] font-bold">削る量が最小限で済み、審美性が非常に高い</span>のが特徴です。
                    </p>

                    <div className="mt-6">
                      <h4 className="font-bold text-lg mb-3 text-[#5A4D41]">こんな方におすすめ</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>前歯の色や形を整えたい</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯と歯の隙間（すきっ歯）を治したい</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>ホワイトニングでは白くならない歯</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>できるだけ歯を削りたくない</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                          <span>美しい笑顔を手に入れたい</span>
                        </li>
                      </ul>
                    </div>

                    <div className="mt-6">
                      <h4 className="font-bold text-lg mb-3 text-[#5A4D41]">注意点</h4>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-[#8D8070] mr-3 flex-shrink-0 mt-0.5" />
                          <span>前歯専用（奥歯には使えません）</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-[#8D8070] mr-3 flex-shrink-0 mt-0.5" />
                          <span>強い衝撃には弱い</span>
                        </li>
                        <li className="flex items-start">
                          <XCircle className="w-5 h-5 text-[#8D8070] mr-3 flex-shrink-0 mt-0.5" />
                          <span>歯ぎしりが強い方には不向き</span>
                        </li>
                      </ul>
                    </div>

                    <p className="mt-4">
                      <span className="font-bold text-[#C5A572]">目安費用：</span>80,000円〜120,000円/1本
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* セラミックの材料による種類 */}
            <div className="mb-16 mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">セラミックの材料による種類</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4 mb-8"></div>
                <p className="text-lg text-[#8D8070]">
                  使用する材料によっても特性が異なります
                </p>
              </div>

              <div className="space-y-12">
                {/* オールセラミック */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    オールセラミック（e.max）
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      100%セラミックで作られた<span className="font-bold bg-yellow-100">最も審美性の高い材料</span>。
                      透明感があり、<span className="text-[#2E8B57] font-bold">天然歯に最も近い見た目</span>を実現できます。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• 審美性：最高</li>
                      <li>• 強度：中〜高</li>
                      <li>• 前歯に最適</li>
                    </ul>
                  </div>
                </div>

                {/* ジルコニア */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    ジルコニア
                    <span className="ml-3 bg-[#C5A572] text-white text-sm font-bold px-3 py-1 rounded-full">おすすめ</span>
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      <span className="font-bold bg-yellow-100">「白いダイヤモンド」</span>とも呼ばれる非常に強度の高い材料。
                      割れにくく、金属アレルギーの心配もありません。
                      最新のものは<span className="text-[#2E8B57] font-bold">審美性も向上</span>しています。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• 強度：最高</li>
                      <li>• 審美性：高</li>
                      <li>• 奥歯に最適</li>
                      <li>• 前歯にも対応</li>
                    </ul>
                  </div>
                </div>

                {/* PF（ジルコボンド） */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    PF（ジルコボンド）
                    <span className="ml-3 bg-[#C5A572] text-white text-sm font-bold px-3 py-1 rounded-full">最高級</span>
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      ジルコニアフレームの上に陶材を焼き付けた<span className="font-bold bg-yellow-100">最高級の材料</span>。
                      ジルコニアの強度とオールセラミックの審美性を兼ね備えています。
                      <span className="text-[#2E8B57] font-bold">透明感と色調再現性に優れ、最も審美性が高い</span>と言われています。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• 審美性：最高級</li>
                      <li>• 強度：最高</li>
                      <li>• 前歯に最適</li>
                      <li>• 奥歯にも対応</li>
                    </ul>
                  </div>
                </div>

                {/* ハイブリッドセラミック */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    ハイブリッドセラミック
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      セラミックとレジン（プラスチック）を混ぜた材料。
                      <span className="text-[#2E8B57] font-bold">オールセラミックより費用を抑えられます</span>が、
                      経年劣化により変色する可能性があります。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• 費用：抑えられる</li>
                      <li>• 審美性：中</li>
                      <li>• 変色の可能性あり</li>
                    </ul>
                  </div>
                </div>

                {/* メタルボンド */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    メタルボンド
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>
                      金属のフレームの上にセラミックを焼き付けた材料。
                      強度は高いですが、金属アレルギーのリスクや、歯茎が黒ずむ可能性があります。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• 強度：高</li>
                      <li>• 金属使用</li>
                      <li>• 歯茎の黒ずみリスク</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border border-[#C5A572]/10">
                <p className="text-[#5A4D41] font-semibold mb-2 font-serif flex items-center">
                  <Shield className="w-5 h-5 inline mr-2 text-[#C5A572]" />
                  当院のおすすめ
                </p>
                <p className="text-[#8D8070]">
                  当院では、<span className="font-bold text-[#C5A572]">ジルコニア</span>を最もおすすめしています。
                  強度と審美性のバランスに優れ、長期的に安定した結果が期待できます。
                  前歯には透明感の高い<span className="font-bold text-[#C5A572]">オールセラミック（e.max）</span>も人気です。
                </p>
              </div>
            </div>

            {/* どのタイプを選べばいい？ */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">どのタイプを選べばいい？</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4 mb-8"></div>
                <p className="text-lg text-[#8D8070]">
                  お悩み別のおすすめをご紹介
                </p>
              </div>

              <div className="space-y-12">
                {/* 奥歯の銀歯を白くしたい */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    奥歯の銀歯を白くしたい
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>虫歯の大きさによって選択します</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">小さい虫歯：</span>インレー
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">中程度の虫歯：</span>アンレー
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">大きい虫歯：</span>クラウン
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 前歯を綺麗にしたい */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    前歯を綺麗にしたい
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>目的によって最適な方法が異なります</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">色や形を整える：</span>ベニア
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">虫歯治療も必要：</span>クラウン
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">すきっ歯を治す：</span>ベニア
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* できるだけ歯を削りたくない */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    できるだけ歯を削りたくない
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>最小限の侵襲で治療できます</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">奥歯：</span>インレー（削る量最小）
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">前歯：</span>ベニア（表面のみ削る）
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* 費用を抑えたい */}
                <div>
                  <h3 className="text-2xl font-bold text-[#5A4D41] font-serif mb-4 pb-2 border-b-2 border-[#C5A572]">
                    費用を抑えたい
                  </h3>
                  <div className="space-y-4 text-[#5A4D41] leading-loose">
                    <p>インレーが最も費用対効果が高いです</p>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">最安：</span>インレー（4〜6万円）
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold">次点：</span>アンレー（5〜7万円）
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-white rounded-2xl shadow-sm border border-[#C5A572]/10">
                <h3 className="text-2xl font-bold mb-4 text-[#5A4D41] font-serif">
                  迷ったら歯科医師にご相談ください
                </h3>
                <p className="text-lg mb-4 text-[#8D8070]">
                  どのタイプが最適かは、虫歯の大きさ、歯の位置、予算、審美性への要求など、
                  様々な要因によって決まります。
                </p>
                <p className="text-lg text-[#8D8070]">
                  当院では、丁寧なカウンセリングを通じて、あなたに最適な治療法をご提案いたします。
                  無料相談も受け付けていますので、お気軽にお問い合わせください。
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-6 md:py-6 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">よくある質問</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* FAQ 1 */}
                <div className="bg-white rounded-2xl shadow-md p-6 border border-[#C5A572]/10">
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-4 font-serif">
                    インレーとクラウンの違いは何ですか？
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    <span className="font-bold bg-yellow-100">インレー</span>は歯の一部だけを削って埋める「詰め物」で、
                    <span className="font-bold bg-yellow-100">クラウン</span>は歯全体を削って被せる「被せ物」です。
                    虫歯が小さければインレー、大きければクラウンとなります。
                    インレーの方が削る量が少なく、費用も抑えられますが、強度はクラウンの方が高くなります。
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#FDFBF7] p-4 rounded-lg">
                      <p className="font-bold text-[#5A4D41] mb-2 text-sm">インレー</p>
                      <ul className="space-y-1 text-sm text-[#8D8070]">
                        <li>• 部分的な詰め物</li>
                        <li>• 削る量が少ない</li>
                        <li>• 費用：4〜6万円</li>
                      </ul>
                    </div>
                    <div className="bg-[#FDFBF7] p-4 rounded-lg">
                      <p className="font-bold text-[#5A4D41] mb-2 text-sm">クラウン</p>
                      <ul className="space-y-1 text-sm text-[#8D8070]">
                        <li>• 歯全体の被せ物</li>
                        <li>• 削る量が多い</li>
                        <li>• 費用：8〜15万円</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-2xl shadow-md p-6 border border-[#C5A572]/10">
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-4 font-serif">
                    ベニアは前歯にしか使えないのですか？
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    はい、ベニアは基本的に<span className="font-bold bg-yellow-100">前歯専用</span>の治療法です。
                    薄いセラミックを貼り付ける構造上、強い咬合力がかかる奥歯には適していません。
                    奥歯を白くしたい場合は、インレー、アンレー、またはクラウンをご検討ください。
                  </p>
                  <div className="bg-[#FDFBF7] p-4 rounded-lg">
                    <p className="text-sm font-semibold text-[#5A4D41] mb-2">ベニアが適している部位</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] flex-shrink-0 mt-0.5" />
                        <span>前歯（特に上の前歯）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] flex-shrink-0 mt-0.5" />
                        <span>審美性を重視する部位</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-[#8D8070] flex-shrink-0 mt-0.5" />
                        <span>奥歯には不向き</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-2xl shadow-md p-6 border border-[#C5A572]/10">
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-4 font-serif">
                    アンレーとはどんな治療ですか？
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    アンレーは、<span className="font-bold bg-yellow-100">インレーとクラウンの中間</span>に位置する治療法です。
                    歯の尖った部分（咬頭）を含めて覆うため、インレーより広範囲ですが、
                    クラウンのように歯全体を覆うわけではありません。
                    中程度の虫歯や、咬頭が弱っている場合に適しています。
                  </p>
                  <div className="bg-[#FDFBF7] p-4 rounded-lg">
                    <p className="text-sm font-semibold text-[#5A4D41] mb-2">アンレーの特徴</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li>• 治療範囲：部分的（中程度）</li>
                      <li>• 咬頭部分を含む</li>
                      <li>• 強度と審美性のバランスが良い</li>
                      <li>• 費用：5〜7万円</li>
                    </ul>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-2xl shadow-md p-6 border border-[#C5A572]/10">
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-4 font-serif">
                    どのタイプが一番長持ちしますか？
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    一般的には<span className="font-bold bg-yellow-100">クラウン</span>が最も長持ちします。
                    歯全体を覆うため強度が高く、適切なケアで10年以上持続することも珍しくありません。
                    ただし、どのタイプでも日々のケア（歯磨き、定期検診）が重要です。
                    また、使用する材料（ジルコニア、オールセラミックなど）によっても耐久性は変わります。
                  </p>
                  <div className="bg-[#FDFBF7] p-4 rounded-lg">
                    <p className="text-sm font-semibold text-[#5A4D41] mb-2">一般的な耐久年数</p>
                    <div className="grid md:grid-cols-2 gap-3 text-sm text-[#8D8070]">
                      <div>
                        <p className="font-bold mb-1">インレー・アンレー</p>
                        <p className="text-xs">約5〜10年</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">クラウン</p>
                        <p className="text-xs">約10〜15年</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">ベニア</p>
                        <p className="text-xs">約10〜15年</p>
                      </div>
                      <div>
                        <p className="font-bold mb-1">ジルコニア</p>
                        <p className="text-xs">約15年以上</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-2xl shadow-md p-6 border border-[#C5A572]/10">
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-4 font-serif">
                    治療の痛みはありますか？
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    治療中は<span className="font-bold bg-yellow-100">局所麻酔</span>を使用しますので、痛みはほとんど感じません。
                    麻酔が切れた後に多少の違和感や軽い痛みを感じることがありますが、
                    通常は数日で治まります。痛みに敏感な方は、事前に歯科医師にご相談ください。
                  </p>
                  <div className="bg-[#FDFBF7] p-4 rounded-lg">
                    <p className="text-sm font-semibold text-[#5A4D41] mb-2">痛みへの配慮</p>
                    <ul className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] flex-shrink-0 mt-0.5" />
                        <span>表面麻酔の使用</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] flex-shrink-0 mt-0.5" />
                        <span>細い注射針の使用</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A572] flex-shrink-0 mt-0.5" />
                        <span>鎮痛剤の処方</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* FAQ 6 */}
                <div className="bg-white rounded-2xl shadow-md p-6 border border-[#C5A572]/10">
                  <h3 className="text-lg font-bold text-[#5A4D41] mb-4 font-serif">
                    治療期間はどのくらいかかりますか？
                  </h3>
                  <p className="text-[#8D8070] leading-relaxed mb-4">
                    <span className="font-bold bg-yellow-100">基本的には2〜4回の通院</span>で完了します。
                    クラウンの場合は仮歯期間があるため、やや長くなることがあります。
                  </p>
                  <div className="bg-[#FDFBF7] p-4 rounded-lg">
                    <p className="text-sm font-semibold text-[#5A4D41] mb-2">治療の流れ</p>
                    <ol className="space-y-2 text-sm text-[#8D8070]">
                      <li className="flex items-start gap-2">
                        <span className="bg-[#C5A572] text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">1</span>
                        <span>検査、歯の形取り（型取り）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-[#C5A572] text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">2</span>
                        <span>セラミックの装着と調整</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-[#C5A572] text-white rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs">3</span>
                        <span>必要に応じて仮歯の装着、最終調整</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section className="py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">関連ページ</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/ceramic" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">セラミック治療TOP</h3>
                  <p className="text-[#8D8070] mb-4">
                    セラミック治療の概要と特徴
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/ceramic/cost" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">費用・料金</h3>
                  <p className="text-[#8D8070] mb-4">
                    セラミック治療の費用について
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/ceramic/longevity" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">寿命・耐久性</h3>
                  <p className="text-[#8D8070] mb-4">
                    セラミックはどのくらい持つ？
                  </p>
                  <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-2 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                あなたに最適なセラミック治療を
              </h2>
              <p className="text-xl mb-8 text-white/90">
                無料相談で詳しくご説明いたします
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
                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>
            </main>
      <Footer />
    </>
  );
}
