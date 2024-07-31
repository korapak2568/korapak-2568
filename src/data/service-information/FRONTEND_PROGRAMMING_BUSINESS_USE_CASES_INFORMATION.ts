import {IServiceInformation} from "../model/IServiceInformation";
import {ANGULAR_BUSINESS_USE_CASES_INFORMATION} from "./front-end/ANGULAR_BUSINESS_USE_CASES_INFORMATION";
import {REACT_BUSINESS_USE_CASES_INFORMATION} from "./front-end/REACT_BUSINESS_USE_CASES_INFORMATION";
import {VUE_BUSINESS_USE_CASES_INFORMATION} from "./front-end/VUE_BUSINESS_USE_CASES_INFORMATION";
import {FLUTTER_BUSINESS_USE_CASES_INFORMATION} from "./front-end/FLUTTER_BUSINESS_USE_CASES_INFORMATION";
import {JAVASCRIPT_BUSINESS_USE_CASES_INFORMATION} from "./front-end/JAVASCRIPT_BUSINESS_USE_CASES_INFORMATION";
import {TYPESCRIPT_BUSINESS_USE_CASES_INFORMATION} from "./front-end/TYPESCRIPT_BUSINESS_USE_CASES_INFORMATION";
import {HTML5_BUSINESS_USE_CASES_INFORMATION} from "./front-end/HTML5_BUSINESS_USE_CASES_INFORMATION";
import {CSS3_BUSINESS_USE_CASES_INFORMATION} from "./front-end/CSS3_BUSINESS_USE_CASES_INFORMATION";
import {WEBPACK_BUSINESS_USE_CASES_INFORMATION} from "./front-end/WEBPACK_BUSINESS_USE_CASES_INFORMATION";

export const FRONTEND_PROGRAMMING_BUSINESS_USE_CASES_INFORMATION: IServiceInformation = {
  title: "Front-End programming language or framework, focusing on their business use cases.",
  span: "",
  subTitle: "",
  description: [
    {
      title: "",
      content: "Feel free to modify and adapt the content to fit your specific business offerings and target audience, highlighting the unique benefits each technology or framework brings to your projects."
    }
  ],
  contents: [
    {
      title: ANGULAR_BUSINESS_USE_CASES_INFORMATION.subTitle,
      content: ANGULAR_BUSINESS_USE_CASES_INFORMATION.description[0].content
    },
    {
      title: REACT_BUSINESS_USE_CASES_INFORMATION.subTitle,
      content: REACT_BUSINESS_USE_CASES_INFORMATION.description[0].content
    },
    {
      title: VUE_BUSINESS_USE_CASES_INFORMATION.subTitle,
      content: VUE_BUSINESS_USE_CASES_INFORMATION.description[0].content
    },
    {
      title: FLUTTER_BUSINESS_USE_CASES_INFORMATION.subTitle,
      content: FLUTTER_BUSINESS_USE_CASES_INFORMATION.description[0].content
    },
    {
      title: JAVASCRIPT_BUSINESS_USE_CASES_INFORMATION.subTitle,
      content: JAVASCRIPT_BUSINESS_USE_CASES_INFORMATION.description[0].content
    },
    {
      title: TYPESCRIPT_BUSINESS_USE_CASES_INFORMATION.subTitle,
      content: TYPESCRIPT_BUSINESS_USE_CASES_INFORMATION.description[0].content
    },
    {
      title: HTML5_BUSINESS_USE_CASES_INFORMATION.subTitle,
      content: HTML5_BUSINESS_USE_CASES_INFORMATION.description[0].content
    },
    {
      title: CSS3_BUSINESS_USE_CASES_INFORMATION.subTitle,
      content: CSS3_BUSINESS_USE_CASES_INFORMATION.description[0].content
    },
    {
      title: WEBPACK_BUSINESS_USE_CASES_INFORMATION.subTitle,
      content: WEBPACK_BUSINESS_USE_CASES_INFORMATION.description[0].content
    },
  ]
}
