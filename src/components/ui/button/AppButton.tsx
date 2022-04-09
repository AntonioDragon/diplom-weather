import React from 'react'
import styled from 'styled-components'
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

export default styled(AppButton)<StyleProps>`
  padding: 15px 20px;
  width: ${({width}) => width};
`
