import {RootState} from '../store'

export const getTheme = (state: RootState) => state.theme.theme

export const getThemeOptions = (state: RootState) => state.theme.themesOptions

export const getIsThemeAdaptive = (state: RootState) => state.theme.isThemeAdaptive
