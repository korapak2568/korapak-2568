import {IContactDetail} from "@/data/contact/model/IContactDetail";

export interface IContact {
    location: IContactDetail,
    email: IContactDetail,
    tel: IContactDetail,
    github: IContactDetail,
    linkedin: IContactDetail,
    lineoa: IContactDetail,
    chorn: IContactDetail,

    contacts: IContactDetail[];
}