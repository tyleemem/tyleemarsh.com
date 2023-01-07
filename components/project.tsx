import { ReactNode } from "react";
import { Copy } from "components/copy";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="md:p-11">
      <Background>
        <div className="grid grid-cols-1 justify-items-center gap-4 md:p-14 lg:grid-cols-12 lg:justify-items-end">
          {children}
        </div>
      </Background>
    </div>
  );
}

function Background({ children }: { children: ReactNode }) {
  return <div className="rounded-lg bg-lemonLime">{children}</div>;
}

export function TopLeft({ children }: { children: ReactNode }) {
  return <div className="p-8 md:p-0 lg:col-span-5">{children}</div>;
}

export function BottomRight({ children }: { children: ReactNode }) {
  return <div className="lg:col-span-7 lg:col-start-6">{children}</div>;
}

export function Description({
  type,
  title,
  children,
}: {
  type: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Copy>
      <h1 className="text-sm">{type}</h1>
      <h2 className="font-rounded text-2xl">{title}</h2>
      {children}
    </Copy>
  );
}
