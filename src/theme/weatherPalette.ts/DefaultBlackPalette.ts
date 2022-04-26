import {DefaultTheme} from 'styled-components'

export const defaultPaletteBlack = {
  getThemeDefaultBlack: (): DefaultTheme => ({
    colors: {
      primary: '#121212',
      secondary: '#01162c',
      tertiary: '#1781d8',
      quaternary: '#5760d6',
      hover: '#762610',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#121212',
      secondary: '#01162c',
      tertiary: '#1781d8',
      quaternary: '#5760d6',
      hover: '#762610',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff',
    }
  })
}
