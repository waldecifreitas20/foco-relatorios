import type { PropsWithChildren } from "react";

interface ButtonProps  extends PropsWithChildren{
  outlined?: boolean;
  onClick?: (evt:any) => void;
  noSubmit?: boolean;
}

export function Button(props: ButtonProps) {


  return (
    <button
    type={props.noSubmit ? "button" : "submit"}
    onClick={props.onClick}
      className={`
    ${
      props.outlined
        ? "bg-transparent border-[var(--primary)] text-[var(--primary)] hover:text-white "
        : "bg-[var(--primary)] border-transparent text-white"
    }
    cursor-pointer
    hover:bg-[var(--primary-hover)]
    w-full py-2 px-10 rounded-[var(--border-radius)] border
    `}
    >
      {props.children}
    </button>
  );
}
