import Link from "next/link";
import { ReactNode } from "react";

export default function Work() {
  return (
    <main>
      <div className="grid grid-cols-1 justify-items-stretch gap-11 p-11 md:grid-cols-3">
        <Tile name="Profile" shape={<Circle />} />
        <Link href="work/dropmark">
          <Tile name="Dropmark" shape={<Door />} />
        </Link>
        <Tile name="Possible" shape={<Square />} />
        <Tile name="Every" shape={<Square />} />
        <Tile name="Shared Future" shape={<Circle />} />
        <Tile name="Creative Mornings" shape={<C />} />
      </div>
    </main>
  );
}

function Tile({ name, shape }: { name: string; shape: ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-center">
      <div className="z-10 col-span-full row-span-full text-center font-rounded text-2xl">
        {name}
      </div>
      <div className="z-0 col-span-full row-span-full">{shape}</div>
    </div>
  );
}

const Square = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 10C0 4.47716 4.47715 0 10 0H410C415.523 0 420 4.47715 420 10V410C420 415.523 415.523 420 410 420H10C4.47716 420 0 415.523 0 410V10Z"
        fill="#D75844"
      />
    </svg>
  );
};

const Door = () => {
  return (
    <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 210C0 94.0202 94.0202 0 210 0V0C325.98 0 420 94.0202 420 210V415.842C420 418.138 418.138 420 415.842 420H4.15841C1.86179 420 0 418.138 0 415.842V210Z"
        fill="#F6F963"
      />
    </svg>
  );
};

const Circle = () => {
  return (
    <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 210C0 94.0202 94.0202 0 210 0V0C325.98 0 420 94.0202 420 210V210C420 325.98 325.98 420 210 420V420C94.0202 420 0 325.98 0 210V210Z"
        fill="#B2AFFF"
      />
    </svg>
  );
};

const C = () => {
  return (
    <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M210 420C94.0202 420 -4.10975e-06 325.98 -9.17939e-06 210V210C-1.4249e-05 94.0202 94.0202 -4.10975e-06 210 -9.17939e-06L415.842 -1.8177e-05C418.138 -1.82774e-05 420 1.86177 420 4.1584L420 415.842C420 418.138 418.138 420 415.842 420L210 420Z"
        fill="#CFF4FF"
      />
    </svg>
  );
};
