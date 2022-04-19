import React, {useEffect, useState} from 'react'
import {ForecastCardProps} from '../../app/appWeatherTypes'

interface ClimaticThirtyDaysProps extends ForecastCardProps {}

const ClimaticThirtyDays: React.FC<ClimaticThirtyDaysProps> = ({location}) => {
  const [isLoad, setIsLoad] = useState(false)
  const [weather, setWeather] = useState()
  useEffect(() => {}, [])
  return (
    <div>
      <p>ClimaticThirtyDays</p>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
    </div>
  )
}

export default ClimaticThirtyDays
