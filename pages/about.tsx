import Image from "next/image";

export default function About() {
  return (
    <div className="mx-auto max-w-screen-xl">
      <main className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:gap-16 lg:p-16">
        <div className="mx-auto max-w-lg space-y-4">
          <h1 className="font-rounded text-2xl">Hi - I&apos;m Tylee</h1>
          <h2 className="italic">She / Her / They</h2>
          <p>
            I&apos;m a designer living in Brooklyn. Currently working at a small
            software studio, <a href="https://oak.is">Oak Studios</a>.
          </p>
          <p>
            I really like collaborating with people, short feedback cycles, and
            learning better practices in design.
          </p>
          <p>
            I&apos;m interested in learning more about accessibility in design
            and how we can create new and interesting patterns for communication
            in the digital age.
          </p>
        </div>
        <div className="mx-auto max-w-lg">
          <Image
            className="rounded-lg"
            src="/images/tylee.png"
            alt="Profile of Tylee"
            width={500}
            height={500}
          />
        </div>
      </main>
    </div>
  );
}
