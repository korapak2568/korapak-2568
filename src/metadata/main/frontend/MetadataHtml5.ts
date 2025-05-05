import {Metadata} from "next";
import {MetadataHtml5EN} from "@/metadata/pages/frontend/html5/MetadataHtml5EN";
import {MetadataHtml5TH} from "@/metadata/pages/frontend/html5/MetadataHtml5TH";
import {MetadataHtml5FI} from "@/metadata/pages/frontend/html5/MetadataHtml5FI";
import {MetadataHtml5FR} from "@/metadata/pages/frontend/html5/MetadataHtml5FR";
import {MetadataHtml5JA} from "@/metadata/pages/frontend/html5/MetadataHtml5JA";
import {MetadataHtml5VI} from "@/metadata/pages/frontend/html5/MetadataHtml5VI";
import {MetadataHtml5ZH} from "@/metadata/pages/frontend/html5/MetadataHtml5ZH";
import {MetadataHtml5DE} from "@/metadata/pages/frontend/html5/MetadataHtml5DE";
import {MetadataHtml5NL} from "@/metadata/pages/frontend/html5/MetadataHtml5NL";
import {MetadataHtml5DA} from "@/metadata/pages/frontend/html5/MetadataHtml5DA";
import {MetadataHtml5KO} from "@/metadata/pages/frontend/html5/MetadataHtml5KO";

export const MetadataHtml5: Record<string, Metadata> = {
    en: MetadataHtml5EN,
    th: MetadataHtml5TH,
    fr: MetadataHtml5FR,
    ja: MetadataHtml5JA,
    vi: MetadataHtml5VI,
    zh: MetadataHtml5ZH,
    de: MetadataHtml5DE,
    nl: MetadataHtml5NL,
    da: MetadataHtml5DA,
    fi: MetadataHtml5FI,
    ko: MetadataHtml5KO
}