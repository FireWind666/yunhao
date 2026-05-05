import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

type SiteBreadcrumbProps = {
  items: Crumb[];
};

export function SiteBreadcrumb({ items }: SiteBreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <span className="breadcrumb-item" key={`${item.label}-${idx}`}>
            {item.href && !isLast ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            {!isLast ? <span className="breadcrumb-sep">/</span> : null}
          </span>
        );
      })}
    </nav>
  );
}
