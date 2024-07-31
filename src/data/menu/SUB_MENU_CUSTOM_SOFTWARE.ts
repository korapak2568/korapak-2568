import {IMenu} from "../model/IMenu";
import {SUB_MENU_FULL_STACK} from "./SUB_MENU_FULL_STACK";
import {SUB_MENU_FRONT_END} from "./SUB_MENU_FRONT_END";
import {SUB_MENU_DEVOPS} from "./SUB_MENU_DEVOPS";
import {ROUTING} from "../ROUTING";

export const SUB_MENU_CUSTOM_SOFTWARE: IMenu[] = [
  {
    index: 11001,
    label: ROUTING.customSoftwareDevelopment.label,
    link: ROUTING.customSoftwareDevelopment.url,
    items: [],
    isSeparate: false
  },
  {
    index: 19010,
    label: '',
    link: '',
    items: [],
    isSeparate: true
  },
  {
    index: 11010,
    label: ROUTING.fullStackDevelopment.label,
    link: ROUTING.fullStackDevelopment.url,
    items: SUB_MENU_FULL_STACK,
    isSeparate: false
  },
  {
    index: 19010,
    label: '',
    link: '',
    items: [],
    isSeparate: true
  },
  {
    index: 12020,
    label: ROUTING.frontEndDevelopment.label,
    link: ROUTING.frontEndDevelopment.url,
    items: SUB_MENU_FRONT_END,
    isSeparate: false
  },
  {
    index: 19010,
    label: '',
    link: '',
    items: [],
    isSeparate: true
  },
  {
    index: 13030,
    label: ROUTING.devopsAndTesting.label,
    link: ROUTING.devopsAndTesting.url,
    items: SUB_MENU_DEVOPS,
    isSeparate: false
  }
]
