import {useCallback} from 'react'
import {WeatherApiData} from '../app/appTypes'
import {ThemePaletteEnum} from '../theme/themesWether'

const useGetStyleByWeather = () => {
  return useCallback((weather: WeatherApiData) => {
    switch (weather.weather[0].main) {
      case 'Clouds':
        return ThemePaletteEnum.cloud
      case 'Thunderstorm':
        return ThemePaletteEnum.thunderstorm
      case 'Drizzle':
        return ThemePaletteEnum.rain
      case 'Rain':
        return ThemePaletteEnum.downpour
      case 'Snow':
        return ThemePaletteEnum.snow
      case 'Mist':
      case 'Smoke':
      case 'Haze':
      case 'Dust':
      case 'Sand':
      case 'Ash':
        return ThemePaletteEnum.storm
      case 'Squall':
      case 'Tornado':
        return ThemePaletteEnum.windy
      case 'Clear':
        return ThemePaletteEnum.sun
      case 'Fog':
        return ThemePaletteEnum.fog
      default:
        return ThemePaletteEnum.default
    }
  }, [])
}

export default useGetStyleByWeather
