import type { Order } from "../types/Order";

export const ORDERS: Order[] = [
  {
    date: "2026-01-15",
    hour: "14:30",
    plate: "ABC1234",
    protocol: "as88-5",
    service: "Guincho",
    status: "Agendado",
  },
  {
    date: "2026-01-15",
    hour: "14:30",
    plate: "TGC1V34",
    protocol: "as88-5",
    service: "Guincho",
    status: "Concluído",
  },

  {
    date: "2026-01-13",
    hour: "14:30",
    plate: "SHJ5D90",
    protocol: "0s88-1",
    service: "Chaveiro",
    status: "Agendado",
  },
  
  {
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
  },

  {
    date: "2026-01-13",
    hour: "07:30",
    plate: "PHF8J57",
    protocol: "0e1f-5",
    service: "Guincho",
    status: "Em andamento",
    mta: {
      status: "Em andamento",
      cost: 253,
      destiny: "R. João Nogueira 45, São Paulo - SP  Cep 55511-555",
      passengersQtd: 2,
      plate: "TAV8K36",
      totalDistance: 87,
      type: "Táxi",
      vehicleModel: "Fiat Mobi",
    },

    specialBudget: {
      destiny: "R. João Nogueira 45, São Paulo - SP  Cep 55511-555",
      origin:  "Av. das Amoreiras 987, Campinas - SP  Cep 55511-555",
      workerBase:  "R. dos Coqueiros 123, Campinas - SP  Cep 55511-555",
      reason: "Trajeto Longo ",
      explanation: "Necessário autorização para trajeto acima de 300km",
      cost: 10130.75,
      status: "Recusado",
      daysParked: 1,
    }
  },

  {
    date: "2026-01-13",
    hour: "07:30",
    plate: "PHF8J57",
    protocol: "0e1f-5",
    service: "Guincho",
    status: "Aguardando aprovação de orçamento",
    mta: {
      status: "Aguardando Aprovação",
      cost: 2530,
      destiny: "R. João Nogueira 45, São Paulo - SP  Cep 55511-555",
      passengersQtd: 4,
      plate: "BYV0K96",
      totalDistance: 857,
      type: "Táxi",
      vehicleModel: "Chevrolet Onix",
    },
    specialBudget: {
      destiny: "R. João Nogueira 45, São Paulo - SP  Cep 55511-555",
      origin:  "Av. das Amoreiras 987, Campinas - SP  Cep 55511-555",
      workerBase:  "R. dos Coqueiros 123, Campinas - SP  Cep 55511-555",
      reason: "Trajeto Longo ",
      explanation: "Necessário autorização para trajeto acima de 300km",
      cost: 2530,
      status: "Aguardando aprovação",
      daysParked: 1,
    }
  },
];  