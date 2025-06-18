import {Metadata} from "next";
import {MetadataHomeEN} from "@/metadata/pages/home/MetadataHomeEN";
import {MetadataHomeTH} from "@/metadata/pages/home/MetadataHomeTH";
import {MetadataHomeFR} from "@/metadata/pages/home/MetadataHomeFR";
import {MetadataHomeJA} from "@/metadata/pages/home/MetadataHomeJA";
import {MetadataHomeZH} from "@/metadata/pages/home/MetadataHomeZH";
import {MetadataHomeDA} from "@/metadata/pages/home/MetadataHomeDA";
import {MetadataHomeDE} from "@/metadata/pages/home/MetadataHomeDE";
import {MetadataHomeNL} from "@/metadata/pages/home/MetadataHomeNL";
import {MetadataHomeFI} from "@/metadata/pages/home/MetadataHomeFI";
import {MetadataHomeKO} from "@/metadata/pages/home/MetadataHomeKO";

export const MetadataHome: Record<string, Metadata> = {
    en: MetadataHomeEN,
    th: MetadataHomeTH,
    fr: MetadataHomeFR,
    ja: MetadataHomeJA,
    zh: MetadataHomeZH,
    de: MetadataHomeDE,
    nl: MetadataHomeNL,
    da: MetadataHomeDA,
    fi: MetadataHomeFI,
    ko: MetadataHomeKO
}