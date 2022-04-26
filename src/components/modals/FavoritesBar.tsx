import React, {useCallback, useState} from 'react'
import {useAppDispatch, useAppSelector} from '../../app/appStoreHooks'
import {GeocodingType} from '../../app/geocoding/geocodingTypes'
import {changeActiveLocation} from '../../store/geocoding/geocodingReducer'
import {getGeocoding} from '../../store/geocoding/geocodingSelectors'
import CityCard from '../ui/card/CityCard/CityCard'
import Bar from './Bar/Bar'
import {BarElement} from './Bar/BarStyles'

const FavoritesBar: React.FC = () => {
  const dispatch = useAppDispatch()
  const {geocodingFavorites} = useAppSelector(getGeocoding)

  const onClickWeatherPreview = useCallback(
    (favorite: GeocodingType) =>
      dispatch(changeActiveLocation(favorite)),
    [dispatch]
  )

  const [isActive, setIsActive] = useState(false)

  const onSetActiveFavorite = useCallback(
    (state: boolean) => setIsActive(state),
    []
  )

  return (
    <Bar onSetIsActive={onSetActiveFavorite} isActive={isActive} isLeft>
      {geocodingFavorites.map((favorite) => (
        <BarElement key={favorite.id}>
          <CityCard
            {...favorite}
            onClick={() => onClickWeatherPreview(favorite)}
          />
        </BarElement>
      ))}
    </Bar>
  )
}

export default FavoritesBar
