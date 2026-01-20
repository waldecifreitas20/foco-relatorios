import type { CreateOrderDto, UpdateOrderDto } from "../dto/order.dto";
import { ORDERS } from "../mock/data";
import type { Order } from "../types/Order";

const API_URL = import.meta.env.VITE_API_URL;



async function createOrder(order: CreateOrderDto) {
  return await fetch(`${API_URL}/orders/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  }).then((res) => res.json());
}


async function getOrders(fnCallback: (orders: Order[]) => void) {
  return fnCallback(ORDERS);
  /* fetch(`${API_URL}/orders/all`)
    .then((r) => r.json())
    .then((_response) => {      
      return fnCallback(); PROD CODE;
    })
    .catch(console.error); */
}


async function updateOrder(order: UpdateOrderDto) {
  return await fetch(`${API_URL}/orders/update`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order)
  });

}


export const api = {
  getOrders,
  createOrder,
  updateOrder,
};
