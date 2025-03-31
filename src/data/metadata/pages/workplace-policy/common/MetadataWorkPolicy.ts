import {Metadata} from "next";
import {MetadataWorkPolicyEN} from "@/data/metadata/pages/workplace-policy/MetadataWorkPolicyEN";
import {MetadataWorkPolicyTH} from "@/data/metadata/pages/workplace-policy/MetadataWorkPolicyTH";
import {MetadataWorkPolicyFR} from "@/data/metadata/pages/workplace-policy/MetadataWorkPolicyFR";
import {MetadataWorkPolicyJA} from "@/data/metadata/pages/workplace-policy/MetadataWorkPolicyJA";
import {MetadataWorkPolicyVI} from "@/data/metadata/pages/workplace-policy/MetadataWorkPolicyVI";
import {MetadataWorkPolicyZH} from "@/data/metadata/pages/workplace-policy/MetadataWorkPolicyZH";
import {MetadataWorkPolicyDA} from "@/data/metadata/pages/workplace-policy/MetadataWorkPolicyDA";
import {MetadataWorkPolicyDE} from "@/data/metadata/pages/workplace-policy/MetadataWorkPolicyDE";
import {MetadataWorkPolicyNL} from "@/data/metadata/pages/workplace-policy/MetadataWorkPolicyNL";
import {MetadataWorkPolicyFI} from "@/data/metadata/pages/workplace-policy/MetadataWorkPolicyFI";
import {MetadataWorkPolicyKO} from "@/data/metadata/pages/workplace-policy/MetadataWorkPolicyKO";

export const MetadataWorkPolicy: Record<string, Metadata> = {
    'en': MetadataWorkPolicyEN,
    'th': MetadataWorkPolicyTH,
    'fr': MetadataWorkPolicyFR,
    'ja': MetadataWorkPolicyJA,
    'vi': MetadataWorkPolicyVI,
    'zh': MetadataWorkPolicyZH,
    'de': MetadataWorkPolicyDE,
    'nl': MetadataWorkPolicyNL,
    'da': MetadataWorkPolicyDA,
    'fi': MetadataWorkPolicyFI,
    'ko': MetadataWorkPolicyKO
}