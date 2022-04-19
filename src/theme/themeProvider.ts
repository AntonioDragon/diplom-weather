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
      default:
        return themesWether.defaultTheme()
    }
  }
}

export default themeProvider
