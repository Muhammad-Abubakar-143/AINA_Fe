import React from 'react'
import Section from './Section'
import Heading from './ui/Heading'
import Image from 'next/image'
import Generating from './Generating'
import { Gradient } from './landing-hero'
import { brainwaveServices, brainwaveServicesIcons } from '@/lib/constants'

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <div
        className='max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center'
        >
          <h1 className='lg:text-5xl md:text-3xl text-xl mb-5'>Generate AI made for creators.</h1>
          <p className='text-[#757185]'>AINA unlocks the pothential of AI_powered applications</p>
          </div>

        <div className="relative"> 
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-[#ffffff1a] rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <Image
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src="/services/service-1.png"
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="md:text-4xl text-2xl mb-4">Smartest AI</h4>
              <p className="text-[#757185] mb-[3rem]">
                AINA unlocks the potential of AI-powered applications
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-b border-white/10"
                  >
                    <Image width={24} height={24} src="/collaboration/check.svg" alt='Check Icon' />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <Generating className="absolute left-4 right-4 bottom-4 bg-white/10 border-white/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-white/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src="/services/service-2.png"
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-[#0e0c1500] to-[#0e0c15e6] lg:p-15">
                <h4 className="md:text-4xl text-2xl mb-4">Photo editing</h4>
                <p className="text-[#757185] mb-[3rem]">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-[#15131d] rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="md:text-4xl text-2xl mb-4">Video generation</h4>
                <p className="text-[#757185] mb-[2rem] ">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl w-[3rem] h-[3rem] bg-[#252134] flex items-center justify-center border-2 hover:border-white ${
                        index === 2
                          ? "border-white "
                          : "border-[#252134]"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-[#252134] rounded-[1rem]"
                            : ""
                        }
                      >
                        <Image src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <Image
                  src="/services/service-3.png"
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar /> 
              </div>
            </div>
          </div>

          <BlockGradient/>
        </div>

        <div className="hidden pt-4 mt-5 relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src='/4-small.png'
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src='/stars.svg'
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Services

export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <Image
        src='/play.svg'
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3"
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-[#ac6aff]"></div>
      </div>
    </div>
  );
};

export const BlockGradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <Image
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src='/gradient.png'
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const VideoChatMessage = () => {
  return (
    <div className="absolute top-8 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-[#252134] rounded-t-xl rounded-br-xl font-code text-base md:max-w-[17.5rem]">
      Video generated!
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-white rounded-[0.75rem]">
        <Image
          src='/logo.png'
          width={26}
          height={26}
          alt="Brainwave"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-white/25 uppercase">
        just now
      </p>
      <svg
      className='absolute right-full bottom-0 -scale-x-100'
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="37"
    >
      <path
        className='fill-[#252134]'
        d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
      />
    </svg>
      
    </div>
  );
};
export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-8 right-8 max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl font-code text-base lg:top-16 lg:right-[8.75rem] lg:max-w-[17.5rem]">
      Hey Brainwave, enhance this photo
      <svg
      className='absolute left-full bottom-0'
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="37"
    >
      <path
        d="M21.843 37.001c3.564 0 5.348-4.309 2.829-6.828L3.515 9.015A12 12 0 0 1 0 .53v36.471h21.843z"
      />
    </svg>
      
    </div>
  );
};