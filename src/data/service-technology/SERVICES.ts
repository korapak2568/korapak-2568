import { IServices } from "../model/IService";
import { IImage } from "../model/IImage";
import { ROUTING } from "../ROUTING";

const imageDefault: IImage = {
  src: "",
  alt: ""
}

export const SERVICES: IServices = {
  row1: [
    {
      isImage: false,
      text1: "Custom Software",
      text2: "Development",
      isTwoLine: true,
      image: imageDefault,
      link: ROUTING.customSoftwareDevelopment.url,
    },
    {
      isImage: false,
      text1: "Single Page",
      text2: "Applications (SPA)",
      isTwoLine: true,
      image: imageDefault,
      link: ROUTING.singlePageApplication.url,
    },
    {
      isImage: false,
      text1: "Responsive",
      text2: "",
      isTwoLine: false,
      image: imageDefault,
      link: ROUTING.responsiveWebDesignDevelopment.url,
    },
    {
      isImage: false,
      text1: "Automation",
      text2: "",
      isTwoLine: false,
      image: imageDefault,
      link: ROUTING.automation.url,
    }
  ],
  row2: [
    {
      isImage: false,
      text1: "e-Commerce",
      text2: "",
      isTwoLine: false,
      image: imageDefault,
      link: ROUTING.eCommerce.url,
    },
    {
      isImage: false,
      text1: "Blockchain",
      text2: "",
      isTwoLine: true,
      image: imageDefault,
      link: ROUTING.blockchain.url,
    },
    {
      isImage: false,
      text1: "Microservices",
      text2: "",
      isTwoLine: false,
      image: imageDefault,
      link: ROUTING.microservicesTechnology.url,
    },
    {
      isImage: false,
      text1: "Solution",
      text2: "Architecture",
      isTwoLine: true,
      image: imageDefault,
      link: ROUTING.systemIntegration.url,
    }
  ],
  row3: [
    {
      isImage: false,
      text1: "Full Stack",
      text2: "Development",
      isTwoLine: true,
      image: imageDefault,
      link: ROUTING.fullStackDevelopment.url,
    },
    {
      isImage: false,
      text1: "Back End",
      text2: "Development",
      isTwoLine: true,
      image: imageDefault,
      link: ROUTING.backendDevelopment.url,
    },
    {
      isImage: false,
      text1: "Front End",
      text2: "Development",
      isTwoLine: true,
      image: imageDefault,
      link: ROUTING.frontEndDevelopment.url,
    },
    {
      isImage: false,
      text1: "DevOps and Testing",
      text2: "",
      isTwoLine: false,
      image: imageDefault,
      link: ROUTING.devopsAndTesting.url,
    }
  ],
  row4: [
    {
      isImage: false,
      text1: "PoC",
      text2: "",
      isTwoLine: false,
      image: imageDefault,
      link: ROUTING.poc.url,
    },
    {
      isImage: false,
      text1: "MVP",
      text2: "",
      isTwoLine: false,
      image: imageDefault,
      link: ROUTING.mvp.url,
    },
    {
      isImage: false,
      text1: "Scaling",
      text2: "",
      isTwoLine: false,
      image: imageDefault,
      link: ROUTING.scaling.url,
    }
  ]
}
