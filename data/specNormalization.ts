import type { ProductModel, ProductSpec } from "@/data/products";

const SPEC_UNIFIED_VALUES: Record<string, string> = {
  充电时间: "3-4小时",
  重量: "15kg"
};

const WEIGHT_ALIASES = new Set(["净重", "重量"]);

function normalizeSpecRow(row: ProductSpec): ProductSpec {
  if (row.label === "充电时间") {
    return { ...row, value: SPEC_UNIFIED_VALUES["充电时间"] };
  }

  if (WEIGHT_ALIASES.has(row.label)) {
    return { ...row, value: SPEC_UNIFIED_VALUES["重量"] };
  }

  return row;
}

export function getUnifiedSpecsTable(product: ProductModel): ProductSpec[] {
  const rows = product.specsTable.map(normalizeSpecRow);
  const hasCharge = rows.some((row) => row.label === "充电时间");
  const hasWeight = rows.some((row) => WEIGHT_ALIASES.has(row.label));

  if (!hasCharge) {
    rows.push({ label: "充电时间", value: SPEC_UNIFIED_VALUES["充电时间"] });
  }

  if (!hasWeight) {
    rows.push({ label: "重量", value: SPEC_UNIFIED_VALUES["重量"] });
  }

  return rows;
}

export function getUnifiedCoreSpecs(product: ProductModel): ProductSpec[] {
  return product.coreSpecs.map(normalizeSpecRow);
}

export function getUnifiedSpecValue(product: ProductModel, label: string): string | undefined {
  const unifiedRows = getUnifiedSpecsTable(product);

  if (label === "重量") {
    return unifiedRows.find((row) => row.label === "重量" || row.label === "净重")?.value;
  }

  if (label === "充电时间") {
    return unifiedRows.find((row) => row.label === "充电时间")?.value;
  }

  return unifiedRows.find((row) => row.label === label)?.value;
}

