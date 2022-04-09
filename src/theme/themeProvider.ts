import {ThemePaletteEnum} from './themePalette'
import themesWether from './themesWether'

const themeProvider = {
  getThemeByName: (name: ThemePaletteEnum) => {
    switch (name) {
      case ThemePaletteEnum.cloudy:
        return themesWether.getThemeCloudy()
      case ThemePaletteEnum.rainy:
        return themesWether.getThemeRainy()
      case ThemePaletteEnum.snowy:
        return themesWether.getThemeSnowy()
      case ThemePaletteEnum.solar:
        return themesWether.getThemeSolar()
      default:
        return themesWether.defaultTheme()
    }
  }
}

export default themeProvider
