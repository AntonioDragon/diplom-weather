import getPartOfTheDay, {PartDay} from './getPartOfTheDay'
import themePalette from './themePalette'

const themesWether = {
  getThemeSolar: () => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return themePalette.sun_afternoon()
      case PartDay.evening:
        return themePalette
      case PartDay.morning:
        return themePalette
      case PartDay.night:
        return themePalette
    }
  },
  getThemeCloudy: () => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return themePalette.sun_afternoon()
      case PartDay.evening:
        return themePalette
      case PartDay.morning:
        return themePalette
      case PartDay.night:
        return themePalette
    }
  },
  getThemeRainy: () => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return themePalette.sun_afternoon()
      case PartDay.evening:
        return themePalette
      case PartDay.morning:
        return themePalette
      case PartDay.night:
        return themePalette
    }
  },
  getThemeSnowy: () => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return themePalette.sun_afternoon()
      case PartDay.evening:
        return themePalette
      case PartDay.morning:
        return themePalette
      case PartDay.night:
        return themePalette
    }
  },
  defaultTheme: () => {
        
  }
}

export default themesWether