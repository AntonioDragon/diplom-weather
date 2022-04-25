import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {DefaultTheme} from 'styled-components'
import themeProvider from '../../theme/themeProvider'
import { ThemePaletteEnum } from '../../theme/themesWether'
interface initialStateData {
  theme: DefaultTheme
}

const initialState: initialStateData = {
  theme: themeProvider.getThemeByName()
}


const themeSlide = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeByWether: () => {},
    changeThemeToDefault: () => {}
  }
})

export const {} = themeSlide.actions

export default themeSlide.reducer
