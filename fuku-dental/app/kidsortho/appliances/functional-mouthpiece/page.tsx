import type { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { priceCategories } from '@/data/price-list';

const title = 'EFライン・マイオブレース・プレオルソの違いと選び方';
const description = 'EFライン・マイオブレース・プレオルソを、種類・素材・使い方から比較。こどもの歯並びとお口の機能を確認して選ぶ理由、当院の使用時間・費用・注意点を豊洲の歯科医院が解説します。';
const url = 'https://fshika.com/kidsortho/appliances/functional-mouthpiece';

export const metadata: Metadata = {
  title: `${title}｜Fデンタルオフィス 豊洲プライムスクエア院`,
  description,
  keywords: 'EFライン,マイオブレース,プレオルソ,違い,比較,機能的マウスピース,豊洲,こども矯正',
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', locale: 'ja_JP', siteName: 'Fデンタルオフィス 豊洲プライムスクエア院' },
};

const appliances = [
  { name: 'EFライン', en: 'EF Line', summary: 'お口の状態に合わせて、形の異なる装置から選ぶ', detail: '舌や唇の働き、歯列の形などに配慮した複数のモデルがあります。比較するときは、具体的な製品名とサイズを確認します。' },
  { name: 'マイオブレース', en: 'Myobrace', summary: '治療の段階に合わせて、装置を使い分ける', detail: '乳歯と永久歯が混在する時期の「for Kids」では、K1・K2・K3の3段階が基本です。段階によって目的や硬さが変わります。' },
  { name: 'プレオルソ', en: 'Preortho', summary: '噛み合わせに応じたタイプを選び、必要に応じて調整する', detail: '3つのタイプがあり、素材はポリウレタンです。歯科医院で加熱による調整ができることも特徴です。' },
];
const comparison = [
  { label: '種類・選び方', cells: ['形状・サイズの異なる複数のモデルから選択', 'for KidsはK1→K2→K3の段階別システム', 'タイプ1・2・3から噛み合わせに応じて選択'] },
  { label: '素材・硬さ', cells: ['モデルと製品仕様を確認。メーカーは2026年から新素材への段階的移行を案内', 'K1は柔軟、K3は同シリーズで最も硬いなど、段階で異なる', '熱可塑性のポリウレタン。必要に応じて歯科医院で調整'] },
  { label: '比較のポイント', cells: ['どのモデルを、何の目的で使うか', 'どの段階から始め、何を確認して次へ進むか', 'どのタイプ・サイズが合い、調整が必要か'] },
  { label: '使用時間', cells: ['選んだ装置と治療計画に沿って個別に指示', '選んだ装置と治療計画に沿って個別に指示', '当院では日中2時間＋就寝時を基本に個別調整'] },
  { label: '当院での取り扱い', cells: ['使用しています', '本ページでは比較情報として紹介しています', '使用しています'] },
];
const faqs = [
  { q: 'EFラインはプレオルソより柔らかいですか？', a: 'ブランド全体を一律に比べることはできません。モデル・サイズ・素材によって異なり、装着感には形状やお口との適合も関係します。実際に使う装置で確認します。' },
  { q: '何歳から相談すればよいですか？', a: '年齢だけで適応は決まりません。前歯の噛み合わせ、歯の生え替わり、食べ方、お口が開いていることなどが気になった時点でご相談ください。診察の結果、経過観察をご案内する場合もあります。' },
  { q: '装置を使えば、口呼吸も治りますか？', a: '口呼吸には鼻づまりやのどの状態などが関係することがあります。装置だけで解決するとは限りません。鼻で息がしづらい、いびきが続く場合などは、必要に応じて耳鼻咽喉科への相談をご案内します。' },
  { q: 'ガムトレーニングも一緒にした方がよいですか？', a: '噛み方や舌の動きを確認し、必要な方に練習をご案内します。全員に同じトレーニングが必要なわけではありません。装置を入れたままガムを噛まず、併用の可否や方法を担当の歯科医師に確認してください。' },
];
const heading = 'mb-6 font-serif text-2xl font-bold leading-relaxed text-[#5A4D41] md:text-3xl';
const linkStyle = 'font-medium text-[#087a76] underline decoration-[#087a76]/40 underline-offset-4 hover:decoration-current';
const clinicPrices = priceCategories.find((category) => category.id === 'kids-ortho')!.items.filter((item) => ['検査', '相談', '調整料', 'プレオルソ+付加装置', '拡大床'].includes(item.name));

export default function FunctionalMouthpiecePage() {
  return (
    <>
      <Header />
      <main className="bg-[#FDFBF7] text-[#5A4D41]">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-8">
          <nav aria-label="パンくずリスト" className="mb-8 flex flex-wrap gap-2 text-sm text-[#71665A]">
            <Link href="/">ホーム</Link><span aria-hidden="true">/</span><Link href="/kidsortho">こども矯正</Link><span aria-hidden="true">/</span><Link href="/kidsortho/appliances">装置一覧</Link><span aria-hidden="true">/</span><span>機能的マウスピースの比較</span>
          </nav>
          <header className="mb-12">
            <p className="mb-4 text-sm font-bold tracking-wider text-[#087a76]">こどもの歯並びと、お口の使い方</p>
            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-normal md:text-5xl md:leading-snug">EFライン・マイオブレース・<br className="hidden md:block" />プレオルソの違いと選び方</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">どれも取り外し式の機能的マウスピースですが、種類や治療の進め方が異なります。大切なのは、お子さまの噛み合わせとお口の使い方に合った装置を選ぶことです。</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {appliances.map((appliance) => (
                <div key={appliance.name} className="rounded-2xl border border-[#E6D8C5] bg-white p-6">
                  <p className="text-xs tracking-wider text-[#71665A]">{appliance.en}</p>
                  <h2 className="mt-2 text-xl font-bold">{appliance.name}</h2>
                  <p className="mt-4 font-bold leading-7 text-[#087a76]">{appliance.summary}</p>
                  <p className="mt-3 text-sm leading-7">{appliance.detail}</p>
                </div>
              ))}
            </div>
          </header>
          <nav aria-label="このページの内容" className="mb-12 flex flex-wrap gap-x-6 gap-y-3 rounded-2xl bg-[#F1ECE3] p-5 text-sm">
            <a href="#comparison" className={linkStyle}>3つの比較</a><a href="#choice" className={linkStyle}>選ぶときのポイント</a><a href="#clinic" className={linkStyle}>当院の使い方・費用</a><a href="#faq" className={linkStyle}>よくある質問</a>
          </nav>
          <div className="space-y-14 text-base leading-8">
            <section id="comparison" className="scroll-mt-28">
              <h2 className={heading}>3つの装置を比べてみましょう</h2>
              <p className="mb-5">メーカー・販売元の公開情報をもとに、装置の設計と使い分けを整理しました。マイオブレースは、主に生え替わり期に使う「for Kids」を比較しています。</p>
              <p id="comparison-hint" className="mb-2 text-sm text-[#71665A] md:hidden">表は横にスクロールできます。</p>
              <div role="region" aria-label="機能的マウスピースの比較表" tabIndex={0} className="overflow-x-auto rounded-2xl border border-[#E6D8C5] bg-white focus-visible:outline-2 focus-visible:outline-[#087a76]">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7">
                  <caption className="sr-only">EFライン・マイオブレース・プレオルソの種類、素材、使用時間、当院での取り扱い</caption>
                  <thead><tr className="bg-[#EAF4F0]"><th scope="col" className="w-32 p-4">比較項目</th>{appliances.map((item) => <th scope="col" key={item.name} className="w-[28%] p-4 text-base">{item.name}</th>)}</tr></thead>
                  <tbody>{comparison.map((row) => <tr key={row.label} className="border-t border-[#E6D8C5]"><th scope="row" className="bg-[#FAF8F5] p-4 align-top">{row.label}</th>{row.cells.map((cell, index) => <td key={index} className="p-4 align-top">{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#71665A]">EFラインのメーカーは、2026年から医療用の新素材（コポリマー）へ順次移行すると案内しています。国内で使用する製品の素材は、実際の製品表示・添付文書で確認します。ブランド名だけで硬さや装着感を順位づけすることはできません。</p>
              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-6">
                  <h3 className="mb-3 text-lg font-bold">マイオブレース：段階ごとに目的が変わります</h3>
                  <p>K1は呼吸・舌などの習慣への対応、K2は歯列の幅や舌・唇の働きへの対応、K3は歯列の仕上げや保定を目的とした設計です。段階を進める時期は診察で判断します。</p>
                </div>
                <div className="rounded-2xl bg-white p-6">
                  <h3 className="mb-3 text-lg font-bold">プレオルソ：噛み合わせでタイプを選びます</h3>
                  <p>タイプ1は出っ歯・歯のデコボコ・深い噛み合わせなど、タイプ2は前歯が閉じない開咬、タイプ3は受け口に用いる設計です。同じ症状名でも、装置が適するかは検査が必要です。</p>
                </div>
              </div>
            </section>
            <section id="choice" className="scroll-mt-28">
              <h2 className={heading}>装置を選ぶ前に確認すること</h2>
              <p>機能的マウスピースは、歯並び・噛み合わせに加えて、舌や唇などの働きにも配慮した装置です。診察では次の点を確認し、何を目指す治療なのかを共有します。</p>
              <ol className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  ['歯と顎の状態', '歯の生え替わり、歯が並ぶスペース、上下の顎のバランス、噛み合わせを確認します。'],
                  ['お口の使い方', '舌の位置、唇の閉じ方、噛み方・飲み込み方、鼻で呼吸しづらいことがないかを確認します。'],
                  ['家庭で続けられるか', '装置の大きさや装着感、生活時間、ご本人とご家族の取り組みやすさを相談します。'],
                ].map(([label, text], index) => <li key={label} className="border-t-2 border-[#C5A572] pt-4"><p className="mb-2 font-bold"><span className="mr-3 text-[#087a76]">0{index + 1}</span>{label}</p><p>{text}</p></li>)}
              </ol>
              <div className="mt-7 rounded-2xl border border-[#E6D8C5] p-6">
                <h3 className="mb-3 font-bold">装置・トレーニング・経過観察を組み合わせます</h3>
                <p>お口の機能を育てる練習と、歯を動かす矯正治療は目的が異なります。必要に応じてMFT（口腔筋機能療法）や食べ方の練習を行いますが、練習だけですべての歯並びが整うわけではありません。</p>
                <p className="mt-3">歯が並ぶスペースの不足や骨格的な問題、歯の生える方向などによっては、別の装置や永久歯がそろってからの2期治療が必要です。適応がなければ経過観察も選択肢になります。</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2"><Link href="/kidsortho/mft-training" className={linkStyle}>MFTについて</Link><Link href="/kidsortho/gum-training" className={linkStyle}>ガムを使った練習について</Link></div>
              </div>
            </section>
            <section id="clinic" className="scroll-mt-28">
              <h2 className={heading}>当院の使い方・費用・注意点</h2>
              <p>当院ではプレオルソとEFラインを使用しています。診察・検査の結果と装着感を確認して選びます。マイオブレースは、このページでは違いを知っていただくための比較情報として紹介しています。</p>
              <div className="my-6 rounded-2xl bg-[#EAF4F0] p-6">
                <h3 className="mb-3 text-lg font-bold">プレオルソは「日中2時間＋就寝時」が当院の基本です</h3>
                <p>年齢、お口の状態、治療目的に合わせて調整します。製品の一般的な案内と異なる場合も、担当の歯科医師の指示を優先してください。EFラインの使用時間は、選んだ装置に応じてお伝えします。</p>
                <p className="mt-3">食事・歯磨きの際は取り外し、指定された方法で洗浄・保管してください。家庭で加熱して形を変えたり、削ったりしないでください。</p>
              </div>
              <h3 className="mb-4 text-xl font-bold">小児矯正の費用（税込）</h3>
              <dl className="divide-y divide-[#E6D8C5] rounded-2xl border border-[#E6D8C5] bg-white px-5">
                {clinicPrices.map((item) => <div key={item.name} className="flex flex-wrap justify-between gap-2 py-4"><dt>{item.name}</dt><dd className="font-bold">{item.price}</dd></div>)}
              </dl>
              <p className="mt-4 text-sm leading-7">プレオルソから拡大床へ移行する場合は差額で対応します。EFラインを用いる場合や追加治療の費用は、診察後の治療計画に沿ってご説明します。<Link href="/price#kids-ortho" className={linkStyle}>詳しい料金表を見る</Link></p>
              <h3 className="mb-3 mt-7 text-xl font-bold">治療期間と主なリスク</h3>
              <p>こども矯正は原則として自由診療です。期間・通院回数は、歯の生え替わりや治療範囲によって異なるため、検査後に目安をご説明します。装着時間や成長の経過によって、期間延長や計画変更、追加装置・2期治療が必要になる場合があります。</p>
              <p className="mt-3">一時的な痛み・違和感、発音しにくさ、唾液の増加、粘膜への刺激、装置の紛失・破損などが起こることがあります。清掃が不十分な場合はむし歯や歯肉炎のリスクがあり、治療後に後戻りする可能性もあります。強い痛み、傷、息苦しさがある場合は使用を中止してご相談ください。</p>
            </section>
            <section id="faq" className="scroll-mt-28">
              <h2 className={heading}>よくある質問</h2>
              <div className="divide-y divide-[#E6D8C5]">{faqs.map((faq) => <div key={faq.q} className="py-6 first:pt-0"><h3 className="mb-3 text-lg font-bold">{faq.q}</h3><p>{faq.a}</p></div>)}</div>
            </section>
            <section className="rounded-2xl bg-[#F1ECE3] p-6 text-sm leading-7">
              <h2 className="mb-3 text-lg font-bold">参考情報</h2>
              <p>製品の種類・設計・素材は、以下のメーカー・販売元の公開情報を参照しています（2026年11月13日確認）。製品の設計目的を説明したもので、特定の装置の優位性や治療結果を保証するものではありません。</p>
              <ul className="mt-3 space-y-2">
                <li><a className={linkStyle} href="https://orthoplus.fr/en/content/a-therapeutic-approach-to-dysfunction/">Orthoplus：EF Lineの設計</a> ／ <a className={linkStyle} href="https://orthoplus.fr/actualite/nouvelle-matiere-grade-medical-ef-line/">2026年の素材変更</a></li>
                <li><a className={linkStyle} href="https://www.myoresearch.com/en-au/appliances/myobrace/for-kids">Myofunctional Research Co.：Myobrace for Kids</a></li>
                <li><a className={linkStyle} href="https://www.forest-one.co.jp/products/preortho/">フォレスト・ワン：プレオルソ</a></li>
                <li><a className={linkStyle} href="https://www.jspd.or.jp/recommendation/article26/">日本小児歯科学会：口腔機能を育てる治療と矯正治療との関係</a></li>
              </ul>
              <p className="mt-3">お口の機能を確認する視点は、院内資料「咬合育成療法・完全統合レポート v4」の咀嚼・嚥下に関する講義資料も参考にしています。装着時間と取り扱い装置は当院の診療方針です。</p>
            </section>
            <AuthorBio lastUpdated="2026年11月13日" ctaTitle="お子さまに合う方法を、一緒に確認しましょう" ctaBody="豊洲でこども矯正をご検討の方へ。歯並びとお口の使い方を確認し、装置の必要性・費用・通院の見通しをご説明します。" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
