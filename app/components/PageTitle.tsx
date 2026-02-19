import type { PropsWithChildren } from "react";

export function PageTitle({ children }: PropsWithChildren) {
  return (
    <h1 className="inline-block text-3xl font-semibold text-slate-800 mb-8">{children}</h1>
  );
}