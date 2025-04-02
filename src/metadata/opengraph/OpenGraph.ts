import {IOpenGraph} from "@/metadata/model/opengraph/IOpenGraph";
import {OpenGraphFrontEnd} from "@/metadata/opengraph/OpenGraphFrontEnd";
import {OpenGraphBackEnd} from "@/metadata/opengraph/OpenGraphBackEnd";
import {OpenGraphDevOps} from "@/metadata/opengraph/OpenGraphDevOps";
import {ImageVersion} from "@/metadata/ImageVersion";

export const OpenGraph: IOpenGraph = {
    home: {
        url: "https://chorn.in.th/images/home/home-og-image.jpg" + ImageVersion,
        alt: "CHORN's image of home flexible workplace"
    },
    llmAi: {
        url: "https://chorn.in.th/images/banner/chorn-banner.jpg" + ImageVersion,
        alt: "CHORN's image of LLM/AI integration",
    },
    aiCompanions: {
        url: "https://chorn.in.th/images/ai/ai-companions/ai-companions-og-image.jpg" + ImageVersion,
        alt: "CHORN's image of AI companions",
    },
    aiFah: {
        url: "https://chorn.in.th/images/ai/ai-og-images/ai-og-fah.jpg" + ImageVersion,
        alt: "CHORN's image of AI-Fah - LINE Chat AI Integration",
    },
    aiAom: {
        url: "https://chorn.in.th/images/ai/ai-og-images/ai-og-aom.jpg" + ImageVersion,
        alt: "CHORN's image of AI-Aom - LINE Chat AI Integration",
    },
    aiPloy: {
        url: "https://chorn.in.th/images/ai/ai-og-images/ai-og-ploy.jpg" + ImageVersion,
        alt: "CHORN's image of AI-Ploy - LINE Chat AI Integration",
    },
    gallery: {
        url: "https://chorn.in.th/images/gallery/gallery-og-image.jpg" + ImageVersion,
        alt: "CHORN's image of gallery",
    },
    about: {
        url: "https://chorn.in.th/images/about/about-og-image.jpg" + ImageVersion,
        alt: "CHORN's image of about"
    },
    contact: {
        url: "https://chorn.in.th/images/contact/contact-og-image.jpg" + ImageVersion,
        alt: "CHORN's image of contacting"
    },

    cloudSolutions: {
        url: "https://chorn.in.th/images/metadata/banner-logo.png" + ImageVersion,
        alt: "CHORN's image of cloud solutions"
    },
    webDevelopment: {
        url: "https://chorn.in.th/images/metadata/frontend-development-services.png" + ImageVersion,
        alt: "CHORN's image of web development"
    },
    blockchain: {
        url: "https://chorn.in.th/images/metadata/banner-logo.png" + ImageVersion,
        alt: "CHORN's banner of web3 and blockchain development"
    },

    frontend: OpenGraphFrontEnd,
    backend: OpenGraphBackEnd,
    devops: OpenGraphDevOps
}