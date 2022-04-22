import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import RoutePages from './route/RoutePages'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutePages />
    </BrowserRouter>
  )
}

export default App
