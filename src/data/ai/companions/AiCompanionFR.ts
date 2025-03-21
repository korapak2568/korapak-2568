import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFahFR} from "@/data/ai/companions/fah/AiFahFR";
import {AiAomFR} from "@/data/ai/companions/aom/AiAomFR";
import {AiPloyFR} from "@/data/ai/companions/ploy/AiPloyFR";

export const AiCompanionFR: IAiCompanions = {
    fah: AiFahFR,
    aom: AiAomFR,
    ploy: AiPloyFR
}