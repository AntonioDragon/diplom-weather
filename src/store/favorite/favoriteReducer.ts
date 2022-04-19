import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {FavoriteData} from '../../app/appTypes'

interface initialStateData {
  favorites: FavoriteData[]
}

const initialState: initialStateData = {
  favorites: [
    {
      id: 0,
      name: 'London',
      lat: '10',
      lon: '-10'
    },
    {
      id: 1,
      name: 'Ukraine',
      lat: '10',
      lon: '-10'
    },
    {
      id: 2,
      name: 'France',
      lat: '10',
      lon: '-10'
    }
  ]
}
const favoriteSlide = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavoriteByWether: (state, action: PayloadAction<FavoriteData>) => {
      state.favorites.push(action.payload)
    },
    deleteFavoriteToDefault: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.slice(action.payload, 1)
    }
  }
})

export const {addFavoriteByWether, deleteFavoriteToDefault} =
  favoriteSlide.actions

export default favoriteSlide.reducer
