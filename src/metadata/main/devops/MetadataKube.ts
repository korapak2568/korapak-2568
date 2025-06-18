import {Metadata} from "next";
import {MetadataKubeEN} from "@/metadata/pages/devops/kube/MetadataKubeEN";
import {MetadataKubeTH} from "@/metadata/pages/devops/kube/MetadataKubeTH";
import {MetadataKubeFI} from "@/metadata/pages/devops/kube/MetadataKubeFI";
import {MetadataKubeFR} from "@/metadata/pages/devops/kube/MetadataKubeFR";
import {MetadataKubeJA} from "@/metadata/pages/devops/kube/MetadataKubeJA";
import {MetadataKubeZH} from "@/metadata/pages/devops/kube/MetadataKubeZH";
import {MetadataKubeDE} from "@/metadata/pages/devops/kube/MetadataKubeDE";
import {MetadataKubeNL} from "@/metadata/pages/devops/kube/MetadataKubeNL";
import {MetadataKubeDA} from "@/metadata/pages/devops/kube/MetadataKubeDA";
import {MetadataKubeKO} from "@/metadata/pages/devops/kube/MetadataKubeKO";

export const MetadataKube: Record<string, Metadata> = {
    en: MetadataKubeEN,
    th: MetadataKubeTH,
    fr: MetadataKubeFR,
    ja: MetadataKubeJA,
    zh: MetadataKubeZH,
    de: MetadataKubeDE,
    nl: MetadataKubeNL,
    da: MetadataKubeDA,
    fi: MetadataKubeFI,
    ko: MetadataKubeKO
}