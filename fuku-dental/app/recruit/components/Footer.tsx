export default function RecruitFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-brand-mark">☺︎</div>
          <div className="footer-brand-text">
            <div className="footer-brand-sub">Recruit</div>
            <div className="footer-brand-name">Fデンタルオフィス 豊洲プライムスクエア院</div>
          </div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <div className="footer-col-head">本サイト</div>
            <a href="https://fshika.com/">ホーム</a>
            <a href="https://fshika.com/case-studies">症例紹介</a>
            <a href="https://fshika.com/facilities">院内設備</a>
            <a href="https://fshika.com/price">料金表</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">採用情報</div>
            <a href="#philosophy">理念</a>
            <a href="#requirements">募集要項</a>
            <a href="#faq">FAQ</a>
            <a href="#entry">応募する</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-head">お問い合わせ</div>
            <div>recruit@fshika.com</div>
            <div>03-1234-5678</div>
            <div className="muted">平日 10:00-18:30 / 土日 9:00-16:00</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © Fuku Dental Clinic All Rights Reserved.
      </div>
    </footer>
  );
}
