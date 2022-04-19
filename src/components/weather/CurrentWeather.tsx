import React, {useEffect, useState} from 'react'
import {weatherService} from '../../api/weatherService'
import {WeatherApiData} from '../../app/appTypes'
import {ForecastCardProps} from '../../app/appWeatherTypes'
import Loader from '../ui/loader/Loader'

interface CurrentWeatherProps extends ForecastCardProps {}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  location,
  forecast
}) => {
  const [isLoad, setIsLoad] = useState(false)
  const [weather, setWeather] = useState<WeatherApiData>()

  useEffect(() => {
    setIsLoad(true)
    weatherService.getCurrentWeather(forecast).then((data) => {
      setWeather(data)
      setIsLoad(false)
    })
  }, [])

  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <div>
          <img
            src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`}
            alt={weather?.weather[0].description}
          />
          <p>Temp:</p>
          <p>
            <span>max:</span>
            {weather?.main.temp_max}
            <span>min:</span>
            {weather?.main.temp_min}
          </p>
          <p>
            <span> Pressure:</span>
            {weather?.main.pressure}
          </p>
          <p>
            <span>Humidity:</span> {weather?.main.humidity}
          </p>
          <p>
            <span>Wind:</span> {weather?.wind.speed}
          </p>
          <p>
            <span>Clouds:</span>
            {weather?.clouds.all}%
          </p>
        </div>
      )}
    </>
  )
}

export default CurrentWeather
