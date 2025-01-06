import {IAiDetail} from "@/data/ai/model/IAiDetail";
import {IAiFah} from "@/data/ai/model/companions/fah/IAiFah";
import {IAiBuakaew} from "@/data/ai/model/companions/buakaew/IAiBuakaew";
import {IAiAom} from "@/data/ai/model/companions/aom/IAiAom";
import {IAiPloy} from "@/data/ai/model/companions/ploy/IAiPloy";
import {IAiTonnam} from "@/data/ai/model/companions/tonnam/IAiTonnam";
import {IAiMilk} from "@/data/ai/model/companions/milk/IAiMilk";
import {IAiLanding} from "@/data/ai/model/landing/IAiLanding";

export interface IAiCompanions {
    fah: IAiFah,
    buakaew: IAiBuakaew,
    aom: IAiAom,
    ploy: IAiPloy,
    tonnam: IAiTonnam,
    milk: IAiMilk,

    english: IAiDetail[],
    landing: {
        fah: IAiLanding,
        buakaew: IAiLanding,
        aom: IAiLanding,
        ploy: IAiLanding,
        tonnam: IAiLanding,
        milk: IAiLanding
    }
}