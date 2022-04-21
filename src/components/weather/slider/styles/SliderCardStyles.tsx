import styled from 'styled-components'

export const SliderCard = styled.div`
  box-sizing: border-box;
  background-color: rgb(33, 150, 243);
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
    fill: rgb(0, 30, 60);
  }
`

export const SliderParagraph = styled.p`
  margin: 2px 0 0 0;
  color: #ffffff;
  line-height: 150%;
  & span {
    font-weight: 700;
    color: rgb(0, 30, 60);
  }
`

export const SliderHeader = styled.h4`
  margin: 0;
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
  background-color: #ffffff;
  border-radius: 50%;
  transition: all 0.4s ease-out;
  ${({isActive}) =>
    isActive &&
    `
  background-color: #ffffff;
  width: 12px;
  border-radius: 100px;
  `}
`
