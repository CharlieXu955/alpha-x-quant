import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Alpha X Quant for research collaboration, data and technology partnerships, consulting inquiries, or research participation.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a focused conversation."
        description="Choose the path that best fits your inquiry. Messages are routed directly to Alpha X Quant for review."
        index="03 / 04"
      />

      <section className="section contact-intro">
        <div className="site-shell contact-intro-grid">
          <p className="eyebrow dark">Collaboration</p>
          <p className="lead-copy">
            We welcome concise inquiries with a clear research question, collaboration
            objective, or description of relevant experience.
          </p>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="business-contact-title">
        <div className="site-shell contact-layout">
          <div className="contact-aside">
            <span className="contact-index">A</span>
            <p className="eyebrow dark">Organizations &amp; partners</p>
            <h2 id="business-contact-title">Business Collaboration</h2>
            <p>
              For research collaboration, data partnerships, technology partnerships,
              and consulting inquiries.
            </p>
            <ul className="contact-purpose-list">
              <li>Research collaboration</li>
              <li>Data partnerships</li>
              <li>Technology partnerships</li>
              <li>Consulting inquiries</li>
            </ul>
          </div>
          <ContactForm variant="business" />
        </div>
      </section>

      <section className="contact-section contact-section-alt" aria-labelledby="join-contact-title">
        <div className="site-shell contact-layout">
          <div className="contact-aside">
            <span className="contact-index">B</span>
            <p className="eyebrow dark">Researchers &amp; builders</p>
            <h2 id="join-contact-title">Join Alpha X Quant</h2>
            <p>
              For researchers, quantitative developers, and students interested in
              thoughtful project-based collaboration.
            </p>
            <ul className="contact-purpose-list">
              <li>Quantitative researchers</li>
              <li>Quantitative developers</li>
              <li>Students interested in collaboration</li>
            </ul>
          </div>
          <ContactForm variant="join" />
        </div>
      </section>
    </>
  );
}
