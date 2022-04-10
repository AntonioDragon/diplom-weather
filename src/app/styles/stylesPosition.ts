export enum PositionEnum {
  relative = 'relative',
  absolute = 'absolute',
  fixed = 'fixed',
  inherit = 'inherit'
}
export interface Position {
  position?: PositionEnum
  top?: string
  right?: string
  bottom?: string
  left?: string
  zIndex?: string
}
