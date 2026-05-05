export type ProductImageSet = {
  hero: string;
  gallery: string;
  modules: Record<string, string>;
  colors: string[];
};

const imageSets: Partial<Record<string, ProductImageSet>> = {
  "urban-shield": {
    hero: "/images/urban-shield/urban-shield/urban-shield-01-hero.webp",
    gallery: "/images/urban-shield/urban-shield/urban-shield-03.webp",
    modules: {
      "all-weather": "/images/urban-shield/urban-shield/urban-shield-04.webp",
      waterproof: "/images/urban-shield/urban-shield/urban-shield-05.webp",
      "rain-guard": "/images/urban-shield/urban-shield/urban-shield-06.webp",
      led: "/images/urban-shield/urban-shield/urban-shield-07.webp",
      power: "/images/urban-shield/urban-shield/urban-shield-08.png",
      "tire-stability": "/images/urban-shield/urban-shield/urban-shield-09.webp",
      "range-battery": "/images/urban-shield/urban-shield/urban-shield-10.webp",
      "safety-control": "/images/urban-shield/urban-shield/urban-shield-11.webp",
      "app-control": "/images/urban-shield/urban-shield/urban-shield-12.webp",
      structure: "/images/urban-shield/urban-shield/urban-shield-13.webp"
    },
    colors: [
      "/images/urban-shield/urban-shield/urban-shield-14.webp",
      "/images/urban-shield/urban-shield/urban-shield-15.webp"
    ]
  },

  "city-glide": {
    hero: "/images/city-glide/city-glide/city-glide-01.webp",
    gallery: "/images/city-glide/city-glide/city-glide-03.webp",
    modules: {
      wheel: "/images/city-glide/city-glide/city-glide-04.webp",
      "tire-structure": "/images/city-glide/city-glide/city-glide-05.webp",
      grip: "/images/city-glide/city-glide/city-glide-06.webp",
      power: "/images/city-glide/city-glide/city-glide-07.webp",
      range: "/images/city-glide/city-glide/city-glide-08.png",
      balance: "/images/city-glide/city-glide/city-glide-09.webp",
      control: "/images/city-glide/city-glide/city-glide-10.webp",
      "water-light": "/images/city-glide/city-glide/city-glide-11.webp",
      structure: "/images/city-glide/city-glide/city-glide-12.webp",
      quality: "/images/city-glide/city-glide/city-glide-13.webp"
    },
    colors: [
      "/images/city-glide/city-glide/city-glide-13.webp",
      "/images/city-glide/city-glide/city-glide-14.webp"
    ]
  },

  "terra-x": {
    hero: "/images/terra-x/terra-x/terra-x-03-detail-hero.webp",
    gallery: "/images/terra-x/terra-x/terra-x-02-card.webp",
    modules: {
      "all-weather": "/images/terra-x/terra-x/terra-x-04-all-terrain-scene.webp",
      power: "/images/terra-x/terra-x/terra-x-05-power.webp",
      "motor-exploded": "/images/terra-x/terra-x/terra-x-06-motor-exploded.webp",
      tire: "/images/terra-x/terra-x/terra-x-07-tire-closeup.webp",
      climb: "/images/terra-x/terra-x/terra-x-08-climb-30deg.webp",
      range: "/images/terra-x/terra-x/terra-x-09-range-35km.webp",
      balance: "/images/terra-x/terra-x/terra-x-10-auto-balance.webp",
      mainboard: "/images/terra-x/terra-x/terra-x-11-mainboard.webp",
      app: "/images/terra-x/terra-x/terra-x-12-app-monitor.webp",
      "battery-protect": "/images/terra-x/terra-x/terra-x-13-battery-protect.webp",
      ipx4: "/images/terra-x/terra-x/terra-x-14-ipx4.webp",
      led: "/images/terra-x/terra-x/terra-x-15-led-night.webp",
      load: "/images/terra-x/terra-x/terra-x-16-load-150kg.webp",
      "frame-bearing": "/images/terra-x/terra-x/terra-x-17-frame-bearing.webp",
      "pedal-stand": "/images/terra-x/terra-x/terra-x-18-pedal-stand.webp"
    },
    colors: [
      "/images/terra-x/terra-x/terra-x-20-color-white.webp",
      "/images/terra-x/terra-x/terra-x-21-color-black.webp"
    ]
  },

  "all-terrain-12": {
    hero: "/images/all-terrain-12/all-terrain-12/all-terrain-12-01-hero.webp",
    gallery: "/images/all-terrain-12/all-terrain-12/all-terrain-12-02-card.webp",
    modules: {
      appearance: "/images/all-terrain-12/all-terrain-12/all-terrain-12-03-appearance.webp",
      power: "/images/all-terrain-12/all-terrain-12/all-terrain-12-04-power.webp",
      tire: "/images/all-terrain-12/all-terrain-12/all-terrain-12-05-tire.webp",
      range: "/images/all-terrain-12/all-terrain-12/all-terrain-12-06-range.webp",
      "frame-load": "/images/all-terrain-12/all-terrain-12/all-terrain-12-07-frame-load.webp",
      "smart-system": "/images/all-terrain-12/all-terrain-12/all-terrain-12-08-smart-system.webp",
      "bluetooth-audio": "/images/all-terrain-12/all-terrain-12/all-terrain-12-09-bluetooth-audio.webp",
      "craft-colors": "/images/all-terrain-12/all-terrain-12/all-terrain-12-10-craft-colors.webp",
      "safety-structure": "/images/all-terrain-12/all-terrain-12/all-terrain-12-11-safety-structure.webp"
    },
    colors: [
      "/images/all-terrain-12/all-terrain-12/all-terrain-12-12-color-silver.webp",
      "/images/all-terrain-12/all-terrain-12/all-terrain-12-13-color-red.webp",
      "/images/all-terrain-12/all-terrain-12/all-terrain-12-14-color-deep.webp",
      "/images/all-terrain-12/all-terrain-12/all-terrain-12-15-color-sky-blue.webp"
    ]
  }
};

export function getProductImageSet(slug: string): ProductImageSet | undefined {
  return imageSets[slug];
}
