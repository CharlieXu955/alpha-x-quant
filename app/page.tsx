import type { Metadata } from "next";
import Link from "next/link";
import { ResearchVisual } from "@/components/research-visual";

export const metadata: Metadata = {
  title: "Quantitative Research & Systematic Alpha Discovery",
  description:
    "Alpha X Quant develops systematic investment research frameworks through statistical modeling, machine learning, and financial data analysis.",
  alternates: { canonical: "/" },
};

const researchAreas = [
  {
    number: "01",
    title: "Alpha Research",
    description:
      "Factor discovery, signal construction, and systematic strategy research.",
    notation: "signal → test → evaluate",
  },
  {
    number: "02",
    title: "Quantitative Modeling",
    description:
      "Statistical modeling, machine learning, and financial data analysis.",
    notation: "model / validate / refine",
  },
  {
    number: "03",
    title: "Empirical Asset Pricing",
    description:
      "Factor evaluation, portfolio construction, and risk analysis.",
    notation: "factor × exposure × risk",
  },
  {
    number: "04",
    title: "Systematic Strategies",
    description:
      "Research on market signals, portfolio optimization, and quantitative frameworks.",
    notation: "data → rules → portfolio",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="site-shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">Independent quantitative research company</p>
            <h1>Alpha X Quant</h1>
            <p className="hero-statement">
              Quantitative Research. Systematic Alpha Discovery. Data-Driven Insights.
            </p>
            <p className="hero-intro">
              Alpha X Quant is a quantitative research company focused on developing
              systematic investment research frameworks through statistical modeling,
              machine learning, and financial data analysis.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/research">
                Explore our research <span aria-hidden="true">→</span>
              </Link>
              <Link className="button button-secondary" href="/contact">
                Start a conversation
              </Link>
            </div>
          </div>
          <ResearchVisual />
        </div>
        <div className="site-shell hero-index" aria-label="Research themes">
          <span>01 / Signal Research</span>
          <span>02 / Empirical Analysis</span>
          <span>03 / Systematic Frameworks</span>
        </div>
      </section>

      <section className="section section-light" aria-labelledby="research-areas-title">
        <div className="site-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow dark">Research areas</p>
              <h2 id="research-areas-title">Research built around evidence.</h2>
            </div>
            <p>
              We study how data, models, and portfolio decisions interact—placing
              empirical testing and transparent methodology at the center of the
              research process.
            </p>
          </div>
          <div className="research-card-grid">
            {researchAreas.map((area) => (
              <article className="research-card" key={area.title}>
                <div className="card-number">{area.number}</div>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
                <div className="card-notation">{area.notation}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-section" aria-labelledby="company-title">
        <div className="site-shell company-grid">
          <div className="company-index" aria-hidden="true">
            AXQ
          </div>
          <div className="company-copy">
            <p className="eyebrow dark">Company</p>
            <h2 id="company-title">Independent inquiry. Systematic process.</h2>
            <p className="lead-copy">
              Founded by Jialu Xu, Cornell MFE alumnus, Alpha X Quant explores
              quantitative investment research, alpha generation techniques, and
              empirical analysis of financial markets.
            </p>
            <p>
              The company operates as a quantitative research and technology company.
              Its work is oriented toward research frameworks, analytical methods, and
              collaborative investigation—not external capital management or investment
              advisory services.
            </p>
            <Link className="text-link" href="/about">
              About Alpha X Quant <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-section" aria-labelledby="collaboration-title">
        <div className="site-shell cta-panel">
          <div>
            <p className="eyebrow">Research collaboration</p>
            <h2 id="collaboration-title">Interested in working together?</h2>
          </div>
          <div>
            <p>
              We welcome thoughtful conversations with research, data, technology, and
              academic collaborators.
            </p>
            <Link className="button button-light" href="/contact">
              Contact Alpha X Quant <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
