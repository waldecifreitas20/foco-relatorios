import { Link } from "react-router";
import { type Order } from "../types/Order";
import { appRoutes } from "../shared/routes";

interface OrdersTableProps {
  orders: Array<Order>;
}

export function OrdersTable(props: OrdersTableProps) {
  const headStyle = "w-full block text-center";

  return (
    <>
      <div
        className="
        flex flex-col flex-wrap 
        font-normal 
        w-full 
        overflow-clip 
       
        text-center">

        <p
          className="
          grid grid-cols-6
          shadow-lg rounded-lg mb-2 
          w-full font-bold 
          bg-[var(--primary)] text-white  
          py-2
          ">
          <span className={headStyle}>Placa</span>
          <span className={headStyle}>Protocolo</span>
          <span className={headStyle}>Serviço</span>
          <span className={`${headStyle} col-span-2`}>Status</span>
          <span className={headStyle}>Data & Hora</span>

        </p>

        {props.orders.map((opt) => {
          const cellStyle = `
            w-full text-wrap px-2
            flex items-center justify-center 
            text-center text-sm 
            border-l border-slate-200
          `;

          return (
            <Link
              to={appRoutes.orders.edit(opt.protocol)}
              className="
              grid grid-cols-6
              shadow-md rounded-lg mb-2 
              bg-white bg-blend-color hover:bg-red-50
              cursor-pointer
              w-full 
              justify-around items-center 
              transition-all duration-200
              border border-slate-200
              hover:border-b-red-300
              py-2 h-24
              ">
              <span className={"w-full block text-center text-sm"}>{opt.plate}</span>
              <span className={cellStyle}>{opt.protocol}</span>
              <span className={cellStyle}>{opt.service}</span>
              <span className={`${cellStyle} col-span-2`}>{opt.status}</span>
              <span className={cellStyle}>{new Date(opt.date).toLocaleDateString()} às {opt.hour}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
