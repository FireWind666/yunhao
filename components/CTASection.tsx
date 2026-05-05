export function CTASection() {
  return (
    <section className="section section-dark" id="contact">
      <div className="container cta-wrap">
        <p className="eyebrow">Ready To Ride</p>
        <h2 className="section-title">准备好开启更稳的短途出行了吗？</h2>
        <p className="section-subtitle">
          选择适合你的骑行方式，用一台骑手级越野智能平衡车，应对更多真实路况。
        </p>
        <div className="btn-row" style={{ marginTop: 24 }}>
          <button className="btn btn-primary">立即购买</button>
          <button className="btn btn-secondary">获取报价</button>
          <button className="btn btn-secondary">联系我们</button>
          <button className="btn btn-secondary">经销合作</button>
          <button className="btn btn-secondary">查看完整参数</button>
        </div>
        <p className="section-note">For Distributors / Wholesale Inquiry</p>
      </div>
    </section>
  );
}
