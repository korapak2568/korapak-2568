import {ILanguage} from "@/data/language/model/ILanguage";
import {ELanguage} from "@/data/language/enum/ELanguage";
import {AiFahEnglish} from "@/data/ai/companions/fah/AiFahEnglish";
import {AiBuakaewEnglish} from "@/data/ai/companions/buakaew/AiBuakaewEnglish";
import {AiAomEnglish} from "@/data/ai/companions/aom/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/companions/ploy/AiPloyEnglish";
import {AiTonnamEnglish} from "@/data/ai/companions/tonnam/AiTonnamEnglish";
import {AiMilkEnglish} from "@/data/ai/companions/milk/AiMilkEnglish";

export const LanguageEnglish: ILanguage = {
    label: "English",
    value: ELanguage.english,
    fah: AiFahEnglish,
    buakaew: AiBuakaewEnglish,
    aom: AiAomEnglish,
    ploy: AiPloyEnglish,
    tonnam: AiTonnamEnglish,
    milk: AiMilkEnglish,
}