import Link from "next/link";
import { LogoMark } from "./logo-mark";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-top">
        <div>
          <Link className="brand footer-brand" href="/" aria-label="Alpha X Quant home">
            <LogoMark />
            <span className="brand-text">
              <span>Alpha X</span>
              <span>Quant</span>
            </span>
          </Link>
          <p className="footer-positioning">
            Quantitative Research &amp; Systematic Investment Research
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/research">Research</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      <div className="site-shell footer-disclaimer">
        <p>
          Alpha X Quant LLC is a quantitative research and technology company. This
          website is for informational purposes only and does not constitute investment
          advice, an offer, or a solicitation.
        </p>
      </div>
      <div className="site-shell footer-bottom">
        <span>© {new Date().getFullYear()} Alpha X Quant LLC</span>
        <span>alphaxquant.com</span>
      </div>
    </footer>
  );
}
