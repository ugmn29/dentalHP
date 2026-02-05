'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, MessageCircleQuestion, HelpCircle, Stethoscope, Wallet, Wrench, ShieldAlert } from 'lucide-react';

/* ─── FAQ Data ─── */
interface FAQ {
  question: string;
  answer: string;
  link?: { href: string; label: string };
}

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  faqs: FAQ[];
}

const faqCategories: FAQCategory[] = [
  {
    id: 'before',
    title: '治療前の疑問',
    icon: HelpCircle,
    color: '#395b45',
    faqs: [
      {
        question: 'インプラント治療に年齢制限はありますか？',
        answer: '骨の成長が完了する18歳以降であれば、基本的に年齢制限はありません。高齢の方でも全身状態が良好であればインプラント治療は可能です。当院では事前の全身検査で適応を慎重に判断しています。',
      },
      {
        question: '金属アレルギーでもインプラントはできますか？',
        answer: 'インプラント体に使用するチタンは生体親和性が非常に高く、金属アレルギーが起こりにくい素材です。ただし、ご心配な方には事前にパッチテストを行うことも可能ですので、お気軽にご相談ください。',
      },
      {
        question: '骨が足りないと言われました。インプラントはできませんか？',
        answer: '骨が不足している場合でも、骨造成手術（GBR法、サイナスリフト、ソケットリフトなど）を行うことで対応可能です。当院では骨造成の実績も豊富にございますので、他院で断られた方もぜひご相談ください。',
        link: { href: '/implant/bone-augmentation', label: '骨造成治療について詳しく見る' },
      },
      {
        question: '糖尿病や高血圧でも手術できますか？',
        answer: '糖尿病や高血圧などの全身疾患をお持ちの方でも、主治医の先生と連携しながら対応いたします。血糖値やHbA1cが安定している場合は手術可能なケースが多いです。事前のカウンセリングで詳しくお話を伺います。',
      },
      {
        question: 'タバコを吸っていても大丈夫ですか？',
        answer: '喫煙はインプラントの失敗リスクを2〜3倍に高めると報告されています。喫煙により血流が悪くなり、インプラントと骨の結合が阻害される可能性があるためです。インプラント治療を受ける場合は禁煙を強くおすすめしています。',
      },
      {
        question: '妊娠中でもインプラント治療はできますか？',
        answer: '妊娠中のインプラント治療は避けることをおすすめしています。レントゲン撮影や外科手術、投薬などが母体やお腹の赤ちゃんに影響を与える可能性があるためです。出産後、体調が安定してから改めてご相談ください。',
      },
      {
        question: 'インプラントと入れ歯、どちらが良いですか？',
        answer: 'インプラントは天然歯に近い噛み心地と見た目が得られますが、外科手術が必要で費用もかかります。入れ歯は手軽で保険適用の場合もありますが、違和感や噛む力の低下があります。患者様のご状況に合わせて最適な治療をご提案いたします。',
        link: { href: '/implant/comparison', label: '入れ歯・ブリッジとの詳しい比較を見る' },
      },
      {
        question: '他院で断られましたが相談できますか？',
        answer: 'もちろんセカンドオピニオンとしてのご相談を歓迎いたします。骨造成技術やCTによる精密診断、最新の治療技術により、他院で難しいと判断された症例でも対応できる場合があります。まずはお気軽にご相談ください。',
      },
    ],
  },
  {
    id: 'surgery',
    title: '手術について',
    icon: Stethoscope,
    color: '#4a7c5c',
    faqs: [
      {
        question: '手術は痛いですか？',
        answer: '手術中は局所麻酔を行うため、痛みはほとんどありません。また、ご不安が強い方には静脈内鎮静法もご用意しており、ウトウトと眠っているような状態で手術を受けていただけます。術後の痛みは痛み止めの服用でコントロールできる範囲です。',
      },
      {
        question: '手術時間はどれくらいですか？',
        answer: 'インプラント1本あたりの手術時間は約30分〜1時間程度です。本数が増えたり、骨造成手術が追加される場合はその分時間がかかります。事前のカウンセリングでおおよその所要時間をご案内いたします。',
      },
      {
        question: '手術中は意識がありますか？',
        answer: '局所麻酔のみの場合は意識があります。会話もできる状態ですので、手術中に何かあればすぐにお伝えいただけます。静脈内鎮静法を併用した場合は、ウトウトとした状態になり、手術がいつ終わったか分からないほどリラックスできます。',
      },
      {
        question: '手術後すぐに仕事に戻れますか？',
        answer: 'デスクワーク中心のお仕事であれば、翌日から復帰可能な場合がほとんどです。ただし、力仕事や激しい運動を伴うお仕事の場合は、2〜3日程度お休みされることをおすすめしています。',
      },
      {
        question: '手術後の腫れはどのくらい続きますか？',
        answer: '術後の腫れは通常2〜3日がピークで、1週間程度で徐々に落ち着いてきます。冷やすことで腫れを軽減できます。腫れの程度には個人差がありますが、多くの方が日常生活に支障のない範囲です。',
      },
    ],
  },
  {
    id: 'cost',
    title: '費用・支払い',
    icon: Wallet,
    color: '#5A4D41',
    faqs: [
      {
        question: 'インプラント1本あたりの費用はいくらですか？',
        answer: 'インプラント1本あたりの総額は約33万円〜44万円程度（税込）です。検査費、手術費、上部構造（人工歯）の費用を含みます。症例により費用が異なるため、詳しくはカウンセリング時にお見積もりをお出しします。',
        link: { href: '/implant/cost', label: '費用の詳細を見る' },
      },
      {
        question: '保険は適用されますか？',
        answer: 'インプラント治療は自費診療（保険適用外）となります。ただし、医療費控除の対象ですので、確定申告により税金の一部が還付されます。医療費控除の利用方法についてもご案内しておりますので、お気軽にお尋ねください。',
      },
      {
        question: '分割払いはできますか？',
        answer: 'はい、デンタルローンに対応しております。月々1万円程度からの分割払いが可能です。患者様のご事情に合わせた支払いプランをご提案いたしますので、費用面でお悩みの方もまずはご相談ください。',
      },
      {
        question: '医療費控除は受けられますか？',
        answer: 'インプラント治療は医療費控除の対象です。1年間に支払った医療費の合計が10万円を超えた場合、確定申告をすることで所得税の一部が還付されます。治療費の領収書は大切に保管してください。',
      },
    ],
  },
  {
    id: 'aftercare',
    title: '治療後・メンテナンス',
    icon: Wrench,
    color: '#395b45',
    faqs: [
      {
        question: 'インプラントはどれくらい持ちますか？',
        answer: '適切なメンテナンスを行えば、インプラントは10年以上お使いいただけます。研究データでは10年生存率が90%以上と報告されています。長持ちの秘訣は、定期的な検診と日々のセルフケアです。',
      },
      {
        question: 'メンテナンスはどのくらいの頻度で必要ですか？',
        answer: '3〜6ヶ月に1回の定期検診を推奨しています。定期検診では、インプラント周囲の状態チェック、プロフェッショナルクリーニング、噛み合わせの確認などを行い、問題の早期発見・早期対処に努めます。',
      },
      {
        question: 'インプラント周囲炎とは何ですか？',
        answer: 'インプラント周囲炎は、インプラントの周囲の組織に細菌感染が起こり、炎症が生じる状態です。天然歯の歯周病と似た症状で、進行するとインプラントを支える骨が溶け、最悪の場合インプラントが脱落することもあります。定期的なメンテナンスで予防することが重要です。',
      },
      {
        question: 'MRIやCT検査は受けられますか？',
        answer: 'インプラントに使用されるチタンは非磁性体のため、MRIやCT検査を受けることに問題はありません。ただし、検査を受ける際は事前にインプラントが入っていることを医療機関にお伝えください。',
      },
    ],
  },
  {
    id: 'trouble',
    title: 'トラブル・対処',
    icon: ShieldAlert,
    color: '#5A4D41',
    faqs: [
      {
        question: 'インプラントがグラグラする場合はどうすれば？',
        answer: 'インプラントのグラつきを感じた場合は、できるだけ早く当院にご連絡ください。ネジ（アバットメント）の緩みであれば締め直しで解決できますが、インプラント体と骨の結合に問題がある場合は再手術が必要になることもあります。早期の対応が大切です。',
      },
      {
        question: 'インプラントの歯が欠けた場合は？',
        answer: '上部構造（人工歯）が欠けたり破損した場合は、修理または再製作で対応可能です。当院の保証制度の範囲内であれば無料で対応いたします。まずはお電話でご連絡ください。',
      },
      {
        question: '引っ越し先でもメンテナンスを受けられますか？',
        answer: '転居された場合は、転院先の歯科医院への紹介状を作成いたします。インプラントの種類、メーカー、埋入記録などの詳細な情報を引き継ぎますので、転院先でもスムーズにメンテナンスを受けていただけます。',
      },
    ],
  },
];

/* ─── Accordion Item ─── */
function AccordionItem({ faq, isOpen, onToggle, index }: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-sm transition-shadow">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[#2d4835] flex items-center gap-3 pr-4">
          <span className="w-8 h-8 rounded-full bg-[#395b45] text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
            Q
          </span>
          <span className="text-sm md:text-base">{faq.question}</span>
        </span>
        <ChevronRight
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-90' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pl-16">
            <div className="flex items-start gap-3">
              <span className="w-8 h-8 rounded-full bg-[#FF9F43] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                A
              </span>
              <div>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
                {faq.link && (
                  <Link
                    href={faq.link.href}
                    className="inline-flex items-center gap-1 mt-3 text-sm text-[#395b45] font-semibold hover:underline"
                  >
                    {faq.link.label}
                    <ChevronRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Category Section ─── */
function CategorySection({ category, openIndices, onToggle }: {
  category: FAQCategory;
  openIndices: Set<string>;
  onToggle: (key: string) => void;
}) {
  const Icon = category.icon;

  return (
    <section className="mb-12 last:mb-0">
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: `${category.color}15` }}
        >
          <Icon size={20} style={{ color: category.color }} />
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-[#2d4835]">
          {category.title}
        </h2>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
          {category.faqs.length}件
        </span>
      </div>
      <div className="space-y-3">
        {category.faqs.map((faq, i) => {
          const key = `${category.id}-${i}`;
          return (
            <AccordionItem
              key={key}
              faq={faq}
              isOpen={openIndices.has(key)}
              onToggle={() => onToggle(key)}
              index={i}
            />
          );
        })}
      </div>
    </section>
  );
}

/* ─── Main QA Content Component ─── */
export default function QAContent() {
  const [openIndices, setOpenIndices] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  const expandAll = () => {
    const allKeys = new Set<string>();
    const categoriesToExpand = activeCategory
      ? faqCategories.filter((c) => c.id === activeCategory)
      : faqCategories;
    categoriesToExpand.forEach((cat) => {
      cat.faqs.forEach((_, i) => {
        allKeys.add(`${cat.id}-${i}`);
      });
    });
    setOpenIndices(allKeys);
  };

  const collapseAll = () => {
    if (activeCategory) {
      setOpenIndices((prev) => {
        const next = new Set(prev);
        faqCategories
          .filter((c) => c.id === activeCategory)
          .forEach((cat) => {
            cat.faqs.forEach((_, i) => {
              next.delete(`${cat.id}-${i}`);
            });
          });
        return next;
      });
    } else {
      setOpenIndices(new Set());
    }
  };

  const filteredCategories = activeCategory
    ? faqCategories.filter((c) => c.id === activeCategory)
    : faqCategories;

  const totalQuestions = faqCategories.reduce((sum, cat) => sum + cat.faqs.length, 0);

  return (
    <div className="bg-[#FDFBF7]">
      {/* Introduction */}
      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-5 py-2 shadow-sm border border-gray-100 mb-6">
            <MessageCircleQuestion size={18} className="text-[#FF9F43]" />
            <span className="text-sm font-semibold text-[#5A4D41]">
              全{totalQuestions}問のQ&Aをご用意
            </span>
          </div>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
            インプラント治療に関して、患者様からよくお寄せいただくご質問をカテゴリー別にまとめました。
            治療前の不安や疑問の解消にお役立てください。
            こちらに掲載のない質問は、お気軽にお問い合わせください。
          </p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="px-4 pb-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                activeCategory === null
                  ? 'bg-[#395b45] text-white shadow-md'
                  : 'bg-white text-[#5A4D41] border border-gray-200 hover:border-[#395b45]/30 hover:text-[#395b45]'
              }`}
            >
              すべて
            </button>
            {faqCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id === activeCategory ? null : cat.id)}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#395b45] text-white shadow-md'
                      : 'bg-white text-[#5A4D41] border border-gray-200 hover:border-[#395b45]/30 hover:text-[#395b45]'
                  }`}
                >
                  <Icon size={14} />
                  {cat.title}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expand/Collapse Controls */}
      <section className="px-4 pb-4">
        <div className="max-w-3xl mx-auto flex justify-end gap-3">
          <button
            onClick={expandAll}
            className="text-xs text-[#395b45] hover:underline font-medium"
          >
            すべて開く
          </button>
          <span className="text-gray-300">|</span>
          <button
            onClick={collapseAll}
            className="text-xs text-[#395b45] hover:underline font-medium"
          >
            すべて閉じる
          </button>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          {filteredCategories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              openIndices={openIndices}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm text-center">
            <div className="w-14 h-14 rounded-full bg-[#FF9F43]/10 flex items-center justify-center mx-auto mb-4">
              <MessageCircleQuestion size={28} className="text-[#FF9F43]" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-[#2d4835] mb-3">
              ご不明な点はございませんか？
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 max-w-lg mx-auto">
              こちらに掲載されていないご質問や、より詳しくお知りになりたいことがございましたら、
              お気軽に無料カウンセリングでご相談ください。院長が直接お答えいたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:03-1234-5678"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#395b45] border-2 border-[#395b45] rounded-full font-bold hover:bg-[#395b45] hover:text-white transition-all"
              >
                03-1234-5678
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF9F43] text-white rounded-full font-bold hover:bg-[#e8903c] transition-all shadow-md"
              >
                無料カウンセリング予約
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
