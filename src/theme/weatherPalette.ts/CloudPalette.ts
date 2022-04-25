import {DefaultTheme} from 'styled-components'

export const CloudPalette = {
  getAfternoonThemeCloud: (): DefaultTheme => ({
    colors: {
      primary: '#87898C',
      secondary: '#595959',
      tertiary: '#D9D9D9',
      quaternary: '#BABDBF',
      hover: '#F2F2F2',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#595959',
      secondary: '#87898C',
      tertiary: '#D9D9D9',
      quaternary: '#BABDBF',
      hover: '#F2F2F2',
      white: '#ffffff',
      black: '#000000'
    }
  }),
  getEveningThemeCloud: (): DefaultTheme => ({
    colors: {
      primary: '#83878d',
      secondary: '#6f6f6f',
      tertiary: '#b5adad',
      quaternary: '#656a6c',
      hover: '#f4f1f1',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#83878d',
      secondary: '#6f6f6f',
      tertiary: '#b5adad',
      quaternary: '#656a6c',
      hover: '#f4f1f1',
      white: '#ffffff',
      black: '#000000'
    }
  }),
  getMorningThemeCloud: (): DefaultTheme => ({
    colors: {
      primary: '#9da1a6',
      secondary: '#716a6a',
      tertiary: '#D9D9D9',
      quaternary: '#BABDBF',
      hover: '#F2F2F2',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#9da1a6',
      secondary: '#716a6a',
      tertiary: '#D9D9D9',
      quaternary: '#BABDBF',
      hover: '#F2F2F2',
      white: '#ffffff',
      black: '#000000'
    }
  }),
  getNightThemeCloud: (): DefaultTheme => ({
    colors: {
      primary: '#5f6164',
      secondary: '#434242',
      tertiary: '#999090',
      quaternary: '#5b6063',
      hover: '#fbe7e7',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#5f6164',
      secondary: '#434242',
      tertiary: '#999090',
      quaternary: '#282b2c',
      hover: '#fbe7e7',
      white: '#ffffff',
      black: '#000000'
    }
  })
}
