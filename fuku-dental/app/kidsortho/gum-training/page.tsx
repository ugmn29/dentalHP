import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';

const title = '子どものガムトレーニング｜噛み方・舌の動きの練習と注意点';
const description = 'ガムトレーニングの目的、奥歯で噛む・舌で運ぶ練習、始める前の確認事項を解説。顎や歯並びへの効果の限界、痛みや飲み込みへの注意、歯科医院での確認ポイントを紹介します。';
const url = 'https://fshika.com/kidsortho/gum-training';
export const metadata: Metadata = {
  title: `${title}｜Fデンタルオフィス 豊洲プライムスクエア院`,
  description,
  keywords: 'ガムトレーニング,子ども,噛み方,舌,MFT,口腔機能,豊洲,こども矯正',
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', locale: 'ja_JP', siteName: 'Fデンタルオフィス 豊洲プライムスクエア院' },
};
const heading = 'mb-6 font-serif text-2xl font-bold leading-relaxed text-[#5A4D41] md:text-3xl';
const linkStyle = 'font-medium text-[#087a76] underline decoration-[#087a76]/40 underline-offset-4 hover:decoration-current';
const steps = [
  { title: '姿勢とガムを準備する', body: '落ち着いて座り、保護者がそばで見守ります。ガムの種類・量・硬さは、歯科医院で確認したものを使ってください。口に入れる前に、最後は飲み込まずに出すことを確認します。', point: '歩きながら、遊びながら、寝転んだまま行わないようにしましょう。' },
  { title: '奥歯で噛む位置を確かめる', body: '歯科医院で教わった位置の奥歯で、ゆっくり噛みます。力いっぱい噛みしめず、ガムを奥歯で捉えられているか、痛みなく動かせているかを確かめます。', point: '左右の使い方や回数は、お子さまの噛み合わせに合わせた指示に従います。' },
  { title: '舌で奥歯へ運ぶ', body: 'ガムが柔らかくなったら、舌を使って奥歯の方へ戻す動きを練習します。噛む動きと、舌で食べ物を運ぶ動きのつながりを意識します。できない場合は無理をせず、次の受診で確認しましょう。', point: '舌の練習をまだ教わっていない場合は、自己流で追加しないでください。' },
  { title: 'ガムを出し、様子を振り返る', body: '指示された練習が終わったら、ガムを口から出して紙に包んで捨てます。噛みにくかった側、痛みや疲れ、舌で運びにくかったことがあれば記録し、受診時に伝えてください。', point: 'ガムは飲み込みません。練習後の歯磨きも普段どおり行います。' },
];
const faqs = [
  { q: '何歳からできますか？', a: '年齢だけでは判断しません。ガムを飲み込まずに扱えて、声かけに合わせて口から出せること、保護者が見守れることなどを確認します。難しい場合は、ガムを使わない練習や食べ方の指導をご案内します。' },
  { q: '1日何分、何回行えばよいですか？', a: '一律に「左右10回ずつ・毎食後5分」と決めるのではなく、練習の目的、噛む力、疲れや痛みの有無に合わせて決めます。歯科医院で回数・時間・頻度を確認し、慣れてきても自己判断で増やさないでください。' },
  { q: '硬いガムやキシリトール100％のガムが必要ですか？', a: '硬いほど効果が高いわけではありません。砂糖を含まないガムを基本に、硬さ・量・成分やアレルギーを確認して選びます。キシリトールの配合率だけでトレーニング効果が決まるものではなく、噛み方や舌の動きを確認することが大切です。' },
  { q: '矯正装置を使っていてもできますか？', a: '装置にガムが付いたり、装置へ負担がかかったりすることがあるため、先に担当の歯科医師へ確認してください。取り外し式装置は、許可された場合も外してから行います。固定式装置がある場合も自己判断で始めないでください。' },
  { q: 'いつまで続ければよいですか？', a: '噛み方や舌の動きの変化、家庭での取り組みを定期的に確認し、継続・変更・終了を判断します。歯並びだけで評価せず、設定した練習の目的に沿って振り返ります。中止したことで顎の成長が止まるというものではありません。' },
];

export default function GumTrainingPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FDFBF7] text-[#5A4D41]">
        <div className="mx-auto max-w-5xl px-4 pb-16 pt-8 md:px-8">
          <nav aria-label="パンくずリスト" className="mb-8 flex flex-wrap gap-2 text-sm text-[#71665A]"><Link href="/">ホーム</Link><span aria-hidden="true">/</span><Link href="/kidsortho">こども矯正</Link><span aria-hidden="true">/</span><span>ガムトレーニング</span></nav>
          <header className="mb-12">
            <p className="mb-4 text-sm font-bold tracking-wider text-[#087a76]">食べるためのお口の動きを練習する</p>
            <h1 className="font-serif text-3xl font-bold leading-normal md:text-5xl md:leading-snug">子どものガムトレーニング</h1>
            <p className="mt-4 font-serif text-xl font-bold md:text-2xl">噛み方・舌の動きの練習と注意点</p>
            <p className="mt-6 max-w-3xl text-lg leading-8">ガムを使って「奥歯で噛む」「舌で運ぶ」といった動きを確かめる練習です。お子さまのお口の状態に合わせて、歯科医院で方法を確認してから取り組みましょう。</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ['01', '奥歯で噛む', '噛む位置と力加減を確かめる'],
                ['02', '舌で運ぶ', 'ガムを奥歯の方へ戻す'],
                ['03', '動きを確認する', '噛み方・舌・唇の連携を見る'],
              ].map(([number, label, detail]) => <div key={number} className="rounded-2xl border border-[#E6D8C5] bg-white p-6"><p className="text-sm font-bold text-[#087a76]">{number}</p><p className="mb-2 mt-3 text-xl font-bold">{label}</p><p className="text-sm leading-7">{detail}</p></div>)}
            </div>
          </header>
          <nav aria-label="このページの内容" className="mb-12 flex flex-wrap gap-x-6 gap-y-3 rounded-2xl bg-[#F1ECE3] p-5 text-sm"><a href="#purpose" className={linkStyle}>練習の目的</a><a href="#before" className={linkStyle}>始める前に</a><a href="#steps" className={linkStyle}>練習の流れ</a><a href="#faq" className={linkStyle}>よくある質問</a></nav>
          <div className="space-y-14 text-base leading-8">
            <section id="purpose" className="scroll-mt-28">
              <h2 className={heading}>ガムトレーニングで何を練習するの？</h2>
              <p>食べるときは、歯で噛む動きに加え、舌で食べ物を奥歯へ運ぶ、唇を閉じる、飲み込む準備をするといった動きが関わります。ガムトレーニングは、このようなお口の働きを確認し、必要な動きを練習するMFT（口腔筋機能療法）の一つです。</p>
              <p className="mt-4">当院の参考資料では、奥歯で噛む位置を意識できるようにしてから、柔らかくなったガムを舌で奥歯へ戻す練習へ進みます。回数をこなすことより、目的の動きができているかを大切にします。</p>
              <div className="mt-6 rounded-2xl border-l-4 border-[#087a76] bg-[#EAF4F0] p-6">
                <h3 className="mb-3 text-lg font-bold">ガムで顎を鍛えれば、歯並びも治りますか？</h3>
                <p>ガムを噛むだけで顎の幅が広がる、決まった期間で歯並びが整うとはいえません。歯並びには、顎の成長、歯の大きさ、生える位置など複数の要因が関わります。歯並びや噛み合わせの治療が必要かどうかは、別に診察・検査を行います。</p>
              </div>
            </section>
            <section id="before" className="scroll-mt-28">
              <h2 className={heading}>始める前に歯科医院で確認すること</h2>
              <p>噛みにくい、片側ばかりで噛む、舌でうまく運べないなど、気になる様子があればご相談ください。まず原因と練習の必要性を確認します。</p>
              <ul className="mt-5 list-disc space-y-3 pl-6">
                <li>ガムを飲み込まずに扱い、声かけに合わせて口から出せるか</li>
                <li>歯や顎に痛みがないか、噛み合わせや歯の生え替わりに問題がないか</li>
                <li>むせや飲み込みにくさ、鼻で息がしづらい状態がないか</li>
                <li>矯正装置や詰め物への影響、使用するガムの成分・アレルギーに問題がないか</li>
              </ul>
              <p className="mt-5 font-bold">ガムを飲み込みやすい、よくむせる、歯や顎が痛い場合は、家庭で始めずに先にご相談ください。</p>
            </section>
            <section id="steps" className="scroll-mt-28">
              <h2 className={heading}>歯科医院で教わった練習を、家庭で続ける流れ</h2>
              <p className="mb-6">以下は練習の流れです。実際に行う項目と回数・時間は、歯科医院で受けた指導に合わせてください。</p>
              <ol className="space-y-5">{steps.map((step, index) => <li key={step.title} className="rounded-2xl border border-[#E6D8C5] bg-white p-6 md:p-8"><h3 className="mb-4 flex items-start gap-3 text-xl font-bold"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#087a76] text-sm text-white">{index + 1}</span>{step.title}</h3><p>{step.body}</p><p className="mt-4 border-t border-[#E6D8C5] pt-3 text-sm leading-7 text-[#71665A]">{step.point}</p></li>)}</ol>
              <div className="mt-6 rounded-2xl bg-[#F1ECE3] p-6">
                <h3 className="mb-3 text-lg font-bold">舌を上げる・唾液を飲み込む練習は、院内で確認してから</h3>
                <p>資料には、舌でガムを丸めて上あごに押し当てる練習や、唾液を飲む動きを確認する練習もあります。お子さまが安全にガムを扱えるかを確認し、必要な場合に歯科医院で実際の動きを見ながら指導します。</p>
                <p className="mt-3 font-bold">ガムそのものを飲み込む練習ではありません。家庭で自己流の飲み込み練習を追加しないでください。</p>
              </div>
            </section>
            <section>
              <h2 className={heading}>痛みや強い疲れが出たら中止しましょう</h2>
              <p>歯・顎・こめかみの痛み、口の開けにくさ、強い疲れ、むせが出たら中止してください。強く噛む、硬いガムに変える、長時間続けるといった負荷の増やし方は勧めません。</p>
              <p className="mt-4">次の受診では「何回できたか」に加えて、奥歯で噛めたか、舌で運べたか、痛みなくできたかを一緒に確認します。練習内容は経過に合わせて見直します。</p>
            </section>
            <section id="faq" className="scroll-mt-28">
              <h2 className={heading}>よくある質問</h2>
              <div className="divide-y divide-[#E6D8C5]">{faqs.map((faq) => <div key={faq.q} className="py-6 first:pt-0"><h3 className="mb-3 text-lg font-bold">{faq.q}</h3><p>{faq.a}</p></div>)}</div>
            </section>
            <section>
              <h2 className={heading}>お口の機能と歯並びを、分けて確認します</h2>
              <p>ガムトレーニングが全員に必要なわけではありません。食べ方の指導、舌や唇の練習、歯並びへの治療などから、診察の結果に応じた方法をご案内します。口腔機能を育てる治療と矯正装置による治療では、目的や保険の取り扱いも異なります。診療内容と費用は個別にご説明します。</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">{[
                ['/kidsortho/mft-training', '舌や唇を使うMFTについて'],
                ['/kidsortho/food-education', '食べ方・食育について'],
                ['/kidsortho/appliances/functional-mouthpiece', 'EFライン・マイオブレース・プレオルソの比較'],
                ['/kidsortho', '豊洲でこども矯正を相談する'],
              ].map(([href, label]) => <Link key={href} href={href} className="rounded-xl border border-[#E6D8C5] bg-white p-5 font-bold leading-7 text-[#087a76] hover:bg-[#EAF4F0]">{label}<span aria-hidden="true"> →</span></Link>)}</div>
            </section>
            <section className="rounded-2xl bg-[#F1ECE3] p-6 text-sm leading-7">
              <h2 className="mb-3 text-lg font-bold">参考資料と、このページの考え方</h2>
              <p>院内資料「咬合育成療法・完全統合レポート v4」（2026年4月11日版）の次の講義記録を参考に、練習の目的を整理しています。講義記録は臨床上の考え方や手順を確認する資料であり、歯並びの改善効果や改善までの期間を保証する根拠として扱っていません。</p>
              <ul className="mt-3 list-disc space-y-2 pl-5"><li>V-B-22 名古屋・筋機能セミナー、スライド8〜9：奥歯で噛む意識、舌でガムを送り返す動き、唾液を飲む動き</li><li>IV-A-14 筋機能療法IN九州：舌でガムを丸めて口蓋（上あご）へ押し当てる練習</li></ul>
              <p className="mt-4">口腔機能の治療と矯正治療の違い、顎に症状がある場合の注意は、以下の学会の一般向け情報も参照しています（2026年11月13日確認）。</p>
              <ul className="mt-3 space-y-2"><li><a href="https://www.jspd.or.jp/recommendation/article26/" className={linkStyle}>日本小児歯科学会：口腔機能を育てる治療と矯正治療との関係</a></li><li><a href="https://www.jsoms.or.jp/public/soudan/gaku/itai/" className={linkStyle}>日本口腔外科学会：あごの痛み・口の開けにくさについて</a></li></ul>
            </section>
            <AuthorBio lastUpdated="2026年11月13日" ctaTitle="お子さまの噛み方・食べ方をご相談ください" ctaBody="豊洲のFデンタルオフィスで、お口の動きと噛み合わせを確認します。必要な練習と家庭での取り組み方を、実際に動きを見ながらご説明します。" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
