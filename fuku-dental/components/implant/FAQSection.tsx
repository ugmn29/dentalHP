'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

const faqs = [
  { q: '手術は痛いですか？', a: '局所麻酔を行うため、手術中の痛みはほとんどありません。ご不安な方には静脈内鎮静法もご用意しています。術後の痛みは痛み止めでコントロールできる範囲です。' },
  { q: 'インプラントはどれくらい持ちますか？', a: '適切なメンテナンスを行えば、10年以上お使いいただけます。10年生存率は90%以上と報告されています。長持ちの秘訣は定期検診とセルフケアです。' },
  { q: '治療期間はどのくらいですか？', a: '一般的に4〜6ヶ月程度です。骨造成が必要な場合はさらに数ヶ月かかることがあります。' },
  { q: '高齢でも手術できますか？', a: '全身の健康状態に問題がなければ、年齢制限はありません。骨粗鬆症のお薬を服用中の方は事前にご相談ください。' },
  { q: '保険は適用されますか？', a: 'インプラント治療は自費診療（保険適用外）です。ただし、医療費控除の対象となり、確定申告で還付を受けられます。' },
  { q: '金属アレルギーでも大丈夫ですか？', a: 'インプラント体に使用するチタンは生体親和性が非常に高く、金属アレルギーが起こりにくい素材です。ご心配な方はパッチテストも可能です。' },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 bg-white" style={{ fontFamily: 'YuGothic, "Yu Gothic", sans-serif' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#2d4835] mb-3 font-serif">
          よくあるご質問
        </h2>
        <p className="text-center text-gray-500 mb-10 text-sm">
          インプラント治療についてお寄せいただく代表的なご質問
        </p>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition"
              >
                <span className="font-semibold text-[#2d4835] flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#395b45] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">Q</span>
                  {faq.q}
                </span>
                <ChevronRight
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === i ? 'rotate-90' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 pl-14">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/implant/qa"
            className="inline-flex items-center gap-1 text-[#395b45] font-semibold text-sm hover:underline"
          >
            すべてのQ&Aを見る <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
