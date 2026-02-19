import type { PropsWithChildren } from "react";

export function FormSection({children}: PropsWithChildren) {
  return <section className="flex items-center gap-4 block w-full">{children}</section>;
}