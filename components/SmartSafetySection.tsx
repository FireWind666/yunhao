const cards = [
  { title: "运算反应更迅速", text: "实时处理骑行姿态与车辆状态。" },
  { title: "电机响应更灵敏", text: "加速、减速与转向更跟脚。" },
  { title: "开机自动平衡", text: "启动后进入稳定辅助状态。" },
  { title: "降低学习门槛", text: "初次接触也能更快建立骑行信心。" }
];

export function SmartSafetySection() {
  return (
    <section className="section section-light" id="smart-safety">
      <div className="container split">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Smart Safety</p>
            <h2 className="section-title">稳定控制，才是真正的安全感</h2>
            <p className="section-subtitle">
              特制安全主板实时处理骑行状态，配合自动平衡辅助，让动力输出、转向与平衡控制更稳定。
            </p>
          </div>
          <div className="grid grid-2">
            {cards.map((card) => (
              <article className="card card-light" key={card.title}>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="placeholder light">Mainboard / Chip Visual Placeholder</div>
      </div>
    </section>
  );
}
