import { Metadata } from 'next';
import Link from 'next/link';
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
  title: 'セラミック治療の費用・値段｜相場と当院の料金表｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '豊洲の歯医者 F歯科がセラミック治療の費用について詳しく解説。インレー、クラウン、ベニアの料金相場と当院の価格、保険適用、分割払いの情報をご紹介します。',
  keywords: 'セラミック,歯,値段,費用,料金,価格,相場,保険,分割払い,デンタルローン',
  openGraph: {
    title: 'セラミック治療の費用・値段｜相場と当院の料金表｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'セラミック治療の費用について詳しく解説。インレー、クラウン、ベニアの料金相場と当院の価格をご紹介。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fuku-dental.jp/ceramic/cost',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

export default function CeramicCostPage() {
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
              <span className="text-[#C5A572]">費用・料金</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                セラミック治療の費用・料金
              </h1>
              <PageImage path="/ceramic/cost" alt="セラミック治療の費用・料金" />
              <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                透明性のある料金体系で安心
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                豊洲駅徒歩2分の当院では、事前に明確な費用をお伝えし、<br />
                追加料金の心配なく治療を受けていただけます
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* 重要なお知らせ */}
            <div className="mb-16">
              <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                <h3 className="text-xl font-bold text-[#5A4D41] mb-3 font-serif">セラミック治療は自費診療です</h3>
                <p className="text-[#5A4D41] leading-relaxed">
                  セラミック治療は<span className="bg-yellow-100">保険適用外</span>のため、全額自己負担となります。
                  ただし、<span className="text-[#2E8B57] font-bold">医療費控除の対象</span>となる場合があります。
                  また、分割払い（デンタルローン）もご利用いただけます。
                </p>
              </div>
            </div>

            {/* 当院の料金表 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">当院の料金表</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <p className="text-center text-[#8D8070] mb-8">全て税込価格・1本あたりの費用です</p>

              {/* インレー・アンレー */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-6 pb-2 border-b-2 border-[#C5A572]">
                  インレー・アンレー（詰め物）
                </h3>
                <p className="text-[#8D8070] mb-6">奥歯の部分的な治療</p>

                <div className="space-y-6">
                  {/* e.maxインレー */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-[#5A4D41]">e.maxインレー</h4>
                      <span className="bg-[#C5A572] text-white px-3 py-1 rounded-full text-sm font-semibold">人気</span>
                    </div>
                    <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                      ¥50,000
                      <span className="text-lg text-[#8D8070] font-normal ml-2">/ 1本</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">高い透明感と審美性</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">変色しにくい</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">金属アレルギーの心配なし</span>
                      </li>
                    </ul>
                    <p className="text-sm text-[#8D8070]">保証期間：2年</p>
                  </div>

                  {/* ジルコニアインレー */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-[#5A4D41]">ジルコニアインレー</h4>
                      <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-semibold">高強度</span>
                    </div>
                    <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                      ¥55,000
                      <span className="text-lg text-[#8D8070] font-normal ml-2">/ 1本</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">最高レベルの強度</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">割れにくい</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">噛む力が強い方におすすめ</span>
                      </li>
                    </ul>
                    <p className="text-sm text-[#8D8070]">保証期間：3年</p>
                  </div>

                  {/* e.maxアンレー */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <h4 className="text-lg font-bold text-[#5A4D41] mb-4">e.maxアンレー</h4>
                    <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                      ¥60,000
                      <span className="text-lg text-[#8D8070] font-normal ml-2">/ 1本</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">中程度の虫歯に対応</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">インレーより強度が高い</span>
                      </li>
                    </ul>
                    <p className="text-sm text-[#8D8070]">保証期間：2年</p>
                  </div>

                  {/* ジルコニアアンレー */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <h4 className="text-lg font-bold text-[#5A4D41] mb-4">ジルコニアアンレー</h4>
                    <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                      ¥65,000
                      <span className="text-lg text-[#8D8070] font-normal ml-2">/ 1本</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">最も割れにくい</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">長期的に安定</span>
                      </li>
                    </ul>
                    <p className="text-sm text-[#8D8070]">保証期間：3年</p>
                  </div>
                </div>
              </div>

              {/* クラウン */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-6 pb-2 border-b-2 border-[#C5A572]">
                  クラウン（被せ物）
                </h3>
                <p className="text-[#8D8070] mb-6">歯全体を覆う治療・最も人気</p>

                <div className="space-y-6">
                  {/* e.maxクラウン */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-[#5A4D41]">e.maxクラウン</h4>
                      <span className="bg-[#D4B582] text-white px-3 py-1 rounded-full text-sm font-semibold">前歯推奨</span>
                    </div>
                    <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                      ¥100,000
                      <span className="text-lg text-[#8D8070] font-normal ml-2">/ 1本</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">最高の透明感</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">天然歯に最も近い見た目</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">前歯の審美治療に最適</span>
                      </li>
                    </ul>
                    <p className="text-sm text-[#8D8070]">保証期間：3年</p>
                  </div>

                  {/* ジルコニアクラウン */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#D4AF37]/40">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-[#5A4D41]">ジルコニアクラウン</h4>
                      <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-bold">最もおすすめ</span>
                    </div>
                    <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                      ¥120,000
                      <span className="text-lg text-[#8D8070] font-normal ml-2">/ 1本</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">強度と審美性の最高バランス</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">前歯・奥歯どちらにも対応</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">長期的に最も安定</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">当院で最も選ばれています</span>
                      </li>
                    </ul>
                    <p className="text-sm text-[#8D8070]">保証期間：5年</p>
                  </div>

                  {/* フルジルコニアクラウン */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-[#5A4D41]">フルジルコニアクラウン</h4>
                      <span className="bg-[#A88B5F] text-white px-3 py-1 rounded-full text-sm font-semibold">奥歯推奨</span>
                    </div>
                    <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                      ¥100,000
                      <span className="text-lg text-[#8D8070] font-normal ml-2">/ 1本</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">最高レベルの強度</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">奥歯に最適（咬合力に強い）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">歯ぎしりが強い方にも</span>
                      </li>
                    </ul>
                    <p className="text-sm text-[#8D8070]">保証期間：5年</p>
                  </div>

                  {/* メタルボンドクラウン */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <h4 className="text-lg font-bold text-[#5A4D41] mb-4">メタルボンドクラウン</h4>
                    <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                      ¥90,000
                      <span className="text-lg text-[#8D8070] font-normal ml-2">/ 1本</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">金属フレーム+セラミック</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">実績のある従来型</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">金属アレルギーのリスクあり</span>
                      </li>
                    </ul>
                    <p className="text-sm text-[#8D8070]">保証期間：3年</p>
                  </div>
                </div>
              </div>

              {/* ベニア */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-6 pb-2 border-b-2 border-[#C5A572]">
                  ベニア（付け爪タイプ）
                </h3>
                <p className="text-[#8D8070] mb-6">前歯専用の審美治療</p>

                <div className="space-y-6">
                  {/* ラミネートベニア */}
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                    <h4 className="text-lg font-bold text-[#5A4D41] mb-4">ラミネートベニア</h4>
                    <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                      ¥110,000
                      <span className="text-lg text-[#8D8070] font-normal ml-2">/ 1本</span>
                    </div>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">歯を削る量が最小限</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">前歯の色・形を美しく整える</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">すきっ歯の改善にも</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">前歯専用（奥歯には使用不可）</span>
                      </li>
                    </ul>
                    <p className="text-sm text-[#8D8070]">保証期間：3年</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 一般的な相場との比較 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">一般的な相場との比較</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <p className="text-center text-[#8D8070] mb-8">当院の料金は相場と比較してもリーズナブル</p>

              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto mb-8">
                <table className="w-full border-collapse bg-white shadow-sm rounded-2xl overflow-hidden">
                  <thead>
                    <tr className="bg-[#D4AF37] text-white">
                      <th className="p-4 text-left font-bold font-serif">治療の種類</th>
                      <th className="p-4 text-center font-bold bg-[#C5A028] font-serif">当院の料金</th>
                      <th className="p-4 text-center font-bold font-serif">一般的な相場</th>
                      <th className="p-4 text-center font-bold font-serif">差額</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-4 font-semibold text-[#5A4D41]">e.maxインレー</td>
                      <td className="p-4 text-center bg-yellow-50 font-bold text-[#D4AF37]">¥50,000</td>
                      <td className="p-4 text-center text-[#8D8070]">¥50,000〜¥70,000</td>
                      <td className="p-4 text-center text-[#2E8B57] font-semibold">同等〜お得</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold text-[#5A4D41]">ジルコニアインレー</td>
                      <td className="p-4 text-center bg-yellow-50 font-bold text-[#D4AF37]">¥55,000</td>
                      <td className="p-4 text-center text-[#8D8070]">¥60,000〜¥80,000</td>
                      <td className="p-4 text-center text-[#2E8B57] font-semibold">¥5,000〜¥25,000お得</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold text-[#5A4D41]">e.maxクラウン</td>
                      <td className="p-4 text-center bg-yellow-50 font-bold text-[#D4AF37]">¥100,000</td>
                      <td className="p-4 text-center text-[#8D8070]">¥100,000〜¥150,000</td>
                      <td className="p-4 text-center text-[#2E8B57] font-semibold">同等〜お得</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold text-[#5A4D41]">ジルコニアクラウン</td>
                      <td className="p-4 text-center bg-yellow-50 font-bold text-[#D4AF37]">¥120,000</td>
                      <td className="p-4 text-center text-[#8D8070]">¥120,000〜¥180,000</td>
                      <td className="p-4 text-center text-[#2E8B57] font-semibold">同等〜お得</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-4 font-semibold text-[#5A4D41]">ラミネートベニア</td>
                      <td className="p-4 text-center bg-yellow-50 font-bold text-[#D4AF37]">¥110,000</td>
                      <td className="p-4 text-center text-[#8D8070]">¥100,000〜¥150,000</td>
                      <td className="p-4 text-center text-[#2E8B57] font-semibold">同等</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-4">
                <div className="bg-white rounded-2xl shadow-sm p-4 border border-[#C5A572]/10">
                  <h4 className="font-bold text-[#5A4D41] mb-3">e.maxインレー</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#8D8070]">当院</span>
                      <span className="font-bold text-[#2E8B57]">¥50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8D8070]">相場</span>
                      <span>¥50,000〜¥70,000</span>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-[#2E8B57] font-semibold">同等〜お得</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 border border-[#C5A572]/10">
                  <h4 className="font-bold text-[#5A4D41] mb-3">ジルコニアインレー</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#8D8070]">当院</span>
                      <span className="font-bold text-[#2E8B57]">¥55,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8D8070]">相場</span>
                      <span>¥60,000〜¥80,000</span>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-[#2E8B57] font-semibold">¥5,000〜¥25,000お得</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 border border-[#C5A572]/10">
                  <h4 className="font-bold text-[#5A4D41] mb-3">e.maxクラウン</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#8D8070]">当院</span>
                      <span className="font-bold text-[#2E8B57]">¥100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8D8070]">相場</span>
                      <span>¥100,000〜¥150,000</span>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-[#2E8B57] font-semibold">同等〜お得</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 border border-[#C5A572]/10">
                  <h4 className="font-bold text-[#5A4D41] mb-3">ジルコニアクラウン</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#8D8070]">当院</span>
                      <span className="font-bold text-[#2E8B57]">¥120,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8D8070]">相場</span>
                      <span>¥120,000〜¥180,000</span>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-[#2E8B57] font-semibold">同等〜お得</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-4 border border-[#C5A572]/10">
                  <h4 className="font-bold text-[#5A4D41] mb-3">ラミネートベニア</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-[#8D8070]">当院</span>
                      <span className="font-bold text-[#2E8B57]">¥110,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8D8070]">相場</span>
                      <span>¥100,000〜¥150,000</span>
                    </div>
                    <div className="pt-2 border-t">
                      <span className="text-[#2E8B57] font-semibold">同等</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                <h3 className="font-bold text-[#5A4D41] mb-3">当院の料金が適正な理由</h3>
                <p className="text-[#5A4D41] leading-relaxed">
                  当院では、技工所との直接取引や効率的な運営により、高品質なセラミック治療を適正価格でご提供しています。
                  品質を落とすことなく、患者様にとって手の届きやすい価格設定を実現しました。
                </p>
              </div>
            </div>

            {/* 費用に含まれるもの */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">費用に含まれるもの</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <p className="text-center text-[#8D8070] mb-8">追加料金は一切かかりません</p>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#C5A572]/10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-1">初診・検査費用</h4>
                      <p className="text-sm text-[#8D8070]">レントゲン撮影、口腔内検査を含む</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-1">カウンセリング</h4>
                      <p className="text-sm text-[#8D8070]">治療計画の説明、相談</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-1">虫歯治療</h4>
                      <p className="text-sm text-[#8D8070]">セラミック装着前の虫歯除去</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-1">歯の形成</h4>
                      <p className="text-sm text-[#8D8070]">セラミックを装着するための形成</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-1">型取り</h4>
                      <p className="text-sm text-[#8D8070]">精密な印象採得</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-1">仮歯（クラウンの場合）</h4>
                      <p className="text-sm text-[#8D8070]">治療期間中の仮歯</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-1">セラミック製作費</h4>
                      <p className="text-sm text-[#8D8070]">技工所での製作費用</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-1">装着・調整</h4>
                      <p className="text-sm text-[#8D8070]">セラミックの接着と噛み合わせ調整</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-1">アフターケア指導</h4>
                      <p className="text-sm text-[#8D8070]">ケア方法の説明と資料</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-[#2E8B57] mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-[#5A4D41] mb-1">保証</h4>
                      <p className="text-sm text-[#8D8070]">治療内容に応じた保証期間</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 支払い方法 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">お支払い方法</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <p className="text-center text-[#8D8070] mb-8">各種お支払い方法に対応しています</p>

              <div className="space-y-4">
                {/* 現金 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h3 className="text-xl font-bold text-[#5A4D41] mb-2">現金払い</h3>
                  <p className="text-[#8D8070]">一括払いでのお支払い</p>
                </div>

                {/* クレジットカード */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h3 className="text-xl font-bold text-[#5A4D41] mb-2">クレジットカード</h3>
                  <p className="text-[#8D8070] mb-3">各種カードに対応</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">VISA</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MasterCard</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JCB</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">AMEX</span>
                  </div>
                </div>

                {/* デンタルローン */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h3 className="text-xl font-bold text-[#5A4D41] mb-2">デンタルローン</h3>
                  <p className="text-[#8D8070]">分割払いで無理なく治療</p>
                </div>
              </div>

              {/* デンタルローン詳細 */}
              <div className="mt-8 bg-white p-8 rounded-2xl shadow-sm border border-[#C5A572]/10">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-6 pb-2 border-b-2 border-[#C5A572]">
                  デンタルローンのご案内
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#5A4D41] mb-3">デンタルローンとは？</h4>
                    <p className="text-[#5A4D41] leading-relaxed">
                      <span className="bg-yellow-100">歯科治療専用のローン</span>です。高額な自費診療を、分割払いで無理なくお支払いいただけます。
                      審査が比較的通りやすく、金利もクレジットカードの分割払いより低めに設定されています。
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#5A4D41] mb-3">分割払いのシミュレーション例</h4>
                    <div className="bg-[#FDFBF7] rounded-2xl p-6 space-y-4">
                      <div className="border-b border-[#C5A572]/20 pb-4">
                        <p className="text-sm text-[#8D8070] mb-2">ジルコニアクラウン 2本の場合</p>
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-[#5A4D41]">総額：¥240,000</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#8D8070]">12回払い：</span>
                            <span className="font-semibold text-[#5A4D41]">約¥21,000/月</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#8D8070]">24回払い：</span>
                            <span className="font-semibold text-[#5A4D41]">約¥11,000/月</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#8D8070]">36回払い：</span>
                            <span className="font-semibold text-[#5A4D41]">約¥7,500/月</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-[#8D8070] mb-2">ジルコニアクラウン 4本の場合</p>
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-[#5A4D41]">総額：¥480,000</span>
                        </div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-[#8D8070]">24回払い：</span>
                            <span className="font-semibold text-[#5A4D41]">約¥21,500/月</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#8D8070]">36回払い：</span>
                            <span className="font-semibold text-[#5A4D41]">約¥15,000/月</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-[#8D8070]">60回払い：</span>
                            <span className="font-semibold text-[#5A4D41]">約¥9,500/月</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-[#8D8070]">
                        ※ 金利は年率3.9%で計算した概算です。実際の金額は審査により異なる場合があります。
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-[#5A4D41] mb-3">デンタルローンのメリット</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">まとまった資金がなくても、すぐに治療を始められる</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">クレジットカードより低金利</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">月々の支払額を調整できる（6回〜84回まで選択可能）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">医療費控除の対象になる</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                    <p className="text-[#5A4D41] text-sm">
                      デンタルローンのご利用を希望される方は、カウンセリング時にお気軽にご相談ください。
                      審査には数日かかる場合がありますので、お早めのお申し込みをおすすめします。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 医療費控除 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">医療費控除について</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>
              <p className="text-center text-[#8D8070] mb-8">セラミック治療は医療費控除の対象です</p>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#C5A572]/10">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3">医療費控除とは？</h3>
                    <p className="text-[#5A4D41] leading-relaxed">
                      1年間に支払った医療費が<span className="bg-yellow-100">10万円（または所得の5%）を超えた場合</span>、
                      確定申告をすることで所得税の一部が還付される制度です。
                      セラミック治療も対象となります。
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3">控除額のシミュレーション</h3>
                    <div className="bg-[#FDFBF7] rounded-2xl p-6 space-y-4">
                      <div className="border-b border-[#C5A572]/20 pb-4">
                        <p className="font-semibold text-[#5A4D41] mb-2">例1：年収500万円の方がセラミック治療に30万円かかった場合</p>
                        <div className="space-y-1 text-sm text-[#5A4D41]">
                          <p>医療費控除額：30万円 - 10万円 = 20万円</p>
                          <p>所得税率：20%</p>
                          <p className="font-bold text-[#2E8B57]">還付金額：約4万円</p>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-[#5A4D41] mb-2">例2：年収700万円の方がセラミック治療に50万円かかった場合</p>
                        <div className="space-y-1 text-sm text-[#5A4D41]">
                          <p>医療費控除額：50万円 - 10万円 = 40万円</p>
                          <p>所得税率：23%</p>
                          <p className="font-bold text-[#2E8B57]">還付金額：約9.2万円</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#5A4D41] mb-3">医療費控除の対象になるもの</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">セラミック治療費（インレー、クラウン、ベニア）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">治療に必要な検査費用</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">通院のための交通費（公共交通機関）</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-[#5A4D41]">デンタルローンの金利（治療費に限る）</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                    <h4 className="font-bold text-[#5A4D41] mb-2">領収書は必ず保管してください</h4>
                    <p className="text-[#5A4D41] text-sm leading-relaxed">
                      医療費控除を受けるには、治療費の領収書が必要です。
                      当院では治療後に必ず領収書を発行いたしますので、確定申告まで大切に保管してください。
                      領収書の再発行はできない場合がありますのでご注意ください。
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-6 md:py-6 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif">費用に関するよくある質問</h2>
                <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* Q1 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">セラミック治療に保険は適用されますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 基本的にセラミック治療は保険適用外の自費診療となります。ただし、一部の症例では保険適用のハイブリッドセラミック（CAD/CAM冠）が使用できる場合があります。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      保険適用の可否については、診察時に詳しくご説明いたします。
                    </p>
                  </div>
                </div>

                {/* Q2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">なぜ歯科医院によって料金が違うのですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 自費診療のため、各歯科医院が独自に料金を設定できるからです。料金の違いは、使用する材料の品質やブランド、技工所の技術レベル、歯科医師の技術や経験、立地や設備投資のコスト、保証内容やアフターケアなどによります。
                    </p>
                    <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                      料金だけでなく、治療内容や保証、歯科医師の説明など総合的に判断することが大切です。
                    </p>
                  </div>
                </div>

                {/* Q3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">追加料金はかかりませんか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 当院では、治療開始前に総額をお伝えし、その金額以上はいただきません。提示した料金には、検査、型取り、仮歯、セラミック製作、装着、調整など、すべての工程が含まれています。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      ただし、治療途中で新たな虫歯が見つかった場合や、追加の処置が必要になった場合は、事前にご説明の上、ご同意いただいてから処置を行います。
                    </p>
                  </div>
                </div>

                {/* Q4 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">分割払いは可能ですか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> はい、デンタルローンをご利用いただけます。6回〜84回までの分割払いが可能で、月々の支払額を調整できます。また、各種クレジットカードでのお支払いも可能です。
                    </p>
                    <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                      カードによっては、分割払いやリボ払いもご利用いただけます。詳しくは、カウンセリング時にお気軽にご相談ください。
                    </p>
                  </div>
                </div>

                {/* Q5 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">保証はついていますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> はい、すべてのセラミック治療に保証がついています。保証期間は治療内容により異なります：e.maxインレー・アンレー（2年）、ジルコニアインレー・アンレー（3年）、e.maxクラウン（3年）、ジルコニアクラウン・フルジルコニアクラウン（5年）、メタルボンドクラウン（3年）、ラミネートベニア（3年）。
                    </p>
                    <p className="text-sm bg-yellow-50 p-4 rounded-lg">
                      保証期間内に破損や脱落が起きた場合、無料で再治療いたします。ただし、定期検診を受けていただくことが保証の条件となります。
                    </p>
                  </div>
                </div>

                {/* Q6 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
                      <h3 className="font-bold text-[#5A4D41] text-lg">相談だけでも料金はかかりますか？</h3>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#C5A572]">A.</strong> 初回カウンセリングは無料です。治療内容、費用、期間など、詳しくご説明いたします。
                    </p>
                    <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                      ご納得いただいた上で治療を開始しますので、相談だけでも大丈夫です。まずはお気軽にお問い合わせください。
                    </p>
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

                <Link href="/ceramic/types" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">治療の種類</h3>
                  <p className="text-[#8D8070] mb-4">
                    インレー・クラウン・ベニアの違い
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
                無料カウンセリング実施中
              </h2>
              <p className="text-xl mb-8 text-white/90">
                費用や治療内容について、詳しくご説明いたします<br />
                まずはお気軽にご相談ください
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
