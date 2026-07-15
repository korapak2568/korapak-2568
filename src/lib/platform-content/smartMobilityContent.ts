import type { Metadata } from "next";
import { fetchData } from "@/lib/chornplanet-data/fetchData";
import { getLocalizedAlternates } from "@/lib/metadata/alternates";
import {
  DEFAULT_LOCALE,
  LOCALES,
  type SiteLocale,
} from "@/lib/SiteUrlLocales";
import {
  getSmartMobilityChiangMaiActionsFromJson,
  getSmartMobilityChiangMaiSlugs,
} from "@/lib/smart-mobility-chiang-mai-content/smartMobilityChiangMaiContent.service";
import type { PlatformResponsiveImageVariant } from "@/lib/platform-content/platformImageVariants";

export type MtsStation = {
  type: "MTS";
  zone: "Coastal" | "Valley" | string;
  world_map: string;
  mts_line: string;
  mts_network: string;
  mts_station: string;
  slug: string;
  name: string;
  story: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    aspectRatio?: string;
    mobile?: PlatformResponsiveImageVariant;
    thumbnail?: PlatformResponsiveImageVariant;
    desktop?: PlatformResponsiveImageVariant;
    open_graph?: PlatformResponsiveImageVariant;
  };
};

export type MtsLine = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  stations: MtsStation[];
};

export type SmartMobilityContent = {
  locale: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  signals: string[];
  lines: MtsLine[];
};

export type SmartMobilityMtsDetailAction = {
  label: string;
  href: string;
};

export type SmartMobilityNavigationAction = SmartMobilityMtsDetailAction & {
  slug?: string;
};

export type SmartMobilityLandingLine = Omit<MtsLine, "stations"> & {
  stations: MtsStation[];
};

export type SmartMobilityLandingContent = Omit<SmartMobilityContent, "lines"> & {
  heroStation: MtsStation;
  lines: SmartMobilityLandingLine[];
  navigationActions: SmartMobilityNavigationAction[];
};

export type SmartMobilityMtsDetailContent = {
  backLinkLabel: string;
  stationTagsAriaLabel: string;
  actions: SmartMobilityMtsDetailAction[];
  related: {
    eyebrow: string;
    title: string;
    description: string;
  };
  relatedCardCta: string;
};

export type SmartMobilityStationDetailContent = {
  detail: SmartMobilityMtsDetailContent;
  station: MtsStation;
  relatedStations: MtsStation[];
  navigationActions: SmartMobilityNavigationAction[];
};

const remoteContentCache = new Map<string, Promise<unknown>>();
const smartMobilityOgImage =
  "/images-opengraph/images-platform/smart-mobility/mts-coastal10-grand-coastal-terminal.png";

type SmartMobilityLineCopy = Pick<MtsLine, "eyebrow" | "title" | "description">;

const smartMobilityLineCopy: Record<
  SiteLocale,
  {
    coastal: SmartMobilityLineCopy;
    valley: SmartMobilityLineCopy;
  }
> = {
  en: {
    coastal: {
      eyebrow: "Coastal Line",
      title: "Ocean mobility districts for future tourism.",
      description:
        "Coastal stations connect beach gateways, marinas, lagoon systems, resort districts and terminal-scale movement into a premium waterfront civilization route.",
    },
    valley: {
      eyebrow: "Valley Line",
      title: "Alpine mobility environments for intelligent living.",
      description:
        "Valley stations move through floral valleys, waterfall districts, misty mountain points and alpine terminals designed as calm future infrastructure.",
    },
  },
  th: {
    coastal: {
      eyebrow: "à¹€à¸ªà¹‰à¸™à¸—à¸²à¸‡à¸Šà¸²à¸¢à¸à¸±à¹ˆà¸‡",
      title: "à¸¢à¹ˆà¸²à¸™à¸à¸²à¸£à¹€à¸”à¸´à¸™à¸—à¸²à¸‡à¸£à¸´à¸¡à¸¡à¸«à¸²à¸ªà¸¡à¸¸à¸—à¸£à¸ªà¸³à¸«à¸£à¸±à¸šà¸à¸²à¸£à¸—à¹ˆà¸­à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸§à¹à¸«à¹ˆà¸‡à¸­à¸™à¸²à¸„à¸•",
      description:
        "à¸ªà¸–à¸²à¸™à¸µà¸Šà¸²à¸¢à¸à¸±à¹ˆà¸‡à¹€à¸Šà¸·à¹ˆà¸­à¸¡à¸›à¸£à¸°à¸•à¸¹à¸ªà¸¹à¹ˆà¸Šà¸²à¸¢à¸«à¸²à¸” à¸—à¹ˆà¸²à¸ˆà¸­à¸”à¹€à¸£à¸·à¸­ à¸£à¸°à¸šà¸šà¸¥à¸²à¸à¸¹à¸™ à¸¢à¹ˆà¸²à¸™à¸£à¸µà¸ªà¸­à¸£à¹Œà¸• à¹à¸¥à¸°à¸à¸²à¸£à¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸¢à¹‰à¸²à¸¢à¸£à¸°à¸”à¸±à¸šà¹€à¸—à¸­à¸£à¹Œà¸¡à¸´à¸™à¸±à¸¥à¹ƒà¸«à¹‰à¹€à¸›à¹‡à¸™à¹€à¸ªà¹‰à¸™à¸—à¸²à¸‡à¸­à¸²à¸£à¸¢à¸˜à¸£à¸£à¸¡à¸£à¸´à¸¡à¸™à¹‰à¸³à¸£à¸°à¸”à¸±à¸šà¸žà¸£à¸µà¹€à¸¡à¸µà¸¢à¸¡",
    },
    valley: {
      eyebrow: "à¹€à¸ªà¹‰à¸™à¸—à¸²à¸‡à¸«à¸¸à¸šà¹€à¸‚à¸²",
      title: "à¸ªà¸ à¸²à¸žà¹à¸§à¸”à¸¥à¹‰à¸­à¸¡à¸à¸²à¸£à¹€à¸”à¸´à¸™à¸—à¸²à¸‡à¸šà¸™à¸ à¸¹à¹€à¸‚à¸²à¸ªà¸³à¸«à¸£à¸±à¸šà¸Šà¸µà¸§à¸´à¸•à¸­à¸±à¸ˆà¸‰à¸£à¸´à¸¢à¸°",
      description:
        "à¸ªà¸–à¸²à¸™à¸µà¸«à¸¸à¸šà¹€à¸‚à¸²à¹€à¸„à¸¥à¸·à¹ˆà¸­à¸™à¸œà¹ˆà¸²à¸™à¸«à¸¸à¸šà¹€à¸‚à¸²à¸”à¸­à¸à¹„à¸¡à¹‰ à¸¢à¹ˆà¸²à¸™à¸™à¹‰à¸³à¸•à¸ à¸ˆà¸¸à¸”à¸Šà¸¡à¸«à¸¡à¸­à¸à¸šà¸™à¸ à¸¹à¹€à¸‚à¸² à¹à¸¥à¸°à¹€à¸—à¸­à¸£à¹Œà¸¡à¸´à¸™à¸±à¸¥à¸­à¸±à¸¥à¹„à¸žà¸™à¹Œà¸—à¸µà¹ˆà¸­à¸­à¸à¹à¸šà¸šà¹€à¸›à¹‡à¸™à¹‚à¸„à¸£à¸‡à¸ªà¸£à¹‰à¸²à¸‡à¸žà¸·à¹‰à¸™à¸à¸²à¸™à¸­à¸™à¸²à¸„à¸•à¸­à¸±à¸™à¸ªà¸‡à¸š",
    },
  },
  zh: {
    coastal: {
      eyebrow: "æµ·å²¸çº¿",
      title: "é¢å‘æœªæ¥æ—…æ¸¸çš„æµ·æ´‹å‡ºè¡ŒåŸŽåŒºã€‚",
      description:
        "æµ·å²¸ç«™ç‚¹è¿žæŽ¥æµ·æ»©é—¨æˆ·ã€ç å¤´ã€æ³»æ¹–ç³»ç»Ÿã€åº¦å‡åŒºä¸Žæž¢çº½çº§å®¢æµï¼Œå½¢æˆé«˜ç«¯æ»¨æ°´æ–‡æ˜Žè·¯çº¿ã€‚",
    },
    valley: {
      eyebrow: "å±±è°·çº¿",
      title: "é¢å‘æ™ºæ…§ç”Ÿæ´»çš„é«˜å±±å‡ºè¡ŒçŽ¯å¢ƒã€‚",
      description:
        "å±±è°·ç«™ç‚¹ç©¿è¡ŒäºŽèŠ±è°·ã€ç€‘å¸ƒç‰‡åŒºã€é›¾å±±èŠ‚ç‚¹ä¸Žé«˜å±±ç»ˆç«¯ï¼Œæž„æˆå®é™çš„æœªæ¥åŸºç¡€è®¾æ–½ã€‚",
    },
  },
  ja: {
    coastal: {
      eyebrow: "ã‚³ãƒ¼ã‚¹ã‚¿ãƒ«ãƒ©ã‚¤ãƒ³",
      title: "æœªæ¥è¦³å…‰ã®ãŸã‚ã®æµ·æ´‹ãƒ¢ãƒ“ãƒªãƒ†ã‚£åœ°åŒºã€‚",
      description:
        "æ²¿å²¸ã‚¹ãƒ†ãƒ¼ã‚·ãƒ§ãƒ³ã¯ãƒ“ãƒ¼ãƒã‚²ãƒ¼ãƒˆã‚¦ã‚§ã‚¤ã€ãƒžãƒªãƒ¼ãƒŠã€ãƒ©ã‚°ãƒ¼ãƒ³ã€ãƒªã‚¾ãƒ¼ãƒˆåœ°åŒºã€ã‚¿ãƒ¼ãƒŸãƒŠãƒ«ç´šã®ç§»å‹•ã‚’çµã³ã€ä¸Šè³ªãªã‚¦ã‚©ãƒ¼ã‚¿ãƒ¼ãƒ•ãƒ­ãƒ³ãƒˆæ–‡æ˜Žãƒ«ãƒ¼ãƒˆã‚’ã¤ãã‚Šã¾ã™ã€‚",
    },
    valley: {
      eyebrow: "ãƒãƒ¬ãƒ¼ãƒ©ã‚¤ãƒ³",
      title: "çŸ¥çš„ãªæš®ã‚‰ã—ã®ãŸã‚ã®å±±å²³ãƒ¢ãƒ“ãƒªãƒ†ã‚£ç’°å¢ƒã€‚",
      description:
        "ãƒãƒ¬ãƒ¼ã‚¹ãƒ†ãƒ¼ã‚·ãƒ§ãƒ³ã¯èŠ±ã®è°·ã€æ»ã®åœ°åŒºã€éœ§ã®å±±å²³ãƒã‚¤ãƒ³ãƒˆã€ã‚¢ãƒ«ãƒ‘ã‚¤ãƒ³ã‚¿ãƒ¼ãƒŸãƒŠãƒ«ã‚’é€šã‚Šã€ç©ã‚„ã‹ãªæœªæ¥ã‚¤ãƒ³ãƒ•ãƒ©ã¨ã—ã¦è¨­è¨ˆã•ã‚Œã¦ã„ã¾ã™ã€‚",
    },
  },
  ko: {
    coastal: {
      eyebrow: "ì½”ìŠ¤í„¸ ë¼ì¸",
      title: "ë¯¸ëž˜ ê´€ê´‘ì„ ìœ„í•œ í•´ì–‘ ëª¨ë¹Œë¦¬í‹° ì§€êµ¬.",
      description:
        "í•´ì•ˆ ìŠ¤í…Œì´ì…˜ì€ í•´ë³€ ê´€ë¬¸, ë§ˆë¦¬ë‚˜, ë¼êµ° ì‹œìŠ¤í…œ, ë¦¬ì¡°íŠ¸ ì§€êµ¬ì™€ í„°ë¯¸ë„ ê·œëª¨ì˜ ì´ë™ì„ ì—°ê²°í•´ í”„ë¦¬ë¯¸ì—„ ì›Œí„°í”„ëŸ°íŠ¸ ë¬¸ëª… ë£¨íŠ¸ë¥¼ ë§Œë“­ë‹ˆë‹¤.",
    },
    valley: {
      eyebrow: "ë°¸ë¦¬ ë¼ì¸",
      title: "ì§€ëŠ¥í˜• ìƒí™œì„ ìœ„í•œ ì‚°ì•… ëª¨ë¹Œë¦¬í‹° í™˜ê²½.",
      description:
        "ë°¸ë¦¬ ìŠ¤í…Œì´ì…˜ì€ ê½ƒì˜ ê³„ê³¡, í­í¬ ì§€êµ¬, ì•ˆê°œ ë‚€ ì‚°ì•… ì§€ì ê³¼ ì•ŒíŒŒì¸ í„°ë¯¸ë„ì„ ì§€ë‚˜ ì°¨ë¶„í•œ ë¯¸ëž˜ ì¸í”„ë¼ë¡œ ì„¤ê³„ë©ë‹ˆë‹¤.",
    },
  },
  id: {
    coastal: {
      eyebrow: "Jalur Pesisir",
      title: "Distrik mobilitas laut untuk pariwisata masa depan.",
      description:
        "Stasiun pesisir menghubungkan gerbang pantai, marina, sistem laguna, distrik resor, dan pergerakan skala terminal menjadi rute peradaban tepi air premium.",
    },
    valley: {
      eyebrow: "Jalur Lembah",
      title: "Lingkungan mobilitas pegunungan untuk kehidupan cerdas.",
      description:
        "Stasiun lembah bergerak melalui lembah bunga, distrik air terjun, titik pegunungan berkabut, dan terminal alpine yang dirancang sebagai infrastruktur masa depan yang tenang.",
    },
  },
  de: {
    coastal: {
      eyebrow: "Kustenlinie",
      title: "Ozeanische Mobilitatsquartiere fur den Tourismus der Zukunft.",
      description:
        "Kustenstationen verbinden Strandzugange, Marinas, Lagunensysteme, Resortquartiere und terminalgrosse Bewegungen zu einer hochwertigen Zivilisationsroute am Wasser.",
    },
    valley: {
      eyebrow: "Tallinie",
      title: "Alpine Mobilitatsraume fur intelligentes Leben.",
      description:
        "Talstationen fuhren durch Blumentaler, Wasserfallquartiere, neblige Bergpunkte und alpine Terminals, gestaltet als ruhige Infrastruktur der Zukunft.",
    },
  },
  fr: {
    coastal: {
      eyebrow: "Ligne cotiere",
      title: "Des districts de mobilite oceanique pour le tourisme du futur.",
      description:
        "Les stations cotieres relient les portes de plage, les marinas, les lagunes, les quartiers de resorts et les flux de niveau terminal en une route de civilisation premium au bord de l'eau.",
    },
    valley: {
      eyebrow: "Ligne des vallees",
      title: "Des environnements de mobilite alpine pour une vie intelligente.",
      description:
        "Les stations de vallee traversent des vallees fleuries, des districts de cascades, des points de montagne brumeux et des terminaux alpins concus comme une infrastructure future apaisante.",
    },
  },
  ru: {
    coastal: {
      eyebrow: "ÐŸÑ€Ð¸Ð±Ñ€ÐµÐ¶Ð½Ð°Ñ Ð»Ð¸Ð½Ð¸Ñ",
      title: "ÐžÐºÐµÐ°Ð½ÑÐºÐ¸Ðµ Ñ€Ð°Ð¹Ð¾Ð½Ñ‹ Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð´Ð»Ñ Ñ‚ÑƒÑ€Ð¸Ð·Ð¼Ð° Ð±ÑƒÐ´ÑƒÑ‰ÐµÐ³Ð¾.",
      description:
        "ÐŸÑ€Ð¸Ð±Ñ€ÐµÐ¶Ð½Ñ‹Ðµ ÑÑ‚Ð°Ð½Ñ†Ð¸Ð¸ ÑÐ¾ÐµÐ´Ð¸Ð½ÑÑŽÑ‚ Ð¿Ð»ÑÐ¶Ð½Ñ‹Ðµ Ð²Ð¾Ñ€Ð¾Ñ‚Ð°, Ð¼Ð°Ñ€Ð¸Ð½Ñ‹, Ð»Ð°Ð³ÑƒÐ½Ð½Ñ‹Ðµ ÑÐ¸ÑÑ‚ÐµÐ¼Ñ‹, ÐºÑƒÑ€Ð¾Ñ€Ñ‚Ð½Ñ‹Ðµ Ñ€Ð°Ð¹Ð¾Ð½Ñ‹ Ð¸ Ñ‚ÐµÑ€Ð¼Ð¸Ð½Ð°Ð»ÑŒÐ½Ñ‹Ðµ Ð¿Ð¾Ñ‚Ð¾ÐºÐ¸ Ð² Ð¿Ñ€ÐµÐ¼Ð¸Ð°Ð»ÑŒÐ½Ñ‹Ð¹ Ð²Ð¾Ð´Ð½Ñ‹Ð¹ Ð¼Ð°Ñ€ÑˆÑ€ÑƒÑ‚ Ñ†Ð¸Ð²Ð¸Ð»Ð¸Ð·Ð°Ñ†Ð¸Ð¸.",
    },
    valley: {
      eyebrow: "Ð”Ð¾Ð»Ð¸Ð½Ð½Ð°Ñ Ð»Ð¸Ð½Ð¸Ñ",
      title: "Ð“Ð¾Ñ€Ð½Ñ‹Ðµ ÑÑ€ÐµÐ´Ñ‹ Ð¼Ð¾Ð±Ð¸Ð»ÑŒÐ½Ð¾ÑÑ‚Ð¸ Ð´Ð»Ñ Ð¸Ð½Ñ‚ÐµÐ»Ð»ÐµÐºÑ‚ÑƒÐ°Ð»ÑŒÐ½Ð¾Ð¹ Ð¶Ð¸Ð·Ð½Ð¸.",
      description:
        "Ð¡Ñ‚Ð°Ð½Ñ†Ð¸Ð¸ Ð´Ð¾Ð»Ð¸Ð½Ñ‹ Ð¿Ñ€Ð¾Ñ…Ð¾Ð´ÑÑ‚ Ñ‡ÐµÑ€ÐµÐ· Ñ†Ð²ÐµÑ‚Ð¾Ñ‡Ð½Ñ‹Ðµ Ð´Ð¾Ð»Ð¸Ð½Ñ‹, Ñ€Ð°Ð¹Ð¾Ð½Ñ‹ Ð²Ð¾Ð´Ð¾Ð¿Ð°Ð´Ð¾Ð², Ñ‚ÑƒÐ¼Ð°Ð½Ð½Ñ‹Ðµ Ð³Ð¾Ñ€Ð½Ñ‹Ðµ Ñ‚Ð¾Ñ‡ÐºÐ¸ Ð¸ Ð°Ð»ÑŒÐ¿Ð¸Ð¹ÑÐºÐ¸Ðµ Ñ‚ÐµÑ€Ð¼Ð¸Ð½Ð°Ð»Ñ‹, ÑÐ¿Ñ€Ð¾ÐµÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð½Ñ‹Ðµ ÐºÐ°Ðº ÑÐ¿Ð¾ÐºÐ¾Ð¹Ð½Ð°Ñ Ð¸Ð½Ñ„Ñ€Ð°ÑÑ‚Ñ€ÑƒÐºÑ‚ÑƒÑ€Ð° Ð±ÑƒÐ´ÑƒÑ‰ÐµÐ³Ð¾.",
    },
  },
  vi: {
    coastal: {
      eyebrow: "Tuyen ven bien",
      title: "Cac khu di chuyen dai duong cho du lich tuong lai.",
      description:
        "Cac ga ven bien ket noi cua ngo bai bien, ben du thuyen, he dam pha, khu nghi duong va dong di chuyen quy mo nha ga thanh mot tuyen van minh ben nuoc cao cap.",
    },
    valley: {
      eyebrow: "Tuyen thung lung",
      title: "Moi truong di chuyen mien nui cho doi song thong minh.",
      description:
        "Cac ga thung lung di qua thung lung hoa, khu thac nuoc, diem nui phu suong va nha ga alpine duoc thiet ke nhu ha tang tuong lai yen tinh.",
    },
  },
};
function resolveSmartMobilityLocale(locale?: string | null): string {
  return locale || DEFAULT_LOCALE;
}

function getSmartMobilityLineCopy(locale: string): (typeof smartMobilityLineCopy)[SiteLocale] {
  return LOCALES.includes(locale as SiteLocale)
    ? smartMobilityLineCopy[locale as SiteLocale]
    : smartMobilityLineCopy[DEFAULT_LOCALE];
}
function readRemoteJson<T>(jsonPath: string): Promise<T> {
  const cachedContent = remoteContentCache.get(jsonPath);

  if (cachedContent) {
    return cachedContent as Promise<T>;
  }

  const contentPromise = fetchData<T>(jsonPath).catch((error) => {
    remoteContentCache.delete(jsonPath);
    throw error;
  });
  remoteContentCache.set(jsonPath, contentPromise as Promise<unknown>);

  return contentPromise;
}

function getSmartMobilityPath(path: string, locale = DEFAULT_LOCALE): string {
  return `/smart-mobility/${path}/${locale}.json`;
}

function readLocalizedRemoteJson<T>(
  path: string,
  locale = DEFAULT_LOCALE,
): Promise<T> {
  const resolvedLocale = resolveSmartMobilityLocale(locale);
  const jsonPath = getSmartMobilityPath(path, resolvedLocale);
  const cachedContent = remoteContentCache.get(jsonPath);

  if (cachedContent) {
    return cachedContent as Promise<T>;
  }

  const contentPromise = fetchData<T>(jsonPath).catch((error) => {
    remoteContentCache.delete(jsonPath);

    if (resolvedLocale !== DEFAULT_LOCALE) {
      return readRemoteJson<T>(getSmartMobilityPath(path, DEFAULT_LOCALE));
    }

    throw error;
  });
  remoteContentCache.set(jsonPath, contentPromise as Promise<unknown>);

  return contentPromise;
}

async function getCoastalStations(locale = DEFAULT_LOCALE): Promise<MtsStation[]> {
  return readLocalizedRemoteJson<MtsStation[]>("coastal", locale);
}

async function getValleyStations(locale = DEFAULT_LOCALE): Promise<MtsStation[]> {
  return readLocalizedRemoteJson<MtsStation[]>("valley", locale);
}

async function getMtsContent(
  locale = DEFAULT_LOCALE,
): Promise<{ detail: SmartMobilityMtsDetailContent }> {
  return readLocalizedRemoteJson<{ detail: SmartMobilityMtsDetailContent }>(
    "mts",
    locale,
  );
}

function getSlugFromHref(href: string, slugs: string[]): string | undefined {
  return slugs.find((slug) => href.includes(`/smart-mobility/chiang-mai/${slug}/`));
}

export async function getSmartMobilityNavigationActions(
  locale = DEFAULT_LOCALE,
): Promise<SmartMobilityNavigationAction[]> {
  const [actions, slugs] = await Promise.all([
    getSmartMobilityChiangMaiActionsFromJson(locale),
    getSmartMobilityChiangMaiSlugs(locale),
  ]);
  const actionsByHref = new Map<string, SmartMobilityNavigationAction>();

  for (const action of actions) {
    actionsByHref.set(action.href, {
      ...action,
      slug: getSlugFromHref(action.href, slugs),
    });
  }

  return [...actionsByHref.values()];
}

export async function getAllSmartMobilityStations(
  locale = DEFAULT_LOCALE,
): Promise<MtsStation[]> {
  const [coastalStations, valleyStations] = await Promise.all([
    getCoastalStations(locale),
    getValleyStations(locale),
  ]);

  return [...coastalStations, ...valleyStations];
}

export async function getSmartMobilityContent(
  locale?: string | null,
): Promise<SmartMobilityContent> {
  const resolvedLocale = resolveSmartMobilityLocale(locale);
  const [coastalStations, valleyStations] = await Promise.all([
    getCoastalStations(resolvedLocale),
    getValleyStations(resolvedLocale),
  ]);
  const lineCopy = getSmartMobilityLineCopy(resolvedLocale);

  return {
    locale: resolvedLocale,
    seo: {
      title: "MTS Future Civilization Platform | Chorn Planet",
      description:
        "Explore the Chorn Planet MTS future civilization network across coastal and valley mobility stations.",
    },
    hero: {
      eyebrow: "MTS Future Civilization",
      title: "MTS connects Chorn Planet into a living civilization network.",
      description:
        "Move from coastal terminals to alpine valleys through an intelligent mobility layer built for future tourism, smart infrastructure, emotional lifestyle stories and human-centered daily life.",
      primaryCta: "Explore Coastal Line",
      secondaryCta: "Explore Valley Line",
    },
    signals: [
      "Intelligent Mobility",
      "Future Tourism",
      "Smart Infrastructure",
      "Human-Centered Environments",
    ],
    lines: [
      {
        id: "coastal",
        ...lineCopy.coastal,
        stations: coastalStations,
      },
      {
        id: "valley",
        ...lineCopy.valley,
        stations: valleyStations,
      },
    ],
  };
}

export async function getSmartMobilityStations(
  locale = DEFAULT_LOCALE,
): Promise<MtsStation[]> {
  return getAllSmartMobilityStations(locale);
}

export async function getSmartMobilityStationBySlug(
  slug: string,
  locale = DEFAULT_LOCALE,
): Promise<MtsStation | undefined> {
  return (await getAllSmartMobilityStations(locale)).find(
    (station) => station.slug === slug,
  );
}

export async function getRelatedSmartMobilityStations(
  slug: string,
  limit = 9,
  locale = DEFAULT_LOCALE,
): Promise<MtsStation[]> {
  const allStations = await getAllSmartMobilityStations(locale);
  const current = allStations.find((station) => station.slug === slug);
  const sameLineStations = current
    ? allStations.filter(
        (station) =>
          station.slug !== slug && station.mts_line === current.mts_line,
      )
    : [];
  const otherStations = allStations.filter(
    (station) =>
      station.slug !== slug &&
      !sameLineStations.some((sameLine) => sameLine.slug === station.slug),
  );

  return [...sameLineStations, ...otherStations].slice(0, limit);
}

export async function getSmartMobilityStationDetailContent(
  slug: string,
  locale = DEFAULT_LOCALE,
): Promise<SmartMobilityStationDetailContent | undefined> {
  const resolvedLocale = resolveSmartMobilityLocale(locale);
  const [station, mtsContent, navigationActions] = await Promise.all([
    getSmartMobilityStationBySlug(slug, resolvedLocale),
    getMtsContent(resolvedLocale),
    getSmartMobilityNavigationActions(resolvedLocale),
  ]);

  if (!station) {
    return undefined;
  }

  return {
    detail: mtsContent.detail,
    station,
    relatedStations: await getRelatedSmartMobilityStations(station.slug, 9, resolvedLocale),
    navigationActions,
  };
}

export async function getSmartMobilityMtsDetailActions(
  locale = DEFAULT_LOCALE,
): Promise<SmartMobilityMtsDetailAction[]> {
  return [...(await getMtsContent(locale)).detail.actions];
}

export function getRandomSmartMobilityStations(
  stations: MtsStation[],
  limit = 6,
): MtsStation[] {
  return [...stations]
    .map((station) => ({ station, sortKey: Math.random() }))
    .sort((first, second) => first.sortKey - second.sortKey)
    .slice(0, limit)
    .map(({ station }) => station);
}

export async function getRandomSmartMobilityStation(
  locale = DEFAULT_LOCALE,
): Promise<MtsStation> {
  const allStations = await getAllSmartMobilityStations(locale);

  return allStations[Math.floor(Math.random() * allStations.length)] ?? allStations[0];
}

export async function getSmartMobilityLandingContent(
  locale?: string | null,
): Promise<SmartMobilityLandingContent> {
  const resolvedLocale = resolveSmartMobilityLocale(locale);
  const [content, heroStation, navigationActions] = await Promise.all([
    getSmartMobilityContent(resolvedLocale),
    getRandomSmartMobilityStation(resolvedLocale),
    getSmartMobilityNavigationActions(resolvedLocale),
  ]);

  return {
    ...content,
    heroStation,
    navigationActions,
    lines: content.lines.map((line) => ({
      ...line,
      stations: getRandomSmartMobilityStations(line.stations, 6),
    })),
  };
}

export async function getSmartMobilityMetadata(
  locale?: string | null,
): Promise<Metadata> {
  const resolvedLocale = resolveSmartMobilityLocale(locale);
  const content = await getSmartMobilityContent(resolvedLocale);

  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: getLocalizedAlternates("/smart-mobility/", locale ?? undefined),
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      type: "website",
      url: `/${resolvedLocale}/smart-mobility/`,
      images: [
        {
          url: smartMobilityOgImage,
          width: 1536,
          height: 1024,
          alt: "MTS Coastal 10 Grand Coastal Terminal central mobility hub",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: [smartMobilityOgImage],
    },
  };
}

export async function getSmartMobilityStationMetadata({
  locale,
  slug,
}: {
  locale?: string | null;
  slug: string;
}): Promise<Metadata> {
  const resolvedLocale = resolveSmartMobilityLocale(locale);
  const station = await getSmartMobilityStationBySlug(slug, resolvedLocale);

  if (!station) {
    return {
      title: "MTS station not found",
    };
  }

  return {
    title: `${station.name} | Chorn Planet MTS`,
    description: station.story,
    alternates: getLocalizedAlternates(`/smart-mobility/mts/${station.slug}/`, locale ?? undefined),
    openGraph: {
      title: station.name,
      description: station.story,
      type: "article",
      url: `/${resolvedLocale}/smart-mobility/mts/${station.slug}/`,
      images: [
        {
          url: station.image.open_graph?.src ?? station.image.src,
          width: station.image.open_graph?.width ?? station.image.width,
          height: station.image.open_graph?.height ?? station.image.height,
          alt: station.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: station.name,
      description: station.story,
      images: [station.image.open_graph?.src ?? station.image.src],
    },
  };
}
