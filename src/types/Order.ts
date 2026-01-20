import type { Client } from "./Client";
import { type MtaRequest } from "./MtaRequest";
import { type Service } from "./Service";
import { type ServiceStatus } from "./ServiceStatus";
import type { SpecialBudget } from "./SpecialBudget";

export type Order = {
  plate: string;
  client: Client;
  protocol: string;
  service: Service;
  status: ServiceStatus;
  partner: "Socorreae" | "Amparo" | "Cadê Guincho";
  date: string;
  hour: string;
  mta?: MtaRequest;
  specialBudget?: SpecialBudget;
};
