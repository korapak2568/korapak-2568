import {Metadata} from "next";
import {MetadataAppiumEN} from "@/data/metadata/pages/devops/appium/MetadataAppiumEN";
import {MetadataAppiumTH} from "@/data/metadata/pages/devops/appium/MetadataAppiumTH";
import {MetadataAppiumFI} from "@/data/metadata/pages/devops/appium/MetadataAppiumFI";
import {MetadataAppiumFR} from "@/data/metadata/pages/devops/appium/MetadataAppiumFR";
import {MetadataAppiumJA} from "@/data/metadata/pages/devops/appium/MetadataAppiumJA";
import {MetadataAppiumVI} from "@/data/metadata/pages/devops/appium/MetadataAppiumVI";
import {MetadataAppiumZH} from "@/data/metadata/pages/devops/appium/MetadataAppiumZH";
import {MetadataAppiumDE} from "@/data/metadata/pages/devops/appium/MetadataAppiumDE";
import {MetadataAppiumNL} from "@/data/metadata/pages/devops/appium/MetadataAppiumNL";
import {MetadataAppiumDA} from "@/data/metadata/pages/devops/appium/MetadataAppiumDA";
import {MetadataAppiumKO} from "@/data/metadata/pages/devops/appium/MetadataAppiumKO";

export const MetadataAppium: Record<string, Metadata> = {
    'en': MetadataAppiumEN,
    'th': MetadataAppiumTH,
    'fr': MetadataAppiumFR,
    'ja': MetadataAppiumJA,
    'vi': MetadataAppiumVI,
    'zh': MetadataAppiumZH,
    'de': MetadataAppiumDE,
    'nl': MetadataAppiumNL,
    'da': MetadataAppiumDA,
    'fi': MetadataAppiumFI,
    'ko': MetadataAppiumKO
}