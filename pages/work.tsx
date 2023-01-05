export default function Work() {
  return (
    <main className="mx-auto max-w-screen-xl">
      <div className="grid grid-cols-1 justify-items-center gap-8 p-8 md:grid-cols-3 lg:gap-16 lg:p-16">
        <Project name="Profile" />
        <Project name="Dropmark" />
        <Project name="Possible" />
        <Project name="Every" />
        <Project name="Shared Future" />
        <Project name="Creative Mornings" />
      </div>
    </main>
  );
}

function Project({ name }: { name: string }) {
  return (
    <div className="grid h-72 w-72 grid-cols-1 items-center">
      <div className="z-10 col-span-full row-span-full text-center font-rounded text-2xl">
        {name}
      </div>
      <div className="z-0 col-span-full row-span-full">
        <Shape />
      </div>
    </div>
  );
}

const Shape = () => {
  return (
    <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 10C0 4.47716 4.47715 0 10 0H410C415.523 0 420 4.47715 420 10V410C420 415.523 415.523 420 410 420H10C4.47716 420 0 415.523 0 410V10Z"
        fill="#D75844"
      />
    </svg>
  );
};
