"use client"
import React from 'react'
import { navbar } from './LandingNavbar'
import Link from 'next/link'
import { Dribbble, Facebook, Figma, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const LandingFooter = () => {
  return (
  <footer className="border-white/10 border-t">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
              <Image alt="Logo" src="/aina.svg" className="relative w-2/5 object-contain" width={50} height={10} />
              </a>
              
          </div>
        
          <div className="flex justify-between w-full md:w-[15%]  my-6">
            <Link href=''>
          <Facebook size={25} className="transition ease-in-out delay-150 text-blue-500 hover:scale-110 hover:text-[#ce57bb] duration-300 cursor-pointer" />
            </Link>
            <Instagram size={25} className="transition ease-in-out delay-150 text-purple-500 rounded-sm hover:text-[#ce57bb] hover:scale-110 duration-300 cursor-pointer" />
            <Twitter size={25} className="transition ease-in-out delay-150 text-blue-500 hover:scale-110 hover:text-[#ce57bb] duration-300 cursor-pointer" />
            <Link href='https://www.linkedin.com/in/abubakarmughal/' target='_blank'>
            <Linkedin size={25} className="transition ease-in-out delay-150 text-blue-300 hover:scale-110 hover:text-[#ce57bb] duration-300 cursor-pointer" />
            </Link>
            
           
          </div>
        
      </div>
      <hr className="my-6 border-white/10 sm:mx-auto  lg:my-8" />
      <div className="w-full text-center">
          <span className="text-sm text-gray-500 sm:text-center ">© 2023 <Link href="/" className="hover:underline">AINA™</Link>. All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

    
  )
}

export default LandingFooter