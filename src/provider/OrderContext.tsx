import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Order } from "../types/Order";
import { api } from "../api/api";
import type { CreateOrderDto } from "../dto/order.dto";
import type { SpecialBudget } from "../types/SpecialBudget";

export const OrderContext = createContext({
  getOrders: async () => [] as Order[],
  getOrder: (_protocol: string) => ({} as Order | undefined),
  getSpecialBudgets: () => [] as SpecialBudget[],
  createOrder: async (_order: CreateOrderDto) => { },
});

export function OrderProvider(props: PropsWithChildren) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.getOrders().then(({ orders }) => setOrders(orders));
  }, []);


  /* API FUNCTIONS */
  async function createOrder(order: CreateOrderDto) {
    try {
      const response = await api.createOrder(order);

      if (response.status !== 200) {
        throw new Error();
      }

      alert("Atendimento criado com sucesso!");
    } catch (error) {
      alert("Não foi possível registrar este atendimento. Tente novamente mais tarde");
    }
  }

  async function getOrders() {
    try {
      if (orders.length > 0) {
        return orders;
      }
      const { orders: updatedOrders } = await api.getOrders();
      setOrders(updatedOrders);
      return updatedOrders;
    } catch (error) {
      return orders;
    }
  }

  function getOrder(protocol: string) {
    return orders.find((o) => o.protocol === protocol.trim());
  }

  function getSpecialBudgets() {
    const specialBudgets: SpecialBudget[] = [];

    orders.forEach(o => {
      if (o.specialBudgets !== undefined) {
        specialBudgets.push(...o.specialBudgets);
      }
    });

    return specialBudgets;
  }



  return (
    <OrderContext.Provider
      value={{
        getOrders,
        getOrder,
        getSpecialBudgets,
        createOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
}