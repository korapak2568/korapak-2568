import {IInfo} from "@/data/info/model/IInfo";
import {Recommend2025} from "@/data/recommend/Recommend2025";
import {Contact2025} from "@/data/contact/Contact2025";
import {Translates} from "@/data/translate/Translates";
import {AboutJA} from "@/data/about/AboutJA";
import {GalleryJA} from "@/data/gallery/GalleryJA";
import {FullStackJA} from "@/data/fullstack/FullStackJA";
import {FrontEndJA} from "@/data/frontend/FrontEndJA";
import {BusinessJA} from "@/data/business/BusinessJA";
import {ServiceJA} from "@/data/service/ServiceJA";
import {FeatureJA} from "@/data/feature/FeatureJA";
import {CloudJA} from "@/data/cloud/CloudJA";
import {NavbarJA} from "@/data/navbar/NavbarJA";
import {DevOpsJA} from "@/data/devops/DevOpsJA";
import {FooterJA} from "@/data/footer/FooterJA";
import {Web3JA} from "@/data/web3/Web3JA";
import {PrivacyPolicyJA} from "@/data/policy/privacy-policy/PrivacyPolicyJA";
import {TermOfServiceJA} from "@/data/policy/term-of-service/TermOfServiceJA";
import {WorkplacePolicyJA} from "@/data/policy/workplace-policy/WorkplacePolicyJA";
import {CloudSolutionJA} from "@/data/cloud-solutions/CloudSolutionJA";
import {ConsentJA} from "@/data/consent/ConsentJA";
import {TransformBusinessJA} from "@/data/transform-business/TransformBusinessJA";
import {AiFahCoverJA} from "@/data/ai/fah-cover/AiFahCoverJA";
import {AiCompanionJA} from "@/data/ai/companions/AiCompanionJA";

export const InfoJA: IInfo = {
    AiCompanions: AiCompanionJA,

    Service: ServiceJA,
    Feature: FeatureJA,
    About: AboutJA,
    Cloud: CloudJA,
    Navbar: NavbarJA,

    FrontEnd: FrontEndJA,
    FullStack: FullStackJA,
    DevOps: DevOpsJA,
    Web3: Web3JA,

    Recommend: Recommend2025,
    Footer: FooterJA,
    Business: BusinessJA,

    PrivacyPolicy: PrivacyPolicyJA,
    TermOfService: TermOfServiceJA,
    WorkplacePolicy: WorkplacePolicyJA,

    Contact: Contact2025,
    Consent: ConsentJA,

    Gallery: GalleryJA,
    Translates,
    CloudSolution: CloudSolutionJA,
    TransformBusiness: TransformBusinessJA,

    AiFahCover: AiFahCoverJA
}