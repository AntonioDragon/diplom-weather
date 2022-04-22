import {axiosInstance} from '../axios'
import {GeocodingType} from '../app/geocoding/geocodingTypes'
import currentWeather from './currentWeatherData.json'
import hourlyTwoDays from './hourlyTwoDays.json'
import DailyForecastEightDays from './dailyForecastEightDaysData.json'
import FiveDaysThreeHour from './fiveDaysThreeHourData.json'
import AirPollution from './airPollutionData.json'

export const weatherService = {
  getCurrentWeather: async (location: GeocodingType) => ({
    data: currentWeather
  }),
  // axiosInstance.get('data/2.5/weather', {
  //   params: {
  //     lat: location.lat,
  //     lon: location.lon,
  //     appid: process.env.REACT_APP_WEATHER_KEY
  //   }
  // }),
  getHourlyTwoDays: async (location: GeocodingType) => ({data: hourlyTwoDays}),
  // axiosInstance.get('data/2.5/onecall', {
  //   params: {
  //     lat: location.lat,
  //     lon: location.lon,
  //     appid: process.env.REACT_APP_WEATHER_KEY,
  //     exclude: 'current,minutely,daily,alerts'
  //   }
  // }),
  getDailyForecastEightDays: async (location: GeocodingType) => ({
    data: DailyForecastEightDays
  }),
  // axiosInstance.get('data/2.5/onecall', {
  //   params: {
  //     lat: location.lat,
  //     lon: location.lon,
  //     appid: process.env.REACT_APP_WEATHER_KEY,
  //     exclude: 'current,minutely,hourly,alerts'
  //   }
  // }),
  getFiveDaysThreeHour: async (location: GeocodingType) => ({
    data: FiveDaysThreeHour
  }),
  // axiosInstance.get('data/2.5/forecast', {
  //   params: {
  //     lat: location.lat,
  //     lon: location.lon,
  //     appid: process.env.REACT_APP_WEATHER_KEY
  //   }
  // }),
  getAirPollution: async (location: GeocodingType) => ({data: AirPollution})
  // axiosInstance.get('data/2.5/air_pollution', {
  //   params: {
  //     lat: location.lat,
  //     lon: location.lon,
  //     appid: process.env.REACT_APP_WEATHER_KEY
  //   }
  // })
}
