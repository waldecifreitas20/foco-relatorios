import type { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren) {
  return (
    <li 
      className="bg-white border border-slate-200 rounded-lg p-6 w-full block">
      {children}
    </li>
  );
}