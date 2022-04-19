import React from 'react'
import {createPortal} from 'react-dom'

interface PortalProps {
  children: React.ReactNode
}

const Portal: React.FC<PortalProps> = ({children}) => {
  return createPortal(children, document.getElementById('portals')!)
}

export default Portal
