import styled from 'styled-components'

export const ForecastSection = styled.section`
  padding: 100px 100px 20px 100px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #121212;
`

interface DropZoneProps {
  isActive: boolean
}

export const DropZoneTop = styled.div<DropZoneProps>`
  position: absolute;
  top: -20px;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  transition: 0.3s all ease-out;
  ${({isActive}) =>
    isActive &&
    `
    height: 70px;
    background-color: rgba(50, 130, 41, 0.2);
  `}
`

export const DropZoneBottom = styled.div<DropZoneProps>`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 40px;
  transition: 0.3s all ease-out;
  ${({isActive}) =>
    isActive &&
    `
    height: 70px;
    background-color: rgba(0, 129, 141,0.2);
  `};
`




export const ForecastWeatherList = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  background-color: rgb(18, 18, 18);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.16),
    rgba(255, 255, 255, 0.16)
  );
`

export const ForecastWeatherElement = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  list-style-type: none;
`
