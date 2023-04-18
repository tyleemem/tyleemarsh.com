import Link from "next/link";
import { ReactNode } from "react";
import * as color from "components/color";
import * as profile from "components/profile";
import { FeatureFlag } from "components/featureflag";

export default function Work() {
  return (
    <div className="grid grid-cols-1 justify-items-stretch gap-11 p-11 md:grid-cols-3 lg:p-0">
      <Link href="about">
        <profile.Avatar />
      </Link>
      <FeatureFlag
        name="project-animation"
        feature={<DropmarkWithAnimation color={color.LemonLime} />}
        default={
          <Link href="work/dropmark">
            <Tile name="Dropmark" shape={<Door color={color.LemonLime} />} />
          </Link>
        }
      />
      <Link href="work/possible">
        <Tile name="Possible" shape={<Square color={color.Sienna} />} />
      </Link>
      <Link href="work/every">
        <Tile name="Every" shape={<Square color={color.RobinEgg} />} />
      </Link>
      <Link href="work/shared-future">
        <Tile name="Shared Future" shape={<Circle color={color.Lavender} />} />
      </Link>
      <Link href="work/creative-mornings">
        <Tile name="Creative Mornings" shape={<C color={color.WarmGray} />} />
      </Link>
    </div>
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

const Square = ({ color }: { color: color.Color }) => {
  return (
    <svg
      viewBox="0 0 420 420"
      className={color.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 10C0 4.47716 4.47715 0 10 0H410C415.523 0 420 4.47715 420 10V410C420 415.523 415.523 420 410 420H10C4.47716 420 0 415.523 0 410V10Z" />
    </svg>
  );
};

const DropmarkWithAnimation = ({ color }: { color: color.Color }) => {
  return (
    <>
      <div
        style={{ clipPath: "url(#door)" }}
        className={`flex items-center justify-center font-rounded text-2xl ${color.background}`}
      >
        Dropmark
      </div>
      <svg
        viewBox="0 0 420 420"
        width="0"
        height="0"
        style={{ position: "absolute" }}
      >
        <clipPath
          id="door"
          clipPathUnits="objectBoundingBox"
          transform="scale(0.002380952381, 0.002380952381)"
        >
          <path d="M0 210C0 94.0202 94.0202 0 210 0V0C325.98 0 420 94.0202 420 210V415.842C420 418.138 418.138 420 415.842 420H4.15841C1.86179 420 0 418.138 0 415.842V210Z" />
        </clipPath>
      </svg>
    </>
  );
};

const Door = ({ color }: { color: color.Color }) => {
  return (
    <svg
      viewBox="0 0 420 420"
      className={color.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 210C0 94.0202 94.0202 0 210 0V0C325.98 0 420 94.0202 420 210V415.842C420 418.138 418.138 420 415.842 420H4.15841C1.86179 420 0 418.138 0 415.842V210Z" />
    </svg>
  );
};

const Circle = ({ color }: { color: color.Color }) => {
  return (
    <svg
      viewBox="0 0 420 420"
      className={color.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 210C0 94.0202 94.0202 0 210 0V0C325.98 0 420 94.0202 420 210V210C420 325.98 325.98 420 210 420V420C94.0202 420 0 325.98 0 210V210Z" />
    </svg>
  );
};

const C = ({ color }: { color: color.Color }) => {
  return (
    <svg
      viewBox="0 0 420 420"
      className={color.fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M210 420C94.0202 420 -4.10975e-06 325.98 -9.17939e-06 210V210C-1.4249e-05 94.0202 94.0202 -4.10975e-06 210 -9.17939e-06L415.842 -1.8177e-05C418.138 -1.82774e-05 420 1.86177 420 4.1584L420 415.842C420 418.138 418.138 420 415.842 420L210 420Z" />
    </svg>
  );
};
