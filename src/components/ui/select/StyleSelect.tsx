import styled from 'styled-components'
import {StyleProps} from '../../../app/styles/styleProps'

interface SelectStylesProps extends StyleProps {
  isActive?: boolean
}

export const Select = styled.div<SelectStylesProps>`
  position: relative;
  display: inline-block;
  width: ${({width}) => width || 'auto'};
  ${({isActive}) =>
    isActive &&
    `
    ${SelectList}{
        max-height: 200px;
        border: 1px solid #121212;
    }
    ${ButtonArrow}{
        transform: rotate(180deg);
    }
  `};
`
export const SelectButton = styled.button<StyleProps>`
  cursor: pointer;
  padding: 12px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.87);
  border-radius: 4px;
  transition: 0.3s all ease-out;
  background-color: ${({backgroundColor}) => backgroundColor || 'transparent'};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`
export const ButtonText = styled.p`
  margin: 0;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.87);
`

export const ButtonArrow = styled.svg`
  height: 24px;
  width: 24px;
  & * {
    stroke: #ffffff;
  }
`

export const SelectList = styled.ul`
  z-index: 1;
  position: absolute;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  max-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  outline: none;
  transition: 0.3s all ease-out;
`

interface ElementStyledProps {
  hoverColor?: string
  isFocus?: boolean
  focusColor?: string
}

export const SelectElement = styled.li<ElementStyledProps>`
  cursor: pointer;
  box-sizing: border-box;
  overflow: hidden;
  padding: 5px 0 5px 5px;
  width: 100%;
  list-style-type: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: 0.1s all ease;
  &:hover {
    background-color: ${({hoverColor}) => hoverColor || 'rgb(108, 206, 181)'};
  }
  ${(isFocus) =>
    isFocus &&
    `
  background-color: ${({focusColor}: {focusColor?: string}) =>
    focusColor || 'rgb(78, 139, 124)'};
  `}
`
