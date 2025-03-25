import {Metadata} from "next";
import {MetadataAboutEN} from "@/data/metadata/about/MetadataAboutEN";
import {MetadataAboutTH} from "@/data/metadata/about/MetadataAboutTH";
import {MetadataAboutFI} from "@/data/metadata/about/MetadataAboutFI";
import {MetadataAboutFR} from "@/data/metadata/about/MetadataAboutFR";
import {MetadataAboutJA} from "@/data/metadata/about/MetadataAboutJA";
import {MetadataAboutVI} from "@/data/metadata/about/MetadataAboutVI";
import {MetadataAboutZH} from "@/data/metadata/about/MetadataAboutZH";
import {MetadataAboutDE} from "@/data/metadata/about/MetadataAboutDE";
import {MetadataAboutNL} from "@/data/metadata/about/MetadataAboutNL";
import {MetadataAboutDA} from "@/data/metadata/about/MetadataAboutDA";
import {MetadataAboutKO} from "@/data/metadata/about/MetadataAboutKO";

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