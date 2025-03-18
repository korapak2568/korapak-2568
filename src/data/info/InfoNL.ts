import {IInfo} from "@/data/info/model/IInfo";
import {Languages} from "@/data/language/Languages";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {Consent2025} from "@/data/consent/Consent2025";
import {Image} from "@/data/image/Image";
import {AiCompanions} from "@/data/ai/AiCompanions";
import {Translates} from "@/data/translate/Translates";
import {AboutNL} from "@/data/about/AboutNL";
import {GalleryNL} from "@/data/gallery/GalleryNL";
import {FullStackNL} from "@/data/fullstack/FullStackNL";
import {FrontEndNL} from "@/data/frontend/FrontEndNL";
import {BusinessNL} from "@/data/business/BusinessNL";
import {ServiceNL} from "@/data/service/ServiceNL";
import {FeatureNL} from "@/data/feature/FeatureNL";
import {CloudNL} from "@/data/cloud/CloudNL";
import {NavbarNL} from "@/data/navbar/NavbarNL";
import {DevOpsNL} from "@/data/devops/DevOpsNL";
import {FooterNL} from "@/data/footer/FooterNL";
import {Web3NL} from "@/data/web3/Web3NL";
import {PrivacyPolicyNL} from "@/data/policy/privacy-policy/PrivacyPolicyNL";
import {TermOfServiceNL} from "@/data/policy/term-of-service/TermOfServiceNL";
import {WorkplacePolicyNL} from "@/data/policy/workplace-policy/WorkplacePolicyNL";
import {CloudSolutionNL} from "@/data/cloud-solutions/CloudSolutionNL";

export const InfoNL: IInfo = {
    Languages,

    AiCompanions,

    Service: ServiceNL,
    Feature: FeatureNL,
    About: AboutNL,
    Cloud: CloudNL,
    Navbar: NavbarNL,

    FrontEnd: FrontEndNL,
    FullStack: FullStackNL,
    DevOps: DevOpsNL,
    Web3: Web3NL,

    Recommend: Recommend2025,
    Footer: FooterNL,
    Business: BusinessNL,

    PrivacyPolicy: PrivacyPolicyNL,
    TermOfService: TermOfServiceNL,
    WorkplacePolicy: WorkplacePolicyNL,

    Contact: Contact2025,
    Consent: Consent2025,

    Images: Image,

    Gallery: GalleryNL,
    Translates,
    CloudSolution: CloudSolutionNL
}