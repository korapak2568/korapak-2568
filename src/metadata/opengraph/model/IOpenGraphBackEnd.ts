import {IOpenGraphUnit} from "@/metadata/opengraph/model/IOpenGraphUnit";

export interface IOpenGraphBackEnd {
    main: IOpenGraphUnit,
    dotnetcore: IOpenGraphUnit,
    go: IOpenGraphUnit,
    java: IOpenGraphUnit,
    nodejs: IOpenGraphUnit,
    php: IOpenGraphUnit,
    python: IOpenGraphUnit,
}