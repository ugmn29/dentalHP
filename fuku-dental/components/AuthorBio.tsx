import React from 'react';
import { PageImage } from '@/components/PageImage';

interface AuthorBioProps {
  showLastUpdated?: boolean;
  lastUpdated?: string;
}

export function AuthorBio({ showLastUpdated = true, lastUpdated }: AuthorBioProps) {
  const currentDate = lastUpdated || new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <section className="mt-16 pt-8 border-t border-[#D8DBE6] bg-[#FAFAF8] rounded-[2rem] p-8 md:p-10 shadow-sm">
      <h3 className="text-2xl font-medium text-[#5A4D41] mb-6 flex items-center gap-2 tracking-widest">
        <svg className="w-6 h-6 text-[#8B92AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        この記事の監修者
      </h3>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* プロフィール画像 */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#8B92AB] shadow-md bg-gradient-to-br from-[#EDEEF3] to-[#D8DBE6]">
            <PageImage
              path="/homepage"
              imageId="doctor"
              alt="院長 プロフィール写真"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* プロフィール情報 */}
        <div className="flex-1">
          <div className="mb-4">
            <h4 className="text-xl font-medium text-[#5A4D41] mb-1 tracking-wider">
              歯科医師
            </h4>
            <p className="text-lg font-medium text-[#5A4D41] mb-1">
              Fデンタルオフィス 豊洲プライムスクエア院
            </p>
            <p className="text-lg font-medium text-[#5A4D41]">
              院長 福永 真大
              <span className="ml-2 text-sm font-normal text-[#8B92AB]">（ふくなが まさひろ）</span>
            </p>
          </div>

          <div className="space-y-3">
            {/* 資格・免許 */}
            <div className="flex items-start gap-2">
              <span className="text-[#8B92AB] font-semibold min-w-[80px] text-sm">資格・免許:</span>
              <div className="text-sm text-[#5A4D41]">
                <p>歯科医師免許</p>
              </div>
            </div>

            {/* 専門分野 */}
            <div className="flex items-start gap-2">
              <span className="text-[#8B92AB] font-semibold min-w-[80px] text-sm">専門分野:</span>
              <p className="text-sm text-[#5A4D41]">
                矯正歯科、小児歯科、予防歯科、審美歯科
              </p>
            </div>

            {/* 所属学会 */}
            <div className="flex items-start gap-2">
              <span className="text-[#8B92AB] font-semibold min-w-[80px] text-sm">所属学会:</span>
              <div className="text-sm text-[#5A4D41]">
                <ul className="list-disc list-inside space-y-1">
                  <li>日本矯正歯科学会</li>
                  <li>日本小児歯科学会</li>
                  <li>日本歯周病学会</li>
                  <li>日本口腔インプラント学会</li>
                </ul>
              </div>
            </div>

            {/* 経歴 */}
            <div className="flex items-start gap-2">
              <span className="text-[#8B92AB] font-semibold min-w-[80px] text-sm">経歴:</span>
              <div className="text-sm text-[#5A4D41] space-y-1">
                <p>大阪大学卒業</p>
                <p>大手医療法人勤務・研修医指導医を歴任</p>
                <p>都内歯科医院 副院長</p>
                <p>Fデンタルオフィス 豊洲プライムスクエア院 開業</p>
              </div>
            </div>

            {/* メッセージ */}
            <div className="mt-4 p-4 bg-white rounded-2xl border border-[#D8DBE6]">
              <p className="text-sm text-[#5A4D41] leading-relaxed">
                患者様一人ひとりに最適な治療をご提供できるよう、科学的根拠に基づいた診療を心がけています。
                お口の健康を通じて、皆様の豊かな人生をサポートさせていただきます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 更新日・監修日 */}
      {showLastUpdated && (
        <div className="mt-6 pt-4 border-t border-[#D8DBE6]">
          <div className="flex flex-wrap gap-4 text-sm text-[#5A4D41]/70">
            <p>
              <span className="font-semibold text-[#8B92AB]">監修日:</span> {currentDate}
            </p>
            <p>
              <span className="font-semibold text-[#8B92AB]">最終更新日:</span> {currentDate}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
