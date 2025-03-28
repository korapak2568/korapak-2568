import {Metadata} from "next";
import {MetadataDockerEN} from "@/data/metadata/pages/devops/docker/MetadataDockerEN";
import {MetadataDockerTH} from "@/data/metadata/pages/devops/docker/MetadataDockerTH";
import {MetadataDockerFI} from "@/data/metadata/pages/devops/docker/MetadataDockerFI";
import {MetadataDockerFR} from "@/data/metadata/pages/devops/docker/MetadataDockerFR";
import {MetadataDockerJA} from "@/data/metadata/pages/devops/docker/MetadataDockerJA";
import {MetadataDockerVI} from "@/data/metadata/pages/devops/docker/MetadataDockerVI";
import {MetadataDockerZH} from "@/data/metadata/pages/devops/docker/MetadataDockerZH";
import {MetadataDockerDE} from "@/data/metadata/pages/devops/docker/MetadataDockerDE";
import {MetadataDockerNL} from "@/data/metadata/pages/devops/docker/MetadataDockerNL";
import {MetadataDockerKO} from "@/data/metadata/pages/devops/docker/MetadataDockerKO";
import {MetadataDockerDA} from "../MetadataDockerDA";

export const MetadataDocker: Record<string, Metadata> = {
    'en': MetadataDockerEN,
    'th': MetadataDockerTH,
    'fr': MetadataDockerFR,
    'ja': MetadataDockerJA,
    'vi': MetadataDockerVI,
    'zh': MetadataDockerZH,
    'de': MetadataDockerDE,
    'nl': MetadataDockerNL,
    'da': MetadataDockerDA,
    'fi': MetadataDockerFI,
    'ko': MetadataDockerKO
}