import {Metadata} from "next";
import {MetadataServicePackagesEN} from "../pages/service-packages/MetadataServicePackagesEN";
import {MetadataServicePackagesTH} from "@/metadata/pages/service-packages/MetadataServicePackagesTH";
import {MetadataServicePackagesFR} from "@/metadata/pages/service-packages/MetadataServicePackagesFR";
import {MetadataServicePackagesJA} from "@/metadata/pages/service-packages/MetadataServicePackagesJA";
import {MetadataServicePackagesZH} from "@/metadata/pages/service-packages/MetadataServicePackagesZH";
import {MetadataServicePackagesDE} from "@/metadata/pages/service-packages/MetadataServicePackagesDE";
import {MetadataServicePackagesNL} from "@/metadata/pages/service-packages/MetadataServicePackagesNL";
import {MetadataServicePackagesDA} from "@/metadata/pages/service-packages/MetadataServicePackagesDA";
import {MetadataServicePackagesFI} from "@/metadata/pages/service-packages/MetadataServicePackagesFI";
import {MetadataServicePackagesKO} from "@/metadata/pages/service-packages/MetadataServicePackagesKO";

export const MetadataServicePackages: Record<string, Metadata> = {
    en: MetadataServicePackagesEN,
    th: MetadataServicePackagesTH,
    fr: MetadataServicePackagesFR,
    ja: MetadataServicePackagesJA,
    zh: MetadataServicePackagesZH,
    de: MetadataServicePackagesDE,
    nl: MetadataServicePackagesNL,
    da: MetadataServicePackagesDA,
    fi: MetadataServicePackagesFI,
    ko: MetadataServicePackagesKO
}