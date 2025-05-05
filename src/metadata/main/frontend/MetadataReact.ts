import {Metadata} from "next";
import {MetadataReactEN} from "@/metadata/pages/frontend/react/MetadataReactEN";
import {MetadataReactTH} from "@/metadata/pages/frontend/react/MetadataReactTH";
import {MetadataReactFI} from "@/metadata/pages/frontend/react/MetadataReactFI";
import {MetadataReactFR} from "@/metadata/pages/frontend/react/MetadataReactFR";
import {MetadataReactJA} from "@/metadata/pages/frontend/react/MetadataReactJA";
import {MetadataReactVI} from "@/metadata/pages/frontend/react/MetadataReactVI";
import {MetadataReactZH} from "@/metadata/pages/frontend/react/MetadataReactZH";
import {MetadataReactDE} from "@/metadata/pages/frontend/react/MetadataReactDE";
import {MetadataReactNL} from "@/metadata/pages/frontend/react/MetadataReactNL";
import {MetadataReactDA} from "@/metadata/pages/frontend/react/MetadataReactDA";
import {MetadataReactKO} from "@/metadata/pages/frontend/react/MetadataReactKO";

export const MetadataReact: Record<string, Metadata> = {
    en: MetadataReactEN,
    th: MetadataReactTH,
    fr: MetadataReactFR,
    ja: MetadataReactJA,
    vi: MetadataReactVI,
    zh: MetadataReactZH,
    de: MetadataReactDE,
    nl: MetadataReactNL,
    da: MetadataReactDA,
    fi: MetadataReactFI,
    ko: MetadataReactKO
}