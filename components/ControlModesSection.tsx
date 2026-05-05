const modes = [
  {
    title: "手控",
    text: "更稳，适合新手或需要更强支撑感的用户。",
    icon: "Icon Placeholder"
  },
  {
    title: "腿控",
    text: "更自由，适合熟练骑行者，操控更灵活。",
    icon: "Icon Placeholder"
  },
  {
    title: "APP 遥控",
    text: "蓝牙连接，支持远距离操控与车辆管理。",
    icon: "Icon Placeholder"
  }
];

export function ControlModesSection() {
  return (
    <section className="section section-dark" id="control-modes">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Control Modes</p>
          <h2 className="section-title">三种操控方式，从入门到进阶</h2>
          <p className="section-subtitle">
            手控更稳，腿控更自由，APP 遥控更智能。
          </p>
        </div>
        <div className="grid grid-3">
          {modes.map((mode) => (
            <article className="card" key={mode.title}>
              <div className="mini-icon">{mode.icon}</div>
              <h3 className="card-title">{mode.title}</h3>
              <p className="card-text">{mode.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
