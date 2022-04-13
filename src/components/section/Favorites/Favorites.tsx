import React, {useCallback, useState} from 'react'
import {useAppSelector} from '../../../app/appStoreHooks'
import {FavoriteData} from '../../../app/appTypes'
import {favoriteSelector} from '../../../store/favorite/favoriteSelectors'
import CityCard from '../../ui/card/CityCard/CityCard'
import {
  FavoriteButton,
  FavoriteElement,
  FavoriteList,
  FavoritesBlock
} from './FavoritesStyles'

const Favorites: React.FC = () => {
  const {favorites} = useAppSelector(favoriteSelector)
  const [isActiveFavorite, setIsActiveFavorite] = useState(true)

  const onSetActiveFavorite = useCallback(
    () => setIsActiveFavorite(!isActiveFavorite),
    [isActiveFavorite]
  )

  return (
    <FavoritesBlock isActive={isActiveFavorite}>
      <FavoriteList>
        {favorites.map((favorite: FavoriteData) => (
          <FavoriteElement key={favorite.id}>
            <CityCard {...favorite} isActiveFavorite={isActiveFavorite} />
          </FavoriteElement>
        ))}
      </FavoriteList>
      <FavoriteButton handler={onSetActiveFavorite}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
        >
          <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z' />
        </svg>
      </FavoriteButton>
    </FavoritesBlock>
  )
}

export default Favorites
