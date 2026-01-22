import type { PropsWithChildren } from "react";
import { Link } from "react-router";

interface TableRowProps extends PropsWithChildren {
  linkTo: string;
  extendedCells?: number
}

export function TableRow(props: TableRowProps) {

  return (
    <>
      <Link
        to={props.linkTo}
        className={`
        grid grid-cols-8
        mb-2 
        bg-white hover:bg-[var(--primary)]/5
        cursor-pointer
        w-full 
        justify-around items-center 
        transition-all duration-200

        rounded-[var(--border-radius)]
        border border-slate-200
        hover:border-b-[var(--primary)]/50
        hover:border-b-1
        py-2 h-24 
        `}
      >
        {props.children}
      </Link>
    </>
  );
}