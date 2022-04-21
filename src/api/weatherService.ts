import {WeatherApiData} from '../app/appTypes'
import {Forecast} from '../app/appWeatherTypes'
import {axiosInstance} from '../axios'
import currentWeatherData from './currentWeatherData.json'
import DailyForecastEightDaysData from './dailyForecastEightDaysData.json'
import airPollutionData from './airPollutionData.json'
import AirPollution from '../app/weather/airPollution'
import fiveDaysThreeHourData from './fiveDaysThreeHourData.json'
import fiveDaysThreeHour from '../app/weather/fiveDaysThreeHour'
import {DailyForecastEightDaysWeather} from '../app/weather/dailyForecastEightDays'
import hourlyTwoDaysData from './hourlyTwoDays.json'
import {HourlyTwoDaysWeather} from '../app/weather/hourlyTwoDays'

export const weatherService = {
  getCurrentWeather: async (forecast: Forecast): Promise<WeatherApiData> =>
    currentWeatherData,
  getHourlyTwoDays: async (forecast: Forecast): Promise<HourlyTwoDaysWeather> =>
    hourlyTwoDaysData,
  getDailySixteenDays: async (forecast: Forecast): Promise<WeatherApiData> =>
    currentWeatherData,
  getDailyForecastEightDays: async (
    forecast: Forecast
  ): Promise<DailyForecastEightDaysWeather> => DailyForecastEightDaysData,
  getFiveDaysThreeHour: async (
    forecast: Forecast
  ): Promise<fiveDaysThreeHour> => fiveDaysThreeHourData,
  getAirPollution: async (forecast: Forecast): Promise<AirPollution> =>
    airPollutionData
}
