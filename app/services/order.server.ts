import axios from "axios";
import type { Order } from "~/types/Order";

const api = axios.create({
  baseURL: process.env.API_URL,
});

async function getAll(
  date?: string,
  anyDate = false,
  page = 0,
): Promise<{
  status: number;
  orders: Order[];
  page: number;
}> {
  const dateParam = date ? `createdAt=${date}&limit=200` : "";
  const searchParams = anyDate ? "anyDate=true" : dateParam;
  const { data } = await api.get(`/all?${searchParams}`);

  return data;
}

async function getOrder(ticket: string) {
  return await api.get(`/order/${ticket}`).then(response => response.data);
}

async function create(order:Order) {
  const {data} = await api.post("/create", order);
  return data;
}

async function update(orderPatch: Partial<Order>) {
  const {data} = await api.patch(`/update/${orderPatch.ticket}`, orderPatch);
  return data;
}

export const orderService = {
  getAll,
  getOrder,
  create,
  update
};
