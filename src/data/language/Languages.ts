import {ILanguage} from "@/data/language/model/ILanguage";
import {ELanguage} from "@/data/language/enum/ELanguage";
import {AiThai} from "@/data/ai/AiThai";
import {AiEnglish} from "@/data/ai/AiEnglish";
import {AiChinese} from "@/data/ai/AiChinese";
import {AiJapanese} from "@/data/ai/AiJapanese";
import {AiKorean} from "@/data/ai/AiKorean";
import {AiFrench} from "@/data/ai/AiFrench";

export const Languages: ILanguage[] = [
    {
        label: "ไทย",
        value: ELanguage.thai,
        ai: AiThai
    },
    {
        label: "English",
        value: ELanguage.english,
        ai: AiEnglish
    },
    {
        label: "中文",
        value: ELanguage.chinese,
        ai: AiChinese
    },
    {
        label: "日本語",
        value: ELanguage.japan,
        ai: AiJapanese
    },
    {
        label: "한국어",
        value: ELanguage.korean,
        ai: AiKorean
    },
    {
        label: "French",
        value: ELanguage.french,
        ai: AiFrench
    }
]