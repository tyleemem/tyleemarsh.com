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
    <div className="flex h-72 w-72 items-center justify-center">
      <div className="text-center font-rounded text-2xl">{name}</div>
    </div>
  );
}
