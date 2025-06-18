import {Metadata} from "next";
import {MetadataContactEN} from "@/metadata/pages/contact/MetadataContactEN";
import {MetadataContactTH} from "@/metadata/pages/contact/MetadataContactTH";
import {MetadataContactFI} from "@/metadata/pages/contact/MetadataContactFI";
import {MetadataContactFR} from "@/metadata/pages/contact/MetadataContactFR";
import {MetadataContactJA} from "@/metadata/pages/contact/MetadataContactJA";
import {MetadataContactZH} from "@/metadata/pages/contact/MetadataContactZH";
import {MetadataContactDE} from "@/metadata/pages/contact/MetadataContactDE";
import {MetadataContactNL} from "@/metadata/pages/contact/MetadataContactNL";
import {MetadataContactDA} from "@/metadata/pages/contact/MetadataContactDA";
import {MetadataContactKO} from "@/metadata/pages/contact/MetadataContactKO";

export const MetadataContact: Record<string, Metadata> = {
    en: MetadataContactEN,
    th: MetadataContactTH,
    fr: MetadataContactFR,
    ja: MetadataContactJA,
    zh: MetadataContactZH,
    de: MetadataContactDE,
    nl: MetadataContactNL,
    da: MetadataContactDA,
    fi: MetadataContactFI,
    ko: MetadataContactKO
}