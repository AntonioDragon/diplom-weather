import styled from 'styled-components'
import AppButton from '../../button/AppButton'

interface ButtonCheckboxStyledProps {
  isActive: boolean
}

export const ButtonCheckbox = styled(AppButton)<ButtonCheckboxStyledProps>`
  cursor: pointer;
  position: absolute;
  right: 0;
  border: none;
  background-color: transparent;
  & svg {
    & * {
      fill: ${({theme}) => theme.colors.white || '#ffffff'};
      transition: 0.3s all ease-out;
    }
  }
  &:hover {
    & svg * {
      fill: ${({theme}) => theme.colors.hover || '#ff4a16'};
    }
  }
`

export const PreviewCard = styled.div`
  position: relative;
  min-width: 200px;
  height: 200px;
`

export const WrapperImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-color: ${({theme}) => theme.colors.tertiary || '#121212'};
`

export const Paragraph = styled.p`
  position: absolute;
  bottom: 5px;
  font-size: 18px;
  width: 100%;
  text-align: center;
  color: ${({theme}) => theme.text_color.primary || '#ffffff'};
`
