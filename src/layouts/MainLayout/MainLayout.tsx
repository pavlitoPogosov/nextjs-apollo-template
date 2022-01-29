import React from 'react'
// layouts used for pages

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <>{children}</>
}
