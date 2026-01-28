export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  patient: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  date: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'こども矯正による歯並び改善',
    category: '矯正歯科',
    patient: '10代・女性',
    duration: '1年6ヶ月',
    beforeImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1609840114035-3c981993b9ee?auto=format&fit=crop&q=80&w=800',
    description: '成長期を利用した矯正治療により、抜歯をせずに美しい歯並びを実現しました。お顔全体のバランスも改善され、患者さんにも大変満足いただいています。',
    date: '2024-12-01',
  },
  {
    id: '2',
    title: 'ホワイトニングで自然な白い歯に',
    category: 'ホワイトニング',
    patient: '20代・女性',
    duration: '3週間',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    description: 'オフィスホワイトニングとホームホワイトニングを組み合わせることで、自然で美しい白さを実現しました。知覚過敏にも配慮した治療を行いました。',
    date: '2024-11-15',
  },
  {
    id: '3',
    title: 'インプラント治療による咬合機能の回復',
    category: 'インプラント',
    patient: '50代・男性',
    duration: '6ヶ月',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    description: '失った歯をインプラントで補うことで、しっかりと噛める状態に回復しました。見た目も自然で、患者さんのQOLが大きく向上しました。',
    date: '2024-10-20',
  },
  {
    id: '4',
    title: 'セラミック治療で美しい前歯に',
    category: '審美歯科',
    patient: '30代・女性',
    duration: '2ヶ月',
    beforeImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1609840114035-3c981993b9ee?auto=format&fit=crop&q=80&w=800',
    description: '変色した前歯をセラミッククラウンで治療。自然な色調と形態で、笑顔に自信が持てるようになりました。',
    date: '2024-09-10',
  },
  {
    id: '5',
    title: '歯周病治療による歯茎の健康回復',
    category: '歯周病治療',
    patient: '40代・男性',
    duration: '4ヶ月',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    description: '進行した歯周病に対して、丁寧なクリーニングとブラッシング指導を行い、歯茎の状態が大きく改善しました。',
    date: '2024-08-05',
  },
  {
    id: '6',
    title: '虫歯治療と予防プログラム',
    category: '一般歯科',
    patient: '20代・男性',
    duration: '1ヶ月',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    description: '複数の虫歯を治療し、その後の予防プログラムで新たな虫歯の発生を防いでいます。定期検診で健康な歯を維持しています。',
    date: '2024-07-20',
  },
];

export const categories = [
  '全て',
  '矯正歯科',
  'ホワイトニング',
  'インプラント',
  '審美歯科',
  '歯周病治療',
  '一般歯科',
];
