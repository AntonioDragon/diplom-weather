import styled from 'styled-components'

export const CardButton = styled.button`
  cursor: pointer;
  z-index: 1;
  right: 10px;
  top: 10px;
  position: absolute;
  background-color: transparent;
  border: none;
  opacity: 0;
  transition: 0.3s all ease-out;
  & svg * {
    fill: #ffffff;
    transition: 0.3s all ease-out;
  }
  &:hover {
    & * {
      fill: #ff4a16;
    }
  }
`

export const CardTitle = styled.h3`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 5;
  margin: 0;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.2);
`

export const WeatherCardBlock = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 5px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  &:hover {
    & ${CardButton} {
      opacity: 1;
    }
  }
`

interface DropZoneProps {
  isActive: boolean
}

export const DropZoneLeft = styled.div<DropZoneProps>`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 100%;
  transition: 1s all ease-out;
  ${({isActive}) =>
    isActive &&
    `
    width: 70px;
    background-color: rgba(255, 0, 41,0.2);
  `};
`

export const DropZoneRight = styled.div<DropZoneProps>`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 40px;
  height: 100%;
  transition: 1s all ease-out;
  ${({isActive}) =>
    isActive &&
    `
  width: 70px;
  background-color: rgba(255, 0, 255,0.2);
`};
`
