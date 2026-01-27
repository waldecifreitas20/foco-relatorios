import type { Client } from "./Client";
import { type Service } from "./Service";
import { type ServiceStatus } from "./ServiceStatus";
import type { SpecialBudget } from "./SpecialBudget";

export type Order = {
  plate: string;
  client: Client;
  protocol: string;
  service: Service;
  status: ServiceStatus;
  providerProtocol: string;
  date: string;
  hour?: string;
  specialBudgets?: SpecialBudget[];
};

