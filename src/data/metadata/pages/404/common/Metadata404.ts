import {Metadata} from "next";
import {Metadata404EN} from "@/data/metadata/pages/404/Metadata404EN";
import {Metadata404TH} from "@/data/metadata/pages/404/Metadata404TH";
import {Metadata404FR} from "@/data/metadata/pages/404/Metadata404FR";
import {Metadata404JA} from "@/data/metadata/pages/404/Metadata404JA";
import {Metadata404VI} from "@/data/metadata/pages/404/Metadata404VI";
import {Metadata404ZH} from "@/data/metadata/pages/404/Metadata404ZH";
import {Metadata404DA} from "@/data/metadata/pages/404/Metadata404DA";
import {Metadata404DE} from "@/data/metadata/pages/404/Metadata404DE";
import {Metadata404NL} from "@/data/metadata/pages/404/Metadata404NL";
import {Metadata404FI} from "@/data/metadata/pages/404/Metadata404FI";
import {Metadata404KO} from "@/data/metadata/pages/404/Metadata404KO";

export const Metadata404: Record<string, Metadata> = {
    'en': Metadata404EN,
    'th': Metadata404TH,
    'fr': Metadata404FR,
    'ja': Metadata404JA,
    'vi': Metadata404VI,
    'zh': Metadata404ZH,
    'de': Metadata404DE,
    'nl': Metadata404NL,
    'da': Metadata404DA,
    'fi': Metadata404FI,
    'ko': Metadata404KO
}