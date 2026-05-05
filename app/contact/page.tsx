import type { Metadata } from "next";
import { ContactQuickActions } from "@/components/ContactQuickActions";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { PageIntro } from "@/components/PageIntro";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";

export const metadata: Metadata = {
  title: "联系我们",
  description: "获取云皓骐骥平衡车报价、经销合作、OEM/ODM 定制与售后支持。"
};

const contactCards = [
  {
    title: "基础联系信息",
    lines: [
      "公司名称：烟台骐骥电子科技有限公司",
      "品牌名称：云皓骐骥平衡车",
      "电话：15589526622",
      "邮箱：471181620@qq.com",
      "微信：wxid_az62rt8sc38822",
      "工作时间：工作日 9:00-18:00"
    ]
  },
  {
    title: "地址与发货",
    lines: [
      "公司地址：中国（山东）自由贸易试验区烟台片区烟台开发区金沙江路 98 号西厂 B 区",
      "发货地：浙江金华",
      "常规订单：包邮发货",
      "现货交付：常规 1-2 天安排发货",
      "定制订单：通常约 30 天（按配置确认）"
    ]
  },
  {
    title: "服务与保障",
    lines: [
      "支持七天无理由退货",
      "整车 5 年质保",
      "不同常规颜色同价",
      "常用配件长期供应",
      "支持远程故障判断与维修指导"
    ]
  }
];

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="联系我们"
        subtitle="获取报价、批发合作、OEM/ODM 定制与售后支持，我们将根据型号、数量与目标市场快速对接。"
        tone="contact"
        visualLabel="机位: 中景正视 + 轻景深 | 构图: 前台团队在左、数据看板在右 | 光线: 高级冷白主光 + 蓝色边缘光 | 元素: 联系入口、服务席位、工单看板 | 用途: 联系转化封面"
      />

      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "联系我们" }]} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-3">
            {contactCards.map((card) => (
              <article className="card card-light" key={card.title}>
                <h2 className="card-title">{card.title}</h2>
                <div className="footer-list" style={{ marginTop: 10 }}>
                  {card.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="grid grid-2" style={{ marginTop: 20 }}>
            <LeadCaptureForm />
            <article className="card card-light">
              <p className="eyebrow">Service SLA</p>
              <h3 className="card-title">响应时效与说明</h3>
              <p className="card-text">
                工作日 9:00-18:00 内提交咨询一般当天响应。批量采购、定制需求和售后配件问题由专人跟进，具体处理时间以订单情况、库存和问题复杂度为准。
              </p>
              <ContactQuickActions />
              <p className="card-text" style={{ marginTop: 12 }}>
                提示：若微信链接在电脑端无法唤起，请直接搜索微信号：wxid_az62rt8sc38822。
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
