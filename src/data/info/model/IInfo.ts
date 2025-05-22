import {IRecommend} from "@/data/recommend/model/IRecommend";
import {IFooter} from "@/data/footer/model/IFooter";
import {IBusiness} from "@/data/business/model/IBusiness";
import {IConsent} from "@/data/consent/model/IConsent";
import {IContact} from "@/data/contact/model/IContact";
import {IPolicy} from "@/data/policy/model/IPolicy";
import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {IDevOps} from "@/data/devops/model/IDevOps";
import {ICloud} from "@/data/cloud/model/ICloud";
import {IAbout} from "@/data/about/model/IAbout";
import {IFeature} from "@/data/feature/model/IFeature";
import {IAiCompanions} from "@/data/ai/model/IAiCompanions";
import {IService} from "@/data/service/model/IService";
import {IWeb3} from "@/data/web3/model/IWeb3";
import {IGallery} from "@/data/gallery/model/IGallery";
import {INavbar} from "@/data/navbar/model/INavbar";
import {ICloudSolution} from "@/data/cloud-solutions/model/ICloudSolution";
import {ITransformBusiness} from "@/data/transform-business/model/ITransformBusiness";
import {IAiFahCover} from "@/data/ai/fah-cover/model/IAiFahCover";
import {ILanguageOption} from "@/data/translate/model/ILanguageOption";
import {IServicePackages} from "@/data/service-packages/model/IServicePackages";

export interface IInfo {

    AiCompanions: IAiCompanions,

    Service: IService,
    Feature: IFeature,
    About: IAbout,
    Cloud: ICloud,
    Navbar: INavbar[]

    FrontEnd: IFrontEnd,
    FullStack: IFullStack,
    DevOps: IDevOps,
    Web3: IWeb3,

    Recommend: IRecommend,
    Footer: IFooter,
    Business: IBusiness,

    PrivacyPolicy: IPolicy,
    TermOfService: IPolicy,
    WorkplacePolicy: IPolicy,

    Contact: IContact,
    Consent: IConsent,

    Gallery: IGallery,
    Translates: ILanguageOption[],
    CloudSolution: ICloudSolution,
    TransformBusiness: ITransformBusiness,

    AiFahCover: IAiFahCover,
    ServicePackages: IServicePackages
}