export interface IAboutRole {
    title: string,
    span: string,
    email?: string,
    officePhone?: string,
    mobilePhone?: string,
    locations?: {
        office?: string,
    },
    nearbyShopping?: string,
    nearbyUniversity1?: string,
    nearbyUniversity2?: string,
    nearbyAirport?: string,
}