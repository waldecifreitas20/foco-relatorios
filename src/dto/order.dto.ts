import type { Client } from "../types/Client";
import type { MtaRequest } from "../types/MtaRequest";
import type { Service } from "../types/Service";
import type { ServiceStatus } from "../types/ServiceStatus";
import type { SpecialBudgetStatus } from "../types/SpecialBudget";

export interface CreateOrderDto {
  plate: string;
  client: Client;
  protocol: string;
  service: Service;
  status: ServiceStatus;
  providerProtocol: string;
  date: string;
  hour?: string;
  mta?: MtaRequest;
  specialBudget?: {
    cost: number;
    status: SpecialBudgetStatus;
  }
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
  mta?: MtaRequest;
}


export interface GetAllOrdersDto {
  orders: Array<{
    protocol: string,
    plate: string,
    client: Client,
    service: Service,
    status: ServiceStatus,
    providerProtocol: string,
    date: string,
    hour: string,
    mobilityService: [],
    specialBudgets: Array<{
      id: number,
      status: SpecialBudgetStatus,
      cost: number,
      reason?: string,
      orderProtocol: string,
    }>
  }>
}



