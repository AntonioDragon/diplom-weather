import React from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {useAppSelector} from '../../../app/appStoreHooks'
import {getForecastsActive} from '../../../store/weather/weatherSelectors'
import {ForecastSection} from './ForecastStyles'
import ForecastList from './ForecastWeatherList'

const Forecast: React.FC = () => {
  const activeForecasts = useAppSelector(getForecastsActive)

  return (
    <ForecastSection>
      <DndProvider backend={HTML5Backend}>
        <ForecastList forecasts={activeForecasts} />
      </DndProvider>
    </ForecastSection>
  )
}

export default Forecast
