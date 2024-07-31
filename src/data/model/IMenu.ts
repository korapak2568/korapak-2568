export interface IMenu  {
  index: number,
  label: string | null,
  link: string | null,
  items: IMenu[],
  isSeparate: boolean
}
