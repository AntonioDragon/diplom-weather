import {DefaultTheme} from 'styled-components'

export const HailPalette = {
  getAfternoonThemeHail: (): DefaultTheme => ({
    colors: {
      primary: '#024873',
      secondary: '#024059',
      tertiary: '#025E73',
      quaternary: '#027368',
      hover: '#024873',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#0D0D0D',
      secondary: '#024059',
      tertiary: '#000000',
      quaternary: '#ffffff',
      hover: '#024873',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff',
    }
  }),
  getEveningThemeHail: (): DefaultTheme => ({
    colors: {
      primary: '#0b4569',
      secondary: '#0a7aa6',
      tertiary: '#306a78',
      quaternary: '#05302c',
      hover: '#024873',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#07304a',
      secondary: '#192f3a',
      tertiary: '#000000',
      quaternary: '#ffffff',
      hover: '#76b9d3',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff',
    }
  }),
  getMorningThemeHail: (): DefaultTheme => ({
    colors: {
      primary: '#15699e',
      secondary: '#11546e',
      tertiary: '#03809c',
      quaternary: '#0b8e81',
      hover: '#024873',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#0D0D0D',
      secondary: '#11546e',
      tertiary: '#000000',
      quaternary: '#ffffff',
      hover: '#76b9d3',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff',
    }
  }),
  getNightThemeHail: (): DefaultTheme => ({
    colors: {
      primary: '#113c57',
      secondary: '#08678c',
      tertiary: '#14505e',
      quaternary: '#05302c',
      hover: '#024873',
      white: '#ffffff',
      black: '#000000'
    },
    text_color: {
      primary: '#0D0D0D',
      secondary: '#08678c',
      tertiary: '#000000',
      quaternary: '#ffffff',
      hover: '#76b9d3',
      white: '#ffffff',
      black: '#000000'
    },
    color_star: {
      active: '#ff4a16',
      inactive: '#ffffff',
    }
  })
}
