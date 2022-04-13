import styled from 'styled-components'
import AppButton from '../../ui/button/AppButton'

interface FavoriteBlockStyledProps {
  isActive: boolean
}

export const FavoritesBlock = styled.section<FavoriteBlockStyledProps>`
  position: relative;
  padding-top: 64px;
  flex-grow: 0.5;
  box-sizing: border-box;
  height: 100vh;
  background-color: #121212;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 1px -1px,
    rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05)
  );
  transition: 0.7s all ease-out;
  ${({isActive}) =>
    !isActive &&
    `
    flex-grow: 0.05;
    & ${FavoriteButton}{
      & svg{
        transform: rotate(180deg);
      }
    }
  `}
`

export const FavoritesTitle = styled.h2`
  position: absolute;
  margin: 0;
  padding: 5px 0;
  width: 100%;
  height: 30px;
  text-align: center;
  color: #ffffff;
  background-color: #121212;
`

export const FavoriteList = styled.ul`
  margin-top: -10px;
  padding: 0 5px;
`

export const FavoriteElement = styled.li`
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

interface FavoriteButtonStyledProps {
  isActive?: boolean
}

export const FavoriteButton = styled(AppButton)<FavoriteButtonStyledProps>`
  position: absolute;
  top: 50%;
  right: -12px;
  z-index: 2;
  transform: translateY(-50%);
  padding: 0;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0 50% 50% 0;
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
