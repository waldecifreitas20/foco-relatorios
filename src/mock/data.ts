import type { Client } from "../types/Client";
import type { Order } from "../types/Order";
import type { Service } from "../types/Service";
import type { ServiceStatus } from "../types/ServiceStatus";

export const ORDERS: Order[] = [
  {
    date: "2026-01-15",
    hour: "14:30",
    plate: "ABC1234",
    protocol: "as88-5",
    service: "Guincho",
    status: "Agendado",
    client: "Unidas Fleet",
    providerProtocol: "AMP002900",
  },
  {
    date: "2026-01-15",
    hour: "14:30",
    plate: "TGC1V34",
    protocol: "as88-5",
    service: "Guincho",
    status: "Concluído",
    client: "Unidas Fleet",
    providerProtocol: "AMP001900",
  },

  {
    date: "2026-01-13",
    hour: "14:30",
    plate: "SHJ5D90",
    protocol: "0s88-1",
    service: "Chaveiro",
    status: "Agendado",
    client: "Unidas Fleet",
    providerProtocol: "AMP008900",
  },
  
  {
    client: "Unidas Fleet",
    providerProtocol: "SAE089000",
    date: "2026-01-11",
    hour: "17:00",
    plate: "BYK0J89",
    protocol: "e5fd-2",
    service: "Guincho",
    status: "Aguardando direcionamento",
  },
  
  {
    date: "2026-01-11",
    hour: "17:00",
    plate: "ADF9S77",
    protocol: "1a2b-3",
    service: "Guincho",
    status: "Cancelado",
    client: "Unidas Fleet",
    providerProtocol: "SAE007900",
  },
  
  {
    date: "2026-01-13",
    hour: "07:30",
    client: "Unidas Fleet",
    providerProtocol: "6576645",
    plate: "DGF8957",
    protocol: "0p6f-9",
    service: "Guincho",
    status: "Em andamento",
  },

  {
    client: "Unidas Fleet",
    providerProtocol: "68768",
    date: "2026-01-13",
    hour: "07:30",
    plate: "PHF8J57",
    protocol: "0e1f-5",
    service: "Guincho",
    status: "Aguardando aprovação de orçamento",
  },
];  

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
