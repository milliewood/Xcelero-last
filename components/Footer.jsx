import React from 'react'

function Footer() {
  return (
        <div>
          {session?.user && (
            <div className="lg:flex">
              <p className="text-xs px-3 py-1 text-[#ffffff] lg:py-0 lg:px-0 lg:w-auto md:w-1/2 sm:w-full ml-[5rem]">
                {session.user.email}
              </p>
            </div>
          )}
        </div>
    <div className='h-[20vh] z-[100] relative bg-black flex items-center justify-center text-center' >
        <a href='https://twitter.com/xcelero_' target="_blank" className='text-white text-2xl'>Powered by Xcelero</a>
    </div>
  )
}

export default Footer
