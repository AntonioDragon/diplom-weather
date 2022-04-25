import {DefaultTheme} from 'styled-components'

export const FogPalette = {
  getAfternoonThemeFog: (): DefaultTheme => ({
    colors: {
      primary: '#66898e',
      secondary: '#aad0d3',
      tertiary: '#7ea2b2',
      quaternary: '#f3e2b4',
      hover: '#F4F7F0',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#3b5155',
      secondary: '#aad0d3',
      tertiary: '#7ea2b2',
      quaternary: '#f3e2b4',
      hover: '#F4F7F0',
      white: '#ffffff',
      black: '#000000'
    }
  }),
  getEveningThemeFog: (): DefaultTheme => ({
    colors: {
      primary: '#126e7c',
      secondary: '#214b4b',
      tertiary: '#5190ab',
      quaternary: '#d7ccab',
      hover: '#d1dfbd',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#08414b',
      secondary: '#638587',
      tertiary: '#5e8393',
      quaternary: '#d7ccab',
      hover: '#d1dfbd',
      white: '#ffffff',
      black: '#000000'
    }
  }),
  getMorningThemeFog: (): DefaultTheme => ({
    colors: {
      primary: '#7C9194',
      secondary: '#C9D7D8',
      tertiary: '#9BABB2',
      quaternary: '#F2EEE3',
      hover: '#F4F7F0',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#F4F7F0',
      secondary: '#C9D7D8',
      tertiary: '#9BABB2',
      quaternary: '#F2EEE3',
      hover: '#F4F7F0',
      white: '#ffffff',
      black: '#000000'
    }
  }),
  getNightThemeFog: (): DefaultTheme => ({
    colors: {
      primary: '#26646e',
      secondary: '#2d3e3e',
      tertiary: '#5e8393',
      quaternary: '#d7ccab',
      hover: '#d1dfbd',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#08414b',
      secondary: '#638587',
      tertiary: '#5e8393',
      quaternary: '#d7ccab',
      hover: '#d1dfbd',
      white: '#ffffff',
      black: '#000000'
    }
  })
}
