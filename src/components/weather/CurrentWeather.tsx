import React, {useEffect, useMemo, useState} from 'react'
import {weatherService} from '../../api/weatherService'
import {useAppDispatch, useAppSelector} from '../../app/appStoreHooks'
import {WeatherApiData} from '../../app/appTypes'
import {ForecastCardProps} from '../../app/appWeatherTypes'
import {JustifyContentEnum} from '../../app/styles/stylesDisplay'
import useGetStyleByWeather from '../../hooks/useGetStyleByWeather'
import {
  changeAdaptiveTheme,
  changeThemeByWether,
  changeThemeName
} from '../../store/theme/themeReducer'
import {getIsThemeAdaptive, getThemeOptions} from '../../store/theme/themeSlice'
import Loader from '../ui/loader/Loader'
import {
  WeatherCard,
  WeatherImage,
  Paragraph,
  BlockFlex,
  Header
} from './style/CardWeatherStyle'

interface CurrentWeatherProps extends ForecastCardProps {}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  location,
  forecast
}) => {
  const dispatch = useAppDispatch()
  const isThemeAdaptive = useAppSelector(getIsThemeAdaptive)
  const themeOptions = useAppSelector(getThemeOptions)
  const [isLoad, setIsLoad] = useState(false)
  const [weather, setWeather] = useState<WeatherApiData>()
  const getWeather = useGetStyleByWeather()

  const themeAdaptiveName = useMemo(
    () =>
      isThemeAdaptive && weather && themeOptions[2].isActive
        ? getWeather(weather)
        : null,
    [weather, isThemeAdaptive, getWeather, themeOptions]
  )
 
  
  useEffect(() => {
    dispatch(changeAdaptiveTheme(true))
    return () => {
      dispatch(changeAdaptiveTheme(false))
    }
  }, [])

  useEffect(() => {
    if (themeAdaptiveName) {
      dispatch(changeThemeName(themeAdaptiveName))
    }
  }, [themeAdaptiveName])

  useEffect(() => {
    if (location) {
      setIsLoad(true)
      weatherService.getCurrentWeather(location).then(({data}) => {
        setWeather(data)
        setIsLoad(false)
      })
    }
  }, [location])

  return (
    <>
      {isLoad ? (
        <Loader />
      ) : (
        <WeatherCard>
          <Header>Current Weather</Header>
          <BlockFlex justifyContent={JustifyContentEnum.center}>
            {weather && (
              <WeatherImage
                src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`}
                alt={weather?.weather[0].description}
              />
            )}
            <Paragraph isTemp>{weather?.main.temp}</Paragraph>
          </BlockFlex>
          <BlockFlex
            marginTop='25px'
            justifyContent={JustifyContentEnum.spaceEvenly}
          >
            <Paragraph>
              <span> Pressure: </span>
              {weather?.main.pressure} Pa
            </Paragraph>
            <Paragraph>
              <span>Humidity: </span> {weather?.main.humidity}%
            </Paragraph>
          </BlockFlex>
          <BlockFlex justifyContent={JustifyContentEnum.spaceEvenly}>
            <Paragraph>
              <span>Wind: </span> {weather?.wind.speed} m/s
            </Paragraph>
            <Paragraph>
              <span>Clouds: </span>
              {weather?.clouds.all}%
            </Paragraph>
          </BlockFlex>
        </WeatherCard>
      )}
    </>
  )
}

export default CurrentWeather
