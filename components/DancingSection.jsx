import gsap from 'gsap';
import CustomEase from 'gsap/dist/CustomEase';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import React, { useEffect } from 'react'

function DancingSection() {

  useEffect(()=> {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".dancing-title-1", {
      scrollTrigger: {
        trigger: ".dancing-title-1",
        scrub: 1,
        start: "bottom bottom",
        end: "top 50%",
      },
      opacity: 0.1,
      duration: 2,
      ease: "none",
    });
    gsap.to(".dancing-title-2", {
      scrollTrigger: {
        trigger: ".dancing-title-1",
        scrub: 1,
        start: "top 50%",
        end: "top 20%",
      },
      keyframes:[
        {opacity: 1},
        {opacity: 0.1},
      ],
      duration: 2,
      ease: "none",
    });
    gsap.to(".dancing-title-3", {
      scrollTrigger: {
        trigger: ".dancing-title-1",
        scrub: 1,
        start: "top 30%",
        end: "top 5%",
      },
      keyframes:[
        {opacity: 1},
        {opacity: 0.1},
      ],
      duration: 2,
      ease: "none",
    });
    gsap.to(".dancing-title-4", {
      scrollTrigger: {
        trigger: ".dancing-title-1",
        scrub: 1,
        start: "top 5%",
        end: "top -40%",
      },
      keyframes:[
        {opacity: 1},
        {opacity: 0.1},
      ],
      duration: 2,
      ease: "none",
    });
   gsap.to(".dancing-video", {
      scrollTrigger: {
        trigger: "#dancingSection",
        scrub: true,
        start: "top 145%",
        end: "top -100%",

      },
      keyframes:[
        {opacity: 1},
        {opacity: 0},
      ],
      duration: 2,
      ease: "none",
    });
  },[])

  return (
    <div id='dancingSection' className='w-full h-[200vh] z-50  relative lg:p-56 p-6' >
        <h1 className='text-white lg:text-[3rem] text-3xl font-bold lg:w-[850px] w-full leading-[1.2]' >
        <span className='opacity-100 dancing-title-1' >Welcome to Xcelero, where we transform businesses into digital powerhouses</span> <span className='opacity-10 dancing-title-2' >At Xcelero, we specialize in crafting cutting-edge tech infrastructures that empowers companies to thrive in the digital age.</span> <span className='opacity-10 dancing-title-3' >Whether it's cloud computing, data analytics, cybersecurity, or AI integration, we've got you covered. </span> 
        </h1>
    </div>
  )
}

export default DancingSection