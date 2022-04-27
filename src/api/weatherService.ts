import {axiosInstance} from '../axios'
import {GeocodingType} from '../app/geocoding/geocodingTypes'

export const weatherService = {
  getCurrentWeather: async (location: GeocodingType) =>
    axiosInstance.get('data/2.5/weather', {
      params: {
        lat: location.lat,
        lon: location.lon,
        appid: process.env.REACT_APP_WEATHER_KEY,
        units: 'metric'
      }
    }),
  getHourlyTwoDays: async (location: GeocodingType) =>
    axiosInstance.get('data/2.5/onecall', {
      params: {
        lat: location.lat,
        lon: location.lon,
        appid: process.env.REACT_APP_WEATHER_KEY,
        exclude: 'current,minutely,daily,alerts',
        units: 'metric'
      }
    }),
  getDailyForecastEightDays: async (location: GeocodingType) =>
    axiosInstance.get('data/2.5/onecall', {
      params: {
        lat: location.lat,
        lon: location.lon,
        appid: process.env.REACT_APP_WEATHER_KEY,
        exclude: 'current,minutely,hourly,alerts',
        units: 'metric'
      }
    }),
  getFiveDaysThreeHour: async (location: GeocodingType) =>
    axiosInstance.get('data/2.5/forecast', {
      params: {
        lat: location.lat,
        lon: location.lon,
        appid: process.env.REACT_APP_WEATHER_KEY,
        units: 'metric'
      }
    }),
  getAirPollution: async (location: GeocodingType) =>
    axiosInstance.get('data/2.5/air_pollution', {
      params: {
        lat: location.lat,
        lon: location.lon,
        appid: process.env.REACT_APP_WEATHER_KEY
      }
    })
}
