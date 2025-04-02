import {Metadata} from "next";
import {MetadataVueEN} from "@/metadata/pages/frontend/vue/MetadataVueEN";
import {MetadataVueTH} from "@/metadata/pages/frontend/vue/MetadataVueTH";
import {MetadataVueFI} from "@/metadata/pages/frontend/vue/MetadataVueFI";
import {MetadataVueFR} from "@/metadata/pages/frontend/vue/MetadataVueFR";
import {MetadataVueJA} from "@/metadata/pages/frontend/vue/MetadataVueJA";
import {MetadataVueVI} from "@/metadata/pages/frontend/vue/MetadataVueVI";
import {MetadataVueZH} from "@/metadata/pages/frontend/vue/MetadataVueZH";
import {MetadataVueDE} from "@/metadata/pages/frontend/vue/MetadataVueDE";
import {MetadataVueNL} from "@/metadata/pages/frontend/vue/MetadataVueNL";
import {MetadataVueDA} from "@/metadata/pages/frontend/vue/MetadataVueDA";
import {MetadataVueKO} from "@/metadata/pages/frontend/vue/MetadataVueKO";

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