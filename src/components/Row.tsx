import { type ServiceRequest } from "../types/ServiceResquest";

interface RowProps {
  options: Array<ServiceRequest>;
}

export function Row(props: RowProps) {
  
  return (
    <>
      {props.options.map((opt, i) => {
        const isHead = i === 0;

    const cellStyle = `${isHead && 'border-l'} w-full block text-center`;
        return (
          <p
            className={`
            flex w-full justify-around border-b py-2
            ${i === 0 && "font-bold bg-[var(--primary)] text-white text-lg"}`}
          >
            <span className={cellStyle}>{opt.plate}</span>
            <span className={cellStyle}>{opt.protocol}</span>
            <span className={cellStyle}>{opt.service}</span>
            <span className={cellStyle}>{opt.status}</span>
            <span className={cellStyle}>{opt.datetime}</span>
          </p>
        );
      })}
    </>
  );
}
