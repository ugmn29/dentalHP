import React from 'react';

interface IconProps {
  className?: string;
}

// 1. 手術による腫れや痛み - 歯に稲妻
export function ToothPainIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 歯の形 */}
      <path
        d="M32 8C24 8 20 12 18 16C16 20 16 28 16 32C16 36 16 44 18 48C20 52 22 56 26 56C28 56 28 54 28 52C28 50 28 46 28 44C28 42 28 40 30 40C32 40 34 40 34 42C34 44 34 46 34 48C34 50 34 52 34 54C34 56 36 58 38 56C42 54 44 50 46 46C48 42 48 36 48 32C48 28 48 20 46 16C44 12 40 8 32 8Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* 稲妻 */}
      <path
        d="M42 14L36 24L40 24L34 34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// 2. 骨が足りない - 悩む顔
export function WorriedFaceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 顔の輪郭 */}
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* 左目 */}
      <path d="M24 28C24 28 26 26 28 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* 右目 */}
      <path d="M36 28C36 28 38 26 40 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* 困った口 */}
      <path d="M24 38C24 38 26 36 28 36C30 36 32 36 34 36C36 36 38 36 40 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* 汗 */}
      <circle cx="18" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

// 3. 抜歯器具
export function ExtractionToolIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 鉗子の左側 */}
      <path
        d="M28 12L26 20L24 28C24 30 26 32 28 32C30 32 32 30 32 28L30 20L28 12Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* 鉗子の右側 */}
      <path
        d="M36 12L38 20L40 28C40 30 38 32 36 32C34 32 32 30 32 28L34 20L36 12Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* 抜歯する歯 */}
      <path
        d="M28 36C26 36 24 38 24 40C24 42 24 46 26 50C28 54 30 56 32 56C34 56 36 54 38 50C40 46 40 42 40 40C40 38 38 36 36 36C34 36 34 38 32 38C30 38 30 36 28 36Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

// 4. 歯科医師
export function DentistIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 顔 */}
      <circle cx="32" cy="24" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* 体（白衣） */}
      <path
        d="M20 34C20 34 22 32 24 32L28 32L28 52L24 52C22 52 20 50 20 48L20 34Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M44 34C44 34 42 32 40 32L36 32L36 52L40 52C42 52 44 50 44 48L44 34Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* 首 */}
      <rect x="28" y="32" width="8" height="4" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

// 5. 歯にハテナ - 治療法が分からない
export function ToothQuestionIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 歯の形 */}
      <path
        d="M32 12C26 12 22 14 20 18C18 22 18 28 18 32C18 36 18 42 20 46C22 50 24 54 28 54C30 54 30 52 30 50C30 48 30 44 30 42C30 40 30 38 32 38C34 38 34 40 34 42C34 44 34 48 34 50C34 52 34 54 36 54C40 54 42 50 44 46C46 42 46 36 46 32C46 28 46 22 44 18C42 14 38 12 32 12Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* ハテナマーク */}
      <path
        d="M30 22C30 22 30 20 32 20C34 20 34 22 34 22C34 24 32 24 32 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="30" r="1.5" fill="currentColor" />
    </svg>
  );
}

// 6. 入れ歯
export function DentureIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 上の入れ歯 */}
      <path
        d="M16 24C16 22 18 20 20 20L44 20C46 20 48 22 48 24L48 28L16 28L16 24Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* 上の歯 */}
      <line x1="22" y1="20" x2="22" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="28" y1="20" x2="28" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="34" y1="20" x2="34" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="40" y1="20" x2="40" y2="28" stroke="currentColor" strokeWidth="2" />
      {/* 下の入れ歯 */}
      <path
        d="M16 36C16 38 18 40 20 40L44 40C46 40 48 38 48 36L48 32L16 32L16 36Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* 下の歯 */}
      <line x1="22" y1="32" x2="22" y2="40" stroke="currentColor" strokeWidth="2" />
      <line x1="28" y1="32" x2="28" y2="40" stroke="currentColor" strokeWidth="2" />
      <line x1="34" y1="32" x2="34" y2="40" stroke="currentColor" strokeWidth="2" />
      <line x1="40" y1="32" x2="40" y2="40" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// 7. 歯に盾 - 安全性
export function ToothShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 歯の形 */}
      <path
        d="M32 12C26 12 22 14 20 18C18 22 18 28 18 32C18 36 18 42 20 46C22 50 24 54 28 54C30 54 30 52 30 50C30 48 30 44 30 42C30 40 30 38 32 38C34 38 34 40 34 42C34 44 34 48 34 50C34 52 34 54 36 54C40 54 42 50 44 46C46 42 46 36 46 32C46 28 46 22 44 18C42 14 38 12 32 12Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* 盾 */}
      <path
        d="M40 18L40 24C40 28 36 30 32 30C28 30 24 28 24 24L24 18L32 16L40 18Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

// 8. 財布 - 治療費
export function WalletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* 財布の本体 */}
      <path
        d="M16 24C16 22 18 20 20 20L44 20C46 20 48 22 48 24L48 44C48 46 46 48 44 48L20 48C18 48 16 46 16 44L16 24Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* がま口の上部 */}
      <path
        d="M20 20C20 20 24 16 32 16C40 16 44 20 44 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* 留め具 */}
      <circle cx="32" cy="16" r="2" fill="currentColor" />
      {/* 財布のディテール */}
      <circle cx="38" cy="34" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}
