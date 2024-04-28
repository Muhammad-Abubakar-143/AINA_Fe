import React from 'react'
import Section from './Section'
import Heading from './ui/Heading'
import { roadmap } from '@/lib/constants'
import Image from 'next/image'
import TagLine from './ui/TagLine'

const Roadmap = () => {
  return (
    <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />
      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item)=>{
          const status = item.status === "done" ? "Done" : "In progress";
          return (
            <div key={item.id} className={`md:flex border border-white/10 even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem]`}>
              <div className="relative p-8 bg-[#0e0c15] rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                <Image
                    className="w-full"
                    src='/grid.png'
                    width={650}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-10">
                  <div className='flex items-center justify-between max-w-[27rem] mb-8 md:mb-20'>
                    <TagLine>{item.status}</TagLine>
                    <div className='flex items-center px-4 py-1 bg-white rounded text-black'>
                      <Image className='mr-2.5' width={16} height={16} src={item.status === 'done'? '/check-02.svg': '/loading-01.svg'} alt={status}/>
                    <div className='tagline'>{status}</div>
                    </div>
                  </div>
                  <div className='mb-10 -my-10 -mx-15'>
                    <Image className='w-full' src={item.imageUrl} alt={item.title} width={628} height={426}/>
                  </div>
                  <h4 className='mb-4 md:text-4xl text-3xl'>{item.title}</h4>
                  <p className='text-[#757185]'>{item.text}</p>
                  </div>
              </div>
            </div>
          )
        })}
        <GradientImage/>
      </div>
      </div>
      </Section>
  )
}

export default Roadmap


export const GradientImage = () => {
  return (
    <div className="absolute top-[18.25rem] -left-[30.375rem] w-[56.625rem] opacity-60 mix-blend-color-dodge pointer-events-none">
      <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">
        <Image
          className="w-full"
          src='/gradient.png'
          width={942}
          height={942}
          alt="Gradient"
        />
      </div>
    </div>
  );
};
