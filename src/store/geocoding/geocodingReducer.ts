import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {GeocodingType} from '../../app/geocoding/geocodingTypes'

interface initialStateData {
  activeLocation?: GeocodingType | undefined
  geocodingFavorites: GeocodingType[]
  geocodingSearch: GeocodingType[]
}

const initialState: initialStateData = {
  activeLocation: undefined,
  geocodingFavorites: [],
  geocodingSearch: []
}
const geocodingSlide = createSlice({
  name: 'geocoding',
  initialState,
  reducers: {
    loadFavorites: (state, action: PayloadAction<GeocodingType[]>) => {
      state.geocodingFavorites = action.payload
    },
    changeActiveLocation: (state, action: PayloadAction<GeocodingType>) => {
      state.activeLocation = action.payload
    },
    addFavoriteByWether: (state, action: PayloadAction<GeocodingType>) => {
      state.geocodingFavorites.push({
        id: state.geocodingFavorites.at(-1)?.id! + 1,
        ...action.payload
      })
      localStorage.setItem('favorite', JSON.stringify(state.geocodingFavorites))
    },
    deleteFavoriteToDefault: (state, action: PayloadAction<GeocodingType>) => {
      const favoriteIndex = state.geocodingFavorites.findIndex(
        (location) =>
          location.name === action.payload.name &&
          location.country === action.payload.country &&
          location.state === action.payload.state
      )
      if (favoriteIndex !== -1)
        state.geocodingFavorites.splice(favoriteIndex, 1)
      localStorage.setItem('favorite', JSON.stringify(state.geocodingFavorites))
    }
  }
})

export const {
  addFavoriteByWether,
  deleteFavoriteToDefault,
  changeActiveLocation,
  loadFavorites
} = geocodingSlide.actions

export default geocodingSlide.reducer
