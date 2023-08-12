"use client"

import React from 'react'

const Timezone = () => {
  return (
    <div className="ml-10">
         <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Timezone</label>
  <div class="relative mt-2 rounded-md shadow-sm "  style={{width:'300px'}}>
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
     
    </div>
    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="(GMT +01:00) Africa/Kenya"/>
    <div class="absolute inset-y-0 right-0 flex items-center">
      <label for="currency" class="sr-only">Currency</label>
      <select id="currency" name="currency" class="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
        <option disabled> EST</option>
        <option> GST</option>
        <option>CET</option>
      </select>
    </div>
  </div>
      
    </div>
  )
}

export default Timezone
