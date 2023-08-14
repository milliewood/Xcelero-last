import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";

import DancingVideo from "../public/videos/dancing.mp4";
import {MdOutlinePlayCircleOutline} from "react-icons/md";
import ShowreelsComponent from "./ShowReels"

function Hero() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".hero-desc", {
      scrollTrigger: {
        trigger: ".hero-sub",
        scrub: true,
        start: "bottom bottom",
      },
      opacity: 0,
      duration: 2,
      ease: "none",
    });
    gsap.to(".hero-buttons", {
      scrollTrigger: {
        trigger: ".hero-sub",
        scrub: true,
        start: "bottom bottom",
      },
      opacity: 0,
      duration: 2,
      ease: "none",
    });

    // Animates the hero title to scale and fade out when the trigger is scrolled to the top of the viewport
    gsap.to(".hero-title", {
      scrollTrigger: {
        trigger: ".hero-sub",
        scrub: true,
        start: "bottom bottom",
        onUpdate: (self) => {
          if (self.progress === 1) {
            gsap.to(".hero-second-title", {
              scrollTrigger: {
                trigger: ".hero-sub",
                scrub: true,
                start: "bottom bottom",
              },
              duration: 2,
              keyframes: [
                { opacity: 1, scale: 1.13 },
                { opacity: 0, scale: 1.13 },
              ],
            });
          }
        },
      },
      scale: 1.2,
      opacity: 0,
      display: "none",
      duration: 2,
      ease: "none",
    });

    
  }, []);

  return (
    <div
      id="hero"
      className="h-[285vh] w-full flex relative flex-col items-center justify-center"
    >
      <div className="h-screen hero-sub  fixed top-0 w-full flex flex-col items-center justify-center">
      <div className="p-2 bg-transparent items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex hero-content hero-desc" role="alert mt-[-4rem]">
    <span className="flex rounded-full  uppercase px-2 py-1 text-xs font-bold mr-3" style={{background:'#003049'}}>New</span>
    <span className="font-semibold mr-2 text-left flex-auto">Defining Your Business Infrastracture</span>
    <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
  </div>
        <div className="h-screen   fixed top-0 w-full flex flex-col items-center justify-center">
          <video
            src={DancingVideo}
            loop
            autoPlay
            muted
            className="h-screen min-w-screen scale-[1.05] z-10 opacity-0 dancing-video object-cover "
          />
        </div>
        <div className="h-screen   fixed top-0 w-full flex flex-col items-center justify-center">
          
        </div>

        <h1 className="xl:text-[13rem] lg:text-[10rem] text-5xl hero-content hero-desc hero-title font-bold lg:-mt-6 mt-2 bg-gradient-to-r from-purple-500 to-blue-500 via-pink-500 text-transparent bg-clip-text">
          Xcelero
        </h1>

        <div className="absolute lg:bottom-10 lg:mt-0 mt-60 hero-buttons z-[100]  w-full h-32 flex lg:flex-row flex-col items-center justify-center " >
          <br/>
        <ShowreelsComponent />
        </div>
        <div className="absolute lg:top-16 top-24 flex items-center justify-center">
         
        </div>
      </div>

      

    </div>
  );
}

export default Hero;
