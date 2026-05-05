import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";

export const metadata: Metadata = {
  title: "服务条款"
};

const sections = [
  {
    title: "1. 服务范围",
    body: "本网站提供云皓骐骥平衡车的产品信息展示、询价沟通、采购合作与售后咨询服务。"
  },
  {
    title: "2. 报价与订单",
    body: "页面展示价格区间为参考信息。最终价格、库存、交期与配置以双方确认的订单或书面报价为准。"
  },
  {
    title: "3. 交付与物流",
    body: "发货地为浙江金华。常规订单包邮，现货通常 1-2 天安排发货；批量或定制订单按排期执行。"
  },
  {
    title: "4. 退换与质保",
    body: "支持七天无理由退货（不影响二次销售）。整车提供 5 年质保。人为损坏、进水、私拆、超载等情况按实际售后政策处理。"
  },
  {
    title: "5. 责任限制",
    body: "用户应在合法合规、安全可控场景使用产品。因超出建议使用边界导致的风险，需由使用方承担相应责任。"
  },
  {
    title: "6. 争议与适用",
    body: "若发生争议，双方应优先协商解决；协商不成时，可依据适用法律通过有管辖权机构处理。"
  }
];

export default function TermsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Terms"
        title="服务条款"
        subtitle="本条款用于说明本网站服务、报价交付、退换质保及责任边界。"
      />
      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "服务条款" }]} />
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
