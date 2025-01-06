import {IInfo} from "@/data/info/model/IInfo";
import {Languages} from "@/data/language/Languages";
import {Service2025} from "@/data/service/Service2025";
import {Feature2025} from "@/data/feature/Feature2025";
import {Cloud2025} from "@/data/cloud/Cloud2025";
import {FullStack2025} from "@/data/fullstack/FullStack2025";
import {FrontEnd2025} from "@/data/frontend/FrontEnd2025";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Footer} from "@/data/footer/Footer";
import {Business2025} from "@/data/business/Business2025";
import {PrivacyPolicy} from "@/data/policy/PrivacyPolicy";
import {TermOfService} from "@/data/policy/TermOfService";
import {DevOps2025} from "@/data/devops/DevOps2025";
import {WorkplacePolicy} from "@/data/policy/WorkplacePolicy";
import {Contact2025} from "@/data/contact/Contact2025";
import {Consent2025} from "@/data/consent/Consent2025";
import {About2025} from "@/data/about/About2025";
import {Image} from "@/data/image/Image";
import {AiCompanions} from "@/data/ai/AiCompanions";

export const Info: IInfo = {
    Languages,

    AiCompanions,

    Service: Service2025,
    Feature: Feature2025,
    About: About2025,
    Cloud: Cloud2025,

    FrontEnd: FrontEnd2025,
    FullStack: FullStack2025,
    DevOps: DevOps2025,

    Recommend: Recommend2025,
    Footer: Footer,
    Business: Business2025,

    PrivacyPolicy: PrivacyPolicy,
    TermOfService: TermOfService,
    WorkplacePolicy: WorkplacePolicy,

    Contact: Contact2025,
    Consent: Consent2025,

    Images: Image
}