import React from 'react'
import {Forecast} from '../../../../app/appTypes'
import {Paragraph, PreviewCard, WrapperImage} from './WeatherPreviewCardStyles'

interface WeatherPreviewCardProps extends Forecast {}

const WeatherPreviewCard: React.FC<WeatherPreviewCardProps> = ({
  id,
  name,
  image
}) => {
  return (
    <PreviewCard>
      <WrapperImage >
        {image && <img src={image} alt='Weather Preview' />}
      </WrapperImage>
      <Paragraph>{name}</Paragraph>
    </PreviewCard>
  )
}

export default WeatherPreviewCard
