import {Metadata} from "next";
import {MetadataWeb3EN} from "@/data/metadata/pages/web3/MetadataWeb3EN";
import {MetadataWeb3TH} from "@/data/metadata/pages/web3/MetadataWeb3TH";
import {MetadataWeb3FR} from "@/data/metadata/pages/web3/MetadataWeb3FR";
import {MetadataWeb3JA} from "@/data/metadata/pages/web3/MetadataWeb3JA";
import {MetadataWeb3VI} from "@/data/metadata/pages/web3/MetadataWeb3VI";
import {MetadataWeb3ZH} from "@/data/metadata/pages/web3/MetadataWeb3ZH";
import {MetadataWeb3DA} from "@/data/metadata/pages/web3/MetadataWeb3DA";
import {MetadataWeb3DE} from "@/data/metadata/pages/web3/MetadataWeb3DE";
import {MetadataWeb3NL} from "@/data/metadata/pages/web3/MetadataWeb3NL";
import {MetadataWeb3FI} from "@/data/metadata/pages/web3/MetadataWeb3FI";
import {MetadataWeb3KO} from "@/data/metadata/pages/web3/MetadataWeb3KO";

export const MetadataWeb3: Record<string, Metadata> = {
    'en': MetadataWeb3EN,
    'th': MetadataWeb3TH,
    'fr': MetadataWeb3FR,
    'ja': MetadataWeb3JA,
    'vi': MetadataWeb3VI,
    'zh': MetadataWeb3ZH,
    'de': MetadataWeb3DE,
    'nl': MetadataWeb3NL,
    'da': MetadataWeb3DA,
    'fi': MetadataWeb3FI,
    'ko': MetadataWeb3KO
}