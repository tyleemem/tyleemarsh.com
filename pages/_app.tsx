import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export function Layout() { }

export function Navbar() {
  return (
    <div className="sticky top-0 bg-cream bg-cream-transparent backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-xs items-center justify-evenly">
        <Link href="/about">
          <span className="font-rounded">About</span>
        </Link>
        <Link href="/work">
          <span className="font-rounded">Work</span>
        </Link>
      </nav>
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="mx-auto max-w-screen-2xl bg-cream lg:px-16 font-sans">
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
