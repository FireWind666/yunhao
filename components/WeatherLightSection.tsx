const cards = [
  { title: "应对小雨更从容", text: "日常小雨环境下，短途出行更安心。" },
  { title: "防泼溅更安心", text: "防雨罩设计减少水花飞溅影响。" },
  { title: "前灯照明更清晰", text: "提升低光环境下的前方识别度。" },
  { title: "尾灯提示更醒目", text: "增强后方识别度，让夜骑更有安全感。" }
];

export function WeatherLightSection() {
  return (
    <section className="section section-dark" id="weather-light">
      <div className="container split">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Weather & Lighting</p>
            <h2 className="section-title">雨天与夜间，也能稳稳出行</h2>
            <p className="section-subtitle">
              IPX4 生活防水，自带防雨罩，配合 LED 感应式灯光系统，应对小雨、水溅、湿滑路面和低光环境。
            </p>
          </div>
          <div className="grid grid-2">
            {cards.map((item) => (
              <article className="card" key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="section-note">
            不建议在暴雨、积水、深水或极端天气环境中骑行。
          </p>
        </div>
        <div className="placeholder">Rain / Light Visual Placeholder</div>
      </div>
    </section>
  );
}
