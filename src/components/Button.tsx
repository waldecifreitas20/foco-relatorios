import type { PropsWithChildren } from "react";

interface ButtonProps  extends PropsWithChildren{
  outlined?: boolean;
  onClick?: (evt:any) => void;
  noSubmit?: boolean;
  disabled?: boolean;
}

export function Button(props: ButtonProps) {


  return (
    <button
    type={props.noSubmit ? "button" : "submit"}
    disabled={props.disabled}
    onClick={props.onClick}
      className={`
    ${
      props.outlined
        ? "bg-transparent border-[var(--primary)] text-[var(--primary)]"
        : "bg-[var(--primary)] border-transparent text-white"
    }

    cursor-pointer
    ${!props.disabled && props.outlined && "hover:text-white"}
    ${props.disabled ? "opacity-50 cursor-not-allowed" :  "hover:bg-[var(--primary-hover)]"}
    w-full py-2 px-10 rounded-[var(--border-radius)] border
    `}
    >
      {props.children}
    </button>
  );
}
