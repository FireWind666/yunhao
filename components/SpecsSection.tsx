const specGroups = [
  {
    title: "动力系统",
    rows: [
      "电机：400W × 2",
      "总功率：800W",
      "爬坡能力：30°",
      "速度：约 17km/h"
    ]
  },
  {
    title: "续航与电池",
    rows: ["续航：约 40KM", "电池：5200mAh 锂电池", "充电时间：约 4 小时"]
  },
  {
    title: "结构与轮胎",
    rows: ["轮胎：11 寸充气越野胎", "车架：镁铝合金", "承重：300 斤", "防水：IPX4"]
  },
  {
    title: "外观配置",
    rows: [
      "配色：烤瓷白 / 磨砂黑",
      "操控：手控 / 腿控 / APP 遥控",
      "灯光：LED 感应式灯光"
    ]
  }
];

export function SpecsSection() {
  return (
    <section className="section section-light" id="specs">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Specifications</p>
          <h2 className="section-title">产品参数，一页看清核心配置</h2>
        </div>
        <div className="grid grid-2">
          {specGroups.map((group) => (
            <article className="card card-light" key={group.title}>
              <h3 className="card-title">{group.title}</h3>
              <div className="grid">
                {group.rows.map((row) => (
                  <p className="card-text" key={row}>
                    {row}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="section-note">
          实际续航、速度和爬坡表现会受到载重、路况、温度、电量和使用习惯影响。
        </p>
      </div>
    </section>
  );
}
