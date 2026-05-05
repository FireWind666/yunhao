const tags = ["800W 双驱", "11 寸越野胎", "约 40KM 续航", "IPX4 防水", "300 斤承重"];

export function HeroSection() {
  return (
    <section className="section section-dark hero" id="hero">
      <div className="container split">
        <div>
          <p className="eyebrow">Rider-Grade Mobility</p>
          <h1 className="section-title">为真实路况而生</h1>
          <h2 className="hero-subtitle">骑手级越野智能平衡车</h2>
          <p className="section-subtitle">
            800W 强劲双驱，11 寸越野充气轮胎，约 40KM 长续航，IPX4
            生活防水。为成人通勤、短途配送、园区巡逻与日常短途出行打造，稳稳应对每一次真实路况。
          </p>
          <div className="chip-row hero-tags">
            {tags.map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="btn-row">
            <button className="btn btn-primary">了解性能</button>
            <button className="btn btn-secondary">查看参数</button>
            <button className="btn btn-secondary">获取报价</button>
          </div>
        </div>
        <div className="placeholder">Product Image Placeholder</div>
      </div>
    </section>
  );
}
