import {Metadata} from "next";
import {MetadataJenkinsEN} from "@/metadata/pages/devops/jenkins/MetadataJenkinsEN";
import {MetadataJenkinsTH} from "@/metadata/pages/devops/jenkins/MetadataJenkinsTH";
import {MetadataJenkinsFI} from "@/metadata/pages/devops/jenkins/MetadataJenkinsFI";
import {MetadataJenkinsFR} from "@/metadata/pages/devops/jenkins/MetadataJenkinsFR";
import {MetadataJenkinsJA} from "@/metadata/pages/devops/jenkins/MetadataJenkinsJA";
import {MetadataJenkinsVI} from "@/metadata/pages/devops/jenkins/MetadataJenkinsVI";
import {MetadataJenkinsZH} from "@/metadata/pages/devops/jenkins/MetadataJenkinsZH";
import {MetadataJenkinsDE} from "@/metadata/pages/devops/jenkins/MetadataJenkinsDE";
import {MetadataJenkinsNL} from "@/metadata/pages/devops/jenkins/MetadataJenkinsNL";
import {MetadataJenkinsDA} from "@/metadata/pages/devops/jenkins/MetadataJenkinsDA";
import {MetadataJenkinsKO} from "@/metadata/pages/devops/jenkins/MetadataJenkinsKO";

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