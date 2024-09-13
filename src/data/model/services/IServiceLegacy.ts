import {IContent} from "../common/IContent";

export interface IServiceLegacy {
  title: string,
  span: string,
  subTitle: string,
  description: IContent[],
  additions: IContent[]
}