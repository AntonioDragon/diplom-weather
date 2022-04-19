import React from 'react'
import styled from 'styled-components'

interface AppBlockProps {
  children: React.ReactNode
}

const AppBlock: React.FC<AppBlockProps> = ({children}) => {
  return <div>{children}</div>
}



export default styled(AppBlock)``
