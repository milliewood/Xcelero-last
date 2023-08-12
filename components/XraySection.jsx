import React, { useEffect, useState } from "react";
import Image from "next/image";
import BANNER2 from "../public/images/banner2.png"
import XrayHalfImage from "../public/images/airpordshalf.jpeg";
import AirpodsImage from "../public/images/airpords1.jpeg";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import NoiseVideo from "../public/videos/beatparticles.mp4";

function XraySection() {
  let [xrayImage, setXrayImage] = useState();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".xray-image", {
      scrollTrigger: {
        trigger: ".xray-image",
        scrub: true,
        start: "bottom bottom",
        onUpdate: (self) => {
          if (self.progress > 0.8 && self.progress < 1) {
            setXrayImage(XrayHalfImage);
          } else if (self.progress === 1) {
            setXrayImage(AirpodsImage);
          } else {
            setXrayImage(BANNER2);
          }
        },
      },
      scale: 0.5,
      duration: 2,
      ease: "none",
    });

    gsap.to(".xray-desc-1", {
      scrollTrigger: {
        trigger: ".xray-desc-1",
        scrub: 1,
        start: "top 50%",
        end: "top center",
      },
      keyframes: [{ opacity: 1 }, { opacity: 0 }],
      duration: 2,
      ease: "none",
    });
    gsap.to(".xray-desc-2", {
      scrollTrigger: {
        trigger: ".xray-desc-2",
        scrub: 1,
        start: "top 50%",
        end: "top center",
      },
      keyframes: [{ opacity: 1 }, { opacity: 0 }],
      duration: 2,
      ease: "none",
    });
    gsap.to(".noise-video", {
      scrollTrigger: {
        trigger: "#XraySection",
        scrub: true,
        start: "top -70%",
        end: "top -200%",
      },
      opacity: 1,
      duration: 2,
      ease: "power2.out",
    });

    const xraySection = document.getElementById("XraySection");

    window.addEventListener("scroll", function () {
      if (
        window.innerHeight + window.pageYOffset >=
        xraySection.offsetTop + xraySection.offsetHeight - 600
      ) {
        xraySection.style.opacity = 0;
      } else {
        xraySection.style.opacity = 1;
      }
    });
  }, []);

  return (
    <div
      id="XraySection"
      className="w-full  h-[350vh] transition-opacity duration-700  flex  relative "
    >
      <video
        loop
        autoPlay
        muted
        src={NoiseVideo}
        className="w-full h-full fixed top-0 opacity-0 noise-video z-[-1] lg:object-scale-down object-cover "
      ></video>
      <div className="w-full lg:flex hidden  pl-56 pt-[600px] flex-col  items-end">
        <h1 className="text-xl font-medium text-[#626369] opacity-0 xray-desc-1">
        Deep Learning:{" "}
          <span className="text-white"> Xceleros has expertise in deep learning,</span>  a subset of machine learning that utilizes artificial neural networks to model complex relationships in data. Deep learning is widely used in image and speech recognition, natural language processing, and other high-dimensional data tasks.
          <span className="text-green">Advanced algorithms</span>
        </h1>
      </div>
      <div className="h-screen sticky top-0 w-full flex justify-center">
        <div className="w-[90%]  flex  z-10 sticky top-0 items-center justify-center ">
          <Image
            src={BANNER2}
            alt="xray image"
            className="h-100% xray-image z-10 "
            
          />
        </div>
      </div>
      <div className="w-full lg:flex hidden  pr-56  pt-[900px] justify-start">
        <h1 className="text-xl font-medium text-[#626369]  opacity-0 xray-desc-2">
          <span className="text-white">
          Cancer Diagnosis and Early Detection with mindmate:
          </span>{" "}
          NLP can aid in the early detection and diagnosis of cancer. <span className="text-green">. By analyzing patient symptoms, medical history, and diagnostic reports,</span>NLP algorithms can assist healthcare providers in identifying potential cancer cases more efficiently. Early diagnosis is critical for improving patient outcomes and increasing the chances of successful treatment.
        </h1>
      </div>
    </div>
  );
}

export default XraySection;
