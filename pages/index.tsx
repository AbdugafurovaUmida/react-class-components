import React, { ReactNode } from 'react'

interface MainLayoutProps {
  children: ReactNode
}

export default function MainLayoutProps({ children }) {
  return <div>{children}</div>
}
