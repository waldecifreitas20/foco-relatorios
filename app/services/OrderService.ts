import axios from "axios";
import type { Order } from "~/types/Order";



const api = axios.create({
  baseURL: process.env.API_URL,
});

async function getAll(date?: string, page=0): Promise<{
  status: number;
  orders: Order[];
  page: number;
}> {
  const { data } = await api.get("/all");
  
  return data;
}

export const orderService = {
  getAll,
};
