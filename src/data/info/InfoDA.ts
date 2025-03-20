import {IInfo} from "@/data/info/model/IInfo";
import {Languages} from "@/data/language/Languages";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {Image} from "@/data/image/Image";
import {AiCompanions} from "@/data/ai/AiCompanions";
import {Translates} from "@/data/translate/Translates";
import {AboutDA} from "@/data/about/AboutDA";
import {GalleryDA} from "@/data/gallery/GalleryDA";
import {FullStackDA} from "@/data/fullstack/FullStackDA";
import {FrontEndDA} from "@/data/frontend/FrontEndDA";
import {BusinessDA} from "@/data/business/BusinessDA";
import {ServiceDA} from "@/data/service/ServiceDA";
import {FeatureDA} from "@/data/feature/FeatureDA";
import {CloudDA} from "@/data/cloud/CloudDA";
import {NavbarDA} from "@/data/navbar/NavbarDA";
import {DevOpsDA} from "@/data/devops/DevOpsDA";
import {FooterDA} from "@/data/footer/FooterDA";
import {Web3DA} from "@/data/web3/Web3DA";
import {PrivacyPolicyDA} from "@/data/policy/privacy-policy/PrivacyPolicyDA";
import {TermOfServiceDA} from "@/data/policy/term-of-service/TermOfServiceDA";
import {WorkplacePolicyDA} from "@/data/policy/workplace-policy/WorkplacePolicyDA";
import {CloudSolutionDA} from "@/data/cloud-solutions/CloudSolutionDA";
import {ConsentDA} from "@/data/consent/ConsentDA";
import {TransformBusinessDA} from "@/data/transform-business/TransformBusinessDA";

export const InfoDA: IInfo = {
    Languages,

    AiCompanions,

    Service: ServiceDA,
    Feature: FeatureDA,
    About: AboutDA,
    Cloud: CloudDA,
    Navbar: NavbarDA,

    FrontEnd: FrontEndDA,
    FullStack: FullStackDA,
    DevOps: DevOpsDA,
    Web3: Web3DA,

    Recommend: Recommend2025,
    Footer: FooterDA,
    Business: BusinessDA,

    PrivacyPolicy: PrivacyPolicyDA,
    TermOfService: TermOfServiceDA,
    WorkplacePolicy: WorkplacePolicyDA,

    Contact: Contact2025,
    Consent: ConsentDA,

    Images: Image,

    Gallery: GalleryDA,
    Translates,
    CloudSolution: CloudSolutionDA,
    TransformBusiness: TransformBusinessDA
}