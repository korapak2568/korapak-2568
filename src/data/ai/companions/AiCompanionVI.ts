import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFahVI} from "@/data/ai/companions/fah/AiFahVI";
import {AiAomVI} from "@/data/ai/companions/aom/AiAomVI";
import {AiPloyVI} from "@/data/ai/companions/ploy/AiPloyVI";

export const AiCompanionVI: IAiCompanions = {
    fah: AiFahVI,
    aom: AiAomVI,
    ploy: AiPloyVI,
}