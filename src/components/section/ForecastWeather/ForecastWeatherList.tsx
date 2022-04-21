import React from 'react'
import {useDrop} from 'react-dnd'
import {useAppDispatch} from '../../../app/appStoreHooks'
import {Forecast} from '../../../app/appWeatherTypes'
import {setActiveForecastDropDown} from '../../../store/weather/weatherReducer'
import {ItemTypes} from '../../dnd/enum'
import {DropPosition} from '../../dnd/dropPosition'
import WeatherCard from '../../ui/card/WeatherCard/WeatherCard'
import {
  DropZoneBottom,
  ForecastWeatherElement,
  ForecastWeatherList
} from './ForecastStyles'

interface ForecastElementProps {
  forecasts: Forecast[]
}

const ForecastList: React.FC<ForecastElementProps> = ({forecasts}) => {
  const dispatch = useAppDispatch()

  const [{isOver: isOverBottom}, dropBottom] = useDrop(
    () => ({
      accept: ItemTypes.Card,
      drop: (item: {id: number}) => {
        dispatch(
          setActiveForecastDropDown({
            position: DropPosition.bottom,
            id: item.id
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
      <ForecastWeatherList>
        {forecasts.map((forecast, index) => (
          <ForecastWeatherElement key={forecast.id}>
            <WeatherCard
              key={forecast.id}
              idElement={index}
              forecast={forecast}
              location='London'
            />
          </ForecastWeatherElement>
        ))}
        <DropZoneBottom isActive={isOverBottom} ref={dropBottom} />
      </ForecastWeatherList>
    </>
  )
}

export default ForecastList
