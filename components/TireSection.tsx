const points = [
  {
    title: "大轮径，通过性更强",
    text: "面对路面接缝、小坑洼、轻微沟坎时更从容。"
  },
  {
    title: "大花纹，抓地力更稳",
    text: "深纹胎面提升复杂路面的抓地表现。"
  },
  {
    title: "充气胎，减震更舒适",
    text: "过滤更多细碎震动，提升骑行舒适度。"
  }
];

const mini = ["坑洼路面", "湿滑地面", "日常沟坎", "城市道路接缝"];

export function TireSection() {
  return (
    <section className="section section-light" id="tire">
      <div className="container split">
        <div className="placeholder light">Tire Close-up Placeholder</div>
        <div>
          <div className="section-heading">
            <p className="eyebrow">Off-road Tire</p>
            <h2 className="section-title">11 寸越野充气轮胎，稳定来自更大的轮径</h2>
            <p className="section-subtitle">
              大轮径、大花纹、充气胎结构，提升通过性、抓地力与减震舒适感。
            </p>
          </div>
          <div className="grid">
            {points.map((point) => (
              <article className="card card-light" key={point.title}>
                <h3 className="card-title">{point.title}</h3>
                <p className="card-text">{point.text}</p>
              </article>
            ))}
          </div>
          <div className="divider" />
          <p className="card-text">关键参数：直径约 26cm | 宽约 8.7cm</p>
          <div className="chip-row" style={{ marginTop: 14 }}>
            {mini.map((item) => (
              <span className="chip light" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
