"use client"
import { useSession } from 'next-auth/react';
import React, { useState, useEffect } from 'react';

function Footer() {
 
  const { data: session } = useSession();

  useEffect(() => {
    setIsAuthenticated(!!session?.user);
    if (session?.user) {
      const userEmail = session.user.email;

      // Make an API call to save the user's email using fetch
      fetch("http://localhost:3001/api/save-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: userEmail }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.message); // Print the response message
        })
        .catch((error) => {
          console.error("Error saving user email:", error);
        });
    }
  }, [session]);

  return (
    <footer>
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
    </footer>
  );
}

export default Footer;
