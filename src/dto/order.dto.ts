import type { Client } from "../types/Client";
import type { Order } from "../types/Order";
import type { Service } from "../types/Service";
import type { ServiceStatus } from "../types/ServiceStatus";

export interface CreateOrderDto {
  plate: string;
  client: Client;
  protocol: string;
  service: Service;
  status: ServiceStatus;
  providerProtocol: string;
  date: string;
  hour?: string;
}

export interface UpdateOrderDto {
  protocol: string;
  plate?: string;
  client?: Client;
  service?: Service;
  status?: ServiceStatus;
  providerProtocol?: string;
  date?: string;
  hour?: string;
}


export interface GetAllOrdersDto {
  orders: Array<Order>;
}
