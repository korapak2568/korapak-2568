import {ILanguage} from "@/data/language/model/ILanguage";
import {IService2025} from "@/data/service/model/IService2025";
import {IRecommend} from "@/data/recommend/model/IRecommend";
import {IFooter} from "@/data/footer/model/IFooter";
import {IBusiness} from "@/data/business/model/IBusiness";
import {IConsent} from "@/data/consent/model/IConsent";
import {IImage} from "@/data/image/model/IImage";
import {IContact} from "@/data/contact/model/IContact";
import {IPolicy} from "@/data/policy/model/IPolicy";
import {IFrontEnd} from "@/data/frontend/model/IFrontEnd";
import {IFullStack} from "@/data/fullstack/model/IFullStack";
import {IDevOps} from "@/data/devops/model/IDevOps";
import {ICloud} from "@/data/cloud/model/ICloud";
import {IAbout} from "@/data/about/model/IAbout";
import {IFeature} from "@/data/feature/model/IFeature";

export interface IInfo {
    Languages: ILanguage[],

    Service: IService2025,
    Feature: IFeature,
    About: IAbout,
    Cloud: ICloud,

    FrontEnd: IFrontEnd,
    FullStack: IFullStack,
    DevOps: IDevOps,

    Recommend: IRecommend,
    Footer: IFooter,
    Business: IBusiness,

    PrivacyPolicy: IPolicy,
    TermOfService: IPolicy,
    WorkplacePolicy: IPolicy,

    Contact: IContact,
    Consent: IConsent,
    Images: IImage
}