import {IInfo} from "@/data/info/model/IInfo";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {LanguageOptions} from "@/data/translate/LanguageOptions";
import {AboutZH} from "@/data/about/AboutZH";
import {GalleryZH} from "@/data/gallery/GalleryZH";
import {FullStackZH} from "@/data/fullstack/FullStackZH";
import {FrontEndZH} from "@/data/frontend/FrontEndZH";
import {BusinessZH} from "@/data/business/BusinessZH";
import {ServiceZH} from "@/data/service/ServiceZH";
import {FeatureZH} from "@/data/feature/FeatureZH";
import {CloudZH} from "@/data/cloud/CloudZH";
import {NavbarZH} from "@/data/navbar/NavbarZH";
import {DevOpsZH} from "@/data/devops/DevOpsZH";
import {FooterZH} from "@/data/footer/FooterZH";
import {Web3ZH} from "@/data/web3/Web3ZH";
import {PrivacyPolicyZH} from "@/data/policy/privacy-policy/PrivacyPolicyZH";
import {TermOfServiceZH} from "@/data/policy/term-of-service/TermOfServiceZH";
import {WorkplacePolicyZH} from "@/data/policy/workplace-policy/WorkplacePolicyZH";
import {CloudSolutionZH} from "@/data/cloud-solutions/CloudSolutionZH";
import {ConsentZH} from "@/data/consent/ConsentZH";
import {TransformBusinessZH} from "@/data/transform-business/TransformBusinessZH";
import {AiFahCoverZH} from "@/data/ai/fah-cover/AiFahCoverZH";
import {AiCompanionZH} from "@/data/ai/companions/AiCompanionZH";

export const InfoZH: IInfo = {
    AiCompanions: AiCompanionZH,

    Service: ServiceZH,
    Feature: FeatureZH,
    About: AboutZH,
    Cloud: CloudZH,
    Navbar: NavbarZH,

    FrontEnd: FrontEndZH,
    FullStack: FullStackZH,
    DevOps: DevOpsZH,
    Web3: Web3ZH,
    Footer: FooterZH,
    Business: BusinessZH,

    PrivacyPolicy: PrivacyPolicyZH,
    TermOfService: TermOfServiceZH,
    WorkplacePolicy: WorkplacePolicyZH,

    Recommend: Recommend2025,
    Contact: Contact2025,
    Consent: ConsentZH,

    Gallery: GalleryZH,
    Translates: LanguageOptions,
    CloudSolution: CloudSolutionZH,
    TransformBusiness: TransformBusinessZH,

    AiFahCover: AiFahCoverZH
}