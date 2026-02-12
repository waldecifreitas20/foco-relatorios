import type { Client } from "./Client";
import type { Service } from "./Service";
import type { ServiceStatus } from "./ServiceStatus";

export type Order = {
  ticket: string;
  service: Service;
  plate: string;
  client: Client;
  provider: string;
  createdAt: string;
  updatedAt: string;
  status: ServiceStatus;
  agentName?: string;
  notes?: string[];
  eta?: number;
  hasChecklist?: string;
};


