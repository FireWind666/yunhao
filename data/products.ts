export type ProductTag = string;

export type ProductSpec = {
  label: string;
  value: string;
};

export type FeatureModule = {
  id: string;
  title: string;
  subtitle?: string;
  body?: string;
  bullets?: string[];
  placeholder: string;
  warning?: string;
  note?: string;
};

export type ProductFAQ = {
  q: string;
  a: string;
};

export type ProductModel = {
  id: string;
  slug: string;
  nameEn: string;
  nameZh: string;
  positioning: string;
  tone: string;
  homeSubtitle: string;
  homeDescription: string;
  homeTags: ProductTag[];
  homePlaceholder: string;
  hero: {
    title: string;
    subtitle: string;
    support: string;
    placeholder: string;
    tags: string[];
  };
  coreSpecs: ProductSpec[];
  highlightCards: {
    title: string;
    text: string;
  }[];
  detailModules: FeatureModule[];
  scenarios: string[];
  colors: {
    name: string;
    text: string;
    placeholder: string;
  }[];
  specsTable: ProductSpec[];
  compareProfile: ProductSpec[];
  faq: ProductFAQ[];
};

export const brandTechOverview = [
  "智能平衡系统",
  "双电机动力平台",
  "轮胎稳定系统",
  "电池安全防护",
  "APP 智能遥控",
  "LED 灯光系统",
  "IP 防护体系",
  "高承重车架结构"
];

export const brandScenarios = [
  "城市通勤",
  "短途配送",
  "园区巡逻",
  "社区代步",
  "夜间出行",
  "小雨短途",
  "轻越野",
  "户外探索"
];

export const brandFaq: ProductFAQ[] = [
  {
    q: "IPX4 / IP54 的使用边界是什么？",
    a: "支持日常防溅和小雨短途，不建议暴雨、积水、深水或极端天气骑行。"
  },
  {
    q: "四款车都支持 APP 吗？",
    a: "都支持 APP 智能遥控，具体功能会因车型配置有所差异。"
  },
  {
    q: "如何选型？",
    a: "优先按场景选：雨夜通勤选 Urban Shield；城市稳行选 City Glide；复杂路况选 Terra X；更长续航与大轮径选 All-Terrain 12。"
  }
];

const commonCompareTail = [
  { label: "APP", value: "APP 智能遥控" }
];

export const products: ProductModel[] = [
  {
    id: "urban-shield",
    slug: "urban-shield",
    nameEn: "Urban Shield",
    nameZh: "城市护航款",
    positioning: "全天候智能通勤平衡车",
    tone: "雨天短途也能从容出行，夜间更醒目。",
    homeSubtitle: "雨天也能稳稳出行",
    homeDescription:
      "IPX4 生活防水，搭配防雨罩与 LED 灯光，让短途通勤不被小雨和夜色轻易打断。",
    homeTags: ["IPX4", "防雨罩", "LED 灯光", "夜间醒目", "稳定通勤"],
    homePlaceholder: "Urban Shield 雨天出行主视觉占位",
    hero: {
      title: "雨天也能稳稳出行",
      subtitle: "IPX4 生活防水，自带防雨罩",
      support: "小雨可用 / 防泼溅 / 防雨罩设计 / 夜间更醒目",
      placeholder: "Urban Shield 雨天出行主视觉占位",
      tags: ["防雨罩", "LED 灯光", "夜间更醒目", "小雨短途更从容"]
    },
    coreSpecs: [
      { label: "产品定位", value: "全天候智能通勤平衡车" },
      { label: "电机", value: "双电机，400W×2 / 63V 纯铜电机" },
      { label: "轮胎", value: "11 寸轮胎" },
      { label: "续航", value: "40km" },
      { label: "爬坡", value: "30°" },
      { label: "承重", value: "300 斤" },
      { label: "防水", value: "IPX4" },
      { label: "灯光", value: "LED 大灯" },
      { label: "APP", value: "APP 智能遥控" }
    ],
    highlightCards: [
      { title: "全天候通勤", text: "面向雨天、夜间与高频短途。" },
      { title: "夜间识别", text: "前后灯光提升低光环境识别度。" },
      { title: "稳定上手", text: "自动平衡辅助降低学习门槛。" }
    ],
    detailModules: [
      { id: "all-weather", title: "不被天气轻易打断的短途出行", placeholder: "Urban Shield 全气候场景占位" },
      {
        id: "waterproof",
        title: "生活防水，从容应对小雨与泼溅",
        subtitle: "IPX4 防水说明",
        body: "IPX4 适合日常小雨、轻微泼溅和湿地短途使用。",
        warning: "IPX4 不代表可涉水、泡水或暴雨长时间骑行。请避免深水、积水路段和极端天气。",
        placeholder: "Urban Shield IPX4 防水结构占位"
      },
      { id: "rain-guard", title: "自带防雨罩，减少雨水侵扰", bullets: ["防雨罩结构", "小雨更从容", "减少泥水飞溅"], placeholder: "Urban Shield 防雨罩细节占位" },
      { id: "led", title: "夜间更醒目，出行更安心", bullets: ["LED 前灯", "尾灯提醒", "夜间识别度提升", "雨夜更安全"], placeholder: "Urban Shield LED 夜景占位" },
      { id: "power", title: "动力系统", bullets: ["双电机，400W×2 / 63V 纯铜电机", "总功率 800W", "爬坡能力 30°"], placeholder: "Urban Shield 动力系统占位" },
      { id: "tire-stability", title: "轮胎与稳定性", bullets: ["11 寸轮胎", "城市短途更稳"], placeholder: "Urban Shield 轮胎稳定占位" },
      { id: "range-battery", title: "续航与电池", bullets: ["续航 40km", "电池 6000mAh", "充电 3-4 小时"], placeholder: "Urban Shield 续航电池占位" },
      { id: "safety-control", title: "稳定姿态辅助", bullets: ["自动平衡", "起步更稳", "新手友好"], placeholder: "Urban Shield 自动平衡占位" },
      { id: "app-control", title: "APP / 智能操控", bullets: ["APP 智能遥控", "手控 / 腿控 / APP 遥控"], placeholder: "Urban Shield APP 占位" },
      { id: "structure", title: "车架与踏板结构", bullets: ["高强度结构", "防滑踏板", "承重 300 斤"], placeholder: "Urban Shield 结构占位" }
    ],
    scenarios: ["城市短途通勤", "园区出行", "夜间短途", "小雨天气", "社区代步", "巡逻使用"],
    colors: [
      { name: "黑色", text: "沉稳耐看。", placeholder: "Urban Shield 黑色版本占位" },
      { name: "白色", text: "干净清爽。", placeholder: "Urban Shield 白色版本占位" }
    ],
    specsTable: [
      { label: "电机", value: "双电机，400W×2 / 63V 纯铜电机" },
      { label: "续航", value: "40km" },
      { label: "轮胎", value: "11 寸轮胎" },
      { label: "爬坡", value: "30°" },
      { label: "承重", value: "300 斤" },
      { label: "防水", value: "IPX4" },
      { label: "灯光", value: "LED 大灯" },
      { label: "APP", value: "APP 智能遥控" },
      { label: "操控方式", value: "手控 / 腿控 / APP 遥控" },
      { label: "电池", value: "6000mAh" },
      { label: "充电时间", value: "3-4 小时" },
      { label: "重量", value: "15kg" },
      { label: "颜色", value: "黑色 / 白色" }
    ],
    compareProfile: [
      { label: "产品定位", value: "全天候智能通勤平衡车" },
      { label: "核心优势", value: "雨天与夜间短途通勤安心感" },
      { label: "轮胎", value: "11 寸轮胎" },
      { label: "电机", value: "双电机，400W×2 / 63V 纯铜电机" },
      { label: "续航", value: "40km" },
      { label: "爬坡", value: "30°" },
      { label: "承重", value: "300 斤" },
      { label: "防水", value: "IPX4" },
      { label: "灯光", value: "LED 大灯" },
      ...commonCompareTail,
      { label: "适合人群", value: "城市短途通勤用户" },
      { label: "适合场景", value: "小雨通勤 / 夜间短途 / 园区巡逻" }
    ],
    faq: [
      { q: "雨天可以骑吗？", a: "可应对小雨和日常泼溅，不建议暴雨或深水环境。" },
      { q: "新手容易上手吗？", a: "支持自动平衡，建议先在安全开阔区域练习。" }
    ]
  },
  {
    id: "city-glide",
    slug: "city-glide",
    nameEn: "City Glide",
    nameZh: "大轮稳行款",
    positioning: "城市稳定通勤智能平衡车",
    tone: "大轮更稳，日常路况更从容。",
    homeSubtitle: "大轮更稳，路况适应更从容",
    homeDescription: "10.5 寸大轮搭配真空胎与内胎双重保护结构，提升日常通勤稳定性与通过感。",
    homeTags: ["10.5 寸大轮", "真空胎 + 内胎", "抓地更稳", "城市通勤"],
    homePlaceholder: "City Glide 10.5 寸大轮主视觉占位",
    hero: {
      title: "大轮更稳，路况适应更从容",
      subtitle: "10.5 寸真空胎搭配双重保护结构，骑行更安心",
      support: "10.5 寸大轮 / 真空胎 + 内胎 / 抓地更稳",
      placeholder: "City Glide 10.5 寸大轮主视觉占位",
      tags: ["10.5 寸大轮", "真空胎 + 内胎", "抓地更稳", "城市通勤稳定"]
    },
    coreSpecs: [
      { label: "产品定位", value: "城市稳定通勤智能平衡车" },
      { label: "电机", value: "800W 大功率动力电机 / 双400W" },
      { label: "轮胎", value: "10.5 寸" },
      { label: "轮胎结构", value: "真空胎 + 内胎" },
      { label: "续航", value: "40km" },
      { label: "爬坡", value: "25°" },
      { label: "承重", value: "300 斤" },
      { label: "防水", value: "IP54" },
      { label: "灯光", value: "LED 感应式灯光系统" },
      { label: "APP", value: "APP 智能遥控" }
    ],
    highlightCards: [
      { title: "10.5 寸大轮", text: "更大轮径，通勤更稳。" },
      { title: "双重轮胎保护", text: "真空胎 + 内胎，降低日常路面风险。" },
      { title: "自动平衡", text: "开机自动找平，新手更容易上手。" }
    ],
    detailModules: [
      { id: "wheel", title: "更大的轮径，带来更稳定的通过感", bullets: ["10.5 寸大轮", "日常沟坎更从容"], placeholder: "City Glide 大轮细节占位" },
      { id: "tire-structure", title: "双重轮胎保护，降低日常路面风险", bullets: ["真空胎结构", "内胎缓冲保护"], placeholder: "City Glide 轮胎结构占位" },
      { id: "grip", title: "抓地更稳，站得更安心", bullets: ["胎面抓地", "转向更平稳"], placeholder: "City Glide 抓地稳定占位" },
      { id: "power", title: "动力系统", bullets: ["800W 大功率动力电机 / 双400W", "爬坡能力 25°"], placeholder: "City Glide 动力占位" },
      { id: "range", title: "续航与电池", bullets: ["续航 40km", "电池 6000mAh", "充电 3-4 小时"], placeholder: "City Glide 续航占位" },
      { id: "balance", title: "开机自动平衡，新手也能快速上手", bullets: ["自动找平", "起步更稳定"], placeholder: "City Glide 自动平衡占位" },
      { id: "control", title: "多种操控方式", bullets: ["手控 / 腿控 / APP 遥控"], placeholder: "City Glide 操控方式占位" },
      { id: "water-light", title: "防水与灯光", bullets: ["防水 IP54", "LED 感应式灯光系统"], placeholder: "City Glide 防水灯光占位" },
      { id: "structure", title: "车架与踏板结构", bullets: ["高承重结构", "防滑踏板"], placeholder: "City Glide 结构占位" }
    ],
    scenarios: ["城市通勤", "日常短途", "园区出行", "社区代步", "家庭共享"],
    colors: [
      { name: "黑色", text: "沉稳耐看。", placeholder: "City Glide 黑色版本占位" },
      { name: "白色", text: "干净清爽。", placeholder: "City Glide 白色版本占位" }
    ],
    specsTable: [
      { label: "电机", value: "800W 大功率动力电机 / 双400W" },
      { label: "续航", value: "40km" },
      { label: "轮胎", value: "10.5 寸 / 真空胎 + 内胎" },
      { label: "爬坡", value: "25°" },
      { label: "承重", value: "300 斤" },
      { label: "防水", value: "IP54" },
      { label: "灯光", value: "LED 感应式灯光系统" },
      { label: "APP", value: "APP 智能遥控" },
      { label: "操控方式", value: "手控 / 腿控 / APP 遥控" },
      { label: "电池", value: "6000mAh" },
      { label: "充电时间", value: "3-4 小时" },
      { label: "重量", value: "15kg" },
      { label: "颜色", value: "黑色 / 白色" }
    ],
    compareProfile: [
      { label: "产品定位", value: "城市稳定通勤智能平衡车" },
      { label: "核心优势", value: "10.5 寸大轮 + 双重轮胎保护" },
      { label: "轮胎", value: "10.5 寸 / 真空胎 + 内胎" },
      { label: "电机", value: "800W 大功率动力电机 / 双400W" },
      { label: "续航", value: "40km" },
      { label: "爬坡", value: "25°" },
      { label: "承重", value: "300 斤" },
      { label: "防水", value: "IP54" },
      { label: "灯光", value: "LED 感应式灯光系统" },
      ...commonCompareTail,
      { label: "适合人群", value: "追求稳定通勤体验用户" },
      { label: "适合场景", value: "城市道路 / 社区代步 / 园区短途" }
    ],
    faq: [
      { q: "适合新手吗？", a: "支持自动平衡，新手上手成本较低。" },
      { q: "防水等级是多少？", a: "City Glide 防水等级为 IP54。" }
    ]
  },
  {
    id: "terra-x",
    slug: "terra-x",
    nameEn: "Terra X",
    nameZh: "全地形越野款",
    positioning: "高性能全地形智能平衡车",
    tone: "越野新物种，从容驭全域。",
    homeSubtitle: "越野新物种，从容驭全域",
    homeDescription: "11 寸全地形宽胎搭配 800W 双擎，复杂路况依然从容。",
    homeTags: ["11 寸全地形宽胎", "800W 双擎", "35km 续航", "30° 爬坡", "150kg 承重"],
    homePlaceholder: "Terra X 全地形越野主视觉占位",
    hero: {
      title: "越野新物种，从容驭全域",
      subtitle: "高性能全地形智能旗舰",
      support: "11 寸全地形宽胎 / 800W 双擎 / 35km 真实续航",
      placeholder: "Terra X 全地形越野主视觉占位",
      tags: ["11 寸全地形宽胎", "800W 双擎", "35km 续航", "30° 爬坡", "150kg 承重"]
    },
    coreSpecs: [
      { label: "产品定位", value: "全地形越野款" },
      { label: "电机", value: "800W 双擎" },
      { label: "轮胎", value: "11 寸全地形宽胎" },
      { label: "续航", value: "约 35km" },
      { label: "爬坡", value: "30°" },
      { label: "承重", value: "150kg" },
      { label: "防水", value: "IPX4" },
      { label: "灯光", value: "LED 光效系统" },
      { label: "APP", value: "APP 智能遥控" }
    ],
    highlightCards: [
      { title: "双擎动力", text: "复杂路况动力更从容。" },
      { title: "全地形宽胎", text: "抓地与通过性更强。" },
      { title: "智能控制", text: "自动平衡 + 主板协同提升稳定性。" }
    ],
    detailModules: [
      { id: "all-weather", title: "跨越边界，心之所向", placeholder: "Terra X 全地形场景占位" },
      { id: "power", title: "强劲动力，从容应对复杂路况", bullets: ["800W 双擎", "起步更稳", "爬坡更有底气"], placeholder: "Terra X 动力系统占位" },
      { id: "motor-exploded", title: "电机爆炸结构", bullets: ["毫秒级动力响应", "高强度转子", "精密轴承"], placeholder: "Terra X 电机爆炸结构占位" },
      { id: "tire", title: "11 寸全地形宽胎", bullets: ["深齿胎纹", "高抓地橡胶"], placeholder: "Terra X 宽胎特写占位" },
      { id: "climb", title: "30° 强悍爬坡能力", placeholder: "Terra X 爬坡场景占位" },
      { id: "range", title: "约 35km 续航", placeholder: "Terra X 续航路线图占位" },
      { id: "balance", title: "自动平衡系统", bullets: ["起步更稳", "姿态更自然"], placeholder: "Terra X 自动平衡占位" },
      { id: "mainboard", title: "安全主板", bullets: ["八线稳定传输", "毫秒级响应"], placeholder: "Terra X 主板占位" },
      { id: "app", title: "APP 智能监控", bullets: ["状态监测", "遥控模式", "骑行数据"], placeholder: "Terra X APP 占位" },
      { id: "battery-protect", title: "电池防护", bullets: ["三重安全防护", "底盘隔离结构"], placeholder: "Terra X 电池防护占位" },
      {
        id: "ipx4",
        title: "IPX4 防水系统",
        warning: "IPX4 适合日常泼溅和小雨，不建议暴雨、深水、积水或极端天气骑行。",
        placeholder: "Terra X IPX4 占位"
      },
      { id: "led", title: "LED 光效系统", bullets: ["前灯照明", "尾灯示警"], placeholder: "Terra X LED 夜骑占位" },
      { id: "load", title: "150kg 高承重结构", placeholder: "Terra X 承重结构占位" },
      { id: "frame-bearing", title: "车架与轴承", bullets: ["镁铝合金车架", "精密轴承"], placeholder: "Terra X 车架轴承占位" },
      { id: "pedal-stand", title: "踏板与脚撑", bullets: ["防滑踏板", "稳固驻停"], placeholder: "Terra X 踏板脚撑占位" },
      { id: "flagship-compare", title: "旗舰标准对比", placeholder: "Terra X 旗舰标准对比占位" }
    ],
    scenarios: ["复杂城市路况", "坡道", "碎石路面", "轻越野", "园区巡检", "户外探索"],
    colors: [
      { name: "极地白", text: "干净清爽。", placeholder: "Terra X 极地白占位" },
      { name: "暗夜黑", text: "沉稳耐看。", placeholder: "Terra X 暗夜黑占位" }
    ],
    specsTable: [
      { label: "产品定位", value: "全地形越野款" },
      { label: "电机", value: "800W 双擎" },
      { label: "轮胎", value: "11 寸全地形宽胎" },
      { label: "续航", value: "约 35km" },
      { label: "爬坡", value: "30°" },
      { label: "承重", value: "150kg" },
      { label: "防水", value: "IPX4" },
      { label: "APP", value: "APP 智能遥控" },
      { label: "灯光", value: "LED 光效系统" },
      { label: "电池", value: "5200mAh" },
      { label: "充电时间", value: "3-4 小时" },
      { label: "重量", value: "15kg" },
      { label: "操控方式", value: "脚控 / 手控 / APP 控制" },
      { label: "颜色", value: "极地白 / 暗夜黑" }
    ],
    compareProfile: [
      { label: "产品定位", value: "高性能全地形智能平衡车" },
      { label: "核心优势", value: "全地形通过 + 旗舰动力平台" },
      { label: "轮胎", value: "11 寸全地形宽胎" },
      { label: "电机", value: "800W 双擎" },
      { label: "续航", value: "约 35km" },
      { label: "爬坡", value: "30°" },
      { label: "承重", value: "150kg" },
      { label: "防水", value: "IPX4" },
      { label: "灯光", value: "LED 光效系统" },
      ...commonCompareTail,
      { label: "适合人群", value: "追求复杂路况通过能力用户" },
      { label: "适合场景", value: "复杂路况 / 轻越野 / 园区巡检" }
    ],
    faq: [
      { q: "Terra X 适合哪些路况？", a: "适合城市复杂路况、坡道和轻越野场景。" },
      { q: "操控方式有哪些？", a: "脚控、手控、APP 控制。" }
    ]
  },
  {
    id: "all-terrain-12",
    slug: "all-terrain-12",
    nameEn: "All-Terrain 12",
    nameZh: "12 英寸全地形旗舰款",
    positioning: "旗舰级全地形智能越野平衡车",
    tone: "大轮径、强动力、长续航、高承重。",
    homeSubtitle: "重塑，出行的引力",
    homeDescription: "12 英寸真空越野胎，800W 双驱，真实续航 60km。",
    homeTags: ["12 英寸宽胎", "800W 双驱", "60km 续航", "120kg 承重"],
    homePlaceholder: "12 英寸全地形旗舰款主视觉占位",
    hero: {
      title: "重塑，出行的引力。",
      subtitle: "旗舰级全地形智能越野平衡车",
      support: "12 英寸真空越野胎 / 60km 续航 / 800W 双驱 / 120kg 承重",
      placeholder: "12 英寸全地形旗舰款 Hero 占位",
      tags: ["12 英寸宽胎", "800W 双驱", "60km 续航", "120kg 承重", "30° 爬坡"]
    },
    coreSpecs: [
      { label: "产品定位", value: "旗舰级全地形智能越野平衡车" },
      { label: "轮胎", value: "12 英寸加宽真空越野胎" },
      { label: "电机", value: "800W 双驱动电机" },
      { label: "续航", value: "真实续航 60km" },
      { label: "承重", value: "120kg" },
      { label: "爬坡", value: "最高 30°" },
      { label: "防水", value: "IP54" },
      { label: "灯光", value: "LED 光效系统" },
      { label: "APP", value: "APP 智能遥控" }
    ],
    highlightCards: [
      { title: "旗舰动力", text: "800W 双驱平台，复杂路况更稳。" },
      { title: "长续航", text: "真实续航 60km，覆盖更远半径。" },
      { title: "高定工艺", text: "德国纳米级汽车烤漆，四款配色。" }
    ],
    detailModules: [
      { id: "appearance", title: "旗舰外观", placeholder: "All-Terrain 12 外观占位" },
      { id: "power", title: "动力与通过性", bullets: ["800W 双驱", "30° 爬坡"], placeholder: "All-Terrain 12 动力占位" },
      { id: "tire", title: "12 英寸越野胎", bullets: ["加宽真空胎", "深纹抓地"], placeholder: "All-Terrain 12 轮胎占位" },
      { id: "range", title: "60km 长续航", placeholder: "All-Terrain 12 续航占位" },
      { id: "frame-load", title: "车架与承重", bullets: ["120kg 承重", "多点受力"], placeholder: "All-Terrain 12 承重占位" },
      { id: "smart-system", title: "智能系统", bullets: ["A 版主板", "毫秒级动态平衡"], placeholder: "All-Terrain 12 智能系统占位" },
      { id: "bluetooth-audio", title: "蓝牙音乐", bullets: ["手机直连", "无损声场"], placeholder: "All-Terrain 12 音响占位" },
      { id: "craft-colors", title: "车身工艺与配色", bullets: ["银色", "红色", "深蓝", "天蓝"], placeholder: "All-Terrain 12 配色占位" },
      { id: "safety-structure", title: "结构安全", bullets: ["抗压防变形", "高强度框架"], placeholder: "All-Terrain 12 结构安全占位" }
    ],
    scenarios: ["城市道路", "坡道", "碎石路", "轻越野", "园区巡航", "户外探索"],
    colors: [
      { name: "银色", text: "金属旗舰质感。", placeholder: "All-Terrain 12 银色占位" },
      { name: "红色", text: "运动高辨识。", placeholder: "All-Terrain 12 红色占位" },
      { name: "深蓝", text: "沉稳科技感。", placeholder: "All-Terrain 12 深蓝占位" },
      { name: "天蓝", text: "清爽年轻化。", placeholder: "All-Terrain 12 天蓝占位" }
    ],
    specsTable: [
      { label: "产品类型", value: "全地形智能越野平衡车" },
      { label: "产品定位", value: "旗舰级全地形智能越野平衡车" },
      { label: "轮胎规格", value: "12 英寸加宽真空越野胎" },
      { label: "电机", value: "800W 双驱动电机" },
      { label: "真实续航", value: "60km" },
      { label: "最大承重", value: "120kg" },
      { label: "爬坡能力", value: "最高 30°" },
      { label: "净重", value: "15kg" },
      { label: "APP", value: "APP 智能遥控" },
      { label: "操控方式", value: "脚控 / APP 控制" },
      { label: "防水", value: "IP54" },
      { label: "灯光", value: "LED 光效系统" },
      { label: "电池", value: "8000mAh" },
      { label: "充电时间", value: "3-4 小时" },
      { label: "车身工艺", value: "德国纳米级汽车烤漆" },
      { label: "配色方案", value: "银色 / 红色 / 深蓝 / 天蓝" }
    ],
    compareProfile: [
      { label: "产品定位", value: "旗舰级全地形智能越野平衡车" },
      { label: "核心优势", value: "12 英寸宽胎 + 60km 续航 + 120kg 承重" },
      { label: "轮胎", value: "12 英寸加宽真空越野胎" },
      { label: "电机", value: "800W 双驱动电机" },
      { label: "续航", value: "真实续航 60km" },
      { label: "爬坡", value: "最高 30°" },
      { label: "承重", value: "120kg" },
      { label: "防水", value: "IP54" },
      { label: "灯光", value: "LED 光效系统" },
      ...commonCompareTail,
      { label: "适合人群", value: "追求旗舰全地形体验用户" },
      { label: "适合场景", value: "城市+旷野混合路况 / 户外探索 / 园区巡航" }
    ],
    faq: [
      { q: "这款和 Terra X 有什么区别？", a: "这款更强调 12 英寸轮径、60km 续航和 120kg 承重。" },
      { q: "防水等级是多少？", a: "12 英寸全地形旗舰款为 IP54。" }
    ]
  }
];

export const productCompareDimensions = [
  "产品定位",
  "核心优势",
  "轮胎",
  "电机",
  "续航",
  "爬坡",
  "承重",
  "防水",
  "灯光",
  "APP",
  "适合人群",
  "适合场景"
];

export function getProductBySlug(slug: string) {
  return products.find((item) => item.slug === slug);
}
