import {Metadata} from "next";
import {MetadataTermOfServiceEN} from "@/metadata/pages/terms-of-service/MetadataTermOfServiceEN";
import {MetadataTermOfServiceTH} from "@/metadata/pages/terms-of-service/MetadataTermOfServiceTH";
import {MetadataTermOfServiceFR} from "@/metadata/pages/terms-of-service/MetadataTermOfServiceFR";
import {MetadataTermOfServiceJA} from "@/metadata/pages/terms-of-service/MetadataTermOfServiceJA";
import {MetadataTermOfServiceZH} from "@/metadata/pages/terms-of-service/MetadataTermOfServiceZH";
import {MetadataTermOfServiceDA} from "@/metadata/pages/terms-of-service/MetadataTermOfServiceDA";
import {MetadataTermOfServiceDE} from "@/metadata/pages/terms-of-service/MetadataTermOfServiceDE";
import {MetadataTermOfServiceNL} from "@/metadata/pages/terms-of-service/MetadataTermOfServiceNL";
import {MetadataTermOfServiceFI} from "@/metadata/pages/terms-of-service/MetadataTermOfServiceFI";
import {MetadataTermOfServiceKO} from "@/metadata/pages/terms-of-service/MetadataTermOfServiceKO";

export const MetadataTermOfService: Record<string, Metadata> = {
    'en': MetadataTermOfServiceEN,
    'th': MetadataTermOfServiceTH,
    'fr': MetadataTermOfServiceFR,
    'ja': MetadataTermOfServiceJA,
    'zh': MetadataTermOfServiceZH,
    'de': MetadataTermOfServiceDE,
    'nl': MetadataTermOfServiceNL,
    'da': MetadataTermOfServiceDA,
    'fi': MetadataTermOfServiceFI,
    'ko': MetadataTermOfServiceKO
}