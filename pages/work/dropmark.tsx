import Image from "next/image";

export default function Dropmark() {
  return (
    <main>
      <div className="md:p-11">
        <div className="grid grid-cols-1 justify-items-center gap-4 rounded-lg bg-lemonLime md:p-8 lg:grid-cols-12 lg:justify-items-end">
          <div className="space-y-4 p-8 md:p-0 lg:col-span-5">
            <h1 className="text-sm">Product Design</h1>
            <h2 className="font-rounded text-2xl">Dropmark</h2>
            <p className="italic">Product & Design Goals:</p>

            <p>
              This project had one singular product goal and KPI: to increase
              conversion rate.
            </p>

            <p>
              To achieve this, we also identified some more specific design and
              UX goals:
            </p>

            <ul className="list-emdash list-inside space-y-4">
              <li>Significantly improve UX and streamline the funnel</li>

              <li>
                Enhance visual design with better readability and information
                hierarchy
              </li>

              <li>Focus on a great mobile experience</li>
            </ul>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Image
              className="rounded-lg"
              src="/images/dropmark/placeholder.png"
              alt="Dropmark"
              width={700}
              height={700}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
