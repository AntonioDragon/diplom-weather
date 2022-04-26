import React from 'react'
import {ThemeProvider} from 'styled-components'
import {useAppSelector} from '../app/appStoreHooks'
import Header from '../components/layout/Header/Header'
import FavoritesBar from '../components/modals/FavoritesBar'
import ForecastsBar from '../components/modals/ForecastsBar'
import Portal from '../components/modals/Portal'
import Forecast from '../components/section/ForecastWeather/Forecast'
import {getTheme} from '../store/theme/themeSlice'

const Main: React.FC = () => {
  const theme = useAppSelector(getTheme)
  console.log(theme)
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
