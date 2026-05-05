import type { Metadata } from "next";
import Link from "next/link";
import { CompareTable } from "@/components/CompareTable";
import { PageIntro } from "@/components/PageIntro";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";

export const metadata: Metadata = {
  title: "产品对比",
  description: "对比四款云皓骐骥平衡车的核心参数、场景定位、价格区间与交付边界。"
};

const compareSteps = [
  "先看核心场景：城市通勤 / 巡逻配送 / 全地形探索",
  "再看关键性能：轮胎规格、动力平台、续航与承重",
  "最后看交付与服务：价格区间、发货周期、质保与退货政策"
];

const priceGuide = [
  ["城市护航款", "1700-1900 元"],
  ["大轮稳行款", "1200-1600 元"],
  ["全地形越野款", "1500-1700 元"],
  ["12 英寸全地形旗舰款", "3000 元"]
];

export default function ComparePage() {
  return (
    <>
      <PageIntro
        eyebrow="Compare"
        title="产品对比"
        subtitle="同一品牌下的四款独立产品，对比场景取向、核心能力、价格区间与交付边界，帮助快速选型。"
        tone="compare"
        visualLabel="机位: 正视广角 + 轻透视 | 构图: 四列参数看板左右对齐 | 光线: 冷白面板光 + 深色环境光 | 元素: 差异高亮行、关键参数标签、价格区间 | 用途: 选型决策封面"
      />

      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "产品对比" }]} />
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid compare-decision-strip">
            {compareSteps.map((item, idx) => (
              <article className="card card-light compare-step" key={item}>
                <p className="eyebrow" style={{ marginBottom: 8 }}>
                  Step 0{idx + 1}
                </p>
                <p className="card-text">{item}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 20 }}>
            <CompareTable />
          </div>

          <article className="card card-light" style={{ marginTop: 20 }}>
            <h3 className="card-title">参考零售价区间</h3>
            <div className="grid grid-4" style={{ marginTop: 12 }}>
              {priceGuide.map(([name, price]) => (
                <article className="card card-light" key={name}>
                  <h4 className="card-title" style={{ fontSize: 18 }}>
                    {name}
                  </h4>
                  <p className="big-number" style={{ fontSize: 28, marginTop: 8 }}>
                    {price}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <div className="btn-row" style={{ marginTop: 18 }}>
            <Link className="btn btn-light" href="/contact">
              获取采购报价
            </Link>
            <Link className="btn btn-light" href="/support">
              查看交付与售后政策
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
