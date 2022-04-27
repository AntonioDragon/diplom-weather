import React, {useCallback, useEffect, useMemo} from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {
  ButtonFavorite,
  ForecastSection,
  ForecastTitle,
  Location
} from './ForecastStyles'
import ForecastList from './ForecastWeatherList'
import {useAppDispatch, useAppSelector} from '../../../app/appStoreHooks'
import {
  addFavoriteByWether,
  deleteFavoriteToDefault
} from '../../../store/geocoding/geocodingReducer'
import {
  getActiveLocation,
  getGeocoding
} from '../../../store/geocoding/geocodingSelectors'
import {changeThemeByWether} from '../../../store/theme/themeReducer'
import {getThemeName} from '../../../store/theme/themeSlice'
import {getForecastsActive} from '../../../store/weather/weatherSelectors'
import useGetImageByWeatherName from '../../../hooks/useGetImageByWeatherName'

const Forecast: React.FC = () => {
  const dispatch = useAppDispatch()
  const themeName = useAppSelector(getThemeName)
  const activeForecasts = useAppSelector(getForecastsActive)
  const activeLocation = useAppSelector(getActiveLocation)
  const {geocodingFavorites} = useAppSelector(getGeocoding)
  const getImageByNameWeather = useGetImageByWeatherName()

  const isFavorite = useMemo(() => {
    if (activeLocation) {
      const favorite = geocodingFavorites.find(
        (location) =>
          location.name === activeLocation.name &&
          location.country === activeLocation.country &&
          location.state === activeLocation.state
      )
      if (favorite) return true
      return false
    }
  }, [activeLocation, geocodingFavorites])

  useEffect(() => {
    if (themeName) {
      dispatch(changeThemeByWether(themeName))
    }
  }, [themeName])

  const onChangeFavorite = useCallback(() => {
    if (isFavorite) {
      dispatch(deleteFavoriteToDefault(activeLocation!))
    } else {
      dispatch(addFavoriteByWether(activeLocation!))
    }
  }, [isFavorite, activeLocation, dispatch])

  return (
    <ForecastSection image={getImageByNameWeather(themeName)}>
      {activeLocation && (
        <Location>
          <ForecastTitle>
            <span>{activeLocation.name}</span>
            <span>{activeLocation.country}</span>
          </ForecastTitle>
          <ButtonFavorite isActive={isFavorite} onClick={onChangeFavorite}>
            <svg xmlns='http://www.w3.org/2000/svg' height='24' width='24'>
              <path d='M5.825 22 8.15 14.4 2 10H9.6L12 2L14.4 10H22L15.85 14.4L18.175 22L12 17.3Z' />
            </svg>
          </ButtonFavorite>
        </Location>
      )}
      <DndProvider backend={HTML5Backend}>
        <ForecastList forecasts={activeForecasts} />
      </DndProvider>
    </ForecastSection>
  )
}

export default Forecast
