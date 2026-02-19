import type { PropsWithChildren } from "react";

export function InputBlock({children}: PropsWithChildren) {
  return (
    <div className="items-center flex gap-2">
      {children}
    </div>
  );
}