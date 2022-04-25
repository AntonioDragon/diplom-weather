import {DefaultTheme} from 'styled-components'

export const DownpourPalette = {
  getAfternoonThemeDownpour: (): DefaultTheme => ({
    colors: {
      primary: '#5E7C88',
      secondary: '#4B5F6D',
      tertiary: '#FEB41C',
      quaternary: '#5E7C88',
      hover: '#4B5F6D',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#24221F',
      secondary: '#4B5F6D',
      tertiary: '#FEB41C',
      quaternary: '#ffffff',
      hover: '#FEB41C',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff',
    }
  }),
  getEveningThemeDownpour: (): DefaultTheme => ({
    colors: {
      primary: '#2c6579',
      secondary: '#225e84',
      tertiary: '#FEB41C',
      quaternary: '#106686',
      hover: '#41a9f3',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#0e4356',
      secondary: '#2c6579',
      tertiary: '#c0881a',
      quaternary: '#084156',
      hover: '#41a9f3',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff',
    }
  }),
  getMorningThemeDownpour: (): DefaultTheme => ({
    colors: {
      primary: '#88bed3',
      secondary: '#597f9b',
      tertiary: '#FEB41C',
      quaternary: '#5E7C88',
      hover: '#4B5F6D',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#597f9b',
      secondary: '#88bed3',
      tertiary: '#FEB41C',
      quaternary: '#5E7C88',
      hover: '#4B5F6D',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff',
    }
  }),
  getNightThemeDownpour: (): DefaultTheme => ({
    colors: {
      primary: '#294853',
      secondary: '#202d35',
      tertiary: '#FEB41C',
      quaternary: '#295464',
      hover: '#4e87b0',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#3e606c',
      secondary: '#354550',
      tertiary: '#c0881a',
      quaternary: '#061920',
      hover: '#4B5F6D',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff',
    }
  }),
}
