import {ILanguage} from "@/data/model/language/ILanguage";
import {ELanguage} from "@/data/enum/ELanguage";
import {AiEnglish} from "@/data/info/AI/AiEnglish";

export const LanguageDefault: ILanguage = {
    label: "English",
    value: ELanguage.english,
    ai: AiEnglish
}