import {BoxShadow} from './stylesBoxShadow'
import {Opacity} from './stylesOpacity'
import {Background} from './stylesBackground'
import {Border} from './stylesBorder'
import {Display} from './stylesDisplay'
import {Font} from './stylesFont'
import {Margin} from './stylesMargin'
import {ObjectFit} from './stylesObjectFit'
import {Overflow} from './stylesOverflow'
import {Padding} from './stylesPadding'
import {Position} from './stylesPosition'

export interface StyleProps
  extends Position,
    Display,
    Padding,
    Margin,
    Font,
    Background,
    Border,
    Overflow,
    ObjectFit,
    Opacity,
    BoxShadow {
  width?: string
  height?: string
  transition?: string
}