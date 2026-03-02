import { Link } from "react-router";
import type { Order } from "~/types/Order";

interface OrderTitleProps {
  order: Order;
  linkTo: string;
  trailing?: React.ReactNode;
}

export function OrderTile({ order, linkTo, trailing }: OrderTitleProps) {
  const gridCols = trailing ? "grid-cols-7" : "grid-cols-6"


  function getDate(date: Date | undefined) {
    return new Date(date ?? new Date(Date.now()))
      .toLocaleString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      });
  }

  return (
    <Link
      to={linkTo}
      key={order.ticket}
      className={`
      grid ${gridCols} items-center
      py-4 px-2 
      text-sm text-center 
      text-slate-800
      
      border-l-1 border-transparent
      
      bg-white
      hover:bg-linear-to-l hover:from-slate-200
      hover:border-slate-500 hover:to-slate-100 
      
      
      `}
    >
      <span>{order.plate}</span>
      <span>{order.service}</span>
      <span>{order.client}</span>
      <span>{order.provider}</span>
      <span>{order.ticket.substring(order.ticket.length - 7)}</span>
      <span className=" text-right">
        {order.agentName === "" ? "Agente Desconhecido" : order.agentName}{" "}
        <i className="fa-regular fa-user"></i>
      </span>

      {trailing && <span>{trailing}</span>}
    </Link>
  );
}