import type { CreateOrderDto, UpdateOrderDto } from "../dto/order.dto";


const API_URL = import.meta.env.VITE_API_URL;


async function createOrder(order: CreateOrderDto) {
  return await fetch(`${API_URL}/orders/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  })
}


async function getOrders() {
  return fetch(`${API_URL}/orders/all`)
  .then((res) => res.json());
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
