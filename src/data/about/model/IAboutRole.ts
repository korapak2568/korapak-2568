export interface IAboutRole {
    title: string,
    span: string,
    email?: string,
    officePhone?: string,
    mobilePhone?: string,
    locations?: {
        office?: string,
        nearby?: string[],
    }
}