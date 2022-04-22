import styled from 'styled-components'

export const ForecastSection = styled.section`
  padding: 140px 100px 20px 100px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #121212;
  @media (max-width: 992px) {
    padding: 100px 40px 0 40px;
  }
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
  width: 100%;
  height: 30px;
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
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #333333;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(0, 30, 60);
  }
`

export const ForecastWeatherElement = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  list-style-type: none;
`

export const Location = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
`

interface ButtonFavoriteStyledProps {
  isActive?: boolean
}

export const ButtonFavorite = styled.button<ButtonFavoriteStyledProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  & svg {
    & * {
      transition: 0.3s all ease-out;
      fill: #ffffff;
    }
  }
  &:hover {
    & svg {
      & * {
        fill: #ff4a16;
      }
    }
  }
  ${({isActive}) =>
    isActive &&
    `
    & svg {
      & *{
        fill: #e9ff1f;
      }
    }
    `};
`

export const ForecastNotFound = styled.h2`
  margin: 10px 0;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`
export const ForecastNotFoundParagraph = styled.p`
  margin: 0;
  font-size: 80px;
  text-align: center;
  color: #ffffff;
`

export const ForecastTitle = styled.h1`
  margin: 0 0 0 -10px;
  color: #ffffff;
  & span {
    margin-left: 10px;
  }
`
