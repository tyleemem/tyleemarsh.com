import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <main className="mx-auto max-w-screen-2xl bg-cream font-sans">
  <Component {...pageProps} />
  </main>
}
