import styled from 'styled-components'
import AppButton from '../../ui/button/AppButton'

export const ForecastSection = styled.section`
  position: relative;
  flex-grow: 2;
  background-color: #1a2027;
  overflow: hidden;
`

export const ForecastWrapper = styled.div`
  position: relative;
  padding: 5px 25px 5px 5px;
  box-sizing: border-box;
  height: 230px;
  background-color: #121212;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05)
  );
`

interface ForecastsStylesProps {
  isActive: boolean
}

export const Forecasts = styled.div<ForecastsStylesProps>`
  position: absolute;
  z-index: 0;
  top: 60px;
  left: 0px;
  width: 100%;
  transition: 1s top ease-out;
  ${({isActive}) =>
    !isActive &&
    `
    top:-165px;
    ${ForecastButton}{
      bottom: -25px;
      & svg {
        transform: rotate(180deg);
      }
    }
  `}
`

interface ForecastButtonStylesProps {
  isActive: boolean
}

export const ForecastButton = styled(AppButton)<ForecastButtonStylesProps>`
  position: absolute;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0 0 50% 50%;
  background-color: #121212;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.09),
    rgba(255, 255, 255, 0.09)
  );
  & svg {
    transition: all 0.7s ease-out;
  }
  transition: all 0.7s ease-out;
`
