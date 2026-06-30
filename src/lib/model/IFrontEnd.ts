// IFrontEnd.ts

export interface IFrontEnd {
    title: string,
    span: string,
    subTitle: string,

    nextjs: IFrontEndStack,
    react: IFrontEndStack,
    typescript: IFrontEndStack,

    sideImages: ITechnicalExpertiseImage[],
    stacks: IFrontEndStack[],

    services: IFrontEndService
}

// IFrontEndFaq.ts
export interface IFrontEndFaq {
  question: string,
  answer: string
}

// IFrontEndFeature.ts
export interface IFrontEndFeature {
  title: string,
  description: string,
  list: string[]
}

// IFrontEndFramework.ts
export interface IFrontEndFramework {
    name: string,
    overview: string,
    strengths: string[],
    useCases: string[]
}

// IFrontEndService.ts

export interface IFrontEndService {
    title: string,
    descriptions: string[],
    items: IFrontEndServiceItem[]
}

// IFrontEndServiceItem.ts
export interface IFrontEndServiceItem {
  title: string,
  description: string,
}

// IFrontEndStack.ts

export interface IFrontEndStack {
    title: string,
    description: string,
    image: string,
    detailImage: string,
    alt: string,
    readMore: string,
    link: string,

    features: IFrontEndFeature[],
    faqs: IFrontEndFaq[],
    frameworks?: IFrontEndFramework[],
}

export interface ITechnicalExpertiseImage {
    title: string,
    src: string,
    alt: string,
}