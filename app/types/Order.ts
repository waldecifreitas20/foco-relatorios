import type { Client } from "./Client";
import type { Provider } from "./Provider";
import { type Service } from "./Service";
import { type ServiceStatus } from "./ServiceStatus";

export type Order = {
  plate: string;
  ticket: string;
  client: Client;
  service: Service;
  status: ServiceStatus;
  provider: Provider;
  createdAt?: Date;
  updatedAt?: Date;
  eta?: number;
  agentName?: string;
  notes?: string[];
  hasChecklist?: boolean;
};

