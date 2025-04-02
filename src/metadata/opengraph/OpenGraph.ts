import {IOpenGraph} from "@/metadata/model/opengraph/IOpenGraph";
import {OpenGraphFrontEnd} from "@/metadata/opengraph/OpenGraphFrontEnd";
import {OpenGraphBackEnd} from "@/metadata/opengraph/OpenGraphBackEnd";
import {OpenGraphDevOps} from "@/metadata/opengraph/OpenGraphDevOps";
import {ImageVersion} from "@/metadata/ImageVersion";
import {Space} from "@/lib/Space";

export const OpenGraph: IOpenGraph = {
    home: {
        url: `${Space.public}/home/home-og-image.jpg` + ImageVersion,
        alt: `CHORN's image of home flexible workplace`
    },
    llmAi: {
        url: `${Space.public}/banner/chorn-banner.jpg` + ImageVersion,
        alt: `CHORN's image of LLM/AI integration`,
    },
    aiCompanions: {
        url: `${Space.public}/ai/ai-companions/ai-companions-og-image.jpg` + ImageVersion,
        alt: `CHORN's image of AI companions`,
    },
    aiFah: {
        url: `${Space.public}/ai/ai-og-images/ai-og-fah.jpg` + ImageVersion,
        alt: `CHORN's image of AI-Fah - LINE Chat AI Integration`,
    },
    aiAom: {
        url: `${Space.public}/ai/ai-og-images/ai-og-aom.jpg` + ImageVersion,
        alt: `CHORN's image of AI-Aom - LINE Chat AI Integration`,
    },
    aiPloy: {
        url: `${Space.public}/ai/ai-og-images/ai-og-ploy.jpg` + ImageVersion,
        alt: `CHORN's image of AI-Ploy - LINE Chat AI Integration`,
    },
    gallery: {
        url: `${Space.public}/gallery/gallery-og-image.jpg` + ImageVersion,
        alt: `CHORN's image of gallery`,
    },
    about: {
        url: `${Space.public}/about/about-og-image.jpg` + ImageVersion,
        alt: `CHORN's image of about`
    },
    contact: {
        url: `${Space.public}/contact/contact-og-image.jpg` + ImageVersion,
        alt: `CHORN's image of contacting`
    },

    cloudSolutions: {
        url: `${Space.public}/metadata/banner-logo.png` + ImageVersion,
        alt: `CHORN's image of cloud solutions`
    },
    webDevelopment: {
        url: `${Space.public}/metadata/frontend-development-services.png` + ImageVersion,
        alt: `CHORN's image of web development`
    },
    blockchain: {
        url: `${Space.public}/metadata/banner-logo.png` + ImageVersion,
        alt: `CHORN's banner of web3 and blockchain development`
    },

    frontend: OpenGraphFrontEnd,
    backend: OpenGraphBackEnd,
    devops: OpenGraphDevOps
}