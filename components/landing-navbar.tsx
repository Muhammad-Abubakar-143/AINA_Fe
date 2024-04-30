"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();

  return (
    <nav className="fixed top-0 left-0 w-full z-50  border-b border-white/10 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-5 py-3 lg:px-6 lg:px-7.5 xl:px-10 max-lg:py-4">
      <Link href="/" className="flex items-center w-[12rem] xl:mr-8">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          AINA
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Link className="button relative md:inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7 text-n-1 hidden lg:flex" 
        href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>

      </div>
    </nav>
  )
}