import React, {useCallback, useState} from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useAppDispatch, useAppSelector} from '../../app/appStoreHooks'
import {
  setActiveForecast,
  removeActiveForecast
} from '../../store/weather/weatherReducer'
import {getForecasts} from '../../store/weather/weatherSelectors'
import WeatherPreviewCard from '../ui/card/WeatherPreviewCard/WeatherPreviewCard'
import Bar from './Bar/Bar'
import {BarElement} from './Bar/BarStyles'

const ForecastsBar: React.FC = () => {
  const forecasts = useAppSelector(getForecasts)
  const dispatch = useAppDispatch()

  const [isActive, setIsActive] = useState(false)

  const onSetActiveFavorite = useCallback(
    (state: boolean) => setIsActive(state),
    []
  )

  const onClickWeatherPreview = useCallback(
    (id: number) => dispatch(setActiveForecast(id)),
    [dispatch]
  )

  const onClickRemoveWeatherElement = useCallback(
    (id: number) => dispatch(removeActiveForecast(id)),
    [dispatch]
  )

  return (
    <Bar onSetIsActive={onSetActiveFavorite} isActive={isActive}>
      <DndProvider backend={HTML5Backend}>
        {forecasts.map((forecast) => (
          <BarElement key={forecast.id}>
            <WeatherPreviewCard
              {...forecast}
              onClickAdd={() => onClickWeatherPreview(forecast.id)}
              onClickRemove={() => onClickRemoveWeatherElement(forecast.id)}
              dragStart={onSetActiveFavorite}
            />
          </BarElement>
        ))}
      </DndProvider>
    </Bar>
  )
}

export default ForecastsBar
