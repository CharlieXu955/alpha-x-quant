import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore Alpha X Quant research across alpha discovery, factor research, portfolio research, and machine learning in finance.",
  alternates: { canonical: "/research" },
};

const researchPrograms = [
  {
    index: "01",
    title: "Alpha Discovery",
    notation: "E[rₜ₊₁ | xₜ]",
    description:
      "We investigate predictive signals from financial and alternative datasets, with attention to economic intuition, data quality, timing, and implementability.",
    points: [
      "Signal definition and data lineage",
      "Out-of-sample evaluation",
      "Stability across regimes and universes",
    ],
  },
  {
    index: "02",
    title: "Factor Research",
    notation: "rᵢₜ = αᵢ + βᵢfₜ + εᵢₜ",
    description:
      "We construct and test factors using transparent portfolio definitions, robust statistical diagnostics, and careful comparison against established explanations.",
    points: [
      "Factor construction and neutralization",
      "Cross-sectional and time-series tests",
      "Turnover, crowding, and decay analysis",
    ],
  },
  {
    index: "03",
    title: "Portfolio Research",
    notation: "min wᵀΣw  s.t.  Aw = b",
    description:
      "We study how forecasts become systematic portfolios through optimization, constraints, transaction-cost awareness, and explicit risk analysis.",
    points: [
      "Forecast combination and sizing",
      "Portfolio constraints and optimization",
      "Exposure, concentration, and scenario analysis",
    ],
  },
  {
    index: "04",
    title: "Machine Learning in Finance",
    notation: "x → fθ(x) → ŷ",
    description:
      "We explore machine learning and natural language processing as research tools for extracting structure from financial datasets while guarding against leakage and overfitting.",
    points: [
      "Feature learning and nonlinear models",
      "Financial text and language signals",
      "Validation under non-stationarity",
    ],
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research"
        title="Systematic questions. Empirical answers."
        description="Our research examines signals, models, and portfolio frameworks through reproducible analysis and disciplined validation."
        index="01 / 04"
      />

      <section className="section research-intro">
        <div className="site-shell research-intro-grid">
          <p className="eyebrow dark">Research approach</p>
          <div>
            <h2>From hypothesis to evidence.</h2>
            <p className="lead-copy">
              Alpha X Quant approaches quantitative research as a sequence of testable
              decisions: define the question, establish the data, specify the model,
              challenge the result, and evaluate the portfolio implications.
            </p>
          </div>
        </div>
      </section>

      <section className="research-programs" aria-label="Research programs">
        <div className="site-shell">
          {researchPrograms.map((program) => (
            <article className="program-row" key={program.title}>
              <div className="program-index">{program.index}</div>
              <div className="program-main">
                <h2>{program.title}</h2>
                <p>{program.description}</p>
              </div>
              <div className="program-detail">
                <div className="program-notation">{program.notation}</div>
                <ul>
                  {program.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section research-note">
        <div className="site-shell research-note-grid">
          <div>
            <p className="eyebrow">Scope</p>
            <h2>Research, not a promise of outcomes.</h2>
          </div>
          <div>
            <p>
              Research findings are conditional on data, assumptions, and methodology.
              Alpha X Quant does not publish or imply guaranteed returns, and the
              information on this site is not investment advice.
            </p>
            <Link className="button button-light" href="/contact">
              Discuss a research question <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
