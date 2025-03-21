import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFahZH} from "@/data/ai/companions/fah/AiFahZH";
import {AiAomZH} from "@/data/ai/companions/aom/AiAomZH";
import {AiPloyZH} from "@/data/ai/companions/ploy/AiPloyZH";

export const AiCompanionZH: IAiCompanions = {
    fah: AiFahZH,
    aom: AiAomZH,
    ploy: AiPloyZH
}