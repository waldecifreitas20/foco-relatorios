import axios, { AxiosError } from "axios";
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
  await axios.post(`${BASE_ROUTE}/create`, {
    plate: order.plate,
    protocol: order.protocol,
    client: order.client,
    providerProtocol: order.providerProtocol,
    status: order.status,
    service: order.service,
    date: order.date,
    hour: order.hour,
  }).catch((err: AxiosError<any>) => {
    const errorMessage = err.response?.data?.error?.toString() ?? "Não foi possivel concluir solicitação";
    throw new Error(errorMessage);
  });

  return true;
}


export const orderService = {
  getAll,
  createOrder
};