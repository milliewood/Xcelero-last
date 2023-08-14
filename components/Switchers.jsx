import React, { useState } from 'react';

const Switchers = () => {
  return (
    <>
      <div className="flex flex-col mt-[-2rem]">
        <div className="mt-4 flex items-center">
         <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ml-9">
          <input
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-black border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-green-600 cursor-pointer"
          ></label>
        </div>
        <label htmlFor="toggle" className="text-xs text-gray-700">
          Monday to Friday
        </label>
        <div className="flex py-1 px-4 font-medium border bg-white border-gray-500 mt-2 ml-[2rem] md:ml-4 sm:ml-2 md:w-[150px] w-full h-[30px] rounded-md text-black text-[12px]">
          From
          <h1 className="ml-4">8:00 a.m</h1>
        </div>
        <div className="flex py-1 px-4 font-medium border bg-white border-gray-500 mt-2 ml-[1.5rem] md:ml-4 sm:ml-2 md:w-[150px] w-full h-[30px] rounded-md text-black text-[12px]">
          To
          <h1 className="ml-4">6:00 p.m</h1>
        </div>

      </div>

  
      <style>
        {`
          .toggle-checkbox:checked {
            @apply: right-0 border-green-400;
            right: 0;
            border-color: #68D391;
          }
          /* Set the background color for the checked state */
          .toggle-checkbox:checked + .toggle-label {
            @apply: bg-green-400;
            background-color: #68D391;
          }

          /* Add media query for responsiveness */
          @media screen and (max-width: 640px) {
            /* Adjust styles for smaller screens */
            .ml-[1.5rem] {
              margin-left: 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Switchers;
