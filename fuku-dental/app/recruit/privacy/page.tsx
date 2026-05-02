"use client";

import React from 'react';
import RecruitHeader from '../components/Header';
import RecruitFooter from '../components/Footer';

export default function RecruitPrivacyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4A4A4A]">
      <RecruitHeader />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d4835] mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-gray-600">採用応募者向け 個人情報保護方針</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              Fデンタルオフィス 豊洲プライムスクエア院（以下「当院」といいます。）は、当院の採用応募フォームを通じて取得する個人情報を、以下のとおり適切に取り扱います。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              1. 取得する個人情報
            </h2>
            <p className="text-gray-700 leading-relaxed">
              氏名、メールアドレス、電話番号、歯科衛生士免許情報、臨床経験、希望雇用形態、その他応募者がフォームに記入した情報を取得します。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              2. 利用目的
            </h2>
            <p className="text-gray-700 leading-relaxed">
              取得した個人情報は、当院の採用選考および応募者への連絡のみに利用し、それ以外の目的には使用いたしません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              3. 第三者への提供
            </h2>
            <p className="text-gray-700 leading-relaxed">
              法令に基づく場合を除き、応募者の同意なく第三者に提供することはありません。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              4. 保管期間
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>採用決定者：雇用期間中および退職後5年間</li>
              <li>不採用となった方：選考終了後3ヶ月以内に責任を持って廃棄いたします。</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              5. 開示・訂正・削除等の請求
            </h2>
            <p className="text-gray-700 leading-relaxed">
              ご本人からの個人情報の開示、訂正、削除等のご請求には、合理的な範囲で速やかに対応いたします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              6. お問い合わせ窓口
            </h2>
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-[#395b45]/20">
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold text-[#2d4835]">Fデンタルオフィス 豊洲プライムスクエア院</p>
                <p>住所: 〒135-0061 東京都江東区豊洲5-6-36 豊洲プライムスクエア1階</p>
                <p>電話: <a href="tel:03-6204-2876" className="text-[#395b45] underline">03-6204-2876</a></p>
                <p>メール: <a href="mailto:recruit@fshika.com" className="text-[#395b45] underline">recruit@fshika.com</a></p>
              </div>
            </div>
          </section>

          <section className="mt-12 text-right">
            <p className="text-gray-600">
              制定日: 2026年5月1日
            </p>
          </section>
        </div>
      </main>

      <RecruitFooter />
    </div>
  );
}
