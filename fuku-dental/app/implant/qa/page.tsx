import { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { ImplantBreadcrumb } from '@/components/implant/ImplantBreadcrumb';
import { ImplantHero } from '@/components/implant/ImplantHero';
import { ImplantCTA } from '@/components/implant/ImplantCTA';
import QAContent from './QAContent';

export const metadata: Metadata = {
  title: 'インプラントQ&A よくある質問 | F歯科・矯正歯科',
  description:
    'インプラント治療に関するよくある質問を25問以上掲載。治療前の疑問、手術について、費用・支払い、治療後のメンテナンス、トラブル対処まで、カテゴリー別にわかりやすく回答しています。',
  keywords:
    'インプラント,よくある質問,FAQ,Q&A,インプラント治療,費用,痛み,メンテナンス,骨造成,歯科',
};

/* ─── JSON-LD Structured Data ─── */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'インプラント治療に年齢制限はありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '骨の成長が完了する18歳以降であれば、基本的に年齢制限はありません。高齢の方でも全身状態が良好であればインプラント治療は可能です。',
      },
    },
    {
      '@type': 'Question',
      name: '手術は痛いですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '手術中は局所麻酔を行うため、痛みはほとんどありません。静脈内鎮静法もご用意しており、ウトウトと眠っているような状態で手術を受けていただけます。',
      },
    },
    {
      '@type': 'Question',
      name: 'インプラント1本あたりの費用はいくらですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'インプラント1本あたりの総額は約33万円〜44万円程度（税込）です。検査費、手術費、上部構造の費用を含みます。',
      },
    },
    {
      '@type': 'Question',
      name: '保険は適用されますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'インプラント治療は自費診療（保険適用外）となります。ただし、医療費控除の対象ですので、確定申告により税金の一部が還付されます。',
      },
    },
    {
      '@type': 'Question',
      name: 'インプラントはどれくらい持ちますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '適切なメンテナンスを行えば、インプラントは10年以上お使いいただけます。研究データでは10年生存率が90%以上と報告されています。',
      },
    },
    {
      '@type': 'Question',
      name: '骨が足りないと言われました。インプラントはできませんか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '骨が不足している場合でも、骨造成手術（GBR法、サイナスリフト、ソケットリフトなど）を行うことで対応可能です。',
      },
    },
    {
      '@type': 'Question',
      name: '金属アレルギーでもインプラントはできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'インプラント体に使用するチタンは生体親和性が非常に高く、金属アレルギーが起こりにくい素材です。ご心配な方にはパッチテストも可能です。',
      },
    },
  ],
};

export default function ImplantQAPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <ImplantBreadcrumb items={[{ label: 'よくある質問' }]} />
        <ImplantHero title="インプラントQ&A" subtitle="FAQ" />
        <QAContent />
        <ImplantCTA
          title="まだ疑問が残っていませんか？"
          subtitle="無料カウンセリングでは、あなたのお口の状態に合わせて院長が直接ご質問にお答えします。お気軽にご予約ください。"
        />
        <div className="max-w-4xl mx-auto px-4">
          <AuthorBio />
        </div>
        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <Footer />
    </>
  );
}
