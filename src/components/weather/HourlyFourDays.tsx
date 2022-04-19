import React, {useEffect, useState} from 'react'
import {ForecastCardProps} from '../../app/appWeatherTypes'

interface HourlyFourDaysProps extends ForecastCardProps {}

const HourlyFourDays: React.FC<HourlyFourDaysProps> = () => {
  const [isLoad, setIsLoad] = useState(false)
  const [weather, setWeather] = useState()
  useEffect(() => {}, [])
  return (
    <div>
      HourlyFourDays <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
    </div>
  )
}

export default HourlyFourDays
