export interface FavoriteData {
  id?: number
  name: string
  lat: string
  lon: string
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

//http://openweathermap.org/img/w/
export interface WeatherApiData {
  coord: {lon: number; lat: number}
  weather: Weather[]
  base: string
  main: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
  }
  visibility: number
  wind: {
    speed: number
    deg: number
    gust: number
  }
  clouds: {all: number}
  dt: number
  sys: {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
  }
  timezone: number
  id: number
  name: string
  cod: number
}
