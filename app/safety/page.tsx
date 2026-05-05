import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";

export const metadata: Metadata = {
  title: "安全声明"
};

const boundaries = [
  "防水等级不等于可涉水骑行；暴雨、深水、积水、冲水环境不建议使用。",
  "承重与爬坡能力为参考值，实际表现受载重、电量、路况、轮胎状态和骑行方式影响。",
  "不建议进入机动车道或复杂交通道路，需遵守当地法规与场地管理规定。",
  "儿童和新手建议在成人监护下，在开阔平整区域低速练习。"
];

export default function SafetyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Safety"
        title="安全声明"
        subtitle="面向真实使用场景，明确防水、承重、爬坡、道路合规与操作边界。"
      />
      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "安全声明" }]} />
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <article className="card card-light">
            <h2 className="card-title">核心边界说明</h2>
            <div className="footer-list" style={{ marginTop: 10 }}>
              {boundaries.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
