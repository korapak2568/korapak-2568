import {IMenu} from "../model/IMenu";
import {SUB_MENU_CHORN_SERVICES} from "./SUB_MENU_CHORN_SERVICES";
import {SUB_MENU_CHORN_SERVICES_DETAILS} from "./SUB_MENU_CHORN_SERVICES_DETAILS";
import {SUB_MENU_CUSTOM_SOFTWARE} from "./SUB_MENU_CUSTOM_SOFTWARE";

export const MENU_LIST: IMenu[] = [
  {
    index: 1000,
    label: 'Home',
    link: '/',
    isSeparate: false,
    items: []
  },
  {
    index: 1010,
    label: 'CHORN Services',
    link: '/chorn-services',
    isSeparate: false,
    items: SUB_MENU_CHORN_SERVICES
  },
  {
    index: 1030,
    label: 'Custom Software Development',
    link: '/custom-software-development',
    isSeparate: false,
    items: SUB_MENU_CUSTOM_SOFTWARE
  },
  {
    index: 1050,
    label: 'Contact',
    link: '/contact',
    isSeparate: false,
    items: []
  }
]
