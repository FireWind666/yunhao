import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { PlaceholderVisual } from "@/components/PlaceholderVisual";
import { SiteBreadcrumb } from "@/components/SiteBreadcrumb";
import { getProductImageSet } from "@/data/productImages";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "产品系列",
  description: "查看云皓骐骥四款平衡车产品矩阵与定位：城市护航、大轮稳行、全地形越野、12 英寸旗舰款。"
};

const productVisualScripts: Record<string, string> = {
  "urban-shield":
    "机位: 低机位 3/4 前侧 | 构图: 车身占画面 65% | 光线: 雨夜冷蓝反射 | 元素: 水滴、防雨罩、前后灯 | 用途: 城市护航款主图",
  "city-glide":
    "机位: 贴地侧前机位 | 构图: 轮胎占画面中心 | 光线: 阴天漫反射 + 地面高光 | 元素: 10.5 寸大轮、胎纹、城市路缝 | 用途: 大轮稳行款主图",
  "terra-x":
    "机位: 低角度广角 | 构图: 前轮与车身纵深 | 光线: 黑银硬光 + 蓝色参数线 | 元素: 11 寸宽胎、坡道、非铺装路面 | 用途: 全地形越野款主图",
  "all-terrain-12":
    "机位: 正侧 3/4 英雄视角 | 构图: 车身居中偏右 | 光线: 银色棚拍高光 + 冷蓝边缘光 | 元素: 12 寸宽胎、金属机身、远景道路 | 用途: 12 英寸旗舰款主图"
};

export default function ProductsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Products"
        title="产品系列"
        subtitle="四款独立产品，覆盖全天候通勤、城市稳行、全地形越野与旗舰全域探索四类核心需求。"
        tone="products"
        visualLabel="机位: 航拍压低 + 中景平移 | 构图: 四车并列由近到远 | 光线: 深色棚拍 + 蓝色参数线 | 元素: 城市与越野双地形叠景 | 用途: 产品系列总览封面"
      />
      <section className="section section-white section-breadcrumb">
        <div className="container">
          <SiteBreadcrumb items={[{ label: "首页", href: "/" }, { label: "产品系列" }]} />
        </div>
      </section>
      <section className="section section-light">
        <div className="container">
          <div className="grid grid-4 product-gallery-grid">
            {products.map((product) => (
              <article className="card card-light product-gallery-card" key={product.slug}>
                <div className="product-gallery-visual">
                  {(() => {
                    const imageSet = getProductImageSet(product.slug);
                    return (
                      <PlaceholderVisual
                        text={productVisualScripts[product.slug] ?? product.homePlaceholder}
                        light
                        imageSrc={imageSet?.gallery}
                        showLabel={!imageSet?.gallery}
                        minHeight={280}
                      />
                    );
                  })()}
                </div>
                <h2 className="card-title product-gallery-title" style={{ marginTop: 14 }}>
                  {product.nameEn}
                </h2>
                <p className="card-text product-gallery-zh">{product.nameZh}</p>
                <p className="card-text" style={{ marginTop: 8 }}>
                  {product.positioning}
                </p>
                <p className="card-text" style={{ marginTop: 8 }}>
                  {product.homeDescription}
                </p>
                <div className="chip-row" style={{ marginTop: 14 }}>
                  {product.homeTags.slice(0, 3).map((tag) => (
                    <span className="chip light" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link className="btn btn-light" href={`/products/${product.slug}`} style={{ marginTop: 20 }}>
                  查看详情
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
