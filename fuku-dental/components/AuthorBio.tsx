import React from 'react';

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
    <section className="mt-16 pt-8 border-t-2 border-[#395b45]/20 bg-gradient-to-b from-[#FAFAFA] to-white rounded-lg p-8">
      <h3 className="text-2xl font-bold text-[#2d4835] mb-6 flex items-center gap-2">
        <svg className="w-6 h-6 text-[#395b45]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        この記事の監修者
      </h3>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* プロフィール画像 */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#395b45] shadow-lg bg-gradient-to-br from-[#c8ddd0] to-[#e8f2ed]">
            <img
              src="https://placehold.co/200x200/e8f2ed/2d4835?text=Doctor"
              alt="院長 プロフィール写真"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* プロフィール情報 */}
        <div className="flex-1">
          <div className="mb-4">
            <h4 className="text-xl font-bold text-[#2d4835] mb-1">
              歯科医師
            </h4>
            <p className="text-lg font-bold text-[#2d4835] mb-1">
              F歯科・矯正歯科 豊洲プライムスクエア院
            </p>
            <p className="text-lg font-bold text-[#2d4835]">
              院長 福永 真大
              <span className="ml-2 text-sm font-normal text-[#395b45]">（ふくなが まさひろ）</span>
            </p>
          </div>

          <div className="space-y-3">
            {/* 資格・免許 */}
            <div className="flex items-start gap-2">
              <span className="text-[#395b45] font-semibold min-w-[80px] text-sm">資格・免許:</span>
              <div className="text-sm text-gray-700">
                <p>歯科医師免許</p>
              </div>
            </div>

            {/* 専門分野 */}
            <div className="flex items-start gap-2">
              <span className="text-[#395b45] font-semibold min-w-[80px] text-sm">専門分野:</span>
              <p className="text-sm text-gray-700">
                矯正歯科、小児歯科、予防歯科、審美歯科
              </p>
            </div>

            {/* 所属学会 */}
            <div className="flex items-start gap-2">
              <span className="text-[#395b45] font-semibold min-w-[80px] text-sm">所属学会:</span>
              <div className="text-sm text-gray-700">
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
              <span className="text-[#395b45] font-semibold min-w-[80px] text-sm">経歴:</span>
              <div className="text-sm text-gray-700 space-y-1">
                <p>大阪大学卒業</p>
                <p>大手医療法人勤務・研修医指導医を歴任</p>
                <p>都内歯科医院 副院長</p>
                <p>F歯科・矯正歯科 豊洲プライムスクエア院 開業</p>
              </div>
            </div>

            {/* メッセージ */}
            <div className="mt-4 p-4 bg-white rounded-lg border border-[#395b45]/20">
              <p className="text-sm text-gray-700 leading-relaxed">
                患者様一人ひとりに最適な治療をご提供できるよう、科学的根拠に基づいた診療を心がけています。
                お口の健康を通じて、皆様の豊かな人生をサポートさせていただきます。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 更新日・監修日 */}
      {showLastUpdated && (
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-[#395b45]">監修日:</span> {currentDate}
            </p>
            <p>
              <span className="font-semibold text-[#395b45]">最終更新日:</span> {currentDate}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
