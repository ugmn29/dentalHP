'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error boundary caught:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#5A4D41]/5 to-white px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-[#E67A2E]/10 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-[#E67A2E]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-4">
            エラーが発生しました
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            申し訳ございません。予期しないエラーが発生しました。
            <br />
            一時的な問題の可能性がありますので、もう一度お試しください。
          </p>
          {error.digest && (
            <p className="text-sm text-gray-400 font-mono">
              エラーID: {error.digest}
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <button
            onClick={() => reset()}
            className="bg-[#E67A2E] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#d66a25] transition-colors shadow-lg"
          >
            もう一度試す
          </button>
          <Link
            href="/"
            className="bg-white text-[#E67A2E] px-8 py-4 rounded-lg font-bold border-2 border-[#E67A2E] hover:bg-[#E67A2E] hover:text-white transition-colors shadow-lg inline-block"
          >
            トップページへ
          </Link>
        </div>

        {/* Additional Help */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 mb-4">
            問題が解決しない場合は、お手数ですが以下の方法でお問い合わせください
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/reserve"
              className="text-[#395b45] hover:underline font-medium"
            >
              お問い合わせフォーム
            </Link>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a
              href="tel:0123-45-6789"
              className="text-[#395b45] hover:underline font-medium"
            >
              お電話: 0123-45-6789
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <p className="text-sm text-[#5A4D41] font-bold mb-2">
            F歯科・矯正歯科
          </p>
          <p className="text-xs text-gray-600">
            〒135-0061 東京都江東区豊洲5-6-36 豊洲プライムスクエア1階
          </p>
          <p className="text-xs text-gray-500 mt-2">
            平日 10:00-18:30 / 土日 9:00-16:00（火曜・祝日休診）
          </p>
        </div>
      </div>
    </div>
  )
}
