import React from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useAppSelector} from '../../../app/appStoreHooks'
import {getForecastsActive} from '../../../store/weather/weatherSelectors'
import ForecastElement from './ForecastElement'
import {ForecastSection, ForecastWeatherList} from './ForecastStyles'

const Forecast: React.FC = () => {
  const activeForecasts = useAppSelector(getForecastsActive)
  return (
    <ForecastSection>
      <DndProvider backend={HTML5Backend}>
        <ForecastWeatherList>
          {activeForecasts.map((forecasts, index) => (
            <ForecastElement
              key={index}
              activeForecasts={forecasts}
              idElement={index}
            />
          ))}
        </ForecastWeatherList>
      </DndProvider>
    </ForecastSection>
  )
}

export default Forecast
