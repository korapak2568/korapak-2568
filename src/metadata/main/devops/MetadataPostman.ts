import {Metadata} from "next";
import {MetadataPostmanEN} from "@/metadata/pages/devops/postman/MetadataPostmanEN";
import {MetadataPostmanTH} from "@/metadata/pages/devops/postman/MetadataPostmanTH";
import {MetadataPostmanFI} from "@/metadata/pages/devops/postman/MetadataPostmanFI";
import {MetadataPostmanFR} from "@/metadata/pages/devops/postman/MetadataPostmanFR";
import {MetadataPostmanJA} from "@/metadata/pages/devops/postman/MetadataPostmanJA";
import {MetadataPostmanVI} from "@/metadata/pages/devops/postman/MetadataPostmanVI";
import {MetadataPostmanZH} from "@/metadata/pages/devops/postman/MetadataPostmanZH";
import {MetadataPostmanDE} from "@/metadata/pages/devops/postman/MetadataPostmanDE";
import {MetadataPostmanNL} from "@/metadata/pages/devops/postman/MetadataPostmanNL";
import {MetadataPostmanDA} from "@/metadata/pages/devops/postman/MetadataPostmanDA";
import {MetadataPostmanKO} from "@/metadata/pages/devops/postman/MetadataPostmanKO";

export const MetadataPostman: Record<string, Metadata> = {
    en: MetadataPostmanEN,
    th: MetadataPostmanTH,
    fr: MetadataPostmanFR,
    ja: MetadataPostmanJA,
    vi: MetadataPostmanVI,
    zh: MetadataPostmanZH,
    de: MetadataPostmanDE,
    nl: MetadataPostmanNL,
    da: MetadataPostmanDA,
    fi: MetadataPostmanFI,
    ko: MetadataPostmanKO
}