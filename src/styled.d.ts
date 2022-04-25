import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary?: string
      secondary?: string
      tertiary?: string
      hover?: string
      quaternary?: string
      white?: string
      black?: string
    }
    text_color: {
      primary?: string
      secondary?: string
      tertiary?: string
      hover?: string
      quaternary?: string
      white?: string
      black?: string
    }
  }
}
