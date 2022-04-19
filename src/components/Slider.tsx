import React from 'react'
import Carousel, {CarouselProps} from 'react-multi-carousel'
import styled from 'styled-components'

const SliderWrapper = styled.div`
  height: 100%;
`

const Slider: React.FC<CarouselProps> = ({...options}) => {
  return (
    <SliderWrapper>
      <Carousel {...options} />
    </SliderWrapper>
  )
}

export default Slider
