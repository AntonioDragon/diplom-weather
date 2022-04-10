import {DefaultTheme} from 'styled-components'
import getPartOfTheDay, {PartDay} from './getPartOfTheDay'
import {CloudPalette} from './weatherPalette.ts/CloudPalette'
import {defaultPalette} from './weatherPalette.ts/DefaultPalette'
import {RainPalette} from './weatherPalette.ts/RainPalette'
import {SunPalette} from './weatherPalette.ts/SunPalette'

export enum ThemePaletteEnum {
  sun = 'sun',
  cloud = 'cloud',
  rain = 'rain'
}

const themesWether = {
  getThemeSun: (): DefaultTheme => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return SunPalette.getAfternoonThemeSun()
      case PartDay.evening:
        return SunPalette.getEveningThemeSun()
      case PartDay.morning:
        return SunPalette.getMorningThemeSun()
      case PartDay.night:
        return SunPalette.getNightThemeSun()
      default:
        return defaultPalette.geThemeDefault()
    }
  },
  getThemeCloud: (): DefaultTheme => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return CloudPalette.getAfternoonThemeCloud()
      case PartDay.evening:
        return CloudPalette.getEveningThemeCloud()
      case PartDay.morning:
        return CloudPalette.getMorningThemeCloud()
      case PartDay.night:
        return CloudPalette.getNightThemeCloud()
      default:
        return defaultPalette.geThemeDefault()
    }
  },
  getThemeRain: (): DefaultTheme => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return RainPalette.getAfternoonThemeRain()
      case PartDay.evening:
        return RainPalette.getEveningThemeRain()
      case PartDay.morning:
        return RainPalette.getMorningThemeRain()
      case PartDay.night:
        return RainPalette.getNightThemeRain()
      default:
        return defaultPalette.geThemeDefault()
    }
  },
  defaultTheme: (): DefaultTheme => defaultPalette.geThemeDefault()
}

export default themesWether
