import {DefaultTheme} from 'styled-components'
import getPartOfTheDay, {PartDay} from './getPartOfTheDay'
import {CloudPalette} from './weatherPalette.ts/CloudPalette'
import {defaultPaletteBlack} from './weatherPalette.ts/DefaultBlackPalette'
import {defaultPalette} from './weatherPalette.ts/DefaultPalette'
import {DownpourPalette} from './weatherPalette.ts/DownpourPalette'
import {FogPalette} from './weatherPalette.ts/FogPalette'
import {HailPalette} from './weatherPalette.ts/HailPalette'
import {IcePalette} from './weatherPalette.ts/IcePalette'
import {RainPalette} from './weatherPalette.ts/RainPalette'
import {SnowPalette} from './weatherPalette.ts/SnowPalette'
import {StormPalette} from './weatherPalette.ts/StormPalette'
import {SunPalette} from './weatherPalette.ts/SunPalette'
import {ThunderstormPalette} from './weatherPalette.ts/ThunderstormPalette'
import {WindyPalette} from './weatherPalette.ts/WindyPalette'

export enum ThemePaletteEnum {
  sun = 'sun',
  cloud = 'cloud',
  rain = 'rain',
  fog = 'fog',
  hail = 'hail',
  ice = 'ice',
  downpour = 'downpour',
  snow = 'snow',
  storm = 'storm',
  thunderstorm = 'thunderstorm',
  windy = 'windy'
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
        return defaultPalette.getThemeDefault()
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
        return defaultPalette.getThemeDefault()
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
        return defaultPalette.getThemeDefault()
    }
  },
  getThemeFog: (): DefaultTheme => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return FogPalette.getAfternoonThemeFog()
      case PartDay.evening:
        return FogPalette.getEveningThemeFog()
      case PartDay.morning:
        return FogPalette.getMorningThemeFog()
      case PartDay.night:
        return FogPalette.getNightThemeFog()
      default:
        return defaultPalette.getThemeDefault()
    }
  },
  getThemeHail: (): DefaultTheme => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return HailPalette.getAfternoonThemeHail()
      case PartDay.evening:
        return HailPalette.getEveningThemeHail()
      case PartDay.morning:
        return HailPalette.getMorningThemeHail()
      case PartDay.night:
        return HailPalette.getNightThemeHail()
      default:
        return defaultPalette.getThemeDefault()
    }
  },
  getThemeIce: (): DefaultTheme => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return IcePalette.getAfternoonThemeIce()
      case PartDay.evening:
        return IcePalette.getEveningThemeIce()
      case PartDay.morning:
        return IcePalette.getMorningThemeIce()
      case PartDay.night:
        return IcePalette.getNightThemeIce()
      default:
        return defaultPalette.getThemeDefault()
    }
  },
  getThemeDownpour: (): DefaultTheme => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return DownpourPalette.getAfternoonThemeDownpour()
      case PartDay.evening:
        return DownpourPalette.getEveningThemeDownpour()
      case PartDay.morning:
        return DownpourPalette.getMorningThemeDownpour()
      case PartDay.night:
        return DownpourPalette.getNightThemeDownpour()
      default:
        return defaultPalette.getThemeDefault()
    }
  },
  getThemeSnow: (): DefaultTheme => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return SnowPalette.getAfternoonThemeSnow()
      case PartDay.evening:
        return SnowPalette.getEveningThemeSnow()
      case PartDay.morning:
        return SnowPalette.getMorningThemeSnow()
      case PartDay.night:
        return SnowPalette.getNightThemeSnow()
      default:
        return defaultPalette.getThemeDefault()
    }
  },
  getThemeStorm: (): DefaultTheme => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return StormPalette.getAfternoonThemeStorm()
      case PartDay.evening:
        return StormPalette.getEveningThemeStorm()
      case PartDay.morning:
        return StormPalette.getMorningThemeStorm()
      case PartDay.night:
        return StormPalette.getNightThemeStorm()
      default:
        return defaultPalette.getThemeDefault()
    }
  },
  getThemeThunderstorm: (): DefaultTheme => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return ThunderstormPalette.getAfternoonThemeThunderstorm()
      case PartDay.evening:
        return ThunderstormPalette.getEveningThemeThunderstorm()
      case PartDay.morning:
        return ThunderstormPalette.getMorningThemeThunderstorm()
      case PartDay.night:
        return ThunderstormPalette.getNightThemeThunderstorm()
      default:
        return defaultPalette.getThemeDefault()
    }
  },
  getThemeWindy: (): DefaultTheme => {
    switch (getPartOfTheDay()) {
      case PartDay.afternoon:
        return WindyPalette.getAfternoonThemeWindy()
      case PartDay.evening:
        return WindyPalette.getEveningThemeWindy()
      case PartDay.morning:
        return WindyPalette.getMorningThemeWindy()
      case PartDay.night:
        return WindyPalette.getNightThemeWindy()
      default:
        return defaultPalette.getThemeDefault()
    }
  },
  defaultTheme: (): DefaultTheme => defaultPalette.getThemeDefault(),
  defaultBlackTheme: (): DefaultTheme =>
    defaultPaletteBlack.getThemeDefaultBlack()
}

export default themesWether
