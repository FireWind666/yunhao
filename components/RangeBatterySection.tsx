const cards = [
  { title: "通勤代步更省心", text: "日常短途往返，减少频繁充电。" },
  { title: "短途配送更安心", text: "高频移动场景下，续航更有余量。" },
  { title: "园区巡逻更持续", text: "大范围巡检，减少中途补电。" },
  {
    title: "高品质动力电池",
    text: "高效释能，稳定输出，为长时间使用提供可靠能量基础。"
  }
];

export function RangeBatterySection() {
  return (
    <section className="section section-white" id="range">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Range & Battery</p>
          <h2 className="section-title">约 40KM 长续航，减少电量焦虑</h2>
          <p className="section-subtitle">
            从出门到返程，覆盖更多短途移动需求，让通勤、配送与巡逻更省心。
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
        <div className="chip-row" style={{ marginTop: 20 }}>
          <span className="chip light">5200mAh 锂电池</span>
          <span className="chip light">约 4 小时充电</span>
        </div>
        <p className="section-note">
          实际续航会受到载重、速度、路况、温度和使用习惯影响。
        </p>
      </div>
    </section>
  );
}
