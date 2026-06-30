// ISmartMobility.ts
type ProvinceKey = 'chiang-mai'

export interface ISmartMobility {
    chiangMai: IProvince
}

export interface IProvince {
    vision: ISmartSection
    urbanHub: ISmartSection
    connectivityMatrix: {
        title: string
        description: string
        contents?: IContent[]
        routes: ISmartRoute[]
    },
    technologyIntegration: ISmartSection,
    vertiportDesign: IVertiport,
    summaryExpectedResults: ISmartSection
}

export interface IContent {
    title: string
    description: string,
    image?: ISmartMobilityImage
    media?: IMedia
}

export interface ISmartItem {
    title: string
    description?: string,
    contents?: IContent[]
    image?: ISmartMobilityImage
    media?: IMedia
}

export interface ISmartImage {
    title: string
    link: string | undefined,
    image?: ISmartMobilityImage
    media?: IMedia
}

export interface ISmartSection {
    title: string
    description: string,
    link?: string,
    items?: ISmartItem[]
    image?: ISmartMobilityImage,
    media?: IMedia,
    safeStatement?: {
        title: string
        description: string
    }
}

export interface IVertiport {
    title: string
    description: string,
    link: string,
    structureTitle: string,
    structure: IStructure[],
    image?: ISmartMobilityImage
    media?: IMedia
}

export interface IStructure {
    title: string,
    items: ISmartItem[]
}

export interface ISmartRoute {
    title: string
    description: string,
    link: string,
    contents?: IContent[],
    transportationModel: {
        title: string
        description: string,
        contents?: IContent[],
        sections?: ISmartSection[]
    }

    image?: ISmartMobilityImage
    media?: IMedia
}

export interface ISmartMobilityImageVariant {
    src: string
    width: number
    height: number
    quality?: number
}

export interface ISmartMobilityImage {
    src: string
    alt: string
    width: number
    height: number
    aspectRatio: string
    mobile?: ISmartMobilityImageVariant
    thumbnail?: ISmartMobilityImageVariant
    desktop?: ISmartMobilityImageVariant
    open_graph?: ISmartMobilityImageVariant
    tags?: string[]
}

export interface IMedia {
    image_url?: string
    image_path?: string
    video_url?: string
    video_path?: string,
    image_tags?: string[],
}

export interface ISmartMobilityRelevant {
    title: string,
    link: string,
    image?: ISmartMobilityImage
    media?: IMedia
}
