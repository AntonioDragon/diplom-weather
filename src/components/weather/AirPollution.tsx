import React, {useEffect, useState} from 'react'
import {ForecastCardProps} from '../../app/appWeatherTypes'

interface AirPollutionProps extends ForecastCardProps {}

const AirPollution: React.FC<AirPollutionProps> = ({location, forecast}) => {
  const [isLoad, setIsLoad] = useState(false)
  const [weather, setWeather] = useState()
  useEffect(() => {}, [])

  return (
    <div>
      AirPollution <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
    </div>
  )
}

export default AirPollution
