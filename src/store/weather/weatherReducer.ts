import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Forecast, ForecastsWeather} from '../../app/appWeatherTypes'
import {DropPosition} from '../../components/dnd/dropPosition'

interface initialStateData {
  weather: {}
  forecasts: Forecast[]
  activeForecasts: Forecast[]
}

const initialState: initialStateData = {
  weather: {},
  forecasts: [
    {
      id: 0,
      image: '',
      name: ForecastsWeather.airPollution,
      isActive: false
    },
    {
      id: 1,
      image: '',
      name: ForecastsWeather.dailyForecastEightDays,
      isActive: false
    },
    {
      id: 2,
      image: '',
      name: ForecastsWeather.currentWeather,
      isActive: true
    },
    {
      id: 3,
      image: '',
      name: ForecastsWeather.hourlyTwoDays,
      isActive: false
    },
    {
      id: 4,
      image: '',
      name: ForecastsWeather.fiveDaysTreeHour,
      isActive: false
    }
  ],
  activeForecasts: [
    {
      id: 2,
      image: '',
      name: ForecastsWeather.currentWeather,
      isActive: true
    },
  ]
}

const weatherSlide = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setActiveForecast: (state, action: PayloadAction<number>) => {
      const forecastIndex = state.forecasts.findIndex(
        (forecast) => forecast.id === action.payload
      )
      state.activeForecasts.push(state.forecasts[forecastIndex])
      state.forecasts[forecastIndex].isActive = true
    },
    removeActiveForecast: (state, action: PayloadAction<number>) => {
      const forecastIndex = state.forecasts.findIndex(
        (forecast) => forecast.id === action.payload
      )
      state.forecasts[forecastIndex].isActive = false
      const findForecast = state.activeForecasts.findIndex(
        (forecast) => forecast.id === action.payload
      )
      if (findForecast !== -1) {
        state.activeForecasts.splice(findForecast, 1)
      }
    },
    setActiveForecastDropDown: (
      state,
      action: PayloadAction<{
        position: string
        idElement?: number
        id: number
      }>
    ) => {
      const forecastIndex = state.forecasts.findIndex(
        (forecast) => forecast.id === action.payload.id
      )
      if (state.forecasts[forecastIndex].isActive) {
        const findForecast = state.activeForecasts.findIndex(
          (forecast) => forecast.id === action.payload.id
        )
        state.activeForecasts.splice(findForecast, 1)
      }
      switch (action.payload.position) {
        case DropPosition.top: {
          state.activeForecasts.splice(
            action.payload.idElement!,
            0,
            state.forecasts[forecastIndex]
          )
          state.forecasts[forecastIndex].isActive = true
          break
        }
        case DropPosition.bottom: {
          state.activeForecasts.push(state.forecasts[forecastIndex])
          state.forecasts[forecastIndex].isActive = true
          break
        }
      }
    }
  },
  extraReducers: (builder) => {}
})

export const {
  setActiveForecast,
  setActiveForecastDropDown,
  removeActiveForecast
} = weatherSlide.actions

export default weatherSlide.reducer
