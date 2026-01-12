import { type Order } from "../types/Order";

interface RowProps {
  head: string[]
  options: Array<Order>;
}

export function Row(props: RowProps) {

  return (
    <>
      <p className="flex w-full justify-around border-b bg-gray-200 font-bold py-2">
        {props.head.map((headItem) => (
          <span key={headItem} className="border-l w-full block text-center">
            {headItem}
          </span>
        ))}
      </p>
      
      {props.options.map((opt, i) => {
        const cellStyle = "border-l w-full block text-center";
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
            <span className={cellStyle}>{opt.date} {opt.hour}</span>
          </p>
        );
      })}
    </>
  );
}
