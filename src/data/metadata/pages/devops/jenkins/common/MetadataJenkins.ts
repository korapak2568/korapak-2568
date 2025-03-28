import {Metadata} from "next";
import {MetadataJenkinsEN} from "@/data/metadata/pages/devops/jenkins/MetadataJenkinsEN";
import {MetadataJenkinsTH} from "@/data/metadata/pages/devops/jenkins/MetadataJenkinsTH";
import {MetadataJenkinsFI} from "@/data/metadata/pages/devops/jenkins/MetadataJenkinsFI";
import {MetadataJenkinsFR} from "@/data/metadata/pages/devops/jenkins/MetadataJenkinsFR";
import {MetadataJenkinsJA} from "@/data/metadata/pages/devops/jenkins/MetadataJenkinsJA";
import {MetadataJenkinsVI} from "@/data/metadata/pages/devops/jenkins/MetadataJenkinsVI";
import {MetadataJenkinsZH} from "@/data/metadata/pages/devops/jenkins/MetadataJenkinsZH";
import {MetadataJenkinsDE} from "@/data/metadata/pages/devops/jenkins/MetadataJenkinsDE";
import {MetadataJenkinsNL} from "@/data/metadata/pages/devops/jenkins/MetadataJenkinsNL";
import {MetadataJenkinsDA} from "@/data/metadata/pages/devops/jenkins/MetadataJenkinsDA";
import {MetadataJenkinsKO} from "@/data/metadata/pages/devops/jenkins/MetadataJenkinsKO";

export const MetadataJenkins: Record<string, Metadata> = {
    'en': MetadataJenkinsEN,
    'th': MetadataJenkinsTH,
    'fr': MetadataJenkinsFR,
    'ja': MetadataJenkinsJA,
    'vi': MetadataJenkinsVI,
    'zh': MetadataJenkinsZH,
    'de': MetadataJenkinsDE,
    'nl': MetadataJenkinsNL,
    'da': MetadataJenkinsDA,
    'fi': MetadataJenkinsFI,
    'ko': MetadataJenkinsKO
}