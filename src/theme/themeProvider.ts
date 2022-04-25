import {DefaultTheme} from 'styled-components'
import { PartDay } from './getPartOfTheDay'
import themesWether, {ThemePaletteEnum} from './themesWether'

const themeProvider = {
  getThemeByName: (name?: ThemePaletteEnum, date?: PartDay): DefaultTheme => {
    switch (name) {
      case ThemePaletteEnum.cloud:
        return themesWether.getThemeCloud(date)
      case ThemePaletteEnum.rain:
        return themesWether.getThemeRain(date)
      case ThemePaletteEnum.sun:
        return themesWether.getThemeSun(date)
      case ThemePaletteEnum.fog:
        return themesWether.getThemeFog(date)
      case ThemePaletteEnum.hail:
        return themesWether.getThemeHail(date)
      case ThemePaletteEnum.ice:
        return themesWether.getThemeIce(date)
      case ThemePaletteEnum.downpour:
        return themesWether.getThemeDownpour(date)
      case ThemePaletteEnum.snow:
        return themesWether.getThemeSnow(date)
      case ThemePaletteEnum.storm:
        return themesWether.getThemeStorm(date)
      case ThemePaletteEnum.thunderstorm:
        return themesWether.getThemeThunderstorm(date)
      case ThemePaletteEnum.windy:
        return themesWether.getThemeWindy(date)
      case ThemePaletteEnum.black:
        return themesWether.defaultBlackTheme(date)
      case ThemePaletteEnum.default:
        return themesWether.defaultTheme(date)
      default:
        return themesWether.defaultTheme(date)
    }
  }
}

export default themeProvider
