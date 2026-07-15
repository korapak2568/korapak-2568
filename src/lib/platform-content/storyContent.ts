import { fetchData } from "@/lib/chornplanet-data/fetchData";
import type {
  PlatformSofaCoupleStory,
  PlatformStoryContent,
  PlatformStoryUiCopy,
} from "@/lib/platform-content/storyShared";

const DEFAULT_LOCALE = "en";
const storyCache = new Map<string, Promise<PlatformSofaCoupleStory>>();
const platformStoryUiCopy: Record<string, PlatformStoryUiCopy> = {
  en: {
    intro: {
      eyebrow: "Circulatory System Story",
      title: "Turn circulatory system into scenes and stories",
      description:
        "A soft future-lifestyle story where MTS is more than transport: it carries a couple from the rhythm of the valley line back into the warmth of home, love, rest and everyday civilization.",
    },
    backlinks: {
      eyebrow: "MTS Backlinks",
      title: "Continue the journey through Valley and Coastal stations.",
      description:
        "Open the mobility stations connected to this homecoming story, from alpine valley arrival points to coastal future tourism districts.",
    },
    featureEyebrow: "Future Home Story",
    openStoryLabel: "Open Story",
    circulatorySystemLabel: "Circulatory System",
    exploreOnTiktokLabel: "Explore on TikTok",
    stationCtaLabel: "View Station",
  },
  th: {
    intro: {
      eyebrow: "\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27\u0e23\u0e30\u0e1a\u0e1a\u0e44\u0e2b\u0e25\u0e40\u0e27\u0e35\u0e22\u0e19",
      title: "\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19\u0e23\u0e30\u0e1a\u0e1a\u0e44\u0e2b\u0e25\u0e40\u0e27\u0e35\u0e22\u0e19\u0e43\u0e2b\u0e49\u0e01\u0e25\u0e32\u0e22\u0e40\u0e1b\u0e47\u0e19\u0e09\u0e32\u0e01\u0e41\u0e25\u0e30\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27",
      description:
        "\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27\u0e44\u0e25\u0e1f\u0e4c\u0e2a\u0e44\u0e15\u0e25\u0e4c\u0e2d\u0e19\u0e32\u0e04\u0e15\u0e17\u0e35\u0e48\u0e2d\u0e48\u0e2d\u0e19\u0e42\u0e22\u0e19 \u0e40\u0e21\u0e37\u0e48\u0e2d MTS \u0e40\u0e1b\u0e47\u0e19\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e01\u0e32\u0e23\u0e02\u0e19\u0e2a\u0e48\u0e07 \u0e42\u0e14\u0e22\u0e1e\u0e32\u0e04\u0e39\u0e48\u0e23\u0e31\u0e01\u0e08\u0e32\u0e01\u0e08\u0e31\u0e07\u0e2b\u0e27\u0e30\u0e02\u0e2d\u0e07\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e2b\u0e38\u0e1a\u0e40\u0e02\u0e32\u0e01\u0e25\u0e31\u0e1a\u0e2a\u0e39\u0e48\u0e04\u0e27\u0e32\u0e21\u0e2d\u0e1a\u0e2d\u0e38\u0e48\u0e19\u0e02\u0e2d\u0e07\u0e1a\u0e49\u0e32\u0e19 \u0e04\u0e27\u0e32\u0e21\u0e23\u0e31\u0e01 \u0e01\u0e32\u0e23\u0e1e\u0e31\u0e01\u0e1c\u0e48\u0e2d\u0e19 \u0e41\u0e25\u0e30\u0e2d\u0e32\u0e23\u0e22\u0e18\u0e23\u0e23\u0e21\u0e43\u0e19\u0e0a\u0e35\u0e27\u0e34\u0e15\u0e1b\u0e23\u0e30\u0e08\u0e33\u0e27\u0e31\u0e19",
    },
    backlinks: {
      eyebrow: "\u0e25\u0e34\u0e07\u0e01\u0e4c\u0e22\u0e49\u0e2d\u0e19\u0e01\u0e25\u0e31\u0e1a MTS",
      title: "\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e15\u0e48\u0e2d\u0e1c\u0e48\u0e32\u0e19\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e40\u0e2a\u0e49\u0e19\u0e17\u0e32\u0e07\u0e2b\u0e38\u0e1a\u0e40\u0e02\u0e32\u0e41\u0e25\u0e30\u0e0a\u0e32\u0e22\u0e1d\u0e31\u0e48\u0e07",
      description:
        "\u0e40\u0e1b\u0e34\u0e14\u0e14\u0e39\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e42\u0e21\u0e1a\u0e34\u0e25\u0e34\u0e15\u0e35\u0e49\u0e17\u0e35\u0e48\u0e40\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e15\u0e48\u0e2d\u0e01\u0e31\u0e1a\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27\u0e01\u0e32\u0e23\u0e01\u0e25\u0e31\u0e1a\u0e1a\u0e49\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e15\u0e31\u0e49\u0e07\u0e41\u0e15\u0e48\u0e08\u0e38\u0e14\u0e21\u0e32\u0e16\u0e36\u0e07\u0e43\u0e19\u0e2b\u0e38\u0e1a\u0e40\u0e02\u0e32\u0e2d\u0e31\u0e25\u0e44\u0e1e\u0e19\u0e4c\u0e44\u0e1b\u0e08\u0e19\u0e16\u0e36\u0e07\u0e22\u0e48\u0e32\u0e19\u0e17\u0e48\u0e2d\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e2d\u0e19\u0e32\u0e04\u0e15\u0e23\u0e34\u0e21\u0e0a\u0e32\u0e22\u0e1d\u0e31\u0e48\u0e07",
    },
    featureEyebrow: "\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27\u0e1a\u0e49\u0e32\u0e19\u0e41\u0e2b\u0e48\u0e07\u0e2d\u0e19\u0e32\u0e04\u0e15",
    openStoryLabel: "\u0e40\u0e1b\u0e34\u0e14\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e23\u0e32\u0e27",
    circulatorySystemLabel: "\u0e23\u0e30\u0e1a\u0e1a\u0e44\u0e2b\u0e25\u0e40\u0e27\u0e35\u0e22\u0e19",
    exploreOnTiktokLabel: "\u0e2a\u0e33\u0e23\u0e27\u0e08\u0e1a\u0e19 TikTok",
    stationCtaLabel: "\u0e14\u0e39\u0e2a\u0e16\u0e32\u0e19\u0e35",
  },
  zh: {
    intro: {
      eyebrow: "\u5faa\u73af\u7cfb\u7edf\u6545\u4e8b",
      title: "\u628a\u5faa\u73af\u7cfb\u7edf\u53d8\u6210\u573a\u666f\u4e0e\u6545\u4e8b",
      description:
        "\u4e00\u4e2a\u6e29\u67d4\u7684\u672a\u6765\u751f\u6d3b\u65b9\u5f0f\u6545\u4e8b\uff0c\u5728\u8fd9\u91cc MTS \u4e0d\u53ea\u662f\u4ea4\u901a\uff0c\u5b83\u628a\u4e00\u5bf9\u4f34\u4fa3\u4ece\u5c71\u8c37\u7ebf\u7684\u8282\u594f\u5e26\u56de\u5bb6\u7684\u6e29\u6696\u3001\u7231\u3001\u4f11\u606f\u4e0e\u65e5\u5e38\u6587\u660e\u4e4b\u4e2d\u3002",
    },
    backlinks: {
      eyebrow: "MTS \u8fd4\u56de\u94fe\u63a5",
      title: "\u7ee7\u7eed\u524d\u5f80\u5c71\u8c37\u7ebf\u4e0e\u6d77\u5cb8\u7ebf\u7ad9\u70b9\u3002",
      description:
        "\u6253\u5f00\u4e0e\u8fd9\u6bb5\u5f52\u5bb6\u6545\u4e8b\u76f8\u8fde\u7684\u51fa\u884c\u7ad9\u70b9\uff0c\u4ece\u9ad8\u5c71\u5c71\u8c37\u62b5\u8fbe\u70b9\u5230\u6d77\u5cb8\u672a\u6765\u65c5\u6e38\u57ce\u533a\u3002",
    },
    featureEyebrow: "\u672a\u6765\u5bb6\u5c45\u6545\u4e8b",
    openStoryLabel: "\u6253\u5f00\u6545\u4e8b",
    circulatorySystemLabel: "\u5faa\u73af\u7cfb\u7edf",
    exploreOnTiktokLabel: "\u5728 TikTok \u4e0a\u63a2\u7d22",
    stationCtaLabel: "\u67e5\u770b\u7ad9\u70b9",
  },
  ja: {
    intro: {
      eyebrow: "\u5faa\u74b0\u30b7\u30b9\u30c6\u30e0\u306e\u7269\u8a9e",
      title: "\u5faa\u74b0\u30b7\u30b9\u30c6\u30e0\u3092\u30b7\u30fc\u30f3\u3068\u7269\u8a9e\u306b\u5909\u3048\u308b",
      description:
        "MTS \u304c\u5358\u306a\u308b\u79fb\u52d5\u624b\u6bb5\u3067\u306f\u306a\u304f\u3001\u6e13\u8c37\u30e9\u30a4\u30f3\u306e\u30ea\u30ba\u30e0\u304b\u3089\u5bb6\u306e\u6e29\u3082\u308a\u3001\u611b\u3001\u4f11\u606f\u3001\u65e5\u5e38\u306e\u6587\u660e\u3078\u3068\u4e8c\u4eba\u3092\u904b\u3076\u3001\u3084\u308f\u3089\u304b\u306a\u672a\u6765\u30e9\u30a4\u30d5\u30b9\u30bf\u30a4\u30eb\u306e\u7269\u8a9e\u3067\u3059\u3002",
    },
    backlinks: {
      eyebrow: "MTS \u30d0\u30c3\u30af\u30ea\u30f3\u30af",
      title: "\u30d0\u30ec\u30fc\u3068\u30b3\u30fc\u30b9\u30bf\u30eb\u306e\u99c5\u3078\u65c5\u3092\u7d9a\u3051\u308b\u3002",
      description:
        "\u3053\u306e\u5e30\u5b85\u306e\u7269\u8a9e\u306b\u3064\u306a\u304c\u308b\u30e2\u30d3\u30ea\u30c6\u30a3\u99c5\u3092\u958b\u304d\u3001\u30a2\u30eb\u30d1\u30a4\u30f3\u30d0\u30ec\u30fc\u306e\u5230\u7740\u70b9\u304b\u3089\u6d77\u5cb8\u306e\u672a\u6765\u89b3\u5149\u5730\u533a\u307e\u3067\u9032\u307f\u307e\u3059\u3002",
    },
    featureEyebrow: "\u672a\u6765\u306e\u5bb6\u306e\u7269\u8a9e",
    openStoryLabel: "\u7269\u8a9e\u3092\u958b\u304f",
    circulatorySystemLabel: "\u5faa\u74b0\u30b7\u30b9\u30c6\u30e0",
    exploreOnTiktokLabel: "TikTok \u3067\u898b\u308b",
    stationCtaLabel: "\u99c5\u3092\u898b\u308b",
  },
  ko: {
    intro: {
      eyebrow: "\uc21c\ud658 \uc2dc\uc2a4\ud15c \uc774\uc57c\uae30",
      title: "\uc21c\ud658 \uc2dc\uc2a4\ud15c\uc744 \uc7a5\uba74\uacfc \uc774\uc57c\uae30\ub85c \ubc14\uafb8\ub2e4",
      description:
        "MTS\uac00 \ub2e8\uc21c\ud55c \uad50\ud1b5\uc744 \ub118\uc5b4, \uacc4\uace1 \ub77c\uc778\uc758 \ub9ac\ub4ec\uc5d0\uc11c \uc9d1\uc758 \ub530\ub73b\ud568, \uc0ac\ub791, \ud734\uc2dd, \uc77c\uc0c1\uc758 \ubb38\uba85\uc73c\ub85c \ud55c \ucee4\ud50c\uc744 \ub370\ub824\uac00\ub294 \ubd80\ub4dc\ub7ec\uc6b4 \ubbf8\ub798 \ub77c\uc774\ud504\uc2a4\ud0c0\uc77c \uc774\uc57c\uae30\uc785\ub2c8\ub2e4.",
    },
    backlinks: {
      eyebrow: "MTS \ubc31\ub9c1\ud06c",
      title: "\ubc38\ub9ac\uc640 \ucf54\uc2a4\ud138 \uc5ed\uc73c\ub85c \uc5ec\uc815\uc744 \uc774\uc5b4\uac00\uc138\uc694.",
      description:
        "\uc774 \uadc0\uac00 \uc774\uc57c\uae30\uc640 \uc5f0\uacb0\ub41c \ubaa8\ube4c\ub9ac\ud2f0 \uc5ed\uc744 \uc5f4\uc5b4 \uc54c\ud30c\uc778 \uacc4\uace1 \ub3c4\ucc29 \uc9c0\uc810\ubd80\ud130 \ud574\uc548 \ubbf8\ub798 \uad00\uad11 \uc9c0\uad6c\uae4c\uc9c0 \uc0b4\ud3b4\ubcf4\uc138\uc694.",
    },
    featureEyebrow: "\ubbf8\ub798\uc758 \uc9d1 \uc774\uc57c\uae30",
    openStoryLabel: "\uc774\uc57c\uae30 \uc5f4\uae30",
    circulatorySystemLabel: "\uc21c\ud658 \uc2dc\uc2a4\ud15c",
    exploreOnTiktokLabel: "TikTok\uc5d0\uc11c \ubcf4\uae30",
    stationCtaLabel: "\uc5ed \ubcf4\uae30",
  },
  id: {
    intro: {
      eyebrow: "Cerita Sistem Sirkulasi",
      title: "Mengubah sistem sirkulasi menjadi adegan dan cerita",
      description:
        "Cerita gaya hidup masa depan yang lembut, ketika MTS lebih dari transportasi: ia membawa pasangan dari ritme jalur lembah kembali ke kehangatan rumah, cinta, istirahat, dan peradaban sehari-hari.",
    },
    backlinks: {
      eyebrow: "Tautan Balik MTS",
      title: "Lanjutkan perjalanan melalui stasiun Lembah dan Pesisir.",
      description:
        "Buka stasiun mobilitas yang terhubung dengan cerita pulang ini, dari titik kedatangan lembah alpine hingga distrik pariwisata masa depan di pesisir.",
    },
    featureEyebrow: "Cerita Rumah Masa Depan",
    openStoryLabel: "Buka Cerita",
    circulatorySystemLabel: "Sistem Sirkulasi",
    exploreOnTiktokLabel: "Jelajahi di TikTok",
    stationCtaLabel: "Lihat Stasiun",
  },
  de: {
    intro: {
      eyebrow: "Geschichte des Kreislaufsystems",
      title: "Das Kreislaufsystem in Szenen und Geschichten verwandeln",
      description:
        "Eine sanfte Future-Lifestyle-Geschichte, in der MTS mehr als Transport ist: Es tr\u00e4gt ein Paar vom Rhythmus der Tallinie zur\u00fcck in die W\u00e4rme von Zuhause, Liebe, Ruhe und allt\u00e4glicher Zivilisation.",
    },
    backlinks: {
      eyebrow: "MTS-R\u00fccklinks",
      title: "Die Reise durch Tal- und K\u00fcstenstationen fortsetzen.",
      description:
        "\u00d6ffne die Mobilit\u00e4tsstationen, die mit dieser Heimkehrgeschichte verbunden sind, von alpinen Ankunftspunkten bis zu zuk\u00fcnftigen Tourismusvierteln an der K\u00fcste.",
    },
    featureEyebrow: "Zukunftszuhause-Geschichte",
    openStoryLabel: "Geschichte \u00f6ffnen",
    circulatorySystemLabel: "Kreislaufsystem",
    exploreOnTiktokLabel: "Auf TikTok ansehen",
    stationCtaLabel: "Station ansehen",
  },
  fr: {
    intro: {
      eyebrow: "Histoire du syst\u00e8me circulatoire",
      title: "Transformer le syst\u00e8me circulatoire en sc\u00e8nes et r\u00e9cits",
      description:
        "Une histoire douce de style de vie futur o\u00f9 MTS est plus qu'un transport : il ram\u00e8ne un couple du rythme de la ligne de vall\u00e9e vers la chaleur du foyer, l'amour, le repos et la civilisation quotidienne.",
    },
    backlinks: {
      eyebrow: "Liens retour MTS",
      title: "Poursuivre le voyage \u00e0 travers les stations de vall\u00e9e et du littoral.",
      description:
        "Ouvrez les stations de mobilit\u00e9 reli\u00e9es \u00e0 cette histoire de retour \u00e0 la maison, des points d'arriv\u00e9e alpins aux districts touristiques c\u00f4tiers du futur.",
    },
    featureEyebrow: "Histoire d'un foyer futur",
    openStoryLabel: "Ouvrir l'histoire",
    circulatorySystemLabel: "Syst\u00e8me circulatoire",
    exploreOnTiktokLabel: "Explorer sur TikTok",
    stationCtaLabel: "Voir la station",
  },
  ru: {
    intro: {
      eyebrow: "\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0446\u0438\u0440\u043a\u0443\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b",
      title: "\u041f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u044c \u0446\u0438\u0440\u043a\u0443\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0432 \u0441\u0446\u0435\u043d\u044b \u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u0438",
      description:
        "\u041c\u044f\u0433\u043a\u0430\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e \u043e\u0431\u0440\u0430\u0437\u0430 \u0436\u0438\u0437\u043d\u0438, \u0433\u0434\u0435 MTS \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u0442\u0440\u0430\u043d\u0441\u043f\u043e\u0440\u0442: \u043e\u043d \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442 \u043f\u0430\u0440\u0443 \u0438\u0437 \u0440\u0438\u0442\u043c\u0430 \u0434\u043e\u043b\u0438\u043d\u043d\u043e\u0439 \u043b\u0438\u043d\u0438\u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u043e \u043a \u0442\u0435\u043f\u043b\u0443 \u0434\u043e\u043c\u0430, \u043b\u044e\u0431\u0432\u0438, \u043e\u0442\u0434\u044b\u0445\u0443 \u0438 \u043f\u043e\u0432\u0441\u0435\u0434\u043d\u0435\u0432\u043d\u043e\u0439 \u0446\u0438\u0432\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u0438.",
    },
    backlinks: {
      eyebrow: "\u041e\u0431\u0440\u0430\u0442\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 MTS",
      title: "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u0435 \u043f\u0443\u0442\u044c \u0447\u0435\u0440\u0435\u0437 \u0441\u0442\u0430\u043d\u0446\u0438\u0438 \u0434\u043e\u043b\u0438\u043d\u044b \u0438 \u043f\u043e\u0431\u0435\u0440\u0435\u0436\u044c\u044f.",
      description:
        "\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0441\u0442\u0430\u043d\u0446\u0438\u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u044d\u0442\u043e\u0439 \u0438\u0441\u0442\u043e\u0440\u0438\u0435\u0439 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u0434\u043e\u043c\u043e\u0439, \u043e\u0442 \u0430\u043b\u044c\u043f\u0438\u0439\u0441\u043a\u0438\u0445 \u0442\u043e\u0447\u0435\u043a \u043f\u0440\u0438\u0431\u044b\u0442\u0438\u044f \u0434\u043e \u043f\u0440\u0438\u0431\u0440\u0435\u0436\u043d\u044b\u0445 \u0442\u0443\u0440\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0440\u0430\u0439\u043e\u043d\u043e\u0432 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e.",
    },
    featureEyebrow: "\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0434\u043e\u043c\u0430 \u0431\u0443\u0434\u0443\u0449\u0435\u0433\u043e",
    openStoryLabel: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e",
    circulatorySystemLabel: "\u0426\u0438\u0440\u043a\u0443\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0441\u0438\u0441\u0442\u0435\u043c\u0430",
    exploreOnTiktokLabel: "\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0432 TikTok",
    stationCtaLabel: "\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u0442\u0430\u043d\u0446\u0438\u044e",
  },
  vi: {
    intro: {
      eyebrow: "C\u00e2u chuy\u1ec7n h\u1ec7 tu\u1ea7n ho\u00e0n",
      title: "Bi\u1ebfn h\u1ec7 tu\u1ea7n ho\u00e0n th\u00e0nh c\u1ea3nh v\u00e0 c\u00e2u chuy\u1ec7n",
      description:
        "M\u1ed9t c\u00e2u chuy\u1ec7n phong c\u00e1ch s\u1ed1ng t\u01b0\u01a1ng lai d\u1ecbu d\u00e0ng, n\u01a1i MTS kh\u00f4ng ch\u1ec9 l\u00e0 giao th\u00f4ng: n\u00f3 \u0111\u01b0a m\u1ed9t c\u1eb7p \u0111\u00f4i t\u1eeb nh\u1ecbp \u0111i\u1ec7u tuy\u1ebfn thung l\u0169ng tr\u1edf v\u1ec1 h\u01a1i \u1ea5m c\u1ee7a nh\u00e0, t\u00ecnh y\u00eau, ngh\u1ec9 ng\u01a1i v\u00e0 v\u0103n minh \u0111\u1eddi th\u01b0\u1eddng.",
    },
    backlinks: {
      eyebrow: "Li\u00ean k\u1ebft ng\u01b0\u1ee3c MTS",
      title: "Ti\u1ebfp t\u1ee5c h\u00e0nh tr\u00ecnh qua c\u00e1c ga Thung l\u0169ng v\u00e0 Ven bi\u1ec3n.",
      description:
        "M\u1edf c\u00e1c ga mobility k\u1ebft n\u1ed1i v\u1edbi c\u00e2u chuy\u1ec7n tr\u1edf v\u1ec1 nh\u00e0 n\u00e0y, t\u1eeb \u0111i\u1ec3m \u0111\u1ebfn thung l\u0169ng alpine \u0111\u1ebfn c\u00e1c khu du l\u1ecbch t\u01b0\u01a1ng lai ven bi\u1ec3n.",
    },
    featureEyebrow: "C\u00e2u chuy\u1ec7n ng\u00f4i nh\u00e0 t\u01b0\u01a1ng lai",
    openStoryLabel: "M\u1edf c\u00e2u chuy\u1ec7n",
    circulatorySystemLabel: "H\u1ec7 tu\u1ea7n ho\u00e0n",
    exploreOnTiktokLabel: "Kh\u00e1m ph\u00e1 tr\u00ean TikTok",
    stationCtaLabel: "Xem ga",
  },
};

function getPlatformStoryUiCopy(locale: string): PlatformStoryUiCopy {
  return platformStoryUiCopy[locale] ?? platformStoryUiCopy[DEFAULT_LOCALE];
}

export type {
  PlatformSofaCoupleStory,
  PlatformStoryContent,
  PlatformStoryUiCopy,
} from "@/lib/platform-content/storyShared";

export function resolvePlatformStoryLocale(locale?: string | null): string {
  return locale || DEFAULT_LOCALE;
}

async function getSofaCoupleStory(locale = DEFAULT_LOCALE): Promise<PlatformSofaCoupleStory> {
  const resolvedLocale = resolvePlatformStoryLocale(locale);
  const cachedStory = storyCache.get(resolvedLocale);

  if (cachedStory) {
    return cachedStory;
  }

  const storyPromise = fetchData<PlatformSofaCoupleStory>(
    `/story/sofa-couple/${resolvedLocale}.sofa-couple.json`,
  ).catch((error) => {
    storyCache.delete(resolvedLocale);

    if (resolvedLocale !== DEFAULT_LOCALE) {
      return getSofaCoupleStory(DEFAULT_LOCALE);
    }

    throw error;
  });
  storyCache.set(resolvedLocale, storyPromise);

  return storyPromise;
}

export async function getPlatformStoryContent(
  locale?: string | null,
): Promise<PlatformStoryContent> {
  const resolvedLocale = resolvePlatformStoryLocale(locale);

  return {
    locale: resolvedLocale,
    sofaCoupleStory: await getSofaCoupleStory(resolvedLocale),
    uiCopy: getPlatformStoryUiCopy(resolvedLocale),
  };
}
