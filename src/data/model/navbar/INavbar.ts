export interface INavbar {
    label: string;
    link: string;
    isSeparated?: boolean;
    submenu?: INavbar[];
}