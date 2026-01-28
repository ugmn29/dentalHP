import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fuku-dental.com'; // 実際のドメインに変更してください

  const pages = [
    // トップページ
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },

    // 静的ページ
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/cases', priority: 0.8, changeFrequency: 'weekly' as const },

    // インプラント（トピッククラスター）
    { url: '/implant', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/implant/types', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/implant/cost', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/implant/vs-denture', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/implant/procedure', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/implant/case-studies', priority: 0.7, changeFrequency: 'weekly' as const },

    // 矯正歯科（トピッククラスター）
    { url: '/orthodontics', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/orthodontics/types', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/orthodontics/cost', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/orthodontics/duration', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/orthodontics/adult', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/orthodontics/case-studies', priority: 0.7, changeFrequency: 'weekly' as const },

    // 根管治療（トピッククラスター）
    { url: '/root-canal', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/root-canal/types', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/root-canal/cost', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/root-canal/pain', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/root-canal/duration', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/root-canal/case-studies', priority: 0.7, changeFrequency: 'weekly' as const },

    // 歯周病治療（トピッククラスター）
    { url: '/periodontal', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/periodontal/stages', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/periodontal/treatment-methods', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/periodontal/prevention', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/periodontal/cost', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/periodontal/case-studies', priority: 0.7, changeFrequency: 'weekly' as const },

    // ホワイトニング
    { url: '/whitening', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/whitening/types', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/whitening/cost', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/whitening/safety', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/whitening/comparison', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/whitening/duration', priority: 0.7, changeFrequency: 'monthly' as const },

    // セラミック治療
    { url: '/ceramic', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/ceramic/types', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/ceramic/cost', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/ceramic/vs-metal', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/ceramic/longevity', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/ceramic/case-studies', priority: 0.6, changeFrequency: 'weekly' as const },

    // こども矯正（トピッククラスター）
    { url: '/kidsortho', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/kidsortho/types', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/types/overbite', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/types/underbite', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/types/crowding', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/types/openbite', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/types/deepbite', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/types/crossbite', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/types/spacing', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/timing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/duration', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/cost', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/appliances', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/appliances/expander', priority: 0.7, changeFrequency: 'monthly' as const },

    // その他の診療
    { url: '/cavity', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/general/bad-breath', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/surgery/wisdom-tooth', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/surgery/tmj', priority: 0.7, changeFrequency: 'weekly' as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
