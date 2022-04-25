import styled from 'styled-components'
import {StyleProps} from '../../../app/styles/styleProps'
import {DisplayEnum} from '../../../app/styles/stylesDisplay'
import AppButton from '../../ui/button/AppButton'

export const HeaderStyle = styled.header`
  position: absolute;
  z-index: 12;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  min-height: 64px;
  width: 100%;
  background-color: ${({theme})=> theme.colors.primary || '#121212'};
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.09),
    rgba(255, 255, 255, 0.09)
  );
`

export const NavStyle = styled.div<StyleProps>`
  display: ${({display}) => display || DisplayEnum.block};
  align-items: center;
`

export const HeaderButton = styled(AppButton)`
  cursor: pointer;
  padding: 0;
  margin-left: 20px;
  background-color: transparent;
  border: none;
  & svg {
    width: 30px;
    height: 30px;
    transition: 1s all ease-out;
    & * {
      fill: ${({theme})=> theme.colors.secondary || '#ffffff'} ;
      transition: 1s all ease-out;
    }
  }
  &:hover {
    & svg {
      transform: rotate(360deg);
      & * {
        fill: ${({theme})=> theme.colors.hover || '#ff4a16'};
      }
    }
  }
`
