import {IInfo} from "@/data/info/model/IInfo";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {AiCompanionTH} from "@/data/ai/companions/AiCompanionTH";
import {Translates} from "@/data/translate/Translates";
import {AboutTH} from "@/data/about/AboutTH";
import {GalleryTH} from "@/data/gallery/GalleryTH";
import {FullStackTH} from "@/data/fullstack/FullStackTH";
import {FrontEndTH} from "@/data/frontend/FrontEndTH";
import {BusinessTH} from "@/data/business/BusinessTH";
import {ServiceTH} from "@/data/service/ServiceTH";
import {FeatureTH} from "@/data/feature/FeatureTH";
import {CloudTH} from "@/data/cloud/CloudTH";
import {NavbarTH} from "@/data/navbar/NavbarTH";
import {DevOpsTH} from "@/data/devops/DevOpsTH";
import {FooterTH} from "@/data/footer/FooterTH";
import {Web3TH} from "@/data/web3/Web3TH";
import {PrivacyPolicyTH} from "@/data/policy/privacy-policy/PrivacyPolicyTH";
import {TermOfServiceTH} from "@/data/policy/term-of-service/TermOfServiceTH";
import {WorkplacePolicyTH} from "@/data/policy/workplace-policy/WorkplacePolicyTH";
import {CloudSolutionTH} from "@/data/cloud-solutions/CloudSolutionTH";
import {ConsentTH} from "@/data/consent/ConsentTH";
import {TransformBusinessTH} from "@/data/transform-business/TransformBusinessTH";
import {AiFahCoverTH} from "@/data/ai/fah-cover/AiFahCoverTH";

export const InfoTH: IInfo = {
    AiCompanions: AiCompanionTH,

    Service: ServiceTH,
    Feature: FeatureTH,
    About: AboutTH,
    Cloud: CloudTH,
    Navbar: NavbarTH,

    FrontEnd: FrontEndTH,
    FullStack: FullStackTH,
    DevOps: DevOpsTH,
    Web3: Web3TH,

    Recommend: Recommend2025,
    Footer: FooterTH,
    Business: BusinessTH,

    PrivacyPolicy: PrivacyPolicyTH,
    TermOfService: TermOfServiceTH,
    WorkplacePolicy: WorkplacePolicyTH,

    Contact: Contact2025,
    Consent: ConsentTH,

    Gallery: GalleryTH,
    Translates,
    CloudSolution: CloudSolutionTH,
    TransformBusiness: TransformBusinessTH,

    AiFahCover: AiFahCoverTH
}