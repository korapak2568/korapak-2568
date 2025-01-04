import {ILanguage} from "@/data/language/model/ILanguage";
import {ELanguage} from "@/data/language/enum/ELanguage";
import {AiEnglish} from "@/data/ai/AiEnglish";

export const LanguageDefault: ILanguage = {
    label: "English",
    value: ELanguage.english,
    ai: AiEnglish
}