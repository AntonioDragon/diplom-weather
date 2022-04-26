import {configureStore} from '@reduxjs/toolkit'
import geocodingReducer from './geocoding/geocodingReducer'
import languagesReducer from './languages/languagesReducer'
import themeReducer from './theme/themeReducer'
import weatherReducer from './weather/weatherReducer'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
    geocoding: geocodingReducer,
    languages: languagesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
