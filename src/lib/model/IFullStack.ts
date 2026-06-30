// IFullStack.ts

export interface IFullStack {
    title: string,
    span: string,
    subTitle: string,

    go: IFullStackStack,
    java: IFullStackStack,
    nodejs: IFullStackStack,
    php: IFullStackStack,
    python: IFullStackStack,

    sideImages: ITechnicalExpertiseImage[],
    stacks: IFullStackStack[],

    services: IFullStackService
}

// IFullStackFaq.ts
export interface IFullStackFaq {
  question: string,
  answer: string
}

// IFullStackFeature.ts
export interface IFullStackFeature {
  title: string,
  description: string,
  list: string[]
}

// IFullStackFramework.ts
export interface IFullStackFramework {
    name: string,
    overview: string,
    strengths: string[],
    useCases: string[]
}

// IFullStackService.ts

export interface IFullStackService {
    title: string,
    descriptions: string[],
    items: IFullStackServiceItem[]
}

// IFullStackServiceItem.ts
export interface IFullStackServiceItem {
  title: string,
  description: string,
}

// IFullStackStack.ts

export interface IFullStackStack {
    title: string,
    description: string,
    image: string,
    detailImage: string,
    alt: string,
    readMore: string,
    link: string,

    features: IFullStackFeature[],
    faqs: IFullStackFaq[],
    frameworks?: IFullStackFramework[],
}

export interface ITechnicalExpertiseImage {
    title: string,
    src: string,
    alt: string,
}