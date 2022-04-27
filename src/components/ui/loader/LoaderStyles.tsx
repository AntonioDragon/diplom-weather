import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const LoaderSpinner = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 100;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  border: 3px solid;
  border-color: ${({theme}) => theme.colors.primary};
  border-radius: 50%;
  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 3px;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 1.5px;
    transform-origin: 50% 0%;
  }
  &::before {
    height: 10px;
    left: 13.5px;
    top: 50%;
    animation: ${rotate} 2000ms linear infinite;
  }

  &::after {
    height: 12px;
    left: 13.5px;
    top: 50%;
    animation: ${rotate} 500ms linear infinite;
  }
`
