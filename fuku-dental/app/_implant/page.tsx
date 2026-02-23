"use client";

import React from 'react';
import { TreatmentLayout } from '../../components/TreatmentLayout';

export default function ImplantPage() {
    return (
        <TreatmentLayout
            title="インプラント"
            titleEn="Implant"
            pagePath="/_implant"
            lead={
                <>
                    「入れ歯が合わなくて痛い」「ブリッジにするために健康な歯を削りたくない」<br />
                    そんなお悩みをお持ちの方に、第2の永久歯「インプラント」をご提案します。<br />
                    <br />
                    インプラントは、歯を失った部分の顎の骨に人工の根（チタン製）を埋め込み、<br />
                    その上に人工の歯を装着する治療法です。<br />
                    天然の歯と同じようにしっかりと噛むことができ、見た目も自然で美しいのが特徴です。<br />
                    当院では、CTによる精密な診断と、安全性を最優先した手術を行っています。
                </>
            }
            recommended={[
                "入れ歯の違和感や痛みに悩んでいる方",
                "健康な隣の歯を削りたくない方（ブリッジを避けたい方）",
                "硬いものでもバリバリと美味しく食べたい方",
                "見た目を自然で美しく仕上げたい方",
                "発音を気にせず会話を楽しみたい方"
            ]}
            features={[
                {
                    id: "01",
                    title: "Precision Diagnosis",
                    highlight: "CTによる精密診断",
                    summary: "<span class='font-bold bg-yellow-100'>3次元データで骨の状態を正確に把握</span>し、安全な手術を実現します。",
                    details: [
                        "<span class='font-bold bg-yellow-100'>歯科用CTで骨の厚みや神経の位置を正確に把握</span>",
                        "<span class='text-[#395b45] font-bold'>専用ソフトによるシミュレーションで最適な埋入位置を決定</span>",
                        "<span class='text-[#395b45] font-bold'>リスクを最小限に抑えた安全な手術計画の立案</span>"
                    ],
                    imageId: "feature1",
                    imageAlt: "歯科用CTによる診断の様子"
                },
                {
                    id: "02",
                    title: "Pain Management",
                    highlight: "痛みに配慮した手術",
                    summary: "<span class='font-bold bg-yellow-100'>麻酔の工夫と静脈内鎮静法</span>で、リラックスして手術を受けられます。",
                    details: [
                        "<span class='font-bold bg-yellow-100'>表面麻酔と極細の針を使用した痛みの少ない局所麻酔</span>",
                        "<span class='text-[#395b45] font-bold'>眠っているような状態で手術を受けられる「静脈内鎮静法」に対応</span>",
                        "<span class='text-[#395b45] font-bold'>術後の腫れや痛みを抑える低侵襲な手術手技</span>"
                    ],
                    imageId: "feature2",
                    imageAlt: "リラックスした状態での治療"
                },
                {
                    id: "03",
                    title: "Top Quality",
                    highlight: "信頼性の高いインプラント",
                    summary: "<span class='font-bold bg-yellow-100'>世界的に実績のあるトップブランドのインプラント体</span>を使用しています。",
                    details: [
                        "<span class='font-bold bg-yellow-100'>世界シェアNo.1のストローマン社製インプラントを採用</span>",
                        "<span class='text-[#395b45] font-bold'>長期的な安定性と安全性が科学的に証明された製品のみを使用</span>",
                        "<span class='text-[#395b45] font-bold'>患者様の骨質や症例に合わせた最適なインプラントの選定</span>"
                    ],
                    imageId: "feature3",
                    imageAlt: "高品質なインプラント体"
                },
                {
                    id: "04",
                    title: "Long-term Support",
                    highlight: "万全の保証とケア",
                    summary: "治療後も長く快適にお使いいただくための<span class='font-bold bg-yellow-100'>サポート体制</span>が整っています。",
                    details: [
                        "<span class='font-bold bg-yellow-100'>インプラント体10年、上部構造5年の安心保証制度</span>",
                        "<span class='text-[#395b45] font-bold'>専任の歯科衛生士による定期的なメンテナンス</span>",
                        "<span class='text-[#395b45] font-bold'>インプラント周囲炎を防ぐための徹底したクリーニング</span>"
                    ],
                    imageId: "feature4",
                    imageAlt: "定期メンテナンスの様子"
                }
            ]}
            merits={[
                "天然歯と同じように強く噛める（咀嚼機能の回復）",
                "隣の健康な歯を削る必要がない",
                "見た目が自然で美しい",
                "顎の骨が痩せるのを防ぐ効果がある",
                "違和感が少なく、発音もしやすい"
            ]}
            demerits={[
                "外科手術が必要",
                "保険適用外のため費用が高額になる",
                "治療期間が比較的長い（3ヶ月〜半年程度）",
                "術後のメンテナンスが不可欠（インプラント周囲炎のリスク）"
            ]}
            steps={[
                {
                    title: "カウンセリング・検査",
                    description: "レントゲンやCT撮影を行い、骨の状態を詳しく調べます。治療計画や費用について丁寧にご説明します。",
                },
                {
                    title: "一次手術（インプラント埋入）",
                    description: "顎の骨にインプラント体（人工歯根）を埋め込みます。手術時間は本数によりますが、1〜2時間程度です。",
                },
                {
                    title: "治癒期間",
                    description: "インプラントと骨がしっかりと結合するのを待ちます。下顎で3ヶ月、上顎で6ヶ月程度が目安です。",
                },
                {
                    title: "二次手術（土台の装着）",
                    description: "歯茎を切開してインプラントの頭出しを行い、人工歯を装着するための土台（アバットメント）を取り付けます。",
                },
                {
                    title: "人工歯の製作・装着",
                    description: "型取りを行い、セラミックなどの人工歯を作製して装着します。噛み合わせを調整して完成です。",
                },
                {
                    title: "メンテナンス",
                    description: "インプラントを長持ちさせるために、定期的なクリーニングと検診が欠かせません。",
                }
            ]}
            risks={[
                "手術に伴う痛み、腫れ、出血が一時的に起こる場合があります。",
                "神経損傷による麻痺や、血管損傷による出血のリスクが稀にあります（CT診断で回避します）。",
                "メンテナンスを怠ると「インプラント周囲炎」になり、インプラントが抜け落ちる可能性があります。",
                "骨の状態によっては、追加の骨造成手術が必要になる場合があります。"
            ]}
            faqs={[
                {
                    q: "手術は痛いですか？",
                    a: "手術中は局所麻酔を行いますので、痛みを感じることはほとんどありません。術後は多少の腫れや痛みが出ることがありますが、痛み止めでコントロールできる範囲内であることが大半です。",
                },
                {
                    q: "インプラントはどれくらい持ちますか？",
                    a: "適切なメンテナンスを行えば、10年、20年と長期間使い続けることができます。10年生存率は90%以上と言われていますが、日頃のケアと定期検診が非常に重要です。",
                },
                {
                    q: "高齢でも手術できますか？",
                    a: "全身の健康状態に問題がなければ、年齢制限はありません。ただし、骨粗鬆症のお薬を服用されている方や、重度の糖尿病の方などは注意が必要です。まずはご相談ください。",
                }
            ]}
            relatedPages={[
                { title: "インプラントの種類", desc: "1ピース、2ピース、オールオン4など、様々なインプラントの種類をご紹介します。", href: "/implant/types", icon: "📋" },
                { title: "インプラントの費用", desc: "治療にかかる費用の目安と、お支払い方法について詳しくご説明します。", href: "/implant/cost", icon: "💰" },
                { title: "インプラント vs 入れ歯", desc: "インプラントと入れ歯の違いを、メリット・デメリットで比較します。", href: "/implant/vs-denture", icon: "⚖️" },
                { title: "インプラントの手術", desc: "手術の流れや使用する機器、安全対策について詳しく解説します。", href: "/implant/procedure", icon: "🏥" },
                { title: "インプラントの症例", desc: "実際の治療事例をビフォーアフターでご覧いただけます。", href: "/implant/case-studies", icon: "📸" }
            ]}
            showImplantHero={true}
        />
    );
}
