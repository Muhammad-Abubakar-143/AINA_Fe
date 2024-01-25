"use client"
import React from 'react'
import { navbar } from './LandingNavbar'
import Link from 'next/link'
import { Dribbble, Facebook, Figma, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const LandingFooter = () => {
  return (
    <>
    

<footer className="bg-white/5 dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
              <Image alt="Logo" src="/aina.svg" className="relative w-2/5 object-contain" width={50} height={10} />
              </a>
              <p className="py-4 max-w-sm text-white">
            AINA is a Software as a service website where you can access AI tools to generate beautiful images and videos, Text to voice and much more in just one click.
          </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-[#ce57bb] uppercase dark:text-white">Resources</h2>
                  <ul>
              {navbar.map((link) => (
                <li key={link.id} className="mb-2 text-white cursor-pointer transition ease-in-out delay-150  hover:text-[#ce57bb] duration-300">
                  <Link href={link.link}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-[#ce57bb] uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <Link href='/'>
                        <li className='mb-2 text-white hover:text-[#ce57bb] duration-300 transition ease-in-out delay-150 cursor-pointer'>Facebook</li>
                      </Link>
                      <Link href='/'>
                        <li className='mb-2 text-white hover:text-[#ce57bb] duration-300 transition ease-in-out delay-150 cursor-pointer'>Twitter</li>
                      </Link>
                      <Link href='/'>
                        <li className='mb-2 text-white hover:text-[#ce57bb] duration-300 transition ease-in-out delay-150 cursor-pointer'>Linkedin</li>
                      </Link>
                     
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-[#ce57bb] uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                    <Link href='/'>
                      <li className="mb-2 text-white hover:text-[#ce57bb] duration-300 transition ease-in-out delay-150 cursor-pointer">
                        Privacy Policy
                    </li>
                    </Link>
                    <Link href='/'>
                      <li className="mb-2 text-white hover:text-[#ce57bb] duration-300 transition ease-in-out delay-150 cursor-pointer">
                        Terms & Conditions
                    </li>
                    </Link>
                    
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="/" className="hover:underline">AINA™</Link>. All Rights Reserved.
          </span>
          <div className="flex justify-between w-full md:w-[20%] my-6">
          <Facebook size={25} className="transition ease-in-out delay-150 text-blue-500 hover:scale-110 hover:text-[#ce57bb] duration-300 cursor-pointer" />
            <Instagram size={25} className="transition ease-in-out delay-150 text-purple-500 rounded-sm hover:text-[#ce57bb] hover:scale-110 duration-300 cursor-pointer" />
            <Twitter size={25} className="transition ease-in-out delay-150 text-blue-500 hover:scale-110 hover:text-[#ce57bb] duration-300 cursor-pointer" />
            <Linkedin size={25} className="transition ease-in-out delay-150 text-blue-300 hover:scale-110 hover:text-[#ce57bb] duration-300 cursor-pointer" />
            <Dribbble size={25} className="transition ease-in-out delay-150 text-pink-500 hover:scale-110 hover:text-[#ce57bb] duration-300 cursor-pointer" />
            <Figma size={25} className="transition ease-in-out delay-150 text-orange-500 hover:scale-110 hover:text-[#ce57bb] duration-300 cursor-pointer" />
          </div>
      </div>
    </div>
</footer>

    </>
  )
}

export default LandingFooter