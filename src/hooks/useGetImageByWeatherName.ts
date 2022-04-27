import {useCallback} from 'react'
import {ThemePaletteEnum} from '../theme/themesWether'
import cloudsImage from '../assets/images/weathers/clouds.jpg'
import downpourImage from '../assets/images/weathers/downpour.jpg'
import fogImage from '../assets/images/weathers/fog.jpg'
import rainImage from '../assets/images/weathers/rain.jpg'
import sky_sunImage from '../assets/images/weathers/sky_sun.jpg'
import snowImage from '../assets/images/weathers/snow.jpg'
import stormImage from '../assets/images/weathers/storm.jpg'
import thunderstormImage from '../assets/images/weathers/thunderstorm.jpg'
import windyImage from '../assets/images/weathers/windy.jpg'

const useGetImageByWeatherName = () => {
  return useCallback((name: ThemePaletteEnum) => {
    switch (name) {
      case ThemePaletteEnum.cloud:
        return cloudsImage
      case ThemePaletteEnum.windy:
        return windyImage
      case ThemePaletteEnum.downpour:
        return downpourImage
      case ThemePaletteEnum.fog:
        return fogImage
      case ThemePaletteEnum.rain:
        return rainImage
      case ThemePaletteEnum.sun:
        return sky_sunImage
      case ThemePaletteEnum.snow:
        return snowImage
      case ThemePaletteEnum.storm:
        return stormImage
      case ThemePaletteEnum.thunderstorm:
        return thunderstormImage
      default:
        return ''
    }
  }, [])
}

export default useGetImageByWeatherName
