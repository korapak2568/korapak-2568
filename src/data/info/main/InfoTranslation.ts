import {IInfo} from "@/data/info/model/IInfo";
import {InfoEN} from "@/data/info/InfoEN";
import {InfoTH} from "@/data/info/InfoTH";
import {InfoFR} from "@/data/info/InfoFR";
import {InfoJA} from "@/data/info/InfoJA";
import {InfoVI} from "@/data/info/InfoVI";
import {InfoZH} from "@/data/info/InfoZH";
import {InfoDE} from "@/data/info/InfoDE";
import {InfoNL} from "@/data/info/InfoNL";
import {InfoDA} from "@/data/info/InfoDA";

export const InfoTranslation: Record<string, IInfo> = {
    'en': InfoEN,
    'th': InfoTH,
    'fr': InfoFR,
    'ja': InfoJA,
    'vi': InfoVI,
    'zh': InfoZH,
    'de': InfoDE,
    'nl': InfoNL,
    'da': InfoDA,
}