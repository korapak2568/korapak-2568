import {ELanguage} from "@/data/language/enum/ELanguage";
import {IAi} from "@/data/ai/model/IAi";

export interface ILanguage {
    label: string,
    value: ELanguage,
    ai: IAi
}