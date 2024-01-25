"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu } from "lucide-react";



const font = Montserrat({ weight: '600', subsets: ['latin'] });

const LandingNavbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
    const { isSignedIn } = useAuth();
    
  return (
    <nav className="p-4 px-9 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative w-full h-full mr-4 object-contain">
          <Image alt="Logo" src="/aina.svg" className="relative w-2/5 object-contain" width={50} height={10}  />
        </div>
       
      </Link>
      <div className="md:flex items-center gap-x-2 hidden">
        {navbar.map((navLink)=>(
          <div className="text-[#ce57bb]" key={navLink.id}>
            <Link className="px-2" href={navLink.link}>
              {navLink.title}
            </Link>
          </div>
        ))}
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
      <div className='sm:hidden flex flex-1 justify-end items-center '>
         <Menu className='w-[28px] h-[28px] object-contain text-white cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
         <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-white/5 transition ease-in-out delay-150 duration-300 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navbar.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#14213d]" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <Link href={`#${nav.id}`}>{nav.title}</Link>
                </li>
              ))}
            </ul>
            <button className='bg-[#14213D] font-bold flex text-sm px-6 py-3 rounded-lg shadow-lg text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:text-black hover:scale-110 hover:bg-[#FCA311] duration-300'>
                Book a meeting
            </button>
          </div>
        </div>
    </nav>
  )
}

export default LandingNavbar


export const navbar=[
  {
      id:1,
      link:"/tools",
      title:"Tools",
  },
  {
      id:2,
      link:"/about",
      title:"About Us",
  },
  {
      id:3,
      link:"/contact",
      title:"Contact Us",
  },
 
]