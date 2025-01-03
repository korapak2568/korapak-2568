import {IContent} from "../content/IContent";

export interface IAbout {
  title: string,
  span: string,
  subTitle: string,

  description: IContent[],
  stacks: IContent[]
}