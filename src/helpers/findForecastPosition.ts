import {Forecast} from '../app/appWeatherTypes'

interface FindForecastPositionProps {
  forecastsActive: Forecast[][]
  idForecast: number
}

const findForecastPosition = ({
  forecastsActive,
  idForecast
}: FindForecastPositionProps) => {
  for (let i = 0; i < forecastsActive.length; i++) {
    for (let j = 0; j < forecastsActive[i].length; j++) {
      if (forecastsActive[i][j].id === idForecast) {
        return {indexElement: i, activeIndex: j}
      }
    }
  }
}

export default findForecastPosition
