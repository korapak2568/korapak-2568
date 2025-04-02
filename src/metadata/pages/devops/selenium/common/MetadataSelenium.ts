import {Metadata} from "next";
import {MetadataSeleniumEN} from "@/metadata/pages/devops/selenium/MetadataSeleniumEN";
import {MetadataSeleniumTH} from "@/metadata/pages/devops/selenium/MetadataSeleniumTH";
import {MetadataSeleniumFI} from "@/metadata/pages/devops/selenium/MetadataSeleniumFI";
import {MetadataSeleniumFR} from "@/metadata/pages/devops/selenium/MetadataSeleniumFR";
import {MetadataSeleniumJA} from "@/metadata/pages/devops/selenium/MetadataSeleniumJA";
import {MetadataSeleniumVI} from "@/metadata/pages/devops/selenium/MetadataSeleniumVI";
import {MetadataSeleniumZH} from "@/metadata/pages/devops/selenium/MetadataSeleniumZH";
import {MetadataSeleniumDE} from "@/metadata/pages/devops/selenium/MetadataSeleniumDE";
import {MetadataSeleniumNL} from "@/metadata/pages/devops/selenium/MetadataSeleniumNL";
import {MetadataSeleniumDA} from "@/metadata/pages/devops/selenium/MetadataSeleniumDA";
import {MetadataSeleniumKO} from "@/metadata/pages/devops/selenium/MetadataSeleniumKO";

export const MetadataSelenium: Record<string, Metadata> = {
    'en': MetadataSeleniumEN,
    'th': MetadataSeleniumTH,
    'fr': MetadataSeleniumFR,
    'ja': MetadataSeleniumJA,
    'vi': MetadataSeleniumVI,
    'zh': MetadataSeleniumZH,
    'de': MetadataSeleniumDE,
    'nl': MetadataSeleniumNL,
    'da': MetadataSeleniumDA,
    'fi': MetadataSeleniumFI,
    'ko': MetadataSeleniumKO
}