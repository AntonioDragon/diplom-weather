import React from 'react'
import Header from '../components/layout/Header/Header'
import FavoritesBar from '../components/modals/FavoritesBar'
import ForecastsBar from '../components/modals/ForecastsBar'
import Portal from '../components/modals/Portal'
import Forecast from '../components/section/ForecastWeather/Forecast'

const Main = () => {
  return (
    <>
      <Header />
      <Portal>
        <FavoritesBar />
        <ForecastsBar />
      </Portal>
      <main>
        <Forecast />
      </main>
    </>
  )
}

export default Main
