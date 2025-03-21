import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFahDA} from "@/data/ai/companions/fah/AiFahDA";
import {AiAomDA} from "@/data/ai/companions/aom/AiAomDA";
import {AiPloyDA} from "@/data/ai/companions/ploy/AiPloyDA";

export const AiCompanionDA: IAiCompanions = {
    fah: AiFahDA,
    aom: AiAomDA,
    ploy: AiPloyDA
}