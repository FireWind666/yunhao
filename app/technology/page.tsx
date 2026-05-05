import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "技术总览",
  description: "查看云皓骐骥平衡车的动力、稳定、安全与智能控制技术体系。"
};

const architectureLayers = [
  {
    title: "动力层",
    text: "双电机平台、扭矩输出与爬坡能力协同，覆盖城市到轻越野的多路况动力需求。"
  },
  {
    title: "稳定层",
    text: "轮胎结构、重心控制与自动平衡逻辑联动，降低复杂路况中的姿态波动。"
  },
  {
    title: "安全层",
    text: "主板控制、防护结构与灯光提示形成多点安全闭环，提升可预期性。"
  },
  {
    title: "智能层",
    text: "APP 监测与连接能力统一接入，支持状态可视化、数据管理与基础遥控。"
  }
];

export default function TechnologyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Technology"
        title="技术总览"
        subtitle="从动力到控制，从轮胎到结构，四款产品基于同一品牌技术体系构建差异化能力。"
        tone="technology"
        visualLabel="机位: 中央正视 + 轻透视 | 构图: 技术模块环绕主控芯片 | 光线: 深色底 + 蓝色能量线 | 元素: 主板/电机/轮胎/车架联动关系 | 用途: 技术中枢封面"
      />
      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "技术总览" }]} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Capability Stack</p>
            <h2 className="section-title">品牌共通技术能力</h2>
          </div>
          <div className="grid grid-4 tech-stack-grid">
            {[
              "智能平衡系统",
              "双电机动力平台",
              "轮胎稳定系统",
              "电池安全防护",
              "APP 智能控制",
              "LED 光效系统",
              "IPX4/IP54 日常防护",
              "高承重车架结构"
            ].map((item) => (
              <article className="card card-light tech-stack-card" key={item}>
                <h3 className="card-title">{item}</h3>
                <p className="card-text">技术说明占位，后续接入量化参数、结构图与验证数据。</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container split">
          <div>
            <div className="section-heading">
              <p className="eyebrow">Architecture</p>
              <h2 className="section-title">技术架构分层</h2>
              <p className="section-subtitle">用分层方式解释技术逻辑，避免只看单点参数，更便于做产品选型和功能映射。</p>
            </div>
            <div className="grid grid-2">
              {architectureLayers.map((item) => (
                <article className="card card-light" key={item.title}>
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
          <PlaceholderVisual
            text="机位: 正交俯视 | 构图: 四层模块自上而下展开 | 光线: 冷白底 + 蓝色描边 | 元素: 动力层/稳定层/安全层/智能层 | 用途: 技术架构解释图"
            light
            minHeight={380}
          />
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Product Mapping</p>
            <h2 className="section-title">技术到产品映射</h2>
            <p className="section-subtitle">同一技术体系在不同产品中有不同权重，建议按场景优先级进入对应详情页查看完整模块。</p>
          </div>
          <div className="grid grid-4">
            {products.map((product) => (
              <article className="card" key={product.slug}>
                <h3 className="card-title">
                  {product.nameEn}｜{product.nameZh}
                </h3>
                <p className="card-text">{product.positioning}</p>
                <div className="chip-row" style={{ marginTop: 12 }}>
                  {product.homeTags.slice(0, 3).map((tag) => (
                    <span className="chip" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link className="btn btn-secondary" href={`/products/${product.slug}`} style={{ marginTop: 16 }}>
                  进入产品详情
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
