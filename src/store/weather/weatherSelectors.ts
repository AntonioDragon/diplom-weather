import {RootState} from '../store'

export const getForecasts = (state: RootState) => state.weather.forecasts

export const getForecastsActive = (state:RootState) => state.weather.activeForecasts

export const getFavorites = (state: RootState) => state.favorite