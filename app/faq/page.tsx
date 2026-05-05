import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "常见问题",
  description: "查看云皓骐骥平衡车在上手、雨天、防水、续航、售后与交付方面的常见问题解答。"
};

const faqItems = [
  {
    q: "新手多久能学会平衡车？",
    a: "建议先在空旷、平整、无车流场地练习。城市护航款和大轮稳行款均支持自动平衡辅助，一般先练习上车、站稳、前进、转弯和下车，再进入复杂场景。"
  },
  {
    q: "雨天可以骑吗？",
    a: "不建议在大雨、积水、泥水或湿滑坡道长时间骑行。城市护航款支持 IPX4，12 英寸旗舰款支持 IP54，均属于日常防溅级别，不等于可涉水骑行。"
  },
  {
    q: "平衡车能上马路吗？",
    a: "不建议进入机动车道或复杂交通道路。更适合小区、园区、景区、校园、封闭道路等低速短途场景，需遵守当地法规和场地管理规定。"
  },
  {
    q: "可以爬坡吗？",
    a: "可以爬一定坡度。大轮稳行款约 25°，城市护航款约 30°，全地形越野款约 30°，12 英寸旗舰款约 25-30°。实际受体重、电量、坡面和轮胎状态影响。"
  },
  {
    q: "续航是不是固定值？",
    a: "不是。续航会受体重、速度、路况、温度、电池状态和使用习惯影响。参考续航：城市护航款约 40km，大轮稳行款约 40km，全地形越野款约 35-40km，12 英寸旗舰款约 60km。"
  },
  {
    q: "平衡车坏了怎么修？",
    a: "可按“问题反馈→视频判断→远程指导→配件发出/寄修→售后跟踪”流程处理。支持电池、主板、电机、轮胎、充电器等常见配件更换与维修指导。"
  },
  {
    q: "维修和配件周期多久？",
    a: "常规现货配件一般 1-3 天发出，非常规配件一般 7-15 天安排。"
  },
  {
    q: "支持七天无理由退货吗？",
    a: "支持。请保持商品、配件、包装、说明书完整且不影响二次销售。定制订单或明显人为损坏情况按订单约定执行。"
  },
  {
    q: "运费怎么算？",
    a: "常规订单包邮发货。特殊地区、批量订单、跨境订单或特殊物流需求按实际订单确认。"
  },
  {
    q: "不同颜色是否同价？",
    a: "常规颜色同价。若涉及专属定制色、工艺调整或渠道专供色，按订单数量与定制需求单独确认。"
  }
];

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        title="常见问题"
        subtitle="围绕上手、雨天、防水边界、续航影响、售后流程与购买政策，给出可执行答案。"
      />

      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "常见问题" }]} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid">
            {faqItems.map((item) => (
              <article className="card card-light" key={item.q}>
                <h2 className="card-title" style={{ fontSize: 22 }}>
                  {item.q}
                </h2>
                <p className="card-text">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Product FAQ Entry</p>
            <h2 className="section-title">按产品继续查看</h2>
            <p className="section-subtitle">每款产品详情页都包含独立 FAQ，可查看更具体的参数边界和场景建议。</p>
          </div>
          <div className="grid grid-4">
            {products.map((product) => (
              <article className="card card-light" key={product.slug}>
                <h3 className="card-title">
                  {product.nameEn}｜{product.nameZh}
                </h3>
                <p className="card-text">{product.homeSubtitle}</p>
                <Link className="btn btn-light" href={`/products/${product.slug}`} style={{ marginTop: 16 }}>
                  查看该产品 FAQ
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
