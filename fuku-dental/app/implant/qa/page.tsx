import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import QAContent from './QAContent';
import { Home, ChevronRight, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'インプラントQ&A よくある質問 | F歯科・矯正歯科 豊洲プライムスクエア院',
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
              <span className="text-[#395b45]">よくある質問</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-6 md:py-6 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2d4835] font-serif">
                インプラントよくある質問
              </h1>
              <div className="w-24 h-1 bg-[#395b45] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#2d4835] font-medium">
                患者様からよくいただくご質問にお答えします
              </p>
              <p className="text-lg text-[#5A4D41] leading-relaxed">
                25問以上のQ&Aをカテゴリー別にまとめました
              </p>
            </div>
          </div>
        </section>

        <QAContent />

        {/* Related Links Section */}
        <section className="py-12 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
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
                  href="/implant/cost"
                  className="flex items-center justify-between p-4 bg-[#FDFBF7] hover:bg-gray-50 rounded-xl border border-gray-100 transition-colors group"
                >
                  <span className="font-medium text-[#2d4835]">費用について</span>
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
