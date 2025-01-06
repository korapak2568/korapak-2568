import {IAiFah} from "@/data/ai/model/companions/fah/IAiFah";
import {AiFahEnglish} from "@/data/ai/companions/fah/AiFahEnglish";
import {AiFahChinese} from "@/data/ai/companions/fah/AiFahChinese";
import {AiFahKorean} from "@/data/ai/companions/fah/AiFahKorean";
import {AiFahThai} from "@/data/ai/companions/fah/AiFahThai";
import {AiFahFrench} from "@/data/ai/companions/fah/AiFahFrench";
import {AiFahJapanese} from "@/data/ai/companions/fah/AiFahJapanese";
import {AiFahVietnam} from "@/data/ai/companions/fah/AiFahVietnam";

export const AiFah: IAiFah = {
    chinese: AiFahChinese,
    english: AiFahEnglish,
    korean: AiFahKorean,
    thai: AiFahThai,
    french: AiFahFrench,
    japanese: AiFahJapanese,
    vietnamese: AiFahVietnam,
}