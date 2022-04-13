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

export const SmallCardBlock = styled.p`
  margin: 0;
  display: none;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ff4a16;
  color: #ffffff;
  font-size: 22px;
  font-family: 'Bon-Foyage';
  transition: 0.6s all ease-out;
`

interface CardStyledProps {
  isActive: boolean
}

export const Card = styled.div<CardStyledProps>`
  cursor: pointer;
  display: flex;
  align-item: center;
  justify-content: space-between;
  &:hover {
    & ${SmallCardBlock} {
      opacity: 0.7;
    }
    & ${CardButton} {
      opacity: 1;
    }
  }
  ${({isActive}) =>
    !isActive &&
    `
    display: flex;
    justify-content: center;
    border-radius: 50%;
    & ${SmallCardBlock}{
      display: flex;
    }
    & ${CardBlock}{
      display: none;
    };
    & ${CardButton}{
      display: none;
    };
  `}
`
