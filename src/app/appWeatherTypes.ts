export enum ForecastsWeather {
  currentWeather = 'CurrentWeather',
  hourlyFourDays = 'HourlyFourDays',
  dailySixteenDays = 'DailySixteenDays',
  climaticThirtyDays = 'ClimaticThirtyDays',
  solarRadiation = 'SolarRadiation',
  fiveDaysTreeHour = 'FiveDaysTreeHour',
  airPollution = 'AirPollution'
}

export interface Forecast {
  id: number
  image?: string
  name: ForecastsWeather
  isActive: boolean
}

export interface ForecastCardProps{
  location: string,
  forecast: Forecast
}

export interface Weather{
  
}