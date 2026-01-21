import { Link } from "react-router";
import { type Order } from "../types/Order";
import { appRoutes } from "../shared/routes";
import { TableRow } from "./Table/TableRow";
import { TableHead } from "./Table/TableHead";

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
        w-full 
        overflow-clip        
        text-center"
      >
        <TableHead extendedCells={1}
        >
          <span className={headStyle}>Placa</span>
          <span className={headStyle}>Fornecedor</span>
          <span className={headStyle}>Cliente</span>
          <span className={headStyle}>Protocolo</span>
          <span className={headStyle}>Serviço</span>
          <span className={`${headStyle} col-span-2`}>Status</span>
          <span className={headStyle}>Data & Hora</span>
        </TableHead>

        {props.orders.map((opt) => {
          const cellStyle = `
            w-full text-wrap px-2
            flex items-center justify-center 
            text-center text-sm text-slate-500 font-normal
            border-l border-slate-200
          `;

          return (
            <TableRow
              linkTo={appRoutes.orders.edit(opt.protocol)} extendedCells={1}
            >
              <span className={"w-full text-slate-500 font-normal block text-center text-sm"}>
                {opt.plate}
              </span>
              <span className={cellStyle}>{opt.serviceProvider}</span>
              <span className={cellStyle}>{opt.client}</span>
              <span className={cellStyle}>{opt.protocol}</span>
              <span className={cellStyle}>{opt.service}</span>
              <span className={`${cellStyle} col-span-2`}>{opt.status}</span>
              <span className={cellStyle}>
                {new Date(opt.date).toLocaleDateString()} às {opt.hour}
              </span>
            </TableRow>
          );
        })}
      </div>
    </>
  );
}
