import {Metadata} from "next";
import {MetadataGoEN} from "@/metadata/pages/backend/go/MetadataGoEN";
import {MetadataGoTH} from "@/metadata/pages/backend/go/MetadataGoTH";
import {MetadataGoFI} from "@/metadata/pages/backend/go/MetadataGoFI";
import {MetadataGoFR} from "@/metadata/pages/backend/go/MetadataGoFR";
import {MetadataGoJA} from "@/metadata/pages/backend/go/MetadataGoJA";
import {MetadataGoVI} from "@/metadata/pages/backend/go/MetadataGoVI";
import {MetadataGoZH} from "@/metadata/pages/backend/go/MetadataGoZH";
import {MetadataGoDE} from "@/metadata/pages/backend/go/MetadataGoDE";
import {MetadataGoNL} from "@/metadata/pages/backend/go/MetadataGoNL";
import {MetadataGoDA} from "@/metadata/pages/backend/go/MetadataGoDA";
import {MetadataGoKO} from "@/metadata/pages/backend/go/MetadataGoKO";

export const MetadataGo: Record<string, Metadata> = {
    'en': MetadataGoEN,
    'th': MetadataGoTH,
    'fr': MetadataGoFR,
    'ja': MetadataGoJA,
    'vi': MetadataGoVI,
    'zh': MetadataGoZH,
    'de': MetadataGoDE,
    'nl': MetadataGoNL,
    'da': MetadataGoDA,
    'fi': MetadataGoFI,
    'ko': MetadataGoKO
}