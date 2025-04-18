import {IOpenGraph} from "@/metadata/model/opengraph/IOpenGraph";
import {OpenGraphFrontEnd} from "@/metadata/opengraph/OpenGraphFrontEnd";
import {OpenGraphBackEnd} from "@/metadata/opengraph/OpenGraphBackEnd";
import {OpenGraphDevOps} from "@/metadata/opengraph/OpenGraphDevOps";
import {TrackVersion} from "../version/MetadataVersion";
import {CDN_IMAGE} from "@/image/ImageUrl";

export const OpenGraph: IOpenGraph = {
    home: {
        url: CDN_IMAGE + "/metadata/home/home-og-image.jpg" + TrackVersion,
        alt: "CHORN's image of home flexible workplace"
    },
    llmAi: {
        url: CDN_IMAGE + "/metadata/banner/chorn-banner.jpg" + TrackVersion,
        alt: "CHORN's image of LLM/AI integration",
    },
    aiCompanions: {
        url: CDN_IMAGE + "/metadata/ai/ai-companions-og-image.jpg" + TrackVersion,
        alt: "CHORN's image of AI companions",
    },
    aiFah: {
        url: CDN_IMAGE + "/metadata/ai/ai-og-fah.jpg" + TrackVersion,
        alt: "CHORN's image of AI-Fah - LINE Chat AI Integration",
    },
    aiAom: {
        url: CDN_IMAGE + "/metadata/ai/ai-og-aom.jpg" + TrackVersion,
        alt: "CHORN's image of AI-Aom - LINE Chat AI Integration",
    },
    aiPloy: {
        url: CDN_IMAGE + "/metadata/ai/ai-og-ploy.jpg" + TrackVersion,
        alt: "CHORN's image of AI-Ploy - LINE Chat AI Integration",
    },
    gallery: {
        url: CDN_IMAGE + "/metadata/gallery/gallery-og-image.jpg" + TrackVersion,
        alt: "CHORN's image of gallery",
    },
    about: {
        url: CDN_IMAGE + "/metadata/about/about-og-image.jpg" + TrackVersion,
        alt: "CHORN's image of about"
    },
    contact: {
        url: CDN_IMAGE + "/metadata/contact/contact-og-image.jpg" + TrackVersion,
        alt: "CHORN's image of contacting"
    },

    cloudSolutions: {
        url: CDN_IMAGE + "/metadata/banner/banner-logo.png" + TrackVersion,
        alt: "CHORN's image of cloud solutions"
    },
    webDevelopment: {
        url: CDN_IMAGE + "/metadata/frontend/frontend-development-services.png" + TrackVersion,
        alt: "CHORN's image of web development"
    },
    blockchain: {
        url: CDN_IMAGE + "/metadata/banner/banner-logo.png" + TrackVersion,
        alt: "CHORN's banner of web3 and blockchain development"
    },

    frontend: OpenGraphFrontEnd,
    backend: OpenGraphBackEnd,
    devops: OpenGraphDevOps
}