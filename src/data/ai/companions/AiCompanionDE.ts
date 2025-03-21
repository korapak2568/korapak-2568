import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFahDE} from "@/data/ai/companions/fah/AiFahDE";
import {AiAomDE} from "@/data/ai/companions/aom/AiAomDE";
import {AiPloyDE} from "@/data/ai/companions/ploy/AiPloyDE";

export const AiCompanionDE: IAiCompanions = {
    fah: AiFahDE,
    aom: AiAomDE,
    ploy: AiPloyDE,
}