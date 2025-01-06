import {AiFahThai} from "@/data/ai/companions/fah/AiFahThai";
import {AiBuakaewEnglish} from "@/data/ai/companions/buakaew/AiBuakaewEnglish";
import {AiAomEnglish} from "@/data/ai/companions/aom/AiAomEnglish";
import {AiPloyEnglish} from "@/data/ai/companions/ploy/AiPloyEnglish";
import {AiTonnamEnglish} from "@/data/ai/companions/tonnam/AiTonnamEnglish";
import {AiMilkEnglish} from "@/data/ai/companions/milk/AiMilkEnglish";
import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFah} from "@/data/ai/companions/AiFah";
import {AiBuakaew} from "@/data/ai/companions/AiBuakaew";
import {AiAom} from "@/data/ai/companions/AiAom";
import {AiPloy} from "@/data/ai/companions/AiPloy";
import {AiTonnam} from "@/data/ai/companions/AiTonnam";
import {AiMilk} from "@/data/ai/companions/AiMilk";
import {AiFahLanding} from "@/data/ai/landing/AiFahLanding";
import {AiBuakaewLanding} from "@/data/ai/landing/AiBuakaewLanding";
import {AiAomLanding} from "@/data/ai/landing/AiAomLanding";
import {AiPloyLanding} from "@/data/ai/landing/AiPloyLanding";
import {AiTonnamLanding} from "@/data/ai/landing/AiTonnamLanding";
import {AiMilkLanding} from "@/data/ai/landing/AiMilkLanding";
import {AiFahEnglish} from "@/data/ai/companions/fah/AiFahEnglish";

export const AiCompanions: IAiCompanions = {
    fah: AiFah,
    buakaew: AiBuakaew,
    aom: AiAom,
    ploy: AiPloy,
    tonnam: AiTonnam,
    milk: AiMilk,

    english: [
        AiFahEnglish,
        AiBuakaewEnglish,
        AiAomEnglish,
        AiPloyEnglish,
        AiTonnamEnglish,
        AiMilkEnglish,
    ],

    landing: {
        fah: AiFahLanding,
        buakaew: AiBuakaewLanding,
        aom: AiAomLanding,
        ploy: AiPloyLanding,
        tonnam: AiTonnamLanding,
        milk: AiMilkLanding
    }
}