import Link from "next/link";

const navItems = [
  { label: "首页", href: "/" },
  { label: "产品", href: "/products" },
  { label: "技术", href: "/technology" },
  { label: "场景", href: "/scenarios" },
  { label: "对比", href: "/compare" },
  { label: "支持", href: "/support" },
  { label: "联系我们", href: "/contact" }
];

export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <span className="brand-badge">YUNHAO QIJI</span>
          <Link href="/">
            <strong>云皓骐骥平衡车</strong>
          </Link>
        </div>
        <nav className="nav">
          {navItems.map((item) => (
            <Link href={item.href} key={item.label}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-cta-row">
          <Link className="btn btn-secondary" href="/contact">
            立即咨询
          </Link>
          <Link className="btn btn-secondary" href="/contact">
            联系销售
          </Link>
          <Link className="btn btn-primary" href="/contact">
            获取报价
          </Link>
        </div>
      </div>
    </header>
  );
}
