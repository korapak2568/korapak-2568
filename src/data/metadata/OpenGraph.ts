import {IOpenGraph} from "@/data/metadata/model/opengraph/IOpenGraph";
import {OpenGraphFrontEnd} from "@/data/metadata/opengraph/OpenGraphFrontEnd";
import {OpenGraphBackEnd} from "@/data/metadata/opengraph/OpenGraphBackEnd";
import {OpenGraphDevOps} from "@/data/metadata/opengraph/OpenGraphDevOps";
import {ImageVersion} from "@/data/metadata/ImageVersion";

export const OpenGraph: IOpenGraph = {
    home: {
        url: "https://chorn.in.th/chorn-images/home/home-og-image.jpg" + ImageVersion,
        alt: "Flexible Workplace"
    },
    llmAi: {
        url: "https://chorn.in.th/chorn-images/banner/chorn-banner.jpg" + ImageVersion,
        alt: "LLM/AI Integration Banner",
    },
    aiCompanions: {
        url: "https://chorn.in.th/images-ai/ai-companions/ai-companions-og-image.jpg" + ImageVersion,
        alt: "AI Chat Companion Demo",
    },
    aiFah: {
        url: "https://chorn.in.th/images-ai/ai-og-images/ai-og-fah.jpg" + ImageVersion,
        alt: "AI Fah - LINE Chat AI Integration",
    },
    aiAom: {
        url: "https://chorn.in.th/images-ai/ai-og-images/ai-og-aom.jpg" + ImageVersion,
        alt: "AI Aom - LINE Chat AI Integration",
    },
    aiPloy: {
        url: "https://chorn.in.th/images-ai/ai-og-images/ai-og-ploy.jpg" + ImageVersion,
        alt: "AI Ploy - LINE Chat AI Integration",
    },
    gallery: {
        url: "https://chorn.in.th/chorn-images/gallery/gallery-og-image.jpg" + ImageVersion,
        alt: "Global Business Trip Highlights",
    },
    about: {
        url: "https://chorn.in.th/chorn-images/about/about-og-image.jpg" + ImageVersion,
        alt: "About CHORN Banner Image"
    },
    contact: {
        url: "https://chorn.in.th/chorn-images/contact/contact-og-image.jpg" + ImageVersion,
        alt: "Contact CHORN Banner Image"
    },

    cloudSolutions: {
        url: "https://chorn.in.th/chorn-images/metadata/banner-logo.png" + ImageVersion,
        alt: "Cloud Solution Architecture and Systems Analysis Banner",
    },
    webDevelopment: {
        url: "https://chorn.in.th/chorn-images/metadata/frontend-development-services.png" + ImageVersion,
        alt: "Web Development Services Banner",
    },
    blockchain: {
        url: "https://chorn.in.th/chorn-images/metadata/banner-logo.png" + ImageVersion,
        alt: "Web3 Blockchain Smart Contract Development Services Banner",
    },

    frontend: OpenGraphFrontEnd,
    backend: OpenGraphBackEnd,
    devops: OpenGraphDevOps
}