import {Metadata} from "next";
import {MetadataVueEN} from "@/data/metadata/pages/frontend/vue/MetadataVueEN";
import {MetadataVueTH} from "@/data/metadata/pages/frontend/vue/MetadataVueTH";
import {MetadataVueFI} from "@/data/metadata/pages/frontend/vue/MetadataVueFI";
import {MetadataVueFR} from "@/data/metadata/pages/frontend/vue/MetadataVueFR";
import {MetadataVueJA} from "@/data/metadata/pages/frontend/vue/MetadataVueJA";
import {MetadataVueVI} from "@/data/metadata/pages/frontend/vue/MetadataVueVI";
import {MetadataVueZH} from "@/data/metadata/pages/frontend/vue/MetadataVueZH";
import {MetadataVueDE} from "@/data/metadata/pages/frontend/vue/MetadataVueDE";
import {MetadataVueNL} from "@/data/metadata/pages/frontend/vue/MetadataVueNL";
import {MetadataVueDA} from "@/data/metadata/pages/frontend/vue/MetadataVueDA";
import {MetadataVueKO} from "@/data/metadata/pages/frontend/vue/MetadataVueKO";

export const MetadataVue: Record<string, Metadata> = {
    'en': MetadataVueEN,
    'th': MetadataVueTH,
    'fr': MetadataVueFR,
    'ja': MetadataVueJA,
    'vi': MetadataVueVI,
    'zh': MetadataVueZH,
    'de': MetadataVueDE,
    'nl': MetadataVueNL,
    'da': MetadataVueDA,
    'fi': MetadataVueFI,
    'ko': MetadataVueKO
}