'use client'


import { cn } from "@/lib/utils"
import { LayoutDashboard,Code, ImageIcon, MessageSquare, Music, Settings, VideoIcon } from "lucide-react"
import { Montserrat } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import {usePathname} from 'next/navigation'
const monsterrat = Montserrat({ weight: '600', subsets: ['latin'] })


const sideRoutes = [
  {
    key: 1,
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    color: "text-sky-500",
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-700",
    href: '/video',
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: "text-emerald-500",
    href: '/music',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    href: '/code',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];


const Sidebar = () => {
  const pathname = usePathname() 
  return (
    <div className="flex flex-col space-y-4 py-4 h-full bg-[#111827] text-white">
      <div className="flex-1 px-3 py-2 ">
        <Link href='/dashboard' className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image src='/logo.png' alt="logo" fill />
          </div>
          <h1 className={cn("text-2xl font-bold", monsterrat.className)}>Genius</h1>
        </Link>
        <div className="space-y-1">
          {sideRoutes.map((index) => (
            <Link key={index.key} href={index.href} className={cn("text-sm group flex p-3 justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === index.href ? 'text-white bg-white/10':'text-zinc-400',)}>
              <div className="flex items-center flex-1">
                <index.icon className={cn("h-5 w-5 mr-3", index.color)} />
                {index.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar