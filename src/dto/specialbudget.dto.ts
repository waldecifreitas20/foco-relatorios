import type { Client } from "../types/Client";
import type { Service } from "../types/Service";
import type { SpecialBudgetReason, SpecialBudgetStatus } from "../types/SpecialBudget";

export interface CreateSpecialBudgetDto {
  cost: number;
  status: SpecialBudgetStatus;
  protocol: string;
  reason?: string;
}


export interface UpdateSpecialBudgetDto {
  id: number;
  cost?: number;
  protocol?: string;
  status?: SpecialBudgetStatus;
  reason?: string;
}


export interface GetSpecialBudgetDto {
  id: number,
  status: SpecialBudgetStatus,
  cost: number,
  reason: SpecialBudgetReason,
  orderProtocol: string,
  order: {
    protocol: string,
    plate: string,
    client: Client,
    service: Service,
    status: SpecialBudgetStatus,
    providerProtocol: string,
    date: string,
    hour: string,
  }
}