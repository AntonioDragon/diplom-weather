import React from 'react'
import styled from 'styled-components'
import Header from './components/layout/Header/Header'
import Favorites from './components/section/Favorites/Favorites'
import Forecast from './components/section/Forecast/Forecast'

const Main = styled.main`
  display: flex;
`

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Favorites />
        <Forecast />
      </Main>
    </>
  )
}

export default App
