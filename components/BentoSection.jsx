

import React from "react";
import CreditCard from "./CreditCard";
import CardGrid from "./CardGrid";


function BentoSection() {
  return (
    <div
      id="bento-section"
      className="w-full lg:h-[70vh] h-[95vh] flex lg:flex-row flex-col  relative border-y border-y-[#424344]"
    >
      <div className="lg:w-1/2 w-full   h-full flex  items-center justify-center lg:p-32 lg:border-r border-b lg:border-r-[#424344] border-b-[#424344]">
      <CardGrid/>
     
      </div>
      
      <div className="lg:w-1/2 w-full  h-full flex items-center justify-center lg:px-24 px-8 ">
       <CreditCard/>
     
      </div>
    </div>
  );
}

export default BentoSection;
