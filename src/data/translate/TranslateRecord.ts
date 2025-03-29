import {ITranslate} from "@/data/translate/model/ITranslate";
import {Languages} from "@/data/translate/Languages";

export const TranslateRecord: Record<string, ITranslate> = {
    'en': Languages.en,
    'th': Languages.th,
    'fr': Languages.fr,
    'ja': Languages.ja,
    'vi': Languages.vi,
    'zh': Languages.zh,
    'de': Languages.de,
    'nl': Languages.nl,
    'da': Languages.da,
    'fi': Languages.fi,
    'ko': Languages.ko
}