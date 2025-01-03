import {IAiAll} from "@/data/model/ai/IAi";
import {ILanguage} from "@/data/model/language/ILanguage";
import {IServiceLegacy} from "@/data/model/services/IServiceLegacy";
import {IServiceImage} from "@/data/model/services/IServiceImage";
import {IRecommendations} from "@/data/model/common/IRecommendations";
import {IFooters} from "@/data/model/footer/IFooters";
import {IBusinessDomains} from "@/data/model/common/IBusinessDomains";
import {IContents} from "@/data/model/common/IContents";
import {IContact} from "@/data/model/common/IContact";
import {IConsent} from "@/data/model/common/IConsent";

export interface IInfo {
    Languages: ILanguage[],
    Service: IServiceLegacy,
    Feature: IServiceImage,
    About: IServiceLegacy,
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
    Contacts: IContact[],
    Consent: IConsent,
}