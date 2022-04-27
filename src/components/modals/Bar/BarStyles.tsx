import styled from 'styled-components'
import AppButton from '../../ui/button/AppButton'

interface ForecastsSelectBarStyledProps {
  isActive?: boolean
  isLeft?: boolean
}

export const SelectBar = styled.aside<ForecastsSelectBarStyledProps>`
  position: fixed;
  right: -250px;
  top: 20px;
  z-index: 10;
  padding-top: 35px;
  box-sizing: border-box;
  width: 250px;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.primary || '#121212'};
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05)
  );
  overflow-x: auto;
  transition: 0.7s all ease-out;
  @media (max-width: 675px) {
    padding-top: 70px;
  }
  &::-webkit-scrollbar {
    width: 8px;
    @media (max-width: 675px) {
      width: 3px;
    }
  }
  &::-webkit-scrollbar-track {
    background-color: ${({theme}) => theme.colors.primary || '#121212'};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({theme}) => theme.colors.secondary || '#333333'};
  }
  ${({isLeft}) =>
    isLeft &&
    `
    right: auto;
    left: -250px;
    `}
  ${({isActive, isLeft}) =>
    isActive &&
    (isLeft
      ? `
        left: 0;
      `
      : `
        right: 0;
      `)}
`

export const BarList = styled.ul`
  margin: 0;
  padding: 10px;
`

export const BarElement = styled.li`
  margin-top: 10px;
  padding: 10px 10px;
  list-style-type: none;
  background-color: ${({theme}) => theme.colors.tertiary || 'rgb(18, 18, 18)'};
  color: ${({theme}) => theme.text_color.primary || '#ffffff'};
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
    rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.08),
    rgba(255, 255, 255, 0.08)
  );
`

interface ForecastsButtonStyledProps {
  isActive?: boolean
  isLeft?: boolean
}

export const BarButton = styled(AppButton)<ForecastsButtonStyledProps>`
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  padding: 0;
  height: 200px;
  border: none;
  border-radius: 50% 0 0 50%;
  background-color: ${({theme}) => theme.colors.primary || '#121212'};
  box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px,
    rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.11),
    rgba(255, 255, 255, 0.11)
  );
  transition: 0.7s all ease-out;
  & svg {
    transform: rotate(-180deg);
    transition: 0.7s all ease-out;
    & * {
      stroke: ${({theme}) => theme.colors.secondary || '#ffffff'};
      fill: ${({theme}) => theme.colors.secondary || '#ffffff'};
    }
  }
  ${({isLeft}) =>
    isLeft &&
    `
  right: auto;
  left:0;
  border-radius: 0 50% 50% 0;
  & svg {
    transform: rotate(0);
  }
`}
  ${({isActive, isLeft}) =>
    isActive &&
    (isLeft
      ? `
      left: 250px;
      & svg {
          transform: rotate(-180deg);
      }
      `
      : `
      right: 250px;
      & svg {
          transform: rotate(0);
      }
      `)}
  @media (max-width: 675px) {
    display: none;
  }
`
export const BurgerWrapper = styled.div<ForecastsButtonStyledProps>`
  position: absolute;
  top: 105px;
  right: 10px;
  ${({isLeft}) =>
    isLeft &&
    `
  right: auto;
  left:10px;
  `}
`

export const BarButtonBurger = styled.button<ForecastsButtonStyledProps>`
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 25px;
  border: none;
  background-color: transparent;
  @media (min-width: 665px) {
    display: none;
  }
  & span {
    position: absolute;
    width: 100%;
    height: 3px;
    left: 0px;
    background-color: ${({theme}) => theme.colors.quaternary};
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.5s ease-out;
    cursor: pointer;
    &::before {
      top: 7px;
    }
    &::after {
      top: -7px;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      left: 0px;
      background-color: ${({theme}) => theme.colors.quaternary};
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      transition: all 0.5s ease-out;
    }
  }
  ${({isActive}) =>
    isActive &&
    `
      position: fixed;
      & .burger-button__icon {
        background: rgba(0, 0, 0, 0);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
        &::before {
          top: 0;
          transform: rotate(45deg);
        }
        &::after {
          top: 0;
          transform: rotate(135deg);
          box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
        }
      }
  `}
`
