import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFahTH} from "@/data/ai/companions/fah/AiFahTH";
import {AiAomTH} from "@/data/ai/companions/aom/AiAomTH";
import {AiPloyTH} from "@/data/ai/companions/ploy/AiPloyTH";

export const AiCompanionTH: IAiCompanions = {
    fah: AiFahTH,
    aom: AiAomTH,
    ploy: AiPloyTH,
}