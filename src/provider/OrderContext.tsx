import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Order } from "../types/Order";
import type { SearchParams } from "../components/SearchBar";
import type { CreateOrderDto } from "../dto/CreateOderDto";

export const OrderContext = createContext({
  getOrders: () => [] as Order[],
  getOrdersByPlate: (_plate: string) => [] as Order[],
  search: (_params: SearchParams) => [] as Order[],
  createOrder: async (_order: CreateOrderDto) => {},
  getSpecialBudgets: () => [] as Order[],
});

const API = import.meta.env.VITE_API_URL;
export function OrderProvider(props: PropsWithChildren) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    fetch(`${API}/orders/all`)
      .then((r) => r.json())
      .then((response) => {
        setOrders(response.orders);
      })
      .catch(console.error);
  });

  function getOrders() {
    return orders;
  }

  function getOrdersByPlate(plate: string) {
    return orders.filter((order) => order.plate === plate);
  }

  async function createOrder(order: CreateOrderDto) {
    console.log(order);

    fetch(`${API}/orders/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
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

  return (
    <OrderContext.Provider
      value={{
        getOrders,
        getOrdersByPlate,
        search,
        createOrder,
        getSpecialBudgets,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
}