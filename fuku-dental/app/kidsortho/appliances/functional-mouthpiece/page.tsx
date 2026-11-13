import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AuthorBio } from '@/components/AuthorBio';
import { priceCategories } from '@/data/price-list';

const title = 'EFライン・マイオブレース・プレオルソの違いと選び方';
const description = 'EFライン・マイオブレース・プレオルソに共通する基本構造と使う目的、使い分けで重視する硬さの違いを解説。院長の使用感とメーカーの製品情報をもとに、当院の使い方・費用も紹介します。';
const url = 'https://fshika.com/kidsortho/appliances/functional-mouthpiece';

export const metadata: Metadata = {
  title: `${title}｜Fデンタルオフィス 豊洲プライムスクエア院`,
  description,
  keywords: 'EFライン,マイオブレース,プレオルソ,違い,比較,機能的マウスピース,豊洲,こども矯正',
  alternates: { canonical: url },
  openGraph: { title, description, url, type: 'website', locale: 'ja_JP', siteName: 'Fデンタルオフィス 豊洲プライムスクエア院' },
};

const appliances = [
  { name: 'EFライン', en: 'EF Line', summary: '硬さやお口への収まりを確認して選ぶ', detail: '機能的マウスピースとしての基本的な考え方は共通です。複数のモデルから、硬さ・形・サイズがお子さまに合うものを選びます。' },
  { name: 'マイオブレース', en: 'Myobrace', summary: '同じシリーズでも、段階によって硬さが変わる', detail: '基本的な構造や使う目的は、ほかの機能的マウスピースとよく似ています。「for Kids」はK1・K2・K3があり、段階ごとに硬さや設計が異なります。' },
  { name: 'プレオルソ', en: 'Preortho', summary: '硬さ・サイズ・噛み合わせを確認し、必要に応じて調整する', detail: '基本的な考え方は共通で、素材はポリウレタンです。3つのタイプがあり、歯科医院で加熱による調整ができます。' },
];
const comparison = [
  { label: '共通する考え方', cells: ['歯並びと、舌・唇などのお口の働きに配慮した取り外し式の装置', '歯並びと、舌・唇などのお口の働きに配慮した取り外し式の装置', '歯並びと、舌・唇などのお口の働きに配慮した取り外し式の装置'] },
  { label: '硬さ・装着感', cells: ['実際に使うモデルの硬さと、お口への収まりを確認', 'K1は柔軟、K3は同シリーズで最も硬いなど、段階で異なる', '実際の装置の硬さと適合を確認し、必要に応じて歯科医院で調整'] },
  { label: '種類・選び方', cells: ['形状・サイズの異なる複数のモデルから選択', 'for KidsはK1→K2→K3の段階別システム', 'タイプ1・2・3から噛み合わせに応じて選択'] },
  { label: '比較のポイント', cells: ['どのモデルを、何の目的で使うか', 'どの段階から始め、何を確認して次へ進むか', 'どのタイプ・サイズが合い、調整が必要か'] },
  { label: '使用時間', cells: ['選んだ装置と治療計画に沿って個別に指示', '選んだ装置と治療計画に沿って個別に指示', '当院では日中2時間＋就寝時を基本に個別調整'] },
  { label: '当院での取り扱い', cells: ['使用しています', '本ページでは比較情報として紹介しています', '使用しています'] },
];
const faqs = [
  { q: '基本的な構造や、使ったときの感覚は違いますか？', a: '基本的な構造や使う目的は共通しており、院長の臨床上の実感では、使っている感覚もほとんど同じです。そのうえで、使い分けの際に大きな違いとして感じるのが硬さです。細かな形やサイズも異なるため、実際の装置がお子さまのお口に合うかを確認します。' },
  { q: '硬い装置と柔らかい装置は、どちらがよいですか？', a: '硬さは当院が装置を選ぶときに重視する点ですが、硬いほどよい、柔らかいほどよいとは限りません。お子さまの装着感、噛み合わせ、練習の進み具合に合わせて選びます。同じブランドにも硬さの異なるモデルがあるため、実際に使う製品で確認します。' },
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
      <main className="break-normal bg-[#FDFBF7] text-[#5A4D41]">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-8">
          <nav aria-label="パンくずリスト" className="mb-8 flex flex-wrap gap-2 text-sm text-[#71665A]">
            <Link href="/">ホーム</Link><span aria-hidden="true">/</span><Link href="/kidsortho">こども矯正</Link><span aria-hidden="true">/</span><Link href="/kidsortho/appliances">装置一覧</Link><span aria-hidden="true">/</span><span>機能的マウスピースの比較</span>
          </nav>
          <header className="mb-12">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]">
              <div>
            <p className="mb-4 text-sm font-bold tracking-wider text-[#087a76]">こどもの歯並びと、お口の使い方</p>
            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-normal md:text-5xl md:leading-snug">EFライン・マイオブレース・<br className="hidden md:block" />プレオルソの違いと選び方</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8">3つの装置は、基本的な構造や考え方が共通しています。院長の臨床上の実感では、使っている感覚もほとんど同じです。使い分けで特に大きいのは「硬さ」の違いです。</p>
              </div>
              <figure className="mx-auto w-full max-w-md">
                <Image src="/images/kidsortho/education/appliance-structure.webp" width={1000} height={1000} alt="上下の歯列を包む機能的マウスピースの構造を描いたイラスト" sizes="(min-width: 1024px) 400px, (min-width: 640px) 448px, 100vw" priority className="h-auto w-full rounded-2xl" />
                <figcaption className="mt-3 text-sm leading-6 text-[#71665A]">『咬合育成のバイブル』より、プレオルソの構造をもとにしたイメージ図。実際の形状は、製品やサイズによって異なります。</figcaption>
              </figure>
            </div>
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
              <p className="mb-4">EFライン・マイオブレース・プレオルソは、取り外し式のマウスピースを使い、歯並びや噛み合わせとともに、舌・唇などのお口の働きに配慮する装置です。この基本となる構造や考え方は、3つの装置に共通しています。</p>
              <div className="mb-6 rounded-2xl bg-[#EAF4F0] p-6">
                <h3 className="mb-3 text-lg font-bold">院長が使い分けで重視しているのは「硬さ」です</h3>
                <p>細かな形や素材はそれぞれ異なりますが、院長の実感として、使っている感覚はほとんど同じです。当院では、硬さの違いとお口への収まりを確かめ、お子さまが無理なく取り組める装置を選ぶことを大切にしています。</p>
                <p className="mt-3 text-sm leading-7">使用感は院長の臨床上の実感としてお伝えしています。細かな形状・寸法・素材や適応は、製品ごとに異なります。</p>
              </div>
              <p className="mb-5">以下の表では、共通点を押さえたうえで、メーカー・販売元が案内する製品の違いをまとめています。マイオブレースは、主に生え替わり期に使う「for Kids」を比較しています。</p>
              <p id="comparison-hint" className="mb-2 text-sm text-[#71665A] md:hidden">表は横にスクロールできます。</p>
              <div role="region" aria-label="機能的マウスピースの比較表" tabIndex={0} className="overflow-x-auto rounded-2xl border border-[#E6D8C5] bg-white focus-visible:outline-2 focus-visible:outline-[#087a76]">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm leading-7">
                  <caption className="sr-only">EFライン・マイオブレース・プレオルソの共通点、硬さ、種類、使用時間、当院での取り扱い</caption>
                  <thead><tr className="bg-[#EAF4F0]"><th scope="col" className="w-32 p-4">比較項目</th>{appliances.map((item) => <th scope="col" key={item.name} className="w-[28%] p-4 text-base">{item.name}</th>)}</tr></thead>
                  <tbody>{comparison.map((row) => <tr key={row.label} className="border-t border-[#E6D8C5]"><th scope="row" className="bg-[#FAF8F5] p-4 align-top">{row.label}</th>{row.cells.map((cell, index) => <td key={index} className="p-4 align-top">{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
              <p className="mt-4 text-sm leading-7 text-[#71665A]">EFラインのメーカーは、2026年から医療用の新素材（コポリマー）へ順次移行すると案内しています。国内で使用する製品の素材は、実際の製品表示・添付文書で確認します。同じブランドでもモデルによって硬さや装着感が異なるため、具体的な製品で確かめます。</p>
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
                  ['硬さが合い、家庭で続けられるか', '硬さ・大きさ・装着感を確かめ、生活時間やご本人・ご家族の取り組みやすさも相談します。'],
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
              <p>当院ではプレオルソとEFラインを使用しています。診察・検査に加え、硬さやお口への収まりを確認し、装着しやすさも重視して選びます。マイオブレースは、このページでは違いを知っていただくための比較情報として紹介しています。</p>
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
              <p className="mt-3">お口の機能を確認する視点は、院内資料「咬合育成療法・完全統合レポート v4」の咀嚼・嚥下に関する講義資料も参考にしています。使用感と硬さを重視する使い分けは院長の臨床上の実感、装着時間と取り扱い装置は当院の診療方針として記載しています。</p>
            </section>
            <AuthorBio lastUpdated="2026年11月13日" ctaTitle="お子さまに合う方法を、一緒に確認しましょう" ctaBody="豊洲でこども矯正をご検討の方へ。歯並びとお口の使い方を確認し、装置の必要性・費用・通院の見通しをご説明します。" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
