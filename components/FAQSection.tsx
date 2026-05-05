const faqs = [
  {
    q: "Q1：这款车适合儿童还是成人？",
    a: "A：产品采用 300 斤高承重设计，成人也能稳定骑行。未成年人使用时建议在成人看护下骑行。"
  },
  {
    q: "Q2：雨天可以骑吗？",
    a: "A：支持 IPX4 生活防水，可应对小雨和日常水溅，但不建议在暴雨、积水、深水或极端天气环境中骑行。"
  },
  {
    q: "Q3：可以上坡吗？",
    a: "A：产品配备 800W 双驱动力，支持约 30° 爬坡，适合地库坡道、桥面、园区坡路等日常坡道场景。"
  },
  {
    q: "Q4：续航真的有 40KM 吗？",
    a: "A：约 40KM 为参考续航，实际续航会受到载重、速度、路况、温度和使用习惯影响。"
  },
  {
    q: "Q5：新手容易学会吗？",
    a: "A：开机自动平衡辅助可降低学习门槛，建议新手在平整、开阔、安全区域逐步练习。"
  },
  {
    q: "Q6：可以用于配送或巡逻吗？",
    a: "A：适合短途配送、园区巡逻、社区代步等低速短途场景，具体使用需遵守当地交通与场地管理规定。"
  },
  {
    q: "Q7：轮胎是什么类型？",
    a: "A：产品采用 11 寸越野充气轮胎，大轮径与深花纹设计可提升通过性、抓地力和减震舒适感。"
  }
];

export function FAQSection() {
  return (
    <section className="section section-white" id="faq">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">常见问题</h2>
        </div>
        <div className="grid">
          {faqs.map((item) => (
            <article className="card card-light" key={item.q}>
              <h3 className="card-title" style={{ fontSize: 20 }}>
                {item.q}
              </h3>
              <p className="card-text">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
