import { ReactNode } from "react";
import { Copy } from "components/copy";
import * as color from "components/color";

export function Layout({
  color,
  children,
}: {
  color: color.Color;
  children: ReactNode;
}) {
  return (
    <Background color={color}>
      <div className="grid grid-cols-1 justify-items-center gap-4 md:p-14 lg:grid-cols-12 lg:justify-items-end">
        {children}
      </div>
    </Background>
  );
}

function Background({
  color,
  children,
}: {
  color: color.Color;
  children: ReactNode;
}) {
  return <div className={`md:rounded-lg ${color.background}`}>{children}</div>;
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
