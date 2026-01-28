import type { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {}

export function Card(props: CardProps) {
  return (
    <>
      <div
        className="
        bg-white border border-neutral-200
        flex flex-col 
        justify-between py-8 p-2 
        font-medium 
        w-full 
        rounded-[var(--border-radius)] text-center">
       {props.children}
      </div>
    </>
  );
}