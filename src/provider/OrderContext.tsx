import { createContext, useState, type PropsWithChildren } from "react";
import type { Order } from "../types/Order";
import { ORDERS } from "../mock/data";

export const OrderContext = createContext({
  getOrders: () => [] as Order[],
  getOrdersByPlate: (plate: string) => [] as Order[],
});

export function OrderProvider(props: PropsWithChildren) {
  const [orders, setOrders] = useState<Order[]>(ORDERS);
  

  function getOrders() {
    return orders;
  }

  function getOrdersByPlate(plate: string) {
    return orders.filter(order => order.plate === plate);
  }

  return (
    <OrderContext.Provider value={{
      getOrders,
      getOrdersByPlate,
    }}>
      {props.children}
    </OrderContext.Provider>
  );
}