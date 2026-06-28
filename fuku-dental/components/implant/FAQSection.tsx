import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaqSection } from '@/components/FaqSection';

const faqs = [
  { q: '手術は痛いですか？', a: '局所麻酔を行うため、手術中の痛みはほとんどありません。ご不安な方には静脈内鎮静法もご用意しています。術後の痛みは痛み止めでコントロールできる範囲です。' },
  { q: 'インプラントはどれくらい持ちますか？', a: '適切なメンテナンスを行えば、10年以上お使いいただけます。10年生存率は90%以上と報告されています。長持ちの秘訣は定期検診とセルフケアです。' },
  { q: '治療期間はどのくらいですか？', a: '一般的に4〜6ヶ月程度です。骨造成が必要な場合はさらに数ヶ月かかることがあります。' },
  { q: '高齢でも手術できますか？', a: '全身の健康状態に問題がなければ、年齢制限はありません。骨粗鬆症のお薬を服用中の方は事前にご相談ください。' },
  { q: '保険は適用されますか？', a: 'インプラント治療は自費診療（保険適用外）です。ただし、医療費控除の対象となり、確定申告で還付を受けられます。' },
  { q: '金属アレルギーでも大丈夫ですか？', a: 'インプラント体に使用するチタンは生体親和性が非常に高く、金属アレルギーが起こりにくい素材です。ご心配な方はパッチテストも可能です。' },
];

export function FAQSection() {
  return (
    <>
      <FaqSection
        title="よくあるご質問"
        subtitle="インプラント治療についてお寄せいただく代表的なご質問"
        items={faqs}
        className="pb-4"
      />
      <div className="container mx-auto px-4 pb-12">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/implant/qa" className="inline-flex items-center gap-2 text-sm font-bold text-[#C5A572] transition-colors hover:text-[#B89558]">
            すべてのQ&Aを見る <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
}
