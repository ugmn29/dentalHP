import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ホワイトニングの料金・費用｜各プランの価格を徹底解説｜F歯科・矯正歯科',
  description: 'ホワイトニングの料金・費用を詳しく解説。オフィス・ホーム・デュアルホワイトニングの価格相場、当院の料金プラン、費用対効果、保険適用、支払い方法まで完全ガイド。',
  keywords: 'ホワイトニング,料金,費用,値段,価格,相場,オフィスホワイトニング,ホームホワイトニング,デュアルホワイトニング',
  openGraph: {
    title: 'ホワイトニングの料金・費用｜各プランの価格を徹底解説｜F歯科・矯正歯科',
    description: 'ホワイトニングの料金を詳しく解説。オフィス・ホーム・デュアルの価格相場と費用対効果を比較。',
    type: 'website',
  },
};

export default function WhiteningCostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">

      {/* パンくずリスト */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-[#C5A572]">ホーム</a>
            <span>/</span>
            <a href="/whitening" className="hover:text-[#C5A572]">ホワイトニング</a>
            <span>/</span>
            <span className="text-[#C5A572]">料金・費用</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-6 md:py-6 bg-[#FDFBF7]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
              ホワイトニングの料金・費用
            </h1>
            <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
              明瞭な料金体系で安心
            </p>
            <p className="text-lg text-[#8D8070] leading-relaxed">
              当院では、事前に明確な費用をお伝えし、<br />
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
              <h3 className="text-xl font-bold text-[#5A4D41] mb-3 font-serif">ホワイトニングは自費診療です</h3>
              <p className="text-[#5A4D41] leading-relaxed">
                ホワイトニングは<span className="bg-yellow-100">保険適用外</span>のため、全額自己負担となります。
                歯科医院によって料金が異なりますが、当院では<span className="text-[#2E8B57] font-bold">適正価格で高品質なホワイトニング</span>をご提供しています。
              </p>
            </div>
          </div>

          {/* 当院の料金プラン */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">当院のホワイトニング料金</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>
            <p className="text-center text-[#8D8070] mb-8">全て税込価格・追加費用なしの総額表示です</p>

            {/* オフィスホワイトニング */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-6 pb-2 border-b-2 border-[#C5A572]">
                オフィスホワイトニング
              </h3>
              <p className="text-[#8D8070] mb-6">歯科医院で行う即効性の高い施術</p>

              <div className="space-y-6">
                {/* 1回コース */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-4">1回コース</h4>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                    ¥30,000
                    <span className="text-lg text-[#8D8070] font-normal ml-2">〜</span>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">即日で白さを実感</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">プロフェッショナルクリーニング込み</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#8D8070]">持続期間：3〜6ヶ月</p>
                </div>

                {/* 3回コース */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-[#5A4D41]">3回コース</h4>
                    <span className="bg-[#C5A572] text-white px-3 py-1 rounded-full text-sm font-semibold">推奨</span>
                  </div>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                    ¥80,000
                    <span className="text-lg text-[#8D8070] font-normal ml-2">/ 1回あたり約¥26,700</span>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                    <p className="text-sm text-[#5A4D41]">通常価格¥90,000のところ <span className="font-bold">¥10,000 OFF</span></p>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">理想的な白さを実現</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">1回ずつより断然お得</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#8D8070]">持続期間：3〜6ヶ月</p>
                </div>

                {/* 5回コース */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-4">5回コース</h4>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                    ¥120,000
                    <span className="text-lg text-[#8D8070] font-normal ml-2">/ 1回あたり¥24,000</span>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                    <p className="text-sm text-[#5A4D41]">通常価格¥150,000のところ <span className="font-bold">¥30,000 OFF</span></p>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">最高レベルの白さ</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">1回あたり最もお得</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#8D8070]">持続期間：3〜6ヶ月</p>
                </div>
              </div>
            </div>

            {/* ホームホワイトニング */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-6 pb-2 border-b-2 border-[#C5A572]">
                ホームホワイトニング
              </h3>
              <p className="text-[#8D8070] mb-6">ご自宅で行う継続的な施術</p>

              <div className="space-y-6">
                {/* スタンダードプラン */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-4">スタンダードプラン</h4>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                    ¥25,000
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">マウスピース作成（上下）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">ホワイトニングジェル6本</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">使用方法の説明</span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#8D8070]">持続期間：6〜12ヶ月</p>
                </div>

                {/* 追加ジェル */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                  <h4 className="text-lg font-bold text-[#5A4D41] mb-4">追加ジェル（2本セット）</h4>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                    ¥5,000
                  </div>
                  <p className="text-[#5A4D41] text-sm">
                    継続して使用することで白さを維持できます
                  </p>
                </div>
              </div>
            </div>

            {/* デュアルホワイトニング */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-6 pb-2 border-b-2 border-[#C5A572]">
                デュアルホワイトニング
              </h3>
              <p className="text-[#8D8070] mb-6">オフィス＋ホームで最高の効果</p>

              <div className="space-y-6">
                {/* プレミアムプラン */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#D4AF37]/40">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-[#5A4D41]">プレミアムプラン</h4>
                    <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-bold">最もおすすめ</span>
                  </div>
                  <div className="text-3xl font-bold text-[#D4AF37] mb-4">
                    ¥60,000
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg mb-4">
                    <p className="text-sm text-[#5A4D41]">通常価格¥80,000のところ <span className="font-bold text-[#2E8B57]">¥20,000 OFF</span></p>
                  </div>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">オフィスホワイトニング（1回）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">マウスピース作成（上下）</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">ホワイトニングジェル4本</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">プロフェッショナルクリーニング</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#C5A572] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]"><span className="text-[#2E8B57] font-bold">最も効果が高く長持ち</span></span>
                    </li>
                  </ul>
                  <p className="text-sm text-[#8D8070]">持続期間：1〜2年</p>
                </div>
              </div>
            </div>
          </div>

          {/* 料金の相場比較 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">一般的な相場との比較</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>
            <p className="text-center text-[#8D8070] mb-8">当院の料金は相場と比較してもリーズナブル</p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse bg-white shadow-sm rounded-2xl overflow-hidden">
                <thead>
                  <tr className="bg-[#D4AF37] text-white">
                    <th className="p-4 text-left font-bold font-serif">ホワイトニングの種類</th>
                    <th className="p-4 text-center font-bold bg-[#C5A028] font-serif">当院の料金</th>
                    <th className="p-4 text-center font-bold font-serif">一般的な相場</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-[#5A4D41]">オフィスホワイトニング（1回）</td>
                    <td className="p-4 text-center bg-yellow-50 font-bold text-[#D4AF37]">¥30,000〜</td>
                    <td className="p-4 text-center text-[#8D8070]">¥30,000〜¥60,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-[#5A4D41]">ホームホワイトニング</td>
                    <td className="p-4 text-center bg-yellow-50 font-bold text-[#D4AF37]">¥25,000</td>
                    <td className="p-4 text-center text-[#8D8070]">¥20,000〜¥40,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold text-[#5A4D41]">デュアルホワイトニング</td>
                    <td className="p-4 text-center bg-yellow-50 font-bold text-[#D4AF37]">¥60,000</td>
                    <td className="p-4 text-center text-[#8D8070]">¥60,000〜¥100,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
              <h3 className="font-bold text-[#5A4D41] mb-3">当院の料金が適正な理由</h3>
              <p className="text-[#5A4D41] leading-relaxed">
                当院では<span className="text-[#2E8B57] font-bold">高品質な薬剤と丁寧な施術</span>を提供しながら、無駄なコストを削減することで適正価格を実現しています。
                充実したアフターケアも含め、納得の価格でご提供しています。
              </p>
            </div>
          </div>

          {/* 費用対効果の比較 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">費用対効果で比較する</h2>
              <div className="w-16 h-0.5 bg-[#C5A572] mx-auto mt-4"></div>
            </div>
            <p className="text-center text-[#8D8070] mb-8">長期的に見ると、どの方法が一番お得？</p>

            <div className="grid md:grid-cols-3 gap-6">
              {/* オフィス */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                <h3 className="text-xl font-bold text-[#5A4D41] mb-4 font-serif">オフィスホワイトニング</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">初期費用</span>
                    <span className="font-bold text-[#5A4D41]">¥30,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">持続期間</span>
                    <span className="font-bold text-[#5A4D41]">3〜6ヶ月</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">年間維持費</span>
                    <span className="font-bold text-[#5A4D41]">¥60,000〜</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">1ヶ月あたり</span>
                    <span className="font-bold text-[#D4AF37]">¥5,000〜</span>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-xl text-center">
                  <p className="text-xs text-[#5A4D41]">即効性重視の方におすすめ</p>
                </div>
              </div>

              {/* ホーム */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
                <h3 className="text-xl font-bold text-[#5A4D41] mb-4 font-serif">ホームホワイトニング</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">初期費用</span>
                    <span className="font-bold text-[#5A4D41]">¥25,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">持続期間</span>
                    <span className="font-bold text-[#5A4D41]">6〜12ヶ月</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">年間維持費</span>
                    <span className="font-bold text-[#5A4D41]">¥30,000〜</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">1ヶ月あたり</span>
                    <span className="font-bold text-[#D4AF37]">¥2,500〜</span>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-xl text-center">
                  <p className="text-xs text-[#5A4D41] font-bold">コスパ最強！</p>
                </div>
              </div>

              {/* デュアル */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-[#D4AF37]/40">
                <h3 className="text-xl font-bold text-[#5A4D41] mb-4 font-serif">デュアルホワイトニング</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">初期費用</span>
                    <span className="font-bold text-[#5A4D41]">¥60,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">持続期間</span>
                    <span className="font-bold text-[#5A4D41]">1〜2年</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">年間維持費</span>
                    <span className="font-bold text-[#5A4D41]">¥35,000〜</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="text-sm text-[#8D8070]">1ヶ月あたり</span>
                    <span className="font-bold text-[#D4AF37]">¥2,900〜</span>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-xl text-center">
                  <p className="text-xs text-[#5A4D41] font-bold">長期的に最もお得！</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm border border-[#C5A572]/10">
              <h3 className="font-bold text-[#5A4D41] mb-3 font-serif">結論：デュアルホワイトニングが長期的に最もお得</h3>
              <p className="text-[#5A4D41] leading-relaxed">
                初期費用は高めですが、<span className="text-[#2E8B57] font-bold">持続期間が1〜2年と圧倒的に長い</span>ため、
                長期的に見ると1ヶ月あたりのコストは最も低くなります。
                また、効果も最も高く、満足度も高いため、費用対効果は抜群です。
              </p>
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
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Diners</span>
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
                  <h4 className="font-bold text-[#5A4D41] mb-3">分割払いのシミュレーション例</h4>
                  <div className="bg-[#FDFBF7] rounded-2xl p-6 space-y-4">
                    <div className="border-b border-[#C5A572]/20 pb-4">
                      <p className="text-sm text-[#8D8070] mb-2">デュアルホワイトニング（¥60,000）の場合</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-[#8D8070]">12回払い：</span>
                          <span className="font-semibold text-[#5A4D41]">約¥5,000/月</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8D8070]">24回払い：</span>
                          <span className="font-semibold text-[#5A4D41]">約¥2,500/月</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#8D8070]">36回払い：</span>
                          <span className="font-semibold text-[#5A4D41]">約¥1,700/月</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#8D8070]">
                      ※ 金利・手数料は別途かかります
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-[#5A4D41] mb-3">デンタルローンのメリット</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">まとまった資金がなくても、すぐに治療を始められる</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">月々の支払額を調整できる</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-[#2E8B57] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[#5A4D41]">審査が比較的通りやすい</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                  <p className="text-[#5A4D41] text-sm">
                    デンタルローンのご利用を希望される方は、カウンセリング時にお気軽にご相談ください。
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">
                料金に関するよくある質問
              </h2>
              <p className="text-lg text-[#8D8070] mt-4">
                ホワイトニングの料金について、よくいただくご質問にお答えします
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">表示されている料金以外に追加費用はかかりますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> いいえ、かかりません。当院では明瞭な料金体系を心がけており、表示価格にカウンセリング、クリーニング、施術、アフターケアまですべて含まれています。
                  </p>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    追加費用が発生する場合は事前にご説明いたしますので、安心してご来院ください。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">他院と比べて料金が安いのはなぜですか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 当院では適正価格での提供を心がけていますが、決して安かろう悪かろうではありません。
                  </p>
                  <p className="mb-3">
                    高品質な薬剤と丁寧な施術を提供しながら、無駄なコストを削減することで、この価格を実現しています。
                  </p>
                  <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    カウンセリング、施術、アフターケアまで、すべてにこだわった高品質な治療をご提供しています。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">キャンセル料はかかりますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 予約日の2営業日前までのキャンセルは無料です。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>前日・当日のキャンセルは、キャンセル料として施術費の50%をいただく場合がございます</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>やむを得ない事情の場合はご相談ください</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    変更・キャンセルは、お早めにお電話またはメールでお知らせください。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q4</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニング後のタッチアップ料金は？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 定期的なタッチアップで白さを長期間維持できます。
                  </p>
                  <ul className="space-y-2 mb-3 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>オフィスホワイトニングのタッチアップ：1回¥15,000〜</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C5A572] mt-1">•</span>
                      <span>ホームホワイトニング追加ジェル：2本セット¥5,000</span>
                    </li>
                  </ul>
                  <p className="text-sm bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                    白さが気になった時点でのタッチアップがおすすめです。定期的なタッチアップで、いつまでも白い歯を保つことができます。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q5</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">学生割引やシニア割引はありますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> 現在、特定の割引制度はございませんが、初回限定のキャンペーンや季節限定の特別価格をご用意することがあります。
                  </p>
                  <p className="text-sm bg-[#E8F2ED] p-4 rounded-lg">
                    最新のキャンペーン情報は、お電話またはLINE公式アカウントでお知らせしています。詳しくはお問い合わせください。
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 bg-[#C5A572] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q6</span>
                    <h3 className="font-bold text-[#5A4D41] text-lg">ホワイトニングは保険適用されますか？</h3>
                  </div>
                </div>
                <div className="text-[#8D8070] leading-relaxed">
                  <p className="mb-3">
                    <strong className="text-[#C5A572]">A.</strong> ホワイトニングは審美目的の治療とみなされるため、健康保険の適用外（自費診療）です。全額自己負担となります。
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-[#5A4D41]">
                      <strong className="text-blue-600">医療費控除について：</strong>ただし、医療費控除の対象となる場合がありますので、領収書は大切に保管してください。詳しい条件については、税務署にお問い合わせいただくか、当院にご相談ください。
                    </p>
                  </div>
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
              <a href="/whitening" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">ホワイトニングTOP</h3>
                <p className="text-[#8D8070] mb-4">
                  ホワイトニング全般について
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </a>

              <a href="/whitening/types" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">ホワイトニングの種類</h3>
                <p className="text-[#8D8070] mb-4">
                  3つの方法を徹底比較
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </a>

              <a href="/whitening/duration" className="group bg-white p-6 rounded-2xl border-2 border-[#C5A572]/20 hover:border-[#C5A572]/40 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-[#5A4D41] font-serif mb-4">効果の持続期間</h3>
                <p className="text-[#8D8070] mb-4">
                  白さを長持ちさせるコツ
                </p>
                <div className="flex items-center text-[#C5A572] font-semibold group-hover:translate-x-2 transition-transform">
                  詳しく見る <ArrowRight className="w-5 h-5 ml-2" />
                </div>
              </a>
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
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-[#C5A572] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                無料カウンセリング予約
                <ArrowRight className="w-6 h-6 ml-2" />
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
    </>
  );
}
