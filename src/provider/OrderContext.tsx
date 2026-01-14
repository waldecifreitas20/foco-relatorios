import { createContext, useState, type PropsWithChildren } from "react";
import type { Order } from "../types/Order";
import { ORDERS } from "../mock/data";
import type { SearchParams } from "../components/SearchBar";

export const OrderContext = createContext({
  getOrders: () => [] as Order[],
  getOrdersByPlate: (_plate: string) => [] as Order[],
  search: (_params: SearchParams) => [] as Order[],
});

export function OrderProvider(props: PropsWithChildren) {
  const [orders, setOrders] = useState<Order[]>(ORDERS);
  

  function getOrders() {
    return orders;
  }

  function getOrdersByPlate(plate: string) {
    return orders.filter(order => order.plate === plate);
  }

  function search(params: SearchParams) {
    const results: Order[] = [];
    
    if (params.plate !== "") {
      orders.forEach(o => {
        if (o.plate.includes(params.plate)) {
          results.push(o);
        }
      });
    }

    return results;
  }

  return (
    <OrderContext.Provider value={{
      getOrders,
      getOrdersByPlate,
      search
    }}>
      {props.children}
    </OrderContext.Provider>
  );
}