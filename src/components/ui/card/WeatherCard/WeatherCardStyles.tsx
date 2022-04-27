import styled from 'styled-components'

export const CardButton = styled.button`
  cursor: pointer;
  z-index: 1;
  right: 10px;
  top: 10px;
  position: absolute;
  padding: 0;
  background-color: transparent;
  border: none;
  transition: 0.3s all ease-out;
  & svg * {
    fill: ${({theme}) => theme.colors.white || '#ffffff'};
    transition: 0.3s all ease-out;
  }
  &:hover {
    & * {
      fill: ${({theme}) => theme.colors.hover || '#ff4a16'};
    }
  }
  @media (max-width: 675px) {
    opacity: 1;
  }
`

export const CardTitle = styled.h3`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 5;
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  color: ${({theme}) => theme.text_color.primary || '#ffffff'};
  opacity: 0.5;
`

export const WeatherCardBlock = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 5px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
`
