"use client"

import Image from "next/image";
import React, { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import CardComponent from "./CardComponent";
import Developer from "./Developer";

function NoiseOverviewSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".airpod-big-image", {
      scrollTrigger: {
        trigger: ".noice-overview-section-3-title",
        scrub: 1,
        start: "bottom bottom",
        end: "top 70%",
      },
      translateY: 0,
      opacity: 1,
      duration: 2,
      ease: "none",
    });
    gsap.to(".noise-point-line", {
      scrollTrigger: {
        trigger: ".noice-overview-section-3-title",
        scrub: 1,
        start: "bottom bottom",
        end: "top 70%",
      },
      height: "100%",
      duration: 2,
      ease: "none",
    });
  });

  return (
    <div className="w-full lg:h-[110vh] h-[200vh] relative border-y border-y-[#424344] flex lg:flex-row flex-col noise-cancellation-overview-section">
      <div className="lg:w-1/2 w-full lg:py-0  h-full flex flex-col border-r border-r-[#424344]">
        <div className="w-full lg:h-1/2 h-full relative flex items-center justify-center">
          
          <div className="z-50 relative w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-xl text-white text-center">Opencv for your business</h1>
           <img src="/images/opencv.png"
           alt="cv-image"
           style={{height:'230px'}}
           />
           
            <h1 className="text-2xl flex text-white text-center" style={{fontSize:'14px'}}>
            OpenCV and Machine Learning to unlock new <span className="text-green" style={{position:'relative', left:'0.3rem'}}>active possibilities for your business. </span> 
            </h1>
          </div>
        </div>
        <div className="w-full lg:h-1/2 full flex items-center justify-center lg:border-t border-y lg:px-28 px-4 lg:py-0 py-12 lg:border-t-[#424344] border-y-[#424344] ">
        
         <CardComponent/>
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-full flex justify-center  items-center overflow-hidden relative lg:p-20 p-6">
        <div className="w-[90%] h-full flex">
          <p className="text-xl font-medium text-[#6E6F72]">
            <span className="text-white">Our Esteemed CEO</span> quality isn't expensive<span className="text-green" style={{position:'relative', left:'0.3rem'}}>it's priceless</span>
          </p>
        </div>
        <div className="w-[40%] h-full flex  z-50 pl-4 relative">
          <div className="noise-point-line h-36">
            <div className="w-[0.05rem] h-[65%] bg-[#6E6F72]"></div>
            <div className="w-2 h-8 bg-[#6E6F72] rounded-full absolute -mt-1 -ml-[0.15rem]"></div>
          </div>
        </div>
        <div>
         <Developer/>
         </div>

      </div>
    </div>
  );
}

export default NoiseOverviewSection;
