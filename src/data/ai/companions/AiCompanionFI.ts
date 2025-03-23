import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFahFI} from "@/data/ai/companions/fah/AiFahFI";
import {AiAomFI} from "@/data/ai/companions/aom/AiAomFI";
import {AiPloyFI} from "@/data/ai/companions/ploy/AiPloyFI";

export const AiCompanionFI: IAiCompanions = {
    fah: AiFahFI,
    aom: AiAomFI,
    ploy: AiPloyFI,
}