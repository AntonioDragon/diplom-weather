import React, {useCallback, useState} from 'react'
import {useAppSelector} from '../../../app/appStoreHooks'
import {getForecasts} from '../../../store/weather/weatherSelectors'
import Slider from '../../Slider'
import WeatherPreviewCard from '../../ui/card/WeatherPreviewCard/WeatherPreviewCard'
import {
  ForecastButton,
  Forecasts,
  ForecastSection,
  ForecastWrapper
} from './ForecastStyles'

const responsive = {
  desktop: {
    breakpoint: {max: 3000, min: 1024},
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: {max: 1024, min: 464},
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: {max: 464, min: 0},
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
}

const Forecast: React.FC = () => {
  const {forecasts} = useAppSelector(getForecasts)
  const [isActiveForecast, setIsActiveForecast] = useState(true)

  const onChangeActiveForecast = useCallback(
    () => setIsActiveForecast(!isActiveForecast),
    [isActiveForecast]
  )

  return (
    <ForecastSection>
      <Forecasts isActive={isActiveForecast}>
        <ForecastWrapper>
          <Slider responsive={responsive} draggable={false} showDots={false}>
            {forecasts.map((forecast) => (
              <WeatherPreviewCard {...forecast} />
            ))}
          </Slider>
          <ForecastButton
            handler={onChangeActiveForecast}
            isActive={isActiveForecast}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              height='24px'
              viewBox='0 0 24 24'
              width='24px'
            >
              <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
            </svg>
          </ForecastButton>
        </ForecastWrapper>
      </Forecasts>
    </ForecastSection>
  )
}

export default Forecast
