import type { Client } from "./Client";
import type { Provider } from "./Provider";
import { type Service } from "./Service";
import { type ServiceStatus } from "./ServiceStatus";

export type Order = {
  plate: string;
  client: Client;
  ticket: string;
  service: Service;
  provider: Provider;
  status: ServiceStatus;
  createdAt: string;
  updatedAt: string;
  notes: string[];
  eta?: number;
  agentName?: string;
  hasChecklist?: boolean;
};

