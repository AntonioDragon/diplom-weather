import React from 'react'
import styled, { css } from 'styled-components'
import {StyleProps} from '../../../app/styles/styleProps'

interface AppButtonProps {
  children: React.ReactNode
  handler?: React.HTMLAttributes<HTMLButtonElement>['onClick']
  disabled?: boolean
  className?: string
  type?: 'submit' | 'button'
}

const AppButton: React.FC<AppButtonProps> = ({
  children,
  handler,
  className,
  disabled = false,
  type = 'button'
}) => {
  return (
    <button
      className={className}
      disabled={disabled}
      type={type}
      onClick={handler}
    >
      {children}
    </button>
  )
}

interface AppButtonStyledProps extends StyleProps {
  primary?: boolean
  secondary?: boolean
  outline?: boolean
}



export default AppButton
// export default styled(AppButton)<AppButtonStyledProps>`
//   padding: 15px 20px;
//   width: ${({width}) => width || '100%'};
//   background: ${({theme}) => theme.colors.secondary};

//   ${({primary, theme}) =>
//     primary &&
//     `
//     background: ${theme.colors.primary};
//     color: ${theme.colors.secondary};
//   `};

//   ${({outline, theme}) =>
//     outline &&
//     `
//     background: transparent;
//     color: ${theme.colors.secondary};
//     border: 1px solid ${theme.colors.secondary};
//   `};

//   ${({disabled, theme}) =>
//     disabled &&
//     `
   
//     color: ${theme.colors.secondary};
//   `};
// `
// background: ${theme.colors.disabled};