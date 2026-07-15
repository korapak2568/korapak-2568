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
      eyebrow: "\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e0a\u0e32\u0e22\u0e1d\u0e31\u0e48\u0e07",
      title: "\u0e22\u0e48\u0e32\u0e19\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e23\u0e34\u0e21\u0e21\u0e2b\u0e32\u0e2a\u0e21\u0e38\u0e17\u0e23\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e17\u0e48\u0e2d\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e41\u0e2b\u0e48\u0e07\u0e2d\u0e19\u0e32\u0e04\u0e15",
      description:
        "\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e0a\u0e32\u0e22\u0e1d\u0e31\u0e48\u0e07\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e1b\u0e23\u0e30\u0e15\u0e39\u0e2a\u0e39\u0e48\u0e0a\u0e32\u0e22\u0e2b\u0e32\u0e14 \u0e17\u0e48\u0e32\u0e08\u0e2d\u0e14\u0e40\u0e23\u0e37\u0e2d \u0e23\u0e30\u0e1a\u0e1a\u0e25\u0e32\u0e01\u0e39\u0e19 \u0e22\u0e48\u0e32\u0e19\u0e23\u0e35\u0e2a\u0e2d\u0e23\u0e4c\u0e15 \u0e41\u0e25\u0e30\u0e01\u0e32\u0e23\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e22\u0e49\u0e32\u0e22\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e40\u0e17\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e19\u0e31\u0e25\u0e43\u0e2b\u0e49\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e2d\u0e32\u0e23\u0e22\u0e18\u0e23\u0e23\u0e21\u0e23\u0e34\u0e21\u0e19\u0e49\u0e33\u0e23\u0e30\u0e14\u0e31\u0e1a\u0e1e\u0e23\u0e35\u0e40\u0e21\u0e35\u0e22\u0e21",
    },
    valley: {
      eyebrow: "\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e2b\u0e38\u0e1a\u0e40\u0e02\u0e32",
      title: "\u0e2a\u0e20\u0e32\u0e1e\u0e41\u0e27\u0e14\u0e25\u0e49\u0e2d\u0e21\u0e01\u0e32\u0e23\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e1a\u0e19\u0e20\u0e39\u0e40\u0e02\u0e32\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e2d\u0e31\u0e08\u0e09\u0e23\u0e34\u0e22\u0e30",
      description:
        "\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e2b\u0e38\u0e1a\u0e40\u0e02\u0e32\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e1c\u0e48\u0e32\u0e19\u0e2b\u0e38\u0e1a\u0e40\u0e02\u0e32\u0e14\u0e2d\u0e01\u0e44\u0e21\u0e49 \u0e22\u0e48\u0e32\u0e19\u0e19\u0e49\u0e33\u0e15\u0e01 \u0e08\u0e38\u0e14\u0e0a\u0e21\u0e2b\u0e21\u0e2d\u0e01\u0e1a\u0e19\u0e20\u0e39\u0e40\u0e02\u0e32 \u0e41\u0e25\u0e30\u0e40\u0e17\u0e2d\u0e23\u0e4c\u0e21\u0e34\u0e19\u0e31\u0e25\u0e2d\u0e31\u0e25\u0e44\u0e1e\u0e19\u0e4c\u0e17\u0e35\u0e48\u0e2d\u0e2d\u0e01\u0e41\u0e1a\u0e1a\u0e40\u0e1b\u0e47\u0e19\u0e42\u0e04\u0e23\u0e07\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e1e\u0e37\u0e49\u0e19\u0e10\u0e32\u0e19\u0e2d\u0e19\u0e32\u0e04\u0e15\u0e2d\u0e31\u0e19\u0e2a\u0e07\u0e1a",
    },
  },
  zh: {
    coastal: {
      eyebrow: "\u6d77\u5cb8\u7ebf",
      title: "\u9762\u5411\u672a\u6765\u65c5\u6e38\u7684\u6d77\u6d0b\u51fa\u884c\u57ce\u533a\u3002",
      description:
        "\u6d77\u5cb8\u7ad9\u70b9\u8fde\u63a5\u6d77\u6ee9\u95e8\u6237\u3001\u7801\u5934\u3001\u6cfb\u6e56\u7cfb\u7edf\u3001\u5ea6\u5047\u533a\u4e0e\u67a2\u7ebd\u7ea7\u5ba2\u6d41\uff0c\u5f62\u6210\u9ad8\u7aef\u6ee8\u6c34\u6587\u660e\u8def\u7ebf\u3002",
    },
    valley: {
      eyebrow: "\u5c71\u8c37\u7ebf",
      title: "\u9762\u5411\u667a\u6167\u751f\u6d3b\u7684\u9ad8\u5c71\u51fa\u884c\u73af\u5883\u3002",
      description:
        "\u5c71\u8c37\u7ad9\u70b9\u7a7f\u884c\u4e8e\u82b1\u8c37\u3001\u7011\u5e03\u7247\u533a\u3001\u96fe\u5c71\u8282\u70b9\u4e0e\u9ad8\u5c71\u7ec8\u7aef\uff0c\u6784\u6210\u5b81\u9759\u7684\u672a\u6765\u57fa\u7840\u8bbe\u65bd\u3002",
    },
  },
  ja: {
    coastal: {
      eyebrow: "\u30b3\u30fc\u30b9\u30bf\u30eb\u30e9\u30a4\u30f3",
      title: "\u672a\u6765\u89b3\u5149\u306e\u305f\u3081\u306e\u6d77\u6d0b\u30e2\u30d3\u30ea\u30c6\u30a3\u5730\u533a\u3002",
      description:
        "\u6cbf\u5cb8\u30b9\u30c6\u30fc\u30b7\u30e7\u30f3\u306f\u30d3\u30fc\u30c1\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4\u3001\u30de\u30ea\u30fc\u30ca\u3001\u30e9\u30b0\u30fc\u30f3\u3001\u30ea\u30be\u30fc\u30c8\u5730\u533a\u3001\u30bf\u30fc\u30df\u30ca\u30eb\u7d1a\u306e\u79fb\u52d5\u3092\u7d50\u3073\u3001\u4e0a\u8cea\u306a\u30a6\u30a9\u30fc\u30bf\u30fc\u30d5\u30ed\u30f3\u30c8\u6587\u660e\u30eb\u30fc\u30c8\u3092\u3064\u304f\u308a\u307e\u3059\u3002",
    },
    valley: {
      eyebrow: "\u30d0\u30ec\u30fc\u30e9\u30a4\u30f3",
      title: "\u77e5\u7684\u306a\u66ae\u3089\u3057\u306e\u305f\u3081\u306e\u5c71\u5cb3\u30e2\u30d3\u30ea\u30c6\u30a3\u74b0\u5883\u3002",
      description:
        "\u30d0\u30ec\u30fc\u30b9\u30c6\u30fc\u30b7\u30e7\u30f3\u306f\u82b1\u306e\u8c37\u3001\u6edd\u306e\u5730\u533a\u3001\u9727\u306e\u5c71\u5cb3\u30dd\u30a4\u30f3\u30c8\u3001\u30a2\u30eb\u30d1\u30a4\u30f3\u30bf\u30fc\u30df\u30ca\u30eb\u3092\u901a\u308a\u3001\u7a4f\u3084\u304b\u306a\u672a\u6765\u30a4\u30f3\u30d5\u30e9\u3068\u3057\u3066\u8a2d\u8a08\u3055\u308c\u3066\u3044\u307e\u3059\u3002",
    },
  },
  ko: {
    coastal: {
      eyebrow: "\ucf54\uc2a4\ud138 \ub77c\uc778",
      title: "\ubbf8\ub798 \uad00\uad11\uc744 \uc704\ud55c \ud574\uc591 \ubaa8\ube4c\ub9ac\ud2f0 \uc9c0\uad6c.",
      description:
        "\ud574\uc548 \uc2a4\ud14c\uc774\uc158\uc740 \ud574\ubcc0 \uad00\ubb38, \ub9c8\ub9ac\ub098, \ub77c\uad70 \uc2dc\uc2a4\ud15c, \ub9ac\uc870\ud2b8 \uc9c0\uad6c\uc640 \ud130\ubbf8\ub110 \uaddc\ubaa8\uc758 \uc774\ub3d9\uc744 \uc5f0\uacb0\ud574 \ud504\ub9ac\ubbf8\uc5c4 \uc6cc\ud130\ud504\ub7f0\ud2b8 \ubb38\uba85 \ub8e8\ud2b8\ub97c \ub9cc\ub4ed\ub2c8\ub2e4.",
    },
    valley: {
      eyebrow: "\ubc38\ub9ac \ub77c\uc778",
      title: "\uc9c0\ub2a5\ud615 \uc0dd\ud65c\uc744 \uc704\ud55c \uc0b0\uc545 \ubaa8\ube4c\ub9ac\ud2f0 \ud658\uacbd.",
      description:
        "\ubc38\ub9ac \uc2a4\ud14c\uc774\uc158\uc740 \uaf43\uc758 \uacc4\uace1, \ud3ed\ud3ec \uc9c0\uad6c, \uc548\uac1c \ub080 \uc0b0\uc545 \uc9c0\uc810\uacfc \uc54c\ud30c\uc778 \ud130\ubbf8\ub110\uc744 \uc9c0\ub098 \ucc28\ubd84\ud55c \ubbf8\ub798 \uc778\ud504\ub77c\ub85c \uc124\uacc4\ub429\ub2c8\ub2e4.",
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
      eyebrow: "\u041f\u0440\u0438\u0431\u0440\u0435\u0436\u043d\u0430\u044f \u043b\u0438\u043d\u0438\u044f",
      title: "\u041e\u043a\u0435\u0430\u043d\u0441\u043a\u0438\u0435 \u0440\u0430\u0439\u043e\u043d\u044b \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0442\u0443\u0440\u0438\u0437\u043c\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e.",
      description:
        "\u041f\u0440\u0438\u0431\u0440\u0435\u0436\u043d\u044b\u0435 \u0441\u0442\u0430\u043d\u0446\u0438\u0438 \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u044e\u0442 \u043f\u043b\u044f\u0436\u043d\u044b\u0435 \u0432\u043e\u0440\u043e\u0442\u0430, \u043c\u0430\u0440\u0438\u043d\u044b, \u043b\u0430\u0433\u0443\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043a\u0443\u0440\u043e\u0440\u0442\u043d\u044b\u0435 \u0440\u0430\u0439\u043e\u043d\u044b \u0438 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0442\u043e\u043a\u0438 \u0432 \u043f\u0440\u0435\u043c\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u043e\u0434\u043d\u044b\u0439 \u043c\u0430\u0440\u0448\u0440\u0443\u0442 \u0446\u0438\u0432\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438.",
    },
    valley: {
      eyebrow: "\u0414\u043e\u043b\u0438\u043d\u043d\u0430\u044f \u043b\u0438\u043d\u0438\u044f",
      title: "\u0413\u043e\u0440\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u044b \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u0436\u0438\u0437\u043d\u0438.",
      description:
        "\u0421\u0442\u0430\u043d\u0446\u0438\u0438 \u0434\u043e\u043b\u0438\u043d\u044b \u043f\u0440\u043e\u0445\u043e\u0434\u044f\u0442 \u0447\u0435\u0440\u0435\u0437 \u0446\u0432\u0435\u0442\u043e\u0447\u043d\u044b\u0435 \u0434\u043e\u043b\u0438\u043d\u044b, \u0440\u0430\u0439\u043e\u043d\u044b \u0432\u043e\u0434\u043e\u043f\u0430\u0434\u043e\u0432, \u0442\u0443\u043c\u0430\u043d\u043d\u044b\u0435 \u0433\u043e\u0440\u043d\u044b\u0435 \u0442\u043e\u0447\u043a\u0438 \u0438 \u0430\u043b\u044c\u043f\u0438\u0439\u0441\u043a\u0438\u0435 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b\u044b, \u0441\u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043a\u0430\u043a \u0441\u043f\u043e\u043a\u043e\u0439\u043d\u0430\u044f \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e.",
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
