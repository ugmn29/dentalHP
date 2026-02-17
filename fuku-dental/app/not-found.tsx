import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ページが見つかりません | F歯科・矯正歯科 豊洲プライムスクエア院',
  description: 'お探しのページは見つかりませんでした。F歯科・矯正歯科 豊洲プライムスクエア院のトップページからお探しください。',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#5A4D41]/5 to-white px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Large Text */}
        <div className="mb-8">
          <h1 className="text-[120px] md:text-[180px] font-bold text-[#E67A2E] leading-none opacity-20">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-4">
            お探しのページが見つかりません
          </h2>
          <p className="text-gray-600 text-lg">
            申し訳ございません。お探しのページは移動または削除された可能性があります。
            <br />
            URLをご確認いただくか、以下のリンクからお探しください。
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            href="/"
            className="bg-[#E67A2E] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d66a25] transition-colors shadow-lg"
          >
            トップページへ
          </Link>
          <Link
            href="/reserve"
            className="bg-white text-[#E67A2E] px-8 py-4 rounded-lg font-bold border-2 border-[#E67A2E] hover:bg-[#E67A2E] hover:text-white transition-colors shadow-lg"
          >
            ご予約・お問い合わせ
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">よくアクセスされるページ</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/kidsortho" className="text-[#395b45] hover:underline">
              小児矯正
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/ceramic" className="text-[#395b45] hover:underline">
              セラミック治療
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/whitening" className="text-[#395b45] hover:underline">
              ホワイトニング
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/prevention" className="text-[#395b45] hover:underline">
              予防歯科
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/access" className="text-[#395b45] hover:underline">
              アクセス
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600 mb-2">お電話でのお問い合わせ</p>
          <p className="text-2xl font-bold text-[#5A4D41]">0123-45-6789</p>
          <p className="text-xs text-gray-500 mt-2">
            平日 10:00-18:30 / 土日 9:00-16:00（火曜・祝日休診）
          </p>
        </div>
      </div>
    </div>
  )
}
