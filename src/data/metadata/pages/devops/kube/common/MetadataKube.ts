import {Metadata} from "next";
import {MetadataKubeEN} from "@/data/metadata/pages/devops/kube/MetadataKubeEN";
import {MetadataKubeTH} from "@/data/metadata/pages/devops/kube/MetadataKubeTH";
import {MetadataKubeFI} from "@/data/metadata/pages/devops/kube/MetadataKubeFI";
import {MetadataKubeFR} from "@/data/metadata/pages/devops/kube/MetadataKubeFR";
import {MetadataKubeJA} from "@/data/metadata/pages/devops/kube/MetadataKubeJA";
import {MetadataKubeVI} from "@/data/metadata/pages/devops/kube/MetadataKubeVI";
import {MetadataKubeZH} from "@/data/metadata/pages/devops/kube/MetadataKubeZH";
import {MetadataKubeDE} from "@/data/metadata/pages/devops/kube/MetadataKubeDE";
import {MetadataKubeNL} from "@/data/metadata/pages/devops/kube/MetadataKubeNL";
import {MetadataKubeDA} from "@/data/metadata/pages/devops/kube/MetadataKubeDA";
import {MetadataKubeKO} from "@/data/metadata/pages/devops/kube/MetadataKubeKO";

export const MetadataKube: Record<string, Metadata> = {
    'en': MetadataKubeEN,
    'th': MetadataKubeTH,
    'fr': MetadataKubeFR,
    'ja': MetadataKubeJA,
    'vi': MetadataKubeVI,
    'zh': MetadataKubeZH,
    'de': MetadataKubeDE,
    'nl': MetadataKubeNL,
    'da': MetadataKubeDA,
    'fi': MetadataKubeFI,
    'ko': MetadataKubeKO
}