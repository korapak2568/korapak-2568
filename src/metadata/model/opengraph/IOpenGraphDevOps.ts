import {IOpenGraphUnit} from "@/metadata/model/opengraph/IOpenGraphUnit";

export interface IOpenGraphDevOps {
    main: IOpenGraphUnit,
    appium: IOpenGraphUnit,
    docker: IOpenGraphUnit,
    github: IOpenGraphUnit,
    gitlab: IOpenGraphUnit,
    jenkins: IOpenGraphUnit,
    kube: IOpenGraphUnit,
    postman: IOpenGraphUnit,
    selenium: IOpenGraphUnit,
    soapui: IOpenGraphUnit,
}