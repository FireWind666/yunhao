import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";

export const metadata: Metadata = {
  title: "发货、退换与质保"
};

const sections = [
  {
    title: "1. 发货与运费",
    body: "发货地：浙江金华。常规订单包邮。现货订单通常 1-2 天安排发货。"
  },
  {
    title: "2. 交付周期",
    body: "小批量试单、批量订单和定制订单按库存、数量、配置及排期确认。OEM/ODM 定制通常约 30 天。"
  },
  {
    title: "3. 七天无理由退货",
    body: "支持七天无理由退货。请保持商品、配件、包装和说明书完整，不影响二次销售。"
  },
  {
    title: "4. 质保政策",
    body: "整车提供 5 年质保。电池、主板、电机、轮胎、充电器等配件支持检测、维修与更换。"
  },
  {
    title: "5. 保外说明",
    body: "人为损坏、进水、摔碰、私自拆修、超载使用、不当充电等情况可提供保外维修，费用按实际故障确认。"
  }
];

export default function ShippingReturnsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Shipping & Warranty"
        title="发货、退换与质保"
        subtitle="交付规则、退货边界与售后保障统一说明。"
      />
      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "发货退换与质保" }]} />
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="grid">
            {sections.map((item) => (
              <article className="card card-light" key={item.title}>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-text">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
