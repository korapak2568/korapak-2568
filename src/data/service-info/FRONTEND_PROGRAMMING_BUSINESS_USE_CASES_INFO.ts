import {IServiceLegacy} from "../model/services/IServiceLegacy";
import {ANGULAR_BUSINESS_USE_CASES_INFO} from "./front-end/ANGULAR_BUSINESS_USE_CASES_INFO";
import {REACT_BUSINESS_USE_CASES_INFO} from "./front-end/REACT_BUSINESS_USE_CASES_INFO";
import {VUE_BUSINESS_USE_CASES_INFO} from "./front-end/VUE_BUSINESS_USE_CASES_INFO";
import {FLUTTER_BUSINESS_USE_CASES_INFO} from "./front-end/FLUTTER_BUSINESS_USE_CASES_INFO";
import {JAVASCRIPT_BUSINESS_USE_CASES_INFO} from "./front-end/JAVASCRIPT_BUSINESS_USE_CASES_INFO";
import {TYPESCRIPT_BUSINESS_USE_CASES_INFO} from "./front-end/TYPESCRIPT_BUSINESS_USE_CASES_INFO";
import {HTML5_BUSINESS_USE_CASES_INFO} from "./front-end/HTML5_BUSINESS_USE_CASES_INFO";
import {CSS3_BUSINESS_USE_CASES_INFO} from "./front-end/CSS3_BUSINESS_USE_CASES_INFO";
import {WEBPACK_BUSINESS_USE_CASES_INFO} from "./front-end/WEBPACK_BUSINESS_USE_CASES_INFO";

export const FRONTEND_PROGRAMMING_BUSINESS_USE_CASES_INFO: IServiceLegacy = {
  title: "Front-End programming language or framework, focusing on their business use cases.",
  span: "",
  subTitle: "",
  description: [
    {
      title: "",
      description: "Feel free to modify and adapt the content to fit your specific business offerings and target audience, highlighting the unique benefits each technology or framework brings to your projects."
    }
  ],
  additions: [
    {
      title: ANGULAR_BUSINESS_USE_CASES_INFO.subTitle,
      description: ANGULAR_BUSINESS_USE_CASES_INFO.description[0].description
    },
    {
      title: REACT_BUSINESS_USE_CASES_INFO.subTitle,
      description: REACT_BUSINESS_USE_CASES_INFO.description[0].description
    },
    {
      title: VUE_BUSINESS_USE_CASES_INFO.subTitle,
      description: VUE_BUSINESS_USE_CASES_INFO.description[0].description
    },
    {
      title: FLUTTER_BUSINESS_USE_CASES_INFO.subTitle,
      description: FLUTTER_BUSINESS_USE_CASES_INFO.description[0].description
    },
    {
      title: JAVASCRIPT_BUSINESS_USE_CASES_INFO.subTitle,
      description: JAVASCRIPT_BUSINESS_USE_CASES_INFO.description[0].description
    },
    {
      title: TYPESCRIPT_BUSINESS_USE_CASES_INFO.subTitle,
      description: TYPESCRIPT_BUSINESS_USE_CASES_INFO.description[0].description
    },
    {
      title: HTML5_BUSINESS_USE_CASES_INFO.subTitle,
      description: HTML5_BUSINESS_USE_CASES_INFO.description[0].description
    },
    {
      title: CSS3_BUSINESS_USE_CASES_INFO.subTitle,
      description: CSS3_BUSINESS_USE_CASES_INFO.description[0].description
    },
    {
      title: WEBPACK_BUSINESS_USE_CASES_INFO.subTitle,
      description: WEBPACK_BUSINESS_USE_CASES_INFO.description[0].description
    },
  ]
}
