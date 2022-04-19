import React, {useEffect, useState} from 'react'
import {ForecastCardProps} from '../../app/appWeatherTypes'

interface FiveDaysTreeHourProps extends ForecastCardProps {}

const FiveDaysTreeHour: React.FC<FiveDaysTreeHourProps> = ({location}) => {
  const [isLoad, setIsLoad] = useState(false)
  const [weather, setWeather] = useState()
  useEffect(() => {}, [])
  return (
    <div>
      FiveDaysTreeHour <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
    </div>
  )
}

export default FiveDaysTreeHour
