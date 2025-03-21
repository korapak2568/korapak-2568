import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFahEN} from "@/data/ai/companions/fah/AiFahEN";
import {AiAomEN} from "@/data/ai/companions/aom/AiAomEN";
import {AiPloyEN} from "@/data/ai/companions/ploy/AiPloyEN";
export const AiCompanionEN: IAiCompanions = {
    fah: AiFahEN,
    aom: AiAomEN,
    ploy: AiPloyEN,
}