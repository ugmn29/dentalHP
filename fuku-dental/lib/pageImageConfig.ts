export type PageSlot = {
  path: string;
  label: string;
  slots: string[];
};

export type CategoryConfig = {
  category: string;
  pages: PageSlot[];
};

export const pageImageSlots: CategoryConfig[] = [
  {
    category: 'トップページ',
    pages: [
      {
        path: '/homepage',
        label: 'トップページ',
        slots: [
          'hero-slide1', 'hero-slide2', 'hero-slide3',
          'facility1', 'facility2', 'facility3', 'facility4',
          'feature1', 'feature2', 'feature3', 'feature4', 'feature5',
          'case1-before', 'case1-after', 'case2-before', 'case2-after',
          'case3-before', 'case3-after', 'case4-before', 'case4-after',
          'step1', 'step2', 'step3', 'step4', 'step5', 'step6',
        ],
      },
    ],
  },
  {
    category: '共通',
    pages: [
      { path: '/shared', label: '共通画像', slots: ['director-photo', 'layout-hero'] },
    ],
  },
  {
    category: 'インプラント',
    pages: [
      {
        path: '/implant',
        label: 'インプラントトップ',
        slots: [
          'hero', 'hero-slide1', 'hero-slide2', 'hero-slide3',
          'intro', 'about-structure', 'bg-problems', 'bg-director', 'links-banner',
          'before-extraction', 'before-bone',
          'clinic1', 'clinic2', 'clinic3', 'clinic4',
          'reason1', 'reason2', 'reason3', 'reason4', 'reason5', 'reason6',
          'treatment-method1', 'treatment-method2', 'treatment-method3',
          'treatment-type1', 'treatment-type2', 'treatment-type3',
        ],
      },
      { path: '/implant/cost', label: 'インプラントの費用', slots: ['hero'] },
      { path: '/implant/flow', label: 'インプラントの流れ', slots: ['hero'] },
      { path: '/implant/safety', label: 'インプラントの安全性', slots: ['hero'] },
      { path: '/implant/comparison', label: 'インプラント比較', slots: ['hero'] },
      { path: '/implant/qa', label: 'インプラントQ&A', slots: ['hero'] },
    ],
  },
  {
    category: 'こども矯正（メイン）',
    pages: [
      {
        path: '/kidsortho',
        label: 'こども矯正トップ',
        slots: [
          'hero', 'hero-mobile',
          'feature1', 'feature2', 'feature3', 'feature4', 'feature5',
          'flow1', 'flow2', 'flow3', 'flow4', 'flow5',
        ],
      },
      { path: '/kidsortho/timing', label: '矯正開始のベストタイミング', slots: ['hero'] },
      { path: '/kidsortho/cost', label: '小児矯正の費用', slots: ['hero'] },
      { path: '/kidsortho/duration', label: '治療期間', slots: ['hero'] },
      { path: '/kidsortho/avoid-regret', label: '後悔しないために', slots: ['hero'] },
    ],
  },
  {
    category: 'こども矯正（トレーニング・教育）',
    pages: [
      { path: '/kidsortho/mft-training', label: 'MFTトレーニング', slots: ['hero'] },
      { path: '/kidsortho/gum-training', label: 'ガムトレーニング', slots: ['hero'] },
      { path: '/kidsortho/posture-improvement', label: '姿勢改善', slots: ['hero'] },
      { path: '/kidsortho/food-education', label: '食育', slots: ['hero'] },
      { path: '/kidsortho/mouth-breathing-risks', label: '口呼吸のリスク', slots: ['hero'] },
      { path: '/kidsortho/pain-management', label: '痛み対策', slots: ['hero'] },
      { path: '/kidsortho/sports-and-music', label: 'スポーツ・楽器', slots: ['hero'] },
      { path: '/kidsortho/underbite-natural-cure', label: '受け口の自然治癒', slots: ['hero'] },
    ],
  },
  {
    category: 'こども矯正（不正咬合タイプ）',
    pages: [
      { path: '/kidsortho/types', label: '不正咬合の種類一覧', slots: ['hero'] },
      { path: '/kidsortho/types/crowding', label: '叢生（ガタガタ）', slots: ['hero'] },
      { path: '/kidsortho/types/spacing', label: '空隙歯列（すきっ歯）', slots: ['hero'] },
      { path: '/kidsortho/types/overbite', label: '上顎前突（出っ歯）', slots: ['hero'] },
      { path: '/kidsortho/types/underbite', label: '下顎前突（受け口）', slots: ['hero'] },
      { path: '/kidsortho/types/deepbite', label: '過蓋咬合', slots: ['hero'] },
      { path: '/kidsortho/types/openbite', label: '開咬', slots: ['hero'] },
      { path: '/kidsortho/types/crossbite', label: '交叉咬合', slots: ['hero'] },
    ],
  },
  {
    category: 'こども矯正（装置）',
    pages: [
      {
        path: '/kidsortho/appliances',
        label: '装置の種類一覧',
        slots: [
          'hero',
          'preortho', 'expander', 'functional', 'mft-trainer', 'headgear',
          'chin-cap', 'quad-helix', 'lingual-arch', 'rapid-expander',
          'wire-braces', 'clear-aligner',
        ],
      },
      { path: '/kidsortho/appliances/expander', label: '拡大床', slots: ['hero'] },
      { path: '/kidsortho/appliances/chin-cap', label: 'チンキャップ', slots: ['hero'] },
      { path: '/kidsortho/appliances/functional', label: '機能的矯正装置', slots: ['hero'] },
      { path: '/kidsortho/appliances/functional-mouthpiece', label: '機能的マウスピース', slots: ['hero'] },
    ],
  },
  {
    category: '虫歯',
    pages: [
      {
        path: '/cavity',
        label: '虫歯トップ',
        slots: [
          'hero-slide1', 'hero-slide2', 'hero-slide3',
          'case1', 'case2', 'case3',
          'feature1', 'feature2', 'feature3', 'feature4', 'feature5',
          'step1', 'step2', 'step3', 'step4', 'step5',
        ],
      },
      { path: '/cavity/stages', label: '虫歯の進行段階', slots: ['hero'] },
      { path: '/cavity/cost', label: '虫歯治療の費用', slots: ['hero'] },
      { path: '/cavity/pain', label: '虫歯の痛み', slots: ['hero'] },
      { path: '/cavity/treatment-methods', label: '虫歯の治療法', slots: ['hero'] },
    ],
  },
  {
    category: 'セラミック',
    pages: [
      {
        path: '/ceramic',
        label: 'セラミックトップ',
        slots: [
          'hero', 'hero-slide1', 'hero-slide2', 'hero-slide3',
          'case1', 'case2', 'case3',
          'feature1', 'feature2', 'feature3', 'feature4', 'feature5',
          'step1', 'step2', 'step3', 'step4', 'step5',
        ],
      },
      { path: '/ceramic/cost', label: 'セラミックの費用', slots: ['hero'] },
      { path: '/ceramic/types', label: 'セラミックの種類', slots: ['hero'] },
      { path: '/ceramic/longevity', label: 'セラミックの寿命', slots: ['hero'] },
      { path: '/ceramic/vs-metal', label: 'セラミック vs 金属', slots: ['hero'] },
      { path: '/ceramic/case-studies', label: 'セラミック症例', slots: ['hero'] },
    ],
  },
  {
    category: '矯正歯科',
    pages: [
      {
        path: '/orthodontics',
        label: '矯正歯科トップ',
        slots: [
          'hero-slide1', 'hero-slide2', 'hero-slide3',
          'case1', 'case2', 'case3',
          'feature1', 'feature2', 'feature3', 'feature4', 'feature5',
          'step1', 'step2', 'step3', 'step4', 'step5', 'step6',
        ],
      },
      { path: '/orthodontics/adult', label: '大人の矯正', slots: ['hero'] },
      { path: '/orthodontics/cost', label: '矯正の費用', slots: ['hero'] },
      { path: '/orthodontics/types', label: '矯正の種類', slots: ['hero'] },
      { path: '/orthodontics/duration', label: '矯正の期間', slots: ['hero'] },
      { path: '/orthodontics/case-studies', label: '矯正の症例', slots: ['hero'] },
    ],
  },
  {
    category: '歯周病',
    pages: [
      {
        path: '/periodontal',
        label: '歯周病トップ',
        slots: [
          'hero-slide1', 'hero-slide2', 'hero-slide3',
          'feature1', 'feature2', 'feature3', 'feature4', 'feature5',
        ],
      },
      { path: '/periodontal/stages', label: '歯周病の進行段階', slots: ['hero'] },
      { path: '/periodontal/cost', label: '歯周病の費用', slots: ['hero', 'feature1', 'feature2', 'feature3', 'feature4'] },
      { path: '/periodontal/prevention', label: '歯周病の予防', slots: ['hero', 'feature1', 'feature2', 'feature3', 'feature4'] },
      { path: '/periodontal/treatment-methods', label: '歯周病の治療法', slots: ['hero', 'feature1', 'feature2', 'feature3', 'feature4'] },
      { path: '/periodontal/case-studies', label: '歯周病の症例', slots: ['hero', 'feature1', 'feature2', 'feature3', 'feature4', 'feature5'] },
    ],
  },
  {
    category: '予防歯科',
    pages: [
      {
        path: '/preventive',
        label: '予防歯科トップ',
        slots: [
          'hero-slide1', 'hero-slide2', 'hero-slide3',
          'cleaning-scaling', 'cleaning-pmtc',
          'case1', 'case2', 'case3',
          'feature1', 'feature2', 'feature3', 'feature4', 'feature5',
          'step1', 'step2', 'step3', 'step4',
        ],
      },
      { path: '/preventive/checkup', label: '定期検診', slots: ['hero'] },
      { path: '/preventive/cleaning', label: 'クリーニング', slots: ['hero'] },
      { path: '/preventive/cost', label: '予防歯科の費用', slots: ['hero'] },
      { path: '/preventive/fluoride', label: 'フッ素塗布', slots: ['hero'] },
    ],
  },
  {
    category: '根管治療',
    pages: [
      {
        path: '/root-canal',
        label: '根管治療トップ',
        slots: [
          'hero-slide1', 'hero-slide2', 'hero-slide3',
          'case1', 'case2', 'case3',
          'feature1', 'feature2', 'feature3', 'feature4', 'feature5',
          'step1', 'step2', 'step3', 'step4', 'step5',
        ],
      },
      { path: '/root-canal/cost', label: '根管治療の費用', slots: ['hero'] },
      { path: '/root-canal/duration', label: '根管治療の期間', slots: ['hero'] },
      { path: '/root-canal/pain', label: '根管治療の痛み', slots: ['hero'] },
      { path: '/root-canal/types', label: '根管治療の種類', slots: ['hero'] },
      { path: '/root-canal/case-studies', label: '根管治療の症例', slots: ['hero'] },
    ],
  },
  {
    category: 'ホワイトニング',
    pages: [
      {
        path: '/whitening',
        label: 'ホワイトニングトップ',
        slots: [
          'hero-slide1', 'hero-slide2', 'hero-slide3',
          'case1', 'case2', 'case3',
          'feature1', 'feature2', 'feature3', 'feature4', 'feature5',
        ],
      },
      { path: '/whitening/cost', label: 'ホワイトニングの費用', slots: ['hero'] },
      { path: '/whitening/types', label: 'ホワイトニングの種類', slots: ['hero'] },
      { path: '/whitening/duration', label: 'ホワイトニングの期間', slots: ['hero'] },
      { path: '/whitening/safety', label: 'ホワイトニングの安全性', slots: ['hero'] },
      { path: '/whitening/comparison', label: 'ホワイトニング比較', slots: ['hero'] },
    ],
  },
  {
    category: 'マウスピース矯正',
    pages: [
      {
        path: '/mouthpiece',
        label: 'マウスピース矯正トップ',
        slots: [
          'hero-slide1', 'hero-slide2', 'hero-slide3',
          'case1', 'case2', 'case3',
          'feature1', 'feature2', 'feature3', 'feature4', 'feature5',
          'step1', 'step2', 'step3', 'step4', 'step5',
        ],
      },
    ],
  },
  {
    category: 'こども予防',
    pages: [
      {
        path: '/kids-preventive',
        label: 'こども予防トップ',
        slots: [
          'hero', 'hero-slide1', 'hero-slide2', 'hero-slide3',
          'feature1', 'feature2', 'feature3', 'feature4',
          'step1', 'step2', 'step3', 'step4', 'step5',
        ],
      },
      { path: '/kids-preventive/overcoming-fear', label: '歯医者嫌い克服', slots: ['hero'] },
    ],
  },
  {
    category: '食育・口腔教育',
    pages: [
      {
        path: '/oral-education',
        label: '食育・口腔教育トップ',
        slots: [
          'hero-slide1', 'hero-slide2', 'hero-slide3',
          'feature1', 'feature2', 'feature3', 'feature4',
          'step1', 'step2', 'step3', 'step4',
        ],
      },
    ],
  },
  {
    category: '口腔外科・その他',
    pages: [
      {
        path: '/concerns/oral-surgery',
        label: '口腔外科',
        slots: [
          'hero-slide1', 'hero-slide2', 'hero-slide3',
          'area1', 'area2', 'area3',
          'feature1', 'feature2', 'feature3', 'feature4',
          'flow1', 'flow2', 'flow3', 'flow4', 'flow5',
        ],
      },
      { path: '/concerns/trauma', label: '外傷', slots: ['hero'] },
      {
        path: '/wisdom',
        label: '親知らず',
        slots: [
          'hero-bg',
          'step1', 'step2', 'step3', 'step4', 'step5', 'step6',
        ],
      },
    ],
  },
  {
    category: '症例・設備',
    pages: [
      {
        path: '/cases',
        label: '症例紹介',
        slots: [
          'case1-before', 'case1-after', 'case2-before', 'case2-after',
          'case3-before', 'case3-after', 'case4-before', 'case4-after',
        ],
      },
      {
        path: '/facilities',
        label: '院内設備',
        slots: [
          'facility1', 'facility2', 'facility3', 'facility4',
          'facility5', 'facility6', 'facility7', 'facility8',
        ],
      },
    ],
  },
  {
    category: 'TreatmentLayout使用ページ',
    pages: [
      { path: '/surgery/tmj', label: '顎関節症', slots: ['hero', 'feature1', 'feature2', 'feature3', 'feature4'] },
      { path: '/surgery/wisdom-tooth', label: '親知らず（治療レイアウト）', slots: ['hero', 'feature1', 'feature2', 'feature3', 'feature4'] },
      { path: '/general/bad-breath', label: '口臭', slots: ['hero', 'feature1', 'feature2', 'feature3', 'feature4'] },
      { path: '/_implant', label: 'インプラント（旧）', slots: ['hero', 'feature1', 'feature2', 'feature3', 'feature4'] },
    ],
  },
];
