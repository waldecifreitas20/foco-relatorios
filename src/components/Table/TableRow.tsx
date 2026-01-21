import type { PropsWithChildren } from "react";
import { Link } from "react-router";

interface TableRowProps extends PropsWithChildren {
  linkTo: string;
  extendedCells?: number
}

export function TableRow(props: TableRowProps) {
  const cols = (props.children as []).length + (props.extendedCells ?? 0);
  const gridCols = `grid-cols-${cols}`.toString();

  return (
    <>
      <Link
        to={props.linkTo}
        className={`
        grid ${gridCols}
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