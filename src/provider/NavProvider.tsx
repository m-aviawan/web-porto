'use client'

import React, { ReactNode } from 'react'
import { Toaster }from 'react-hot-toast'

interface INavProviderProps {
    children: ReactNode
}

const NavProvider = ({children}: INavProviderProps) => {
  return (
    <section className='mx-20'>
      <Toaster />
        {children}
    </section>
  )
}

export default NavProvider
