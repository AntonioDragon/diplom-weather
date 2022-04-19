import React, {useEffect} from 'react'
import {useDrag} from 'react-dnd'
import {Forecast} from '../../../../app/appWeatherTypes'
import {ItemTypes} from '../../../dnd/enum'
import {
  ButtonCheckbox,
  Paragraph,
  PreviewCard,
  WrapperImage
} from './WeatherPreviewCardStyles'

interface WeatherPreviewCardProps extends Forecast {
  onClickAdd: () => void
  onClickRemove: () => void
  dragStart: (state: boolean) => void
}

const iconCheckbox = {
  active: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
    >
      <path d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z' />
    </svg>
  ),
  inactive: () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enableBackground='new 0 0 24 24'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
    >
      <g>
        <path d='M4.84,1.98L3.43,3.39l10.38,10.38l-1.41,1.41l-4.24-4.24l-1.41,1.41l5.66,5.66l2.83-2.83l6.6,6.6l1.41-1.41L4.84,1.98z M18.05,12.36L23,7.4L21.57,6l-4.94,4.94L18.05,12.36z M17.34,7.4l-1.41-1.41l-2.12,2.12l1.41,1.41L17.34,7.4z M1.08,12.35 l5.66,5.66l1.41-1.41l-5.66-5.66L1.08,12.35z' />
      </g>
    </svg>
  )
}

const WeatherPreviewCard: React.FC<WeatherPreviewCardProps> = ({
  id,
  name,
  image,
  isActive,
  onClickAdd,
  onClickRemove,
  dragStart
}) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.Card,
    item: () => ({
      id
    }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  useEffect(() => {
    if (isDragging) dragStart(false)
  }, [isDragging, dragStart])

  return (
    <PreviewCard ref={drag}>
      <ButtonCheckbox
        handler={!isActive ? onClickAdd : onClickRemove}
        isActive={isActive}
      >
        {isActive ? iconCheckbox.active() : iconCheckbox.inactive()}
      </ButtonCheckbox>
      <WrapperImage>
        {image && <img src={image} alt='Weather Preview' />}
      </WrapperImage>
      <Paragraph>{name}</Paragraph>
    </PreviewCard>
  )
}

export default WeatherPreviewCard
