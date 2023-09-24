
import { UserButton } from '@clerk/nextjs'
import MobileSidebar from './Mobile-sidebar'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {

  return (
    <div className='flex items-center mb-5 justify-center p-4'>
      <MobileSidebar/>
      <Link href='/dashboard' className="flex ml-4  md:hidden">
          <div className="relative w-10 h-5 mr-4">
            <Image src='/logo.png' alt="logo" fill />
          </div>
          <Image src='/aina(black).svg' alt="aina" width={100} height={1}/>
        </Link>

        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/' />
        </div>
    </div>
  )
}

export default Navbar