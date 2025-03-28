import {Metadata} from "next";
import {MetadataCss3EN} from "@/data/metadata/pages/frontend/css3/MetadataCss3EN";
import {MetadataCss3TH} from "@/data/metadata/pages/frontend/css3/MetadataCss3TH";
import {MetadataCss3FI} from "@/data/metadata/pages/frontend/css3/MetadataCss3FI";
import {MetadataCss3FR} from "@/data/metadata/pages/frontend/css3/MetadataCss3FR";
import {MetadataCss3JA} from "@/data/metadata/pages/frontend/css3/MetadataCss3JA";
import {MetadataCss3VI} from "@/data/metadata/pages/frontend/css3/MetadataCss3VI";
import {MetadataCss3ZH} from "@/data/metadata/pages/frontend/css3/MetadataCss3ZH";
import {MetadataCss3DE} from "@/data/metadata/pages/frontend/css3/MetadataCss3DE";
import {MetadataCss3NL} from "@/data/metadata/pages/frontend/css3/MetadataCss3NL";
import {MetadataCss3DA} from "@/data/metadata/pages/frontend/css3/MetadataCss3DA";
import {MetadataCss3KO} from "@/data/metadata/pages/frontend/css3/MetadataCss3KO";

export const MetadataCss3: Record<string, Metadata> = {
    'en': MetadataCss3EN,
    'th': MetadataCss3TH,
    'fr': MetadataCss3FR,
    'ja': MetadataCss3JA,
    'vi': MetadataCss3VI,
    'zh': MetadataCss3ZH,
    'de': MetadataCss3DE,
    'nl': MetadataCss3NL,
    'da': MetadataCss3DA,
    'fi': MetadataCss3FI,
    'ko': MetadataCss3KO
}