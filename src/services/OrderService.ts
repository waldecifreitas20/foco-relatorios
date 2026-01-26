import axios from "axios";
import type { CreateOrderDto, GetAllOrdersDto } from "../dto/order.dto";
import type { Order } from "../types/Order";

const API_URL = import.meta.env.VITE_API_URL;
const BASE_ROUTE = `${API_URL}/orders`;

async function getAll(): Promise<GetAllOrdersDto> {
  try {
    const { status, data } = await axios.get(`${BASE_ROUTE}/all`);

    if (!data || status !== 200) {
      throw new Error();
    }

    return { orders: data.orders as Order[] };

  } catch (error) {
    console.error(error);
    throw new Error("Não foi possível acessar este recurso no momento. Tente novamente mais tarde.");
  }
}


async function createOrder(order: CreateOrderDto) {
  try {
    
  } catch (error) {
    
  }
}


export const orderService = {
  getAll,
  createOrder
};