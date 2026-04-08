export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  thumbnail?: string;
  summary: string;
  content: string;
}

export const blogPosts: BlogPost[] = [];

export const blogCategories = [
  '全て',
  'お知らせ',
  'こども矯正',
  '予防歯科',
  '小児歯科',
  '一般歯科',
  '審美歯科',
  'おとな矯正',
];
