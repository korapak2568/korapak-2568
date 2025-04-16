import {IInfo} from "@/data/info/model/IInfo";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {LanguageOptions} from "@/data/translate/LanguageOptions";
import {AboutFR} from "@/data/about/AboutFR";
import {GalleryFR} from "@/data/gallery/GalleryFR";
import {FullStackFR} from "@/data/fullstack/FullStackFR";
import {FrontEndFR} from "@/data/frontend/FrontEndFR";
import {BusinessFR} from "@/data/business/BusinessFR";
import {ServiceFR} from "@/data/service/ServiceFR";
import {FeatureFR} from "@/data/feature/FeatureFR";
import {CloudFR} from "@/data/cloud/CloudFR";
import {NavbarFR} from "@/data/navbar/NavbarFR";
import {DevOpsFR} from "@/data/devops/DevOpsFR";
import {FooterFR} from "@/data/footer/FooterFR";
import {Web3FR} from "@/data/web3/Web3FR";
import {PrivacyPolicyFR} from "@/data/policy/privacy-policy/PrivacyPolicyFR";
import {TermOfServiceFR} from "@/data/policy/term-of-service/TermOfServiceFR";
import {WorkplacePolicyFR} from "@/data/policy/workplace-policy/WorkplacePolicyFR";
import {CloudSolutionFR} from "@/data/cloud-solutions/CloudSolutionFR";
import {ConsentFR} from "@/data/consent/ConsentFR";
import {TransformBusinessFR} from "@/data/transform-business/TransformBusinessFR";
import {AiFahCoverFR} from "@/data/ai/fah-cover/AiFahCoverFR";
import {AiCompanionFR} from "@/data/ai/companions/AiCompanionFR";

export const InfoFR: IInfo = {
    AiCompanions: AiCompanionFR,

    Service: ServiceFR,
    Feature: FeatureFR,
    About: AboutFR,
    Cloud: CloudFR,
    Navbar: NavbarFR,

    FrontEnd: FrontEndFR,
    FullStack: FullStackFR,
    DevOps: DevOpsFR,
    Web3: Web3FR,

    Recommend: Recommend2025,
    Footer: FooterFR,
    Business: BusinessFR,

    PrivacyPolicy: PrivacyPolicyFR,
    TermOfService: TermOfServiceFR,
    WorkplacePolicy: WorkplacePolicyFR,

    Contact: Contact2025,
    Consent: ConsentFR,

    Gallery: GalleryFR,
    Translates: LanguageOptions,
    CloudSolution: CloudSolutionFR,
    TransformBusiness: TransformBusinessFR,

    AiFahCover: AiFahCoverFR
}