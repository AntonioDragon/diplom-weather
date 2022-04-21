import React from 'react'
import {useDrop} from 'react-dnd'
import {useAppDispatch} from '../../../../app/appStoreHooks'
import {Forecast} from '../../../../app/appWeatherTypes'
import useGetWeatherComponent from '../../../../hooks/useGetWeatherComponentByName'
import {setActiveForecastDropDown} from '../../../../store/weather/weatherReducer'
import {DropPosition} from '../../../dnd/dropPosition'
import {ItemTypes} from '../../../dnd/enum'
import {DropZoneTop} from '../../../section/ForecastWeather/ForecastStyles'
import {WeatherCardBlock} from './WeatherCardStyles'

interface WeatherCardProps {
  location: string
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
      <WeatherCardBlock>{getForecast(forecast)}</WeatherCardBlock>
    </>
  )
}

export default WeatherCard
