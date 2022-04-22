import React from 'react'
import {useDrop} from 'react-dnd'
import {useAppDispatch} from '../../../../app/appStoreHooks'
import {Forecast} from '../../../../app/appWeatherTypes'
import { GeocodingType } from '../../../../app/geocoding/geocodingTypes'
import useGetWeatherComponent from '../../../../hooks/useGetWeatherComponentByName'
import {
  removeActiveForecast,
  setActiveForecastDropDown
} from '../../../../store/weather/weatherReducer'
import {DropPosition} from '../../../dnd/dropPosition'
import {ItemTypes} from '../../../dnd/enum'
import {DropZoneTop} from '../../../section/ForecastWeather/ForecastStyles'
import {CardTitle, WeatherCardBlock} from './WeatherCardStyles'
import {CardButton} from './WeatherCardStyles'

interface WeatherCardProps {
  location: GeocodingType
  forecast: Forecast
  idElement: number
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  forecast,
  idElement
}) => {
  const dispatch = useAppDispatch()
  const getForecast = useGetWeatherComponent({location})

  const [{isOver: isOverTop}, dropTop] = useDrop(
    () => ({
      accept: ItemTypes.Card,
      drop: (item: {id: number}) => {
        dispatch(
          setActiveForecastDropDown({
            position: DropPosition.top,
            id: item.id,
            idElement: idElement
          })
        )
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }),
    []
  )
  return (
    <>
      <DropZoneTop ref={dropTop} isActive={isOverTop} />
      <WeatherCardBlock>
        <CardTitle>{location.name}</CardTitle>
        <CardButton onClick={() => dispatch(removeActiveForecast(forecast.id))}>
          <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
            <path d='M8 19H16Q16 19 16 19Q16 19 16 19V9H8V19Q8 19 8 19Q8 19 8 19ZM5 6V4H8.5L9.5 3H14.5L15.5 4H19V6ZM8 21Q7.175 21 6.588 20.413Q6 19.825 6 19V7H18V19Q18 19.825 17.413 20.413Q16.825 21 16 21ZM8 19H16Q16 19 16 19Q16 19 16 19H8Q8 19 8 19Q8 19 8 19Z' />
          </svg>
        </CardButton>
        {getForecast(forecast)}
      </WeatherCardBlock>
    </>
  )
}

export default WeatherCard
