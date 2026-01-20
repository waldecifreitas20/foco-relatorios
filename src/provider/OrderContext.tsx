import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Order } from "../types/Order";
import type { SearchParams } from "../components/SearchBar";
import type { CreateOrderDto, UpdateOrderDto } from "../dto/order.dto";
import { api } from "../api/api";

export const OrderContext = createContext({
  getOrders: () => [] as Order[],
  getOrdersByPlate: (_plate: string) => [] as Order[],
  getSpecialBudgets: () => [] as Order[],
  getOrder: (_protocol: string) => ({} as Order | undefined),
  search: async (_params: SearchParams) => [] as Order[],
  createOrder: async (_order: CreateOrderDto) => {},
  updateOrder: async (_order: UpdateOrderDto) => {},
});

export function OrderProvider(props: PropsWithChildren) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    updateOrders();
  }, []);



  /* API FUNCTIONS */
  async function updateOrders() {
   await api.getOrders(orders => {    
     return setOrders(orders);
  });

  }

  async function createOrder(order: CreateOrderDto) {
    api
      .createOrder(order)
      .then((res) => alert(res.status))
      .catch((error) => {
        console.error(error);
        throw new Error(
          "Não foi possível salvar os dados deste atendimento. Tente novamente mais tarde."
        );
      });
  }


  async function updateOrder(order: UpdateOrderDto) {
    await api.updateOrder(order)
    .catch(error => {
      console.error(error);
      throw new Error("Não foi possível salvar os dados deste atendimento. Tente novamente mais tarde.")
    });
  }

  /* INTERNAL FUNCTIONS */
  function getOrders() {
    return orders;
  }



  function getOrder(protocol: string) {
    return orders.find((o) => o.protocol === protocol.trim());
  }



  function getOrdersByPlate(plate: string) {
    return orders.filter((order) => order.plate === plate);
  }

  async function search(params: SearchParams) {
    await updateOrders();

    const results: Order[] = [];

    if (params.plate !== "") {
      orders.forEach((o) => {
        if (o.plate.includes(params.plate)) {
          results.push(o);
        }
      });
    }
    
    if (params.service !== "") {
      orders.forEach((o) => {
        if (o.service === params.service) {
          results.push(o);
        }
      });
    }
    
    if (params.status !== "") {
      orders.forEach((o) => {
        if (o.status === params.status) {
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
        getOrder,
        updateOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
}