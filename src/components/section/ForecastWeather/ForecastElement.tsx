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
  DropZoneTop,
  ForecastWeatherElement
} from './ForecastStyles'

interface ForecastElementProps {
  activeForecasts: Forecast[]
  idElement: number
}

const ForecastElement: React.FC<ForecastElementProps> = ({
  activeForecasts,
  idElement
}) => {
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

  const [{isOver: isOverTop}, dropTop] = useDrop(
    () => ({
      accept: ItemTypes.Card,
      drop: (item: {id: number}) => {
        dispatch(
          setActiveForecastDropDown({
            position: DropPosition.top,
            id: item.id,
            indexElement: idElement
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
      <ForecastWeatherElement>
        <DropZoneTop ref={dropTop} isActive={isOverTop} />
        {activeForecasts.map((forecast: Forecast) => (
          <WeatherCard
            key={forecast.id}
            idElement={idElement}
            isMaxBlock={activeForecasts.length === 2}
            forecast={forecast}
            location='London'
          />
        ))}
      </ForecastWeatherElement>
      <DropZoneBottom isActive={isOverBottom} ref={dropBottom} />
    </>
  )
}

export default ForecastElement
