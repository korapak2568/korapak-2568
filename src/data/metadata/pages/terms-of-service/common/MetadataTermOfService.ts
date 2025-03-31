import {Metadata} from "next";
import {MetadataTermOfServiceEN} from "@/data/metadata/pages/terms-of-service/MetadataTermOfServiceEN";
import {MetadataTermOfServiceTH} from "@/data/metadata/pages/terms-of-service/MetadataTermOfServiceTH";
import {MetadataTermOfServiceFR} from "@/data/metadata/pages/terms-of-service/MetadataTermOfServiceFR";
import {MetadataTermOfServiceJA} from "@/data/metadata/pages/terms-of-service/MetadataTermOfServiceJA";
import {MetadataTermOfServiceVI} from "@/data/metadata/pages/terms-of-service/MetadataTermOfServiceVI";
import {MetadataTermOfServiceZH} from "@/data/metadata/pages/terms-of-service/MetadataTermOfServiceZH";
import {MetadataTermOfServiceDA} from "@/data/metadata/pages/terms-of-service/MetadataTermOfServiceDA";
import {MetadataTermOfServiceDE} from "@/data/metadata/pages/terms-of-service/MetadataTermOfServiceDE";
import {MetadataTermOfServiceNL} from "@/data/metadata/pages/terms-of-service/MetadataTermOfServiceNL";
import {MetadataTermOfServiceFI} from "@/data/metadata/pages/terms-of-service/MetadataTermOfServiceFI";
import {MetadataTermOfServiceKO} from "@/data/metadata/pages/terms-of-service/MetadataTermOfServiceKO";

export const MetadataTermOfService: Record<string, Metadata> = {
    'en': MetadataTermOfServiceEN,
    'th': MetadataTermOfServiceTH,
    'fr': MetadataTermOfServiceFR,
    'ja': MetadataTermOfServiceJA,
    'vi': MetadataTermOfServiceVI,
    'zh': MetadataTermOfServiceZH,
    'de': MetadataTermOfServiceDE,
    'nl': MetadataTermOfServiceNL,
    'da': MetadataTermOfServiceDA,
    'fi': MetadataTermOfServiceFI,
    'ko': MetadataTermOfServiceKO
}