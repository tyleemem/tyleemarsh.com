import "../styles/globals.css";
import type { AppProps } from "next/app";
import * as layout from "components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-screen-2xl bg-cream font-sans lg:px-16">
      <layout.Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
