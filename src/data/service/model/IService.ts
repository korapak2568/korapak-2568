import {IImage} from "../../image/model/IImage";

export interface IService {
  isImage: boolean,
  isTwoLine: boolean,
  text1: string,
  text2: string,
  image: IImage,
  link: string,
}

export interface IServices {
  row1: IService[],
  row2: IService[],
  row3: IService[],
  row4: IService[]
}
