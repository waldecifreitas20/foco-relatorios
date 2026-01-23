import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Order } from "../types/Order";
import type { SearchParams } from "../components/SearchBar";
import { api } from "../api/api";
import type { AddSpecialBudgetDto } from "../dto/specialbudget.dto";
import type { CreateOrderDto } from "../dto/order.dto";
import type { SpecialBudget } from "../types/SpecialBudget";

export const OrderContext = createContext({
  getOrders: async () => [] as Order[],
  getOrdersByPlate: (_plate: string) => [] as Order[],
  getSpecialBudgets: () => [] as SpecialBudget[],
  getOrder: (_protocol: string) => ({} as Order | undefined),
  search: async (_params: SearchParams) => [] as Order[],
  createOrder: async (_order: CreateOrderDto) => { },
  addSpecialBudget: async (_specialBudget: AddSpecialBudgetDto) => { },
});

export function OrderProvider(props: PropsWithChildren) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    api.getOrders().then(({ orders }) => setOrders(orders));
  }, []);


  /* API FUNCTIONS */
  async function createOrder(order: CreateOrderDto) {
    try {
      const { specialBudget, ...onlyOrder } = order;

      if (specialBudget) {
        specialBudget.cost = Number(specialBudget.cost);
      }

      const response = await api.createOrder({
        ...onlyOrder,
        specialBudget
      });

      if (response.status !== 200) {
        throw new Error();
      }

      alert("Atendimento criado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Não foi possível registrar este atendimento. Tente novamente mais tarde");
    }
  }

  async function addSpecialBudget(specialBudget: AddSpecialBudgetDto) { }


  async function search(params: SearchParams) {
    let results: Order[] = [];

    if (params.plate !== "") {
      results = orders.filter((o) => o.plate.includes(params.plate));
    }

    if (params.service !== "") {
      if (results.length === 0) {
        results = orders.filter((o) => o.service === params.service);
      } else {
        results = results.filter((o) => o.service === params.service);
      }
    }

    if (params.status !== "") {
      if (results.length === 0) {
        results = orders.filter((o) => o.status === params.status);
      } else {
        results = results.filter((o) => o.status === params.status);
      }
    }

    return results;
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
      console.log(error);
      return orders;
    }
  }

  function getOrder(protocol: string) {
    return orders.find((o) => o.protocol === protocol.trim());
  }

  function getOrdersByPlate(plate: string) {
    return orders.filter((order) => order.plate === plate);
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
        getOrdersByPlate,
        search,
        createOrder,
        getSpecialBudgets,
        getOrder,
        addSpecialBudget,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
}