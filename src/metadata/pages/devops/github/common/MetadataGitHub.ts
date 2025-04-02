import {Metadata} from "next";
import {MetadataGitHubEN} from "@/metadata/pages/devops/github/MetadataGitHubEN";
import {MetadataGitHubTH} from "@/metadata/pages/devops/github/MetadataGitHubTH";
import {MetadataGitHubFI} from "@/metadata/pages/devops/github/MetadataGitHubFI";
import {MetadataGitHubFR} from "@/metadata/pages/devops/github/MetadataGitHubFR";
import {MetadataGitHubJA} from "@/metadata/pages/devops/github/MetadataGitHubJA";
import {MetadataGitHubVI} from "@/metadata/pages/devops/github/MetadataGitHubVI";
import {MetadataGitHubZH} from "@/metadata/pages/devops/github/MetadataGitHubZH";
import {MetadataGitHubDE} from "@/metadata/pages/devops/github/MetadataGitHubDE";
import {MetadataGitHubNL} from "@/metadata/pages/devops/github/MetadataGitHubNL";
import {MetadataGitHubDA} from "@/metadata/pages/devops/github/MetadataGitHubDA";
import {MetadataGitHubKO} from "@/metadata/pages/devops/github/MetadataGitHubKO";

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