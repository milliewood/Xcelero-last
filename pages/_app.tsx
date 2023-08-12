import '/styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Session } from 'next-auth'; 


interface CustomAppProps extends AppProps {
  session: Session; 
}

export default function App({ Component, pageProps, session }: CustomAppProps) {
  return (

    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

