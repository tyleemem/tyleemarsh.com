import Image from "next/image";

export default function About() {
  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
      <main>
        <div className="space-y-4 p-6">
          <h1 className="text-3xl">Hi - I'm Tylee</h1>
          <h2 className="italic">She / Her / They</h2>
          <p>
            I’m a designer living in Brooklyn. Currently working at a small
            software studio, <a href="https://oak.is">Oak Studios</a>.
          </p>
          <p>
            I really like collaborating with people, short feedback cycles, and
            learning better practices in design.
          </p>
          <p>
            I’m interested in learning more about accessibility in design and
            how we can create new and interesting patterns for communication in
            the digital age.
          </p>
        </div>
        <Image
          className="mt-6 rounded-lg"
          src="/placeholder.jpeg"
          alt="Profile of Tylee"
          width={500}
          height={500}
        />
      </main>
    </div>
  );
}
