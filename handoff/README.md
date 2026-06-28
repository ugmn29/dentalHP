# 豊洲の歯医者 — ヒーローセクション 組み込み手順

このフォルダには、既存ホームページに組み込むための3点が入っています:

```
handoff/
├── hero.html       ← <body> 内にコピペするHTMLパーツ
├── hero.css        ← 既存CSSに追記するスタイル
└── README.md       ← このファイル (組み込み手順)
```

別途、背景画像が必要です:
```
assets/hero-bg.png  ← 元プロジェクト assets/ にあります
```

---

## 🎯 Claude Code への依頼文 (コピペ用)

Claude Code を開いて、既存サイトのリポジトリで以下を貼り付けてください:

```
既存サイトに新しいヒーローセクションを組み込んでください。

1. 既存の <body> 直下のヒーローを、handoff/hero.html の <section class="hero"> に置き換える
2. handoff/hero.css の中身を、既存のメインCSSファイル末尾に追記する
   (既存に .hero クラスが衝突する場合は、私のクラス名を .hero-new に一括リネームしてOK)
3. <head> に Google Fonts が無ければ以下を追加:
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;500&family=Cormorant+Garamond:wght@300;400&display=swap" rel="stylesheet">
4. 背景画像を assets/hero-bg.png として配置 (元データから持ってくる)
5. CSS 変数 --hero-bg のパスを、実際の画像配置先に合わせる
6. 予約ページのURLを <a class="hero__cta" href="..."> に設定する
7. 既存ヘッダーがある場合、ヒーローと重ならないか確認 (必要なら .hero の min-height を calc(100vh - {ヘッダー高}) に調整)

組み込み後、開発サーバーを立ち上げて表示確認してください。
```

---

## 📋 手動で組み込む場合の手順

### ステップ1: 画像を配置
`assets/hero-bg.png` (またはJPG) を、既存サイトの画像フォルダ (例: `images/`) に配置

### ステップ2: CSSを追記
`hero.css` の中身を、既存のメインCSS (`style.css` 等) の末尾にコピペ。
画像パスを書き換える:
```css
--hero-bg: url("images/hero-bg.png");  /* 実際のパスに */
```

### ステップ3: HTMLを差し替え
既存サイトの `<body>` 内、ヘッダー直下にあるヒーローセクションを `hero.html` の中身に置き換え。

### ステップ4: フォント
`<head>` に Google Fonts の `<link>` 3行を追加 (既にあれば不要)。
既存サイトに別の明朝フォントを使っている場合は、CSSの `--hero-font-serif` を書き換え:
```css
--hero-font-serif: "既存のフォント名", serif;
```

### ステップ5: 予約URL
`<a class="hero__cta" href="#reservation">` の `href` を実際の予約ページURLに変更。

---

## 🎨 カスタマイズ可能な箇所 (CSS変数)

`.hero { ... }` の冒頭の変数で簡単に調整できます:

| 変数 | 役割 | 初期値 |
|---|---|---|
| `--hero-bg` | 背景画像のパス | `url("assets/hero-bg.png")` |
| `--hero-image-position` | 画像の表示中心 | `30% center` |
| `--hero-overlay` | 文字読みやすさのオーバーレイ濃度 (0=なし) | `0.15` |
| `--hero-font-serif` | 和文フォント | Noto Serif JP |
| `--hero-accent` | アクセント色 (《》とNEW OPENとボタン) | `#4a8a82` |
| `--hero-cta-bg` | ボタン背景色 | `#4a8a82` |

---

## ⚠️ 既知の注意点

- **クラス名衝突**: 既存サイトに `.hero` クラスがあるとスタイルが競合する可能性があります。その場合は私のクラスを `.hero-new` に一括変更してください。
- **ヘッダーとの重なり**: `min-height: 100vh` でフルビューポートを取るため、固定ヘッダーがある場合は `calc(100vh - 80px)` 等に調整。
- **背景画像**: 横長 (16:9以上)、最低1920px幅、明るい内装写真、右側に余白がある構図を推奨。文字なしで。
- **モバイル**: 640px以下では文字が画像下部に乗るレイアウトに自動切替。
