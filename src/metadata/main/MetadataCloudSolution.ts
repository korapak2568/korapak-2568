import {Metadata} from "next";
import {MetadataCloudSolutionEN} from "@/metadata/pages/cloud-solution/MetadataCloudSolutionEN";
import {MetadataCloudSolutionTH} from "@/metadata/pages/cloud-solution/MetadataCloudSolutionTH";
import {MetadataCloudSolutionFR} from "@/metadata/pages/cloud-solution/MetadataCloudSolutionFR";
import {MetadataCloudSolutionJA} from "@/metadata/pages/cloud-solution/MetadataCloudSolutionJA";
import {MetadataCloudSolutionZH} from "@/metadata/pages/cloud-solution/MetadataCloudSolutionZH";
import {MetadataCloudSolutionDE} from "@/metadata/pages/cloud-solution/MetadataCloudSolutionDE";
import {MetadataCloudSolutionNL} from "@/metadata/pages/cloud-solution/MetadataCloudSolutionNL";
import {MetadataCloudSolutionDA} from "@/metadata/pages/cloud-solution/MetadataCloudSolutionDA";
import {MetadataCloudSolutionFI} from "@/metadata/pages/cloud-solution/MetadataCloudSolutionFI";
import {MetadataCloudSolutionKO} from "@/metadata/pages/cloud-solution/MetadataCloudSolutionKO";

export const MetadataCloudSolution: Record<string, Metadata> = {
    en: MetadataCloudSolutionEN,
    th: MetadataCloudSolutionTH,
    fr: MetadataCloudSolutionFR,
    ja: MetadataCloudSolutionJA,
    zh: MetadataCloudSolutionZH,
    de: MetadataCloudSolutionDE,
    nl: MetadataCloudSolutionNL,
    da: MetadataCloudSolutionDA,
    fi: MetadataCloudSolutionFI,
    ko: MetadataCloudSolutionKO
}