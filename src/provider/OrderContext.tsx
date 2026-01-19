import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Order } from "../types/Order";
import type { SearchParams } from "../components/SearchBar";
import type { CreateOrderDto, UpdateOrderDto } from "../dto/order.dto";
import { ORDERS } from "../mock/data";
import { api } from "../api/api";

export const OrderContext = createContext({
  getOrders: () => [] as Order[],
  getOrdersByPlate: (_plate: string) => [] as Order[],
  search: (_params: SearchParams) => [] as Order[],
  createOrder: async (_order: CreateOrderDto) => {},
  getSpecialBudgets: () => [] as Order[],
  getOrder: (_protocol: string) => ({} as Order | undefined),
  updateOrder: (_order: UpdateOrderDto) => {},
});

export function OrderProvider(props: PropsWithChildren) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    updateOrders();
  }, []);


  async function updateOrders() {
   await api.getOrders(orders => {    
     return setOrders(orders);
  });

  }


  function getOrders() {
    return orders;
  }



  function getOrder(protocol: string) {
    return orders.find((o) => o.protocol === protocol.trim());
  }



  function getOrdersByPlate(plate: string) {
    return orders.filter((order) => order.plate === plate);
  }



  async function createOrder(order: CreateOrderDto) {
    api.createOrder(order)
      .then((res) => {
        if (res.status === 200) {
          updateOrders();
          return alert("Sucesso!");
        }
        return alert(
          "Não foi possivel registrar este atendimento. Tente novamente mais tarde."
        );
      });
  }



  function search(params: SearchParams) {
    const results: Order[] = [];

    if (params.plate !== "") {
      orders.forEach((o) => {
        if (o.plate.includes(params.plate)) {
          results.push(o);
        }
      });
    }

    return results;
  }


  
  function getSpecialBudgets() {
    return orders.filter((o) => o.specialBudget !== undefined);
  }



  function updateOrder(order: UpdateOrderDto) {
    api.updateOrder(order)
    .then((res) => {
      if (res.status === 200) {
        return alert("Sucesso!");
      }
      return alert(
        "Não foi possivel registrar este atendimento. Tente novamente mais tarde."
      );
    });
  }

  return (
    <OrderContext.Provider
      value={{
        getOrders,
        getOrdersByPlate,
        search,
        createOrder,
        getSpecialBudgets,
        getOrder,
        updateOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
}