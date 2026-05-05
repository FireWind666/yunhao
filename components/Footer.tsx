import Link from "next/link";

const links = [
  { label: "产品", href: "/products" },
  { label: "技术总览", href: "/technology" },
  { label: "使用场景", href: "/scenarios" },
  { label: "产品对比", href: "/compare" },
  { label: "支持与服务", href: "/support" },
  { label: "经销合作", href: "/contact" }
];

const legal = [
  { label: "隐私政策", href: "/privacy" },
  { label: "服务条款", href: "/terms" },
  { label: "Cookie 政策", href: "/cookies" },
  { label: "发货退换与质保", href: "/shipping-returns" },
  { label: "安全声明", href: "/safety" }
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <h3 className="footer-brand">云皓骐骥，为真实路况而生的骑手级智能出行装备。</h3>
          <p className="card-text muted">
            公司主体：烟台骐骥电子科技有限公司。发货地浙江金华，常规订单包邮，支持七天无理由退货与整车 5 年质保。
          </p>
        </div>

        <div>
          <h4>导航</h4>
          <div className="footer-list">
            {links.map((item) => (
              <Link href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4>联系方式</h4>
          <div className="footer-list">
            <p>电话：15589526622</p>
            <p>邮箱：471181620@qq.com</p>
            <p>微信：wxid_az62rt8sc38822</p>
            <p>工作时间：工作日 9:00-18:00</p>
            <p>地址：中国（山东）自由贸易试验区烟台片区烟台开发区金沙江路 98 号西厂 B 区</p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        {legal.map((item) => (
          <Link href={item.href} key={item.label}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
