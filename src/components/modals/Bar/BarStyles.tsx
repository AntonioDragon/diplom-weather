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
  padding-top: 35px;
  box-sizing: border-box;
  width: 250px;
  height: 100vh;
  background-color: rgb(18, 18, 18);
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05)
  );
  overflow-x: auto;
  transition: 0.7s all ease-out;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #121212;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #333333;
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
  background-color: rgb(18, 18, 18);
  color: rgb(255, 255, 255);
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
  background-color: #121212;
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
      stroke: #ffffff;
      fill: #ffffff;
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
`
