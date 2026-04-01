#!/bin/bash
# イラスト画像を自動振り分けするスクリプト
# 使い方: フク歯科HPフォルダに画像を入れてから実行

SOURCE_DIR="/Users/fukunagashindai/Downloads/フク歯科HP"
DEST_BASE="/Users/fukunagashindai/Downloads/フク歯科HP/fuku-dental/public/images/pages"

# ファイル名 → 保存先フォルダのマッピング
declare -A MAP

# トップページ
MAP["スマホで予約する人"]="homepage"
MAP["受付で挨拶している場面"]="homepage"
MAP["カウンセリングで医師と患者が話している場面"]="homepage"
MAP["治療中の場面"]="homepage"
MAP["次回予約をしている場面"]="homepage"

# こども矯正メイン
MAP["MFT舌のトレーニングをしている子供"]="kidsortho"
MAP["こども矯正の料金プラン図解"]="kidsortho"
MAP["親子が歯科医師と相談している場面"]="kidsortho"
MAP["子供がレントゲン撮影をしている場面"]="kidsortho"
MAP["モニターで治療計画を説明している場面"]="kidsortho"
MAP["子供がマウスピースを装着している場面"]="kidsortho"
MAP["笑顔の子供が歯を見せている場面"]="kidsortho"

# こども矯正 - 歯並びの種類
MAP["7種類の不正咬合一覧の歯列図"]="kidsortho/types"
MAP["過蓋咬合の横顔と噛み合わせ断面図"]="kidsortho/types/deepbite"
MAP["出っ歯の横顔と歯列図"]="kidsortho/types/overbite"
MAP["開咬の正面歯列図"]="kidsortho/types/openbite"
MAP["すきっ歯の正面歯列図"]="kidsortho/types/spacing"
MAP["受け口の横顔と歯列図"]="kidsortho/types/underbite"
MAP["叢生ガタガタの正面歯列図"]="kidsortho/types/crowding"
MAP["交叉咬合の正面歯列図"]="kidsortho/types/crossbite"

# こども矯正 - 知識系
MAP["こども矯正の費用内訳円グラフ"]="kidsortho/cost"
MAP["1期2期治療のタイムライン帯グラフ"]="kidsortho/duration"
MAP["歯の生え変わりと治療開始ベストタイミング"]="kidsortho/timing"
MAP["あいうべ体操4ステップの口の形"]="kidsortho/mft-training"
MAP["ガムトレーニング3ステップ手順"]="kidsortho/gum-training"
MAP["スポーツと楽器をする子供と矯正装置"]="kidsortho/sports-and-music"
MAP["良い姿勢と悪い姿勢の比較図"]="kidsortho/posture-improvement"
MAP["矯正の痛みが減る曲線グラフ"]="kidsortho/pain-management"
MAP["治療した場合としなかった場合の歯並び比較"]="kidsortho/avoid-regret"
MAP["3歳6歳12歳の顎の成長変化シルエット"]="kidsortho/underbite-natural-cure"
MAP["口呼吸と鼻呼吸の顔の発達比較"]="kidsortho/mouth-breathing-risks"

# 矯正
MAP["矯正法別の費用比較棒グラフ"]="orthodontics/cost"
MAP["矯正法別の治療期間タイムライン"]="orthodontics/duration"

# セラミック
MAP["セラミック素材別の寿命比較グラフ"]="ceramic/longevity"
MAP["セラミック治療の料金比較表"]="ceramic/cost"

# ホワイトニング
MAP["ホワイトニング3種類の比較図"]="whitening/types"
MAP["ホワイトニング各プランの料金比較表"]="whitening/cost"
MAP["ホワイトニング剤が浸透する歯の断面図"]="whitening/safety"
MAP["ホワイトニング効果持続期間のグラフ"]="whitening/duration"

# 虫歯
MAP["C0からC4の虫歯進行段階の歯断面図"]="cavity/stages"
MAP["虫歯治療法別の歯断面図"]="cavity/treatment-methods"
MAP["虫歯治療法別の費用比較表"]="cavity/cost"
MAP["虫歯の痛み応急処置4ステップ図"]="cavity/pain"

# 根管治療
MAP["根管治療3種類の歯断面図解"]="root-canal/types"
MAP["根管治療の保険と自費の費用比較表"]="root-canal/cost"
MAP["根管治療タイプ別の通院回数タイムライン"]="root-canal/duration"
MAP["根管治療の痛みの推移グラフ"]="root-canal/pain"

# 予防歯科
MAP["予防処置別の費用一覧表"]="preventive/cost"

# こども歯科
MAP["歯医者克服ステップアップ4段階図"]="kids-preventive/overcoming-fear"

# 口育
MAP["子供が風船やシャボン玉で遊んでいるイラスト"]="oral-education"
MAP["医師と親子が対面で話している場面"]="oral-education"
MAP["口腔内写真撮影と態癖チェック"]="oral-education"
MAP["子供がトレーニング中で衛生士が見守る場面"]="oral-education"
MAP["笑顔の子供とGoodサイン"]="oral-education"

# 歯周病
MAP["食事喫煙ストレスなど歯周病リスク因子のインフォグラフィック"]="periodontal"
MAP["リコールはがきやLINE通知のリマインドイメージ"]="periodontal"
MAP["歯周病の進行段階図"]="periodontal/stages"

# マウスピース矯正
MAP["舌の正しい位置を示す口腔断面図"]="mouthpiece"
MAP["患者と歯科医師がマウスピースサンプルで相談"]="mouthpiece"
MAP["iTeroでスキャン中の場面"]="mouthpiece"
MAP["3D画面で歯が動くシミュレーション"]="mouthpiece"
MAP["マウスピースセットを患者に渡している場面"]="mouthpiece"
MAP["カレンダーに通院マークとマウスピース交換"]="mouthpiece"

# インプラント
MAP["インプラント3層構造の断面図"]="implant"
MAP["抜歯即時埋入の断面図タイムライン"]="implant"
MAP["骨造成治療の4段階図"]="implant"
MAP["オーバーデンチャーの構造図"]="implant"
MAP["抜歯を勧められた患者に希望のインプラント"]="implant"
MAP["骨が足りなくても骨造成で対応可能"]="implant"
MAP["インプラント1本の費用内訳フロー図"]="implant/cost"
MAP["インプラントと入れ歯とブリッジの比較図"]="implant/comparison"
MAP["インプラント治療6段階フローチャート"]="implant/flow"
MAP["インプラントQA吹き出しイラスト"]="implant/qa"

# 外傷
MAP["歯の外傷と応急処置の手順図"]="concerns/trauma"

# 振り分け実行
COUNT=0
NOTFOUND=0

for NAME in "${!MAP[@]}"; do
  DEST_DIR="${DEST_BASE}/${MAP[$NAME]}"

  # jpg, jpeg, png, webp を検索
  FOUND=false
  for EXT in jpg jpeg png webp; do
    FILE="${SOURCE_DIR}/${NAME}.${EXT}"
    if [ -f "$FILE" ]; then
      mkdir -p "$DEST_DIR"
      # jpgに変換してコピー（拡張子統一）
      cp "$FILE" "${DEST_DIR}/${NAME}.jpg"
      echo "✓ ${NAME}.${EXT} → ${MAP[$NAME]}/"
      COUNT=$((COUNT + 1))
      FOUND=true
      break
    fi
  done

  if [ "$FOUND" = false ]; then
    echo "✗ 未発見: ${NAME}.{jpg,png,webp}"
    NOTFOUND=$((NOTFOUND + 1))
  fi
done

echo ""
echo "============================="
echo "振り分け完了: ${COUNT}枚"
echo "未発見: ${NOTFOUND}枚"
echo "============================="
