const tags = [
  "手提方向杆",
  "防滑踏板",
  "充电口",
  "挡泥板",
  "越野轮胎",
  "轮毂",
  "电池模块",
  "控制主板",
  "电机系统",
  "LED 灯光系统"
];

const layers = [
  "1. 11 寸越野充气轮胎",
  "2. 高品质轴承系统",
  "3. 双电机驱动系统",
  "4. 高品质动力电池",
  "5. 特制安全主板",
  "6. 镁铝合金车架",
  "7. 防滑踏板",
  "8. LED 灯光系统",
  "9. 防雨罩与挡泥结构"
];

export function ExplodedViewPlaceholderSection() {
  return (
    <section className="section section-white" id="exploded-view">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Exploded View Ready</p>
          <h2 className="section-title">从外到内，为真实路况而设计</h2>
          <p className="section-subtitle">
            轮胎、电机、电池、主板、车架、轴承与踏板协同工作，构成一套面向真实路况的稳定系统。
          </p>
        </div>
        <div className="placeholder light" style={{ minHeight: 420 }}>
          Exploded Sequence Placeholder
        </div>
        <div className="chip-row" style={{ marginTop: 20 }}>
          {tags.map((tag) => (
            <span className="chip light" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="grid grid-3" style={{ marginTop: 20 }}>
          {layers.map((layer) => (
            <article className="card card-light" key={layer}>
              <p className="card-text">{layer}</p>
            </article>
          ))}
        </div>
        <p className="section-note">
          不是单一参数的堆叠，而是一整套围绕真实路况构建的稳定系统。
        </p>
      </div>
    </section>
  );
}
