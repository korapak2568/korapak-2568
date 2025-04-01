import {IInfo} from "@/data/info/model/IInfo";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {Translates} from "@/data/translate/Translates";
import {AboutDE} from "@/data/about/AboutDE";
import {GalleryDE} from "@/data/gallery/GalleryDE";
import {FullStackDE} from "@/data/fullstack/FullStackDE";
import {FrontEndDE} from "@/data/frontend/FrontEndDE";
import {BusinessDE} from "@/data/business/BusinessDE";
import {ServiceDE} from "@/data/service/ServiceDE";
import {FeatureDE} from "@/data/feature/FeatureDE";
import {CloudDE} from "@/data/cloud/CloudDE";
import {NavbarDE} from "@/data/navbar/NavbarDE";
import {DevOpsDE} from "@/data/devops/DevOpsDE";
import {FooterDE} from "@/data/footer/FooterDE";
import {Web3DE} from "@/data/web3/Web3DE";
import {PrivacyPolicyDE} from "@/data/policy/privacy-policy/PrivacyPolicyDE";
import {TermOfServiceDE} from "@/data/policy/term-of-service/TermOfServiceDE";
import {WorkplacePolicyDE} from "@/data/policy/workplace-policy/WorkplacePolicyDE";
import {CloudSolutionDE} from "@/data/cloud-solutions/CloudSolutionDE";
import {ConsentDE} from "@/data/consent/ConsentDE";
import {TransformBusinessDE} from "@/data/transform-business/TransformBusinessDE";
import {AiFahCoverDE} from "@/data/ai/fah-cover/AiFahCoverDE";
import {AiCompanionDE} from "@/data/ai/companions/AiCompanionDE";

export const InfoDE: IInfo = {
    AiCompanions: AiCompanionDE,

    Service: ServiceDE,
    Feature: FeatureDE,
    About: AboutDE,
    Cloud: CloudDE,
    Navbar: NavbarDE,

    FrontEnd: FrontEndDE,
    FullStack: FullStackDE,
    DevOps: DevOpsDE,
    Web3: Web3DE,

    Recommend: Recommend2025,
    Footer: FooterDE,
    Business: BusinessDE,

    PrivacyPolicy: PrivacyPolicyDE,
    TermOfService: TermOfServiceDE,
    WorkplacePolicy: WorkplacePolicyDE,

    Contact: Contact2025,
    Consent: ConsentDE,

    Gallery: GalleryDE,
    Translates,
    CloudSolution: CloudSolutionDE,
    TransformBusiness: TransformBusinessDE,

    AiFahCover: AiFahCoverDE
}