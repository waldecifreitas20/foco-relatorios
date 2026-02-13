import type { Client } from "./Client";
import type { Service } from "./Service";
import type { ServiceStatus } from "./ServiceStatus";

export type FormFilters = {
  client? : Client;
  statuses? : ServiceStatus[];
  services?: Service[];
  createdAt? : Date;
  updatedAt? : Date;
};