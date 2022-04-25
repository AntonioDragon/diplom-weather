import styled from 'styled-components'
import {StyleProps} from '../../../app/styles/styleProps'

interface WeatherCardStyledProps {
  padding?: string
  maxWidth?: string
}

export const WeatherCard = styled.div<WeatherCardStyledProps>`
  position: relative;
  padding: ${({padding}) => padding || '10px 20px'};
  box-sizing: border-box;
  height: 250px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.primary || 'rgb(0, 30, 60)'};
`

export const MapWrapper = styled.div``

export const Header = styled.h3`
  margin: 5px 0;
  color: #ffffff;
  text-align: center;
  color: #66d9ef;
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
  color: #ffffff;
  & span {
    font-weight: 700;
    color: #757ce8;
  }
  ${({isTemp}) =>
    isTemp &&
    `
    margin-left: 10px;
    font-size: 24px;
  `}
`
