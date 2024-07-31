import {IMenu} from "../model/IMenu";
import {SUB_MENU_FULL_STACK} from "./SUB_MENU_FULL_STACK";
import {SUB_MENU_FRONT_END} from "./SUB_MENU_FRONT_END";
import {SUB_MENU_DEVOPS} from "./SUB_MENU_DEVOPS";
import {SUB_MENU_CHORN_SERVICES_DETAILS} from "./SUB_MENU_CHORN_SERVICES_DETAILS";

export const SUB_MENU_CHORN_SERVICES: IMenu[] = [
  {
    index: 91010,
    label: 'CHORN Services',
    link: '/chorn-services',
    items: SUB_MENU_CHORN_SERVICES_DETAILS,
    isSeparate: false
  },
]
