import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {
  GeocodingFavoriteType,
  GeocodingType
} from '../../app/geocoding/geocodingTypes'

interface initialStateData {
  activeLocation: GeocodingType | undefined
  geocodingFavorites: GeocodingFavoriteType[]
  geocodingSearch: GeocodingType[]
}

const initialState: initialStateData = {
  activeLocation: {
    name: 'London',
    lat: 10,
    lon: -10,
    country: 'GB',
    state: 'London City'
  },
  geocodingFavorites: [
    {
      id: 0,
      name: 'London',
      lat: 10,
      lon: -10,
      country: 'GB',
      state: 'London City'
    },
    {
      id: 1,
      name: 'Ukraine',
      lat: 10,
      lon: -10,
      country: 'Ua',
      state: 'Ukraine country'
    },
    {
      id: 2,
      name: 'France',
      lat: 10,
      lon: -10,
      country: 'Fr',
      state: 'France country'
    }
  ],
  geocodingSearch: []
}
const geocodingSlide = createSlice({
  name: 'geocoding',
  initialState,
  reducers: {
    changeActiveLocation: (state, action: PayloadAction<GeocodingFavoriteType>) => {
      state.activeLocation = action.payload
    },
    addFavoriteByWether: (state, action: PayloadAction<GeocodingType>) => {
      state.geocodingFavorites.push({
        id: state.geocodingFavorites.at(-1)?.id! + 1,
        ...action.payload
      })
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
    }
  }
})

export const {addFavoriteByWether, deleteFavoriteToDefault, changeActiveLocation} =
  geocodingSlide.actions

export default geocodingSlide.reducer
