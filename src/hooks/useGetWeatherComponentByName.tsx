import {useCallback} from 'react'
import {Forecast, ForecastsWeather} from '../app/appWeatherTypes'
import AirPollution from '../components/weather/AirPollution'
import ClimaticThirtyDays from '../components/weather/ClimaticThirtyDays'
import CurrentWeather from '../components/weather/CurrentWeather'
import DailyForecastSixteenDays from '../components/weather/DailySixteenDays'
import FiveDaysTreeHour from '../components/weather/FiveDaysTreeHour'
import HourlyFourDays from '../components/weather/HourlyFourDays'
import SolarRadiation from '../components/weather/SolarRadiation'

const useGetWeatherComponent = ({location}: {location: string}) => {
  const getWeatherByNameAndLocation = useCallback(
    (forecast: Forecast) => {
      if (forecast.name === ForecastsWeather.currentWeather)
        return <CurrentWeather forecast={forecast} location={location} />
      if (forecast.name === ForecastsWeather.hourlyFourDays)
        return <HourlyFourDays forecast={forecast} location={location} />
      if (forecast.name === ForecastsWeather.dailySixteenDays)
        return <DailyForecastSixteenDays forecast={forecast} location={location} />
      if (forecast.name === ForecastsWeather.climaticThirtyDays)
        return <ClimaticThirtyDays forecast={forecast} location={location} />
      if (forecast.name === ForecastsWeather.solarRadiation)
        return <SolarRadiation forecast={forecast} location={location} />
      if (forecast.name === ForecastsWeather.fiveDaysTreeHour)
        return <FiveDaysTreeHour forecast={forecast} location={location} />
      if (forecast.name === ForecastsWeather.airPollution)
        return <AirPollution forecast={forecast} location={location} />
    },
    [location]
  )

  return getWeatherByNameAndLocation
}

export default useGetWeatherComponent
