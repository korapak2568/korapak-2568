import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFahNL} from "@/data/ai/companions/fah/AiFahNL";
import {AiAomNL} from "@/data/ai/companions/aom/AiAomNL";
import {AiPloyNL} from "@/data/ai/companions/ploy/AiPloyNL";

export const AiCompanionNL: IAiCompanions = {
    fah: AiFahNL,
    aom: AiAomNL,
    ploy: AiPloyNL,
}