'use client'

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArrowRight, Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react"
import { useRouter } from "next/navigation"


const tools =[
  {
    label:'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bgColor: 'bg-violet-500/10',
    href:'/conversation'
  },
  {
    label:'Music',
    icon: Music,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
    href:'/music'
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: '/video',
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/code',
  },
  
]

export default function DashPage() {
  const router = useRouter()
  return (
    <div>
      <div className="mb-4 space-y-4">
        <h2 className="text-2xl md:text-4xl text-center font-bold">Explore the power of AI</h2>
      <p className="text-center text-sm md:text-lg font-light text-muted-foreground">Experience the Smartest AI, Chat with it</p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((index)=>(
         <Card key={index.href} onClick={()=> router.push(index.href)}
         className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
         >
          <div className="flex items-center gap-x-4">
          <div className={cn('p-2 w-fit rounded-md', index.bgColor)}>
            <index.icon className={cn('w-8 h-8', index.color)} />
          </div>
          <h1 className="font-semibold">
            {index.label}
          </h1>
          </div>
            <ArrowRight className="w-5 h-5"/>
         </Card>
        ))}
      </div>
    </div>
  )
}
