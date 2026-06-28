import React from 'react';
import { PageImage } from '@/components/PageImage';
import { ReservationCta, type ReservationCtaTone } from '@/components/ReservationCta';

interface AuthorBioProps {
  showLastUpdated?: boolean;
  lastUpdated?: string;
  showCta?: boolean;
  ctaTone?: ReservationCtaTone;
  ctaTitle?: string;
  ctaBody?: string;
}

const careerItems = [
  '大阪大学歯学部 卒業',
  '医療法人同仁会ワタナベ歯科医院にて研修医指導医・診療主任を歴任',
  '駒沢公園通り西垣歯科・矯正歯科 副院長',
  '小児歯科部門の立ち上げ',
  'Fデンタルオフィス 豊洲プライムスクエア院 開業',
  '咬合育成研究会監修 生活習慣改善アプリの開発',
] as const;

export function AuthorBio({
  showLastUpdated = true,
  lastUpdated,
  showCta = true,
  ctaTone = 'default',
  ctaTitle,
  ctaBody,
}: AuthorBioProps) {
  const currentDate = lastUpdated || new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <>
      {showCta && (
        <ReservationCta
          className="px-0 pb-10 pt-0"
          tone={ctaTone}
          title={ctaTitle}
          body={ctaBody}
        />
      )}

      <section className="mt-0 rounded-2xl border border-[#E6E3DC] bg-[#FAFAF7] p-6 md:p-8">
      <h3 className="mb-8 flex items-center gap-2 text-2xl font-bold text-[#2C2C2A]">
        <svg className="w-6 h-6 text-[#0a8a85]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        この記事の監修者
      </h3>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[180px_1fr] md:gap-10 lg:grid-cols-[220px_1fr]">
        {/* プロフィール画像 */}
        <div className="mx-auto w-full max-w-[180px] lg:max-w-[220px]">
          <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-[#E6E3DC] bg-white shadow-sm">
            <PageImage
              path="/homepage"
              imageId="doctor"
              alt="院長 福永真大"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-center text-sm text-[#6B6B68]">
            <span className="mb-1 block text-xs">院長</span>
            <span className="font-serif text-lg text-[#2C2C2A]">福永 真大</span>
          </p>
        </div>

        {/* プロフィール情報 */}
        <div>
          <div className="mb-7 border-b border-[#E6E3DC] pb-6">
            <p className="mb-2 text-xs tracking-[0.22em] text-[#6B6B68]">DIRECTOR / DENTIST</p>
            <h4 className="font-serif text-2xl text-[#2C2C2A] md:text-3xl">
              福永 真大
            </h4>
            <p className="mt-2 text-xs text-[#6B6B68] md:text-sm">
              Masahiro Fukunaga / 院長・歯科医師
            </p>
            <p className="mt-1 text-xs text-[#6B6B68] md:text-sm">
              Fデンタルオフィス 豊洲プライムスクエア院
            </p>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr]">
            <div className="rounded-2xl border border-[#E6E3DC] bg-white p-5 md:p-6">
              <p className="mb-4 text-xs font-medium tracking-[0.22em] text-[#0a8a85]">CAREER</p>
              <ul className="space-y-2.5 text-sm leading-[1.9] text-[#6B6B68] md:text-[15px]">
                {careerItems.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-[0.7em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0a8a85]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-[#E6E3DC] bg-white p-5 md:p-6">
                <p className="mb-4 text-xs font-medium tracking-[0.22em] text-[#0a8a85]">専門分野</p>
                <p className="text-sm leading-[2] text-[#6B6B68] md:text-[15px]">
                  矯正歯科、小児歯科、予防歯科、審美歯科
                </p>
              </div>

              <div className="rounded-2xl border border-[#E6E3DC] bg-white p-5 md:p-6">
                <p className="mb-4 text-xs font-medium tracking-[0.22em] text-[#0a8a85]">所属学会・資格</p>
                <p className="text-sm leading-[2] text-[#6B6B68] md:text-[15px]">
                  日本小児歯科学会 / 日本矯正歯科学会 / 日本審美歯科学会 / 歯科医師免許
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#E6E3DC] bg-white p-6 md:p-8">
            <h4 className="mb-5 font-serif text-2xl leading-[1.7] text-[#2C2C2A] md:text-3xl">
              対症療法ではなく、<br />
              <span className="italic text-[#0a8a85]">原因療法</span>を。
            </h4>
            <div className="space-y-5 text-sm leading-[2.1] text-[#6B6B68] md:text-base">
              <p>
                私が大切にしているのは、<strong className="text-[#2C2C2A]">「症状を治す」のではなく「原因を取り除く」</strong>という考え方です。父は30年近く小児矯正に携わってきた歯科医師で、その背中から、症状の奥にある根本原因に向き合うことの大切さを学びました。
              </p>
              <p>
                大阪大学歯学部を卒業後、医療法人同仁会ワタナベ歯科医院にて一般歯科・インプラント・矯正・審美治療など幅広い症例を経験し、研修医指導医も務めました。私自身は大学まで野球に打ち込み、噛み合わせや口呼吸がパフォーマンスに直結することも実感してきました。
              </p>
              <p>
                父から受け継いだ口腔育成への想い、臨床で培った技術、そして患者様に「伝わる」情報発信力。この3つを軸に、お子様の口腔育成から大人の矯正・審美治療まで、原因にアプローチする<strong className="text-[#2C2C2A]">根本治療</strong>を提供します。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 更新日・監修日 */}
      {showLastUpdated && (
        <div className="mt-6 pt-4 border-t border-[#E6E3DC]">
          <div className="flex flex-wrap gap-4 text-sm text-[#6B6B68]">
            <p>
              <span className="font-semibold text-[#0a8a85]">監修日:</span> {currentDate}
            </p>
            <p>
              <span className="font-semibold text-[#0a8a85]">最終更新日:</span> {currentDate}
            </p>
          </div>
        </div>
      )}
      </section>
    </>
  );
}
