import { ReactNode } from "react";

export function Copy({ children }: { children: ReactNode }) {
  return <div className="space-y-4">{children}</div>;
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="list-emdash list-inside space-y-4">{children}</ul>;
}
