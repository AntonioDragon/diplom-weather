export enum ThemePaletteEnum {
  rainy = 'rainy',
  solar = 'solar',
  snowy = 'snowy',
  cloudy = 'cloudy'
}

const themePalette = {
  rain_evening: () => ({
    background: '#53627A',
    backgroundUI: '#8C9DA7',
    border: '#4D4049',
    text: '#DCD9D3'
  }),
  sun_evening: () => ({
    background: '#2C3039',
    backgroundUI: '#FEDBD1',
    border: '#6B3638',
    text: '#FE6C3A'
  }),
  cold_afternoon: () => ({
    background: '#B3BDD2',
    backgroundUI: '#F4F4F4',
    border: '#D5E8EF',
    text: '#909BAE'
  }),
  sun_afternoon: () => ({
    background: '#BB4E58',
    backgroundUI: '#B7C397',
    border: '#873A46',
    text: '#798F60'
  }),
  defaultTheme: () => ({
    background: '#9DC1BD',
    backgroundUI: '#086784',
    border: '#294549',
    text: '#DEAB68'
  })
}

export default themePalette
