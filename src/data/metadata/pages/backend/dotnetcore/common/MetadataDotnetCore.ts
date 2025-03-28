import {Metadata} from "next";
import {MetadataDotnetCoreEN} from "@/data/metadata/pages/backend/dotnetcore/MetadataDotnetCoreEN";
import {MetadataDotnetCoreTH} from "@/data/metadata/pages/backend/dotnetcore/MetadataDotnetCoreTH";
import {MetadataDotnetCoreFI} from "@/data/metadata/pages/backend/dotnetcore/MetadataDotnetCoreFI";
import {MetadataDotnetCoreFR} from "@/data/metadata/pages/backend/dotnetcore/MetadataDotnetCoreFR";
import {MetadataDotnetCoreJA} from "@/data/metadata/pages/backend/dotnetcore/MetadataDotnetCoreJA";
import {MetadataDotnetCoreVI} from "@/data/metadata/pages/backend/dotnetcore/MetadataDotnetCoreVI";
import {MetadataDotnetCoreZH} from "@/data/metadata/pages/backend/dotnetcore/MetadataDotnetCoreZH";
import {MetadataDotnetCoreDE} from "@/data/metadata/pages/backend/dotnetcore/MetadataDotnetCoreDE";
import {MetadataDotnetCoreNL} from "@/data/metadata/pages/backend/dotnetcore/MetadataDotnetCoreNL";
import {MetadataDotnetCoreDA} from "@/data/metadata/pages/backend/dotnetcore/MetadataDotnetCoreDA";
import {MetadataDotnetCoreKO} from "@/data/metadata/pages/backend/dotnetcore/MetadataDotnetCoreKO";

export const MetadataDotnetCore: Record<string, Metadata> = {
    'en': MetadataDotnetCoreEN,
    'th': MetadataDotnetCoreTH,
    'fr': MetadataDotnetCoreFR,
    'ja': MetadataDotnetCoreJA,
    'vi': MetadataDotnetCoreVI,
    'zh': MetadataDotnetCoreZH,
    'de': MetadataDotnetCoreDE,
    'nl': MetadataDotnetCoreNL,
    'da': MetadataDotnetCoreDA,
    'fi': MetadataDotnetCoreFI,
    'ko': MetadataDotnetCoreKO
}