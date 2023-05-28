import React from 'react'

interface Layout {
    children: React.ReactNode;
    className?: string;
}

const Layout: React.FC<Layout> = ({children, className=""}) => {
  return (
    <div className={`w-full h-full relative z-0 bg-light p-32 ${className}`}>{children}</div>
  )
}

export default Layout