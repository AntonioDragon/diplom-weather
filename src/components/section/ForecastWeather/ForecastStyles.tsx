import styled from 'styled-components'

interface ForecastSectionStyledProps {
  image?: string
}

export const ForecastSection = styled.section<ForecastSectionStyledProps>`
  padding: 140px 100px 20px 100px;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: ${({theme}) => theme.colors.secondary || '#121212'};
  @media (max-width: 992px) {
    padding: 125px 40px 0 40px;
  }
  @media (max-width: 675px) {
    padding: 160px 10px 0 10px;
  }
  ${({image}) =>
    image &&
    `
    &:before{
      content: '';
      position:absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      background-image: url('.${image}');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100% 100%;
      opacity: 0.5;
    }
    
  `}
`

interface DropZoneProps {
  isActive: boolean
}

export const DropZoneTop = styled.div<DropZoneProps>`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  transition: 0.3s all ease-out;
  background-color: ${({theme}) => theme.colors.tertiary || 'rgb(0, 30, 60)'};
  ${({isActive, theme}) =>
    isActive &&
    `
    height: 70px;
    background-color: ${theme.colors.quaternary};
  `}
`

export const DropZoneBottom = styled.div<DropZoneProps>`
  width: 100%;
  height: 30px;
  transition: 0.3s all ease-out;
  ${({isActive, theme}) =>
    isActive &&
    `
    height: 70px;
    background-color: rgba(${theme.colors.quaternary},0.2);
  `};
`

export const ForecastWeatherList = styled.ul`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  max-height: 100%;
  overflow: auto;
  background-color: ${({theme}) => theme.colors.primary || '#121212'};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.16),
    rgba(255, 255, 255, 0.16)
  );
  &::-webkit-scrollbar {
    width: 8px;
    @media (max-width: 675px) {
      width: 3px;
    }
  }
  &::-webkit-scrollbar-track {
    background-color: ${({theme}) => theme.colors.secondary || '#333333'};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.colors.primary || 'rgb(0, 30, 60)'};
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
  left: 0;
  padding-left: 30px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 675px) {
    top: 105px;
    padding: 0;
    justify-content: center;
  }
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
      fill: ${({theme}) => theme.color_star.inactive || '#ffffff'};
    }
  }
  &:hover {
    & svg {
      & * {
        fill: ${({theme}) => theme.colors.hover || '#ff4a16'};
      }
    }
  }
  ${({isActive, theme}) =>
    isActive &&
    `
    & svg {
      & *{
        fill: ${theme.color_star.active || '#e9ff1f'};
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
  color: ${({theme}) => theme.text_color.white};
  & span {
    margin-left: 10px;
  }
  @media (max-width: 675px) {
    font-size: 18px;
  }
`

export const NotFoundLocation = styled.div`
  padding: 20px;
  background-color: ${({theme}) => theme.colors.primary || '#121212'};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,
    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.16),
    rgba(255, 255, 255, 0.16)
  );
`

export const NotFoundTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: ${({theme}) => theme.colors.secondary};
`

export const NotFoundList = styled.ul`
  @media (max-width: 450px) {
    padding: 10px;
  }
`

export const NotFoundElement = styled.li`
  margin-top: 10px;
  color: ${({theme}) => theme.colors.quaternary};
`
