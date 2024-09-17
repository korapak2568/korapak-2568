import {ILink} from "@/data/model/common/ILink";

export interface IFooters {
    title: string;
    link: string;
    www: string;
    description: string;
    importantTitle: string;
    featureTitle: string;
    infoTitle: string;
    termOfService: ILink;
    privacyPolicy: ILink;
    workplacePolicy: ILink;
    socialLinks: ILink[]
    importantLinks: ILink[]
    featuredLinks: ILink[]
    infoLinks: ILink[]
}