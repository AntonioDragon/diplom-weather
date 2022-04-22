import {GeocodingType} from '../app/geocoding/geocodingTypes'
import {axiosInstance} from '../axios'
import geocodingData from './geocodingData.json'

export const geocodingService = {
  getLocations: async (location: string): Promise<GeocodingType[]> => geocodingData
    // axiosInstance.get('http://api.openweathermap.org/geo/1.0/direct', {
    //   params: {q: location, appid: process.env.REACT_APP_WEATHER_KEY}
    // })
}
