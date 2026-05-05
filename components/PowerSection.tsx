const points = [
  {
    title: "起步更稳更快",
    text: "双电机输出，让车辆响应更直接。"
  },
  {
    title: "30° 强劲爬坡",
    text: "面对地库坡道、桥面坡道、园区坡路等日常坡道更从容。"
  },
  {
    title: "复杂路况更有底气",
    text: "面对坑洼、湿滑、轻微起伏路面时，动力储备更安心。"
  }
];

export function PowerSection() {
  return (
    <section className="section section-white" id="power">
      <div className="container split">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Power & Climb</p>
            <h2 className="section-title">800W 强劲双驱，坡道也能从容应对</h2>
            <p className="section-subtitle">
              400W × 2
              双电机协同输出，让起步、爬坡、转向和复杂路况通过更从容。
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
        </div>
        <div className="placeholder light">Motor / Power Structure Placeholder</div>
      </div>
    </section>
  );
}
