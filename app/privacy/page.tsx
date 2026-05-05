import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";

export const metadata: Metadata = {
  title: "隐私政策"
};

const sections = [
  {
    title: "1. 我们收集的信息",
    body: "当你在本网站提交询价、联系方式或采购需求时，我们会收集你主动提供的信息，包括姓名/公司、电话、邮箱、微信/WhatsApp、地区、采购用途、数量与备注。"
  },
  {
    title: "2. 信息使用目的",
    body: "用于产品选型、报价沟通、订单处理、售后支持与服务改进。未经授权，我们不会将你的信息用于无关用途。"
  },
  {
    title: "3. 信息存储与安全",
    body: "我们采取合理的技术与管理措施保护信息安全。仅授权人员可在业务必要范围内访问相关数据。"
  },
  {
    title: "4. 信息共享",
    body: "除法律法规要求、履行订单所必需的物流/支付/服务协作外，我们不会向无关第三方出售或泄露你的个人信息。"
  },
  {
    title: "5. 你的权利",
    body: "你可通过本页联系方式申请查询、更正或删除你提交的信息。"
  },
  {
    title: "6. 联系方式",
    body: "公司：烟台骐骥电子科技有限公司；邮箱：471181620@qq.com；电话：15589526622；工作日 9:00-18:00。"
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Privacy"
        title="隐私政策"
        subtitle="本政策说明云皓骐骥平衡车官网如何收集、使用、保存与保护用户信息。"
      />
      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "隐私政策" }]} />
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
