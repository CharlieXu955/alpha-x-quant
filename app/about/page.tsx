import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Alpha X Quant LLC and founder Jialu Xu, a Cornell University MFE alumnus.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    index: "01",
    title: "Evidence before narrative",
    text: "Research questions are framed so that data and testing can challenge the initial thesis.",
  },
  {
    index: "02",
    title: "Methodological clarity",
    text: "Assumptions, definitions, and limitations are treated as part of the result—not footnotes to it.",
  },
  {
    index: "03",
    title: "Technology as research infrastructure",
    text: "Reliable data and reproducible systems support better analysis and more useful collaboration.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A research company at the intersection of markets, data, and technology."
        description="Alpha X Quant LLC develops and studies quantitative research methods for understanding financial markets and systematic decision frameworks."
        index="02 / 04"
      />

      <section className="section about-company" aria-labelledby="company-heading">
        <div className="site-shell about-grid">
          <div>
            <p className="eyebrow dark">Company</p>
            <p className="entity-name">Alpha X Quant LLC</p>
          </div>
          <div>
            <h2 id="company-heading">Focused on the research process.</h2>
            <p className="lead-copy">
              Alpha X Quant is a quantitative research and technology company focused on
              systematic investment research, empirical analysis, and data-driven model
              development.
            </p>
            <p>
              The company explores how financial data can be transformed into testable
              hypotheses, evaluated signals, and structured portfolio research. It does
              not manage external capital or provide investment advice through this
              website.
            </p>
          </div>
        </div>
      </section>

      <section className="section founder-section" aria-labelledby="founder-heading">
        <div className="site-shell founder-grid">
          <div className="founder-monogram" aria-hidden="true">
            <span>JX</span>
            <small>Founder / Research</small>
          </div>
          <div className="founder-copy">
            <p className="eyebrow">Founder</p>
            <h2 id="founder-heading">Jialu Xu</h2>
            <p className="lead-copy light-copy">
              Jialu Xu is the founder of Alpha X Quant and a Cornell University Master
              of Engineering in Financial Engineering alumnus with experience in
              quantitative investment research, factor modeling, financial machine
              learning, and systematic strategy development.
            </p>
          </div>
        </div>
      </section>

      <section className="section principles-section" aria-labelledby="principles-heading">
        <div className="site-shell">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow dark">Operating principles</p>
              <h2 id="principles-heading">How we approach the work.</h2>
            </div>
            <p>
              A compact set of principles guides how research questions are developed,
              tested, and communicated.
            </p>
          </div>
          <div className="principle-grid">
            {principles.map((principle) => (
              <article key={principle.title}>
                <span>{principle.index}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
          <div className="about-cta">
            <p>Have a research, data, or technology question worth exploring?</p>
            <Link className="text-link" href="/contact">
              Contact Alpha X Quant <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
