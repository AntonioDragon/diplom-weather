import styled from 'styled-components'
import {StyleProps} from '../../../app/styles/styleProps'

interface WeatherCardStyledProps {
  padding?: string
  maxWidth?: string
}

export const WeatherCard = styled.div<WeatherCardStyledProps>`
  position: relative;
  padding: ${({padding}) => padding || '0 20px 10px 20px'};
  box-sizing: border-box;
  height: 250px;
  border-radius: 0 0 4px 4px;
  background-color: ${({theme}) => theme.colors.tertiary || 'rgb(0, 30, 60)'};
`

export const MapWrapper = styled.div``

export const Header = styled.h3`
  margin: 0 0 10px 0;
  color: #ffffff;
  text-align: center;
  color: ${({theme}) => theme.text_color.primary || '#66d9ef'};
`

export const WeatherImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
`

interface BlockFlexStyledProps extends StyleProps {}

export const BlockFlex = styled.div<BlockFlexStyledProps>`
  display: flex;
  justify-content: ${({justifyContent}) => justifyContent || 'flex-start'};
  align-items: ${({alignItems}) => alignItems || 'center'};
  margin-top: ${({marginTop}) => marginTop || 0};
`

interface ParagraphStyledProps extends StyleProps {
  isTemp?: boolean
}

export const Paragraph = styled.p<ParagraphStyledProps>`
  margin: ${({margin}) => margin || '5px 0 0 0'};
  color: ${({theme}) => theme.text_color.white || '#ffffff'};
  & span {
    font-weight: 700;
    color: ${({theme}) => theme.text_color.primary || '#757ce8'};
  }
  ${({isTemp}) =>
    isTemp &&
    `
    margin-left: 10px;
    font-size: 24px;
  `}
`

export const ButtonRefresh = styled.button`
  position: absolute;
  right: 5px;
  top: 0;
  padding: 0;
  border: none;
  background: transparent;
  & svg * {
    fill: ${({theme}) => theme.colors.white || '#ffffff'};
    transition: 0.3s all ease-out;
  }
  &:hover {
    & * {
      fill: ${({theme}) => theme.colors.hover || '#ff4a16'};
    }
  }
`

export const WrapperLoader = styled.div`
  position: relative;
  width: 100%;
  height: 290px;
  background-color: ${({theme}) => theme.colors.tertiary || 'rgb(0, 30, 60)'};
`
