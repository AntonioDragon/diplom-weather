import {DefaultTheme} from 'styled-components'

export const defaultPaletteBlack = {
  getThemeDefaultBlack: (): DefaultTheme => ({
    colors: {
      primary: '#121212',
      secondary: '#001e3c',
      tertiary: '#2196f3',
      quaternary: '#757ce8',
      hover: '#ff4a16',
      white: '#ffffff',
      black: '#000000'
    }
  })
}
