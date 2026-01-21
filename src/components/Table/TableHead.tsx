import type { PropsWithChildren } from "react";

interface TableHeadProps extends PropsWithChildren {
  extendedCells?: number;
}

export function TableHead(props: TableHeadProps) {
  const cols = (props.children as []).length + (props.extendedCells ?? 0);
  const gridCols = `grid-cols-${cols}`.toString();

  return (
    <>
      <p
        className={`
        grid ${gridCols}
        rounded-[var(--border-radius)] mb-2 
        w-full font-bold 
        bg-[var(--primary)] text-white  
        py-3  
        `}
      >{props.children}</p>
    </>
  );
}