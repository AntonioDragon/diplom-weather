import {axiosInstance} from '../axios'

export const geocodingService = {
  getLocations: async (location: string) =>
    axiosInstance.get('http://api.openweathermap.org/geo/1.0/direct', {
      params: {q: location, appid: process.env.REACT_APP_WEATHER_KEY}
    }),
  getNameLocation: async (lat: number, lon: number) =>
    axiosInstance.get('http://api.openweathermap.org/geo/1.0/reverse', {
      params: {
        lat: lat,
        lon: lon,
        limit: 5,
        appid: process.env.REACT_APP_WEATHER_KEY
      }
    })
}
