import React, {useEffect, useState} from 'react'
import {ForecastCardProps} from '../../app/appWeatherTypes'

interface DailySixteenDaysProps extends ForecastCardProps {}

const DailySixteenDays: React.FC<DailySixteenDaysProps> = ({location}) => {
  const [isLoad, setIsLoad] = useState(false)
  const [weather, setWeather] = useState()
  useEffect(() => {}, [])
  return (
    <div>
      DailySixteenDays <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
      <h1>afsafsf</h1>
    </div>
  )
}

export default DailySixteenDays
