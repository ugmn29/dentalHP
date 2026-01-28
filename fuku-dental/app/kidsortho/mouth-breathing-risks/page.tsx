import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Home,
  ChevronRight,
  Activity
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'お口ポカン（口呼吸）が引き起こす病気リスク｜F歯科・矯正歯科',
  description: '口呼吸が原因で起こる8つの病気リスク。アデノイド顔貌、睡眠時無呼吸症候群、集中力低下など、今すぐ対策が必要な理由を詳しく解説します。',
  keywords: '口呼吸,お口ポカン,病気,リスク,アデノイド顔貌,睡眠時無呼吸,集中力低下,小児矯正',
};

export default function MouthBreathingRisksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-white to-[#FDFBF7]">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-600">
              <Link href="/" className="hover:text-[#E67A2E] flex items-center">
                <Home className="w-4 h-4 mr-1" />
                ホーム
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/kidsortho" className="hover:text-[#E67A2E]">
                こども矯正
              </Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-[#E67A2E]">口呼吸の病気リスク</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-2 md:py-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
                お口ポカン（口呼吸）が<br />引き起こす病気リスク
              </h1>
              <div className="w-24 h-1 bg-[#E67A2E] mx-auto mb-8"></div>
              <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
                「癖」ではなく「病気のサイン」です
              </p>
              <p className="text-lg text-[#8D8070] leading-relaxed">
                アデノイド顔貌、睡眠時無呼吸症候群、集中力低下など、<br className="hidden md:block" />
                今すぐ対策が必要な8つのリスクを詳しく解説します
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pt-8 pb-2 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 max-w-5xl">

            {/* 結論 */}
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41] mb-8 font-serif">
                結論
              </h2>
              <div className="space-y-4 text-[#5A4D41] leading-loose max-w-3xl mx-auto">
                <p>
                  <span className="font-bold bg-yellow-100">口呼吸は「癖」ではなく、8つ以上の病気リスクを引き起こす異常な呼吸</span>です。
                  放置すると、顔の骨格変形（アデノイド顔貌）や睡眠時無呼吸症候群、学力低下につながります。
                </p>
                <p>
                  <span className="text-[#E67A2E] font-bold">6歳までに鼻呼吸を確立</span>することで、
                  顔貌の変形を防ぎ、健康な成長を促すことができます。
                </p>
                <p className="font-bold bg-white p-6 rounded-2xl shadow-sm border border-[#E67A2E]/10">
                  <span className="text-red-600">「いつも口が開いている」は緊急性が高い</span>サインです。
                  今すぐ耳鼻科と歯科の両方で診断を受けましょう。
                </p>
              </div>
            </div>

            {/* お口ポカンチェックリスト */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">お口ポカンチェックリスト</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E67A2E]/10 mb-6">
                <p className="text-center text-gray-600 mb-6">以下の項目に<span className="font-bold text-[#E67A2E]">3つ以上</span>当てはまる場合は要注意</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#FDFBF7] p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-[#E67A2E]" disabled />
                      <p className="text-sm text-gray-700">いつも口が半開き</p>
                    </div>
                  </div>

                  <div className="bg-[#FDFBF7] p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-[#E67A2E]" disabled />
                      <p className="text-sm text-gray-700">寝ている時に口を開けている</p>
                    </div>
                  </div>

                  <div className="bg-[#FDFBF7] p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-[#E67A2E]" disabled />
                      <p className="text-sm text-gray-700">いびきをかく</p>
                    </div>
                  </div>

                  <div className="bg-[#FDFBF7] p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-[#E67A2E]" disabled />
                      <p className="text-sm text-gray-700">よく鼻がつまる・鼻水が出る</p>
                    </div>
                  </div>

                  <div className="bg-[#FDFBF7] p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-[#E67A2E]" disabled />
                      <p className="text-sm text-gray-700">朝起きた時に口が乾いている</p>
                    </div>
                  </div>

                  <div className="bg-[#FDFBF7] p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-[#E67A2E]" disabled />
                      <p className="text-sm text-gray-700">風邪をひきやすい</p>
                    </div>
                  </div>

                  <div className="bg-[#FDFBF7] p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-[#E67A2E]" disabled />
                      <p className="text-sm text-gray-700">口臭がある</p>
                    </div>
                  </div>

                  <div className="bg-[#FDFBF7] p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-[#E67A2E]" disabled />
                      <p className="text-sm text-gray-700">唇が乾燥してカサカサ</p>
                    </div>
                  </div>

                  <div className="bg-[#FDFBF7] p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-[#E67A2E]" disabled />
                      <p className="text-sm text-gray-700">食事の時にクチャクチャ音がする</p>
                    </div>
                  </div>

                  <div className="bg-[#FDFBF7] p-4 rounded-xl">
                    <div className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1 w-5 h-5 text-[#E67A2E]" disabled />
                      <p className="text-sm text-gray-700">猫背・姿勢が悪い</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-400">
                <p className="text-sm text-gray-700">
                  <span className="font-bold text-red-700">緊急性が高い症状：</span>
                  睡眠中の無呼吸（10秒以上息が止まる）、極度の集中力低下、日中の強い眠気が見られる場合は、
                  <span className="font-bold">今すぐ医療機関を受診</span>してください。
                </p>
              </div>
            </div>

            {/* 8つの病気リスク */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">口呼吸が引き起こす8つの病気リスク</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                {/* リスク1 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-red-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-red-700 mb-2 text-lg">アデノイド顔貌（顔の骨格変形）</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        <span className="font-bold bg-yellow-100">下顎が後退し、顔が縦長に</span>なります。
                        「口ゴボ」「顎なし」と呼ばれる顔貌に変化し、<span className="font-bold text-red-600">6歳以降は不可逆的</span>です。
                      </p>
                      <div className="bg-red-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-red-700">リスク度：</span>⭐⭐⭐⭐⭐（最重要）
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* リスク2 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-orange-700 mb-2 text-lg">睡眠時無呼吸症候群（SAS）</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        睡眠中に<span className="font-bold bg-yellow-100">10秒以上呼吸が止まる</span>状態が繰り返されます。
                        成長ホルモンの分泌が阻害され、発育不良や集中力低下につながります。
                      </p>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-orange-700">リスク度：</span>⭐⭐⭐⭐⭐（緊急性高）
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* リスク3 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-yellow-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-yellow-700 mb-2 text-lg">集中力低下・学力低下</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        脳への<span className="font-bold bg-yellow-100">酸素供給量が30%減少</span>し、
                        記憶力、集中力、思考力が低下します。学校の成績にも影響します。
                      </p>
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-yellow-700">リスク度：</span>⭐⭐⭐⭐
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* リスク4 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      4
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-blue-700 mb-2 text-lg">虫歯・歯周病リスク増加</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        唾液が乾燥し、<span className="font-bold bg-yellow-100">自浄作用が失われる</span>ため、
                        虫歯リスクが<span className="font-bold text-red-600">3倍</span>に増加します。
                      </p>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-blue-700">リスク度：</span>⭐⭐⭐⭐
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* リスク5 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-green-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      5
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-green-700 mb-2 text-lg">感染症リスク増加</h4>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">
                        鼻の<span className="font-bold bg-yellow-100">フィルター機能をバイパス</span>するため、
                        ウイルス・細菌が直接体内に侵入します。風邪・インフルエンザにかかりやすくなります。
                      </p>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-700">
                          <span className="font-bold text-green-700">リスク度：</span>⭐⭐⭐
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* リスク6〜8 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                  <h4 className="font-bold text-gray-700 mb-4 text-lg">その他のリスク</h4>
                  <div className="space-y-3 text-sm text-gray-700">
                    <div className="flex items-start gap-2">
                      <span className="text-[#E67A2E] mt-1">⑥</span>
                      <span><span className="font-bold">姿勢の悪化：</span>猫背・ストレートネックになりやすい</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#E67A2E] mt-1">⑦</span>
                      <span><span className="font-bold">口臭：</span>口腔内の乾燥により細菌が繁殖</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#E67A2E] mt-1">⑧</span>
                      <span><span className="font-bold">アレルギー悪化：</span>鼻呼吸の回復が遅れる</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 鼻呼吸 vs 口呼吸の比較 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">鼻呼吸 vs 口呼吸の違い</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#E67A2E]/10 mb-6">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="font-bold text-[#5A4D41]">項目</div>
                  <div className="font-bold text-green-600 text-center">鼻呼吸（正常）</div>
                  <div className="font-bold text-red-600 text-center">口呼吸（異常）</div>
                </div>

                <div className="space-y-4">
                  {/* フィルター機能 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">フィルター機能</div>
                    <div className="text-center">
                      <span className="text-green-600 font-bold">⭕ あり</span>
                      <p className="text-xs text-gray-600 mt-1">鼻毛・粘膜でウイルス除去</p>
                    </div>
                    <div className="text-center">
                      <span className="text-red-600 font-bold">❌ なし</span>
                      <p className="text-xs text-gray-600 mt-1">直接肺に侵入</p>
                    </div>
                  </div>

                  {/* 加湿・加温 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-white rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">加湿・加温</div>
                    <div className="text-center">
                      <span className="text-green-600 font-bold">⭕ 適切</span>
                      <p className="text-xs text-gray-600 mt-1">温度・湿度を調整</p>
                    </div>
                    <div className="text-center">
                      <span className="text-red-600 font-bold">❌ 不十分</span>
                      <p className="text-xs text-gray-600 mt-1">乾燥した空気が侵入</p>
                    </div>
                  </div>

                  {/* 酸素供給量 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-[#FDFBF7] rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">酸素供給量</div>
                    <div className="text-center">
                      <span className="text-green-600 font-bold text-lg">100%</span>
                    </div>
                    <div className="text-center">
                      <span className="text-red-600 font-bold text-lg">70%</span>
                      <p className="text-xs text-gray-600 mt-1">30%減少</p>
                    </div>
                  </div>

                  {/* 顔の成長 */}
                  <div className="grid md:grid-cols-3 gap-4 p-4 bg-white rounded-xl">
                    <div className="font-semibold text-[#5A4D41]">顔の成長</div>
                    <div className="text-center text-green-600 font-bold">正常に発達</div>
                    <div className="text-center text-red-600 font-bold">骨格変形</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 今すぐできる対策 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">今すぐできる対策</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* 耳鼻科受診 */}
                <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-[#E67A2E]/20">
                  <h4 className="text-xl font-bold text-[#E67A2E] mb-4">1. 耳鼻科を受診</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">アデノイド・扁桃腺肥大の診断</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">鼻炎・副鼻腔炎の治療</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">必要に応じて手術（アデノイド切除）</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-[#E67A2E]">重要：</span>鼻の通りを良くすることが最優先
                    </p>
                  </div>
                </div>

                {/* 歯科でMFT */}
                <div className="bg-white p-8 rounded-2xl shadow-md border-2 border-[#E67A2E]/20">
                  <h4 className="text-xl font-bold text-[#E67A2E] mb-4">2. 歯科でMFT（口腔筋機能療法）</h4>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">あいうべ体操で舌の位置を改善</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">ボタンプルで口唇閉鎖力を強化</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">プレオルソなど装置を使用</p>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <span className="font-bold text-[#E67A2E]">期間：</span>3〜6ヶ月で効果が現れる
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  6歳までに鼻呼吸を確立するメリット
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>アデノイド顔貌を予防できる</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>集中力・学力が向上する</span>
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>風邪・感染症にかかりにくくなる</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>睡眠の質が改善する</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* よくある質問 */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-[#5A4D41] font-serif inline-block">よくある質問</h3>
                <div className="w-16 h-0.5 bg-[#E67A2E] mx-auto mt-4"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q1</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">何歳までなら改善できますか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p className="mb-3">
                      <strong className="text-[#E67A2E]">A.</strong> <span className="font-bold bg-yellow-100">6歳までが最も改善しやすい</span>黄金期です。
                      6歳以降も改善は可能ですが、骨格変形が固定化するため難易度が上がります。
                      思春期（12歳以降）では外科的矯正が必要になるケースが多いです。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q2</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">「口を閉じなさい」と注意するだけではダメですか？</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#E67A2E]">A.</strong> 声かけだけでは<span className="font-bold text-red-600">改善しません</span>。
                      口呼吸の原因（鼻づまり、舌の位置異常、口唇閉鎖力不足）を特定し、
                      <span className="font-bold bg-yellow-100">医療的な介入（耳鼻科治療+MFT）</span>が必要です。
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-[#E67A2E] rounded-full flex items-center justify-center text-white text-sm flex-shrink-0">Q3</span>
                      <h4 className="font-bold text-[#5A4D41] text-lg">鼻づまりはないのに口呼吸しています</h4>
                    </div>
                  </div>
                  <div className="text-[#8D8070] leading-relaxed">
                    <p>
                      <strong className="text-[#E67A2E]">A.</strong> 鼻づまりがなくても、<span className="font-bold bg-yellow-100">舌の位置異常や口唇閉鎖力不足</span>で口呼吸になることがあります。
                      この場合はMFT（口腔筋機能療法）で改善できます。当院で詳しく診断いたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-2 bg-gradient-to-r from-[#E67A2E] to-[#D66A28] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif">
                お口ポカン、今すぐ相談を
              </h2>
              <p className="text-xl mb-8 text-white/90">
                6歳までの対策で、顔の骨格変形を予防できます
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-white text-[#E67A2E] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                >
                  無料相談を予約する
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Link>
                <Link
                  href="tel:0312345678"
                  className="inline-flex items-center justify-center bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white"
                >
                  電話で相談する
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
