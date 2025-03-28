import {Metadata} from "next";
import {MetadataAngularEN} from "@/data/metadata/pages/frontend/angular/MetadataAngularEN";
import {MetadataAngularTH} from "@/data/metadata/pages/frontend/angular/MetadataAngularTH";
import {MetadataAngularFI} from "@/data/metadata/pages/frontend/angular/MetadataAngularFI";
import {MetadataAngularFR} from "@/data/metadata/pages/frontend/angular/MetadataAngularFR";
import {MetadataAngularJA} from "@/data/metadata/pages/frontend/angular/MetadataAngularJA";
import {MetadataAngularVI} from "@/data/metadata/pages/frontend/angular/MetadataAngularVI";
import {MetadataAngularZH} from "@/data/metadata/pages/frontend/angular/MetadataAngularZH";
import {MetadataAngularDE} from "@/data/metadata/pages/frontend/angular/MetadataAngularDE";
import {MetadataAngularNL} from "@/data/metadata/pages/frontend/angular/MetadataAngularNL";
import {MetadataAngularDA} from "@/data/metadata/pages/frontend/angular/MetadataAngularDA";
import {MetadataAngularKO} from "@/data/metadata/pages/frontend/angular/MetadataAngularKO";

export const MetadataAngular: Record<string, Metadata> = {
    'en': MetadataAngularEN,
    'th': MetadataAngularTH,
    'fr': MetadataAngularFR,
    'ja': MetadataAngularJA,
    'vi': MetadataAngularVI,
    'zh': MetadataAngularZH,
    'de': MetadataAngularDE,
    'nl': MetadataAngularNL,
    'da': MetadataAngularDA,
    'fi': MetadataAngularFI,
    'ko': MetadataAngularKO
}