const cards = [
  {
    title: "成人通勤",
    text: "适合小区到地铁、停车场到办公楼、园区内部等短途移动。"
  },
  {
    title: "短途配送",
    text: "适合社区、校园、商圈、园区等高频短距场景。"
  },
  {
    title: "园区巡逻",
    text: "适合物业、安保、景区、厂区、仓储园区等巡检场景。"
  },
  {
    title: "家庭共享",
    text: "成人代步、日常休闲、多人使用，一台车覆盖更多需求。"
  }
];

export function PositioningSection() {
  return (
    <section className="section section-light" id="positioning">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Positioning</p>
          <h2 className="section-title">不只是平衡车，更是短途移动装备</h2>
          <p className="section-subtitle">
            从成人通勤到短途配送，从园区巡逻到日常休闲，它为真实移动场景而设计。
          </p>
        </div>
        <div className="grid grid-4">
          {cards.map((card) => (
            <article className="card card-light" key={card.title}>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
