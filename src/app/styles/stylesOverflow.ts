export enum OverflowEnum {
  auto = 'auto',
  hidden = 'hidden',
  scroll = 'scroll',
  visible = 'visible'
}

export interface Overflow {
  overflow?: OverflowEnum
  overflowY?: OverflowEnum
  overflowX?: OverflowEnum
}
