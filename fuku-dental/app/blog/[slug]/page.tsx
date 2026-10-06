import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cache } from 'react';
import { ArrowLeft, Calendar } from 'lucide-react';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import {
  getAllArticleSlugs,
  getArticleBySlug,
  type MicroCMSArticle,
} from '@/lib/microcms';

const SITE_NAME = 'Fデンタルオフィス 豊洲プライムスクエア院';
const SITE_URL = 'https://fshika.com';
const getArticle = cache(getArticleBySlug);

type BlogArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

function plainText(value = ''): string {
  return value.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function articleDescription(article: MicroCMSArticle): string {
  return plainText(article.excerpt || article.body).slice(0, 160);
}

function articleDate(article: MicroCMSArticle): string {
  return article.publishedDate || article.publishedAt || '';
}

function displayArticleDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Tokyo',
  }).format(date);
}

function articleCategory(article: MicroCMSArticle): string {
  return Array.isArray(article.category)
    ? article.category[0] || '歯科コラム'
    : '歯科コラム';
}

function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export async function generateStaticParams() {
  const slugs = await getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return {
      title: `記事が見つかりません｜${SITE_NAME}`,
      robots: { index: false, follow: true },
    };
  }

  const canonical = `${SITE_URL}/blog/${encodeURIComponent(
    article.slug || article.id
  )}`;
  const description = articleDescription(article);
  const image = article.thumbnail?.url;

  return {
    title: `${article.title}｜Fデンタルオフィス豊洲`,
    description,
    authors: [{ name: '福永 真大', url: `${SITE_URL}/doctor` }],
    alternates: { canonical },
    openGraph: {
      type: 'article',
      locale: 'ja_JP',
      siteName: SITE_NAME,
      url: canonical,
      title: article.title,
      description,
      publishedTime: article.publishedAt,
      modifiedTime: article.revisedAt,
      authors: ['福永 真大'],
      images: image
        ? [
            {
              url: image,
              width: article.thumbnail?.width,
              height: article.thumbnail?.height,
              alt: article.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: article.title,
      description,
      images: image ? [image] : undefined,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const article = await getArticle(slug);
  if (!article) notFound();

  const canonical = `${SITE_URL}/blog/${encodeURIComponent(
    article.slug || article.id
  )}`;
  const description = articleDescription(article);
  const date = articleDate(article);
  const displayDate = displayArticleDate(date);
  const category = articleCategory(article);
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${canonical}#article`,
        headline: article.title,
        description,
        image: article.thumbnail?.url ? [article.thumbnail.url] : undefined,
        datePublished: article.publishedDate || article.publishedAt,
        dateModified: article.revisedAt,
        inLanguage: 'ja-JP',
        articleSection: category,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
        author: {
          '@type': 'Person',
          name: '福永 真大',
          jobTitle: '院長・歯科医師',
          url: `${SITE_URL}/doctor`,
        },
        publisher: { '@id': `${SITE_URL}/#dentist` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'ホーム',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'ブログ',
            item: `${SITE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-[#5A4D41]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
      />
      <Header />
      <main className="pt-0 pb-12">
        <section className="bg-gradient-to-b from-white to-[#FDFBF7] pt-2 pb-4">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#395b45] font-bold text-sm mb-6 hover:gap-3 transition-all"
              >
                <ArrowLeft size={16} />
                ブログ一覧に戻る
              </Link>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="inline-block bg-[#395b45] text-white px-3 py-1 rounded-full text-xs font-bold">
                  {category}
                </span>
                <div className="flex items-center gap-2 text-sm text-[#8D8070]">
                  <Calendar size={16} />
                  <time dateTime={date}>{displayDate}</time>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-[#5A4D41] font-serif leading-tight">
                {article.title}
              </h1>
              <p className="mt-4 text-sm text-[#756A5E]">
                監修：
                <Link className="font-bold text-[#395b45] hover:underline" href="/doctor">
                  院長・歯科医師 福永 真大
                </Link>
              </p>
            </div>
          </div>
        </section>

        {article.thumbnail && (
          <section className="pb-8">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <img
                  src={article.thumbnail.url}
                  alt={article.title}
                  width={article.thumbnail.width}
                  height={article.thumbnail.height}
                  className="w-full rounded-2xl shadow-lg aspect-[16/9] object-cover"
                />
              </div>
            </div>
          </section>
        )}

        <section className="pb-12">
          <div className="container mx-auto px-4">
            <div
              className="article-body max-w-3xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-sm"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          </div>
        </section>

        <section className="pb-8">
          <div className="container mx-auto px-4 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#395b45] hover:bg-[#2d4835] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ArrowLeft size={20} />
              ブログ一覧に戻る
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
