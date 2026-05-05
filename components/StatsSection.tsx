const stats = [
  { value: "800W", label: "双电机总功率" },
  { value: "11 寸", label: "越野充气轮胎" },
  { value: "约 40KM", label: "长续航" },
  { value: "30°", label: "爬坡能力" },
  { value: "300 斤", label: "高承重" },
  { value: "IPX4", label: "生活防水" }
];

export function StatsSection() {
  return (
    <section className="section section-dark" id="performance">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Core Numbers</p>
          <h2 className="section-title">核心配置，一眼看清</h2>
        </div>
        <div className="grid grid-3">
          {stats.map((item) => (
            <article className="card" key={item.value}>
              <p className="big-number">{item.value}</p>
              <p className="card-text">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
