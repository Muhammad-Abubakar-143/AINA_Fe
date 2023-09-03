
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './Mobile-sidebar'
import { useEffect, useState } from 'react'

const Navbar = () => {

  return (
    <div className='flex items-center justify-center p-4'>
      <MobileSidebar/>

        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/' />
        </div>
    </div>
  )
}

export default Navbar