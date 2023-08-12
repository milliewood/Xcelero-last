import React from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

const Login = () => {
  const handleGoogleSignIn = () => {
    // Trigger the Google sign-in process
    signIn('google');
  };

  return (
    <div>
          <button
        onClick={handleGoogleSignIn}
        className="flex items-center gap-2 border border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
        style={{
          position: "relative",
          top: "5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="google logo"
          width={24} // Adjust the width based on your design
          height={24} // Adjust the height based on your design
          loading="lazy"
        />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;
