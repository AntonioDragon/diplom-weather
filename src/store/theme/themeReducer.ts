import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {DefaultTheme} from 'styled-components'
import themeProvider from '../../theme/themeProvider'
import {ThemePaletteEnum} from '../../theme/themesWether'

interface OptionData {
  id: number
  name: string
  isActive: boolean
  isDisable: boolean
}

interface initialStateData {
  theme: DefaultTheme
  isThemeAdaptive: boolean
  themesOptions: OptionData[]
}

const initialState: initialStateData = {
  theme: themeProvider.getThemeByName(),
  isThemeAdaptive: false,
  themesOptions: [
    {
      id: 0,
      name: 'Default Theme',
      isActive: true,
      isDisable: false
    },
    {
      id: 1,
      name: 'Black Theme',
      isActive: false,
      isDisable: false
    },
    {
      id: 2,
      name: 'Adaptive Theme',
      isActive: false,
      isDisable: false
    }
  ]
}

const themeSlide = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeThemeByWether: (state, action: PayloadAction<ThemePaletteEnum>) => {
      state.theme = themeProvider.getThemeByName(action.payload)
    },
    changeOptionTheme: (state, action: PayloadAction<number>) => {
      state.themesOptions.map((option) => (option.isActive = false))
      state.themesOptions[action.payload].isActive = true
      switch (action.payload) {
        case 0:
          state.isThemeAdaptive = false
          state.theme = themeProvider.getThemeByName()
          break
        case 1:
          state.isThemeAdaptive = false
          state.theme = themeProvider.getThemeByName(ThemePaletteEnum.black)
          break
        case 2:
          state.isThemeAdaptive = true
          break
      }
    },
    changeAdaptiveTheme: (state, action: PayloadAction<boolean>) => {
      if (!action.payload) {
        state.themesOptions[state.themesOptions.length - 1].isActive = false
        state.themesOptions[0].isActive = true
        state.isThemeAdaptive = false
      } else {
        state.isThemeAdaptive = true
        state.themesOptions[2].isDisable = false
      }
    }
  }
})

export const {changeAdaptiveTheme, changeOptionTheme, changeThemeByWether} =
  themeSlide.actions

export default themeSlide.reducer
