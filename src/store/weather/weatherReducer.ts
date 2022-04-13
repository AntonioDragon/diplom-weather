import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Forecast} from '../../app/appTypes'

interface initialStateData {
  weather: {}
  forecasts: Forecast[]
}

const initialState: initialStateData = {
  weather: {},
  forecasts: [
    {
      id: 0,
      image: '',
      name: '5 days Weather'
    },
    {
      id: 0,
      image: '',
      name: '7 days Weather'
    },
    {
      id: 0,
      image: '',
      name: '30 days Weather'
    },
    {
      id: 0,
      image: '',
      name: '5 days Weather'
    },
    {
      id: 0,
      image: '',
      name: '7 days Weather'
    },
    {
      id: 0,
      image: '',
      name: '30 days Weather'
    }
  ]
}

const weatherSlide = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export const {} = weatherSlide.actions

export default weatherSlide.reducer
