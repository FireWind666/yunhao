import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";

export const metadata: Metadata = {
  title: "Cookie 政策"
};

const sections = [
  {
    title: "1. Cookie 使用说明",
    body: "本网站可能使用必要 Cookie 与统计 Cookie，以保障站点运行、分析访问行为并优化体验。"
  },
  {
    title: "2. Cookie 类型",
    body: "必要 Cookie：维持页面基础功能。统计 Cookie：用于访问统计与效果分析（如 GA4，若已启用）。"
  },
  {
    title: "3. 管理方式",
    body: "你可在浏览器设置中清除或禁用 Cookie。禁用后可能影响部分网站功能。"
  },
  {
    title: "4. 联系方式",
    body: "如需了解 Cookie 使用详情，请联系 471181620@qq.com。"
  }
];

export default function CookiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Cookies"
        title="Cookie 政策"
        subtitle="本页面说明网站 Cookie 的使用类型、目的和管理方式。"
      />
      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "Cookie 政策" }]} />
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
