import {IOpenGraphUnit} from "@/data/metadata/model/opengraph/IOpenGraphUnit";

export interface IOpenGraphBackEnd {
    main: IOpenGraphUnit,
    dotnetcore: IOpenGraphUnit,
    go: IOpenGraphUnit,
    java: IOpenGraphUnit,
    nodejs: IOpenGraphUnit,
    php: IOpenGraphUnit,
    python: IOpenGraphUnit,
}