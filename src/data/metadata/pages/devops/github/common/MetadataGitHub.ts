import {Metadata} from "next";
import {MetadataGitHubEN} from "@/data/metadata/pages/devops/github/MetadataGitHubEN";
import {MetadataGitHubTH} from "@/data/metadata/pages/devops/github/MetadataGitHubTH";
import {MetadataGitHubFI} from "@/data/metadata/pages/devops/github/MetadataGitHubFI";
import {MetadataGitHubFR} from "@/data/metadata/pages/devops/github/MetadataGitHubFR";
import {MetadataGitHubJA} from "@/data/metadata/pages/devops/github/MetadataGitHubJA";
import {MetadataGitHubVI} from "@/data/metadata/pages/devops/github/MetadataGitHubVI";
import {MetadataGitHubZH} from "@/data/metadata/pages/devops/github/MetadataGitHubZH";
import {MetadataGitHubDE} from "@/data/metadata/pages/devops/github/MetadataGitHubDE";
import {MetadataGitHubNL} from "@/data/metadata/pages/devops/github/MetadataGitHubNL";
import {MetadataGitHubDA} from "@/data/metadata/pages/devops/github/MetadataGitHubDA";
import {MetadataGitHubKO} from "@/data/metadata/pages/devops/github/MetadataGitHubKO";

export const MetadataGitHub: Record<string, Metadata> = {
    'en': MetadataGitHubEN,
    'th': MetadataGitHubTH,
    'fr': MetadataGitHubFR,
    'ja': MetadataGitHubJA,
    'vi': MetadataGitHubVI,
    'zh': MetadataGitHubZH,
    'de': MetadataGitHubDE,
    'nl': MetadataGitHubNL,
    'da': MetadataGitHubDA,
    'fi': MetadataGitHubFI,
    'ko': MetadataGitHubKO
}