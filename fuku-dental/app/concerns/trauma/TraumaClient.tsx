"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageImage } from '@/components/PageImage';
import { AuthorBio } from '@/components/AuthorBio';
import { Phone, Calendar, AlertTriangle, Clock, CheckCircle } from "lucide-react";

const TraumaPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E74C3C]/90 to-[#C0392B]/80 z-10"></div>
        <PageImage
          path="/concerns/trauma"
          imageId="hero"
          alt="歯の外傷・急患対応"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <AlertTriangle size={40} className="animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              歯<span className="text-[0.75em]">の</span>外傷・急患対応
            </h1>
          </div>
          <p className="text-lg md:text-xl mb-4 leading-relaxed">
            迅速<span className="text-[0.75em]">な</span>対応<span className="text-[0.75em]">が</span>歯<span className="text-[0.75em]">を</span>救<span className="text-[0.75em]">う</span>
          </p>
          <p className="text-sm md:text-base opacity-90">
            ぶつけた、折<span className="text-[0.75em]">れた</span>、抜<span className="text-[0.75em]">けた</span>...その時<span className="text-[0.75em]">の</span>適切<span className="text-[0.75em]">な</span>処置<span className="text-[0.75em]">が</span>予後<span className="text-[0.75em]">を</span>左右<span className="text-[0.75em]">します</span>
          </p>

          {/* Emergency Contact */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:03-1234-5678" className="bg-white text-[#E74C3C] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-gray-100 transition flex items-center gap-2">
              <Phone size={24} />
              緊急連絡：03-1234-5678
            </a>
            <a href="#emergency-guide" className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-yellow-300 transition flex items-center gap-2">
              <Clock size={24} />
              今すぐできる応急処置
            </a>
          </div>
        </div>
      </section>

      {/* Anxiety Relief Section */}
      <section className="py-6 md:py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E74C3C] font-bold tracking-[0.2em] text-sm block mb-2">EMERGENCY SITUATIONS</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-6">
              <span className="text-[0.75em]">こんな時、</span><br className="md:hidden" />
              <span className="text-[#E74C3C]">どうすればいい？</span>
            </h2>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E74C3C]/20 mb-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#E74C3C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-700 text-lg font-semibold">歯が折れた・欠けた</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#E74C3C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-700 text-lg font-semibold">歯が完全に抜けた（脱落）</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#E74C3C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-700 text-lg font-semibold">歯がグラグラする（脱臼）</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#E74C3C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-700 text-lg font-semibold">唇や歯茎を切った</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#E74C3C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-700 text-lg font-semibold">子供が顔をぶつけた</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#E74C3C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-700 text-lg font-semibold">スポーツ中に歯をぶつけた</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#E74C3C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-700 text-lg font-semibold">歯が陥入した（めり込んだ）</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-2 text-[#E74C3C] font-bold">
              <span className="text-2xl">↓</span>
              <span className="text-lg">状況別の対処法を詳しく解説します</span>
              <span className="text-2xl">↓</span>
            </div>
          </div>
        </div>
      </section>

      {/* 状態別・包括的対処ガイド */}
      <section id="emergency-guide" className="py-6 md:py-6 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E74C3C] font-bold tracking-[0.2em] text-sm block mb-2">COMPREHENSIVE GUIDE</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-4">
              <span className="text-[#E74C3C]">状態別</span><span className="text-[0.75em]">・</span>完全対応ガイド
            </h2>
            <p className="text-gray-600 mb-8">
              緊急対応<span className="text-[0.75em]">から</span>治療、予後<span className="text-[0.75em]">まで</span>、状態<span className="text-[0.75em]">ごとに</span>詳しく<span className="text-[0.75em]">解説</span>します
            </p>

            {/* クイックナビゲーション */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              <a href="#case-1" className="group bg-white hover:bg-[#E74C3C] border-2 border-[#E74C3C] rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-xl">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E74C3C] group-hover:bg-white text-white group-hover:text-[#E74C3C] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors">1</div>
                  <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors text-center">歯が完全に抜けた</span>
                </div>
              </a>

              <a href="#case-2" className="group bg-white hover:bg-[#E74C3C] border-2 border-[#E74C3C] rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-xl">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E74C3C] group-hover:bg-white text-white group-hover:text-[#E74C3C] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors">2</div>
                  <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors text-center">歯が折れた・欠けた</span>
                </div>
              </a>

              <a href="#case-3" className="group bg-white hover:bg-[#E74C3C] border-2 border-[#E74C3C] rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-xl">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E74C3C] group-hover:bg-white text-white group-hover:text-[#E74C3C] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors">3</div>
                  <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors text-center">歯がグラグラする</span>
                </div>
              </a>

              <a href="#case-4" className="group bg-white hover:bg-[#E74C3C] border-2 border-[#E74C3C] rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-xl">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E74C3C] group-hover:bg-white text-white group-hover:text-[#E74C3C] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors">4</div>
                  <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors text-center">唇や歯茎を切った</span>
                </div>
              </a>

              <a href="#case-5" className="group bg-white hover:bg-[#E74C3C] border-2 border-[#E74C3C] rounded-xl p-4 transition-all duration-300 shadow-md hover:shadow-xl">
                <div className="flex flex-col items-center gap-2">
                  <div className="bg-[#E74C3C] group-hover:bg-white text-white group-hover:text-[#E74C3C] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors">5</div>
                  <span className="text-sm font-bold text-gray-800 group-hover:text-white transition-colors text-center">乳歯の外傷</span>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Case 1: 完全脱落 */}
            <article id="case-1" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#E74C3C]/20 scroll-mt-24">
              <header className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-gray-200">
                <div className="bg-[#E74C3C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">1</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">
                  歯<span className="text-[0.75em]">が</span>完全<span className="text-[0.75em]">に</span>抜<span className="text-[0.75em]">けた</span>（脱落）
                </h2>
              </header>

              {/* 緊急対応 */}
              <section className="mb-10">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
                  <div className="flex items-start gap-3">
                    <Clock size={24} className="text-yellow-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-yellow-900 mb-2 text-xl">ゴールデンタイム：30分以内</p>
                      <p className="text-sm text-yellow-800">
                        脱落後30分以内に適切な処置を行えば、再植成功率は<span className="font-bold text-[#E74C3C]">約90%</span>です。時間が経つほど成功率は低下します。
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#E74C3C] mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#E74C3C] rounded-full"></span>
                  緊急対応
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                      <span className="bg-[#E74C3C] text-white px-3 py-1 rounded-full text-sm">STEP 1</span>
                      歯の持ち方
                    </h4>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                          <span><span className="font-bold bg-yellow-100">歯冠部（白い部分）</span>を持つ</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 flex-shrink-0 mt-1 font-bold text-xl">×</span>
                          <span className="text-red-600 font-semibold">歯根（根っこの部分）は絶対に触らない</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 flex-shrink-0 mt-1 font-bold text-xl">×</span>
                          <span className="text-red-600 font-semibold">水道水で洗わない（歯根膜が死滅します）</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                      <span className="bg-[#E74C3C] text-white px-3 py-1 rounded-full text-sm">STEP 2</span>
                      保存方法
                    </h4>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <p className="text-gray-700 mb-4 font-semibold">以下の優先順位で保存してください：</p>
                      <ol className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-3">
                          <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</span>
                          <div>
                            <p className="font-bold">歯牙保存液（薬局で購入可能）</p>
                            <p className="text-sm text-gray-600">最も理想的。常備をおすすめします。</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</span>
                          <div>
                            <p className="font-bold">牛乳</p>
                            <p className="text-sm text-gray-600">歯根膜細胞の生存に適した浸透圧。常温で可。</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</span>
                          <div>
                            <p className="font-bold">生理食塩水</p>
                            <p className="text-sm text-gray-600">0.9%食塩水。無い場合は口の中（頬と歯茎の間）に入れる。</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                      <span className="bg-[#E74C3C] text-white px-3 py-1 rounded-full text-sm">STEP 3</span>
                      すぐに歯科医院へ
                    </h4>
                    <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                      <p className="text-gray-800 font-semibold mb-2">
                        一刻も早く歯科医院に連絡し、来院してください。
                      </p>
                      <p className="text-sm text-gray-700">
                        夜間・休日の場合も、当院の緊急連絡先にお電話ください。
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 治療方法 */}
              <section className="mb-10 pt-8 border-t-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#E74C3C] mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#E74C3C] rounded-full"></span>
                  治療方法：再植術
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    脱落した歯を元の位置に戻す治療です。時間との勝負であり、<span className="font-bold bg-yellow-100">30分以内</span>であれば成功率は約90%、<span className="font-bold">1時間以内で約75%</span>です。
                  </p>
                  <div className="bg-white p-6 rounded-lg mt-4">
                    <h4 className="font-bold text-gray-800 mb-3">治療の流れ</h4>
                    <ol className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="bg-[#E74C3C] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">1</span>
                        <span>歯と歯槽窩（歯が入っていた穴）の洗浄</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-[#E74C3C] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">2</span>
                        <span>歯を元の位置に戻す（再植）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-[#E74C3C] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">3</span>
                        <span>固定（2〜4週間）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-[#E74C3C] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">4</span>
                        <span>根管治療（必要に応じて）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-[#E74C3C] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">5</span>
                        <span>定期検診（経過観察）</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </section>

              {/* 予後・経過観察 */}
              <section className="pt-8 border-t-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#E74C3C] mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#E74C3C] rounded-full"></span>
                  予後・経過観察
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-blue-900 mb-3">推奨される検診スケジュール</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>受傷後 <span className="font-bold">1週間</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>受傷後 <span className="font-bold">1ヶ月</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>受傷後 <span className="font-bold">3ヶ月</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>受傷後 <span className="font-bold">6ヶ月</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>受傷後 <span className="font-bold">1年</span>（以降は年1回）</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">注意すべき症状</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>歯の変色（グレー・黒ずみ）→ 歯髄壊死の可能性</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>痛みや腫れ → 感染の可能性</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>歯の動揺 → 再固定が必要な場合あり</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>膿が出る → 早急な処置が必要</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-[#E74C3C] p-6 rounded-r-lg mt-6">
                  <p className="text-sm font-semibold text-[#E74C3C] mb-2">研究結果</p>
                  <p className="text-gray-700 leading-relaxed">
                    歯牙保存液や牛乳中での保存により、歯根膜細胞の生存率が有意に向上し、再植後の予後が改善されることが報告されています。乾燥状態での保存は避けるべきです。適切な処置と経過観察により、10年以上機能する例も多くあります。
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">Andreasen JO et al., Dent Traumatol 2012</p>
                </div>
              </section>
            </article>

            {/* Case 2: 破折（折れた・欠けた） */}
            <article id="case-2" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#E74C3C]/20 scroll-mt-24">
              <header className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-gray-200">
                <div className="bg-[#E74C3C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">2</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">
                  歯<span className="text-[0.75em]">が</span>折<span className="text-[0.75em]">れた</span>・欠<span className="text-[0.75em]">けた</span>（破折）
                </h2>
              </header>

              {/* 緊急対応 */}
              <section className="mb-10">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    破折の程度により治療法が異なります。<span className="font-bold bg-yellow-100">折れた破片は捨てずに保管</span>してください。再接着できる可能性があります。
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-[#E74C3C] mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#E74C3C] rounded-full"></span>
                  緊急対応
                </h3>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-gray-800 mb-3">破折の種類と症状</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-400 pl-4 bg-white p-4 rounded">
                        <p className="font-bold text-green-700 mb-1">エナメル質破折（軽度）</p>
                        <p className="text-sm text-gray-600">表面の白い部分のみが欠けた状態。痛みは少ないですが、早めの受診が推奨されます。</p>
                      </div>
                      <div className="border-l-4 border-yellow-400 pl-4 bg-white p-4 rounded">
                        <p className="font-bold text-yellow-700 mb-1">象牙質破折（中等度）</p>
                        <p className="text-sm text-gray-600">黄色い象牙質まで到達。知覚過敏や痛みを伴うため、速やかな処置が必要です。</p>
                      </div>
                      <div className="border-l-4 border-red-400 pl-4 bg-white p-4 rounded">
                        <p className="font-bold text-red-700 mb-1">歯髄露出（重度）</p>
                        <p className="text-sm text-gray-600">神経まで到達。強い痛みや出血を伴います。<span className="font-bold">できるだけ早急な処置が必要</span>です。</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-3">応急処置</h4>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                          <span>折れた破片を牛乳または水に浸して保管（乾燥させない）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                          <span>痛みがある場合は冷やす（氷を直接当てず、タオルで包む）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                          <span>出血がある場合は清潔なガーゼで圧迫止血（5〜10分）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 flex-shrink-0 mt-1 font-bold text-xl">×</span>
                          <span className="text-red-600 font-semibold">尖った部分を舌で触らない（口内を傷つける可能性）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 flex-shrink-0 mt-1 font-bold text-xl">×</span>
                          <span className="text-red-600 font-semibold">硬い食べ物を避ける</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 治療方法 */}
              <section className="mb-10 pt-8 border-t-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#E74C3C] mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#E74C3C] rounded-full"></span>
                  治療方法：修復治療
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="border-2 border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-lg transition">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">コンポジットレジン</h4>
                    <p className="text-sm text-gray-600 mb-4">歯科用プラスチックで欠損部を修復</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>即日治療可能</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>歯を削る量が少ない</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>保険適用</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-2 border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-lg transition">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">セラミッククラウン</h4>
                    <p className="text-sm text-gray-600 mb-4">被せ物で修復</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>審美性が高い</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>耐久性に優れる</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>大きな欠損に対応</span>
                      </li>
                    </ul>
                  </div>
                  <div className="border-2 border-gray-200 rounded-xl p-6 bg-gray-50 hover:shadow-lg transition">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg">根管治療</h4>
                    <p className="text-sm text-gray-600 mb-4">神経まで達した場合</p>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>感染防止</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>歯の保存</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span>数回の通院が必要</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 bg-blue-100 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-2">破折片の再接着</h4>
                  <p className="text-sm text-gray-700">
                    保管した破折片が良好な状態であれば、再接着が可能です。審美性・機能性ともに優れた結果が期待できます。
                  </p>
                </div>
              </section>

              {/* 予後・経過観察 */}
              <section className="pt-8 border-t-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#E74C3C] mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#E74C3C] rounded-full"></span>
                  予後・経過観察
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-blue-900 mb-3">定期検診の重要性</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    破折後の歯は、歯髄（神経）の壊死や変色が起こる可能性があります。特に神経まで達した破折の場合、数ヶ月〜数年後に症状が現れることもあります。
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>治療後 <span className="font-bold">1週間</span>（初期チェック）</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>治療後 <span className="font-bold">1ヶ月</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>治療後 <span className="font-bold">3ヶ月、6ヶ月、1年</span></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">注意すべき症状</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>修復部分の変色や脱離</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>冷たいものや熱いものでしみる</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>噛むと痛む</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>歯茎の腫れや膿</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-[#E74C3C] p-6 rounded-r-lg mt-6">
                  <p className="text-sm font-semibold text-[#E74C3C] mb-2">研究結果</p>
                  <p className="text-gray-700 leading-relaxed">
                    歯冠破折の治療において、破折片の再接着は審美的・機能的に優れた結果をもたらすことが示されています。破折片の適切な保存が重要です。コンポジットレジンやセラミック修復においても、適切な治療により長期的な予後が期待できます。
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">Chazin C et al., Dent Traumatol 2019</p>
                </div>
              </section>
            </article>

            {/* Case 3: 脱臼（グラグラする） */}
            <article id="case-3" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#E74C3C]/20 scroll-mt-24">
              <header className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-gray-200">
                <div className="bg-[#E74C3C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">3</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">
                  歯<span className="text-[0.75em]">が</span>グラグラ<span className="text-[0.75em]">する</span>（脱臼）
                </h2>
              </header>

              {/* 緊急対応 */}
              <section className="mb-10">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    歯がぐらついているが抜けていない状態。<span className="font-bold bg-yellow-100">歯を触らず、できるだけ早く固定処置が必要</span>です。
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-[#E74C3C] mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#E74C3C] rounded-full"></span>
                  緊急対応
                </h3>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg text-gray-800 mb-3">脱臼の種類</h4>
                    <div className="space-y-3 text-sm text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1.5"></span>
                        <div>
                          <p className="font-bold">亜脱臼：</p>
                          <p className="text-gray-600">わずかに動く程度</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0 mt-1.5"></span>
                        <div>
                          <p className="font-bold">側方脱臼：</p>
                          <p className="text-gray-600">横方向にずれている</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-1.5"></span>
                        <div>
                          <p className="font-bold">陥入：</p>
                          <p className="text-gray-600">歯茎にめり込んでいる</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-1.5"></span>
                        <div>
                          <p className="font-bold">挺出：</p>
                          <p className="text-gray-600">歯が伸びたように見える</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-800 mb-3">応急処置</h4>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                          <span>歯を触らない・動かさない（触ると悪化する可能性）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                          <span>軽く噛んで位置を固定（強く噛まない）</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                          <span>できるだけ早く歯科医院を受診</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                          <span>柔らかい食事を取る</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 flex-shrink-0 mt-1 font-bold text-xl">×</span>
                          <span className="text-red-600 font-semibold">自分で位置を直そうとしない</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 flex-shrink-0 mt-1 font-bold text-xl">×</span>
                          <span className="text-red-600 font-semibold">硬いものを噛まない</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 治療方法 */}
              <section className="mb-10 pt-8 border-t-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#E74C3C] mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#E74C3C] rounded-full"></span>
                  治療方法：暫間固定
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    隣の歯と固定する「暫間固定」を行います。固定期間は脱臼の程度により異なりますが、一般的に<span className="font-bold bg-yellow-100">2〜4週間程度</span>です。
                  </p>
                  <div className="bg-white p-6 rounded-lg mt-4">
                    <h4 className="font-bold text-gray-800 mb-3">治療の流れ</h4>
                    <ol className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="bg-[#E74C3C] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">1</span>
                        <span>歯の位置を整復（必要に応じて）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-[#E74C3C] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">2</span>
                        <span>隣の歯とワイヤーやレジンで固定</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-[#E74C3C] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">3</span>
                        <span>固定期間中の経過観察（1週間ごと）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-[#E74C3C] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">4</span>
                        <span>固定除去</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-[#E74C3C] text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs">5</span>
                        <span>定期検診（長期的な経過観察）</span>
                      </li>
                    </ol>
                  </div>
                  <div className="bg-yellow-100 p-4 rounded-lg mt-4">
                    <p className="text-sm text-gray-800">
                      <span className="font-bold">注意：</span>固定期間中は硬い食べ物を避け、歯ブラシは柔らかいものを使用してください。
                    </p>
                  </div>
                </div>
              </section>

              {/* 予後・経過観察 */}
              <section className="pt-8 border-t-2 border-gray-200">
                <h3 className="text-2xl font-bold text-[#E74C3C] mb-6 flex items-center gap-2">
                  <span className="w-2 h-8 bg-[#E74C3C] rounded-full"></span>
                  予後・経過観察
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="font-bold text-blue-900 mb-3">長期的な経過観察が重要</h4>
                  <p className="text-sm text-gray-700 mb-4">
                    脱臼歯は歯髄（神経）の壊死や歯根吸収のリスクがあります。症状がなくても定期的なチェックが必要です。
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>固定期間中 <span className="font-bold">毎週</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>固定除去後 <span className="font-bold">1週間、1ヶ月、3ヶ月</span></span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>その後 <span className="font-bold">6ヶ月、1年、以降年1回</span></span>
                    </li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="font-bold text-gray-800 mb-3">注意すべき症状</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>歯の変色（神経の壊死の兆候）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>持続的な痛みや違和感</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>歯茎の腫れや膿</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>再び歯が動く</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 border-l-4 border-[#E74C3C] p-6 rounded-r-lg mt-6">
                  <p className="text-sm font-semibold text-[#E74C3C] mb-2">研究結果</p>
                  <p className="text-gray-700 leading-relaxed">
                    脱臼歯の固定期間は、骨の治癒と歯根吸収のリスクを考慮して決定されます。適切な固定（柔軟性のある固定で2〜4週間）により、歯の予後が大幅に改善されることが報告されています。長期的な経過観察により、遅発性の合併症も早期発見できます。
                  </p>
                  <p className="text-xs text-gray-500 italic mt-2">Kahler B et al., Dent Traumatol 2016</p>
                </div>
              </section>
            </article>

            {/* 軟組織損傷 */}
            <article id="case-4" className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#E74C3C]/20 scroll-mt-24">
              <header className="flex items-center gap-3 mb-8 pb-6 border-b-2 border-gray-200">
                <div className="bg-[#E74C3C] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">4</div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#5A4D41]">
                  唇<span className="text-[0.75em]">や</span>歯茎<span className="text-[0.75em]">を</span>切<span className="text-[0.75em]">った</span>（軟組織損傷）
                </h2>
              </header>

              <div className="space-y-8">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed">
                    顔面打撲により、唇・歯茎・舌・頬の内側などを切ることがあります。<span className="font-bold bg-yellow-100">出血が多い場合や深い傷の場合は速やかに受診</span>してください。
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#E74C3C] mb-4">応急処置</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span>清潔なガーゼやティッシュで圧迫止血（10〜15分）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span>冷水で口をゆすぐ（優しく）</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span>氷で冷やす（腫れの軽減）</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border-2 border-red-200">
                  <h4 className="font-bold text-red-800 mb-2">すぐに受診が必要な場合</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">•</span>
                      <span>出血が止まらない（15分以上）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">•</span>
                      <span>傷が深い（縫合が必要な可能性）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">•</span>
                      <span>異物が刺さっている</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 flex-shrink-0 mt-0.5">•</span>
                      <span>大きく腫れている</span>
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* 乳歯の外傷 */}
            <article id="case-5" className="bg-gradient-to-br from-blue-50 to-green-50 p-8 md:p-10 rounded-3xl shadow-lg border-2 border-blue-200 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5A4D41] mb-6 flex items-center gap-3">
                <span className="text-3xl">👶</span>
                乳歯<span className="text-[0.75em]">の</span>外傷<span className="text-[0.75em]">について</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-3">乳歯の特徴</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    乳歯の外傷は、<span className="font-bold bg-yellow-100">後継永久歯（大人の歯）に影響を及ぼす可能性</span>があります。特に3〜5歳の時期に多く見られます。
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>永久歯の萌出異常</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>エナメル質形成不全</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="text-yellow-500 flex-shrink-0 mt-0.5" size={16} />
                      <span>歯根の発育異常</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-gray-800 mb-3">乳歯脱落の対応</h3>
                  <p className="text-sm text-gray-700">
                    乳歯が完全に抜けた場合、永久歯に悪影響を及ぼす可能性があるため、<span className="font-bold">基本的には再植せず経過観察</span>となります。ただし、後継永久歯への影響を確認する必要がありますので、<span className="font-bold bg-yellow-100">必ず受診してください</span>。
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section className="py-6 md:py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E74C3C] font-bold tracking-[0.2em] text-sm block mb-2">PREVENTION</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-4">
              予防策
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">スポーツマウスガード</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                コンタクトスポーツ（ラグビー・ボクシング・格闘技など）では、カスタムメイドのマウスガードで歯を保護しましょう。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">子供の転倒予防</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                遊具の安全確認、段差の注意、ヘルメットの着用など、日常生活での事故防止を心がけましょう。
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">交通安全</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                自転車やバイクではヘルメット着用、車では必ずシートベルトを着用し、顔面への衝撃を防ぎましょう。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 md:py-6 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#E74C3C] font-bold tracking-[0.2em] text-sm block mb-2">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#5A4D41] font-serif mb-4">
              よくある質問
            </h2>
          </div>

          <div className="space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                <span>夜間・休日の対応はありますか？</span>
              </h3>
              <div className="ml-0 md:ml-12">
                <p className="text-[#8D8070] leading-relaxed mb-4">
                  はい。緊急時は当院の緊急連絡先（03-1234-5678）にお電話ください。歯の外傷は時間との勝負ですので、迅速に対応いたします。
                </p>
                <div className="bg-red-50 border-l-4 border-[#E74C3C] p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-[#5A4D41] mb-2">緊急連絡先</p>
                  <div className="flex items-center gap-3 text-[#E74C3C] font-bold text-lg">
                    <Phone size={20} />
                    <span>03-1234-5678</span>
                  </div>
                  <p className="text-xs text-[#8D8070] mt-2">24時間365日対応可能</p>
                </div>
              </div>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                <span>治療は保険適用されますか？</span>
              </h3>
              <div className="ml-0 md:ml-12">
                <p className="text-[#8D8070] leading-relaxed mb-4">
                  基本的な外傷治療（再植・固定・修復）は保険適用です。ただし、審美性を重視したセラミック治療などは自費診療となります。
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                    <p className="font-bold text-green-800 mb-2 text-sm">保険適用</p>
                    <ul className="space-y-1 text-xs text-[#8D8070]">
                      <li>• 再植術</li>
                      <li>• 暫間固定</li>
                      <li>• 基本的な修復治療</li>
                      <li>• 根管治療</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                    <p className="font-bold text-blue-800 mb-2 text-sm">自費診療</p>
                    <ul className="space-y-1 text-xs text-[#8D8070]">
                      <li>• セラミック治療</li>
                      <li>• 審美的修復</li>
                      <li>• 特殊な材料使用</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                <span>痛みはありますか？</span>
              </h3>
              <div className="ml-0 md:ml-12">
                <p className="text-[#8D8070] leading-relaxed mb-4">
                  治療時は局所麻酔を使用しますので、痛みはほとんどありません。治療後は鎮痛剤を処方いたします。
                </p>
                <div className="bg-blue-50 border-l-4 border-[#E67A2E] p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-[#5A4D41] mb-2">痛みへの配慮</p>
                  <ul className="space-y-2 text-sm text-[#8D8070]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#E67A2E] flex-shrink-0 mt-0.5" />
                      <span>局所麻酔の使用</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#E67A2E] flex-shrink-0 mt-0.5" />
                      <span>鎮痛剤の処方</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#E67A2E] flex-shrink-0 mt-0.5" />
                      <span>丁寧な説明と配慮</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ 4 */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                <span>子供の乳歯が抜けました。どうすればいいですか？</span>
              </h3>
              <div className="ml-0 md:ml-12">
                <p className="text-[#8D8070] leading-relaxed mb-4">
                  乳歯の場合、永久歯に悪影響を及ぼす可能性があるため、基本的には再植せず経過観察となります。ただし、後継永久歯への影響を確認する必要がありますので、必ず受診してください。
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-yellow-800 mb-2">乳歯外傷の注意点</p>
                  <ul className="space-y-2 text-sm text-[#8D8070]">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span>永久歯への影響を確認</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span>基本的に再植しない</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span>必ず受診して検査</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="font-bold text-lg md:text-xl mb-4 text-[#5A4D41] flex items-start gap-3">
                <span className="bg-[#E67A2E] text-white px-3 py-1 rounded-full text-sm flex-shrink-0">Q</span>
                <span>再植した歯の寿命はどのくらいですか？</span>
              </h3>
              <div className="ml-0 md:ml-12">
                <p className="text-[#8D8070] leading-relaxed mb-4">
                  適切な処置と経過観察により、10年以上機能する例も多くあります。ただし、個人差があり、定期的なメンテナンスが重要です。
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                  <p className="text-sm font-semibold text-green-800 mb-2">長持ちさせるポイント</p>
                  <ul className="space-y-2 text-sm text-[#8D8070]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>定期的な検診（3〜6ヶ月ごと）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>適切な口腔ケア</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>硬い物を避ける</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>スポーツ時のマウスガード使用</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 md:py-6 px-4 bg-gradient-to-b from-[#E74C3C] to-[#C0392B]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            歯<span className="text-[0.75em]">の</span>外傷<span className="text-[0.75em]">は</span>緊急対応<span className="text-[0.75em]">が</span>重要<span className="text-[0.75em]">です</span>
          </h2>
          <p className="text-lg mb-8 opacity-90">
            迷<span className="text-[0.75em]">ったら</span>すぐ<span className="text-[0.75em]">に</span>ご連絡<span className="text-[0.75em]">ください</span>。時間<span className="text-[0.75em]">が</span>経過<span className="text-[0.75em]">するほど</span>、治療<span className="text-[0.75em]">の</span>成功率<span className="text-[0.75em]">は</span>低下<span className="text-[0.75em]">します</span>。
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a href="tel:03-1234-5678" className="bg-white text-[#E74C3C] px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-gray-100 transition flex items-center gap-3 transform hover:scale-105">
              <Phone size={28} />
              <div className="text-left">
                <p className="text-xs opacity-70">緊急連絡</p>
                <p>03-1234-5678</p>
              </div>
            </a>
            <a href="#" className="bg-yellow-400 text-gray-900 px-10 py-5 rounded-full font-bold text-xl shadow-2xl hover:bg-yellow-300 transition flex items-center gap-3 transform hover:scale-105">
              <Calendar size={28} />
              24時間WEB予約
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="font-bold text-xl mb-4">診療時間</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-bold mb-1">平日</p>
                <p>10:00-13:00 / 14:00-18:30</p>
              </div>
              <div>
                <p className="font-bold mb-1">土日</p>
                <p>9:00-12:00 / 13:00-16:00</p>
              </div>
            </div>
            <p className="text-xs mt-4 opacity-75">休診日：火曜日・祝日</p>
            <p className="text-sm mt-2 font-bold">※ 緊急時は休診日でも対応いたします</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TraumaPage;
