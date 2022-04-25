import {DefaultTheme} from 'styled-components'

export const RainPalette = {
  getAfternoonThemeRain: (): DefaultTheme => ({
    colors: {
      primary: '#368ABF',
      secondary: '#2e539e',
      tertiary: '#2983A6',
      quaternary: '#5EADBF',
      hover: '#A0F2EA',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#2e539e',
      secondary: '#368ABF',
      tertiary: '#2983A6',
      quaternary: '#5EADBF',
      hover: '#A0F2EA',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff'
    }
  }),
  getEveningThemeRain: (): DefaultTheme => ({
    colors: {
      primary: '#368ABF',
      secondary: '#273859',
      tertiary: '#2983A6',
      quaternary: '#5EADBF',
      hover: '#A0F2EA',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#273859',
      secondary: '#368ABF',
      tertiary: '#2983A6',
      quaternary: '#5EADBF',
      hover: '#A0F2EA',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff'
    }
  }),
  getMorningThemeRain: (): DefaultTheme => ({
    colors: {
      primary: '#3192ce',
      secondary: '#1d73a9',
      tertiary: '#387d98',
      quaternary: '#086176',
      hover: '#80f3e7',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#114c71',
      secondary: '#3192ce',
      tertiary: '#22566b',
      quaternary: '#1c343a',
      hover: '#80f3e7',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff'
    }
  }),
  getNightThemeRain: (): DefaultTheme => ({
    colors: {
      primary: '#064165',
      secondary: '#0e1d39',
      tertiary: '#104d66',
      quaternary: '#277182',
      hover: '#6ecac1',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#0e1d39',
      secondary: '#064165',
      tertiary: '#104d66',
      quaternary: '#277182',
      hover: '#6ecac1',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff'
    }
  })
}
