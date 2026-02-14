import type { PropsWithChildren } from "react";

export function Badge({ children }: PropsWithChildren) {
  return <span className="bg-blue-100 text-blue-600 rounded-md px-2 text-xs py-1">{children}</span>
}