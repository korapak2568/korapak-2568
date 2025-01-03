import {ELanguage} from "@/data/enum/ELanguage";
import {IAiAll} from "@/data/model/ai/IAi";

export interface ILanguage {
    label: string,
    value: ELanguage,
    ai: IAiAll
}