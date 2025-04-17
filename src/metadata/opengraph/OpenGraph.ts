import {IOpenGraph} from "@/metadata/model/opengraph/IOpenGraph";
import {OpenGraphFrontEnd} from "@/metadata/opengraph/OpenGraphFrontEnd";
import {OpenGraphBackEnd} from "@/metadata/opengraph/OpenGraphBackEnd";
import {OpenGraphDevOps} from "@/metadata/opengraph/OpenGraphDevOps";
import {TrackVersion} from "../version/MetadataVersion";

// Using Vercel - /internal-images/
// Use CloudFlare - /images/metadata/

export const OpenGraph: IOpenGraph = {
    home: {
        url: "https://chorn.in.th/images/metadata/home/home-og-image.jpg" + TrackVersion,
        alt: "CHORN's image of home flexible workplace"
    },
    llmAi: {
        url: "https://chorn.in.th/images/metadata/banner/chorn-banner.jpg" + TrackVersion,
        alt: "CHORN's image of LLM/AI integration",
    },
    aiCompanions: {
        url: "https://chorn.in.th/images/metadata/ai/ai-companions-og-image.jpg" + TrackVersion,
        alt: "CHORN's image of AI companions",
    },
    aiFah: {
        url: "https://chorn.in.th/images/metadata/ai/ai-og-fah.jpg" + TrackVersion,
        alt: "CHORN's image of AI-Fah - LINE Chat AI Integration",
    },
    aiAom: {
        url: "https://chorn.in.th/images/metadata/ai/ai-og-aom.jpg" + TrackVersion,
        alt: "CHORN's image of AI-Aom - LINE Chat AI Integration",
    },
    aiPloy: {
        url: "https://chorn.in.th/images/metadata/ai/ai-og-ploy.jpg" + TrackVersion,
        alt: "CHORN's image of AI-Ploy - LINE Chat AI Integration",
    },
    gallery: {
        url: "https://chorn.in.th/images/metadata/gallery/gallery-og-image.jpg" + TrackVersion,
        alt: "CHORN's image of gallery",
    },
    about: {
        url: "https://chorn.in.th/images/metadata/about/about-og-image.jpg" + TrackVersion,
        alt: "CHORN's image of about"
    },
    contact: {
        url: "https://chorn.in.th/images/metadata/contact/contact-og-image.jpg" + TrackVersion,
        alt: "CHORN's image of contacting"
    },

    cloudSolutions: {
        url: "https://chorn.in.th/images/metadata/banner/banner-logo.png" + TrackVersion,
        alt: "CHORN's image of cloud solutions"
    },
    webDevelopment: {
        url: "https://chorn.in.th/images/metadata/frontend/frontend-development-services.png" + TrackVersion,
        alt: "CHORN's image of web development"
    },
    blockchain: {
        url: "https://chorn.in.th/images/metadata/banner/banner-logo.png" + TrackVersion,
        alt: "CHORN's banner of web3 and blockchain development"
    },

    frontend: OpenGraphFrontEnd,
    backend: OpenGraphBackEnd,
    devops: OpenGraphDevOps
}