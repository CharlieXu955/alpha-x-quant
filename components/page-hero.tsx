type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  index: string;
};

export function PageHero({ eyebrow, title, description, index }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="site-shell page-hero-inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero-summary">
          <span className="page-index">{index}</span>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
}
