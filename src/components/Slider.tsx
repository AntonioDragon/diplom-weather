import React from 'react'
import Carousel, {CarouselProps} from 'react-multi-carousel'

const Slider: React.FC<CarouselProps> = ({...options}) => {
  return (
    <div>
      <Carousel {...options} />
    </div>
  )
}

export default Slider
