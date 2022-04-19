import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Forecast, ForecastsWeather} from '../../app/appWeatherTypes'
import {DropPosition} from '../../components/dnd/dropPosition'
import findForecastPosition from '../../helpers/findForecastPosition'

interface initialStateData {
  weather: {}
  forecasts: Forecast[]
  activeForecasts: Forecast[][]
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
      name: ForecastsWeather.climaticThirtyDays,
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
      name: ForecastsWeather.dailySixteenDays,
      isActive: false
    },
    {
      id: 4,
      image: '',
      name: ForecastsWeather.fiveDaysTreeHour,
      isActive: false
    },
    {
      id: 5,
      image: '',
      name: ForecastsWeather.hourlyFourDays,
      isActive: false
    },
    {
      id: 6,
      image: '',
      name: ForecastsWeather.solarRadiation,
      isActive: false
    }
  ],
  activeForecasts: [
    [
      {
        id: 2,
        image: '',
        name: ForecastsWeather.currentWeather,
        isActive: false
      }
    ]
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
      state.activeForecasts.push([state.forecasts[forecastIndex]])
      state.forecasts[forecastIndex].isActive = true
    },
    removeActiveForecast: (state, action: PayloadAction<number>) => {
      const forecastIndex = state.forecasts.findIndex(
        (forecast) => forecast.id === action.payload
      )
      state.forecasts[forecastIndex].isActive = false
      const findForecast:
        | {indexElement: number; activeIndex: number}
        | undefined = findForecastPosition({
        forecastsActive: state.activeForecasts,
        idForecast: state.forecasts[forecastIndex].id
      })
      if (findForecast) {
        if (state.activeForecasts[findForecast.indexElement].length === 1) {
          state.activeForecasts.splice(findForecast.indexElement, 1)
        } else {
          state.activeForecasts[findForecast.indexElement].splice(
            findForecast.indexElement,
            1
          )
        }
      }
    },
    setActiveForecastDropDown: (
      state,
      action: PayloadAction<{
        position: string
        id: number
        indexElement?: number
      }>
    ) => {
      const forecastIndex = state.forecasts.findIndex(
        (forecast) => forecast.id === action.payload.id
      )
      if (state.forecasts[forecastIndex].isActive) {
        const findForecast:
          | {indexElement: number; activeIndex: number}
          | undefined = findForecastPosition({
          forecastsActive: state.activeForecasts,
          idForecast: state.forecasts[forecastIndex].id
        })
        if (findForecast) {
          if (state.activeForecasts[findForecast.indexElement].length === 1) {
            state.activeForecasts.splice(findForecast.indexElement, 1)
          } else {
            state.activeForecasts[findForecast.indexElement].splice(
              findForecast.activeIndex,
              1
            )
          }
        }
      }
      switch (action.payload.position) {
        case DropPosition.top: {
          state.activeForecasts.splice(action.payload.indexElement!, 0, [
            state.forecasts[forecastIndex]
          ])
          state.forecasts[forecastIndex].isActive = true
          break
        }
        case DropPosition.right: {
          state.activeForecasts[action.payload.indexElement!].push(
            state.forecasts[forecastIndex]
          )
          state.forecasts[forecastIndex].isActive = true
          break
        }
        case DropPosition.bottom: {
          state.activeForecasts.push([state.forecasts[forecastIndex]])
          state.forecasts[forecastIndex].isActive = true
          break
        }
        case DropPosition.left: {
          state.activeForecasts[action.payload.indexElement!].unshift(
            state.forecasts[forecastIndex]
          )
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
