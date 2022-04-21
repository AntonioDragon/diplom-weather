import styled from 'styled-components'

export const WeatherCardBlock = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 5px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
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
