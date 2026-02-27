import type { Provider } from "~/types/Provider";
import type { Client } from "~/types/Client";
import type { Service } from "~/types/Service";
import type { ServiceStatus } from "~/types/ServiceStatus";

export interface CreateOrderDto {
  plate: string;
  ticket: string;
  client: Client;
  service: Service;
  status: ServiceStatus;
  provider: Provider;
  date: string;
  notes: string[];
  eta?: number;
  agentName?: string;
  hasChecklist?: boolean;
}
