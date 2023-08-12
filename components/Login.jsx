import React from 'react';
import { signIn } from 'next-auth/react';

const Login = () => {
  const handleGoogleSignIn = () => {
    // Trigger the Google sign-in process
    signIn('google');
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150"
        style={{ position: 'relative', top: '5rem', left: '-2.7rem' }}
      >
        <img
          className="w-6 h-6"
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          loading="lazy"
          alt="google logo"
        />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;
