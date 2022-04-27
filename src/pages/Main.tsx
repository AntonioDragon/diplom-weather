import React, {useCallback, useEffect} from 'react'
import {ThemeProvider} from 'styled-components'
import {geocodingService} from '../api/geocodingService'
import {useAppDispatch, useAppSelector} from '../app/appStoreHooks'
import {Position} from '../app/styles/stylesPosition'
import Header from '../components/layout/Header/Header'
import FavoritesBar from '../components/modals/FavoritesBar'
import ForecastsBar from '../components/modals/ForecastsBar'
import Portal from '../components/modals/Portal'
import Forecast from '../components/section/ForecastWeather/Forecast'
import {
  changeActiveLocation,
  loadFavorites
} from '../store/geocoding/geocodingReducer'
import {loadThemes} from '../store/theme/themeReducer'
import {getTheme} from '../store/theme/themeSlice'
import {loadWeather} from '../store/weather/weatherReducer'

const Main: React.FC = () => {
  const theme = useAppSelector(getTheme)
  const dispatch = useAppDispatch()

  const getCurrentPosition = useCallback((position: GeolocationPosition) => {
    geocodingService
      .getNameLocation(position.coords.latitude, position.coords.longitude)
      .then(({data}) => {
        dispatch(changeActiveLocation(data[0]))
      })
  }, [])

  useEffect(() => {
    if (localStorage.getItem('forecasts')) {
      dispatch(loadWeather(JSON.parse(localStorage.getItem('forecasts')!)))
    }
    if (localStorage.getItem('favorite')) {
      dispatch(loadFavorites(JSON.parse(localStorage.getItem('favorite')!)))
    }
    if (localStorage.getItem('theme-options')) {
      dispatch(loadThemes(JSON.parse(localStorage.getItem('theme-options')!)))
    }
  }, [])

  useEffect(() => {
    const location = navigator.geolocation
    location.getCurrentPosition(getCurrentPosition)
  }, [getCurrentPosition])

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Portal>
        <FavoritesBar />
        <ForecastsBar />
      </Portal>
      <main>
        <Forecast />
      </main>
    </ThemeProvider>
  )
}

export default Main
