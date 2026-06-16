import type { PlatformResponsiveImageVariant } from "@/lib/platform-content/platformImageVariants";

export interface ISmartCityResponsiveImage {
    url: string;
    alt: string;
    mobile?: PlatformResponsiveImageVariant;
    thumbnail?: PlatformResponsiveImageVariant;
    desktop?: PlatformResponsiveImageVariant;
}

export interface IHeroSection {
    headline: string;
    paragraph: string;
    softTexts: ISoftText[];
    image: ISmartCityResponsiveImage;
    purpose: string;
    narrativeRole: string;
    section: string;
    editorialTone?: "observational" | "analytical" | "reflective";
    category: string;
    signalFocus?: string[];
    landingUrl: string;
}

export interface ISoftText {
    title: string;
    description: string;
}

export interface IHumanDailyFlow {
    headline: string;
    paragraph: string;
    morningFlow: IDailyFlow;
    middayFlow: IDailyFlow;
    eveningFlow: IDailyFlow;
    purpose: string;
    narrativeRole: string;
    section: string;
    category: string;
    lang: string;
}

export interface IDailyFlow {
    title: string;
    paragraph: string;
    image: ISmartCityResponsiveImage;
    category: string;
    signalFocus?: string[];
    landingUrl: string;
}

export interface ILocalToGlobal {
    headline: string;
    paragraph: string;
    items: IItem[];
    purpose: string;
    narrativeRole: string;
    section: string;
    category: string;
    signalFocus?: string[];
    landingUrl: string;
    lang: string;
}

export interface IItem {
    title: string;
    description: string;
    image: ISmartCityResponsiveImage;
    signalFocus: string[];
}

export interface ISystemExplainers {
    headline: string;
    paragraph: string;
    systems: ISystem[];
}

export interface ISystem {
    title: string;
    description: string;
    image: ISmartCityResponsiveImage;
}

export interface IMobilityFocus {
    headline: string;
    paragraph: string;
    signals: ISignal[];
}

export interface ISignal {
    title: string;
    description: string;
    image: ISmartCityResponsiveImage;
    signalFocus: string[];
    landingUrl: string;
}

export interface ICitySystems {
    headline: string;
    paragraph: string;
    systems: ICitySystemItem[];
}

export interface ICitySystemItem {
    title: string;
    description: string;
    image: ISmartCityResponsiveImage;
    balanceSignals: string[];
    landingUrl: string;
}

export interface IGlobalPatterns {
    headline: string;
    paragraph: string;
    signals: IGlobalPatternSignal[];
}

export interface IGlobalPatternSignal {
    title: string;
    description: string;
    image: ISmartCityResponsiveImage;
    signalFocus: string[];
    landingUrl: string;
}

export interface IUrbanSignals {
    headline: string;
    paragraph: string;
    signals: IUrbanSignal[];
}

export interface IUrbanSignal {
    title: string;
    description: string;
    signalFocus: string[];
    image: ISmartCityResponsiveImage;
    landingUrl: string;
}

export interface IEditorialPositioning {
    headline: string;
    paragraphs: string[];
    principles: IEditorialPrinciple[];
}

export interface IEditorialPrinciple {
    title: string;
    description: string;
    image: ISmartCityResponsiveImage;
    landingUrl: string;
}
