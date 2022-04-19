import styled from 'styled-components'

export const WeatherCardBlock = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: rgb(18, 18, 18);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.16),
    rgba(255, 255, 255, 0.16)
  );
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
