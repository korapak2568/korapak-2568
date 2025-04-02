import {Metadata} from "next";
import {MetadataWorkPolicyEN} from "@/metadata/pages/workplace-policy/MetadataWorkPolicyEN";
import {MetadataWorkPolicyTH} from "@/metadata/pages/workplace-policy/MetadataWorkPolicyTH";
import {MetadataWorkPolicyFR} from "@/metadata/pages/workplace-policy/MetadataWorkPolicyFR";
import {MetadataWorkPolicyJA} from "@/metadata/pages/workplace-policy/MetadataWorkPolicyJA";
import {MetadataWorkPolicyVI} from "@/metadata/pages/workplace-policy/MetadataWorkPolicyVI";
import {MetadataWorkPolicyZH} from "@/metadata/pages/workplace-policy/MetadataWorkPolicyZH";
import {MetadataWorkPolicyDA} from "@/metadata/pages/workplace-policy/MetadataWorkPolicyDA";
import {MetadataWorkPolicyDE} from "@/metadata/pages/workplace-policy/MetadataWorkPolicyDE";
import {MetadataWorkPolicyNL} from "@/metadata/pages/workplace-policy/MetadataWorkPolicyNL";
import {MetadataWorkPolicyFI} from "@/metadata/pages/workplace-policy/MetadataWorkPolicyFI";
import {MetadataWorkPolicyKO} from "@/metadata/pages/workplace-policy/MetadataWorkPolicyKO";

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