import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {AiFahKO} from "@/data/ai/companions/fah/AiFahKO";
import {AiAomKO} from "@/data/ai/companions/aom/AiAomKO";
import {AiPloyKO} from "@/data/ai/companions/ploy/AiPloyKO";

export const AiCompanionKO: IAiCompanions = {
    fah: AiFahKO,
    aom: AiAomKO,
    ploy: AiPloyKO,
}