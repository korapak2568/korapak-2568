import {Metadata} from "next";
import {MetadataWeb3EN} from "@/metadata/pages/web3/MetadataWeb3EN";
import {MetadataWeb3TH} from "@/metadata/pages/web3/MetadataWeb3TH";
import {MetadataWeb3FR} from "@/metadata/pages/web3/MetadataWeb3FR";
import {MetadataWeb3JA} from "@/metadata/pages/web3/MetadataWeb3JA";
import {MetadataWeb3VI} from "@/metadata/pages/web3/MetadataWeb3VI";
import {MetadataWeb3ZH} from "@/metadata/pages/web3/MetadataWeb3ZH";
import {MetadataWeb3DA} from "@/metadata/pages/web3/MetadataWeb3DA";
import {MetadataWeb3DE} from "@/metadata/pages/web3/MetadataWeb3DE";
import {MetadataWeb3NL} from "@/metadata/pages/web3/MetadataWeb3NL";
import {MetadataWeb3FI} from "@/metadata/pages/web3/MetadataWeb3FI";
import {MetadataWeb3KO} from "@/metadata/pages/web3/MetadataWeb3KO";

export const MetadataWeb3: Record<string, Metadata> = {
    en: MetadataWeb3EN,
    th: MetadataWeb3TH,
    fr: MetadataWeb3FR,
    ja: MetadataWeb3JA,
    vi: MetadataWeb3VI,
    zh: MetadataWeb3ZH,
    de: MetadataWeb3DE,
    nl: MetadataWeb3NL,
    da: MetadataWeb3DA,
    fi: MetadataWeb3FI,
    ko: MetadataWeb3KO
}