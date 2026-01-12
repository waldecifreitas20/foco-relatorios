import { type MtaRequest } from "./MtaRequest";
import { type Service } from "./Service";
import { type ServiceStatus } from "./ServiceStatus";
import type { SpecialBudget } from "./SpecialBudget";

export type Order = {
  plate: string;
  protocol: string;
  service: Service;
  status: ServiceStatus;
  date: string,
  hour: string,
  mta?: MtaRequest;
  specialBudget?: SpecialBudget;
};
