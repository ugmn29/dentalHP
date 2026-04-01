#!/usr/bin/env python3
"""イラスト画像を自動振り分けするスクリプト"""
import os
import shutil

SOURCE_DIR = "/Users/fukunagashindai/Downloads/フク歯科HP"
DEST_BASE = "/Users/fukunagashindai/Downloads/フク歯科HP/fuku-dental/public/images/pages"

# ファイル名 → 保存先フォルダ
MAP = {
    # トップページ
    "スマホで予約する人": "homepage",
    "受付で挨拶している場面": "homepage",
    "カウンセリングで医師と患者が話している場面": "homepage",
    "治療中の場面": "homepage",
    "次回予約をしている場面": "homepage",
    # こども矯正メイン
    "MFT舌のトレーニングをしている子供": "kidsortho",
    "こども矯正の料金プラン図解": "kidsortho",
    "親子が歯科医師と相談している場面": "kidsortho",
    "子供がレントゲン撮影をしている場面": "kidsortho",
    "モニターで治療計画を説明している場面": "kidsortho",
    "子供がマウスピースを装着している場面": "kidsortho",
    "笑顔の子供が歯を見せている場面": "kidsortho",
    # こども矯正 - 歯並びの種類
    "7種類の不正咬合一覧の歯列図": "kidsortho/types",
    "過蓋咬合の横顔と噛み合わせ断面図": "kidsortho/types/deepbite",
    "出っ歯の横顔と歯列図": "kidsortho/types/overbite",
    "開咬の正面歯列図": "kidsortho/types/openbite",
    "すきっ歯の正面歯列図": "kidsortho/types/spacing",
    "受け口の横顔と歯列図": "kidsortho/types/underbite",
    "叢生ガタガタの正面歯列図": "kidsortho/types/crowding",
    "交叉咬合の正面歯列図": "kidsortho/types/crossbite",
    # こども矯正 - 知識系
    "こども矯正の費用内訳円グラフ": "kidsortho/cost",
    "1期2期治療のタイムライン帯グラフ": "kidsortho/duration",
    "歯の生え変わりと治療開始ベストタイミング": "kidsortho/timing",
    "あいうべ体操4ステップの口の形": "kidsortho/mft-training",
    "ガムトレーニング3ステップ手順": "kidsortho/gum-training",
    "スポーツと楽器をする子供と矯正装置": "kidsortho/sports-and-music",
    "良い姿勢と悪い姿勢の比較図": "kidsortho/posture-improvement",
    "矯正の痛みが減る曲線グラフ": "kidsortho/pain-management",
    "治療した場合としなかった場合の歯並び比較": "kidsortho/avoid-regret",
    "3歳6歳12歳の顎の成長変化シルエット": "kidsortho/underbite-natural-cure",
    "口呼吸と鼻呼吸の顔の発達比較": "kidsortho/mouth-breathing-risks",
    # 矯正
    "矯正法別の費用比較棒グラフ": "orthodontics/cost",
    "矯正法別の治療期間タイムライン": "orthodontics/duration",
    # セラミック
    "セラミック素材別の寿命比較グラフ": "ceramic/longevity",
    "セラミック治療の料金比較表": "ceramic/cost",
    # ホワイトニング
    "ホワイトニング3種類の比較図": "whitening/types",
    "ホワイトニング各プランの料金比較表": "whitening/cost",
    "ホワイトニング剤が浸透する歯の断面図": "whitening/safety",
    "ホワイトニング効果持続期間のグラフ": "whitening/duration",
    # 虫歯
    "C0からC4の虫歯進行段階の歯断面図": "cavity/stages",
    "虫歯治療法別の歯断面図": "cavity/treatment-methods",
    "虫歯治療法別の費用比較表": "cavity/cost",
    "虫歯の痛み応急処置4ステップ図": "cavity/pain",
    # 根管治療
    "根管治療3種類の歯断面図解": "root-canal/types",
    "根管治療の保険と自費の費用比較表": "root-canal/cost",
    "根管治療タイプ別の通院回数タイムライン": "root-canal/duration",
    "根管治療の痛みの推移グラフ": "root-canal/pain",
    # 予防歯科
    "予防処置別の費用一覧表": "preventive/cost",
    # こども歯科
    "歯医者克服ステップアップ4段階図": "kids-preventive/overcoming-fear",
    # 口育
    "子供が風船やシャボン玉で遊んでいるイラスト": "oral-education",
    "医師と親子が対面で話している場面": "oral-education",
    "口腔内写真撮影と態癖チェック": "oral-education",
    "子供がトレーニング中で衛生士が見守る場面": "oral-education",
    "笑顔の子供とGoodサイン": "oral-education",
    # 歯周病
    "食事喫煙ストレスなど歯周病リスク因子のインフォグラフィック": "periodontal",
    "リコールはがきやLINE通知のリマインドイメージ": "periodontal",
    "歯周病の進行段階図": "periodontal/stages",
    # マウスピース矯正
    "舌の正しい位置を示す口腔断面図": "mouthpiece",
    "患者と歯科医師がマウスピースサンプルで相談": "mouthpiece",
    "iTeroでスキャン中の場面": "mouthpiece",
    "3D画面で歯が動くシミュレーション": "mouthpiece",
    "マウスピースセットを患者に渡している場面": "mouthpiece",
    "カレンダーに通院マークとマウスピース交換": "mouthpiece",
    # インプラント
    "インプラント3層構造の断面図": "implant",
    "抜歯即時埋入の断面図タイムライン": "implant",
    "骨造成治療の4段階図": "implant",
    "オーバーデンチャーの構造図": "implant",
    "抜歯を勧められた患者に希望のインプラント": "implant",
    "骨が足りなくても骨造成で対応可能": "implant",
    "インプラント1本の費用内訳フロー図": "implant/cost",
    "インプラントと入れ歯とブリッジの比較図": "implant/comparison",
    "インプラント治療6段階フローチャート": "implant/flow",
    "インプラントQA吹き出しイラスト": "implant/qa",
    # 外傷
    "歯の外傷と応急処置の手順図": "concerns/trauma",
}

count = 0
not_found = 0

for name, dest_folder in MAP.items():
    dest_dir = os.path.join(DEST_BASE, dest_folder)
    found = False

    for ext in ["jpg", "jpeg", "png", "webp"]:
        file_path = os.path.join(SOURCE_DIR, f"{name}.{ext}")
        if os.path.exists(file_path):
            os.makedirs(dest_dir, exist_ok=True)
            dest_path = os.path.join(dest_dir, f"{name}.jpg")
            shutil.copy2(file_path, dest_path)
            print(f"✓ {name}.{ext} → {dest_folder}/")
            count += 1
            found = True
            break

    if not found:
        print(f"✗ 未発見: {name}.*")
        not_found += 1

print()
print("=============================")
print(f"振り分け完了: {count}枚")
print(f"未発見: {not_found}枚")
print("=============================")
