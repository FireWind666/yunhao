const blocks = [
  {
    title: "镁铝合金车架",
    text: "轻量与坚固兼顾，一体成型车架结构兼顾轻量化、强度支撑与日常耐用性。",
    bullets: ["轻量化搬运更方便", "结构扎实更耐用", "通勤收纳更省力"]
  },
  {
    title: "高品质轴承系统",
    text: "精密轴承结构减少摩擦损耗，让轮组运转更顺滑，长期使用更省心。",
    bullets: ["运转更顺滑", "减少磨损更耐用", "长期使用更省心"]
  },
  {
    title: "防滑踏板设计",
    text: "大面积脚踏配合防滑纹理，增强脚底摩擦与站立支撑感。",
    bullets: ["表面纹理增强摩擦", "稳定支撑", "新手骑行更安心"]
  }
];

export function StructureDurabilitySection() {
  return (
    <section className="section section-white" id="structure">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Structure & Durability</p>
          <h2 className="section-title">从车架到踏板，为稳定骑行打好基础</h2>
          <p className="section-subtitle">
            镁铝合金车架、高品质轴承系统与防滑踏板共同提升整车强度、运转顺滑度和站立安全感。
          </p>
        </div>
        <div className="grid grid-3">
          {blocks.map((block) => (
            <article className="card card-light" key={block.title}>
              <h3 className="card-title">{block.title}</h3>
              <p className="card-text">{block.text}</p>
              <div className="chip-row" style={{ marginTop: 12 }}>
                {block.bullets.map((bullet) => (
                  <span className="chip light" key={bullet}>
                    {bullet}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
