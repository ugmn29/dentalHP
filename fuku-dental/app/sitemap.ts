import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fshika.com';

  const pages = [
    // トップページ
    { url: '', priority: 1.0, changeFrequency: 'daily' as const },

    // 静的ページ
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/cases', priority: 0.8, changeFrequency: 'weekly' as const },

    // インプラント（トピッククラスター）
    { url: '/implant', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/implant/flow', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/implant/comparison', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/implant/cost', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/implant/safety', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/implant/qa', priority: 0.7, changeFrequency: 'monthly' as const },

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

    // むし歯治療
    { url: '/cavity', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/cavity/cost', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/cavity/pain', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/cavity/treatment-methods', priority: 0.7, changeFrequency: 'monthly' as const },

    // 予防歯科
    { url: '/preventive', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/preventive/checkup', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/preventive/cleaning', priority: 0.7, changeFrequency: 'monthly' as const },

    // マウスピース矯正
    { url: '/mouthpiece', priority: 0.8, changeFrequency: 'weekly' as const },

    // 口腔教育・口育
    { url: '/oral-education', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/oral-education/bad-alignment', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/oral-education/mouth-breathing', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/oral-education/open-mouth', priority: 0.6, changeFrequency: 'monthly' as const },

    // こども予防歯科
    { url: '/kids-preventive', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/kids-preventive/overcoming-fear', priority: 0.7, changeFrequency: 'monthly' as const },

    // インプラント追加ページ
    { url: '/implant/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/implant/bone-augmentation', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/implant/gallery', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/implant/immediate-placement', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/implant/iv-sedation', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/implant/maintenance', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/implant/merit-demerit', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/implant/number-position', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/implant/overdenture', priority: 0.7, changeFrequency: 'monthly' as const },

    // こども矯正追加ページ
    { url: '/kidsortho/appliances/chin-cap', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/appliances/functional', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/appliances/functional-mouthpiece', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/avoid-regret', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/food-education', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/gum-training', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/mft-training', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/mouth-breathing-risks', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/pain-management', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/posture-improvement', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/sports-and-music', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/kidsortho/underbite-natural-cure', priority: 0.6, changeFrequency: 'monthly' as const },

    // 外科・口腔外科
    { url: '/surgery/wisdom-tooth', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/surgery/tmj', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/wisdom', priority: 0.7, changeFrequency: 'weekly' as const },

    // 口腔外科・お悩み
    { url: '/concerns/oral-surgery', priority: 0.7, changeFrequency: 'weekly' as const },
    { url: '/concerns/trauma', priority: 0.7, changeFrequency: 'weekly' as const },

    // 口臭・その他
    { url: '/general/bad-breath', priority: 0.7, changeFrequency: 'weekly' as const },

    // 院内・施設
    { url: '/facilities', priority: 0.7, changeFrequency: 'monthly' as const },

    // 案内ページ
    { url: '/price', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/privacy', priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
