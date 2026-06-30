import { AboutContentPayload } from "@/core/domain/about-content.entity";
import { AiCompanionsContentPayload } from "@/core/domain/ai-companions-content.entity";
import { GalleryContentPayload } from "@/core/domain/gallery-content.entity";
import { HomePageContentPayload } from "@/core/domain/homepage-content.entity";
import { LayoutContentPayload } from "@/core/domain/layout-content.entity";
import { PolicyContentPayload } from "@/core/domain/policy-content.entity";
import { SmartFoodAiContentPayload } from "@/core/domain/smart-food-ai-content.entity";
import { IImageResponsiveUnit } from "@/image/model/IImageResponsiveUnit";
import { IImageUnit } from "@/image/model/IImageUnit";
import { IFooter } from "@/lib/model/IFooter";
import { INavbar } from "@/lib/model/INavbar";
import { normalizeAboutContentLocale } from "@/core/domain/about-content.entity";
import { normalizeAiCompanionsContentLocale } from "@/core/domain/ai-companions-content.entity";
import { normalizeGalleryContentLocale } from "@/core/domain/gallery-content.entity";
import { normalizeHomePageLocale } from "@/core/domain/homepage-content.entity";
import { normalizeLayoutContentLocale } from "@/core/domain/layout-content.entity";
import { normalizePolicyContentLocale } from "@/core/domain/policy-content.entity";
import { normalizeSmartFoodAiContentLocale } from "@/core/domain/smart-food-ai-content.entity";
import { LanguageOptionList } from "@/lib/constants/languageOptions";
import homeFallbackContent from "@/data/home/en.json";

const STATIC_FALLBACK_IMAGE_SRC =
  "/images/home/chorn-workplace-001-image-1200.webp";

const EMPTY_RESPONSIVE_IMAGE: IImageResponsiveUnit = {
  title: "Chorn Planet platform image",
  image375: STATIC_FALLBACK_IMAGE_SRC,
  image750: STATIC_FALLBACK_IMAGE_SRC,
  image1200: STATIC_FALLBACK_IMAGE_SRC,
  large: STATIC_FALLBACK_IMAGE_SRC,
  thumbnail: STATIC_FALLBACK_IMAGE_SRC,
};

const EMPTY_IMAGE_UNIT: IImageUnit = {
  title: "Chorn Planet platform image",
  path: STATIC_FALLBACK_IMAGE_SRC,
};

const fallbackText = {
  title: "Chorn Planet",
  description:
    "Chorn Planet presents digital products, AI services, smart city concepts, and platform engineering capabilities from Chiang Mai to global audiences.",
};

const AI_LUXURY_FOOTER_LABELS: Record<string, string> = {
  en: "AI Luxury Platform",
  th: "à¹à¸žà¸¥à¸•à¸Ÿà¸­à¸£à¹Œà¸¡ AI Luxury",
  da: "AI Luxury-platform",
  de: "AI-Luxusplattform",
  fi: "AI Luxury -alusta",
  fr: "Plateforme AI Luxury",
  ja: "AIãƒ©ã‚°ã‚¸ãƒ¥ã‚¢ãƒªãƒ¼ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ",
  ko: "AI ëŸ­ì…”ë¦¬ í”Œëž«í¼",
  nl: "AI Luxury-platform",
  zh: "AI å¥¢åŽå¹³å°",
};

const AI_SMART_FOOD_FOOTER_LABELS: Record<string, string> = {
  en: "AI Smart Food",
  th: "AI Smart Food",
  da: "AI Smart Food",
  de: "AI Smart Food",
  fi: "AI Smart Food",
  fr: "AI Smart Food",
  ja: "AIã‚¹ãƒžãƒ¼ãƒˆãƒ•ãƒ¼ãƒ‰",
  ko: "AI ìŠ¤ë§ˆíŠ¸ í‘¸ë“œ",
  nl: "AI Smart Food",
  zh: "AI æ™ºæ…§é£Ÿå“",
};

const TIKTOK_CREATOR_FOOTER_LABELS: Record<string, string> = {
  en: "TikTok Creator",
  th: "TikTok à¸„à¸£à¸µà¹€à¸­à¹€à¸•à¸­à¸£à¹Œ",
  da: "TikTok-skaber",
  de: "TikTok-Creator",
  fi: "TikTok-sisÃ¤llÃ¶ntuottaja",
  fr: "CrÃ©ateur TikTok",
  ja: "TikTokã‚¯ãƒªã‚¨ã‚¤ã‚¿ãƒ¼",
  ko: "TikTok í¬ë¦¬ì—ì´í„°",
  nl: "TikTok-creator",
  zh: "TikTok åˆ›ä½œè€…",
};

type MainNavbarGroup =
  | "Home"
  | "AI Luxury"
  | "Smart City"
  | "Smart Mobility"
  | "Smart Food AI"
  | "About";

const MAIN_NAVBAR_LABELS: Record<MainNavbarGroup, Record<string, string>> = {
  Home: {
    en: "Home",
    th: "à¸«à¸™à¹‰à¸²à¹à¸£à¸",
    da: "Hjem",
    de: "Startseite",
    fi: "Etusivu",
    fr: "Accueil",
    ja: "ãƒ›ãƒ¼ãƒ ",
    ko: "í™ˆ",
    nl: "Home",
    zh: "é¦–é¡µ",
  },
  "AI Luxury": {
    en: "AI Luxury Platform",
    th: "à¹à¸žà¸¥à¸•à¸Ÿà¸­à¸£à¹Œà¸¡ AI Luxury",
    da: "AI Luxury-platform",
    de: "AI-Luxusplattform",
    fi: "AI Luxury -alusta",
    fr: "Plateforme AI Luxury",
    ja: "AIãƒ©ã‚°ã‚¸ãƒ¥ã‚¢ãƒªãƒ¼ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ",
    ko: "AI ëŸ­ì…”ë¦¬ í”Œëž«í¼",
    nl: "AI Luxury-platform",
    zh: "AI å¥¢åŽå¹³å°",
  },
  "Smart City": {
    en: "Smart City",
    th: "à¸ªà¸¡à¸²à¸£à¹Œà¸•à¸‹à¸´à¸•à¸µà¹‰",
    da: "Smart City",
    de: "Smart City",
    fi: "Smart City",
    fr: "Smart City",
    ja: "ã‚¹ãƒžãƒ¼ãƒˆã‚·ãƒ†ã‚£",
    ko: "ìŠ¤ë§ˆíŠ¸ ì‹œí‹°",
    nl: "Smart City",
    zh: "æ™ºæ…§åŸŽå¸‚",
  },
  "Smart Mobility": {
    en: "Smart Mobility",
    th: "à¸ªà¸¡à¸²à¸£à¹Œà¸•à¹‚à¸¡à¸šà¸´à¸¥à¸´à¸•à¸µà¹‰",
    da: "Smart Mobility",
    de: "Smart Mobility",
    fi: "Smart Mobility",
    fr: "Smart Mobility",
    ja: "ã‚¹ãƒžãƒ¼ãƒˆãƒ¢ãƒ“ãƒªãƒ†ã‚£",
    ko: "ìŠ¤ë§ˆíŠ¸ ëª¨ë¹Œë¦¬í‹°",
    nl: "Smart Mobility",
    zh: "æ™ºæ…§å‡ºè¡Œ",
  },
  "Smart Food AI": {
    en: "AI Smart Food",
    th: "AI Smart Food",
    da: "AI Smart Food",
    de: "AI Smart Food",
    fi: "AI Smart Food",
    fr: "AI Smart Food",
    ja: "AIã‚¹ãƒžãƒ¼ãƒˆãƒ•ãƒ¼ãƒ‰",
    ko: "AI ìŠ¤ë§ˆíŠ¸ í‘¸ë“œ",
    nl: "AI Smart Food",
    zh: "AI æ™ºæ…§é£Ÿå“",
  },
  About: {
    en: "About",
    th: "About",
    da: "About",
    de: "About",
    fi: "About",
    fr: "About",
    ja: "About",
    ko: "About",
    nl: "About",
    zh: "About",
  },
};

function getMainNavbarLabel(group: MainNavbarGroup, locale: string): string {
  const labels = MAIN_NAVBAR_LABELS[group];
  return labels[locale] ?? labels.en;
}

function getFallbackFooterProjectItems(locale: string) {
  return [
    {
      label: "Luxury",
      link: "/luxury/",
    },
    {
      label: "Smart Food",
      link: "/smart-food/",
    },
    {
      label:
        TIKTOK_CREATOR_FOOTER_LABELS[locale] ?? TIKTOK_CREATOR_FOOTER_LABELS.en,
      link: "https://tiktok.com/@chornplanet",
    },
    {
      label: "Future Mobility Scenario",
      link: "/smart-mobility/chiang-mai/",
    },
    {
      label: "Future Smart City Scenario",
      link: "/smart-city/",
    },
  ];
}

function logStaticFallback(context: string, locale: string, slug?: string) {
  console.error(
    `[localized-content] Using static fallback for ${context} locale="${locale}"${slug ? ` slug="${slug}"` : ""}`,
  );
}

function createPrivacyPolicyFallback() {
  return {
    title: "Privacy Policy",
    subTitle: "How Chorn Planet Handles Visitor Information",
    description:
      "Chorn Planet respects visitor privacy and keeps this policy available to explain how website information, cookies, and contact details may be handled.",
    contents: [
      {
        title: "Information We May Receive",
        details: [
          {
            title: "Website usage",
            description:
              "We may receive basic technical information such as page visits, device type, browser type, referral source, and general interaction patterns when visitors use the website.",
          },
          {
            title: "Contact information",
            description:
              "If you contact Chorn Planet, we may receive the name, email address, message content, and related details you choose to provide.",
          },
        ],
      },
      {
        title: "How Information Is Used",
        details: [
          {
            title: "Service improvement",
            description:
              "Information may be used to improve website performance, understand public interest, respond to inquiries, and maintain a useful visitor experience.",
          },
          {
            title: "Communication",
            description:
              "Contact details may be used to reply to messages, coordinate requested discussions, or provide relevant information about Chorn Planet services.",
          },
        ],
      },
      {
        title: "Cookies And Analytics",
        details: [
          {
            title: "Cookie use",
            description:
              "The website may use cookies or similar technologies to support basic functionality, remember consent preferences, and understand aggregate website usage.",
          },
          {
            title: "Visitor choice",
            description:
              "Visitors can control cookies through browser settings. Some website features may work differently when cookies are disabled.",
          },
        ],
      },
      {
        title: "Data Protection",
        details: [
          {
            title: "Safeguards",
            description:
              "Chorn Planet aims to keep visitor information handled responsibly and to limit access to appropriate operational purposes.",
          },
          {
            title: "Retention",
            description:
              "Information is kept only as long as reasonably needed for the purpose it was provided, operational needs, or applicable requirements.",
          },
        ],
      },
      {
        title: "Contact",
        details: [
          {
            title: "Questions",
            description:
              "Visitors may contact Chorn Planet with privacy questions or requests related to information they have provided through the website.",
          },
        ],
      },
    ],
  };
}

function createTermsOfServiceFallback() {
  return {
    title: "Terms of Service",
    subTitle: "Website Use Terms",
    description:
      "These terms describe the general conditions for accessing and using the Chorn Planet website and public content.",
    contents: [
      {
        title: "Use Of The Website",
        description:
          "Visitors may use the website for lawful, personal, informational, and business inquiry purposes.",
        expand:
          "You agree not to misuse the website, interfere with its operation, attempt unauthorized access, or use public content in a way that harms Chorn Planet, other visitors, or third-party rights.",
      },
      {
        title: "Public Content",
        description:
          "Website content is provided for general information, presentation, and communication about Chorn Planet projects, services, and platform direction.",
        expand:
          "Content may change over time. Chorn Planet aims to keep public information accurate, but does not guarantee that every page is complete, current, or suitable for every specific decision.",
      },
      {
        title: "Intellectual Property",
        description:
          "Text, images, branding, layouts, and other materials on the website belong to Chorn Planet or their respective rights holders unless stated otherwise.",
        expand:
          "Visitors may not copy, redistribute, sell, or reuse website materials for commercial purposes without permission.",
      },
      {
        title: "External Links And Services",
        description:
          "The website may link to external services, social platforms, partner pages, or third-party resources.",
        expand:
          "Chorn Planet is not responsible for the content, policies, security, or availability of external websites and services.",
      },
      {
        title: "Limitation Of Liability",
        description:
          "The website is provided on an as-available basis for public information and communication.",
        expand:
          "To the extent permitted by applicable law, Chorn Planet is not liable for indirect, incidental, or consequential loss arising from use of the website.",
      },
      {
        title: "Updates",
        description:
          "Chorn Planet may update these terms as the platform, services, and public website evolve.",
        expand:
          "Continued use of the website after updates means visitors accept the current version of these terms.",
      },
    ],
  };
}

function createWorkplacePolicyFallback() {
  return {
    title: "Workplace Policy",
    subTitle: "Public Workplace Direction",
    description:
      "This policy summarizes the workplace principles Chorn Planet expects across collaboration, communication, delivery, and professional conduct.",
    contents: [
      {
        title: "Professional Collaboration",
        description:
          "Chorn Planet values respectful collaboration, clear communication, and thoughtful decision-making across internal work, partner discussions, and public-facing delivery.",
      },
      {
        title: "Respect And Inclusion",
        description:
          "Everyone involved in Chorn Planet work should be treated with respect. Harassment, discrimination, intimidation, or abusive conduct is not acceptable.",
      },
      {
        title: "Responsible Work Practices",
        description:
          "Work should be handled with care for accuracy, privacy, security, and the long-term reputation of the platform and its partners.",
      },
      {
        title: "Confidentiality",
        description:
          "Private business information, partner discussions, unpublished plans, credentials, and internal materials should be protected and shared only with appropriate permission.",
      },
      {
        title: "Quality And Accountability",
        description:
          "Chorn Planet expects contributors and collaborators to take ownership of agreed work, communicate risks early, and maintain quality standards across product, content, and technical delivery.",
      },
      {
        title: "Policy Updates",
        description:
          "This workplace policy may evolve as Chorn Planet grows and as operating practices become more formal across teams, partners, and platform work.",
      },
    ],
  };
}

function createService() {
  return {
    title: "AI Solutions",
    description: fallbackText.description,
    services: [
      {
        title: "AI product strategy",
        description:
          "Plan, design, and implement practical AI-enabled services for customer experience and operations.",
      },
    ],
    demo: {
      title: "AI companion demo",
      description: fallbackText.description,
      link: {
        text: "Contact Chorn Planet",
        href: "/contact/",
      },
      procedure: {
        title: "Service workflow",
        steps: [
          {
            title: "Understand the use case",
            description:
              "Clarify the audience, workflow, data needs, and business outcome before implementation.",
          },
        ],
      },
      note: [],
    },
  };
}

function createFeature() {
  const stacks = [
    {
      title: "Front End Development",
      description:
        "Craft responsive, accessible, and polished user interfaces for public product experiences.",
      link: "/technical-expertise/front-end-developer/",
      icon: "flaticon-check",
    },
    {
      title: "Full Stack Development",
      description:
        "Build reliable application layers that connect user experience, APIs, data, and operations.",
      link: "/technical-expertise/full-stack-developer/",
      icon: "flaticon-check",
    },
    {
      title: "Web Development",
      description:
        "Deliver modern websites and service pages with strong performance and maintainable structure.",
      link: "/technology/",
      icon: "flaticon-check",
    },
  ];

  return {
    title: "Digital Product Development",
    span: "Platform capability",
    subTitle: fallbackText.description,
    stacks,
  };
}

function createAiLanding(name: string) {
  return {
    name,
    category: "AI Companion",
    thumbnail: STATIC_FALLBACK_IMAGE_SRC,
    pages: {
      landing: {
        link: `/ai-companions/${name.toLowerCase()}/`,
        image: EMPTY_IMAGE_UNIT,
      },
    },
    title: `${name} AI Companion`,
    features: [
      {
        title: "AI companion experience",
        description: fallbackText.description,
        items: [],
      },
    ],
    sidebars: [],
    line: {
      link: "",
      button: "",
    },
    relevants: [],
  };
}

export function getFallbackAboutContent(locale: string): AboutContentPayload {
  const normalizedLocale = normalizeAboutContentLocale(locale);
  logStaticFallback("about content", normalizedLocale);

  return {
    locale: normalizedLocale,
    about: {
      title: "About",
      span: "Chorn Planet",
      subTitle: fallbackText.description,
      description: [
        {
          title: "Platform overview",
          description: fallbackText.description,
        },
      ],
      stacks: [],
    },
    media: {
      mainImage: EMPTY_RESPONSIVE_IMAGE,
    },
  };
}

export function getFallbackAiCompanionsContent(
  locale: string,
  options: { log?: boolean } = {},
): AiCompanionsContentPayload {
  const normalizedLocale = normalizeAiCompanionsContentLocale(locale);
  if (options.log !== false) {
    logStaticFallback("AI companions content", normalizedLocale);
  }

  return {
    locale: normalizedLocale,
    demo: createService().demo,
    service: createService(),
    aiCompanions: {
      fah: createAiLanding("Fah"),
      aom: createAiLanding("Aom"),
      ploy: createAiLanding("Ploy"),
    },
    feature: createFeature(),
    media: {
      featureImage: EMPTY_IMAGE_UNIT,
      llmSlides: [],
    },
  };
}

export function getFallbackGalleryContent(
  locale: string,
): GalleryContentPayload {
  const normalizedLocale = normalizeGalleryContentLocale(locale);
  logStaticFallback("gallery content", normalizedLocale);

  return {
    locale: normalizedLocale,
    gallery: {
      global: {
        title: "Gallery",
        description: fallbackText.description,
      },
      slides: [],
    },
    media: {
      bottomSlides: [],
    },
  };
}

export function getFallbackHomePageContent(
  locale: string,
): HomePageContentPayload {
  const normalizedLocale = normalizeHomePageLocale(locale);
  logStaticFallback("homepage content", normalizedLocale);
  const content = JSON.parse(
    JSON.stringify(homeFallbackContent),
  ) as HomePageContentPayload;

  return {
    ...content,
    locale: normalizedLocale,
    humanDailyFlow: {
      ...content.humanDailyFlow,
      lang: normalizedLocale,
    },
    localToGlobal: {
      ...content.localToGlobal,
      lang: normalizedLocale,
    },
  };
}

export function getFallbackLayoutContent(locale: string): LayoutContentPayload {
  const normalizedLocale = normalizeLayoutContentLocale(locale);
  logStaticFallback("layout content", normalizedLocale);
  const createNavItem = (
    group: string,
    label: string,
    link: string,
  ): INavbar => ({
    group,
    label,
    level: 0,
    link,
    activeLinks: [],
    isSubmenu: false,
    submenu: [],
  });
  const navItems: INavbar[] = [
    createNavItem("Home", getMainNavbarLabel("Home", normalizedLocale), "/"),
    createNavItem("Luxury", "Luxury", "/luxury/"),
    createNavItem(
      "Smart City",
      getMainNavbarLabel("Smart City", normalizedLocale),
      "/smart-city/",
    ),
    createNavItem(
      "Smart Mobility",
      getMainNavbarLabel("Smart Mobility", normalizedLocale),
      "/smart-mobility/",
    ),
    createNavItem("Smart Food", "Smart Food", "/smart-food/"),
    createNavItem(
      "About",
      getMainNavbarLabel("About", normalizedLocale),
      "/about/",
    ),
  ];
  const footerItems = [
    { label: "Home", link: "/" },
    { label: "Technology", link: "/technology/" },
    { label: "Contact", link: "/contact/" },
    { label: "Terms of Service", link: "/terms-of-service/" },
    { label: "Privacy Policy", link: "/privacy-policy/" },
    { label: "Workplace Policy", link: "/workplace-policy/" },
  ];
  const footer: IFooter = {
    title: "Chorn Planet",
    link: "/",
    www: "chornplanet.com",
    description: fallbackText.description,
    social: { title: "Social", items: [] },
    important: { title: "Important", items: footerItems },
    project: {
      title: "Projects",
      items: getFallbackFooterProjectItems(normalizedLocale),
    },
    smartCity: { title: "Smart City", items: [] },
    connect: { title: "Connect", items: [] },
  };

  return {
    locale: normalizedLocale,
    navbar: navItems,
    footer,
    consent: {
      description: "This site uses cookies to improve the public experience.",
      policyLink: "/privacy-policy/",
      policyLabel: "Privacy Policy",
      buttonText: "Accept",
    },
    languageOptions: LanguageOptionList,
  };
}

export function getPolicyContentFallbackPayload(
  locale: string,
): PolicyContentPayload {
  const normalizedLocale = normalizePolicyContentLocale(locale);

  return {
    locale: normalizedLocale,
    privacyPolicy: createPrivacyPolicyFallback(),
    termOfService: createTermsOfServiceFallback(),
    workplacePolicy: createWorkplacePolicyFallback(),
  };
}

export function getFallbackPolicyContent(locale: string): PolicyContentPayload {
  const normalizedLocale = normalizePolicyContentLocale(locale);
  logStaticFallback("policy content", normalizedLocale);

  return getPolicyContentFallbackPayload(normalizedLocale);
}

export function getFallbackSmartFoodAiContent(
  locale: string,
): SmartFoodAiContentPayload {
  const normalizedLocale = normalizeSmartFoodAiContentLocale(locale);
  logStaticFallback("Smart Food AI content", normalizedLocale);
  const image = {
    src: STATIC_FALLBACK_IMAGE_SRC,
    alt: "Smart Food AI service workflow",
  };
  const heading = {
    eyebrow: "AI-native food service platform",
    title: "Smart Food AI",
    text: fallbackText.description,
  };

  return {
    locale: normalizedLocale,
    metadata: {
      title: "Smart Food AI | Chorn Planet",
      description: fallbackText.description,
      openGraphTitle: "Smart Food AI",
    },
    hero: {
      eyebrow: "AI-native food service platform",
      title: "Smart Food AI",
      lead: "Smart Food AI connects menu information, customer conversation, order coordination, and business operations into one practical AI-native service experience.",
      support:
        "Designed from real local-business workflow in Chiang Mai, the platform direction helps food-service teams communicate clearly and coordinate operations.",
      actionsLabel: "Smart Food AI actions",
      actions: [
        { label: "Explore workflow", href: "#workflow", variant: "primary" },
      ],
      visual: {
        ...image,
        ariaLabel: "Smart Food AI service experience visual",
      },
    },
    proof: {
      heading,
      paragraphs: [fallbackText.description],
      image,
      cards: [
        {
          index: "01",
          title: "Customer conversation",
          text: "Support menu discovery, service questions, and clear ordering next steps.",
        },
      ],
    },
    workflow: {
      id: "workflow",
      heading,
      steps: [
        {
          title: "Understand the customer request",
          text: "Receive natural-language questions about menus, price, availability, ordering, and service details.",
          image,
        },
      ],
    },
    features: {
      heading,
      items: [
        "Natural-language menu support",
        "Customer response flow",
        "Order coordination support",
      ],
    },
    futureDirections: [
      "Continue improving Smart Food AI as a production-ready food-service platform surface.",
    ],
  };
}
