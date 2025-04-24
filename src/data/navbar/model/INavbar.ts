export interface INavbar {
    group: string,
    label: string;
    level: number;
    link: string;
    isSeparated?: boolean;
    isSubmenu: boolean;
    submenu: INavbar[];
}