import axios from "axios";
import type { Order } from "~/types/Order";

const api = axios.create({
  baseURL: process.env.API_URL,
});



async function getAll(date?: string,page = 0): Promise<{
  status: number;
  orders: Order[];
  page: number;
}> {

  let searchParams = "";
  if (date) {
    searchParams = `?createdAt=${date}&${page}&limit=200`;
  }
  
  const { data } = await api.get(`/all${searchParams}`);
  return data;
}



async function getOrder(ticket: string) {
  return await api.get(`/order/${ticket}`).then(response => response.data);
}



async function create(order:Order) {
  const { data } = await api.post("/create", order);
  return data;
}



async function update(orderPatch: Partial<Order>) {
  const { data } = await api.patch(`/update/${orderPatch.ticket}`, orderPatch);
  return data;
}



export const orderService = {
  getAll,
  getOrder,
  create,
  update
};
