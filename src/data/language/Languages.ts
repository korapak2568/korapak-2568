import {ILanguage} from "@/data/language/model/ILanguage";
import {ELanguage} from "@/data/language/enum/ELanguage";
import {AiFahThai} from "@/data/ai/companions/fah/AiFahThai";
import {AiFahEnglish} from "@/data/ai/companions/fah/AiFahEnglish";
import {AiFahChinese} from "@/data/ai/companions/fah/AiFahChinese";
import {AiFahJapanese} from "@/data/ai/companions/fah/AiFahJapanese";
import {AiFahKorean} from "@/data/ai/companions/fah/AiFahKorean";
import {AiFahFrench} from "@/data/ai/companions/fah/AiFahFrench";
import {AiBuakaewEnglish} from "@/data/ai/companions/buakaew/AiBuakaewEnglish";
import {AiAomEnglish} from "@/data/ai/companions/aom/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/companions/ploy/AiPloyEnglish";
import {AiTonnamEnglish} from "@/data/ai/companions/tonnam/AiTonnamEnglish";
import {AiMilkEnglish} from "@/data/ai/companions/milk/AiMilkEnglish";

export const Languages: ILanguage[] = [
    {
        label: "ไทย",
        value: ELanguage.thai,
        fah: AiFahThai,
        buakaew: AiBuakaewEnglish,
        aom: AiAomEnglish,
        ploy: AiPloyEnglish,
        tonnam: AiTonnamEnglish,
        milk: AiMilkEnglish,
    },
    {
        label: "English",
        value: ELanguage.english,
        fah: AiFahEnglish,
        buakaew: AiBuakaewEnglish,
        aom: AiAomEnglish,
        ploy: AiPloyEnglish,
        tonnam: AiTonnamEnglish,
        milk: AiMilkEnglish,
    },
    {
        label: "中文",
        value: ELanguage.chinese,
        fah: AiFahChinese,
        buakaew: AiBuakaewEnglish,
        aom: AiAomEnglish,
        ploy: AiPloyEnglish,
        tonnam: AiTonnamEnglish,
        milk: AiMilkEnglish,
    },
    {
        label: "日本語",
        value: ELanguage.japan,
        fah: AiFahJapanese,
        buakaew: AiBuakaewEnglish,
        aom: AiAomEnglish,
        ploy: AiPloyEnglish,
        tonnam: AiTonnamEnglish,
        milk: AiMilkEnglish,
    },
    {
        label: "한국어",
        value: ELanguage.korean,
        fah: AiFahKorean,
        buakaew: AiBuakaewEnglish,
        aom: AiAomEnglish,
        ploy: AiPloyEnglish,
        tonnam: AiTonnamEnglish,
        milk: AiMilkEnglish,
    },
    // {
    //     label: "French",
    //     value: ELanguage.french,
    //     fah: AiFahFrench,
    //     buakaew: AiBuakaewEnglish,
    //     aom: AiAomEnglish,
    //     ploy: AiPloyEnglish,
    //     tonnam: AiTonnamEnglish,
    //     milk: AiMilkEnglish,
    // }
]