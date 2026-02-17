# トレーニング・教育ページの画像追加完了

## 更新したページ（4ページ）

1. **MFTトレーニングページ**
   - ファイル: `/fuku-dental/app/kidsortho/mft-training/page.tsx`
   - 追加画像: 3枚（hero, method, effect）

2. **ガムトレーニングページ**
   - ファイル: `/fuku-dental/app/kidsortho/gum-training/page.tsx`
   - 追加画像: 3枚（hero, method, effect）

3. **食育レシピページ**
   - ファイル: `/fuku-dental/app/kidsortho/food-education/page.tsx`
   - 追加画像: 3枚（hero, method, effect）

4. **姿勢改善マニュアルページ**
   - ファイル: `/fuku-dental/app/kidsortho/posture-improvement/page.tsx`
   - 追加画像: 3枚（hero, method, effect）

## 追加した画像の詳細

### 画像配置場所
`/fuku-dental/public/images/kidsortho/training/`

### 必要な画像ファイル（全12枚）

#### MFTトレーニング
1. `mft-training-hero.jpg` - MFTトレーニングのヒーロー画像
   - alt: "MFTトレーニング - あいうべ体操とボタンプルで口腔機能を改善"
   
2. `mft-training-method.jpg` - あいうべ体操の実践方法
   - alt: "あいうべ体操の正しいやり方 - 口腔筋機能療法の実践方法"
   
3. `mft-training-effect.jpg` - MFTの効果
   - alt: "MFTトレーニングの効果 - 口腔機能の改善と歯並びへの影響"

#### ガムトレーニング
4. `gum-training-hero.jpg` - ガムトレーニングのヒーロー画像
   - alt: "ガムトレーニング - キシリトールガムで咬合力と顎の発達を促進"
   
5. `gum-training-method.jpg` - ガムトレーニングの実践方法
   - alt: "ガムトレーニングの正しいやり方 - 片側10回ずつバランスよく噛む"
   
6. `gum-training-effect.jpg` - ガムトレーニングの効果
   - alt: "ガムトレーニングの効果 - 咬合力の向上と顎の発達"

#### 食育レシピ
7. `food-education-hero.jpg` - 食育のヒーロー画像
   - alt: "食育レシピ - よく噛む食事で顎の発達を促進し歯並びを改善"
   
8. `food-education-method.jpg` - 食育の実践方法
   - alt: "食育の実践方法 - 硬い食べ物を前歯で噛みちぎる練習"
   
9. `food-education-effect.jpg` - 食育の効果
   - alt: "食育の効果 - 顎の発達と歯並びの改善"

#### 姿勢改善マニュアル
10. `posture-improvement-hero.jpg` - 姿勢改善のヒーロー画像
    - alt: "姿勢改善マニュアル - 正しい姿勢で咬合と歯並びを改善"
    
11. `posture-improvement-method.jpg` - 姿勢改善トレーニングの方法
    - alt: "姿勢改善トレーニングの方法 - 足指トレーニングと壁立ち練習"
    
12. `posture-improvement-effect.jpg` - 姿勢改善の効果
    - alt: "姿勢改善の効果 - 咬合の改善と全身の健康への影響"

## 画像の配置パターン

各ページで以下の3箇所に画像を配置しました：

1. **ヒーローセクション** - ページ上部のタイトル直下
   - ファイル名: `{トピック名}-hero.jpg`
   - priority={true} 設定（LCP最適化）
   
2. **トレーニング方法セクション** - 実践方法の説明部分
   - ファイル名: `{トピック名}-method.jpg`
   - 実際のやり方を視覚的に示す
   
3. **効果セクション** - 効果が出るまでの期間の説明部分
   - ファイル名: `{トピック名}-effect.jpg`
   - 期待できる効果を視覚的に示す

## KidsOrthoImageコンポーネントの使用

すべての画像で以下の設定を使用：
- category="training" - トレーニングカテゴリの画像として統一
- 適切なalt属性でSEO対策
- ヒーロー画像のみpriority={true}でLCP最適化

## 次のステップ

1. 上記12枚の画像を作成または準備
2. `/fuku-dental/public/images/kidsortho/training/` ディレクトリに配置
3. 各画像が適切に表示されることを確認
4. モバイル表示でのレスポンシブ対応を確認

## 技術的な詳細

- すべてのページでKidsOrthoImageコンポーネントをインポート済み
- 画像は自動的にWebP形式に最適化される（Next.js Image最適化）
- レスポンシブ対応で適切なサイズの画像が配信される
- lazy loading（遅延読み込み）でパフォーマンス最適化
