export enum DisplayEnum {
  block = 'block',
  flex = 'flex',
  grid = 'grid'
}

export enum JustifyContent {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center',
  spaceBetween = 'space-between',
  spaceAround = 'space-around',
  spaceEvenly = 'space-evenly'
}

export enum AlignItems {
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center'
}

export interface Display {
  display?: DisplayEnum
  justifyContent?: JustifyContent
  alignItems?: AlignItems
}
