import styled from 'styled-components'

export const SliderCard = styled.div`
  box-sizing: border-box;
  background-color: ${({theme}) => theme.colors.secondary};
  height: 180px;
  width: 90%;
  border-radius: 4px;
  padding: 10px;
  @media (max-width: 520px) {
    width: 100%;
  }
`

export const SliderIcon = styled.svg`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  & * {
    fill: ${({theme}) => theme.colors.quaternary};
  }
`

export const SliderParagraph = styled.p`
  margin: 2px 0 0 0;
  color: ${({theme}) => theme.text_color.white};
  line-height: 150%;
  & span {
    font-weight: 700;
    color: ${({theme}) => theme.text_color.tertiary};
  }
`

export const SliderHeader = styled.h4`
  margin: 0;
  color: ${({theme}) => theme.colors.tertiary};
`
export const SliderImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
`
interface SliderDotButtonStyledProps {
  isActive?: boolean
}

export const SliderDotButton = styled.button<SliderDotButtonStyledProps>`
  cursor: pointer;
  display: block;
  padding: 0;
  margin-left: 5px;
  width: 6px;
  height: 6px;
  border: none;
  background-color: ${({theme}) => theme.colors.secondary || '#ffffff'};
  border-radius: 50%;
  transition: all 0.4s ease-out;
  ${({isActive, theme}) =>
    isActive &&
    `
  background-color: ${theme.colors.white || '#ffffff'};;
  width: 12px;
  border-radius: 100px;
  `}
`
