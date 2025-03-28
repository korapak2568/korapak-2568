import {Metadata} from "next";
import {MetadataGitLabEN} from "@/data/metadata/pages/devops/gitlab/MetadataGitLabEN";
import {MetadataGitLabTH} from "@/data/metadata/pages/devops/gitlab/MetadataGitLabTH";
import {MetadataGitLabFI} from "@/data/metadata/pages/devops/gitlab/MetadataGitLabFI";
import {MetadataGitLabFR} from "@/data/metadata/pages/devops/gitlab/MetadataGitLabFR";
import {MetadataGitLabJA} from "@/data/metadata/pages/devops/gitlab/MetadataGitLabJA";
import {MetadataGitLabVI} from "@/data/metadata/pages/devops/gitlab/MetadataGitLabVI";
import {MetadataGitLabZH} from "@/data/metadata/pages/devops/gitlab/MetadataGitLabZH";
import {MetadataGitLabDE} from "@/data/metadata/pages/devops/gitlab/MetadataGitLabDE";
import {MetadataGitLabNL} from "@/data/metadata/pages/devops/gitlab/MetadataGitLabNL";
import {MetadataGitLabDA} from "@/data/metadata/pages/devops/gitlab/MetadataGitLabDA";
import {MetadataGitLabKO} from "@/data/metadata/pages/devops/gitlab/MetadataGitLabKO";

export const MetadataGitLab: Record<string, Metadata> = {
    'en': MetadataGitLabEN,
    'th': MetadataGitLabTH,
    'fr': MetadataGitLabFR,
    'ja': MetadataGitLabJA,
    'vi': MetadataGitLabVI,
    'zh': MetadataGitLabZH,
    'de': MetadataGitLabDE,
    'nl': MetadataGitLabNL,
    'da': MetadataGitLabDA,
    'fi': MetadataGitLabFI,
    'ko': MetadataGitLabKO
}