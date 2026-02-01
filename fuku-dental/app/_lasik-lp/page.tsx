"use client";

import React from 'react';
import Image from 'next/image';

export default function LasikLPPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <div className="relative h-[76px] w-full px-4 md:px-6 lg:px-0 lg:max-w-[1920px] lg:mx-auto">
          {/* Logo */}
          <div className="absolute left-4 md:left-5 top-[13px] w-[150px] md:w-[226px] h-[50px]">
            <img
              src="http://localhost:3845/assets/12f995f800ae6a21d71a4c89377f93bc865a2049.png"
              alt="中原眼科"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Contact Info - Hidden on mobile, visible on larger screens */}
          <div className="hidden lg:flex absolute right-[76px] top-0 h-[76px] bg-white px-6 items-center gap-4">
            <button className="bg-[#6f6032] text-white px-4 py-2 text-sm tracking-wider hover:bg-[#5a4d29] transition-colors">
              お問い合わせ
            </button>
            <div className="flex items-center gap-2">
              <span className="text-[#151f2b] text-lg font-medium">Tel.</span>
              <span className="text-[#151f2b] text-2xl font-bold tracking-wider">042-851-7171</span>
            </div>
          </div>

          {/* Menu Button */}
          <div className="absolute right-0 top-0 w-[76px] h-[76px] bg-[#6f6032] flex flex-col items-center justify-center cursor-pointer hover:bg-[#5a4d29] transition-colors">
            <div className="w-[38px] h-px bg-white mb-2"></div>
            <span className="text-white text-sm tracking-wide">menu</span>
            <div className="w-[38px] h-px bg-white mt-2"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen mt-[76px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="http://localhost:3845/assets/b19dfda40dbd48bb93d657dba78954596e5b7cc8.png"
            alt="中原眼科のプレミアムレーシック手術"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-8 lg:px-[150px] py-2 md:py-2">
          <h1 className="text-white text-[28px] md:text-4xl lg:text-5xl font-serif tracking-[0.1em] lg:tracking-[12px] mb-4 md:mb-8 leading-tight"
              style={{ textShadow: '0px 0px 14px rgba(255,255,255,0.58)' }}>
            中原眼科の<br />
            <span className="bg-gradient-to-r from-white to-[#f9e0a7] bg-clip-text text-transparent">
              プレミアムレーシック
            </span>
            手術
          </h1>

          <div className="w-full max-w-[810px] h-px bg-gradient-to-r from-[#8fa0c3] to-transparent mb-2 md:mb-4"></div>

          <h2 className="text-white text-[16px] md:text-2xl lg:text-3xl font-serif tracking-wider mb-3 md:mb-4">
            生まれ変わった新しいレーシック手術
          </h2>

          <div className="w-full max-w-[810px] h-px bg-gradient-to-r from-[#8fa0c3] to-transparent mb-8 md:mb-12"></div>

          {/* Feature Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-5 mb-8 max-w-[340px] md:max-w-none mx-0">
            {/* Badge 1 */}
            <div className="aspect-square relative">
              <img
                src="http://localhost:3845/assets/1971d027b10ea2a726bb3779c47ebb8742423dfa.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-1.5 md:p-2">
                <p className="text-[#a07b09] text-[10px] md:text-base lg:text-xl font-semibold tracking-wide mb-0.5">厚生労働省</p>
                <p className="text-[#a07b09] text-[10px] md:text-base lg:text-xl font-semibold tracking-wide">認可<span className="text-[#001a3b]">の</span></p>
                <p className="text-[#001a3b] text-[10px] md:text-base lg:text-xl font-semibold tracking-wide">レーザー機器</p>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="aspect-square relative">
              <img
                src="http://localhost:3845/assets/45a4807839379da160e04856bcad5fa99ffd5423.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-1.5 md:p-2">
                <p className="text-[#001a3b] text-[10px] md:text-base lg:text-xl font-semibold tracking-wide mb-0.5">年間手術実績</p>
                <div className="flex items-baseline flex-wrap justify-center gap-0.5">
                  <span className="text-[#a07b09] text-[14px] md:text-xl lg:text-2xl font-bold">3,000</span>
                  <span className="text-[#a07b09] text-[10px] md:text-base lg:text-xl font-semibold">件以上</span>
                  <span className="text-[#001a3b] text-[10px] md:text-base lg:text-xl font-semibold">の</span>
                </div>
                <p className="text-[#001a3b] text-[10px] md:text-base lg:text-xl font-semibold tracking-wide">執刀医</p>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="aspect-square relative">
              <img
                src="http://localhost:3845/assets/d0758385ab46070272bdee0e1e1838e7ae98c3bb.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-1.5 md:p-2">
                <p className="text-[#001a3b] text-[10px] md:text-base lg:text-xl font-semibold tracking-wide mb-0.5">手術時間</p>
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[#001a3b] text-[10px] md:text-base lg:text-xl font-semibold">両眼</span>
                  <span className="text-[#a07b09] text-[10px] md:text-base lg:text-xl font-semibold">約</span>
                  <span className="text-[#a07b09] text-[18px] md:text-3xl lg:text-4xl font-bold">10</span>
                  <span className="text-[#a07b09] text-[10px] md:text-base lg:text-xl font-semibold">分</span>
                </div>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="aspect-square relative">
              <img
                src="http://localhost:3845/assets/b119b7253cdb6c7ce386eff3b0dc80b34bf0ef96.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-[12px]"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center leading-tight p-1.5 md:p-2">
                <p className="text-[#001a3b] text-[10px] md:text-base lg:text-xl font-semibold tracking-wide leading-tight">LenSxを</p>
                <p className="text-[#001a3b] text-[10px] md:text-base lg:text-xl font-semibold tracking-wide leading-tight">併用した</p>
                <p className="text-[#a07b09] text-[10px] md:text-base lg:text-xl font-semibold tracking-wide leading-tight">次世代型</p>
                <p className="text-[#a07b09] text-[10px] md:text-base lg:text-xl font-semibold tracking-wide leading-tight">レーシック</p>
              </div>
            </div>
          </div>

          {/* Large Background Text */}
          <div className="absolute right-2 md:right-8 lg:right-0 bottom-[8%] md:bottom-[10%] text-right opacity-70">
            <p className="text-[32px] md:text-6xl xl:text-9xl font-serif tracking-[0.2em] md:tracking-widest leading-[1.1] md:leading-tight bg-gradient-to-b from-white to-[rgba(109,206,255,0.3)] bg-clip-text text-transparent">
              PREMIUM<br />
              LASIK SURGERY
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="bg-gray-900">
        {/* Feature 01 Section - 厚生労働省認可 */}
        <section className="relative py-2 md:py-2 lg:py-2 overflow-hidden" style={{ background: 'linear-gradient(180deg, #001a3b 0%, #002c55 100%)' }}>
          <div className="w-full mx-auto px-4 md:px-8 lg:px-[150px] xl:px-[250px]">
            <div className="text-center mb-12 md:mb-16">
              <p className="text-[#e1cd95] text-lg md:text-xl tracking-wider mb-4 md:mb-6" style={{ textShadow: '0px 0px 14px rgba(255,255,255,0.58)' }}>
                FEATURES OF PREMIUM LASIK
              </p>
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif tracking-wider leading-tight" style={{ textShadow: '0px 0px 14px rgba(255,255,255,0.58)' }}>
                中原眼科のレーシックは<br />
                これまでのレーシックを変えます
              </h2>
            </div>

            <div className="relative bg-[rgba(0,44,101,0.75)] p-6 md:p-12 lg:p-16 rounded-lg">
              {/* Feature 01 Content */}
              <div className="relative">
                <div className="hidden md:block absolute -left-4 lg:-left-8 top-0">
                  <span className="text-[120px] lg:text-[220px] font-bold bg-gradient-to-b from-[#e7d299] to-[rgba(0,0,0,0.3)] bg-clip-text text-transparent leading-none" style={{ WebkitTextFillColor: 'transparent' }}>
                    01
                  </span>
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                  <div className="pt-4 md:pt-8">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif mb-6 md:mb-8 tracking-wider leading-tight" style={{ textShadow: '0px 0px 14px rgba(255,255,255,0.58)' }}>
                      厚生労働省による<br />
                      薬事認可されたレーザー機器
                    </h3>

                    <div className="text-white space-y-4 md:space-y-6 text-sm md:text-base leading-relaxed tracking-wide">
                      <p>
                        当院で導入しているAlcon社の「WaveLight® EX500」は、<span className="text-[#cdae4e]">厚生労働省に認可</span>されているものになります。当院では、正規代理店の日本アルコン社より厚生労働省で認可を受けたものを導入しており、メーカーで定められた保守点検と部品交換を行っており、万全の状態をキープできるようにしております。同じレーザー機種でも個人輸入で購入しているものは厚生労働省未認可であり、厚生労働労働省の通達によりメーカーによる日本国内での点検、メンテナンスや修理を行うことが違反となっており、できない状況にありますので、<span className="text-[#cdae4e]">機械勝負のレーシックにおいては厚生労働省認可であることが当院では絶対的に重要</span>だと考えております。
                      </p>
                      <p>
                        レーシックの成績はレーザー機器の性能に依存します。現在日本で厚生省に認可を受けているレーザー機種は4種あります。EC5000(2006年認可)、VSIX(2008年認可)、MEL90(2014年認可)、そして当院で所持しているEX500が2023年に認可され発売となりました。この10年間、スマートフォンなどが発達したのと同様にレーザー機器も進歩しております。これ以外の機種や同機種でも厚生労働省認可という確認が取れないものに関しては、患者様自身の注意が必要です。
                      </p>
                      <p>
                        前述した通り、<span className="text-[#cdae4e]">術後の成績にはレーザーの性能が直結</span>します。性能に関しましては重要な点がいくつかあり。照射方式、そして照射スピードそしてレーザーが目から外れないようにする追従機能が重要になります。照射方式に関してはフライングスポット方式といわれる小さいスポットが角膜の好きな部分に自由に打つことで構築するような非常に細かい角膜の歪みまでも直すことができる方式が自由と考えています。また、照射スピードに関してはヘルツと言う数字で表され<span className="text-[#cdae4e]">EX 500 = 1秒間に500発のレーザー</span>を打つことができます。これは厚生労働省認可の機種の中では、最速であり、照射時間が短ければ短いほど精度も向上します。安全性の高い治療が可能となっております。
                      </p>
                      <p>
                        この機械は、世界で最も多く導入されているエキシマレーザーです。国内でも個人輸入で導入されているクリニックもございますが、<span className="text-[#cdae4e]">規定により正規のメンテナンスを受けられるのは、Alcon社を通じて導入した機械のみ</span>が対象となっております（2025年1月現在 全国で6施設のみ）。当院はこちらの基準も満たしておりますので、ご安心ください。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-6 lg:mt-0">
                    <img
                      src="http://localhost:3845/assets/985b0c997a66ad651a00b32f553253c5e2c8a764.png"
                      alt="WaveLight EX500"
                      className="w-full max-w-full lg:max-w-[710px] rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Wavefront Optimized Section */}
              <div className="mt-12 md:mt-16 lg:mt-20 border-2 border-[#8996b1] rounded-lg overflow-hidden">
                <div className="relative">
                  <img
                    src="http://localhost:3845/assets/c38924eb9c4250549885f7741a6e296090bf4f21.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />

                  <div className="relative z-10 p-6 md:p-8 lg:p-12">
                    <div className="text-center mb-8 md:mb-12 py-4 md:py-6 lg:py-8 bg-white/90 rounded-lg">
                      <h3 className="text-[#6f6032] text-lg md:text-xl lg:text-2xl font-semibold tracking-wider leading-relaxed px-4">
                        Wavefront-Optimized™の<br />
                        アブレーションプロファイルによって光学特性を維持
                      </h3>
                    </div>

                    <p className="text-white text-center mb-8 md:mb-12 text-sm md:text-base leading-relaxed px-4">
                      WaveLight® EX500エキシマレーザーで用いられているWavefront-Optimized™技術は、周辺部のレーザーパルスのバランスを
                      自動調整し、光学特性を維持します。
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                      <div>
                        <img
                          src="http://localhost:3845/assets/d4611b6a1c973193ec43b332f6ff159ee163f971.png"
                          alt="Wavefront Optimized 1"
                          className="w-full mb-4 rounded"
                        />
                        <div className="bg-[#001a3b] border border-white p-6 rounded">
                          <p className="text-white text-sm leading-relaxed">
                            レーザーパルスが周辺部に近づくにつれて、入射角により反射されるエネルギーの量が増加します。
                          </p>
                        </div>
                      </div>

                      <div>
                        <img
                          src="http://localhost:3845/assets/67aec2f7c38b025c2c04834ae6611febf45cf440.png"
                          alt="Wavefront Optimized 2"
                          className="w-full mb-4 rounded"
                        />
                        <div className="bg-[#001a3b] border border-white p-6 rounded">
                          <p className="text-white text-sm leading-relaxed">
                            Wavefront-Optimized™ のアブレーションプロファイルは、周辺部に多くのパルスを配置してエネルギー損失を補正します。
                          </p>
                        </div>
                      </div>

                      <div>
                        <img
                          src="http://localhost:3845/assets/18621421b69e04e8df0a5267258e1ce8a79da2d0.png"
                          alt="Wavefront Optimized 3"
                          className="w-full mb-4 rounded"
                        />
                        <div className="bg-[#001a3b] border border-white p-6 rounded">
                          <p className="text-white text-sm leading-relaxed">
                            周辺部の照射補正がされない場合、予定した切除深度に到達せず、自然な角膜形状が変化して球面収差が生じる可能性があります。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 02 Section - 年間手術実績 */}
        <section className="relative py-2 md:py-2 lg:py-2 overflow-hidden">
          <img
            src="http://localhost:3845/assets/b19dfda40dbd48bb93d657dba78954596e5b7cc8.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="relative z-10 w-full mx-auto px-4 md:px-8 lg:px-[150px] xl:px-[250px] grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="http://localhost:3845/assets/b19dfda40dbd48bb93d657dba78954596e5b7cc8.png"
                alt="年間手術実績3,000件を越えるサージャンが執刀"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>

            <div className="text-white order-1 lg:order-2">
              <div className="hidden md:block text-[120px] lg:text-[220px] font-bold bg-gradient-to-b from-[#e7d299] to-[rgba(0,0,0,0.3)] bg-clip-text text-transparent leading-none mb-4" style={{ WebkitTextFillColor: 'transparent' }}>
                02
              </div>
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-wider">
                  年間手術実績<br />
                  <span className="text-4xl md:text-5xl lg:text-6xl font-bold">3,000</span>件を越える<br />
                  サージャンが執刀
                </h3>
                <p className="text-base md:text-lg leading-relaxed">
                  当院院長の中原将光は、年間で3,000件以上の様々な眼科手術を行っております。個人でこの件数をこなす医師は全国でもごくわずかです。また、当院では大学病院でも困難だと判断されたオペも紹介されており、数多くの患者さんの目を治療してきております。中原院長の手術を希望して、全国からご来院いただいております。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature 03 Section - LenSx */}
        <section className="relative py-2 md:py-2 lg:py-2" style={{ background: 'linear-gradient(180deg, #001a3b 0%, #002c55 100%)' }}>
          <div className="w-full mx-auto px-4 md:px-8 lg:px-[150px] xl:px-[250px]">
            <div className="relative bg-[rgba(0,44,101,0.75)] p-6 md:p-12 lg:p-16 rounded-lg">
              <div className="relative">
                <div className="hidden md:block absolute -left-4 lg:-left-8 top-0">
                  <span className="text-[120px] lg:text-[220px] font-bold bg-gradient-to-b from-[#e7d299] to-[rgba(0,0,0,0.3)] bg-clip-text text-transparent leading-none" style={{ WebkitTextFillColor: 'transparent' }}>
                    03
                  </span>
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                  <div className="pt-4 md:pt-8">
                    <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-serif mb-6 md:mb-8 tracking-wider leading-tight" style={{ textShadow: '0px 0px 14px rgba(255,255,255,0.58)' }}>
                      LenSxによる<br />
                      目の負担を軽減したフラップ
                    </h3>

                    <div className="text-white text-sm md:text-base leading-relaxed tracking-wide">
                      <p>
                        レーシックは治療の特性上、最初にレーザーで角膜に切れ目を入れて、フラップという蓋のようなものを作成します。従来の機械では、この時に眼を圧迫するため、眼圧も高く上昇し負担がかかってしまいます。当院ではLenSxという機器を使用します。LenSxはレーザー白内障手術で使用しているフェムトセカンドレーザーで高齢者や眼圧をあげてはいけない緑内障の方や強度近視の方にも積極的に使用しています。角膜の自然のカーブに合わせてレーザーを照射しますので眼にかかる負担を軽減することができます。
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center mt-6 lg:mt-0">
                    <div className="w-full max-w-full lg:max-w-[710px] aspect-[710/500] bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-gray-400">LenSx Image Placeholder</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CHARM Section - レーシックの魅力 */}
        <section className="py-6 md:py-6 lg:py-2 bg-white">
          <div className="w-full mx-auto px-4 md:px-8 lg:px-[150px] xl:px-[250px]">
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 mb-12 md:mb-16">
              <div className="w-full lg:flex-1">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4 lg:mb-0" style={{ writingMode: 'horizontal-tb', textOrientation: 'mixed' }}>
                  進化したレーシックの魅力
                </h2>
                <p className="text-6xl md:text-8xl lg:text-[120px] font-serif text-gray-200 leading-none mt-4 lg:hidden">CHARM</p>
              </div>
              <div className="w-full lg:flex-[4]">
                <p className="hidden lg:block text-[120px] font-serif text-gray-200 leading-none mb-8">CHARM</p>

                {/* Charm Items */}
                <div className="space-y-8 md:space-y-12">
                  {/* Charm 01 */}
                  <div className="border-b border-gray-300 pb-8 md:pb-2">
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                      <div className="w-full md:w-[180px] h-[250px] md:h-[380px] bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-400">Image</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-4 mb-3 md:mb-4">
                          <span className="text-sm text-gray-500">CHARM</span>
                          <span className="text-lg md:text-xl">01</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4">短時間でスピーディー</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          WaveLight® EX500は、世界で最も多く使用されている機種になります。それだけに個人輸入のものもありますが、中原眼科では厚生省が認可したものを正規代理店より購入して万全の状態をキープしております。個人輸入のものはメーカーによるメンテナンスが禁止されています。このレーザー機器はレーザーの照射速度が1Dの近視を矯正するのに1.3秒と世界最速のスピードです。照射スピードが遅ければ照射中の角膜の乾燥などにより矯正精度に影響が出てきます。レーシックの機械はアイトラッカーと言って眼球の動きを追尾する機能がついています。患者様の小さい動きに合わせてレーザーを打てなければ照射がずれてしまいます。この眼球追尾速度が1秒間に1050回と世界最速の追尾機能になります。レーザー装置勝負のレーシックにおいて性能が最も重要で、テクノロジーの進歩には驚かされます。厚生省認可の代表的なもう一つのレーザーにVSIX社のS4 IRによるアイレーシック（iLASIK）というものがあります。院長もこのVISX社の認定医であり、15年以上前の機種ですが多くの患者様に非常に良好な成績をもたらしてくれた名機であったといえます。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Charm 02 */}
                  <div className="border-b border-gray-300 pb-8 md:pb-2">
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                      <div className="w-full md:w-[180px] h-[250px] md:h-[380px] bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-400">Image</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-4 mb-3 md:mb-4">
                          <span className="text-sm text-gray-500">CHARM</span>
                          <span className="text-lg md:text-xl">02</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4">これまで以上にクリアな視界を実現</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          コンタクトレンズなどに記載されているような数字の近視や乱視などのことを低次収差と言われるのに対しメガネでは矯正できない見えづらさを高次収差と言います。高次収差の有無は同じ１.２の視力でも鮮明に見えるなどの差が出てきます。ICL手術やReLEx smile手術は近視がいくつで乱視がいくつといった低時収差のレベルでの矯正方法しかできません。これに対しレーシック機器では高次収差を矯正することができます。当院のレーザー装置はわずか直径12ミリしかない角膜の中で22000のデータポイントを取得し近視や乱視を個別の照射プログラムで矯正します。ICL手術が0.25Dという刻みでしかレンズの設定ができないに対し、0.01Dという精度で矯正度数を設定できます。逆にICLは角膜の自然の形を生かせる点では強度近視や高次収差が少ない方には有用ではあります。結果的にはどちらも良い手術と言えます。
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Charm 03 */}
                  <div>
                    <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
                      <div className="w-full md:w-[180px] h-[250px] md:h-[380px] bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-gray-400">Image</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-4 mb-3 md:mb-4">
                          <span className="text-sm text-gray-500">CHARM</span>
                          <span className="text-lg md:text-xl">03</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4">術後のリスクを軽減</h3>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                          屈折矯正手術後の合併症として起こりやすいと言われているのがハロー・グレアと言われております。残念ながらこの症状はICLとレーシックともに出ると言われています。レーシックでは85%で問題がなくICLでは27%の方が問題なかったという報告があり優位にICLの方がハローの訴えが多かったという報告もありますが、いずれにしても慣れてしまったりすることが多いとされています。ただ新しいタイプのレーシック機器は周辺部のレーザー照射方法をコントロールすることによりハローグレアを最小限に抑えるプログラムが組まれています。
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why LASIK Section */}
        <section className="py-6 md:py-6 lg:py-2" style={{ background: 'linear-gradient(180deg, #001a3b 0%, #002c55 100%)' }}>
          <div className="w-full mx-auto px-4 md:px-8 lg:px-[150px] xl:px-[250px]">
            <div className="bg-[rgba(255,255,255,0.05)] p-6 md:p-12 lg:p-16 rounded-lg">
              <div className="text-center mb-8 md:mb-12">
                <p className="text-[#e1cd95] text-base md:text-lg mb-3 md:mb-4">WHY LASIK?</p>
                <h2 className="text-white text-2xl md:text-3xl font-serif mb-3 md:mb-4">そもそもなんでレーシック？</h2>
                <div className="w-[200px] md:w-[300px] h-px bg-[#e1cd95] mx-auto"></div>
              </div>

              <p className="text-white text-sm md:text-base leading-relaxed text-center mb-8 md:mb-12 px-2">
                近年では、ICL（眼内コンタクトレンズ）も普及しており、なんで今さらレーシックなの？と思う方もいるかもしれません。
                しかし、実は世界で行われている視力矯正術は、レーシックが圧倒的なシェアを占めております。ICLがレーシックより上回っている国は日本だけで、
                アメリカやヨーロッパではレーシックがメジャーな治療法であるのは事実です。（2024年現在）
              </p>

              <div className="space-y-6 md:space-y-8">
                {/* Why LASIK Item 1 */}
                <div className="bg-[rgba(0,44,101,0.5)] p-4 md:p-6 lg:p-8 rounded-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 md:gap-6 lg:gap-8">
                    <div>
                      <div className="bg-[rgba(255,255,255,0.1)] inline-block px-4 md:px-6 py-2 rounded-full mb-3 md:mb-4">
                        <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold">なぜ日本ではレーシックが少ないのか？</h3>
                      </div>
                      <p className="text-white leading-relaxed text-xs md:text-sm">
                        ではなぜ日本でこのような現状になっているのか。これは2008年に銀座眼科という施設が世界でも同じ例がない悪質な器具の滅菌をせずレーシックを行い集団感染を引き起こした事件によります（この医師は現在医師免許を剥奪されています）。外科でも整形外科でもどのような分野のどの手術でも器具を滅菌しなければ感染症は起こります。しかし、この一件の内容が様々な大きな力により歪曲され、滅菌をせず手術をした医師の問題が、レーシック手術があたかも悪い手術だという内容にすり替えられ報道されるようになり、レーシックを衰退させるネガティブキャンペーンが行われました。レーシックが流行ることにより眼鏡やコンタクトレンズの使用者は激減します。一兆円の市場規模規模と言われるコンタクト業界が関わっていたかどうかは結局明らかにされませんでしたが、この一件で本来であれば非常に優れた手術であるレーシックが国民に悪い手術だという認識を植え付けれられたと言えます。ICL手術、レーシック手術ともに良い手術ですが適応や違いますので、今一度ご自身がどちらの手術の適応であるかを知る必要があり、その上で術式を選ばなければなりません。
                      </p>
                    </div>
                    <div className="flex items-center justify-center order-first lg:order-last">
                      <div className="w-full h-[200px] md:h-[250px] lg:h-[280px] bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">Image</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why LASIK Item 2 */}
                <div className="bg-[rgba(0,44,101,0.5)] p-4 md:p-6 lg:p-8 rounded-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 md:gap-6 lg:gap-8">
                    <div>
                      <div className="bg-[rgba(255,255,255,0.1)] inline-block px-4 md:px-6 py-2 rounded-full mb-3 md:mb-4">
                        <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold">ICLとレーシックはどっちがいい？</h3>
                      </div>
                      <p className="text-white leading-relaxed text-xs md:text-sm">
                        結論としては、どちらも優れた治療法であることは間違いありません。特徴も異なるため、どちらがいいかは断定できませんが、まずご自身の近眼の度数によって決まります。レーシックの手術装置はとても有能な機器でありますが、機器が1億円前後と高すぎるため大規模な眼科手術専門施設でなければ所有することができません。対して、ICLは通常の手術顕微鏡があれば行えてしまう手術ですので、最近ではICLをアピールしている施設も多いですが、レーシックとICLの両方を行って、平等に判断できる施設の診察を受けることも良いと思います。視力矯正治療をご検討されている場合は、眼科できちんと検査を受け、眼科専門医に相談しましょう。当院では、このレーシック機器は採算が全く取れるものではありませんが、白内障の手術後やPTKといわれる角膜の疾患の治療に非常に有用であり、患者様への治療の選択肢が広がるため導入しております。
                      </p>
                    </div>
                    <div className="flex items-center justify-center order-first lg:order-last">
                      <div className="w-full h-[200px] md:h-[250px] lg:h-[280px] bg-gray-700 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Greeting Section - 院長挨拶 */}
        <section className="relative py-2 md:py-2 lg:py-2 overflow-hidden">
          <img
            src="http://localhost:3845/assets/b19dfda40dbd48bb93d657dba78954596e5b7cc8.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

          <div className="relative z-10 w-full mx-auto px-4 md:px-8 lg:px-[150px] xl:px-[250px]">
            <div className="flex items-start gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="flex-1">
                <p className="text-6xl md:text-8xl lg:text-[120px] font-serif bg-gradient-to-b from-[#e7d299] to-[rgba(0,0,0,0.3)] bg-clip-text leading-none mb-2 md:mb-4" style={{ WebkitTextFillColor: 'transparent' }}>
                  GREETING
                </p>
                <p className="text-white text-2xl md:text-3xl lg:text-4xl font-serif">院長挨拶</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[318px_1fr] gap-8 lg:gap-12">
              <div>
                <div className="w-full lg:w-[300px] xl:w-[318px] aspect-[318/424] bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">院長写真</span>
                </div>
                <div className="border-l-2 border-white pl-4">
                  <p className="text-white text-xl md:text-2xl mb-2">中原眼科</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white text-lg md:text-xl">院長</span>
                    <span className="text-white text-2xl md:text-3xl font-serif">中原 将光</span>
                  </div>
                </div>
              </div>

              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8">心を込めた手術を実現します</h3>
                <div className="space-y-4 text-sm md:text-base leading-relaxed">
                  <p>
                    私は開業に至るまでに、全国の眼科医院で白内障手術・網膜硝子体手術・緑内障手術を数多く施行してきました。当院は、私が最新の医療機器で、良質な心を込めた手術を実現しおこなう場として誕生しました。世の中には不誠実な医療や未熟な技術による手術が多く存在します。手術において技術に勝るものはありません。そして仕上がりと結果にこだわり続ける信念が重要です。私の事を信じて、そして頼って来てくださった患者様に誠心誠意で正しい医療を提供したい、持っている医療技術を全力で提供したい、そんな信念のもと日々奮闘しております。当院の医師は私一人のみで、一貫して外来診察から手術までをこなし、年間で3663件の手術を行いました。
                  </p>
                  <p>
                    診察と手術は誠実であるとともに経験数、判断能力、技術力が重要と考えております。最新の医療機器も重要です。プロスポーツ選手と同じで私自身の手術技術にも年齢の限界があると思っています。今、このときの私の医療技術を、私を信じていらしてくれた患者様にご提供できればと思っています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
                {/* 監修者情報 */}
                <div className="container mx-auto px-4 pt-2 pb-16">
                    <AuthorBio />
                </div>
            </main>

      {/* Footer */}
      <footer className="bg-[#e1e3e7] text-[#2e3134] py-8 md:py-2">
        <div className="w-full mx-auto px-4 md:px-8 lg:px-[150px] xl:px-[250px]">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <img
                src="http://localhost:3845/assets/a160c58d8f114b3ea29006bdcf2143cd4baad3e5.png"
                alt="中原眼科"
                className="w-[200px] md:w-[253px] h-auto mb-4 md:mb-6"
              />

              <p className="text-[#002c65] text-base md:text-lg font-semibold mb-2 md:mb-3">ADDRESS</p>
              <p className="mb-4 md:mb-6 tracking-wider text-sm md:text-base">東京都町田市原町田6丁目19−14</p>

              <p className="text-[#002c65] text-base md:text-lg font-semibold mb-2 md:mb-3">ACCESS</p>
              <ul className="space-y-2 text-sm md:text-base mb-6 md:mb-8">
                <li className="flex items-start">
                  <span className="text-[#6f6032] mr-2">−</span>
                  小田急線町田駅東口改札から徒歩2分
                </li>
                <li className="flex items-start">
                  <span className="text-[#6f6032] mr-2">−</span>
                  JR町田駅中央改札北口から徒歩2分
                </li>
              </ul>

              {/* 外来受付 Table */}
              <div className="mt-6 md:mt-8 overflow-x-auto">
                <table className="w-full max-w-md border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-[#001a3b]">
                      <th className="border border-[#ddd] py-2 md:py-3 px-2 md:px-4 text-white text-center">外来受付</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">月</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">火</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">水</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">木</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">金</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">土</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">日</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-[#ddd] py-2 md:py-3 px-2 md:px-4 text-center">9:00-12:00</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#002c65]">●</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#002c65]">●</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#002c65]">●</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#002c65]">●</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#002c65]">●</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#002c65]">△</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center">-</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs md:text-sm mt-2 text-[#002c65]">
                  △：土曜の外来診療は不定期になります
                </p>
              </div>

              {/* 手術 Table */}
              <div className="mt-4 md:mt-6 overflow-x-auto">
                <table className="w-full max-w-md border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="bg-[#6f6032]">
                      <th className="border border-[#ddd] py-2 md:py-3 px-2 md:px-4 text-white text-center">手術</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">月</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">火</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">水</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">木</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">金</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">土</th>
                      <th className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-white text-center">日</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-[#ddd] py-2 md:py-3 px-2 md:px-4 text-center">12:00-</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#6f6032]">●</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#6f6032]">●</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#6f6032]">●</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#6f6032]">●</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#6f6032]">●</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center text-[#6f6032]">△</td>
                      <td className="border border-[#ddd] py-2 md:py-3 px-1 md:px-2 text-center">-</td>
                    </tr>
                  </tbody>
                </table>
                <div className="text-xs md:text-sm mt-2 space-y-1">
                  <p className="text-[#6f6032]">△：土曜日は緊急手術のみ対応</p>
                  <p>※月曜日から金曜日は12時より終日手術</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-auto">
              {/* Map */}
              <img
                src="http://localhost:3845/assets/885a010933b84a699531cde4cb32e68e5d9a87b5.png"
                alt="アクセスマップ"
                className="w-full lg:w-[600px] xl:w-[820px] h-auto rounded-lg shadow-lg mb-4 md:mb-6"
              />

              {/* Embedded Map */}
              <div className="w-full lg:w-[600px] xl:w-[820px] aspect-[820/400] bg-[#e5e3df] rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm md:text-base">Google Maps Embed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#211f1f] text-white text-center py-4 md:py-6 -mx-4 md:-mx-8 lg:-mx-[150px] xl:-mx-[250px]">
            <p className="text-xs md:text-sm">© 中原眼科</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
