import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";

export const metadata: Metadata = {
  title: "支持与服务",
  description: "查看云皓骐骥平衡车的咨询、交付、退换、质保和售后配件支持流程。"
};

const serviceFlow = [
  {
    id: "01",
    title: "售前咨询与选型",
    text: "根据使用场景、采购数量、预算区间和目标市场提供结构化选型建议。",
    tags: ["产品资料", "参数解释", "场景匹配", "版本建议"]
  },
  {
    id: "02",
    title: "报价与订单确认",
    text: "确认型号、颜色、数量、配件和是否定制，输出报价与交付计划。",
    tags: ["企业采购价", "经销合作", "定制需求", "订单确认"]
  },
  {
    id: "03",
    title: "交付与发货",
    text: "发货地浙江金华。常规现货 1-2 天安排发货，特殊订单按库存与排期确认。",
    tags: ["浙江金华发货", "常规包邮", "批量排期", "跨境交付"]
  },
  {
    id: "04",
    title: "售后与配件",
    text: "支持故障反馈、远程指导、配件补发、寄修处理和售后跟踪闭环。",
    tags: ["7 天无理由", "5 年质保", "配件支持", "售后闭环"]
  }
];

const deliveryRules = [
  "常规订单：包邮发货",
  "现货订单：通常 1-2 天安排发货",
  "配件现货：通常 1-3 天发出",
  "非常规配件：通常 7-15 天安排",
  "OEM/ODM 定制：通常约 30 天，按实际需求确认"
];

const afterSalesRules = [
  "支持七天无理由退货（保持商品及包装完整，不影响二次销售）",
  "整车提供 5 年质保",
  "人为损坏、进水、私拆、超载、不当充电等按实际售后政策处理",
  "支持电池、主板、电机、轮胎、充电器、灯光件、控制器等配件供应"
];

export default function SupportPage() {
  return (
    <>
      <PageIntro
        eyebrow="Support"
        title="支持与服务"
        subtitle="从售前选型、交付发货到售后配件，云皓骐骥提供覆盖个人用户、企业采购和经销合作的服务闭环。"
        tone="support"
        visualLabel="机位: 俯视流程图 + 中景补充卡片 | 构图: 售前-交付-售后三段闭环 | 光线: 中性白底 + 蓝色流程线 | 元素: 咨询入口、交付节点、售后节点 | 用途: 服务体系封面"
      />

      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "支持与服务" }]} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-4 support-flow-grid">
            {serviceFlow.map((item) => (
              <article className="card card-light support-step" key={item.title}>
                <p className="eyebrow" style={{ marginBottom: 8 }}>
                  STEP {item.id}
                </p>
                <h2 className="card-title">{item.title}</h2>
                <p className="card-text">{item.text}</p>
                <div className="chip-row" style={{ marginTop: 12 }}>
                  {item.tags.map((tag) => (
                    <span className="chip light" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-2" style={{ marginTop: 20 }}>
            <article className="card card-light">
              <h3 className="card-title">交付规则</h3>
              <div className="footer-list" style={{ marginTop: 10 }}>
                {deliveryRules.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>

            <article className="card card-light">
              <h3 className="card-title">售后规则</h3>
              <div className="footer-list" style={{ marginTop: 10 }}>
                {afterSalesRules.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
