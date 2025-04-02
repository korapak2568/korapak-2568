import {Metadata} from "next";
import {MetadataDotnetCoreEN} from "@/metadata/pages/backend/dotnet/MetadataDotnetCoreEN";
import {MetadataDotnetCoreTH} from "@/metadata/pages/backend/dotnet/MetadataDotnetCoreTH";
import {MetadataDotnetCoreFI} from "@/metadata/pages/backend/dotnet/MetadataDotnetCoreFI";
import {MetadataDotnetCoreFR} from "@/metadata/pages/backend/dotnet/MetadataDotnetCoreFR";
import {MetadataDotnetCoreJA} from "@/metadata/pages/backend/dotnet/MetadataDotnetCoreJA";
import {MetadataDotnetCoreVI} from "@/metadata/pages/backend/dotnet/MetadataDotnetCoreVI";
import {MetadataDotnetCoreZH} from "@/metadata/pages/backend/dotnet/MetadataDotnetCoreZH";
import {MetadataDotnetCoreDE} from "@/metadata/pages/backend/dotnet/MetadataDotnetCoreDE";
import {MetadataDotnetCoreNL} from "@/metadata/pages/backend/dotnet/MetadataDotnetCoreNL";
import {MetadataDotnetCoreDA} from "@/metadata/pages/backend/dotnet/MetadataDotnetCoreDA";
import {MetadataDotnetCoreKO} from "@/metadata/pages/backend/dotnet/MetadataDotnetCoreKO";

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