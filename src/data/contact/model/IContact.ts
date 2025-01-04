import {IContactDetail} from "@/data/contact/model/IContactDetail";

export interface IContact {
    contacts: IContactDetail[];
    location: IContactDetail,
    email: IContactDetail,
    tel: IContactDetail,
    github: IContactDetail,
    linkedin: IContactDetail,
    line: IContactDetail,
}