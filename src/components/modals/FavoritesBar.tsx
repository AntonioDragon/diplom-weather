import React, {useCallback, useState} from 'react'
import {useAppSelector} from '../../app/appStoreHooks'
import {getFavorites} from '../../store/weather/weatherSelectors'
import CityCard from '../ui/card/CityCard/CityCard'
import Bar from './Bar/Bar'
import {BarElement} from './Bar/BarStyles'

const FavoritesBar: React.FC = () => {
  const {favorites} = useAppSelector(getFavorites)
  const onClickWeatherPreview = useCallback(() => console.log(1), [])

  const [isActive, setIsActive] = useState(false)

  const onSetActiveFavorite = useCallback(
    (state: boolean) => setIsActive(state),
    []
  )

  return (
    <Bar onSetIsActive={onSetActiveFavorite} isActive={isActive} isLeft>
      {favorites.map((favorite) => (
        <BarElement key={favorite.id}>
          <CityCard {...favorite} onClick={onClickWeatherPreview} />
        </BarElement>
      ))}
    </Bar>
  )
}

export default FavoritesBar
