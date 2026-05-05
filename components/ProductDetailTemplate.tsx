import Link from "next/link";
import type { ProductModel } from "@/data/products";
import { products } from "@/data/products";
import { getProductImageSet } from "@/data/productImages";
import { getUnifiedCoreSpecs, getUnifiedSpecsTable } from "@/data/specNormalization";
import { CompareTable } from "./CompareTable";
import { PlaceholderVisual } from "./PlaceholderVisual";
import { SiteBreadcrumb } from "./SiteBreadcrumb";

type ProductDetailTemplateProps = {
  product: ProductModel;
};

type ModuleGroupKey = "performance" | "safety" | "structure";

const moduleGroupMeta: Record<
  ModuleGroupKey,
  { title: string; subtitle: string; anchor: string; eyebrow: string }
> = {
  performance: {
    title: "性能与通过性",
    subtitle: "围绕动力、轮胎、爬坡与续航，建立真实路况下的核心通过能力。",
    anchor: "group-performance",
    eyebrow: "Performance Block"
  },
  safety: {
    title: "智能与安全控制",
    subtitle: "围绕平衡控制、主板协同与操控逻辑，提升骑行确定性与学习效率。",
    anchor: "group-safety",
    eyebrow: "Safety Block"
  },
  structure: {
    title: "结构与耐用体系",
    subtitle: "围绕车架、防护、配色工艺与长期使用稳定性，形成完整结构价值。",
    anchor: "group-structure",
    eyebrow: "Structure Block"
  }
};

function getModuleGroup(id: string): ModuleGroupKey {
  const performanceIds = new Set([
    "all-weather",
    "power",
    "motor-exploded",
    "wheel",
    "tire",
    "tire-stability",
    "grip",
    "climb",
    "range",
    "range-battery",
    "frame-bearing"
  ]);
  const safetyIds = new Set([
    "waterproof",
    "ipx4",
    "water-light",
    "rain-guard",
    "led",
    "safety-control",
    "balance",
    "mainboard",
    "app-control",
    "control",
    "app",
    "smart-system",
    "battery-protect"
  ]);

  if (performanceIds.has(id)) return "performance";
  if (safetyIds.has(id)) return "safety";
  return "structure";
}

export function ProductDetailTemplate({ product }: ProductDetailTemplateProps) {
  const imageSet = getProductImageSet(product.slug);
  const unifiedCoreSpecs = getUnifiedCoreSpecs(product);
  const unifiedSpecsTable = getUnifiedSpecsTable(product);
  const hiddenModuleIds = new Set(["quality", "certification"]);
  const visibleModules = product.detailModules.filter((module) => !hiddenModuleIds.has(module.id));
  const related = products.filter((item) => item.slug !== product.slug).map((item) => item.slug);
  const isTerraX = product.slug === "terra-x";
  const isFlagship = product.slug === "terra-x" || product.slug === "all-terrain-12";
  const heroMetricPriority = [
    "电机",
    "总功率",
    "轮胎",
    "轮胎规格",
    "续航",
    "真实续航",
    "爬坡",
    "爬坡能力",
    "承重",
    "最大承重",
    "防水",
    "灯光"
  ];
  const heroMetrics = heroMetricPriority
    .map((label) => unifiedCoreSpecs.find((item) => item.label === label))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .slice(0, isFlagship ? 5 : 4);
  const terraSpotlightIds = new Set([
    "motor-exploded",
    "tire",
    "range",
    "app",
    "flagship-compare"
  ]);
  const findModuleAnchor = (ids: string[]) =>
    visibleModules.find((module) => ids.includes(module.id))?.id;
  const groupedModules = visibleModules.map((module, index) => ({
    module,
    index,
    group: getModuleGroup(module.id)
  }));
  const presentGroups = new Set(groupedModules.map((item) => item.group));
  const quickNav = [
    { label: "概览", href: "#core-specs" },
    { label: "卖点", href: "#top-highlights" },
    {
      label: "动力与表现",
      href: findModuleAnchor(["power", "motor-exploded", "wheel", "tire", "tire-stability", "grip", "climb"])
        ? `#module-${findModuleAnchor(["power", "motor-exploded", "wheel", "tire", "tire-stability", "grip", "climb"])}`
        : ""
    },
    {
      label: "智能与安全",
      href: findModuleAnchor([
        "safety-control",
        "balance",
        "mainboard",
        "app-control",
        "control",
        "app",
        "smart-system"
      ])
        ? `#module-${findModuleAnchor([
            "safety-control",
            "balance",
            "mainboard",
            "app-control",
            "control",
            "app",
            "smart-system"
          ])}`
        : ""
    },
    {
      label: "结构与防护",
      href: findModuleAnchor([
        "waterproof",
        "ipx4",
        "led",
        "water-light",
        "battery-protect",
        "structure",
        "frame-bearing",
        "pedal-stand",
        "frame-load",
        "safety-structure",
        "craft-colors"
      ])
        ? `#module-${findModuleAnchor([
            "waterproof",
            "ipx4",
            "led",
            "water-light",
            "battery-protect",
            "structure",
            "frame-bearing",
            "pedal-stand",
            "frame-load",
            "safety-structure",
            "craft-colors"
          ])}`
        : ""
    },
    { label: "场景", href: "#use-cases" },
    { label: "参数", href: "#specs-table" },
    { label: "对比", href: "#series-compare" },
    ...(presentGroups.has("performance")
      ? [{ label: "性能组", href: `#${moduleGroupMeta.performance.anchor}` }]
      : []),
    ...(presentGroups.has("safety")
      ? [{ label: "安全组", href: `#${moduleGroupMeta.safety.anchor}` }]
      : []),
    ...(presentGroups.has("structure")
      ? [{ label: "结构组", href: `#${moduleGroupMeta.structure.anchor}` }]
      : [])
  ].filter((item) => item.href);

  const heroStageToneClass = `product-detail-hero-stage-${product.slug}`;

  return (
    <>
      <section
        className={`section section-dark page-intro ${isFlagship ? "product-hero-flagship" : ""}`}
        id="product-hero"
      >
        <div className="container">
          <SiteBreadcrumb
            items={[
              { label: "首页", href: "/" },
              { label: "产品系列", href: "/products" },
              { label: `${product.nameEn}｜${product.nameZh}` }
            ]}
          />
          <div
            className={`product-detail-hero-stage ${heroStageToneClass} ${
              isFlagship ? "product-detail-hero-stage-flagship" : ""
            }`}
          >
            {imageSet?.hero ? (
              <div
                className="hero-image-layer"
                style={{ backgroundImage: `url(${imageSet.hero})` }}
                aria-hidden
              />
            ) : null}
            <p className="visual-stage-label visual-stage-label-detail">{product.hero.placeholder}</p>
            <div
              className={`product-detail-hero-overlay ${
                isFlagship ? "product-detail-hero-overlay-flagship" : "product-detail-hero-overlay-standard"
              }`}
            >
              <p className="eyebrow">{product.nameEn}</p>
              <h1 className="section-title">{product.hero.title}</h1>
              <p className="hero-subtitle">{product.hero.subtitle}</p>
              <p className="section-subtitle">{product.hero.support}</p>
              <div className="chip-row" style={{ marginTop: 18 }}>
                {product.hero.tags.map((tag) => (
                  <span className="chip" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              {heroMetrics.length ? (
                <div className="product-detail-hero-metrics">
                  {heroMetrics.map((item) => (
                    <article className="terra-metric-card" key={item.label}>
                      <p className="terra-metric-label">{item.label}</p>
                      <p className="terra-metric-value">{item.value}</p>
                    </article>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white section-compact">
        <div className="container">
          <div className="product-quicknav">
            {quickNav.map((item) => (
              <a className="chip light product-quicknav-chip" href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white section-compact" id="core-specs">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Core Specs</p>
            <h2 className="section-title">核心参数条</h2>
          </div>
          <div className="chip-row">
            {unifiedCoreSpecs.map((item) => (
              <span className="chip light" key={item.label}>
                {item.label}：{item.value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="top-highlights">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Top Highlights</p>
            <h2 className="section-title">主卖点</h2>
          </div>
          <div className="grid grid-3">
            {product.highlightCards.map((item) => (
              <article className="card card-light" key={item.title}>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {isTerraX ? (
        <section className="section section-dark terra-flagship-strip">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Flagship Architecture</p>
              <h2 className="section-title">旗舰技术轴</h2>
              <p className="section-subtitle">
                从动力、抓地、续航到智能控制，把 Terra X 的核心能力拉成一条清晰的旗舰技术叙事。
              </p>
            </div>
            <div className="grid grid-4">
              {[
                ["双擎动力", "800W 澎湃双擎，复杂路况动力不塌。"],
                ["全地形抓地", "11 寸深齿宽胎，面对碎石湿滑更从容。"],
                ["真实续航", "约 35km 长效续航，拓宽使用半径。"],
                ["全维守护", "APP、主板与防护舱形成系统级安全闭环。"]
              ].map(([title, text]) => (
                <article className="terra-tech-card" key={title}>
                  <p className="terra-tech-index">{title}</p>
                  <p className="card-text">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {groupedModules.map(({ module, index, group }, moduleIndex) => {
        const previousGroup = moduleIndex > 0 ? groupedModules[moduleIndex - 1].group : null;
        const showGroupHeader = moduleIndex === 0 || previousGroup !== group;
        const moduleImageSrc = imageSet?.modules[module.id];
        const isTerraSpotlight = isTerraX && terraSpotlightIds.has(module.id);
        const moduleVisualHeight =
          isTerraX && module.id === "app" ? 520 : isTerraSpotlight ? 480 : undefined;

        return (
          <div key={module.id}>
            {showGroupHeader ? (
              <section className="section section-white section-compact" id={moduleGroupMeta[group].anchor}>
                <div className="container">
                  <article className="group-heading-card">
                    <p className="eyebrow">{moduleGroupMeta[group].eyebrow}</p>
                    <h3 className="card-title">{moduleGroupMeta[group].title}</h3>
                    <p className="card-text">{moduleGroupMeta[group].subtitle}</p>
                  </article>
                </div>
              </section>
            ) : null}
            <section
              className={`section ${index % 2 === 0 ? "section-dark" : "section-white"} ${
                isTerraX && terraSpotlightIds.has(module.id) ? "terra-spotlight-section" : ""
              }`}
              id={`module-${module.id}`}
            >
              <div
                className={`container ${
                  isTerraSpotlight ? "terra-spotlight-layout" : "split"
                }`}
              >
                <div>
                  <p className="eyebrow">{product.nameEn}</p>
                  {isTerraX ? <p className="terra-module-index">{String(index + 1).padStart(2, "0")}</p> : null}
                  <h2 className="section-title">{module.title}</h2>
                  {module.subtitle ? <p className="hero-subtitle">{module.subtitle}</p> : null}
                  {module.body ? <p className="section-subtitle">{module.body}</p> : null}
                  {module.bullets?.length ? (
                    <div className="chip-row" style={{ marginTop: 16 }}>
                      {module.bullets.map((bullet) => (
                        <span className={`chip ${index % 2 === 0 ? "" : "light"}`} key={bullet}>
                          {bullet}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {module.warning ? (
                    <p className="section-warning">{module.warning}</p>
                  ) : module.note ? (
                    <p className="section-note">{module.note}</p>
                  ) : null}
                </div>
                <PlaceholderVisual
                  text={module.placeholder}
                  light={index % 2 !== 0}
                  imageSrc={moduleImageSrc}
                  showLabel={!moduleImageSrc}
                  minHeight={moduleVisualHeight}
                  imageFit={isTerraX && moduleImageSrc ? "contain" : "cover"}
                />
              </div>
            </section>
          </div>
        );
      })}

      <section className="section section-light" id="use-cases">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Use Cases</p>
            <h2 className="section-title">应用场景</h2>
          </div>
          <div className="grid grid-3">
            {product.scenarios.map((item) => (
              <article className="card card-light" key={item}>
                <p className="card-text">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="colors">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Colorways</p>
            <h2 className="section-title">配色版本</h2>
          </div>
          <div
            className={
              product.colors.length >= 4
                ? "grid grid-4"
                : product.colors.length === 3
                  ? "grid grid-3"
                  : "grid grid-2"
            }
          >
            {product.colors.map((item, idx) => (
              <article className="card" key={item.name}>
                <PlaceholderVisual
                  text={item.placeholder}
                  minHeight={isTerraX ? 320 : 280}
                  imageSrc={imageSet?.colors[idx]}
                  showLabel={!imageSet?.colors[idx]}
                  imageFit={imageSet?.colors[idx] ? "contain" : "cover"}
                />
                <h3 className="card-title" style={{ marginTop: 14 }}>
                  {item.name}
                </h3>
                <p className="card-text">{item.text}</p>
                {idx === 0 ? null : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="specs-table">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Specifications</p>
            <h2 className="section-title">参数表</h2>
          </div>
          <div className="grid grid-2">
            {unifiedSpecsTable.map((row) => (
              <article className="card card-light" key={row.label}>
                <p className="card-text">
                  <strong>{row.label}</strong>：{row.value}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light" id="series-compare">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Series Comparison</p>
            <h2 className="section-title">同系列产品对比</h2>
          </div>
          <CompareTable productSlugs={[product.slug, ...related]} />
        </div>
      </section>

      <section className="section section-white" id="product-faq">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2 className="section-title">常见问题</h2>
          </div>
          <div className="grid">
            {product.faq.map((item) => (
              <article className="card card-light" key={item.q}>
                <h3 className="card-title" style={{ fontSize: 20 }}>
                  {item.q}
                </h3>
                <p className="card-text">{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container cta-wrap">
          <p className="eyebrow">Consultation</p>
          <h2 className="section-title">咨询 / 购买 CTA</h2>
          <p className="section-subtitle">
            选择 {product.nameEn}｜{product.nameZh}，获取产品资料、报价与合作支持。
          </p>
          <div className="btn-row" style={{ marginTop: 20, justifyContent: "center" }}>
            <Link className="btn btn-primary" href="/contact">
              获取产品资料
            </Link>
            <Link className="btn btn-secondary" href="/contact">
              联系销售
            </Link>
            <Link className="btn btn-secondary" href="/compare">
              查看产品对比
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
