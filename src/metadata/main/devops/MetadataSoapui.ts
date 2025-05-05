import {Metadata} from "next";
import {MetadataSoapUIEN} from "@/metadata/pages/devops/soapui/MetadataSoapUIEN";
import {MetadataSoapUITH} from "@/metadata/pages/devops/soapui/MetadataSoapUITH";
import {MetadataSoapUIFI} from "@/metadata/pages/devops/soapui/MetadataSoapUIFI";
import {MetadataSoapUIFR} from "@/metadata/pages/devops/soapui/MetadataSoapUIFR";
import {MetadataSoapUIJA} from "@/metadata/pages/devops/soapui/MetadataSoapUIJA";
import {MetadataSoapUIVI} from "@/metadata/pages/devops/soapui/MetadataSoapUIVI";
import {MetadataSoapUIZH} from "@/metadata/pages/devops/soapui/MetadataSoapUIZH";
import {MetadataSoapUIDE} from "@/metadata/pages/devops/soapui/MetadataSoapUIDE";
import {MetadataSoapUINL} from "@/metadata/pages/devops/soapui/MetadataSoapUINL";
import {MetadataSoapUIDA} from "@/metadata/pages/devops/soapui/MetadataSoapUIDA";
import {MetadataSoapUIKO} from "@/metadata/pages/devops/soapui/MetadataSoapUIKO";

export const MetadataSoapUI: Record<string, Metadata> = {
    en: MetadataSoapUIEN,
    th: MetadataSoapUITH,
    fr: MetadataSoapUIFR,
    ja: MetadataSoapUIJA,
    vi: MetadataSoapUIVI,
    zh: MetadataSoapUIZH,
    de: MetadataSoapUIDE,
    nl: MetadataSoapUINL,
    da: MetadataSoapUIDA,
    fi: MetadataSoapUIFI,
    ko: MetadataSoapUIKO
}