const colors = [
  {
    title: "烤瓷白 Ceramic White",
    text: "干净、科技、清爽，适合城市通勤与日常出行。"
  },
  {
    title: "磨砂黑 Matte Black",
    text: "低调、耐看、硬核，适合骑手、巡逻、配送与户外场景。"
  }
];

export function ColorOptionsSection() {
  return (
    <section className="section section-dark" id="colors">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Color Options</p>
          <h2 className="section-title">两款经典配色，适配不同风格</h2>
          <p className="section-subtitle">
            烤瓷白干净清新，磨砂黑经典耐看。颜值与质感兼具，满足不同骑行风格。
          </p>
        </div>
        <div className="grid grid-2">
          {colors.map((color, idx) => (
            <article className="card" key={color.title}>
              <div className={`color-placeholder color-${idx + 1}`}>
                Product Color Placeholder
              </div>
              <h3 className="card-title" style={{ marginTop: 18 }}>
                {color.title}
              </h3>
              <p className="card-text">{color.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
