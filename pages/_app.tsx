import "../styles/globals.css";
import type { AppProps } from "next/app";
import localFont from '@next/font/local'


const PPObjectSans = localFont({
  variable: '--pp-object-sans',
  src: [
    {
      path: '../public/fonts/PPObjectSans-Regular.woff'
    },
    {
      path: '../public/fonts/PPObjectSans-Slanted.woff',
      style: 'italic',
    },
    {
      path: '../public/fonts/PPObjectSans-Bold.woff',
    }
  ],
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${PPObjectSans.variable} font-sans`}>
      <Component {...pageProps} />
    </div >
  );
}