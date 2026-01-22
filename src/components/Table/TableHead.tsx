import type { PropsWithChildren } from "react";

interface TableHeadProps extends PropsWithChildren {
  extendedCells?: number;
}

export function TableHead(props: TableHeadProps) {

  return (
    <>
      <p
        className={`
        grid grid-cols-8
        rounded-[var(--border-radius)] mb-2 
        w-full font-bold 
        bg-[var(--primary)] text-white  
        py-3  
        `}
      >{props.children}</p>
    </>
  );
}