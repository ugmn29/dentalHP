import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '歯周病の治療方法｜基本治療から外科治療・再生療法まで｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '歯周病の治療方法を詳しく解説。スケーリング、ルートプレーニング、フラップ手術、歯周組織再生療法など、段階に応じた治療法をご紹介します。',
  keywords: '歯周病,治療方法,スケーリング,ルートプレーニング,フラップ手術,再生療法,エムドゲイン,リグロス,F歯科・矯正歯科 豊洲プライムスクエア院',
};

export default function TreatmentMethodsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
