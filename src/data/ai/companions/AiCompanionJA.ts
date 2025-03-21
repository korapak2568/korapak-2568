import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFahJA} from "@/data/ai/companions/fah/AiFahJA";
import {AiAomJA} from "@/data/ai/companions/aom/AiAomJA";
import {AiPloyJA} from "@/data/ai/companions/ploy/AiPloyJA";

export const AiCompanionJA: IAiCompanions = {
    fah: AiFahJA,
    aom: AiAomJA,
    ploy: AiPloyJA
}