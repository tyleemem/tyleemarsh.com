import Link from "next/link";

import { useRouter } from "next/router";

export function Navbar() {
  const { route } = useRouter();

  const whenActive = (path: string, cssClass: string) => {
    if (route === path) {
      return cssClass;
    }
    return "";
  };

  return (
    <div className="sticky top-0 bg-cream bg-cream-transparent backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-xs items-center justify-evenly">
        <Link
          className={`${whenActive(
            "/about",
            "text-sienna"
          )} duration-300 hover:text-sienna hover:ease-in-out`}
          href="/about"
        >
          <span className="font-rounded">About</span>
        </Link>
        <Link
          className={`${whenActive(
            "/work",
            "text-algae"
          )} duration-300 hover:text-algae hover:ease-in-out`}
          href="/work"
        >
          <span className="font-rounded">Work</span>
        </Link>
      </nav>
    </div>
  );
}
