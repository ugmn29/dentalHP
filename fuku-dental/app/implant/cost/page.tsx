import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { PageImage } from '@/components/PageImage';
import {
  CreditCard,
  Calculator,
  ShieldCheck,
  FileText,
  Banknote,
  CheckCircle2,
  Info,
  Home,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラントの費用・料金｜明確な料金体系で安心｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description:
    'インプラント治療の費用・料金一覧ページです。1本¥330,000〜。カウンセリング無料。医療費控除の対象。クレジットカード・デンタルローン対応。10年保証制度あり。明確な料金体系で安心して治療を始められます。',
  keywords: [
    'インプラント 費用',
    'インプラント 料金',
    'インプラント 値段',
    'インプラント 価格',
    'インプラント 医療費控除',
    'インプラント デンタルローン',
    'インプラント 保証',
    'インプラント 分割払い',
  ],
  openGraph: {
    title: 'インプラントの費用・料金｜明確な料金体系で安心｜F歯科・矯正歯科 豊洲プライムスクエア院',
    description: 'インプラント治療の費用・料金一覧。1本¥330,000〜。カウンセリング無料。医療費控除対象。クレジットカード・デンタルローン対応。10年保証制度あり。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://fshika.com/implant/cost',
    siteName: 'F歯科・矯正歯科 豊洲プライムスクエア院',
  },
};

/* ─── 料金一覧テーブル ─── */
const priceItems = [
  { name: 'カウンセリング', price: '無料', highlight: true },
  { name: 'CT撮影・診断', price: '¥11,000' },
  { name: 'インプラント埋入（1本）', price: '¥220,000' },
  { name: 'アバットメント', price: '¥55,000' },
  { name: '上部構造（セラミック）', price: '¥110,000〜¥165,000' },
  { name: 'サージカルガイド', price: '¥55,000' },
  { name: '静脈内鎮静法', price: '¥77,000' },
  { name: '骨造成（GBR法）', price: '¥55,000〜' },
  { name: '骨造成（サイナスリフト）', price: '¥165,000〜' },
];

/* ─── ケース別費用 ─── */
const caseEstimates = [
  {
    label: '1本の場合',
    price: '¥330,000〜¥440,000程度',
    description: 'インプラント埋入＋アバットメント＋上部構造の合計',
    note: '最も一般的なケースです',
  },
  {
    label: '2本の場合',
    price: '¥660,000〜¥880,000程度',
    description: '2本分の合計費用の目安',
    note: '隣接する歯の場合の目安です',
  },
  {
    label: 'All-on-4',
    price: '¥2,200,000〜',
    description: '4本のインプラントで全顎を支える治療',
    note: '多くの歯を失った方向けの治療法です',
  },
];

/* ─── お支払い方法 ─── */
const paymentMethods = [
  {
    icon: Banknote,
    title: '現金',
    description: '一括払いでのお支払いが可能です。',
  },
  {
    icon: CreditCard,
    title: 'クレジットカード',
    description: '各種クレジットカードに対応しております。VISA・Mastercard・JCB・AMEX など。',
  },
  {
    icon: Calculator,
    title: 'デンタルローン',
    description: '月々¥10,000〜の分割払いが可能です。最大84回までの分割に対応しております。',
  },
];

export default function ImplantCostPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#395b45] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/implant" className="hover:text-[#395b45]">
                インプラント
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#395b45]">費用・料金</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                インプラント治療の費用
              </h1>
              <PageImage path="/implant/cost" alt="インプラント治療の費用・料金" />
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                明確な料金体系で安心の治療を
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                カウンセリングは無料です。まずはお気軽にご相談ください
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>

            {/* 結論 */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#2d4835] mb-8 font-serif">
                結論
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
                <p>
                  インプラント治療の費用は<span className="bg-yellow-100 font-bold">1本あたり約33万円〜44万円程度</span>（税込）です。
                </p>
                <p>
                  自費診療のため保険は適用されませんが、<span className="text-[#395b45] font-bold">医療費控除の対象</span>となり、確定申告で税金の一部が還付されます。
                  また、月々1万円からのデンタルローンもご利用いただけます。
                </p>
                <p>
                  当院では<span className="font-bold">カウンセリング無料・10年保証制度</span>を設けており、明確な料金体系で安心して治療を始めていただけます。
                </p>
              </div>
            </div>

            {/* ── セクション1: 料金一覧 ── */}
            <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3">
                料金一覧
              </h2>
              <p className="text-gray-500 text-sm">
                インプラント治療に関わる各項目の料金です（税込表示）
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#395b45] text-white">
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        治療内容
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-semibold">
                        料金（税込）
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceItems.map((item, i) => (
                      <tr
                        key={i}
                        className={`border-b border-gray-100 last:border-b-0 ${
                          item.highlight
                            ? 'bg-[#FF9F43]/5'
                            : i % 2 === 1
                              ? 'bg-gray-50/50'
                              : 'bg-white'
                        }`}
                      >
                        <td className="px-6 py-4 text-[#5A4D41] font-medium text-sm md:text-base">
                          {item.name}
                        </td>
                        <td
                          className={`px-6 py-4 text-right font-bold text-sm md:text-base ${
                            item.highlight
                              ? 'text-[#FF9F43] text-lg'
                              : 'text-[#2d4835]'
                          }`}
                        >
                          {item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              ※ 症例により費用は異なります。詳しくはカウンセリング時にご説明いたします。
            </p>
          </div>
        </div>

        {/* ── セクション2: ケース別費用の目安 ── */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3">
                ケース別費用の目安
              </h2>
              <p className="text-gray-500 text-sm">
                失った歯の本数や治療法による費用の目安です
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {caseEstimates.map((item, i) => (
                <div
                  key={i}
                  className="bg-[#FDFBF7] rounded-2xl border border-gray-100 p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-center">
                    <span className="inline-block bg-[#395b45] text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                      {item.label}
                    </span>
                    <p className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3">
                      {item.price}
                    </p>
                    <p className="text-sm text-[#5A4D41] leading-relaxed mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-400">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#395b45]/5 rounded-xl p-4 flex items-start gap-3">
              <Info className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-[#5A4D41] leading-relaxed">
                ※ 症例により費用は異なります。骨造成や静脈内鎮静法が必要な場合は、別途費用がかかります。正確な費用は精密検査後にお見積もりをお出しいたします。
              </p>
            </div>
          </div>
        </div>

        {/* ── セクション3: お支払い方法 ── */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3">
                お支払い方法
              </h2>
              <p className="text-gray-500 text-sm">
                患者様のご負担を軽減するため、複数のお支払い方法をご用意しています
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {paymentMethods.map((method, i) => {
                const Icon = method.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#395b45]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#395b45]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#2d4835] mb-2">
                      {method.title}
                    </h3>
                    <p className="text-sm text-[#5A4D41] leading-relaxed">
                      {method.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* デンタルローンの例 */}
            <div className="mt-8 bg-white rounded-2xl border border-[#C5A572]/30 p-6 md:p-8">
              <h3 className="text-lg font-bold text-[#2d4835] mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#C5A572]" />
                デンタルローン 分割払いの例
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="px-4 py-3 text-left text-[#5A4D41] font-semibold">
                        治療費総額
                      </th>
                      <th className="px-4 py-3 text-center text-[#5A4D41] font-semibold">
                        分割回数
                      </th>
                      <th className="px-4 py-3 text-right text-[#5A4D41] font-semibold">
                        月々のお支払い目安
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-[#5A4D41]">¥330,000</td>
                      <td className="px-4 py-3 text-center text-[#5A4D41]">
                        36回
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-[#2d4835]">
                        月々 約¥10,000〜
                      </td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="px-4 py-3 text-[#5A4D41]">¥440,000</td>
                      <td className="px-4 py-3 text-center text-[#5A4D41]">
                        48回
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-[#2d4835]">
                        月々 約¥10,000〜
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#5A4D41]">¥660,000</td>
                      <td className="px-4 py-3 text-center text-[#5A4D41]">
                        84回
                      </td>
                      <td className="px-4 py-3 text-right font-bold text-[#2d4835]">
                        月々 約¥10,000〜
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                ※ 金利・手数料は分割回数により異なります。詳しくはスタッフまでお問い合わせください。
              </p>
            </div>
          </div>
        </div>

        {/* ── セクション4: 医療費控除について ── */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3">
                医療費控除について
              </h2>
              <p className="text-gray-500 text-sm">
                インプラント治療は医療費控除の対象です。確定申告で税金の一部が還付されます。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* 左: 説明 */}
              <div className="space-y-6">
                <div className="bg-[#FDFBF7] rounded-xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-[#2d4835] mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#395b45]" />
                    医療費控除とは？
                  </h3>
                  <p className="text-sm text-[#5A4D41] leading-relaxed mb-4">
                    1年間（1月1日〜12月31日）に支払った医療費の合計が10万円を超えた場合、確定申告を行うことで所得税の一部が還付される制度です。
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[#5A4D41]">
                      <CheckCircle2 className="w-4 h-4 text-[#395b45] flex-shrink-0 mt-0.5" />
                      インプラント治療費は医療費控除の対象
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#5A4D41]">
                      <CheckCircle2 className="w-4 h-4 text-[#395b45] flex-shrink-0 mt-0.5" />
                      通院のための交通費も対象になります
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#5A4D41]">
                      <CheckCircle2 className="w-4 h-4 text-[#395b45] flex-shrink-0 mt-0.5" />
                      生計を共にするご家族の分も合算可能
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[#5A4D41]">
                      <CheckCircle2 className="w-4 h-4 text-[#395b45] flex-shrink-0 mt-0.5" />
                      確定申告は翌年の2月16日〜3月15日
                    </li>
                  </ul>
                </div>
              </div>

              {/* 右: 計算例 */}
              <div>
                <div className="bg-gradient-to-br from-[#395b45] to-[#2d4835] rounded-xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-[#C5A572]" />
                    還付額の計算例
                  </h3>

                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/80 mb-2">条件</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex justify-between">
                        <span className="text-white/80">年収</span>
                        <span className="font-bold">500万円</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/80">
                          インプラント治療費
                        </span>
                        <span className="font-bold">40万円</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-white/80">
                          所得税率（税率20%の場合）
                        </span>
                        <span className="font-bold">20%</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/80 mb-2">計算式</p>
                    <div className="space-y-1 text-sm">
                      <p>
                        医療費控除額 = 40万円 - 10万円 ={' '}
                        <span className="font-bold text-[#C5A572]">
                          30万円
                        </span>
                      </p>
                      <p>
                        還付額 = 30万円 x 20% ={' '}
                        <span className="font-bold text-[#C5A572]">
                          6万円
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#FF9F43]/20 rounded-lg p-4 text-center">
                    <p className="text-sm text-white/80 mb-1">
                      所得税の還付額の目安
                    </p>
                    <p className="text-3xl font-bold text-[#FF9F43]">
                      約6万円
                    </p>
                    <p className="text-xs text-white/60 mt-1">
                      ※ 住民税の軽減分を合わせるとさらにお得です
                    </p>
                  </div>
                </div>

                <p className="text-xs text-gray-400 mt-3">
                  ※
                  上記はあくまで目安です。実際の還付額は個々の所得状況により異なります。詳しくは税務署または税理士にご相談ください。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── セクション5: 保証制度 ── */}
        <div className="mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#2d4835] mb-3">
                保証制度
              </h2>
              <p className="text-gray-500 text-sm">
                当院のインプラント治療には、安心の保証制度をご用意しています
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* インプラント体 保証 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[#395b45]/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-[#395b45]" />
                </div>
                <h3 className="text-lg font-bold text-[#2d4835] mb-2">
                  インプラント体
                </h3>
                <p className="text-4xl font-bold text-[#395b45] mb-2">
                  10<span className="text-lg">年保証</span>
                </p>
                <p className="text-sm text-[#5A4D41]">
                  顎骨に埋入するインプラント体（人工歯根）に対して、10年間の保証をお付けしています。
                </p>
              </div>

              {/* 上部構造 保証 */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-[#C5A572]/10 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-[#C5A572]" />
                </div>
                <h3 className="text-lg font-bold text-[#2d4835] mb-2">
                  上部構造（人工歯）
                </h3>
                <p className="text-4xl font-bold text-[#C5A572] mb-2">
                  5<span className="text-lg">年保証</span>
                </p>
                <p className="text-sm text-[#5A4D41]">
                  セラミック製の上部構造（人工歯）に対して、5年間の保証をお付けしています。
                </p>
              </div>
            </div>

            {/* 保証条件 */}
            <div className="bg-white rounded-2xl border border-[#395b45]/20 p-6 md:p-8">
              <h3 className="text-lg font-bold text-[#2d4835] mb-4 flex items-center gap-2">
                <Info className="w-5 h-5 text-[#395b45]" />
                保証の適用条件
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-[#5A4D41]">
                  <CheckCircle2 className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2d4835]">
                      定期メンテナンスの受診
                    </strong>
                    ：当院が指定する間隔（3〜6ヶ月ごと）での定期メンテナンスを受診していること。
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#5A4D41]">
                  <CheckCircle2 className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2d4835]">
                      適切なセルフケア
                    </strong>
                    ：歯科医師・歯科衛生士の指導に基づいた、日常的なブラッシング等のセルフケアを行っていること。
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm text-[#5A4D41]">
                  <CheckCircle2 className="w-5 h-5 text-[#395b45] flex-shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[#2d4835]">
                      通常使用の範囲内
                    </strong>
                    ：事故や外傷、故意による破損は保証対象外となります。
                  </span>
                </li>
              </ul>
              <p className="text-xs text-gray-400 mt-4">
                ※
                保証内容の詳細は、治療開始前に書面にてご説明いたします。ご不明な点はお気軽にスタッフまでお尋ねください。
              </p>
            </div>
          </div>
        </div>

            {/* 関連ページへのリンク */}
            <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-[#2d4835] mb-6 text-center">インプラント治療についてもっと詳しく</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/implant/about"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">インプラントとは</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/comparison"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">入れ歯・ブリッジとの比較</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/flow"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">治療の流れ</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/implant/safety"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">安全性へのこだわり</span>
                  <ArrowRight className="w-5 h-5 text-[#395b45] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-4xl">
            <AuthorBio />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
