import Image from "next/image";

export default function Dropmark() {
  return (
    <main>
      <div className="flex flex-wrap bg-lemonLime">
        <div className="space-y-4 p-12">
          <h1 className="text-sm">Product Design</h1>
          <h2 className="font-rounded text-2xl">Dropmark</h2>
          <p className="italic">Product & Design Goals:</p>

          <p>
            This project had one singular product goal and KPI: to increase
            conversion rate.
          </p>

          <p>
            To achieve this, we also identified some more specific design and UX
            goals:
          </p>

          <ul className="list-inside list-disc">
            <li>Significantly improve UX and streamline the funnel</li>

            <li>
              Enhance visual design with better readability and information
              hierarchy
            </li>

            <li>Focus on a great mobile experience</li>
          </ul>
        </div>
        <div>
          <Image
            className="rounded-lg"
            src="/placeholder.jpeg"
            alt="Dropmark"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
}
