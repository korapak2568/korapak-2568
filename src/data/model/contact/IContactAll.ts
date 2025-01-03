import {IContact} from "@/data/model/contact/IContact";

export interface IContactAll {
    contacts: IContact[];
    location: IContact,
    email: IContact,
    tel: IContact,
    github: IContact,
    linkedin: IContact,
    line: IContact,
}