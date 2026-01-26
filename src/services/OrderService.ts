import axios from "axios";
import type { GetAllOrdersDto } from "../dto/order.dto";

const API_URL = import.meta.env.VITE_API_URL;
const BASE_ROUTE = `${API_URL}/orders`;

async function getAll(): Promise<GetAllOrdersDto | undefined> {
  try {
    const {status, data: response} = await axios.get(`${BASE_ROUTE}/all`) as any;
    console.log(response);

    if (!response || status !== 200) {
      throw new Error();
    }
    
    return { orders: response.orders };
    
  } catch (error) {
    console.error(error);
    throw new Error("Não foi possível acessar este recurso no momento. Tente novamente mais tarde.");
  }
}


export const orderService = {
  getAll,
};