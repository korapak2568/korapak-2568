import {ILink} from "@/data/model/ILink";

export interface IFooters {
    title: string;
    logo: string;
    link: string;
    www: string;
    description: string;
    importantTitle: string;
    featureTitle: string;
    infoTitle: string;
    termOfService: ILink;
    privacyPolicy: ILink;
    socialLinks: ILink[]
    importantLinks: ILink[]
    featuredLinks: ILink[]
    infoLinks: ILink[]
}