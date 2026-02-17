"use client";

import React from 'react';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#4A4A4A]">
      <Header />

      <main className="container mx-auto px-4 py-16 max-w-4xl">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2d4835] mb-4">
            プライバシーポリシー
          </h1>
          <p className="text-gray-600">個人情報保護方針</p>
        </div>

        {/* 本文 */}
        <div className="prose prose-lg max-w-none">
          {/* 前文 */}
          <section className="mb-12">
            <p className="text-gray-700 leading-relaxed">
              F歯科・矯正歯科 豊洲プライムスクエア院 豊洲（以下、「当院」といいます。）は、患者様の個人情報の保護に最大限の注意を払い、以下の方針に基づいて個人情報を適切に取り扱います。
            </p>
          </section>

          {/* 1. 個人情報の定義 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              1. 個人情報の定義
            </h2>
            <p className="text-gray-700 leading-relaxed">
              個人情報とは、氏名、生年月日、住所、電話番号、メールアドレス、診療記録など、特定の個人を識別できる情報をいいます。
            </p>
          </section>

          {/* 2. 個人情報の収集 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              2. 個人情報の収集
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当院は、以下の目的のために必要な範囲で個人情報を収集いたします。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>歯科診療の提供</li>
              <li>診療予約の管理</li>
              <li>診療費用の請求および精算</li>
              <li>診療に関する説明および同意の取得</li>
              <li>診療録の作成および管理</li>
              <li>他の医療機関との連携</li>
              <li>診療に関するお問い合わせへの対応</li>
            </ul>
          </section>

          {/* 3. 個人情報の利用目的 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              3. 個人情報の利用目的
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-[#395b45] mb-2">院内での利用</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>患者様に提供する歯科医療サービス</li>
                  <li>医療保険事務</li>
                  <li>患者様に関する院内での情報共有</li>
                  <li>院内の管理運営業務</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#395b45] mb-2">院外への情報提供としての利用</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>他の医療機関等との連携</li>
                  <li>他の医療機関からの照会への回答</li>
                  <li>患者様の診療等に当たり、外部の医師等の意見・助言を求める場合</li>
                  <li>検体検査業務の委託その他の業務委託</li>
                  <li>ご家族等への病状説明</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#395b45] mb-2">その他の利用</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                  <li>医療機関としての適正な管理運営業務</li>
                  <li>医療サービスの向上を目的とした分析・統計資料の作成（個人を特定できない形式）</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. 個人情報の第三者提供 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              4. 個人情報の第三者提供
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当院は、以下のいずれかに該当する場合を除き、患者様の個人情報を第三者に提供いたしません。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>患者様の同意がある場合</li>
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難である場合</li>
              <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難である場合</li>
            </ul>
          </section>

          {/* 5. 個人情報の安全管理 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              5. 個人情報の安全管理
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              当院は、個人情報の漏えい、滅失または毀損の防止その他の個人情報の安全管理のために、以下の措置を講じます。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>個人情報保護管理責任者の設置</li>
              <li>職員に対する適切な監督</li>
              <li>個人情報への不正なアクセス、紛失、破壊、改ざん、漏えい等を防ぐための適切な対策</li>
              <li>システムのセキュリティ対策</li>
            </ul>
          </section>

          {/* 6. 個人情報の開示・訂正・利用停止等 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              6. 個人情報の開示・訂正・利用停止等
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              患者様は、当院が保有する自己の個人情報について、以下の権利を有します。
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>開示を求める権利</li>
              <li>訂正・追加または削除を求める権利</li>
              <li>利用の停止または消去を求める権利</li>
              <li>第三者への提供の停止を求める権利</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              これらの権利を行使される場合は、受付窓口までお申し出ください。ご本人確認の上、適切に対応いたします。
            </p>
          </section>

          {/* 7. Cookieの使用について */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              7. Cookieの使用について
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当院のウェブサイトでは、より良いサービスを提供するため、Cookieを使用しています。Cookieによって取得した情報は、サイトの利用状況の分析、サービスの改善に使用します。Cookieの設定は、お使いのブラウザで変更することができます。
            </p>
          </section>

          {/* 8. アクセス解析ツールについて */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              8. アクセス解析ツールについて
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当院のウェブサイトでは、Microsoft Clarityなどのアクセス解析ツールを使用しています。これらのツールは、Cookieを使用してウェブサイトの利用状況を分析し、サービスの向上に役立てています。取得される情報には個人を特定する情報は含まれません。
            </p>
          </section>

          {/* 9. SSL/TLSについて */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              9. SSL/TLSについて
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当院のウェブサイトでは、個人情報を安全に送信するため、SSL/TLS暗号化通信を使用しています。
            </p>
          </section>

          {/* 10. プライバシーポリシーの変更 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              10. プライバシーポリシーの変更
            </h2>
            <p className="text-gray-700 leading-relaxed">
              当院は、法令の変更等に伴い、本プライバシーポリシーを変更することがあります。変更した場合は、当ウェブサイトに掲載してお知らせいたします。
            </p>
          </section>

          {/* 11. お問い合わせ窓口 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#2d4835] mb-4 pb-2 border-b-2 border-[#395b45]">
              11. お問い合わせ窓口
            </h2>
            <div className="bg-[#FAFAFA] p-6 rounded-lg border border-[#395b45]/20">
              <p className="text-gray-700 mb-4">
                個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
              </p>
              <div className="space-y-2 text-gray-700">
                <p className="font-semibold text-[#2d4835]">F歯科・矯正歯科 豊洲プライムスクエア院 豊洲</p>
                <p>個人情報保護管理責任者: 院長 福永 真大</p>
                <p>住所: 〒135-0061 東京都江東区豊洲5-6-36 豊洲プライムスクエア1階</p>
                <p>電話: 03-XXXX-XXXX（代表）</p>
                <p>受付時間: 平日 10:00-19:00 / 土日 9:00-17:00（火曜定休）</p>
              </div>
            </div>
          </section>

          {/* 施行日 */}
          <section className="mt-12 text-right">
            <p className="text-gray-600">
              制定日: 2024年1月1日<br />
              最終更新日: 2026年2月1日
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
