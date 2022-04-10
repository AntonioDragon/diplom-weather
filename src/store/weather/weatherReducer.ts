import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface initialStateData {
  weather: {}
}

const initialState: initialStateData = {
  weather: {}
}

const weatherSlide = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
})

export const {} = weatherSlide.actions

export default weatherSlide.reducer
