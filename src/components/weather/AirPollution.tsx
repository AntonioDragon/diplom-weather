import React, {useEffect, useState} from 'react'
import {weatherService} from '../../api/weatherService'
import {ForecastCardProps} from '../../app/appWeatherTypes'
import {JustifyContentEnum} from '../../app/styles/stylesDisplay'
import AirPollutionWeather from '../../app/weather/airPollution'
import Loader from '../ui/loader/Loader'
import {BlockFlex, Header, Paragraph, WeatherCard} from './style/CardWeatherStyle'

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
  }, [])

  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <WeatherCard>
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
