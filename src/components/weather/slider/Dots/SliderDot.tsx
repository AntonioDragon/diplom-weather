import {SliderDotButton} from '../styles/SliderCardStyles'

interface SliderDotProps {
  onClick?: () => void
  index?: number
  active?: boolean
}

const SliderDot: React.FC<SliderDotProps> = ({onClick, index, active}) => {
  return <SliderDotButton key={index} onClick={onClick} isActive={active} />
}

export default SliderDot
