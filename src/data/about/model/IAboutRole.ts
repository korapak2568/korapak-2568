export interface IAboutRole {
    title: string,
    span: string,
    email?: string,
    telephone?: string,
    locations?: {
        office?: string,
        nearby?: string[],
    }
}