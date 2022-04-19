import React from 'react'
import {useDrop} from 'react-dnd'
import {useAppDispatch} from '../../../../app/appStoreHooks'
import {Forecast} from '../../../../app/appWeatherTypes'
import useGetWeatherComponent from '../../../../hooks/useGetWeatherComponentByName'
import {setActiveForecastDropDown} from '../../../../store/weather/weatherReducer'
import {ItemTypes} from '../../../dnd/enum'
import {DropPosition} from '../../../dnd/dropPosition'
import {
  DropZoneLeft,
  DropZoneRight,
  WeatherCardBlock
} from './WeatherCardStyles'

interface WeatherCardProps {
  location: string
  forecast: Forecast
  isMaxBlock: boolean
  idElement: number
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  location,
  forecast,
  isMaxBlock,
  idElement
}) => {
  const dispatch = useAppDispatch()
  const getForecast = useGetWeatherComponent({location})

  const [{isOver: isOverLeft}, dropLeft] = useDrop(
    () => ({
      accept: ItemTypes.Card,
      drop: (item: {id: number; isActive?: boolean}) => {
        dispatch(
          setActiveForecastDropDown({
            position: DropPosition.left,
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

  const [{isOver: isOverRight}, dropRight] = useDrop(
    () => ({
      accept: ItemTypes.Card,
      drop: (item: {id: number; isActive?: boolean}) => {
        dispatch(
          setActiveForecastDropDown({
            position: DropPosition.right,
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
    <WeatherCardBlock>
      {getForecast(forecast)}
      {!isMaxBlock && (
        <>
          <DropZoneLeft isActive={isOverLeft} ref={dropLeft} />
          <DropZoneRight isActive={isOverRight} ref={dropRight} />
        </>
      )}
    </WeatherCardBlock>
  )
}

export default WeatherCard
