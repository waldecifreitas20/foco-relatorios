import type { Client } from "./Client";
import type { Service } from "./Service";
import type { ServiceStatus } from "./ServiceStatus";

export type FormFilters = {
  client? : Client;
  status? : ServiceStatus;
  createdAt? : Date;
  updatedAt? : Date;
  service?: Service;
};