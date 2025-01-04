import {IServiceContent} from "@/data/service/model/IServiceContent";

export interface IService2025 {
  title: string,
  span: string,
  subTitle: string,

  description: IServiceContent[],
  stacks: IServiceContent[]
}