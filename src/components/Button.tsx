import type { PropsWithChildren } from "react";

interface ButtonProps  extends PropsWithChildren{
  outlined?: boolean;
  onClick?: (evt:any) => void;
}

export function Button(props: ButtonProps) {
  return (
    <button
        onClick={props.onClick}
      className={`
    ${
      props.outlined
        ? "bg-transparent border-[var(--primary)] text-[var(--primary)] hover:text-white "
        : "bg-[var(--primary)] border-transparent text-white"
    }
    cursor-pointer
    hover:bg-[var(--primary-hover)]
    w-full py-3 px-10 rounded-lg shadow-lg border
    `}
    >
      {props.children}
    </button>
  );
}
