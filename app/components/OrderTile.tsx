import { Link } from "react-router";
import type { Order } from "~/types/Order";

interface OrderTitleProps {
  order: Order;
  linkTo: string;
  trailing: React.ReactNode;
}

export function OrderTile({ order, linkTo, trailing }: OrderTitleProps) {

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
      className="
      grid grid-cols-7 items-center
      py-4
      text-sm text-center  hover:ml-1
      border-l-4 border-transparent
      bg-white hover:border-red-500 hover:bg-slate-100 text-slate-800
    ">
      <span>{order.plate}</span>
      <span>{order.service}</span>
      <span>{order.client}</span>
      <span>{order.provider}</span>
      <span>{order.ticket.substring(order.ticket.length - 7)}</span>
      <span>{getDate(order.createdAt)} <i className="fa-regular fa-calendar"></i></span>
      <span>
        {trailing}
      </span>
    </Link>
  );
}