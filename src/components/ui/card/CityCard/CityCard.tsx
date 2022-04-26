import React from 'react'
import {GeocodingType} from '../../../../app/geocoding/geocodingTypes'
import {Card, CardBlock, CardButton, CardParagraph} from './CityCardStyles'

interface CityCardProps extends GeocodingType {
  onClick: () => void
}

const CityCard: React.FC<CityCardProps> = ({name, lat, lon, onClick}) => {
  return (
    <Card onClick={onClick}>
      <CardBlock width='90%'>
        <CardParagraph>{name}</CardParagraph>
        <CardParagraph>{`${Math.trunc(lat * 100) / 100} ${
          Math.trunc(lon * 100) / 100
        }`}</CardParagraph>
      </CardBlock>
      <CardButton>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
        >
          <path d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z' />
        </svg>
      </CardButton>
    </Card>
  )
}

export default CityCard
