import styled from 'styled-components'
import AppButton from '../../button/AppButton'

export const CardParagraph = styled.p`
  white-space: nowrap;
`

export const CardButton = styled(AppButton)`
  cursor: pointer;
  opacity: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  transition: 0.3s all ease-out;
  & svg * {
    stroke: #ffffff;
    transition: 0.3s all ease-out;
  }
  &:hover svg * {
    stroke: #ff4a16;
  }
`

interface CardBlockStyledProps {
  width?: string
}

export const CardBlock = styled.div<CardBlockStyledProps>`
  display: flex;
  justify-content: space-between;
  width: ${({width}) => width || 'auto'};
`

export const Card = styled.div`
  cursor: pointer;
  display: flex;
  align-item: center;
  justify-content: space-between;
  &:hover {
    & ${CardButton} {
      opacity: 1;
    }
  }
`
