export enum DisplayEnum {
  block = 'block',
  flex = 'flex',
  grid = 'grid',
  inline = 'inline',
  none = 'none'
}

export enum JustifyContentEnum {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center',
  spaceBetween = 'space-between',
  spaceAround = 'space-around',
  spaceEvenly = 'space-evenly'
}

export enum AlignItemsEnum {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center'
}

export interface Display {
  display?: DisplayEnum
  justifyContent?: JustifyContentEnum
  alignItems?: AlignItemsEnum
}
