import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import {
  Camera,
  Crown,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Home,
  ChevronRight,
  Star,
  TrendingUp,
  Heart,
  Smile
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'セラミック治療の症例紹介｜Before & After｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲の歯医者 F歯科によるセラミック治療の症例写真をご紹介。前歯・奥歯のビフォーアフターで治療効果をご確認いただけます。実際の患者様の声も掲載しています。',
  keywords: 'セラミック,症例,ビフォーアフター,Before,After,実績,治療例,患者の声',
  openGraph: {
    title: 'セラミック治療の症例紹介｜Before & After｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'セラミック治療の症例写真をご紹介。前歯・奥歯のビフォーアフターで治療効果をご確認いただけます。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/ceramic/case-studies',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function CeramicCaseStudiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-indigo-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-indigo-600 flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/ceramic" className="hover:text-indigo-600">
                セラミック治療
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-indigo-600">症例紹介</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Camera className="w-16 h-16" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                セラミック治療の症例紹介
              </h1>
              <PageImage path="/ceramic/case-studies" alt="セラミック治療の症例紹介" />
              <p className="text-xl md:text-2xl mb-6">
                Before & After
              </p>
              <p className="text-lg opacity-90">
                豊洲駅すぐのF歯科の実際の治療例をご覧いただき、<br />
                セラミック治療の効果を実感してください
              </p>
            </div>
          </div>
        </section>

        {/* 注意事項 */}
        <section className="py-8 bg-yellow-50 border-y border-yellow-200">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm text-gray-700">
                ※ 掲載している症例写真は、患者様の同意を得て掲載しています。
                治療効果には個人差があります。<br />
                ※ 写真はイメージです。実際の症例写真をご覧になりたい方は、カウンセリング時にお申し付けください。
              </p>
            </div>
          </div>
        </section>

        {/* 症例カテゴリー */}
        <section className="py-2">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  症例カテゴリー
                </h2>
                <p className="text-lg text-gray-600">
                  様々なケースのセラミック治療例をご紹介
                </p>
              </div>

              {/* 症例1: 前歯の銀歯をセラミックに */}
              <div className="mb-16">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-400 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">症例1：前歯の銀歯をオールセラミッククラウンに</h3>
                        <p className="text-pink-50">30代女性／治療期間：3週間</p>
                      </div>
                      <Sparkles className="w-12 h-12" />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Before */}
                      <div className="bg-gray-100 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">Before（治療前）</h4>
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            治療前
                          </span>
                        </div>
                        <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center mb-4">
                          <p className="text-gray-600 text-center">
                            前歯に銀歯<br />
                            口を開けると目立つ<br />
                            笑顔に自信が持てない
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• 前歯2本に銀歯のクラウン</li>
                          <li>• 笑うと銀色が見えて気になる</li>
                          <li>• 歯茎が黒ずんでいる（メタルタトゥー）</li>
                        </ul>
                      </div>

                      {/* After */}
                      <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-6 border-2 border-pink-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">After（治療後）</h4>
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            治療後
                          </span>
                        </div>
                        <div className="bg-white h-64 rounded-lg flex items-center justify-center mb-4 border-2 border-pink-300">
                          <p className="text-pink-600 text-center font-bold">
                            天然歯と見分けがつかない<br />
                            美しい白い歯<br />
                            自信を持って笑える
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>e.maxオールセラミッククラウン2本</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>自然な白さと透明感</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>歯茎の黒ずみも改善</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-pink-50 p-6 rounded-lg border-2 border-pink-200 mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <Star className="w-5 h-5 text-pink-600 mr-2" />
                        患者様の声
                      </h4>
                      <p className="text-gray-700 leading-relaxed italic">
                        「ずっと前歯の銀歯が気になっていて、人前で笑うのを躊躇していました。
                        セラミックに変えてから、本当に自然で、周りからも『歯が綺麗になったね』と言われるようになりました。
                        もっと早く治療すれば良かったです！」
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">使用材料</p>
                        <p className="text-gray-700">e.maxオールセラミック</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">治療期間</p>
                        <p className="text-gray-700">3週間（3回の通院）</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">費用</p>
                        <p className="text-gray-700">200,000円（2本）</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 症例2: 奥歯の銀歯をジルコニアに */}
              <div className="mb-16">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">症例2：奥歯の銀歯をジルコニアクラウンに</h3>
                        <p className="text-indigo-50">40代男性／治療期間：4週間</p>
                      </div>
                      <Crown className="w-12 h-12" />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Before */}
                      <div className="bg-gray-100 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">Before（治療前）</h4>
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            治療前
                          </span>
                        </div>
                        <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center mb-4">
                          <p className="text-gray-600 text-center">
                            奥歯4本に銀歯<br />
                            口を開けると目立つ<br />
                            金属アレルギーの不安
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• 上下左右の奥歯に銀歯</li>
                          <li>• 金属アレルギーのリスクが心配</li>
                          <li>• 見た目も気になっていた</li>
                        </ul>
                      </div>

                      {/* After */}
                      <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border-2 border-indigo-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">After（治療後）</h4>
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            治療後
                          </span>
                        </div>
                        <div className="bg-white h-64 rounded-lg flex items-center justify-center mb-4 border-2 border-indigo-300">
                          <p className="text-indigo-600 text-center font-bold">
                            自然な白い歯<br />
                            金属アレルギーの心配なし<br />
                            強度も十分
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>ジルコニアクラウン4本</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>高強度で割れる心配なし</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>審美性も大幅に改善</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200 mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <Star className="w-5 h-5 text-indigo-600 mr-2" />
                        患者様の声
                      </h4>
                      <p className="text-gray-700 leading-relaxed italic">
                        「仕事柄、人前で話すことが多く、銀歯が気になっていました。
                        ジルコニアは強度が高いと聞いて選びましたが、見た目も想像以上に自然で満足しています。
                        金属アレルギーの心配もなくなり、安心して食事を楽しめます。」
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">使用材料</p>
                        <p className="text-gray-700">ジルコニア</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">治療期間</p>
                        <p className="text-gray-700">4週間（4回の通院）</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">費用</p>
                        <p className="text-gray-700">480,000円（4本）</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 症例3: すきっ歯をベニアで改善 */}
              <div className="mb-16">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">症例3：すきっ歯をラミネートベニアで改善</h3>
                        <p className="text-cyan-50">20代女性／治療期間：2週間</p>
                      </div>
                      <Smile className="w-12 h-12" />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Before */}
                      <div className="bg-gray-100 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">Before（治療前）</h4>
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            治療前
                          </span>
                        </div>
                        <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center mb-4">
                          <p className="text-gray-600 text-center">
                            前歯に隙間<br />
                            すきっ歯が気になる<br />
                            写真を撮るのが苦手
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• 前歯2本の間に大きな隙間</li>
                          <li>• 笑顔に自信が持てない</li>
                          <li>• 矯正は時間がかかるので避けたい</li>
                        </ul>
                      </div>

                      {/* After */}
                      <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-6 border-2 border-cyan-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">After（治療後）</h4>
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            治療後
                          </span>
                        </div>
                        <div className="bg-white h-64 rounded-lg flex items-center justify-center mb-4 border-2 border-cyan-300">
                          <p className="text-cyan-600 text-center font-bold">
                            隙間が完全に解消<br />
                            美しい整った前歯<br />
                            自信を持って笑える
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>ラミネートベニア2本</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>歯を削る量が最小限</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>たった2週間で完成</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-cyan-50 p-6 rounded-lg border-2 border-cyan-200 mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <Star className="w-5 h-5 text-cyan-600 mr-2" />
                        患者様の声
                      </h4>
                      <p className="text-gray-700 leading-relaxed italic">
                        「ずっとすきっ歯がコンプレックスで、矯正も考えましたが時間がかかると聞いて諦めていました。
                        ベニアなら2週間で完成すると聞いて即決！本当に自然で、友人にも『矯正したの？』と驚かれました。
                        今は笑顔で写真を撮るのが楽しいです！」
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">使用材料</p>
                        <p className="text-gray-700">ラミネートベニア</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">治療期間</p>
                        <p className="text-gray-700">2週間（2回の通院）</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">費用</p>
                        <p className="text-gray-700">220,000円（2本）</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 症例4: 小さな虫歯をインレーで */}
              <div className="mb-16">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">症例4：奥歯の虫歯をe.maxインレーで治療</h3>
                        <p className="text-green-50">50代女性／治療期間：2週間</p>
                      </div>
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      {/* Before */}
                      <div className="bg-gray-100 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">Before（治療前）</h4>
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            治療前
                          </span>
                        </div>
                        <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center mb-4">
                          <p className="text-gray-600 text-center">
                            奥歯に小さな虫歯<br />
                            銀歯は避けたい<br />
                            できるだけ削りたくない
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• 奥歯2本に初期虫歯</li>
                          <li>• 銀歯ではなく白い詰め物を希望</li>
                          <li>• 歯を削る量を最小限にしたい</li>
                        </ul>
                      </div>

                      {/* After */}
                      <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border-2 border-green-200">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-xl font-bold text-gray-800">After（治療後）</h4>
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                            治療後
                          </span>
                        </div>
                        <div className="bg-white h-64 rounded-lg flex items-center justify-center mb-4 border-2 border-green-300">
                          <p className="text-green-600 text-center font-bold">
                            天然歯と一体化<br />
                            削る量を最小限に<br />
                            自然な仕上がり
                          </p>
                        </div>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>e.maxインレー2本</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>最小限の侵襲で治療</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>治療跡がほとんど分からない</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-2 border-green-200 mb-6">
                      <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                        <Star className="w-5 h-5 text-green-600 mr-2" />
                        患者様の声
                      </h4>
                      <p className="text-gray-700 leading-relaxed italic">
                        「小さな虫歯でしたが、銀歯にはしたくなくて、セラミックインレーを選びました。
                        仕上がりは本当に自然で、どこを治療したのか自分でも分からないくらいです。
                        費用は少し高いですが、長持ちすることを考えれば納得です。」
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">使用材料</p>
                        <p className="text-gray-700">e.maxインレー</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">治療期間</p>
                        <p className="text-gray-700">2週間（2回の通院）</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-semibold text-gray-800 mb-1">費用</p>
                        <p className="text-gray-700">100,000円（2本）</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 治療の流れ */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  セラミック治療の流れ
                </h2>
                <p className="text-lg text-gray-600">
                  一般的な治療の流れをご紹介
                </p>
              </div>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <div className="flex-1 bg-indigo-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">初診・カウンセリング</h3>
                    <p className="text-gray-700 mb-3">
                      現在のお悩みをお伺いし、口腔内を検査します。
                      レントゲン撮影を行い、虫歯の有無や歯の状態を確認します。
                    </p>
                    <p className="text-sm text-gray-600">
                      所要時間：約30〜60分
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <div className="flex-1 bg-indigo-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">治療計画のご説明</h3>
                    <p className="text-gray-700 mb-3">
                      検査結果をもとに、最適な治療法をご提案します。
                      セラミックの種類、費用、治療期間について詳しくご説明します。
                    </p>
                    <p className="text-sm text-gray-600">
                      所要時間：約30分
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    3
                  </div>
                  <div className="flex-1 bg-indigo-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">歯の形成・型取り</h3>
                    <p className="text-gray-700 mb-3">
                      虫歯を除去し、セラミックを装着するために歯を形成します。
                      その後、精密な型取りを行います。クラウンの場合は仮歯を装着します。
                    </p>
                    <p className="text-sm text-gray-600">
                      所要時間：約60〜90分
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    4
                  </div>
                  <div className="flex-1 bg-indigo-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">セラミック製作期間</h3>
                    <p className="text-gray-700 mb-3">
                      技工所で精密なセラミックを製作します。
                      色や形を患者様に合わせてカスタマイズします。
                    </p>
                    <p className="text-sm text-gray-600">
                      期間：1〜2週間
                    </p>
                  </div>
                </div>

                {/* Step 5 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    5
                  </div>
                  <div className="flex-1 bg-indigo-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">セラミック装着・調整</h3>
                    <p className="text-gray-700 mb-3">
                      完成したセラミックを装着し、噛み合わせや色を最終確認します。
                      必要に応じて微調整を行い、完璧な仕上がりを目指します。
                    </p>
                    <p className="text-sm text-gray-600">
                      所要時間：約60分
                    </p>
                  </div>
                </div>

                {/* Step 6 */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                    6
                  </div>
                  <div className="flex-1 bg-green-50 rounded-lg p-6 border-2 border-green-200">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">定期メンテナンス</h3>
                    <p className="text-gray-700 mb-3">
                      治療後は3〜6ヶ月ごとの定期検診をおすすめします。
                      セラミックの状態チェックとクリーニングで、長持ちさせましょう。
                    </p>
                    <p className="text-sm text-gray-600">
                      頻度：3〜6ヶ月に1回
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 当院の実績 */}
        <section className="py-2 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  当院のセラミック治療実績
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <TrendingUp className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <div className="text-5xl font-bold text-indigo-600 mb-2">500+</div>
                  <p className="text-gray-700 font-semibold">年間治療実績</p>
                  <p className="text-sm text-gray-600 mt-2">豊富な経験と実績</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <div className="text-5xl font-bold text-pink-600 mb-2">98%</div>
                  <p className="text-gray-700 font-semibold">患者満足度</p>
                  <p className="text-sm text-gray-600 mt-2">高い評価をいただいています</p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                  <Sparkles className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                  <div className="text-5xl font-bold text-cyan-600 mb-2">10年+</div>
                  <p className="text-gray-700 font-semibold">平均寿命</p>
                  <p className="text-sm text-gray-600 mt-2">適切なケアで長持ち</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-2 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                症例に関するよくある質問
              </h2>

              <div className="space-y-6">
                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      実際の症例写真を見ることはできますか？
                    </h3>
                    <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      はい、<strong>カウンセリング時に実際の症例写真をお見せします</strong>。
                      患者様のご希望に近い症例をいくつかご紹介し、
                      仕上がりのイメージを共有させていただきます。
                    </p>
                    <p>
                      プライバシー保護のため、ウェブサイト上では限定的な掲載となっておりますが、
                      院内では多数の症例をご覧いただけます。
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      自分に合った治療法を提案してもらえますか？
                    </h3>
                    <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      もちろんです。当院では、<strong>患者様一人ひとりに最適な治療法をご提案</strong>します。
                    </p>
                    <p className="mb-3">
                      カウンセリングで以下をお伺いします：
                    </p>
                    <ul className="space-y-1 ml-4 mb-3">
                      <li>• 現在のお悩み</li>
                      <li>• ご希望の仕上がり</li>
                      <li>• ご予算</li>
                      <li>• 治療期間の希望</li>
                    </ul>
                    <p>
                      これらをもとに、複数の選択肢をご提示し、メリット・デメリットをしっかりご説明いたします。
                    </p>
                  </div>
                </details>

                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      治療後のアフターケアはどうすればいいですか？
                    </h3>
                    <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      <strong>日々のケアと定期検診が重要</strong>です。
                    </p>
                    <p className="mb-3">
                      日々のケア：
                    </p>
                    <ul className="space-y-1 ml-4 mb-3">
                      <li>• 1日2〜3回の歯磨き</li>
                      <li>• フロス・歯間ブラシの使用</li>
                      <li>• 硬いものを噛むのを避ける</li>
                      <li>• 歯ぎしりがある方はマウスピース着用</li>
                    </ul>
                    <p className="mb-3">
                      定期検診（3〜6ヶ月に1回）では：
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>• セラミックの状態チェック</li>
                      <li>• プロフェッショナルクリーニング</li>
                      <li>• 噛み合わせの確認</li>
                    </ul>
                  </div>
                </details>

                <details className="group bg-white rounded-lg shadow-md overflow-hidden">
                  <summary className="flex justify-between items-center cursor-pointer p-6 hover:bg-gray-50 transition-colors">
                    <h3 className="text-lg font-bold text-gray-800 pr-8">
                      治療期間はどのくらいかかりますか？
                    </h3>
                    <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed">
                    <p className="mb-3">
                      治療の種類によって異なりますが、<strong>一般的には2〜4週間</strong>です。
                    </p>
                    <ul className="space-y-2 ml-4">
                      <li>• <strong>インレー：</strong>2〜3週間（2回の通院）</li>
                      <li>• <strong>クラウン：</strong>3〜4週間（3〜4回の通院）</li>
                      <li>• <strong>ベニア：</strong>2〜3週間（2〜3回の通院）</li>
                    </ul>
                    <p className="mt-3">
                      虫歯治療が必要な場合や、複数本同時に治療する場合は、
                      もう少し長くなることがあります。
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </section>

        {/* 関連ページ */}
        <section className="py-2 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                関連ページ
              </h2>

              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/ceramic" className="group bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl border-2 border-indigo-100 hover:border-indigo-300 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Crown className="w-8 h-8 text-indigo-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">セラミック治療TOP</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    セラミック治療の概要と特徴
                  </p>
                  <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/ceramic/cost" className="group bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border-2 border-green-100 hover:border-green-300 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">費用・料金</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    セラミック治療の費用について
                  </p>
                  <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>

                <Link href="/ceramic/types" className="group bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <Sparkles className="w-8 h-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-800">治療の種類</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    インレー・クラウン・ベニアの違い
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                    詳しく見る
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                あなたも美しい笑顔を手に入れませんか？
              </h2>
              <p className="text-xl mb-8 text-indigo-50">
                無料カウンセリングで、実際の症例写真をご覧いただけます<br />
                お気軽にお問い合わせください
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-colors shadow-lg"
                >
                  無料相談を予約する
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
                <Link
                  href="tel:0312345678"
                  className="inline-flex items-center justify-center bg-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-800 transition-colors border-2 border-white"
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
