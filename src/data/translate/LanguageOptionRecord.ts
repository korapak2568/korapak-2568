import {LanguageOptionDefinition} from "@/data/translate/LanguageOptionDefinition";
import {ILanguageOption} from "@/data/translate/model/ILanguageOption";

export const LanguageOptionRecord: Record<string, ILanguageOption> = {
    'en': LanguageOptionDefinition.en,
    'th': LanguageOptionDefinition.th,
    'fr': LanguageOptionDefinition.fr,
    'ja': LanguageOptionDefinition.ja,
    'zh': LanguageOptionDefinition.zh,
    'de': LanguageOptionDefinition.de,
    'nl': LanguageOptionDefinition.nl,
    'da': LanguageOptionDefinition.da,
    'fi': LanguageOptionDefinition.fi,
    'ko': LanguageOptionDefinition.ko
}