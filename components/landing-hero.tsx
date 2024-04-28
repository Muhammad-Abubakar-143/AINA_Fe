"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
import { BackgroundCircles } from "./ui/BcakgroundCircles";
import Image from "next/image";
import Generating from "./Generating";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "@/lib/constants";
import Notification from "./ui/Notification";
import Section from "./Section";



export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-[#1b1b2e] shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-[#1b1b2eb3] shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};


export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-white/10 pointer-events-none xl:block" />

      <svg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" width="11" height="11" fill="none">
      <path
        d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
        fill="#ada8c4"
      />
    </svg> 
    <svg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" width="11" height="11" fill="none">
      <path
        d="M7 1a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V8a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H8a1 1 0 0 1-1-1V1z"
        fill="#ada8c4"
      />
    </svg>
    </>
  );
};

export const LandingHero = () => {
  const { isSignedIn } = useAuth();
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="lg:text-5xl md:text-3xl mx-auto font-bold text-xl mb-6 text-[#fff]">
            Explore the Possibilities <br /> of&nbsp;AI&nbsp;Chatting with
            <span className="inline-block relative ml-1">
              AINA
              <Image
                src="/curve.png"
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className=" text-secondary max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of AI within AINA. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>
          <Button variant="outline" className="rounded-full text-black">
            <Link href="/pricing">
            Get started
            </Link>
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-10 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-[#43435c] rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src="/robot.jpg"
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-white/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <Image src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image src="/hero-background.jpg" className="w-full" width={1440}height={1800} alt="hero"/>
          </div>

          <BackgroundCircles />
        </div>

      </div>

      <BottomLine />
    </Section>
    // <div className="text-white font-bold py-36 text-center space-y-5">
    //   <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
    //     <h1>The Best AI Tool for</h1>
    //     <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
    //       <TypewriterComponent
    //         options={{
    //           strings: [
    //             "Chatbot.",
    //             "Photo Generation.",
    //             "Blog Writing.",
    //             "Mail Writing."
    //           ],
    //           autoStart: true,
    //           loop: true,
    //         }}
    //       />
    //     </div>
    //   </div>
    //   <div className="text-sm md:text-xl font-light text-zinc-400">
    //     Create content using AI 10x faster.
    //   </div>
    //   <div>
    //     <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
    //       <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
    //         Start Generating For Free
    //       </Button>
    //     </Link>
    //   </div>
    //   <div className="text-zinc-400 text-xs md:text-sm font-normal">
    //     No credit card required.
    //   </div>
    // </div>
  );
};
