import type { Service } from "../types/Service";

export interface CreateOrderDto {
  protocol: string;
  plate: string;
  date: string;
  hour?: string;
  status: string;
  service: Service;
}


export interface UpdateOrderDto {
  protocol: string;
  plate?: string;
  date?: string;
  hour?: string;
  status?: string;
  service?: Service;
}