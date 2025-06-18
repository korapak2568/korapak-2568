import {Metadata} from "next";
import {MetadataPrivacyPolicyEN} from "@/metadata/pages/privacy-policy/MetadataPrivacyPolicyEN";
import {MetadataPrivacyPolicyTH} from "@/metadata/pages/privacy-policy/MetadataPrivacyPolicyTH";
import {MetadataPrivacyPolicyFR} from "@/metadata/pages/privacy-policy/MetadataPrivacyPolicyFR";
import {MetadataPrivacyPolicyJA} from "@/metadata/pages/privacy-policy/MetadataPrivacyPolicyJA";
import {MetadataPrivacyPolicyZH} from "@/metadata/pages/privacy-policy/MetadataPrivacyPolicyZH";
import {MetadataPrivacyPolicyDA} from "@/metadata/pages/privacy-policy/MetadataPrivacyPolicyDA";
import {MetadataPrivacyPolicyDE} from "@/metadata/pages/privacy-policy/MetadataPrivacyPolicyDE";
import {MetadataPrivacyPolicyNL} from "@/metadata/pages/privacy-policy/MetadataPrivacyPolicyNL";
import {MetadataPrivacyPolicyFI} from "@/metadata/pages/privacy-policy/MetadataPrivacyPolicyFI";
import {MetadataPrivacyPolicyKO} from "@/metadata/pages/privacy-policy/MetadataPrivacyPolicyKO";

export const MetadataPrivacyPolicy: Record<string, Metadata> = {
    'en': MetadataPrivacyPolicyEN,
    'th': MetadataPrivacyPolicyTH,
    'fr': MetadataPrivacyPolicyFR,
    'ja': MetadataPrivacyPolicyJA,
    'zh': MetadataPrivacyPolicyZH,
    'de': MetadataPrivacyPolicyDE,
    'nl': MetadataPrivacyPolicyNL,
    'da': MetadataPrivacyPolicyDA,
    'fi': MetadataPrivacyPolicyFI,
    'ko': MetadataPrivacyPolicyKO
}