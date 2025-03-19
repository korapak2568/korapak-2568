import {IInfo} from "@/data/info/model/IInfo";
import {Languages} from "@/data/language/Languages";
import {Service2025} from "@/data/service/Service2025";
import {Cloud2025} from "@/data/cloud/Cloud2025";
import {FullStack2025} from "@/data/fullstack/FullStack2025";
import {FrontEnd2025} from "@/data/frontend/FrontEnd2025";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Footer} from "@/data/footer/Footer";
import {Business2025} from "@/data/business/Business2025";
import {PrivacyPolicy} from "@/data/policy/privacy-policy/PrivacyPolicy";
import {TermOfService} from "@/data/policy/term-of-service/TermOfService";
import {DevOps2025} from "@/data/devops/DevOps2025";
import {WorkplacePolicy} from "@/data/policy/workplace-policy/WorkplacePolicy";
import {Contact2025} from "@/data/contact/Contact2025";
import {AboutEN} from "@/data/about/AboutEN";
import {Image} from "@/data/image/Image";
import {AiCompanions} from "@/data/ai/AiCompanions";
import {Web3} from "@/data/web3/Web3";
import {Gallery} from "@/data/gallery/Gallery";
import {Translates} from "@/data/translate/Translates";
import {Navbar2025} from "@/data/navbar/Navbar2025";
import {CloudSolutionEN} from "@/data/cloud-solutions/CloudSolutionEN";
import {ConsentEN} from "@/data/consent/ConsentEN";
import {FeatureEN} from "@/data/feature/FeatureEN";

export const Info: IInfo = {
    Languages,

    AiCompanions,

    Service: Service2025,
    Feature: FeatureEN,
    About: AboutEN,
    Cloud: Cloud2025,
    Navbar: Navbar2025,

    FrontEnd: FrontEnd2025,
    FullStack: FullStack2025,
    DevOps: DevOps2025,
    Web3,

    Recommend: Recommend2025,
    Footer: Footer,
    Business: Business2025,

    PrivacyPolicy: PrivacyPolicy,
    TermOfService: TermOfService,
    WorkplacePolicy: WorkplacePolicy,

    Contact: Contact2025,
    Consent: ConsentEN,

    Images: Image,

    Gallery: Gallery,
    Translates,
    CloudSolution: CloudSolutionEN
}