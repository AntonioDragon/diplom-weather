import {RootState} from '../store'

export const getGeocoding = (state: RootState) => state.geocoding

export const getActiveLocation = (state: RootState)=> state.geocoding.activeLocation