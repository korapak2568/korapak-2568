import {IFooterDetail} from "@/data/footer/model/IFooterDetail";

export interface IFooter {
    title: string;
    link: string;
    www: string;
    description: string;
    importantTitle: string;
    featureTitle: string;
    infoTitle: string;

    termOfService: IFooterDetail;
    privacyPolicy: IFooterDetail;
    workplacePolicy: IFooterDetail;

    socialLinks: IFooterDetail[]
    importantLinks: IFooterDetail[]
    featuredLinks: IFooterDetail[]
    infoLinks: IFooterDetail[]
}