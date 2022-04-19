import React, {useRef} from 'react'
import useClickOutside from '../../../hooks/useClickOutside'
import {BarList, BarButton, SelectBar} from './BarStyles'

interface BarProps {
  children: React.ReactNode
  isLeft?: boolean
  onSetIsActive: (state: boolean) => void
  isActive: boolean
}

const Bar: React.FC<BarProps> = ({
  children,
  isLeft = false,
  onSetIsActive,
  isActive
}) => {
  const refBar = useRef(null)

  useClickOutside(refBar.current!, () => onSetIsActive(false))

  return (
    <>
      <SelectBar ref={refBar} isActive={isActive} isLeft={isLeft}>
        <BarList>{children}</BarList>
      </SelectBar>
      <BarButton
        isLeft={isLeft}
        isActive={isActive}
        handler={() => onSetIsActive(!isActive)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='24px'
          viewBox='0 0 24 24'
          width='24px'
        >
          <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z' />
        </svg>
      </BarButton>
    </>
  )
}

export default Bar
