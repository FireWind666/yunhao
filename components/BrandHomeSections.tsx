import Link from "next/link";
import { getProductImageSet } from "@/data/productImages";
import {
  brandScenarios,
  brandTechOverview,
  productCompareDimensions,
  products
} from "@/data/products";
import { CompareTable } from "./CompareTable";
import { PlaceholderVisual } from "./PlaceholderVisual";

export function BrandHeroSection() {
  return (
    <section className="section section-dark hero keynote-hero" id="brand-hero">
      <div className="container">
        <div className="keynote-hero-stage">
          <p className="visual-stage-label">
            首页品牌主视觉占位（黑银机身 / 城市建筑 / 蓝色参数线）
          </p>
          <div className="keynote-hero-overlay">
            <p className="eyebrow">Rider-Grade Smart Mobility</p>
            <h1 className="section-title">为真实路况而生</h1>
            <p className="hero-subtitle">云皓骐骥智能出行装备系列</p>
            <p className="section-subtitle">
              从城市通勤到全地形探索，以同一套工程标准打造四款独立产品。
            </p>
            <div className="btn-row" style={{ marginTop: 24 }}>
              <Link className="btn btn-primary" href="/products">
                查看产品系列
              </Link>
              <Link className="btn btn-secondary" href="/compare">
                查看完整对比
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BrandManifestSection() {
  const metrics = [
    ["4", "独立产品线"],
    ["800W", "双驱平台上限"],
    ["60km", "旗舰续航"],
    ["120kg", "旗舰承重"]
  ];

  return (
    <section className="section section-white keynote-manifest" id="brand-manifest">
      <div className="container">
        <article className="manifest-panel">
          <p className="eyebrow">Brand Manifest</p>
          <h2 className="section-title">不是堆参数，而是构建完整出行系统</h2>
          <p className="section-subtitle">
            动力、稳定、控制、结构与防护协同设计，让产品在真实路况中更可预期、更可掌控。
          </p>
        </article>
        <div className="manifest-metric-row">
          {metrics.map(([value, label]) => (
            <article className="manifest-metric" key={label}>
              <p className="manifest-metric-value">{value}</p>
              <p className="manifest-metric-label">{label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BrandDecisionPathSection() {
  const steps = [
    {
      title: "先看定位",
      text: "先确认你更偏向雨夜通勤、城市稳行、全地形越野，还是大轮长续航旗舰。",
      href: "/products"
    },
    {
      title: "再看对比",
      text: "通过统一参数维度比较四款产品边界，避免被单一宣传词误导。",
      href: "/compare"
    },
    {
      title: "最后决策",
      text: "进入对应详情页查看完整参数、FAQ 与购买保障，再联系销售获取报价。",
      href: "/contact"
    }
  ];

  return (
    <section className="section section-light" id="brand-path">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Decision Path</p>
          <h2 className="section-title">三步完成选型</h2>
        </div>
        <div className="platform-acts">
          {steps.map((item, idx) => (
            <article className="platform-act" key={item.title}>
              <p className="platform-act-index">Step 0{idx + 1}</p>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.text}</p>
              <Link className="btn btn-light" href={item.href} style={{ marginTop: 12 }}>
                继续
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductLineupSection() {
  const visualPlanBySlug: Record<string, string> = {
    "urban-shield": "Urban Shield 全屏主视觉占位（雨夜通勤道路 + 防泼溅细节 + LED 前后灯）",
    "city-glide": "City Glide 全屏主视觉占位（10.5 寸大轮城市路缘通过 + 稳定骑行姿态）",
    "terra-x": "Terra X 全屏主视觉占位（11 寸全地形宽胎 + 非铺装路况 + 动力结构）",
    "all-terrain-12": "12 英寸全地形旗舰款全屏主视觉占位（黑银机身 + 12 寸宽胎 + 长续航远景道路）"
  };

  return (
    <>
      <section className="section section-dark keynote-lineup-intro" id="product-matrix">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Lineup</p>
            <h2 className="section-title">一屏一款，逐幕看清差异</h2>
            <p className="section-subtitle">
              用发布会式分屏展示四款独立产品，减少信息拥挤，强化每一款的核心定位与记忆点。
            </p>
          </div>
        </div>
      </section>
      {products.map((product, idx) => {
        const imageSet = getProductImageSet(product.slug);
        const lineupImage =
          product.slug === "urban-shield"
            ? imageSet?.hero
            : product.slug === "city-glide"
              ? "/images/city-glide/city-glide/city-glide-02.webp"
              : imageSet?.gallery ?? imageSet?.hero;

        const backgroundPosition =
          product.slug === "urban-shield"
            ? "78% center"
            : product.slug === "city-glide"
              ? "88% center"
              : product.slug === "terra-x"
                ? "80% center"
                : product.slug === "all-terrain-12"
                  ? "84% center"
                  : "center";

        return (
          <section
            className={`lineup-screen ${idx % 2 === 0 ? "lineup-screen-dark" : "lineup-screen-light"}`}
            id={`lineup-${product.slug}`}
            key={product.slug}
          >
            <div className="container lineup-container-wide">
              <div className={`lineup-stage lineup-stage-${product.slug}`}>
                {lineupImage ? (
                  <div
                    className="hero-image-layer"
                    style={{
                      backgroundImage: `url(${lineupImage})`,
                      backgroundSize: "cover",
                      backgroundPosition,
                      backgroundRepeat: "no-repeat"
                    }}
                    aria-hidden
                  />
                ) : (
                  <p className="visual-stage-label">
                    {visualPlanBySlug[product.slug] ?? product.homePlaceholder}
                  </p>
                )}
                <div className="lineup-stage-overlay">
                  <div className="lineup-screen-copy lineup-screen-copy-home">
                    <p className="lineup-screen-index">{String(idx + 1).padStart(2, "0")}</p>
                    <p className="eyebrow">{product.nameEn}</p>
                    <h3 className="lineup-screen-title">{product.nameZh}</h3>
                    <p className="card-text">{product.positioning}</p>
                    <p className="card-text" style={{ marginTop: 10 }}>
                      {product.homeDescription}
                    </p>
                    <div className="chip-row" style={{ marginTop: 14 }}>
                      {product.homeTags.slice(0, 4).map((tag) => (
                        <span className="chip" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="btn-row" style={{ marginTop: 18 }}>
                      <Link className="btn btn-secondary" href={`/products/${product.slug}`}>
                        进入 {product.nameEn} 详情
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export function PlatformStorySection() {
  return (
    <section className="section section-white keynote-platform" id="tech-overview">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Platform Story</p>
          <h2 className="section-title">一套平台，三层能力</h2>
          <p className="section-subtitle">
            用发布会叙事方式，把技术从抽象名词变成可理解的能力链路。
          </p>
        </div>
        <div className="platform-acts">
          <article className="platform-act">
            <p className="platform-act-index">Act 01</p>
            <h3 className="card-title">动力与通过性</h3>
            <p className="card-text">双电机平台、轮胎结构与爬坡能力共同决定“能不能过”的底线。</p>
          </article>
          <article className="platform-act">
            <p className="platform-act-index">Act 02</p>
            <h3 className="card-title">稳定与安全控制</h3>
            <p className="card-text">自动平衡、主板控制与灯光识别系统共同决定“稳不稳、安不安心”。</p>
          </article>
          <article className="platform-act">
            <p className="platform-act-index">Act 03</p>
            <h3 className="card-title">结构与耐用体系</h3>
            <p className="card-text">车架、轴承、防护与工艺细节共同决定“能不能长期可靠使用”。</p>
          </article>
        </div>
        <div style={{ marginTop: 20 }}>
          <PlaceholderVisual
            text="技术总览主画幅占位（主板 / 电机 / 轮胎 / 车架协同工程图）"
            light
            minHeight={360}
          />
        </div>
      </div>
    </section>
  );
}

export function ScenarioFilmSection() {
  return (
    <section className="section section-dark keynote-scenarios" id="scenario-overview">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Scenario Film</p>
          <h2 className="section-title">真实场景，不同节奏</h2>
        </div>
        <PlaceholderVisual
          text="场景横幅占位（通勤 / 配送 / 巡逻 / 雨夜 / 轻越野连续叙事长图）"
          minHeight={320}
        />
        <div className="chip-row" style={{ marginTop: 16 }}>
          {brandScenarios.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CompareSection() {
  return (
    <section className="section section-white" id="compare-overview">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Comparison</p>
          <h2 className="section-title">四款核心能力对比</h2>
          <p className="section-subtitle">
            对比维度：{productCompareDimensions.join(" / ")}。未确认参数统一标记为待确认。
          </p>
        </div>
        <CompareTable />
      </div>
    </section>
  );
}

export function QualitySection() {
  const trustItems = [
    "公司主体、发货地、包邮与售后政策统一展示",
    "原材料、电池、电机、主板、整机与出货抽检流程",
    "批发、经销、OEM / ODM 与长期配件供应能力",
    "国内外市场协同与长期服务网络说明",
    "购买保障、交付周期与 FAQ 边界条件说明"
  ];

  return (
    <section className="section section-light" id="quality-overview">
      <div className="container keynote-quality-grid">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Trust & Service</p>
            <h2 className="section-title">品牌信任与服务保障</h2>
            <p className="section-subtitle">
              先展示结构化服务信息，再讲品牌能力，减少空泛表述。
            </p>
          </div>
          <div className="quality-list">
            {trustItems.map((item) => (
              <article className="quality-item" key={item}>
                <p className="card-text">{item}</p>
              </article>
            ))}
          </div>
        </div>
        <PlaceholderVisual
          text="服务与品质主视觉占位（质检流程 / 配件体系 / 交付节点信息图）"
          light
          minHeight={360}
        />
      </div>
    </section>
  );
}

export function BrandCtaSection() {
  return (
    <section className="section section-dark" id="brand-cta">
      <div className="container cta-wrap">
        <p className="eyebrow">Next Step</p>
        <h2 className="section-title">找到适合你的智能出行装备</h2>
        <p className="section-subtitle">
          先看定位，再看对比与保障，最后进入详情页完成决策。
        </p>
        <div className="btn-row" style={{ marginTop: 20, justifyContent: "center" }}>
          <Link className="btn btn-primary" href="/products">
            查看产品系列
          </Link>
          <Link className="btn btn-secondary" href="/compare">
            查看完整对比
          </Link>
          <Link className="btn btn-secondary" href="/contact">
            联系销售
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TechChipSection() {
  return (
    <section className="section section-dark section-compact">
      <div className="container">
        <div className="chip-row">
          {brandTechOverview.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
