import styled from 'styled-components'

interface OptionsStyledProps {
  isActive?: boolean
}

export const OptionsBar = styled.aside<OptionsStyledProps>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 30px;
  height: 40px;
  width: 100%;
  transition: all 0.4s ease-out;
  background-color: ${({theme}) => theme.colors.primary};
  ${({isActive}) =>
    isActive &&
    `
    top: 60px;
  `}
`

export const ThemesBar = styled.div`
  display: flex;
  align-items: center;
`

export const TitleOptions = styled.p`
  margin: 0;
  color: ${({theme}) => theme.text_color.tertiary};
`

export const LanguagesBar = styled.div`
  display: flex;
  align-items: center;
`

interface ButtonOptionsStyledProps {
  isActive?: boolean
  isDisable?: boolean
}

export const ButtonOptions = styled.button<ButtonOptionsStyledProps>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme}) => theme.text_color.tertiary};
  transition: 0.4s all ease-out;
  &:hover {
    color: ${({theme}) => theme.text_color.hover};
  }
  ${({isActive, theme}) =>
    isActive &&
    `
  color: ${theme.text_color.quaternary};
  `}
  ${({isDisable, theme}) =>
    isDisable &&
    `
  color: ${theme.text_color.black};
  `}
`
