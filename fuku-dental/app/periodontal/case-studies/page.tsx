import type { Metadata } from 'next';
import { TreatmentLayout } from '@/components/TreatmentLayout';
import { Clock, DollarSign, CheckCircle, Star, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: '歯周病治療の症例紹介｜治療事例と患者様の声｜F歯科・矯正歯科 豊洲プライムスクエア院',
  description: '歯周病治療の症例を詳しくご紹介。軽度から重度まで、実際の治療例と患者様の声を掲載しています。',
  keywords: '歯周病,症例,事例,体験談,患者様の声,ビフォーアフター,治療例,F歯科・矯正歯科 豊洲プライムスクエア院',
};

// Case Study Feature Data
const caseStudyFeatures = [
  {
    id: "01",
    title: "30代女性・軽度歯肉炎",
    highlight: "基本治療で完治",
    summary: "歯磨き時の出血が気になっていた患者様。スケーリングとブラッシング指導で改善。",
    details: [
      "主訴：歯磨き時の出血 | 診断：軽度歯肉炎 | 歯周ポケット：2〜3mm",
      "治療内容：歯茎が赤く腫れ、歯磨き時に出血。歯石の付着も見られたため、スケーリングとブラッシング指導を実施。磨き残しの癖を染め出しで確認し、正しい磨き方をマスター。",
      "治療回数・期間：3回（3週間） | 費用：約5,000円（保険適用） | 結果：出血消失、歯茎健康",
      "患者様の声：「歯磨き時の出血が気になっていましたが、正しい磨き方を教えていただき、2週間ほどで出血がなくなりました。歯茎の色もピンク色に戻り、とても嬉しいです。定期検診も続けていきたいと思います。」"
    ],
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    imageAlt: "歯周病治療・基本治療の様子"
  },
  {
    id: "02",
    title: "50代男性・中等度歯周炎",
    highlight: "ルートプレーニングで改善",
    summary: "長年歯科医院を受診しておらず、歯茎の腫れと口臭が気になっていた患者様。",
    details: [
      "主訴：歯茎の腫れと口臭 | 診断：中等度歯周炎 | 歯周ポケット：4〜6mm",
      "治療内容：歯茎が下がり、歯周ポケットが深くなっていました。スケーリング後、ルートプレーニングで歯根面の歯石を徹底的に除去。禁煙指導も行い、生活習慣の改善にも取り組んでいただきました。",
      "治療回数・期間：6回（3ヶ月） | 費用：約20,000円（保険適用） | 結果：ポケット改善、口臭軽減",
      "患者様の声：「口臭が気になって受診しましたが、歯周病が進行していることを知りショックでした。しかし、丁寧に治療していただき、3ヶ月後には歯茎の腫れも引き、口臭もほとんど気にならなくなりました。禁煙にも成功し、今は3ヶ月ごとのメンテナンスを受けています。」"
    ],
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800",
    imageAlt: "歯周病治療・ルートプレーニングの様子"
  },
  {
    id: "03",
    title: "60代男性・重度歯周炎",
    highlight: "フラップ手術で歯を残す",
    summary: "歯が大きくぐらつき、食事に支障が出ていた患者様。外科治療で歯を保存。",
    details: [
      "主訴：歯のぐらつき、噛めない | 診断：重度歯周炎 | 歯周ポケット：7〜9mm",
      "治療内容：基本治療後もポケットが深いままだったため、フラップ手術を実施。歯茎を切開し、直接歯根を清掃。骨の形も整え、歯茎を縫合。術後は順調に回復し、ぐらつきも改善しました。",
      "治療回数・期間：10回（6ヶ月） | 費用：約50,000円（保険適用） | 結果：ぐらつき改善、噛める",
      "患者様の声：「歯がグラグラで、抜歯になると思っていました。しかし、フラップ手術で歯を残せると聞き、治療を受けることを決めました。手術は緊張しましたが、痛みもほとんどなく、術後1ヶ月でしっかり噛めるようになりました。歯を残せて本当に良かったです。」"
    ],
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    imageAlt: "歯周病治療・フラップ手術の様子"
  },
  {
    id: "04",
    title: "50代女性・重度歯周炎（前歯部）",
    highlight: "エムドゲインで骨再生",
    summary: "前歯の歯周病が進行し、見た目も気になっていた患者様。再生療法を選択。",
    details: [
      "主訴：前歯のぐらつき、見た目 | 診断：重度歯周炎（前歯部） | 歯周ポケット：6〜8mm",
      "治療内容：骨の吸収が大きかったため、エムドゲインを使用した歯周組織再生療法を提案。基本治療後、フラップ手術と同時にエムドゲインゲルを塗布。6ヶ月後のレントゲンで骨の再生が確認できました。",
      "治療回数・期間：8回（8ヶ月） | 費用：約180,000円（自費+保険） | 結果：骨再生、歯の安定",
      "患者様の声：「前歯が抜けたらどうしようと不安でしたが、エムドゲインで骨が再生すると聞き、治療を決めました。費用はかかりましたが、8ヶ月後にはレントゲンで骨が回復しているのが確認でき、歯のぐらつきもなくなりました。自分の歯を残せて本当に良かったです。」"
    ],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    imageAlt: "歯周病治療・エムドゲイン再生療法の様子"
  },
  {
    id: "05",
    title: "40代男性・重度歯周炎（下顎臼歯部）",
    highlight: "リグロスで保険適用再生療法",
    summary: "下の奥歯の歯周病が進行した患者様。保険適用の再生療法で改善。",
    details: [
      "主訴：下奥歯のぐらつき | 診断：重度歯周炎（下顎臼歯部） | 歯周ポケット：7mm",
      "治療内容：骨の吸収が見られたため、保険適用のリグロスを使用した歯周組織再生療法を実施。フラップ手術時にリグロスを塗布し、骨の再生を促進。費用を抑えつつ、再生療法を受けることができました。",
      "治療回数・期間：7回（5ヶ月） | 費用：約40,000円（保険適用） | 結果：ポケット減少、骨再生",
      "患者様の声：「再生療法は高額だと思っていましたが、リグロスは保険が使えると聞き、治療を受けることにしました。手術後の経過も良く、5ヶ月後には歯周ポケットが3mmまで改善しました。保険で再生療法が受けられるのはありがたいです。」"
    ],
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800",
    imageAlt: "歯周病治療・リグロス再生療法の様子"
  }
];

// FAQ Data
const faqs = [
  {
    q: "重度の歯周病でも歯を残せますか？",
    a: "重度の歯周病でも、適切な治療で歯を残せる可能性があります。フラップ手術で歯根面の徹底的な清掃が可能で、歯周組織再生療法（エムドゲイン、リグロス）で骨を再生できます。ただし、骨の吸収が著しい場合や歯の破損が大きい場合は、抜歯が必要になることもあります。まずは検査を受けて、歯を残せるかどうかを判断させてください。"
  },
  {
    q: "治療期間はどのくらいかかりますか？",
    a: "進行度によって治療期間は異なります。軽度の歯肉炎は2〜4週間、中等度の歯周炎は3〜6ヶ月、重度の歯周炎は6ヶ月〜1年が目安です。早期に治療を開始するほど、治療期間は短くなります。進行度や治療への反応によって期間は変わります。"
  },
  {
    q: "再生療法の成功率はどのくらいですか？",
    a: "歯周組織再生療法（エムドゲイン、リグロス）の成功率は、骨の欠損形態や患者様の全身状態によって異なりますが、一般的には60〜80%程度です。垂直性の骨欠損（深く狭い欠損）の場合は成功率が高く、水平性の骨欠損の場合は効果が限定的です。喫煙や糖尿病のコントロール不良は成功率を下げるため、生活習慣の改善も重要です。"
  },
  {
    q: "治療後のメンテナンスは必要ですか？",
    a: "はい、治療後のメンテナンスは非常に重要です。歯周病は再発しやすい病気で、メンテナンスを受けない場合は約80%が5年以内に再発します。しかし、定期的にメンテナンスを受ける場合は再発率が約10%まで低下します。3〜6ヶ月ごとのメンテナンスで、治療効果を長く保つことができます。"
  }
];

// Related Pages
const relatedPages = [
  {
    title: "歯周病治療TOP",
    desc: "歯周病治療の概要と特徴",
    href: "/periodontal",
    icon: "🦷"
  },
  {
    title: "進行段階",
    desc: "軽度・中等度・重度の症状",
    href: "/periodontal/stages",
    icon: "📊"
  },
  {
    title: "治療方法",
    desc: "基本治療から外科治療まで",
    href: "/periodontal/treatment-methods",
    icon: "⚕️"
  }
];

export default function PeriodontalCaseStudiesPage() {
  return (
    <TreatmentLayout
      title="歯周病治療"
      titleEn="Periodontal Case Studies"
      lead={
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#5A4D41] font-serif">
            歯周病治療の症例紹介
          </h1>
          <div className="w-24 h-1 bg-[#C5A572] mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl mb-6 text-[#5A4D41] font-medium">
            実際の治療事例と患者様の声をご紹介します
          </p>
          <p className="text-lg text-[#8D8070] leading-relaxed">
            こちらのページでは、当院で実際に行った歯周病治療の症例をご紹介します。患者様のプライバシーに配慮し、個人を特定できる情報は掲載しておりません。軽度から重度まで、様々な歯周病の治療例を通じて、適切な治療で歯周病は改善できることをご理解いただければ幸いです。
          </p>
        </div>
      }
      features={caseStudyFeatures}
      faqs={faqs}
      relatedPages={relatedPages}
      priceLink={false}
    >
      {/* Treatment Statistics Section - Custom Section inserted between features and FAQs */}
      <section className="py-6 md:py-6 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-br from-[#FDFBF7] to-white rounded-3xl shadow-xl p-8 md:p-12 border border-[#C5A572]/20">
            <h2 className="text-3xl font-bold text-[#5A4D41] mb-8 flex items-center justify-center gap-3 font-serif">
              <TrendingUp className="h-8 w-8 text-[#C5A572]" />
              当院の歯周病治療実績
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200 shadow-sm">
                <div className="text-5xl font-bold text-blue-600 mb-2">85%</div>
                <div className="text-[#5A4D41] font-bold text-lg mb-1">基本治療成功率</div>
                <div className="text-sm text-[#8D8070]">軽度〜中等度の改善率</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border border-purple-200 shadow-sm">
                <div className="text-5xl font-bold text-purple-600 mb-2">75%</div>
                <div className="text-[#5A4D41] font-bold text-lg mb-1">外科治療成功率</div>
                <div className="text-sm text-[#8D8070]">重度歯周炎の改善率</div>
              </div>
              <div className="bg-gradient-to-br from-[#C5A572]/20 to-[#C5A572]/10 rounded-2xl p-6 text-center border border-[#C5A572]/30 shadow-sm">
                <div className="text-5xl font-bold text-[#C5A572] mb-2">2,000+</div>
                <div className="text-[#5A4D41] font-bold text-lg mb-1">年間治療実績</div>
                <div className="text-sm text-[#8D8070]">2024年実績</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#C5A572]/10 to-[#C5A572]/5 rounded-2xl p-8 border border-[#C5A572]/20">
              <h3 className="text-xl font-bold text-[#5A4D41] mb-6 font-serif text-center">当院の特徴</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#C5A572] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#5A4D41] mb-1">科学的根拠に基づいた治療</p>
                    <p className="text-sm text-[#8D8070]">世界標準の治療プロトコル</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#C5A572] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#5A4D41] mb-1">徹底したメンテナンス体制</p>
                    <p className="text-sm text-[#8D8070]">再発予防のサポート</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#C5A572] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#5A4D41] mb-1">経験豊富な歯科衛生士</p>
                    <p className="text-sm text-[#8D8070]">専門的なケアとアドバイス</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[#C5A572] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-[#5A4D41] mb-1">最新の治療機器</p>
                    <p className="text-sm text-[#8D8070]">マイクロスコープ、レーザー等</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TreatmentLayout>
  );
}
