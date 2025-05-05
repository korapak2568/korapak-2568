import {Metadata} from "next";
import {MetadataAiFahEN} from "@/metadata/pages/ai-fah/MetadataAiFahEN";
import {MetadataAiFahTH} from "@/metadata/pages/ai-fah/MetadataAiFahTH";
import {MetadataAiFahFR} from "@/metadata/pages/ai-fah/MetadataAiFahFR";
import {MetadataAiFahJA} from "@/metadata/pages/ai-fah/MetadataAiFahJA";
import {MetadataAiFahVI} from "@/metadata/pages/ai-fah/MetadataAiFahVI";
import {MetadataAiFahZH} from "@/metadata/pages/ai-fah/MetadataAiFahZH";
import {MetadataAiFahDA} from "@/metadata/pages/ai-fah/MetadataAiFahDA";
import {MetadataAiFahDE} from "@/metadata/pages/ai-fah/MetadataAiFahDE";
import {MetadataAiFahNL} from "@/metadata/pages/ai-fah/MetadataAiFahNL";
import {MetadataAiFahKO} from "@/metadata/pages/ai-fah/MetadataAiFahKO";
import {MetadataAiFahFI} from "@/metadata/pages/ai-fah/MetadataAiFahFI";

export const MetadataAiFah: Record<string, Metadata> = {
    en: MetadataAiFahEN,
    th: MetadataAiFahTH,
    fr: MetadataAiFahFR,
    ja: MetadataAiFahJA,
    vi: MetadataAiFahVI,
    zh: MetadataAiFahZH,
    de: MetadataAiFahDE,
    nl: MetadataAiFahNL,
    da: MetadataAiFahDA,
    fi: MetadataAiFahFI,
    ko: MetadataAiFahKO
}