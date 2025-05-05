import {Metadata} from "next";
import {MetadataGitLabEN} from "@/metadata/pages/devops/gitlab/MetadataGitLabEN";
import {MetadataGitLabTH} from "@/metadata/pages/devops/gitlab/MetadataGitLabTH";
import {MetadataGitLabFI} from "@/metadata/pages/devops/gitlab/MetadataGitLabFI";
import {MetadataGitLabFR} from "@/metadata/pages/devops/gitlab/MetadataGitLabFR";
import {MetadataGitLabJA} from "@/metadata/pages/devops/gitlab/MetadataGitLabJA";
import {MetadataGitLabVI} from "@/metadata/pages/devops/gitlab/MetadataGitLabVI";
import {MetadataGitLabZH} from "@/metadata/pages/devops/gitlab/MetadataGitLabZH";
import {MetadataGitLabDE} from "@/metadata/pages/devops/gitlab/MetadataGitLabDE";
import {MetadataGitLabNL} from "@/metadata/pages/devops/gitlab/MetadataGitLabNL";
import {MetadataGitLabDA} from "@/metadata/pages/devops/gitlab/MetadataGitLabDA";
import {MetadataGitLabKO} from "@/metadata/pages/devops/gitlab/MetadataGitLabKO";

export const MetadataGitLab: Record<string, Metadata> = {
    en: MetadataGitLabEN,
    th: MetadataGitLabTH,
    fr: MetadataGitLabFR,
    ja: MetadataGitLabJA,
    vi: MetadataGitLabVI,
    zh: MetadataGitLabZH,
    de: MetadataGitLabDE,
    nl: MetadataGitLabNL,
    da: MetadataGitLabDA,
    fi: MetadataGitLabFI,
    ko: MetadataGitLabKO
}