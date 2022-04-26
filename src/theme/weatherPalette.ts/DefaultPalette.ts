import {DefaultTheme} from 'styled-components'

export const defaultPalette = {
  getThemeDefault: (): DefaultTheme => ({
    colors: {
      primary: '#C2D2F2',
      secondary: '#327AD9',
      tertiary: '#5B92D9',
      quaternary: '#520ab0',
      hover: '#2a0657',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#C2D2F2',
      secondary: '#327AD9',
      tertiary: '#5B92D9',
      quaternary: '#520ab0',
      hover: '#2a0657',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff',
    }
  })
}
