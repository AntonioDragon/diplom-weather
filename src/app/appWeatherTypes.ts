import { GeocodingType } from "./geocoding/geocodingTypes"

export enum ForecastsWeather {
  currentWeather = 'CurrentWeather',
  dailyForecastEightDays = 'DailyForecastEightDays',
  fiveDaysTreeHour = 'FiveDaysTreeHour',
  hourlyTwoDays = 'HourlyTwoDays',
  airPollution = 'AirPollution'
}

export interface Forecast {
  id: number
  image?: string
  name: ForecastsWeather
  isActive: boolean
}

export interface ForecastCardProps {
  location: GeocodingType
  forecast: Forecast
}

export interface Weather {}
