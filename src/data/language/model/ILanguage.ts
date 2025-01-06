import {ELanguage} from "@/data/language/enum/ELanguage";
import {IAiDetail} from "@/data/ai/model/IAiDetail";

export interface ILanguage {
    label: string,
    value: ELanguage,
    fah: IAiDetail,
    buakaew: IAiDetail,
    aom: IAiDetail,
    ploy: IAiDetail,
    tonnam: IAiDetail,
    milk: IAiDetail,
}