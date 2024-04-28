'use client'
import React from 'react'
import Section from './Section'
import Image from 'next/image'
import { benefits } from '@/lib/constants'

import ClipPath from './ui/ClipPath'
import Heading from './ui/Heading'

const Benefits = () => {
  return (
    <Section>
      <div className="container relative z-2">
        <Heading
          className="lg:text-6xl md:text-3xl mx-auto font-normal text-xl mb-6 text-[#fff]"
          title="Chat Smarter, Not Harder with AINA"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-10 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="font-normal md:text-2xl text-xl mb-5">{item.title}</h5>
                <p className="font-light text-gray-300 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <Image
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  {/* <Arrow /> */}
                </div>
              </div>

              {item.light && <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />}

              <div
                className="absolute inset-0.5 bg-[#0e0c15] rounded-b-[40px] rounded-l-[30px] rounded-r-[25%]"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <Image
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* <ClipPath /> */}
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Benefits