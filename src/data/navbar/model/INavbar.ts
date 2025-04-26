export interface INavbar {
    group: string,
    label: string;
    level: number;
    image?: string
    link: string;
    isSeparated?: boolean;
    isSubmenu: boolean;
    isFrontend?: boolean;
    isBackend?: boolean;
    isDevOps?: boolean;
    submenu: INavbar[];
}