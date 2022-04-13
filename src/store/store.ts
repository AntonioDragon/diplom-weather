import {configureStore} from '@reduxjs/toolkit'
import favoriteReducer from './favorite/favoriteReducer'
import themeReducer from './theme/themeReducer'
import weatherReducer from './weather/weatherReducer'

const store = configureStore({
  reducer: {
    theme: themeReducer,
    weather: weatherReducer,
    favorite: favoriteReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
