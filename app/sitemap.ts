import type { MetadataRoute } from "next";
import { products } from "@/data/products";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yunhaoqiji.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/technology",
    "/scenarios",
    "/compare",
    "/support",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
    "/cookies",
    "/shipping-returns",
    "/safety"
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9
  }));

  return [...staticEntries, ...productEntries];
}
