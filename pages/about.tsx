import Image from "next/image";
import { Copy } from "components/copy";
import { ReactNode } from "react";

export default function About() {
  return (
      <Layout>
        <Column>
          <Copy>
            <Heading>{"Hi - I'm Tylee"}</Heading>
            <Pronouns />
            <Biography />
          </Copy>
        </Column>
        <Column>
          <ProfileImage />
        </Column>
      </Layout>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return <h1 className="font-rounded text-2xl">{children}</h1>;
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:gap-16 lg:p-16">
      {children}
    </div>
  );
}

function Column({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-lg">{children}</div>;
}

function ProfileImage() {
  return (
    <Image
      className="rounded-lg"
      src="/images/tylee.png"
      alt="Profile of Tylee"
      width={500}
      height={500}
    />
  );
}

function Pronouns() {
  return <h2 className="italic">She / Her / They</h2>;
}

function Biography() {
  return (
    <>
      <p>
        {"I'm"} a designer living in Brooklyn. Currently working at a small
        software studio, <a href="https://oak.is">Oak Studios</a>.
      </p>
      <p>
        I really like collaborating with people, short feedback cycles, and
        learning better practices in design.
      </p>
      <p>
        {"I'm"} interested in learning more about accessibility in design and
        how we can create new and interesting patterns for communication in the
        digital age.
      </p>
    </>
  );
}
