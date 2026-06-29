import type { PlatformResponsiveImageVariant } from "@/lib/platform-content/platformImageVariants";

export interface ISmartFoodAiContentImage {
  src: string;
  alt: string;
  mobile?: PlatformResponsiveImageVariant;
  thumbnail?: PlatformResponsiveImageVariant;
  desktop?: PlatformResponsiveImageVariant;
  open_graph?: PlatformResponsiveImageVariant;
}

export interface ISmartFoodAiAction {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface ISmartFoodAiWorkflowStep {
  title: string;
  text: string;
  image: ISmartFoodAiContentImage;
}

export interface ISmartFoodAiProofCard {
  index: string;
  title: string;
  text: string;
}

export interface ISmartFoodAiSectionHeading {
  eyebrow: string;
  title: string;
  text?: string;
}

export interface ISmartFoodAiMetadataContent {
  title: string;
  description: string;
  openGraphTitle: string;
}

export interface ISmartFoodAiContent {
  metadata?: ISmartFoodAiMetadataContent;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    support: string;
    actionsLabel: string;
    actions: ISmartFoodAiAction[];
    visual: ISmartFoodAiContentImage & {
      ariaLabel: string;
    };
  };
  proof: {
    heading: ISmartFoodAiSectionHeading;
    paragraphs: string[];
    image: ISmartFoodAiContentImage;
    cards: ISmartFoodAiProofCard[];
  };
  workflow: {
    id: string;
    heading: ISmartFoodAiSectionHeading;
    steps: ISmartFoodAiWorkflowStep[];
  };
  features: {
    heading: ISmartFoodAiSectionHeading;
    items: string[];
  };
  futureDirections: string[];
}
