import React, {useEffect, useState} from 'react'
import {weatherService} from '../../api/weatherService'
import {ForecastCardProps} from '../../app/appWeatherTypes'
import {JustifyContentEnum} from '../../app/styles/stylesDisplay'
import AirPollutionWeather from '../../app/weather/airPollution'
import Loader from '../ui/loader/Loader'
import {
  BlockFlex,
  ButtonRefresh,
  Header,
  Paragraph,
  WeatherCard,
  WrapperLoader
} from './style/CardWeatherStyle'

interface AirPollutionProps extends ForecastCardProps {}

const AirPollution: React.FC<AirPollutionProps> = ({location, forecast}) => {
  const [isLoad, setIsLoad] = useState(false)
  const [weather, setWeather] = useState<AirPollutionWeather | undefined>()
  useEffect(() => {
    setIsLoad(true)
    weatherService.getAirPollution(location).then(({data}) => {
      setWeather(data)
      setIsLoad(false)
    })
  }, [location])

  const onClickRefreshWeather = () => {
    setIsLoad(true)
    weatherService.getAirPollution(location).then(({data}) => {
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
        <WeatherCard>
          <ButtonRefresh onClick={onClickRefreshWeather}>
            <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
              <path d='M12 20Q8.65 20 6.325 17.675Q4 15.35 4 12Q4 8.65 6.325 6.325Q8.65 4 12 4Q13.725 4 15.3 4.713Q16.875 5.425 18 6.75V4H20V11H13V9H17.2Q16.4 7.6 15.013 6.8Q13.625 6 12 6Q9.5 6 7.75 7.75Q6 9.5 6 12Q6 14.5 7.75 16.25Q9.5 18 12 18Q13.925 18 15.475 16.9Q17.025 15.8 17.65 14H19.75Q19.05 16.65 16.9 18.325Q14.75 20 12 20Z' />
            </svg>
          </ButtonRefresh>
          <Header>Air Pollution</Header>
          <BlockFlex justifyContent={JustifyContentEnum.spaceEvenly}>
            <div>
              <Paragraph margin='20px 0'>
                <span>co: </span>
                {weather?.list[0].components.co}
              </Paragraph>
              <Paragraph margin='20px 0'>
                <span>no: </span>
                {weather?.list[0].components.no}
              </Paragraph>
              <Paragraph margin='20px 0'>
                <span>no2: </span>
                {weather?.list[0].components.no2}
              </Paragraph>
              <Paragraph margin='20px 0'>
                <span>o3: </span>
                {weather?.list[0].components.o3}
              </Paragraph>
            </div>
            <div>
              <Paragraph margin='20px 0'>
                <span>so2: </span>
                {weather?.list[0].components.so2}
              </Paragraph>
              <Paragraph margin='20px 0'>
                <span>pm2.5: </span>
                {weather?.list[0].components.pm2_5}
              </Paragraph>
              <Paragraph margin='20px 0'>
                <span>pm10: </span>
                {weather?.list[0].components.pm10}
              </Paragraph>
              <Paragraph margin='20px 0'>
                <span>nh3: </span>
                {weather?.list[0].components.nh3}
              </Paragraph>
            </div>
          </BlockFlex>
        </WeatherCard>
      )}
    </>
  )
}

export default AirPollution
