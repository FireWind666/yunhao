import {
  BrandCtaSection,
  BrandDecisionPathSection,
  BrandHeroSection,
  BrandManifestSection,
  CompareSection,
  ProductLineupSection,
  ScenarioFilmSection,
  TechChipSection,
  PlatformStorySection
} from "@/components/BrandHomeSections";

export default function HomePage() {
  return (
    <>
      <BrandHeroSection />
      <BrandManifestSection />
      <BrandDecisionPathSection />
      <ProductLineupSection />
      <TechChipSection />
      <PlatformStorySection />
      <ScenarioFilmSection />
      <CompareSection />
      <BrandCtaSection />
    </>
  );
}
