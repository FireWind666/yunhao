type PageIntroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  visualLabel?: string;
  tone?: "products" | "technology" | "scenarios" | "compare" | "support" | "contact" | "default";
};

export function PageIntro({
  eyebrow,
  title,
  subtitle,
  visualLabel,
  tone = "default"
}: PageIntroProps) {
  return (
    <section className={`section section-dark page-intro page-intro-${tone}`}>
      <div className="container">
        <div className={`page-intro-stage page-intro-stage-${tone}`}>
          {visualLabel ? <p className="visual-stage-label page-intro-visual-label">{visualLabel}</p> : null}
          <div className="page-intro-overlay">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="section-title">{title}</h1>
            <p className="section-subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
