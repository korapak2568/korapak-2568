export interface INavbar {
    group: string,
    label: string;
    link: string;
    isSeparated?: boolean;
    submenu: INavbar[];
}