import { productCompareDimensions, products } from "@/data/products";
import { getUnifiedSpecValue } from "@/data/specNormalization";

function findValue(label: string, productSlug: string) {
  const product = products.find((item) => item.slug === productSlug);
  if (!product) return "待确认";

  return product.compareProfile.find((row) => row.label === label)?.value ?? getUnifiedSpecValue(product, label) ?? "待确认";
}

type CompareTableProps = {
  productSlugs?: string[];
};

export function CompareTable({
  productSlugs = products.map((item) => item.slug)
}: CompareTableProps) {
  const extraDimensions = ["操控方式", "电池", "充电时间", "重量"];
  const dimensions = Array.from(new Set([...productCompareDimensions, ...extraDimensions]));

  const selected = productSlugs
    .map((slug) => products.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="compare-table-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            <th>参数</th>
            {selected.map((product) => (
              <th key={product.slug}>
                {product.nameEn}
                <span>{product.nameZh}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dimensions.map((label) => (
            <tr key={label}>
              <td>{label}</td>
              {selected.map((product) => {
                const value = findValue(label, product.slug);
                const isPending = value.includes("待确认");

                return (
                  <td key={`${product.slug}-${label}`}>
                    {isPending ? <span className="pending-pill">{value}</span> : value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
