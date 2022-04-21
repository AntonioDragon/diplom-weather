import React, {useEffect, useState} from 'react'
import Carousel from 'react-multi-carousel'
import {weatherService} from '../../api/weatherService'
import {ForecastCardProps} from '../../app/appWeatherTypes'
import {HourlyTwoDaysWeather} from '../../app/weather/hourlyTwoDays'
import Loader from '../ui/loader/Loader'
import SliderCardHourlyTwoDays from './slider/Card/SliderCardHourlyTwoDays'
import {Header, WeatherCard} from './style/CardWeatherStyle'

const responsive = {
  superLargeDesktop: {
    breakpoint: {max: 4000, min: 3000},
    items: 3
  },
  desktop: {
    breakpoint: {max: 3000, min: 1255},
    items: 5
  },
  tablet: {
    breakpoint: {max: 1255, min: 1050},
    items: 4
  },
  tablet_middle: {
    breakpoint: {max: 1050, min: 992},
    items: 3.5
  },
  tablet_small: {
    breakpoint: {max: 992, min: 840},
    items: 3.5
  },
  mobile_big: {
    breakpoint: {max: 840, min: 730},
    items: 3
  },
  mobile_middle: {
    breakpoint: {max: 730, min: 630},
    items: 2.5
  },
  mobile: {
    breakpoint: {max: 630, min: 520},
    items: 2
  },
  mobile_small: {
    breakpoint: {max: 520, min: 0},
    items: 1
  }
}
interface HourlyTwoDaysProps extends ForecastCardProps {}

const HourlyTwoDays: React.FC<HourlyTwoDaysProps> = ({location, forecast}) => {
  const [isLoad, setIsLoad] = useState(false)
  const [weather, setWeather] = useState<HourlyTwoDaysWeather>()

  useEffect(() => {
    setIsLoad(true)
    weatherService.getHourlyTwoDays(forecast).then((data) => {
      setWeather(data)
      setIsLoad(false)
    })
  }, [])

  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <WeatherCard maxWidth='500px' padding='10px 15px'>
          <Header>Hourly Two Days</Header>
          <Carousel
            responsive={responsive}
            removeArrowOnDeviceType={[
              'tablet_small',
              'mobile_big',
              'mobile_middle',
              'mobile',
              'mobile_small'
            ]}
          >
            {weather?.hourly.map((hourlyWeather) => (
              <SliderCardHourlyTwoDays
                key={hourlyWeather.dt}
                weather={hourlyWeather}
              />
            ))}
          </Carousel>
        </WeatherCard>
      )}
    </>
  )
}

export default HourlyTwoDays
