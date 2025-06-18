import {IInfo} from "@/data/info/model/IInfo";
import {InfoEN} from "@/data/info/InfoEN";
import {InfoTH} from "@/data/info/InfoTH";
import {InfoFR} from "@/data/info/InfoFR";
import {InfoJA} from "@/data/info/InfoJA";
import {InfoZH} from "@/data/info/InfoZH";
import {InfoDE} from "@/data/info/InfoDE";
import {InfoNL} from "@/data/info/InfoNL";
import {InfoDA} from "@/data/info/InfoDA";
import {InfoFI} from "@/data/info/InfoFI";
import {InfoKO} from "@/data/info/InfoKO";

export const InfoTranslation: Record<string, IInfo> = {
    'en': InfoEN,
    'th': InfoTH,
    'fr': InfoFR,
    'ja': InfoJA,
    'zh': InfoZH,
    'de': InfoDE,
    'nl': InfoNL,
    'da': InfoDA,
    'fi': InfoFI,
    'ko': InfoKO
}