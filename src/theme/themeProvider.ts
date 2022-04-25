import {DefaultTheme} from 'styled-components'
import themesWether, {ThemePaletteEnum} from './themesWether'

const themeProvider = {
  getThemeByName: (name?: ThemePaletteEnum): DefaultTheme => {
    switch (name) {
      case ThemePaletteEnum.cloud:
        return themesWether.getThemeCloud()
      case ThemePaletteEnum.rain:
        return themesWether.getThemeRain()
      case ThemePaletteEnum.sun:
        return themesWether.getThemeSun()
      case ThemePaletteEnum.fog:
        return themesWether.getThemeFog()
      case ThemePaletteEnum.hail:
        return themesWether.getThemeHail()
      case ThemePaletteEnum.ice:
        return themesWether.getThemeIce()
      case ThemePaletteEnum.downpour:
        return themesWether.getThemeDownpour()
      case ThemePaletteEnum.snow:
        return themesWether.getThemeSnow()
      case ThemePaletteEnum.storm:
        return themesWether.getThemeStorm()
      case ThemePaletteEnum.thunderstorm:
        return themesWether.getThemeThunderstorm()
      case ThemePaletteEnum.windy:
        return themesWether.getThemeWindy()
      default:
        return themesWether.defaultTheme()
    }
  }
}

export default themeProvider
