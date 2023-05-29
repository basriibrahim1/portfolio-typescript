import React from 'react'

interface Layout {
    children: React.ReactNode;
    className?: string;
}

const Layout: React.FC<Layout> = ({children, className=""}) => {
  return (
    <div className={`w-full h-full relative z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}>{children}</div>
  )
}

export default Layout