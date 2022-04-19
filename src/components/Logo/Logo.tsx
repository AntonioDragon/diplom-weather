import React from 'react'
import {StyledLogo, StyledLogoImage, StyledParagraph} from './StyleLogo'
import logo from '../../assets/images/Logo.svg'

const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <StyledLogoImage src={logo} alt='Logo' />
      <StyledParagraph>Open-Wether</StyledParagraph>
    </StyledLogo>
  )
}

export default Logo
