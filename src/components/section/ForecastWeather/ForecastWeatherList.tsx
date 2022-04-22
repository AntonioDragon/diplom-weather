import React from 'react'
import {useDrop} from 'react-dnd'
import {useAppDispatch, useAppSelector} from '../../../app/appStoreHooks'
import {Forecast} from '../../../app/appWeatherTypes'
import {setActiveForecastDropDown} from '../../../store/weather/weatherReducer'
import {ItemTypes} from '../../dnd/enum'
import {DropPosition} from '../../dnd/dropPosition'
import WeatherCard from '../../ui/card/WeatherCard/WeatherCard'
import {
  DropZoneBottom,
  ForecastNotFound,
  ForecastNotFoundParagraph,
  ForecastWeatherElement,
  ForecastWeatherList
} from './ForecastStyles'
import {getActiveLocation} from '../../../store/geocoding/geocodingSelectors'

interface ForecastElementProps {
  forecasts: Forecast[]
}

const ForecastList: React.FC<ForecastElementProps> = ({forecasts}) => {
  const activeLocation = useAppSelector(getActiveLocation)
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
        {forecasts.length === 0 && (
          <>
            <ForecastNotFound>
              Until you add one of the forecast types, we won't be able to show
              it to you.
            </ForecastNotFound>
            <ForecastNotFoundParagraph>(;-;)</ForecastNotFoundParagraph>
          </>
        )}
        {activeLocation &&
          forecasts.map((forecast, index) => (
            <ForecastWeatherElement key={forecast.id}>
              <WeatherCard
                key={forecast.id}
                idElement={index}
                forecast={forecast}
                location={activeLocation!}
              />
            </ForecastWeatherElement>
          ))}
        <DropZoneBottom isActive={isOverBottom} ref={dropBottom} />
      </ForecastWeatherList>
    </>
  )
}

export default ForecastList
