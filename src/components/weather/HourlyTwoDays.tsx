import React, {useEffect, useState} from 'react'
import Carousel from 'react-multi-carousel'
import {weatherService} from '../../api/weatherService'
import {ForecastCardProps} from '../../app/appWeatherTypes'
import {HourlyTwoDaysWeather} from '../../app/weather/hourlyTwoDays'
import Loader from '../ui/loader/Loader'
import SliderCardHourlyTwoDays from './slider/Card/SliderCardHourlyTwoDays'
import SliderDot from './slider/Dots/SliderDot'
import {
  ButtonRefresh,
  Header,
  WeatherCard,
  WrapperLoader
} from './style/CardWeatherStyle'

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
    weatherService.getHourlyTwoDays(location).then(({data}) => {
      setWeather(data)
      setIsLoad(false)
    })
  }, [location])

  const onClickRefreshWeather = () => {
    setIsLoad(true)
    weatherService.getFiveDaysThreeHour(location).then(({data}) => {
      setWeather(data)
      setIsLoad(false)
    })
  }

  return (
    <>
      {isLoad ? (
        <WrapperLoader>
          <Loader />
        </WrapperLoader>
      ) : (
        <WeatherCard maxWidth='500px' padding='10px 15px'>
          <ButtonRefresh onClick={onClickRefreshWeather}>
            <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
              <path d='M12 20Q8.65 20 6.325 17.675Q4 15.35 4 12Q4 8.65 6.325 6.325Q8.65 4 12 4Q13.725 4 15.3 4.713Q16.875 5.425 18 6.75V4H20V11H13V9H17.2Q16.4 7.6 15.013 6.8Q13.625 6 12 6Q9.5 6 7.75 7.75Q6 9.5 6 12Q6 14.5 7.75 16.25Q9.5 18 12 18Q13.925 18 15.475 16.9Q17.025 15.8 17.65 14H19.75Q19.05 16.65 16.9 18.325Q14.75 20 12 20Z' />
            </svg>
          </ButtonRefresh>
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
