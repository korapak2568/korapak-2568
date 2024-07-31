import {IContent} from "./IContent";

export interface IServiceInformation {
  title: string,
  span: string,
  subTitle: string,
  description: IContent[],
  contents: IContent[]
}
