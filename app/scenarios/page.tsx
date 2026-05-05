import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "使用场景",
  description: "覆盖城市通勤、园区巡逻、短途配送、夜间出行与轻越野探索等真实场景。"
};

const scenarioGroups = [
  {
    title: "城市与通勤",
    items: ["城市通勤", "社区代步", "园区出行"]
  },
  {
    title: "作业与巡航",
    items: ["短途配送", "园区巡逻", "夜间出行"]
  },
  {
    title: "户外与探索",
    items: ["小雨短途", "轻越野", "户外探索"]
  }
];

export default function ScenariosPage() {
  return (
    <>
      <PageIntro
        eyebrow="Brand Scenarios"
        title="使用场景"
        subtitle="聚焦成人真实短途移动：城市通勤、巡检配送、夜间与轻越野等多场景覆盖。"
        tone="scenarios"
        visualLabel="机位: 横向跟拍长镜头 | 构图: 左城市场景右户外场景 | 光线: 日景到夜景渐变 | 元素: 通勤/配送/巡逻/夜骑/轻越野连续轨迹 | 用途: 场景总览封面"
      />
      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "使用场景" }]} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-3">
            {scenarioGroups.map((group) => (
              <article className="card card-light" key={group.title}>
                <h3 className="card-title">{group.title}</h3>
                <div className="chip-row" style={{ marginTop: 12 }}>
                  {group.items.map((item) => (
                    <span className="chip light" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
                <p className="card-text" style={{ marginTop: 14 }}>
                  场景说明占位，后续接入真实路况图、典型里程与使用建议。
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Scenario Mapping</p>
            <h2 className="section-title">场景与产品匹配建议</h2>
          </div>
          <div className="grid grid-4">
            {products.map((product) => (
              <article className="card card-light" key={product.slug}>
                <h3 className="card-title">
                  {product.nameEn}｜{product.nameZh}
                </h3>
                <p className="card-text">{product.positioning}</p>
                <div className="chip-row" style={{ marginTop: 12 }}>
                  {product.scenarios.slice(0, 3).map((scene) => (
                    <span className="chip light" key={scene}>
                      {scene}
                    </span>
                  ))}
                </div>
                <Link className="btn btn-light" href={`/products/${product.slug}`} style={{ marginTop: 16 }}>
                  查看详情
                </Link>
              </article>
            ))}
          </div>
          <div style={{ marginTop: 22 }}>
            <PlaceholderVisual
              text="机位: 多机位拼接画幅 | 构图: 四象限路况拼图 | 光线: 城市冷灰 + 夜间蓝光 | 元素: 城市路缝、园区道路、雨夜地面、轻越野碎石 | 用途: 真实路况图库"
              light
              minHeight={340}
            />
          </div>
        </div>
      </section>
    </>
  );
}
