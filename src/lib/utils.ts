import {INavbar} from "@/data/navbar/model/INavbar";

export function sanitizeUUID(text: string): string {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '');
}

export function IsActiveNavbar1(pathname: string, lang: string, navbar1: INavbar, isFromNavbar2?: boolean) {

    if (isFromNavbar2) {
        const group2 = "/" + pathname.split('/')[2] + "/"
        return navbar1.group == group2
    }

    const link = '/' + lang + navbar1.link
    return pathname == link
}

export function IsActiveNavbar2(pathname: string, lang: string, navbar2: INavbar, isFromNavbar3?: boolean): boolean {

    if (isFromNavbar3) {
        const group3 = "/" + pathname.split('/')[2] + "/" + pathname.split('/')[3] + "/"
        return navbar2.link == group3
    }

    const link = '/' + lang + navbar2.link
    return pathname == link
}

export function IsActiveNavbar3(pathname: string, lang: string, navbar3: INavbar): boolean {
    const link = '/' + lang + navbar3.link
    return pathname == link
}

export function publishTime() {
    const currentDate = new Date()
    return currentDate.toISOString()
}