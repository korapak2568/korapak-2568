import {Metadata} from "next";
import {MetadataGoEN} from "@/data/metadata/pages/backend/go/MetadataGoEN";
import {MetadataGoTH} from "@/data/metadata/pages/backend/go/MetadataGoTH";
import {MetadataGoFI} from "@/data/metadata/pages/backend/go/MetadataGoFI";
import {MetadataGoFR} from "@/data/metadata/pages/backend/go/MetadataGoFR";
import {MetadataGoJA} from "@/data/metadata/pages/backend/go/MetadataGoJA";
import {MetadataGoVI} from "@/data/metadata/pages/backend/go/MetadataGoVI";
import {MetadataGoZH} from "@/data/metadata/pages/backend/go/MetadataGoZH";
import {MetadataGoDE} from "@/data/metadata/pages/backend/go/MetadataGoDE";
import {MetadataGoNL} from "@/data/metadata/pages/backend/go/MetadataGoNL";
import {MetadataGoDA} from "@/data/metadata/pages/backend/go/MetadataGoDA";
import {MetadataGoKO} from "@/data/metadata/pages/backend/go/MetadataGoKO";

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