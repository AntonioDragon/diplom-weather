import React, {useEffect, useState} from 'react'
import {ForecastCardProps} from '../../app/appWeatherTypes'

interface SolarRadiationProps extends ForecastCardProps {}

const SolarRadiation: React.FC<SolarRadiationProps> = () => {
  const [isLoad, setIsLoad] = useState(false)
  const [weather, setWeather] = useState()
  useEffect(() => {}, [])
  return (
    <div>
      SolarRadiation <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
    </div>
  )
}

export default SolarRadiation
