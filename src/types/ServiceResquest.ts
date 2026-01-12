import { type MtaRequest } from "./MtaRequest";
import { type Service } from "./Service";
import { type ServiceStatus } from "./ServiceStatus";

export type ServiceRequest = {
  plate: string;
  protocol: string;
  service: Service;
  status: ServiceStatus;
  datetime: string;
  mta?: MtaRequest;
  specialBuget?: number;
};
