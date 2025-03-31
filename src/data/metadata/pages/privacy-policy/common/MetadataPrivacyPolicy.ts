import {Metadata} from "next";
import {MetadataPrivacyPolicyEN} from "@/data/metadata/pages/privacy-policy/MetadataPrivacyPolicyEN";
import {MetadataPrivacyPolicyTH} from "@/data/metadata/pages/privacy-policy/MetadataPrivacyPolicyTH";
import {MetadataPrivacyPolicyFR} from "@/data/metadata/pages/privacy-policy/MetadataPrivacyPolicyFR";
import {MetadataPrivacyPolicyJA} from "@/data/metadata/pages/privacy-policy/MetadataPrivacyPolicyJA";
import {MetadataPrivacyPolicyVI} from "@/data/metadata/pages/privacy-policy/MetadataPrivacyPolicyVI";
import {MetadataPrivacyPolicyZH} from "@/data/metadata/pages/privacy-policy/MetadataPrivacyPolicyZH";
import {MetadataPrivacyPolicyDA} from "@/data/metadata/pages/privacy-policy/MetadataPrivacyPolicyDA";
import {MetadataPrivacyPolicyDE} from "@/data/metadata/pages/privacy-policy/MetadataPrivacyPolicyDE";
import {MetadataPrivacyPolicyNL} from "@/data/metadata/pages/privacy-policy/MetadataPrivacyPolicyNL";
import {MetadataPrivacyPolicyFI} from "@/data/metadata/pages/privacy-policy/MetadataPrivacyPolicyFI";
import {MetadataPrivacyPolicyKO} from "@/data/metadata/pages/privacy-policy/MetadataPrivacyPolicyKO";

export const MetadataPrivacyPolicy: Record<string, Metadata> = {
    'en': MetadataPrivacyPolicyEN,
    'th': MetadataPrivacyPolicyTH,
    'fr': MetadataPrivacyPolicyFR,
    'ja': MetadataPrivacyPolicyJA,
    'vi': MetadataPrivacyPolicyVI,
    'zh': MetadataPrivacyPolicyZH,
    'de': MetadataPrivacyPolicyDE,
    'nl': MetadataPrivacyPolicyNL,
    'da': MetadataPrivacyPolicyDA,
    'fi': MetadataPrivacyPolicyFI,
    'ko': MetadataPrivacyPolicyKO
}