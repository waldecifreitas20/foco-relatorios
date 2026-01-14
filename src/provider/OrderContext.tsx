import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Order } from "../types/Order";

export const OrderContext = createContext({
  getOrders: () => [] as Order[],
  getOrdersByPlate: (plate: string) => [] as Order[],
});

export function OrderProvider(props: PropsWithChildren) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const api = import.meta.env.VITE_API_URL;
    fetch(`${api}/orders/all`)
      .then(r => r.json())
      .then(response => {
        setOrders(response.orders);
      })
      .catch(console.error)
  }, []);


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