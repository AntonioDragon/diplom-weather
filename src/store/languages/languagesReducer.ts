import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LanguageData} from '../../app/languages/languages'

interface initialStateData {
  languages: LanguageData[]
  activeLanguage: LanguageData
}

const initialState: initialStateData = {
  languages: [
    {
      id: 0,
      name: 'ua',
    },
    {
      id: 1,
      name: 'eng'
    }
  ],
  activeLanguage: {
    id: 0,
    name: 'ua'
  }
}
const languagesSlide = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    changeActiveLanguage: (state, action: PayloadAction<LanguageData>) => {
      state.activeLanguage = action.payload
    }
  }
})

export const {changeActiveLanguage} = languagesSlide.actions

export default languagesSlide.reducer
