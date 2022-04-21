import {useCallback} from 'react'
import {Forecast, ForecastsWeather} from '../app/appWeatherTypes'
import AirPollution from '../components/weather/AirPollution'
import CurrentWeather from '../components/weather/CurrentWeather'
import DailyForecastEightDays from '../components/weather/DailyForecastEightDays'
import FiveDaysTreeHour from '../components/weather/FiveDaysTreeHour'
import HourlyTwoDays from '../components/weather/HourlyTwoDays'

const useGetWeatherComponent = ({location}: {location: string}) => {
  const getWeatherByNameAndLocation = useCallback(
    (forecast: Forecast) => {
      if (forecast.name === ForecastsWeather.currentWeather)
        return <CurrentWeather forecast={forecast} location={location} />
      if (forecast.name === ForecastsWeather.dailyForecastEightDays)
        return (
          <DailyForecastEightDays forecast={forecast} location={location} />
        )
      if (forecast.name === ForecastsWeather.hourlyTwoDays)
        return <HourlyTwoDays forecast={forecast} location={location} />
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
