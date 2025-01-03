import {ILanguage} from "@/data/model/language/ILanguage";
import {IService2025} from "@/data/model/services/IService2025";
import {IServiceImage} from "@/data/model/services/IServiceImage";
import {IRecommendations} from "@/data/model/common/IRecommendations";
import {IFooters} from "@/data/model/footer/IFooters";
import {IBusinessDomains} from "@/data/model/common/IBusinessDomains";
import {IContents} from "@/data/model/common/IContents";
import {IConsent} from "@/data/model/common/IConsent";
import {IImageAll} from "@/data/model/image/IImageAll";
import {IContactAll} from "@/data/model/contact/IContactAll";

export interface IInfo {
    Languages: ILanguage[],
    Service: IService2025,
    Feature: IServiceImage,
    About: IService2025,
    Cloud: IServiceImage,
    FullStack: IServiceImage,
    FrontEnd: IServiceImage,
    Recommend: IRecommendations,
    Footer: IFooters,
    Business: IBusinessDomains,
    PrivacyPolicy: IContents,
    TermOfService: IContents,
    DevOps: IServiceImage,
    WorkplacePolicy: IContents,
    Contact: IContactAll,
    Consent: IConsent,
    Images: IImageAll
}