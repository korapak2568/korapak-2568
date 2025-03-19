import {IInfo} from "@/data/info/model/IInfo";
import {Languages} from "@/data/language/Languages";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {Image} from "@/data/image/Image";
import {AiCompanions} from "@/data/ai/AiCompanions";
import {Translates} from "@/data/translate/Translates";
import {AboutVI} from "@/data/about/AboutVI";
import {GalleryVI} from "@/data/gallery/GalleryVI";
import {FullStackVI} from "@/data/fullstack/FullStackVI";
import {FrontEndVI} from "@/data/frontend/FrontEndVI";
import {BusinessVI} from "@/data/business/BusinessVI";
import {ServiceVI} from "@/data/service/ServiceVI";
import {FeatureVI} from "@/data/feature/FeatureVI";
import {CloudVI} from "@/data/cloud/CloudVI";
import {NavbarVI} from "@/data/navbar/NavbarVI";
import {DevOpsVI} from "@/data/devops/DevOpsVI";
import {FooterVI} from "@/data/footer/FooterVI";
import {Web3VI} from "@/data/web3/Web3VI";
import {PrivacyPolicyVI} from "@/data/policy/privacy-policy/PrivacyPolicyVI";
import {TermOfServiceVI} from "@/data/policy/term-of-service/TermOfServiceVI";
import {WorkplacePolicyVI} from "@/data/policy/workplace-policy/WorkplacePolicyVI";
import {CloudSolutionVI} from "@/data/cloud-solutions/CloudSolutionVI";
import {ConsentVI} from "@/data/consent/ConsentVI";

export const InfoVI: IInfo = {
    Languages,

    AiCompanions,

    Service: ServiceVI,
    Feature: FeatureVI,
    About: AboutVI,
    Cloud: CloudVI,
    Navbar: NavbarVI,

    FrontEnd: FrontEndVI,
    FullStack: FullStackVI,
    DevOps: DevOpsVI,
    Web3: Web3VI,

    Recommend: Recommend2025,
    Footer: FooterVI,
    Business: BusinessVI,

    PrivacyPolicy: PrivacyPolicyVI,
    TermOfService: TermOfServiceVI,
    WorkplacePolicy: WorkplacePolicyVI,

    Contact: Contact2025,
    Consent: ConsentVI,

    Images: Image,

    Gallery: GalleryVI,
    Translates,
    CloudSolution: CloudSolutionVI
}