import {ISmartCityItem} from "@/lib/model/ISmartCity";
import type { ISmartCityResponsiveImage } from "@/lib/model/ISmartCityMedia";


// ISmartCityLanding.ts


export interface ISmartCityLanding {
    heroObservation: ISmartCitySection
    systemExplanation?: ISmartCitySection
    whyItMatters?: ISmartCitySection
    relatedSignals?: ISmartCitySection[]
    smartCityItem?: ISmartCityItem
}

// ISmartCitySection.ts

export interface ISmartCitySection {
    lang?: string;
    headline: string
    paragraphs: string[]
    image?: ISmartCityResponsiveImage
    tags?: string[];
    cta?: {
        label: string
        href: string
    },
    landingUrl?: string;
    points?: IPoint[];
}

export interface IPoint {
    title: string;
    description: string;
}
