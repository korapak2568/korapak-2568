import {Metadata} from "next";
import {MetadataReactEN} from "@/data/metadata/pages/frontend/react/MetadataReactEN";
import {MetadataReactTH} from "@/data/metadata/pages/frontend/react/MetadataReactTH";
import {MetadataReactFI} from "@/data/metadata/pages/frontend/react/MetadataReactFI";
import {MetadataReactFR} from "@/data/metadata/pages/frontend/react/MetadataReactFR";
import {MetadataReactJA} from "@/data/metadata/pages/frontend/react/MetadataReactJA";
import {MetadataReactVI} from "@/data/metadata/pages/frontend/react/MetadataReactVI";
import {MetadataReactZH} from "@/data/metadata/pages/frontend/react/MetadataReactZH";
import {MetadataReactDE} from "@/data/metadata/pages/frontend/react/MetadataReactDE";
import {MetadataReactNL} from "@/data/metadata/pages/frontend/react/MetadataReactNL";
import {MetadataReactDA} from "@/data/metadata/pages/frontend/react/MetadataReactDA";
import {MetadataReactKO} from "@/data/metadata/pages/frontend/react/MetadataReactKO";

export const MetadataReact: Record<string, Metadata> = {
    'en': MetadataReactEN,
    'th': MetadataReactTH,
    'fr': MetadataReactFR,
    'ja': MetadataReactJA,
    'vi': MetadataReactVI,
    'zh': MetadataReactZH,
    'de': MetadataReactDE,
    'nl': MetadataReactNL,
    'da': MetadataReactDA,
    'fi': MetadataReactFI,
    'ko': MetadataReactKO
}