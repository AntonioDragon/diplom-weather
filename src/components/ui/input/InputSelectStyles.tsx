import styled from 'styled-components'
import {StyleProps} from '../../../app/styles/styleProps'
import {JustifyContentEnum} from '../../../app/styles/stylesDisplay'

interface InputSelectWrapperStyledProps extends StyleProps {}

export const InputSelectWrapper = styled.div<InputSelectWrapperStyledProps>`
  position: relative;
  display: inline-block;
  width: ${({width}) => width || 'auto'};
`
export const Input = styled.input`
  padding: 10px 5px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.87);
  border-radius: 4px;
  transition: 0.3s all ease-out;
  background-color: transparent;
`
interface InputLabelProps {
  isActive?: boolean
  isArrow?: boolean
}

export const InputLabel = styled.label<InputLabelProps>`
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
  font-size: 16px;
  transition: 0.3s all ease-out;
  color: #ffffff;
  ${({isActive}) =>
    isActive &&
    `
        font-size: 12px;
        top: -2px;
        left:0;
        background-color: #121212;
        background-image: linear-gradient( rgba(255,255,255,0.09), rgba(255,255,255,0.09) );
    `};
  ${({isArrow}) =>
    isArrow &&
    `
 position: absolute;
 right: 0;
 left:auto;
 top: 50%;
 transform: translateY(-50%);
 `}
`

interface ArrowStyledProps extends StyleProps {
  isActive?: boolean
}

export const Arrow = styled.svg<ArrowStyledProps>`
  height: 24px;
  width: 24px;
  & * {
    stroke: #ffffff;
  }
  transition: 0.3s all ease-out;
  ${({isActive}) =>
    isActive &&
    `
    transform:  rotate(180deg) ;
  `}
`

interface SelectListStyledProps {
  isActive?: boolean
}
export const SelectList = styled.ul<SelectListStyledProps>`
  position: absolute;
  margin: 0;
  padding: 0 5px;
  box-sizing: border-box;
  height: 0;
  width: 100%;
  overflow: hidden;
  border: none;
  border-radius: 0 0 4px 4px;
  background-color: #121212;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.09),
    rgba(255, 255, 255, 0.09)
  );
  transition: all 0.5s ease-out;
  ${({isActive}) =>
    isActive &&
    `
    height:auto;
    max-height: 200px;
    border: 1px solid rgba(255, 255, 255, 0.87);
  `}
`

export const SelectListElement = styled.li`
  width: 100%;
  background-color: #121212;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.09),
    rgba(255, 255, 255, 0.09)
  );
`
export const SelectListNotFound = styled.p`
  margin: 0;
  width: 100%;
  text-align: center;
  list-style-type: none;
  line-height: 150%;
  color: white;
  font-size: 14px;
`

export const SelectListButton = styled.button`
  position: relative;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
  background-color: transparent;
  border: none;
`

interface SelectButtonTextStyledProps {
  isSmall?: boolean
}

export const SelectButtonText = styled.p<SelectButtonTextStyledProps>`
  margin: 0;
  ${({isSmall}) =>
    isSmall &&
    `
    font-size: 12px;
  `}
`
