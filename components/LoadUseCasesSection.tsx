const highlights = [
  { title: "结构更扎实可靠", text: "高强度车架，多点受力稳定支撑。" },
  { title: "成人适用", text: "300 斤高承重设计，成人也能安心使用。" },
  { title: "家庭共享更实用", text: "一台车满足多人使用需求。" }
];

const useCases = [
  "短途配送：社区、商圈、校园、园区内短距离配送。",
  "成人通勤：小区到地铁、停车场到办公楼、园区内部移动。",
  "园区巡逻：物业、安保、景区、厂区、仓储园区巡逻。",
  "家庭共享：成人代步、日常休闲、多人轮流使用。"
];

export function LoadUseCasesSection() {
  return (
    <section className="section section-light" id="use-cases">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Load & Scenarios</p>
          <h2 className="section-title">300 斤高承重，成人也能稳稳骑行</h2>
          <p className="section-subtitle">
            高强度车架与多点受力结构，满足更多成人使用场景。
          </p>
        </div>
        <div className="grid grid-3">
          {highlights.map((item) => (
            <article className="card card-light" key={item.title}>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </article>
          ))}
        </div>
        <div className="grid grid-2" style={{ marginTop: 20 }}>
          {useCases.map((item) => (
            <article className="card card-light" key={item}>
              <p className="card-text">{item}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
