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
  Header,
  ButtonRefresh,
  WrapperLoader
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

  const onClickRefreshWeather = () => {
    setIsLoad(true)
    weatherService.getCurrentWeather(location).then(({data}) => {
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
