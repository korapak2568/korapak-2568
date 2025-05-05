import {Metadata} from "next";
import {MetadataAppiumEN} from "@/metadata/pages/devops/appium/MetadataAppiumEN";
import {MetadataAppiumTH} from "@/metadata/pages/devops/appium/MetadataAppiumTH";
import {MetadataAppiumFI} from "@/metadata/pages/devops/appium/MetadataAppiumFI";
import {MetadataAppiumFR} from "@/metadata/pages/devops/appium/MetadataAppiumFR";
import {MetadataAppiumJA} from "@/metadata/pages/devops/appium/MetadataAppiumJA";
import {MetadataAppiumVI} from "@/metadata/pages/devops/appium/MetadataAppiumVI";
import {MetadataAppiumZH} from "@/metadata/pages/devops/appium/MetadataAppiumZH";
import {MetadataAppiumDE} from "@/metadata/pages/devops/appium/MetadataAppiumDE";
import {MetadataAppiumNL} from "@/metadata/pages/devops/appium/MetadataAppiumNL";
import {MetadataAppiumDA} from "@/metadata/pages/devops/appium/MetadataAppiumDA";
import {MetadataAppiumKO} from "@/metadata/pages/devops/appium/MetadataAppiumKO";

export const MetadataAppium: Record<string, Metadata> = {
    en: MetadataAppiumEN,
    th: MetadataAppiumTH,
    fr: MetadataAppiumFR,
    ja: MetadataAppiumJA,
    vi: MetadataAppiumVI,
    zh: MetadataAppiumZH,
    de: MetadataAppiumDE,
    nl: MetadataAppiumNL,
    da: MetadataAppiumDA,
    fi: MetadataAppiumFI,
    ko: MetadataAppiumKO
}