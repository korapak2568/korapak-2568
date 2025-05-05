import {Metadata} from "next";
import {MetadataAboutEN} from "@/metadata/pages/about/MetadataAboutEN";
import {MetadataAboutTH} from "@/metadata/pages/about/MetadataAboutTH";
import {MetadataAboutFI} from "@/metadata/pages/about/MetadataAboutFI";
import {MetadataAboutFR} from "@/metadata/pages/about/MetadataAboutFR";
import {MetadataAboutJA} from "@/metadata/pages/about/MetadataAboutJA";
import {MetadataAboutVI} from "@/metadata/pages/about/MetadataAboutVI";
import {MetadataAboutZH} from "@/metadata/pages/about/MetadataAboutZH";
import {MetadataAboutDE} from "@/metadata/pages/about/MetadataAboutDE";
import {MetadataAboutNL} from "@/metadata/pages/about/MetadataAboutNL";
import {MetadataAboutDA} from "@/metadata/pages/about/MetadataAboutDA";
import {MetadataAboutKO} from "@/metadata/pages/about/MetadataAboutKO";

export const MetadataAbout: Record<string, Metadata> = {
    en: MetadataAboutEN,
    th: MetadataAboutTH,
    fr: MetadataAboutFR,
    ja: MetadataAboutJA,
    vi: MetadataAboutVI,
    zh: MetadataAboutZH,
    de: MetadataAboutDE,
    nl: MetadataAboutNL,
    da: MetadataAboutDA,
    fi: MetadataAboutFI,
    ko: MetadataAboutKO
}