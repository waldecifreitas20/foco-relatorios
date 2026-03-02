import type { PropsWithChildren } from "react";

export function PageTitle({ children }: PropsWithChildren) {
  return (
    <h1 
      className="
      inline-block font-semibold text-slate-800
      text-2xl text-nowrap
      lg:text-3xl
      ">{children}</h1>
  );
}