import {IInfo} from "@/data/info/model/IInfo";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {AboutEN} from "@/data/about/AboutEN";
import {LanguageOptions} from "@/data/translate/LanguageOptions";
import {GalleryEN} from "@/data/gallery/GalleryEN";
import {FullStackEN} from "@/data/fullstack/FullStackEN";
import {FrontEndEN} from "@/data/frontend/FrontEndEN";
import {BusinessEN} from "@/data/business/BusinessEN";
import {ServiceEN} from "@/data/service/ServiceEN";
import {FeatureEN} from "@/data/feature/FeatureEN";
import {CloudEN} from "@/data/cloud/CloudEN";
import {NavbarEN} from "@/data/navbar/NavbarEN";
import {DevOpsEN} from "@/data/devops/DevOpsEN";
import {FooterEN} from "@/data/footer/FooterEN";
import {Web3EN} from "@/data/web3/Web3EN";
import {PrivacyPolicyEN} from "@/data/policy/privacy-policy/PrivacyPolicyEN";
import {TermOfServiceEN} from "@/data/policy/term-of-service/TermOfServiceEN";
import {WorkplacePolicyEN} from "@/data/policy/workplace-policy/WorkplacePolicyEN";
import {CloudSolutionEN} from "@/data/cloud-solutions/CloudSolutionEN";
import {ConsentEN} from "@/data/consent/ConsentEN";
import {TransformBusinessEN} from "@/data/transform-business/TransformBusinessEN";
import {AiFahCoverEN} from "@/data/ai/fah-cover/AiFahCoverEN";
import {AiCompanionEN} from "@/data/ai/companions/AiCompanionEN";

export const InfoEN: IInfo = {
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

    Recommend: Recommend2025,
    Footer: FooterEN,
    Business: BusinessEN,

    PrivacyPolicy: PrivacyPolicyEN,
    TermOfService: TermOfServiceEN,
    WorkplacePolicy: WorkplacePolicyEN,

    Contact: Contact2025,
    Consent: ConsentEN,

    Gallery: GalleryEN,
    Translates: LanguageOptions,
    CloudSolution: CloudSolutionEN,
    TransformBusiness: TransformBusinessEN,

    AiFahCover: AiFahCoverEN
}