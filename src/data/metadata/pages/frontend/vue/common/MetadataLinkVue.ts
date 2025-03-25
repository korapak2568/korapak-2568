import {OpenGraph} from "@/data/metadata/opengraph/OpenGraph";
import {IMetadataLinkPage} from "@/data/metadata/model/IMetadataLinkPage";

export const MetadataLinkVue: IMetadataLinkPage = {
    alternates: {
        canonical: "https://chorn.in.th/en/technical-expertise/front-end-developer/vue-developer/",
        languages: {
            "en": "https://chorn.in.th/en/technical-expertise/front-end-developer/vue-developer/",
            "th": "https://chorn.in.th/th/technical-expertise/front-end-developer/vue-developer/",
            "fr": "https://chorn.in.th/fr/technical-expertise/front-end-developer/vue-developer/",
            "ja": "https://chorn.in.th/ja/technical-expertise/front-end-developer/vue-developer/",
            "vi": "https://chorn.in.th/vi/technical-expertise/front-end-developer/vue-developer/",
            "zh": "https://chorn.in.th/zh/technical-expertise/front-end-developer/vue-developer/",
            "de": "https://chorn.in.th/de/technical-expertise/front-end-developer/vue-developer/",
            "nl": "https://chorn.in.th/nl/technical-expertise/front-end-developer/vue-developer/",
            "da": "https://chorn.in.th/da/technical-expertise/front-end-developer/vue-developer/",
            "fi": "https://chorn.in.th/fi/technical-expertise/front-end-developer/vue-developer/",
            "ko": "https://chorn.in.th/ko/technical-expertise/front-end-developer/vue-developer/",
        }
    },
    openGraph: {
        images: [
            {
                url: OpenGraph.frontend.vue.url,
                width: 1200,
                height: 630,
                alt: OpenGraph.frontend.vue.alt,
            }
        ],
        url: "https://chorn.in.th/en/technical-expertise/front-end-developer/vue-developer/",
        type: "website",
    },
    twitter: {
        images: [
            OpenGraph.frontend.vue.url,
        ],
    },
}