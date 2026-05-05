import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SiteAnalytics } from "@/components/SiteAnalytics";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.yunhaoqiji.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "云皓骐骥平衡车 | 骑手级智能出行装备官网",
    template: "%s | 云皓骐骥平衡车"
  },
  description:
    "云皓骐骥平衡车面向成人短途移动与全地形场景，覆盖城市通勤、配送巡逻、户外探索与企业采购。",
  keywords: [
    "云皓骐骥",
    "平衡车",
    "智能平衡车",
    "全地形平衡车",
    "城市通勤平衡车",
    "成人平衡车",
    "越野平衡车"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "/",
    siteName: "云皓骐骥平衡车",
    title: "云皓骐骥平衡车 | 骑手级智能出行装备官网",
    description:
      "覆盖城市通勤、短途配送、园区巡逻与全地形探索的智能平衡车产品矩阵。"
  },
  twitter: {
    card: "summary_large_image",
    title: "云皓骐骥平衡车",
    description: "骑手级智能出行装备官网"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteAnalytics />
        <div className="site-shell">
          <Header />
          <main className="site-main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
