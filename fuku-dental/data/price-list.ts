export type PriceItem = {
  name: string;
  price: string;
  note?: string;
};

export type PriceCategory = {
  id: string;
  title: string;
  items: PriceItem[];
};

export const priceCategories: PriceCategory[] = [
  {
    id: 'lab-work',
    title: '技工物',
    items: [
      { name: '仮歯', price: '¥5,500' },
    ],
  },
  {
    id: 'anterior-prosthetics',
    title: '前歯補綴',
    items: [
      { name: 'ジルコニアセラミック', price: '¥176,000' },
      { name: 'ジルコニア', price: '¥143,000' },
    ],
  },
  {
    id: 'posterior-prosthetics',
    title: '大臼歯補綴',
    items: [
      { name: 'ハイブリッド', price: '¥143,000' },
      { name: 'ジルコニア', price: '¥143,000' },
      { name: 'ゴールド', price: '¥220,000' },
    ],
  },
  {
    id: 'inlay-onlay',
    title: 'インレー・アンレー',
    items: [
      { name: 'e-max', price: '¥77,000' },
      { name: 'ゴールド', price: '¥132,000' },
    ],
  },
  {
    id: 'cr',
    title: '修復',
    items: [
      { name: 'ダイレクトボンディング', price: '¥44,000' },
    ],
  },
  {
    id: 'kids-ortho',
    title: '小児矯正（3歳〜18歳・6歳臼歯の移動まで）',
    items: [
      { name: '検査', price: '¥0' },
      { name: '相談', price: '¥0' },
      { name: '調整料', price: '¥0' },
      { name: 'プレオルソ+付加装置', price: '¥132,000' },
      { name: '拡大床', price: '¥495,000' },
      { name: 'マウスピース', price: '¥595,000' },
      { name: 'ワイヤー矯正', price: '¥660,000' },
    ],
  },
  {
    id: 'adult-ortho',
    title: '成人矯正（19歳以上〜全ての歯の移動）',
    items: [
      { name: '検査', price: '¥11,000' },
      { name: '診断・治療計画説明', price: '¥22,000' },
      { name: 'マウスピース矯正（軽度）', price: '¥550,000', note: '調整料込みの総額です。' },
      { name: 'マウスピース矯正（中等度）', price: '¥660,000', note: '調整料込みの総額です。' },
      { name: 'マウスピース矯正（重度）', price: '¥770,000', note: '調整料込みの総額です。' },
      { name: 'マウスピース矯正（付加装置あり）', price: '¥880,000', note: '調整料込みの総額です。' },
      { name: 'ワイヤー矯正', price: '¥935,000', note: '月々の調整料は別途かかります。' },
      { name: 'ホワイトワイヤー使用の場合', price: '¥110,000' },
      { name: '毎月調整料', price: '¥5,500 / 月', note: '24回〜36回を目安にかかります。' },
      { name: '便宜抜歯（必要な場合）', price: '¥7,700 / 本' },
      { name: 'アンカースクリュー（必要な場合）', price: '¥44,000 / 本' },
    ],
  },
  {
    id: 'implant',
    title: 'インプラント',
    items: [
      { name: '簡単', price: '¥495,000' },
      { name: '難症例', price: '¥595,000' },
      { name: '10年保証', price: '¥33,000' },
    ],
  },
  {
    id: 'root-canal',
    title: '精密根管治療',
    items: [
      { name: '前歯', price: '¥22,000' },
      { name: '小臼歯', price: '¥22,000' },
      { name: '大臼歯', price: '¥22,000' },
    ],
  },
  {
    id: 'surgery',
    title: '歯を残す治療',
    items: [
      { name: 'クラウンレングスニング', price: '¥55,000' },
      { name: 'MTM', price: '¥55,000' },
    ],
  },
  {
    id: 'whitening',
    title: 'ホワイトニング',
    items: [
      { name: 'オフィスホワイトニング３回', price: '¥99,000' },
      { name: 'オフィスホワイトニング＋ホームホワイトニング', price: '¥66,000' },
      { name: 'ホームホワイトニング', price: '¥36,500' },
      { name: 'オフィスホワイトニング', price: '¥36,500' },
      { name: 'ウォーキングブリーチ', price: '¥44,000' },
    ],
  },
  {
    id: 'cleaning',
    title: 'クリーニング',
    items: [
      { name: 'エアフロー', price: '¥8,800' },
    ],
  },
  {
    id: 'iv-sedation',
    title: '静脈内鎮静',
    items: [
      { name: '静脈内鎮静', price: '¥99,000' },
    ],
  },
  {
    id: 'metal-denture',
    title: '金属床義歯',
    items: [
      { name: '総義歯', price: '¥550,000' },
      { name: '部分床義歯', price: '¥440,000' },
    ],
  },
];

export function getPriceCategory(id: string) {
  return priceCategories.find((category) => category.id === id);
}

export function getPriceCategories(ids: string[]) {
  return ids
    .map((id) => getPriceCategory(id))
    .filter((category): category is PriceCategory => Boolean(category));
}
