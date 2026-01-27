import type { Client } from "../types/Client";
import type { Service } from "../types/Service";
import type { ServiceStatus } from "../types/ServiceStatus";

export const SERVICES: Service[] = [
  "Guincho",
  "Recarga de Bateria",
  "Chaveiro",
  "Desatolamento",
  "Pane Seca",
  "Troca de Bateria",
  "Troca de Pneu",
];

export const STATUS: ServiceStatus[] = [
  "Agendado",
  "Aguardando aprovação de orçamento",
  "Aguardando confirmação de Conclusão",
  "Aguardando confirmação de entrega",
  "Aguardando confirmação de remoção",
  "Aguardando direcionamento",
  "Cancelado",
  "Concluído",
  "Em andamento",
  "Em base",
  "Serviço frustrado",
];

export const CLIENTS: Client[] = [
  "Unidas Fleet",
  "Unidas Livre",
  "Unidas Seminovos",
  "Unidas Pesados",
  "Foco",
  "ITA",
  "Energisa",
  "Dahruj",
  "Motory",
  "NETA Auto",
  "Localiza",
  "GAC",
  "GWM",
];
