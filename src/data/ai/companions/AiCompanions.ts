import {IAiCompanions} from "@/data/ai/companions/model/IAiCompanions";
import {AiFahLanding} from "@/data/ai/landing/AiFahLanding";
import {AiBuakaewLanding} from "@/data/ai/landing/AiBuakaewLanding";
import {AiAomLanding} from "@/data/ai/landing/AiAomLanding";
import {AiPloyLanding} from "@/data/ai/landing/AiPloyLanding";
import {AiTonnamLanding} from "@/data/ai/landing/AiTonnamLanding";
import {AiMilkLanding} from "@/data/ai/landing/AiMilkLanding";

export const AiCompanions: IAiCompanions = {
    fah: AiFahLanding,
    buakaew: AiBuakaewLanding,
    aom: AiAomLanding,
    ploy: AiPloyLanding,
    tonnam: AiTonnamLanding,
    milk: AiMilkLanding
}