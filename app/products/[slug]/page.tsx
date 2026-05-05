import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailTemplate } from "@/components/ProductDetailTemplate";
import { getProductBySlug, products } from "@/data/products";

type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductDetailPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "产品详情"
    };
  }

  return {
    title: `${product.nameEn} ${product.nameZh}`,
    description: product.homeDescription
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return <ProductDetailTemplate product={product} />;
}
