import {IInfo} from "@/data/info/model/IInfo";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {LanguageOptions} from "@/data/translate/LanguageOptions";
import {AiCompanionFI} from "@/data/ai/companions/AiCompanionFI";
import {ServiceFI} from "@/data/service/ServiceFI";
import {FeatureFI} from "@/data/feature/FeatureFI";
import {AboutFI} from "@/data/about/AboutFI";
import {CloudFI} from "@/data/cloud/CloudFI";
import {NavbarFI} from "@/data/navbar/NavbarFI";
import {FrontEndFI} from "@/data/frontend/FrontEndFI";
import {FullStackFI} from "@/data/fullstack/FullStackFI";
import {DevOpsFI} from "@/data/devops/DevOpsFI";
import {Web3FI} from "@/data/web3/Web3FI";
import {FooterFI} from "@/data/footer/FooterFI";
import {BusinessFI} from "@/data/business/BusinessFI";
import {TermOfServiceFI} from "@/data/policy/term-of-service/TermOfServiceFI";
import {PrivacyPolicyFI} from "@/data/policy/privacy-policy/PrivacyPolicyFI";
import {WorkplacePolicyFI} from "@/data/policy/workplace-policy/WorkplacePolicyFI";
import {GalleryFI} from "@/data/gallery/GalleryFI";
import {CloudSolutionFI} from "@/data/cloud-solutions/CloudSolutionFI";
import {TransformBusinessFI} from "@/data/transform-business/TransformBusinessFI";
import {AiFahCoverFI} from "@/data/ai/fah-cover/AiFahCoverFI";
import {ConsentFI} from "@/data/consent/ConsentFI";

export const InfoFI: IInfo = {
    AiCompanions: AiCompanionFI,

    Service: ServiceFI,
    Feature: FeatureFI,
    About: AboutFI,
    Cloud: CloudFI,
    Navbar: NavbarFI,

    FrontEnd: FrontEndFI,
    FullStack: FullStackFI,
    DevOps: DevOpsFI,
    Web3: Web3FI,

    Recommend: Recommend2025,
    Footer: FooterFI,
    Business: BusinessFI,

    PrivacyPolicy: PrivacyPolicyFI,
    TermOfService: TermOfServiceFI,
    WorkplacePolicy: WorkplacePolicyFI,

    Contact: Contact2025,
    Consent: ConsentFI,

    Gallery: GalleryFI,
    Translates: LanguageOptions,
    CloudSolution: CloudSolutionFI,
    TransformBusiness: TransformBusinessFI,

    AiFahCover: AiFahCoverFI
}