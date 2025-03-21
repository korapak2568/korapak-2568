import {IInfo} from "@/data/info/model/IInfo";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {AboutEN} from "@/data/about/AboutEN";
import {Image} from "@/data/image/Image";
import {Translates} from "@/data/translate/Translates";
import {CloudSolutionEN} from "@/data/cloud-solutions/CloudSolutionEN";
import {ConsentEN} from "@/data/consent/ConsentEN";
import {FeatureEN} from "@/data/feature/FeatureEN";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {BusinessEN} from "@/data/business/BusinessEN";
import {CloudEN} from "@/data/cloud/CloudEN";
import {DevOpsEN} from "@/data/devops/DevOpsEN";
import {FooterEN} from "@/data/footer/FooterEN";
import {FullStackEN} from "@/data/fullstack/FullStackEN";
import {GalleryEN} from "@/data/gallery/GalleryEN";
import {NavbarEN} from "@/data/navbar/NavbarEN";
import {PrivacyPolicyEN} from "@/data/policy/privacy-policy/PrivacyPolicyEN";
import {TermOfServiceEN} from "@/data/policy/term-of-service/TermOfServiceEN";
import {WorkplacePolicyEN} from "@/data/policy/workplace-policy/WorkplacePolicyEN";
import {ServiceEN} from "@/data/service/ServiceEN";
import {Web3EN} from "@/data/web3/Web3EN";
import {TransformBusinessEN} from "@/data/transform-business/TransformBusinessEN";
import {AiFahCoverEN} from "@/data/ai/fah-cover/AiFahCoverEN";
import {AiCompanionEN} from "@/data/ai/companions/AiCompanionEN";

export const Info: IInfo = {

    AiCompanions: AiCompanionEN,

    Service: ServiceEN,
    Feature: FeatureEN,
    About: AboutEN,
    Cloud: CloudEN,
    Navbar: NavbarEN,

    FrontEnd: FrontEndEN,
    FullStack: FullStackEN,
    DevOps: DevOpsEN,
    Web3: Web3EN,

    Footer: FooterEN,
    Business: BusinessEN,

    PrivacyPolicy: PrivacyPolicyEN,
    TermOfService: TermOfServiceEN,
    WorkplacePolicy: WorkplacePolicyEN,

    Recommend: Recommend2025,
    Contact: Contact2025,
    Consent: ConsentEN,

    Images: Image,

    Gallery: GalleryEN,
    Translates,
    CloudSolution: CloudSolutionEN,
    TransformBusiness: TransformBusinessEN,

    AiFahCover: AiFahCoverEN
}