import {ILanguage} from "@/data/model/language/ILanguage";
import {ELanguage} from "@/data/enum/ELanguage";
import {AiThai} from "@/data/info/AI/AiThai";
import {AiEnglish} from "@/data/info/AI/AiEnglish";
import {AiChinese} from "@/data/info/AI/AiChinese";
import {AiJapanese} from "@/data/info/AI/AiJapanese";
import {AiKorean} from "@/data/info/AI/AiKorean";
import {AiFrench} from "@/data/info/AI/AiFrench";

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