import {IInfo} from "@/data/info/model/IInfo";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {Image} from "@/data/image/Image";
import {Translates} from "@/data/translate/Translates";
import {AiCompanionKO} from "@/data/ai/companions/AiCompanionKO";
import {ServiceKO} from "@/data/service/ServiceKO";
import {FeatureKO} from "@/data/feature/FeatureKO";
import {AboutKO} from "@/data/about/AboutKO";
import {CloudKO} from "@/data/cloud/CloudKO";
import {NavbarKO} from "@/data/navbar/NavbarKO";
import {FrontEndKO} from "@/data/frontend/FrontEndKO";
import {FullStackKO} from "@/data/fullstack/FullStackKO";
import {DevOpsKO} from "@/data/devops/DevOpsKO";
import {Web3KO} from "@/data/web3/Web3KO";
import {FooterKO} from "@/data/footer/FooterKO";
import {BusinessKO} from "@/data/business/BusinessKO";
import {PrivacyPolicyKO} from "@/data/policy/privacy-policy/PrivacyPolicyKO";
import {TermOfServiceKO} from "@/data/policy/term-of-service/TermOfServiceKO";
import {WorkplacePolicyKO} from "@/data/policy/workplace-policy/WorkplacePolicyKO";
import {ConsentKO} from "@/data/consent/ConsentKO";
import {GalleryKO} from "@/data/gallery/GalleryKO";
import {CloudSolutionKO} from "@/data/cloud-solutions/CloudSolutionKO";
import {TransformBusinessKO} from "@/data/transform-business/TransformBusinessKO";
import {AiFahCoverKO} from "@/data/ai/fah-cover/AiFahCoverKO";

export const InfoKO: IInfo = {
    AiCompanions: AiCompanionKO,

    Service: ServiceKO,
    Feature: FeatureKO,
    About: AboutKO,
    Cloud: CloudKO,
    Navbar: NavbarKO,

    FrontEnd: FrontEndKO,
    FullStack: FullStackKO,
    DevOps: DevOpsKO,
    Web3: Web3KO,

    Recommend: Recommend2025,
    Footer: FooterKO,
    Business: BusinessKO,

    PrivacyPolicy: PrivacyPolicyKO,
    TermOfService: TermOfServiceKO,
    WorkplacePolicy: WorkplacePolicyKO,

    Contact: Contact2025,
    Consent: ConsentKO,

    Images: Image,

    Gallery: GalleryKO,
    Translates,
    CloudSolution: CloudSolutionKO,
    TransformBusiness: TransformBusinessKO,

    AiFahCover: AiFahCoverKO
}