import {WeatherApiData} from '../app/appTypes'
import {Forecast} from '../app/appWeatherTypes'
import {axiosInstance} from '../axios'
import currentWeatherData from './currentWeatherData.json'

export const weatherService = {
  getCurrentWeather: async (forecast: Forecast): Promise<WeatherApiData> =>
    currentWeatherData,
  getHourlyFourDays: async (forecast: Forecast): Promise<WeatherApiData> =>
    currentWeatherData,
  getDailySixteenDays: async (forecast: Forecast): Promise<WeatherApiData> =>
    currentWeatherData,
  getClimaticThirtyDays: async (forecast: Forecast): Promise<WeatherApiData> =>
    currentWeatherData,
  getSolarRadiation: async (forecast: Forecast): Promise<WeatherApiData> =>
    currentWeatherData,
  getFiveDaysTreeHour: async (forecast: Forecast): Promise<WeatherApiData> =>
    currentWeatherData,
  getAirPollution: async (forecast: Forecast): Promise<WeatherApiData> =>
    currentWeatherData
}
