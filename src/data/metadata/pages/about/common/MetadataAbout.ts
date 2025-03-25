import {Metadata} from "next";
import {MetadataAboutEN} from "@/data/metadata/pages/about/MetadataAboutEN";
import {MetadataAboutTH} from "@/data/metadata/pages/about/MetadataAboutTH";
import {MetadataAboutFI} from "@/data/metadata/pages/about/MetadataAboutFI";
import {MetadataAboutFR} from "@/data/metadata/pages/about/MetadataAboutFR";
import {MetadataAboutJA} from "@/data/metadata/pages/about/MetadataAboutJA";
import {MetadataAboutVI} from "@/data/metadata/pages/about/MetadataAboutVI";
import {MetadataAboutZH} from "@/data/metadata/pages/about/MetadataAboutZH";
import {MetadataAboutDE} from "@/data/metadata/pages/about/MetadataAboutDE";
import {MetadataAboutNL} from "@/data/metadata/pages/about/MetadataAboutNL";
import {MetadataAboutDA} from "@/data/metadata/pages/about/MetadataAboutDA";
import {MetadataAboutKO} from "@/data/metadata/pages/about/MetadataAboutKO";

export const MetadataAbout: Record<string, Metadata> = {
    'en': MetadataAboutEN,
    'th': MetadataAboutTH,
    'fr': MetadataAboutFR,
    'ja': MetadataAboutJA,
    'vi': MetadataAboutVI,
    'zh': MetadataAboutZH,
    'de': MetadataAboutDE,
    'nl': MetadataAboutNL,
    'da': MetadataAboutDA,
    'fi': MetadataAboutFI,
    'ko': MetadataAboutKO
}