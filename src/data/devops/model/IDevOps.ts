import {IDevOpsStack} from "@/data/devops/model/IDevOpsStack";
import {IDevOpsService} from "@/data/devops/model/IDevOpsService";

export interface IDevOps {
    title: string,
    span: string,
    subTitle: string,

    appium: IDevOpsStack,
    docker: IDevOpsStack,
    github: IDevOpsStack,
    gitlab: IDevOpsStack,
    jenkins: IDevOpsStack,
    kubernetes: IDevOpsStack,
    postman: IDevOpsStack,
    selenium: IDevOpsStack,
    soapui: IDevOpsStack,

    stacks: IDevOpsStack[],

    services: IDevOpsService
}